import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";

class AuthService {
  client = new Client();
  account;
  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.account = new Account(this.client);
  }
  async CreateAccount({ email, password, name }) {
    try {
      let userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (userAccount) {
        return this.Login({ email, password });
      } else {
        return userAccount;
      }
    } catch (error) {
      console.log(`${OOPS} error`);
    }
  }
  async Login({ email, password }) {
    try {
      return await this.account.createEmailPasswordSession(email, password);
    } catch (error) {
      console.log(`${OOPS} error`);
    }
  }
  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.log(`${"Problem happened"} error`);
    }
    return null;
  }
  async Logout() {
    try {
      return await this.account.deleteSessions();
    } catch (error) {
      console.log(`${"Unable to logout"} error`);
    }
  }
}
const authservice = new AuthService();
export default authservice;