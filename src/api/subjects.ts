import axios from "./index";

//Obetener la materia espeficica segun el id
export const GetSubject = (id:string) => {
    return axios.get(`subject/${id}`)
}

//Obetener la lista de materias segun el año academico
export const GetListSubjects = () => {
    return axios.get(`years_sub`)
}

export const GetPeriodList = (id:string) => {
    return axios.get(`periodList/${id}`)
}

export const GetPeriod = (id:string) => {
    return axios.get(`period/${id}`)
}

export const GetEnrolledSubject = (id:string) => {
    return axios.get(`enrolled_sub/${id}`)
}