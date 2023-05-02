

export interface Post {

   id:        Number;
   title:     String;
   extract:   String;
   content:   String;
   updatedAt: Date;
   createdAt: Date;
}

export interface PostSave {

    title:     String;
    extract:   String;
    content:   String;
    createdAt: Date;
}