import { User } from "../../../domain/users/User";
import * as typeUser from "../../../types/users.types"
import { Request, Response } from "express";

export const userCreate = (req: Request, res: Response): typeUser.User => {


    return {
        id:         1,
        email:      'albert@gmail.com',
        password:   'albert12', 
    }
}