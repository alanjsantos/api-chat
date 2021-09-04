import { getCustomRepository, Repository } from "typeorm";
import Messages from "../entities/Messages";
import MessagesRepository from "../repositories/MessagesRepository";

interface IMessagesCreate {
    admin_id?: string;
    text: string;
    user_id: string
}

export default class MessagesService {
    private messagesRepository: Repository<Messages>;

    constructor() {
        this.messagesRepository = getCustomRepository(MessagesRepository);
    }

    public async create({admin_id, text, user_id}: IMessagesCreate) {
        
        const messages =  this.messagesRepository.create({
                admin_id,
                text,
                user_id
        })

        await this.messagesRepository.save(messages)

        return messages;
    }

    public async listByUser(user_id: string) {

        const list  = await this.messagesRepository.find({
            where: {user_id},
            relations: ['user']
        })
        return list;
    }
}