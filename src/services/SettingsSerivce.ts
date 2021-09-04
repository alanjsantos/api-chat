import { getCustomRepository, Repository } from "typeorm";
import Settings from "../entities/Settings";
import SettingsRepository from "../repositories/SettingsRepository";

interface ISettingsCreate {
    chat: boolean;
    username: string;
}

export default class SettingsService {
    private settingsRepository: Repository<Settings>
 
    constructor() {
        this.settingsRepository = getCustomRepository(SettingsRepository);
    }
   
    public async create({chat, username}: ISettingsCreate) {
        const userExists = await this.settingsRepository.findOne({
            username
        })

        if (userExists) {
            throw new Error('User already exists!');
        }
        
        const settings = this.settingsRepository.create({
                chat,
                username,
        })

        return settings;
    }
}