import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import SettingsRepository from "../repositories/SettingsRepository";
import SettingsService from "../services/SettingsSerivce";

export default class SettingsController {

    public async create(request: Request, response: Response) {
        const {chat, username} = request.body;

        const settingsService = new SettingsService();

        try {
            const settings = await settingsService.create({chat, username});
            
            return response.status(201).json(settings);
       
        } catch (error) {
            return response.status(400).json({
                message: error.message
            })
            
        }
        
    }
}