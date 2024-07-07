//URL de la api

export const BASE_URL = import.meta.env.VITE_API_URL || import.meta.env.VITE_API_DEV_URL;

//URL de la pagina

export const WEB_URL = import.meta.env.VITE_WEB_URL || "http://localhost:5173";


//Env para definir que se encuentra en desarrollo

export const APP_STATUS = import.meta.env.VITE_APP_STATUS || "development"