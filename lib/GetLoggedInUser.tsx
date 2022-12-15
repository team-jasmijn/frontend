import backendFetch from "./backendFetch";
import User from "../types/User";

export default async function () : Promise<User> {
    return (await backendFetch<User>("GET", "account")) as User;
}