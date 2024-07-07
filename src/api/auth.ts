import axios from "./index";


export const loginRequest = (email:string, password: string) => {
    return axios.post("auth/login", {email, password})
}