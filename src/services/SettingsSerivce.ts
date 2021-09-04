import { getCustomRepository } from "typeorm";
import Settings from "../entities/Settings";
import SettingsRepository from "../repositories/SettingsRepository";

interface ISettingsCreate {
    chat: boolean;
    username: string;
}

export default class SettingsService {
   
    public async create({chat, username}: ISettingsCreate) {
        const settingsRepository = getCustomRepository(SettingsRepository)    
        const userExists = await settingsRepository.findOne({
            username
        })

        if (userExists) {
            throw new Error('User already exists!');
        }
        
        const settings =   settingsRepository.create({
                chat,
                username,
        })

        return settings;
    }
}