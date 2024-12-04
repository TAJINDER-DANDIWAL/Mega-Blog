import config from "../config/config"
import { Client, Account, ID } from "appwrite";



class AuthService {
    client = new Client()
    account;

    constructor(){
        this.client
        .setEndpoint(config.appWriteUrl)
        .setProject(config.appWriteProjectId);

        this.account = new Account(this.client);
    }

    async CreateAccount({email, password, name}){
        try{
            await this.account.create(
                ID.unique(),
                email,
                password,
                name
            )
        }
        catch(error){
            console.log(`${OOPS} error`);
            throw error;
        }
    }
}

export const authservice = new AuthService();
