import { Post, PostSave } from "../../types/posts.types"
import Posts from "./Posts"

// userRepository
export const userSave = async (data: PostSave): Promise<void> => {

    try {

        const newPost = new Posts();

        newPost.title = 'Mi titulo del post',
        newPost.extract = 'Mi titulo del post',
        newPost.content = 'Mi titulo del post',
        newPost.createdAt = new Date()
    } catch (error) {
        new Error(`Se ha producido un error: \n ${error}`)
    }
}

export const userFind = (): Post => {


    return {
        
        id: 1,
        title: "Mi primera publicación",
        extract: "Mi primera publicación",
        content: "¡Hola, mundo!",
        updatedAt: new Date(),
        createdAt: new Date(),
    }

}


// const {

//     title,
//     extract,
//     content,
//     createdAt
// } = data;