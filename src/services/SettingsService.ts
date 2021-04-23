import { SettingsRepository } from "../repositories/SettingsRepository";
import { getCustomRepository } from "typeorm";

interface ISettingsCreate {
    chat: boolean;
    username: string;
}

class SettingsService {
    async create({ chat, username } : ISettingsCreate ){
        const settingsRepository = getCustomRepository(SettingsRepository);
    
        const userAlreadyExists = await settingsRepository.findOne({        username,
        });

        if(userAlreadyExists) {
            throw new Error("User already exists!")
        }

        const settings = settingsRepository.create({
            chat,
            username,
        });
    
        await settingsRepository.save(settings);
    }
}

export { SettingsService }