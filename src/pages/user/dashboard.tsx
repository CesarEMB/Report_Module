import { useState, useEffect } from "react"

import Navbar from "../../components/Navbar"
import { ErrorNotification } from "../../components/ui"

//Estilos
import style from "../../styles/pages/dashboard.module.css"
import loadStyle from "../../styles/loaded.module.css"

//Imagenes
import studentImg from "../../assets/sombrero-de-graduado.png"
import horarioImg from "../../assets/calendario.png"
import notasImg from "../../assets/calificaciones.png"

//Elementos para los pdf
import { pdf } from "@react-pdf/renderer"
import { saveAs } from "file-saver"

import { Const_Estudio, Const_Inscripcion, Horario, Pensum, Const_Notas } from "../../components/Documents"

//Hooks
import { useUser } from "../../context/User.context"
import { useDate } from "../../hooks/dateDownload"
import { useHorarioData } from "../../hooks/horarioData"
import { usePensumData } from "../../hooks/pensumData"
import { useConst_EstData } from "../../hooks/const_EstData"
import { useConst_InsData } from "../../hooks/const_InsData"
import { useConst_NotasData } from "../../hooks/const_NotasData"
import { useSavedDocument } from "../../hooks/documentRecovery"

const Dashboard = () => {

    //Estados de la carga de los docuementos
    const [load, setLoad] = useState(false);
    const [download, setDownload] = useState(false);
    const [alertMessage, setAlertMessage] = useState(false);

    //Datos para los documentos
    const { user } = useUser();
    const { date, getDate } = useDate();
    const { getPensumData, pensumData } = usePensumData();
    const { getHorarioData } = useHorarioData();
    const { getConst_EstData } = useConst_EstData();
    const { getConst_InstData } = useConst_InsData();
    const { getConst_NotasData } = useConst_NotasData();


    //Back-up de los documentos
    const { back_up } = useSavedDocument()

    //Actualizacion de los datos

    useEffect(() => {
        const updateData = async () => {
            try {
                await Promise.all([
                    getDate(),
                    getPensumData()
                ]);
                setLoad(true);
            } catch (error) {
                console.log(error)
            }
        };
        updateData();

    }, [user]);


    //Descargar Pensum
    const pensumDownload = async () => {

        if (!pensumData) return setAlertMessage(true)

        setDownload(true)
        const blob = await pdf(<Pensum data={pensumData} date={date} />).toBlob()
        saveAs(blob, 'Pensum.pdf');
        setDownload(false)
    };

    //Desacargar Horario

    const HorarioDownload = async () => {
        try {
            const horarioData = await getHorarioData(user)
            const savedDoc = {
                savedData: {
                    horarioData,
                    date
                },
                type: "horario",
                name: `Horario_${user.CI}.pdf`
            };

            const qr = await back_up(savedDoc);

            if (!horarioData || !qr) return setAlertMessage(true)
            setDownload(true)
            const blob = await pdf(<Horario data={horarioData} date={date} qr={qr} />).toBlob()
            saveAs(blob, `Horario_${user.CI}.pdf`);
            setDownload(false)
        } catch (error) {
            console.log(error)
        }
    };

    //Descarga de constancia de estudio

    const EstudioDownload = async () => {
        try {
            const const_EstData = await getConst_EstData(user);

            const savedDoc = {
                savedData: {
                    const_EstData,
                    date
                },
                type: "const_estudio",
                name: `Constancia_Estudio_${user.CI}.pdf`
            }

            const qr = await back_up(savedDoc)

            if (!const_EstData || !qr) return setAlertMessage(true)
            setDownload(true)
            const blob = await pdf(<Const_Estudio data={const_EstData} date={date} qr={qr} />).toBlob()
            saveAs(blob, `Constancia_Estudio_${user.CI}.pdf`);
            setDownload(false)
        } catch (error) {
            console.log(error)
        }
    };

    //Descarga de constancia de estudio
    const InscripcionDownload = async () => {
        try {
            const const_InsData = await getConst_InstData(user)
            const savedDoc = {
                savedData: {
                    const_InsData,
                    date
                },
                type: "const_inscripcion",
                name: `Constancia_Inscripcion_${user.CI}.pdf`
            }

            const qr = await back_up(savedDoc)
            if (!const_InsData || !qr) return setAlertMessage(true)
            setDownload(true)
            const blob = await pdf(<Const_Inscripcion data={const_InsData} date={date} qr={qr} />).toBlob()
            saveAs(blob, `Constancia_Inscripcion_${user.CI}.pdf`);
            setDownload(false)
        } catch (error) {
            console.log(error)
        }
    };

    //Descarga de constancia de notas
    const NotasDownload = async () => {
        try {
            const const_NotasData = await getConst_NotasData(user)
            const savedDoc = {
                savedData: {
                    const_NotasData,
                    date
                },
                type: "const_notas",
                name: `Constancia_Notas_${user.CI}.pdf`
            }

            const qr = await back_up(savedDoc)

            if (!const_NotasData || !qr) return setAlertMessage(true)
            setDownload(true)
            const blob = await pdf(<Const_Notas data={const_NotasData} date={date} qr={qr} />).toBlob()
            saveAs(blob, `Constancia_Notas_${user.CI}.pdf`);
            setDownload(false)

        } catch (error) {
            console.log(error)
        }
    };

    if (!load) {
        return (
            <section>
                <div className={loadStyle.container}>
                    <h2>Cargando</h2>
                    <div className={loadStyle.loader}></div>
                </div>
            </section>
        )
    }

    return (
        <section>

            {download ?
                (
                    <div className={loadStyle.container_down}>
                        <p>Descargando</p>
                        <div className={loadStyle.loader}></div>
                    </div>)
                : null}

            {alertMessage ?
            (<ErrorNotification setAlertMessage={setAlertMessage}>
                Existio un problema a descargar el documento, intentelo de nuevo más tarde
            </ErrorNotification>)
        : null}    

            <Navbar>
                {user && (
                    <a className="mr-4 cursor-pointer text-justify sm:text-sm sm:leading-6 hover:text-gray-300">{user.first_name} {user.last_name}</a>
                )}
            </Navbar>

            <div className={style.container}>

                <div className={style.menuLeft}>
                    <div className={style.content}>

                        <h2>Estudiante</h2>

                        <div className={style.menuLeft_button}>
                            <button className={style.desactive}>Cambiar contraseña</button>
                        </div>

                        <h2>Solicitudes</h2>
                        <div className={style.menuLeft_button}>

                            {/*   Pensum   */}

                            <button onClick={pensumDownload}>Pénsum</button>



                            {/*   Constancia de Estudio   */}
                            <button onClick={EstudioDownload}>Constancia de Estudio</button>


                            {/*   Constancia de Inscripción   */}
                            <button onClick={InscripcionDownload}>Constancia de Inscripcion</button>



                        </div>

                        <h2>Incripciones</h2>
                        <div className={style.menuLeft_button}>
                            <button className={style.desactive}>Periodo Activo</button>
                            <button className={style.desactive}>Adición y Retiro</button>
                            <button className={style.desactive}>Cambio Mutuo</button>
                            <button className={style.desactive}>Tratamiento especial</button>
                        </div>


                        <h2>Calificaciones</h2>
                        <div className={style.menuLeft_button}>

                            {/* Notas */}
                            <button onClick={NotasDownload}>Tus Notas</button>



                            {/* Horario */}
                            <button onClick={HorarioDownload}>Horario</button>


                        </div>

                    </div>

                </div>

                <div className={style.menuRight}>

                    <div className={style.content}>

                        <h2>Perfil del estudiante</h2>

                        <div className={style.menuRight_elements}>

                            <div className={style.dataStudent}>

                                <div className={style.student}>
                                    <img src={studentImg} alt="estudiante" />
                                </div>

                                <div className={style.studentContent}>
                                    <h3>Bienvenido</h3>
                                    <p>Nombres: {user.first_name} {user.second_name} {user.last_name} {user.second_surname}</p>
                                    <p>C.I: {user.CI}</p>
                                    <p>Estado: {user.status ? "Activo" : "Inactivo"}</p>
                                </div>


                            </div>

                        </div>

                        <div className={style.menuRight_elements}>

                            {/*  Horario */}

                            <div className={style.menuRight_button} onClick={HorarioDownload}>
                                <p>Horario</p>
                                <img src={horarioImg} alt="horario" />
                            </div>


                            {/* Notas */}

                            <div className={style.menuRight_button} onClick={NotasDownload}>
                                <p>Calificaciones</p>
                                <img src={notasImg} alt="notas" />
                            </div>



                        </div>
                    </div>

                </div>

            </div>



        </section >
    )
}

export { Dashboard }