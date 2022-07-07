export type AddPostDto= {

    title: string;

    description: string;

    imageUrl?: string;

    videoUrl?: string;

    author: {id?: number};
}