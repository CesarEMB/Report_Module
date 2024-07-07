import { useState } from "react";

const useDate = () => {

    const [date, setDate] = useState({
        day: "",
        week: "",
        month: "",
        year: ""
    })

    const getDate = () => {
        const date =  new Date();

        //Día

        const day = date.getDate().toLocaleString();

        //Dia de la semana
        const getWeek = date.getDay();
        const week = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];

        const download_week = week[getWeek]

        //Mes
        const getMonth = date.getMonth();

        const month = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']

        const download_month = month[getMonth]

        //Año

        const getYear = date.getFullYear().toString()

        setDate({
            day: day,
            week: download_week,
            month: download_month,
            year: getYear
        })
    }

    return {
        date,
        getDate
    }
}

export { useDate }