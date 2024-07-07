import { GetPeriodList, GetPeriod, GetEnrolledSubject } from "../api/subjects";
import { GetCareer } from "../api/user";


//Interface
import { user } from "../interface/user.interface";


interface periods {
    period: string
}

interface subjects {
    subject: string
}

interface subject {
    qualification: number,
    subject: {
        academic_year: string,
        classroom: [],
        cod: string,
        name: string,
        section: string
        u_c: number
    }
}
const useConst_NotasData = () => {


    const getConst_NotasData = async (user: user) => {
        //Datos del estudiante
        const { first_name, last_name, second_name, second_surname, CI, cohort, career, status, _id } = user;
        try {
            const careerResponse = await GetCareer(career);

            //Datos de la carrera
            const careerData = careerResponse.data;

            const responseListOfPeriods = await GetPeriodList(_id);
            const listOfPeriods = responseListOfPeriods.data;

            if (!Array.isArray(listOfPeriods.periods)) return

            const periodsPromises = listOfPeriods.periods.map(async (periods: periods) => {
                const periodResponse = await GetPeriod(periods.period);
                const period = periodResponse.data
                return period
            })

            //Obtencion de los datos de los periodos
            const periodsData = await Promise.all(periodsPromises);

            const periodCompleted = periodsData.filter((period) => period.status === false);

            const enrolledsPromises = periodCompleted.map(async (enrolled) => {
                const enrolledSubjectsPromises = enrolled.enrolled_sub.map(async (subject: subjects) => {
                    const enrolledResponse = await GetEnrolledSubject(subject.subject)
                    const enrolledData = enrolledResponse.data
                    return { ...subject, subject: enrolledData }
                })

                const subjectData = await Promise.all(enrolledSubjectsPromises);

                return { ...enrolled, enrolled_sub: subjectData }
            })

            //Obtencion de los datos de las materias
            const enrolledsData = await Promise.all(enrolledsPromises);

            let countQualification = 0;
            let totalU_C = 0;
            let totalQualification = 0;


            //Recorrido de los elementos para conseguir los "Totales" necesarios
            enrolledsData.forEach((period) => {
                const enrolled = period.enrolled_sub;

                enrolled.forEach((subject: subject) => {
                    totalQualification += subject.qualification;
                    countQualification++;
                    totalU_C += subject.subject.u_c;
                });
            });

            const notaTotal = totalQualification / countQualification;

            return {
                student: {
                    ci: CI,
                    first_name: first_name,
                    last_name: last_name,
                    second_name: second_name,
                    second_surname: second_surname,
                    cohort: cohort,
                    status: status
                },
                careerData: {
                    name: careerData.name,
                    cod: careerData.cod
                },
                notesData: {

                    totalU_C: totalU_C,
                    total: notaTotal.toFixed(2)
                },
                enrolledsData
            }

        } catch (error) {
            console.log(error)
        }
    }

    return {
        getConst_NotasData
    }
}

export { useConst_NotasData }


