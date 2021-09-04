import { Request, Response } from "express";
import MessagesService from "../services/MessagesService";

export default class MessagesController {


    public async create(request: Request, response: Response): Promise<Response> {
        const {admin_id, user_id, text} = request.body;
        const messagesService = new MessagesService();

        const messages = await messagesService.create({admin_id, user_id, text})

        return response.status(201).json(messages);
    }

    public async showByUser(request: Request, response: Response): Promise<Response> {
        const {id} = request.params;
        const messagesService = new MessagesService();

        const list = await messagesService.listByUser(id)

        return response.json(list);

    }
}