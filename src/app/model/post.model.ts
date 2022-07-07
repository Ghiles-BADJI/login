import { User } from "./user.model";

export type UserPost= {

    id: number;
    
    title: string;
    
    description: string;

    imageUrl?: string;

    videoUrl?: string;

    author: User;


    likedBy: User[];

}