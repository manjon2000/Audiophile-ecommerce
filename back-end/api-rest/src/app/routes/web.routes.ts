import { Router } from "express"
import { userSave } from "../../domain/posts/PostsServices"


export const router = Router()

router.get('v1/auth/register', function(req,res) {

    

    res.json({code: 200, message: 'success route register'})

})