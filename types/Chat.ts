import Company from "./Company";
import User from "./User";

export default interface Chat {
    Company: Company;
    Student: User;
    ChatMessages: [];
  }
