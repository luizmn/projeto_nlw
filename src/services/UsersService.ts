import { UsersRepository } from "../repositories/UsersRepository";
import { getCustomRepository } from "typeorm";

class UsersService {
    async create( email : string ) {
        const usersRepository = getCustomRepository(UsersRepository);

        //Check if user exists
        const userExists = await usersRepository.findOne({email});

        //If it exists, return user
        if (userExists){
            return userExists;
        } 
        
        //If does not exists, save user

        const user = usersRepository.create({
            email
        });
        await usersRepository.save(user);

        return user;

    }
}    

export { UsersService }