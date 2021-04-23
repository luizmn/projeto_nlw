import { Message } from "../entities/Messages";
import {Request, Response } from "express";
import { MessagesRepository } from "../repositories/MessagesRepository";
import { getCustomRepository, Repository } from "typeorm";

interface IMessageCreate {
    admin_id?: string;
    text: string;
    user_id: string;
}

class MessagesService {
    //Create private method to use just inside the class Messages instead of repeating the method many times.
    
    private messagesRepository: Repository<Message>;

    constructor() {
        this.messagesRepository = getCustomRepository(MessagesRepository);
    }
    
    async create({ admin_id, text, user_id }: IMessageCreate) {

        const message = this.messagesRepository.create({
            admin_id,
            text,
            user_id,
        });

        await this.messagesRepository.save(message);

        return message;
    }
    
    async listByUser(user_id: string) {
        
        const list = await this.messagesRepository.find({
            where: {user_id}, 
            relations: ["user"], //Get other info related to the user table
        });
         
        return list;
    };
}

export { MessagesService };