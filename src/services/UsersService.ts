import { User } from "../entities/Users";
import { UsersRepository } from "../repositories/UsersRepository";
import { getCustomRepository, Repository } from "typeorm";

class UsersService {
    private usersRepository:Repository<User>;

    constructor () {
        this.usersRepository = getCustomRepository(UsersRepository);
    }
    
    async create( email : string ) {


        //Check if user exists
        const userExists = await this.usersRepository.findOne({email});

        //If it exists, return user
        if (userExists){
            return userExists;
        } 
        
        //If does not exists, save user

        const user = this.usersRepository.create({
            email
        });

        await this.usersRepository.save(user);

        return user;

    }
}    

export { UsersService }