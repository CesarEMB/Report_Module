import {
    Document,
    Page,
    View,
    StyleSheet,
    Text,
    Font,
    Image
} from "@react-pdf/renderer";
import { dateData } from "../../interface/date.interface";
import { HorarioData } from "../../interface/horario.interface";

//Parts

import { HeaderDoc, FooterDoc, StylePage, Qr} from "../PartsDocuments";

//Tipografias
import roboto from "../../assets/Roboto-Regular.ttf"
import robotoBold from "../../assets/Roboto-Bold.ttf"
import montserratItalic from "../../assets/Montserrat-Italic.ttf"



const Horario = ({ data, date, qr }: {data: HorarioData, date: dateData, qr: string}) => {

    //Estilos y Tipografica
    Font.register({
        family: "roboto", fonts: [
            { src: roboto, fontWeight: "normal" },
            { src: robotoBold, fontWeight: "bold" }
        ]
    })

    Font.register({
        family: "montserrat", fonts: [
            { src: montserratItalic, fontStyle: "italic" },
        ]
    })


    const Body = StyleSheet.create({
        body: { display: "flex", marginTop: "45px" },

        head: {
            display: "flex",
            flexDirection: "column",
            marginTop: "35px",
        },

        headTitle: {
            fontFamily: "roboto",
            fontWeight: "bold",
            fontSize: "14px",
            marginBottom: "35px",
            textAlign: "center"
        },

        headContent: {
            fontFamily: "roboto",
            fontWeight: "normal",
            fontSize: "10.8px",
            marginLeft: "7px"
        },
        table: {
            display: "flex",
            height: "auto",
            width: "550px",
            alignSelf: "center",
            marginTop: "40px",
            border: "0.8px solid black",
            borderTop: "1.2px solid black",
        },

        tableHead: {
            display: "flex",
            flexDirection: "row",
            width: "100%",
            height: "15px",
            borderBottom: "1.2px solid black",
            fontSize: 10,
            fontFamily: "roboto",
            fontWeight: "bold"
        },

        tableBody: {
            display: "flex",
            flexDirection: "column",
            width: "100%",
            height: "auto",
        },
        cell: {
            flexDirection: "row",
            height: "12.5px",
            borderBottom: "black",
            borderBottomWidth: 0.8,
            fontSize: 9,
            fontFamily: "roboto",
        },
    });

    //Datos de a hereredar

    const student = data.student;

    const academicData = data.careerData;

    const enrolledSubjects = data.listEnrolled;

    return (
        <Document title="Horario">
            <Page size="A4" style={StylePage.page} wrap>
                <HeaderDoc loadDate={true} dateInfo={date} />

                {/* Presentacion */}

                <View style={Body.head}>
                    <View style={Body.headTitle}>
                        <Text>
                            HORARIO DE CLASES
                        </Text>
                    </View>
                    <View style={Body.headContent}>
                        <Text>CI: {student.ci} - {student.last_name} {student.second_surname} {student.first_name} {student.second_name}</Text>
                        <Text>CARRERA: ({academicData.cod}) {academicData.name}</Text>
                        <Text>PERÍODO: {academicData.period} - Inscripción</Text>
                    </View>
                </View>
                {/*Tabla*/}
                <View style={Body.table}>
                    {/*Cabezera de la tabla*/}
                    <View style={Body.tableHead}>
                        <View
                            style={{
                                display: "flex",
                                width: "90px",
                                borderRight: "0.8px solid black",
                                height: "100%",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <Text>
                                COD.MATERIA
                            </Text>
                        </View>

                        <View
                            style={{
                                display: "flex",
                                width: "185px",
                                borderRight: "0.8px solid black",
                                height: "100%",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <Text>
                                NOMBRE MATERIA
                            </Text>
                        </View>

                        <View
                            style={{
                                display: "flex",
                                width: "60px",
                                borderRight: "0.8px solid black",
                                height: "100%",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <Text>
                                SECCIÓN
                            </Text>
                        </View>

                        <View
                            style={{
                                display: "flex",
                                width: "185px",
                                height: "100%",
                                alignItems: "center",
                                justifyContent: "center",
                                borderRight: "0.8px solid black",
                            }}
                        >
                            <Text>
                                CLASE
                            </Text>
                        </View>

                        <View
                            style={{
                                display: "flex",
                                width: "50px",
                                height: "100%",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <Text>
                                AULA
                            </Text>
                        </View>
                    </View>

                    {/*Cuerpo de la tabla*/}
                    <View style={Body.tableBody}>
                        {/* Recorrido de los elementos a heredar en la tabla*/}
                        {enrolledSubjects?.map((d, id) => {
                            return (
                                <View key={id} style={{ display: "flex", flexDirection: "column" }}>

                                    {/* Espaciado */}
                                    <View style={Body.cell}>

                                        {/*Codigo de la materia*/}
                                        <View
                                            style={{
                                                display: "flex",
                                                width: "90px",
                                                borderRight: "0.8px solid black",
                                                height: "100%",
                                                alignItems: "center",
                                                justifyContent: "center",
                                            }}
                                        >
                                            <Text></Text>
                                        </View>

                                        {/*Nombre de la materia*/}

                                        <View
                                            style={{
                                                display: "flex",
                                                width: "185px",
                                                borderRight: "0.8px solid black",
                                                height: "100%",
                                                alignItems: "center",
                                                justifyContent: "center",
                                            }}
                                        >
                                            <Text></Text>
                                        </View>

                                        {/*Sección de la materia*/}

                                        <View
                                            style={{
                                                display: "flex",
                                                width: "60px",
                                                borderRight: "0.8px solid black",
                                                height: "100%",
                                                alignItems: "center",
                                                justifyContent: "center",
                                            }}
                                        >
                                            <Text></Text>
                                        </View>


                                        {/*Clase de la materia*/}

                                        <View
                                            style={{
                                                display: "flex",
                                                width: "185px",
                                                height: "100%",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                borderRight: "0.8px solid black",
                                            }}

                                        >


                                        </View>

                                        {/*Aula de la materia*/}

                                        <View
                                            style={{
                                                display: "flex",
                                                width: "50px",
                                                height: "100%",
                                                alignItems: "center",
                                                justifyContent: "center",
                                            }}
                                        >
                                            <Text></Text>
                                        </View>



                                    </View>

                                    {/* Primera linea de contenido*/}
                                    <View style={Body.cell}>

                                        {/*Codigo de la materia*/}
                                        <View
                                            style={{
                                                display: "flex",
                                                width: "90px",
                                                borderRight: "0.8px solid black",
                                                height: "100%",
                                                alignItems: "center",
                                                justifyContent: "center",
                                            }}
                                        >
                                            <Text>{d.cod}</Text>
                                        </View>

                                        {/*Nombre de la materia*/}

                                        <View
                                            style={{
                                                display: "flex",
                                                width: "185px",
                                                borderRight: "0.8px solid black",
                                                height: "100%",
                                                alignItems: "center",
                                                justifyContent: "center",
                                            }}
                                        >
                                            <Text>{d.name}</Text>
                                        </View>

                                        {/*Sección de la materia*/}

                                        <View
                                            style={{
                                                display: "flex",
                                                width: "60px",
                                                borderRight: "0.8px solid black",
                                                height: "100%",
                                                alignItems: "center",
                                                justifyContent: "center",
                                            }}
                                        >
                                            <Text>{d.section}</Text>
                                        </View>

                                        {/*Clase de la materia*/}


                                        <View
                                            style={{
                                                display: "flex",
                                                width: "185px",
                                                height: "100%",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                borderRight: "0.8px solid black",
                                            }}

                                        >

                                            <Text>{d.classroom[0].day}</Text>


                                        </View>

                                        {/*Aula de la materia*/}

                                        <View
                                            style={{
                                                display: "flex",
                                                width: "50px",
                                                height: "100%",
                                                alignItems: "center",
                                                justifyContent: "center",
                                            }}
                                        >
                                            <Text>{d.classroom[0].site}</Text>
                                        </View>

                                    </View>

                                    {/* Siguiente linea de contenido*/}
                                    <View style={Body.cell}>

                                        {/*Codigo de la materia*/}
                                        <View
                                            style={{
                                                display: "flex",
                                                width: "90px",
                                                borderRight: "0.8px solid black",
                                                height: "100%",
                                                alignItems: "center",
                                                justifyContent: "center",
                                            }}
                                        >
                                            <Text></Text>
                                        </View>

                                        {/*Nombre de la materia*/}

                                        <View
                                            style={{
                                                display: "flex",
                                                width: "185px",
                                                borderRight: "0.8px solid black",
                                                height: "100%",
                                                alignItems: "center",
                                                justifyContent: "center",
                                            }}
                                        >
                                            <Text></Text>
                                        </View>

                                        {/*Sección de la materia*/}

                                        <View
                                            style={{
                                                display: "flex",
                                                width: "60px",
                                                borderRight: "0.8px solid black",
                                                height: "100%",
                                                alignItems: "center",
                                                justifyContent: "center",
                                            }}
                                        >
                                            <Text></Text>
                                        </View>




                                        <View
                                            style={{
                                                display: "flex",
                                                width: "185px",
                                                height: "100%",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                borderRight: "0.8px solid black",
                                            }}

                                        >

                                            {/*Clase de la materia*/}

                                            <Text>{d.classroom[1].day}</Text>

                                        </View>

                                        {/*Aula de la materia*/}

                                        <View
                                            style={{
                                                display: "flex",
                                                width: "50px",
                                                height: "100%",
                                                alignItems: "center",
                                                justifyContent: "center",
                                            }}
                                        >
                                            <Text>{d.classroom[1].site}</Text>
                                        </View>

                                    </View>

                                </View>

                            );
                        })}

                    </View>
                </View>

                <Image src={qr} style={Qr.img}/>
                <FooterDoc pages={false} />
            </Page>
        </Document>
    )
}

export { Horario }

