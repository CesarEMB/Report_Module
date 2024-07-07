import axios from "./index";

export const GetUser = (id: string, token:string) => {

    const headers = {
        Authorization: `Bearer ${token}`,
      };

    return axios.get(`student/${id}`, { headers })
}


export const GetCareer = (id: string) =>{
    return axios.get(`career/${id}`)
}