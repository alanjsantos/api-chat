import { Request, Response } from "express";
import UsersService from "../services/UsersService";

export default class UsersController {

    public async create(request: Request, response: Response): Promise<Response> {
        const {email} = request.body;

        const usersService = new UsersService();
        
        const users = await usersService.create(email);
        
        return response.status(201).json(users);
     
    }
}