import axios from "./index"; 

export const getDirector = () => {
    return axios.get('director')
}

