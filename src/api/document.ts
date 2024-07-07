import axios from "./index"; 

export const savedDocument = (document: object) => {
    return axios.post(`document`, document)
}

export const getDocument = (id: string) => {
    return axios.get(`document/${id}`)
}