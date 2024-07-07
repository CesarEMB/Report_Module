import { getDirector } from "../api/director";
import { GetCareer } from "../api/user";

//Interface
import { user } from "../interface/user.interface";



const useConst_EstData = () => {


    const getConst_EstData = async (user: user) => {
        //Datos del estudiante
        const { career, first_name, last_name, second_name, second_surname, CI, cohort, study_location } = user;

        try {
            const directorResponse = await getDirector()

            //Datos del director registrado
            const director = directorResponse.data;


            const careerResponse = await GetCareer(career);

            //Datos de la carrera
            const careerData = careerResponse.data;

            return {
                student: {
                    ci: CI,
                    first_name: first_name,
                    last_name: last_name,
                    second_name: second_name,
                    second_surname: second_surname,
                    cohort: cohort,
                    study_location: study_location,
                    career: careerData.name
                },
                director: director[0].name
            }

        } catch (error) {
            console.log(error)
        }

    }

    return {
        getConst_EstData
    }
}

export { useConst_EstData }