import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { WEB_URL } from "../config";
import QRCode from "qrcode";
import style from "../styles/pages/recoverDoc.module.css"
import loadStyle from "../styles/loaded.module.css"

//Documentos 
import { PDFDownloadLink } from "@react-pdf/renderer";
import { Horario, Const_Estudio, Const_Inscripcion, Const_Notas } from "../components/Documents";

import { getDocument } from "../api/document";


//interfaces

import { Cons_Notas } from "../interface/cons_Notas.interface";
import { Const_Es } from "../interface/cons_Est.interface";
import { Const_Ins } from "../interface/cons_Ins.interface.";
import { HorarioData } from "../interface/horario.interface";
import { dateData } from "../interface/date.interface";


interface Document {
    type: string;
    name: string;
}

interface DocumentInfo {
    horarioData: HorarioData;
    const_EstData: Const_Es;
    const_InsData: Const_Ins;
    const_NotasData: Cons_Notas;
    date: dateData;
}

const RecoverDocument = () => {

    //Parametro
    const params = useParams();

    //Estados
    const [load, setLoad] = useState(false)
    const [document, setDocument] = useState<Document>()
    const [documentInfo, setDocumentInfo] = useState<DocumentInfo>()
    const [qr, setQR] = useState("");

    useEffect(() => {
        const documentData = async () => {
            try {
                if (params.id) {
                    const res = await getDocument(params.id);
                    setQR(await QRCode.toDataURL(`${WEB_URL}/${params.id}`));
                    setDocument(res.data);
                    setDocumentInfo(res.data.savedData);
                }
            } catch (error) {
                console.log(error)
            }
            finally {
                setLoad(true);
            }
        }
        documentData();

    }, [params])


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

    if (!document) {
        return (
            <section>
                <header className="mx-auto max-w-full px-2 sm:px-2 lg:px-2 bg-slate-900">

                    <div className="relative flex h-16 text-white w-full">
                        <nav className="flex justify-end w-full items-center px-6 ">
                            <a className="mr-auto text-justify sm:text-sm sm:leading-6 hover:text-gray-300" href="/">Inicio</a>
                            <a className="mr-4 text-justify sm:text-sm sm:leading-6 hover:text-gray-300" href="https://unerg.edu.ve/" target="_blank">UNERG</a>
                            <a className="text-justify sm:text-sm sm:leading-6 hover:text-gray-300" href="http://www.opsu.gob.ve/" target="_blank">Opsu</a>
                        </nav>
                    </div>

                </header>

                <div className={style.download}>
                    <p>No se encontro el documento</p>
                </div>

            </section>
        )
    }

    return (
        <section>
            <header className="mx-auto max-w-full px-2 sm:px-2 lg:px-2 bg-slate-900">

                <div className="relative flex h-16 text-white w-full">
                    <nav className="flex justify-end w-full items-center px-6 ">
                        <a className="mr-auto text-justify sm:text-sm sm:leading-6 hover:text-gray-300" href="/">Inicio</a>
                        <a className="mr-4 text-justify sm:text-sm sm:leading-6 hover:text-gray-300" href="https://unerg.edu.ve/" target="_blank">UNERG</a>
                        <a className="text-justify sm:text-sm sm:leading-6 hover:text-gray-300" href="http://www.opsu.gob.ve/" target="_blank">Opsu</a>
                    </nav>
                </div>

            </header>

            <div className={style.download}>
                <p>¿Desea descargar el documento?</p>
                {document?.type.toLowerCase() === "horario" && documentInfo ? (
                    <PDFDownloadLink document={<Horario data={documentInfo.horarioData} date={documentInfo.date} qr={qr} />} fileName={document.name} >
                        <button>Descargar documento</button>
                    </PDFDownloadLink>
                ) : null}

                {document?.type.toLowerCase() === "const_estudio" && documentInfo ? (
                    <PDFDownloadLink document={<Const_Estudio data={documentInfo.const_EstData} date={documentInfo.date} qr={qr} />} fileName={document.name}  >
                        <button>Descargar documento</button>
                    </PDFDownloadLink>
                ) : null}

                {document?.type.toLowerCase() === "const_inscripcion" && documentInfo ? (
                    <PDFDownloadLink document={<Const_Inscripcion data={documentInfo.const_InsData} date={documentInfo.date} qr={qr} />} fileName={document.name}  >
                        <button>Descargar documento</button>
                    </PDFDownloadLink>
                ) : null}

                {document?.type.toLowerCase() === "const_notas" && documentInfo ? (
                    <PDFDownloadLink document={<Const_Notas data={documentInfo.const_NotasData} date={documentInfo.date} qr={qr} />} fileName={document.name} >
                        <button>Descargar documento</button>
                    </PDFDownloadLink>
                ) : null}

            </div >


        </section >
    )
}

export { RecoverDocument }



