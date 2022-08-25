import { AfterViewInit, Component,ViewChild, OnInit } from '@angular/core';
import { User } from '../model/user.model';
import { ContactsHttpService } from './contacts-http.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

export interface UserData {
  id: number;
  lastName: string;
  firstName: string;
  email: string;
  alreadyAdded: boolean;
}


@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements AfterViewInit, OnInit {

  displayedColumns: string[] = ['lastName', 'firstName', 'email', 'alreadyAdded'];
  dataSource: MatTableDataSource<UserData> = new MatTableDataSource<UserData>([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  constructor(private readonly contactshtppservice : ContactsHttpService ) {
 
    // Assign the data to the data source for the table to render
    }

  ngOnInit(): void {
    this.getAllUsers()
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  

   private getAllUsers() {
    const user = JSON.parse(localStorage.getItem('user') || '{}')
    const friends : User[] = user.friends;
    
    this.contactshtppservice.getAllUsers().subscribe((allUsers) => {

      const userDataList: UserData[] = allUsers.map((user) => ({
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        alreadyAdded: friends.some((friend) => friend.id === user.id),
      }))

      this.dataSource = new MatTableDataSource(userDataList);
    }

    )
  }

  addFriend(friendId: number){
    const user = JSON.parse(localStorage.getItem('user') || '{}')
    const userId = user.id;

      this.contactshtppservice.addFriendById(userId, friendId).subscribe((user) => {
        localStorage.setItem('user', JSON.stringify(user));
        this.getAllUsers()
      })

  }

}

