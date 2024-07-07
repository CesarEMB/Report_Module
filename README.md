Para ejecutar el sistema es necesario tener conocimiento de Node.js

npm run dev //Para correr el sistema en un entorno de desarrollo
npm run build //Para construir el entorno de producción 
npm run preview // Para ejecutar el entorno de producción

Variables de entorno del sistema:

//Para Dev 

VITE_API_DEV_URL="" //Configuración de la API para el uso en un entorno de desarrollo, por ejemplo, local

//Necesarias por el sistema 

VITE_WEB_URL="" //URL base de la página donde se encuentra desplegado el sistema, necesaria para el funcionamiento óptimo del QR.

VITE_API_URL="" //URL donde se encuentra desplegada la API necesaria para el funcionamiento del sistema.