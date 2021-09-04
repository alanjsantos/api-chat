import { getCustomRepository } from "typeorm";
import Users from "../entities/Users";
import MessagesRepository from "../repositories/MessagesRepository";

interface IMessagesCreate {
    admin_id: string;
    text: string;
    user_id: string
}

export default class MessagesService {
   
    public async create({admin_id, text, user_id}: IMessagesCreate) {
        const messagesRepository = getCustomRepository(MessagesRepository)  
        
        const messages =  messagesRepository.create({
                admin_id,
                text,
                user_id
        })

        await messagesRepository.save(messages)

        return messages;
    }
}