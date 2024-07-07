import { GetPeriodList, GetPeriod, GetEnrolledSubject } from "../api/subjects";
import { GetCareer } from "../api/user";
import { user } from "../interface/user.interface";

//Interface



interface enrolled {
    subject: string
}

const useHorarioData = () => {

    const getHorarioData = async (user: user) => {

        //Datos del estudiante
        const { career, _id, first_name, last_name, second_name, second_surname, CI } = user;

        try {

            const Career = await GetCareer(career);

            //Datos de la carrera
            const { name, cod } = Career.data;

            const periodsList = await GetPeriodList(_id);

            const { periods } = periodsList.data;

            if (!Array.isArray(periods)) return

            const periodsListPromises = periods.map(async (period) => {
                const periodResponse = await GetPeriod(period.period);
                const periodData = periodResponse.data;
                return periodData;
            });


            const periodsListData = await Promise.all(periodsListPromises);

            //Dato del periodo cursando
            const periodActive = periodsListData.find((period) => period.status === true)


            const enrolledSubjectsPromises = periodActive.enrolled_sub.map(async (enrolled: enrolled) => {
                const enrolledResponse = await GetEnrolledSubject(enrolled.subject)
                const enrolledData = enrolledResponse.data
                return enrolledData
            })

            //Datos de las materias inscritas
            const enrolledSubjects = await Promise.all(enrolledSubjectsPromises);

            return {
                student: {
                    ci: CI,
                    first_name: first_name,
                    last_name: last_name,
                    second_name: second_name,
                    second_surname: second_surname,
                },
                careerData: {
                    name: name,
                    cod: cod,
                    period: periodActive.period
                },
                listEnrolled: enrolledSubjects
            }
        } catch (error) {
            console.error(error);
        }


    }
    return {
        getHorarioData
    }
}

export { useHorarioData }