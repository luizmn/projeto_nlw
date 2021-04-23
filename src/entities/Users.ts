import { Entity, Column, CreateDateColumn, UpdateDateColumn, PrimaryColumn, OneToMany } from "typeorm";
import { v4 as uuid } from "uuid"
// import { Messages } from "./Messages";

@Entity("users")
class User {
    @PrimaryColumn()
    id: string;
    
    @Column()
    email: string;
    
    @CreateDateColumn()
    created_at: Date;

    // @OneToMany(
    //     type => Messages, 
    //     messages => messages.users
    //     ) 
    //     messages: Messages [];

    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }

}

export { User }