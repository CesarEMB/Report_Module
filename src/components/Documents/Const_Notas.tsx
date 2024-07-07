import {
    Document,
    Text,
    View,
    Font,
    Page,
    StyleSheet,
    Image
} from "@react-pdf/renderer";
import { dateData } from "../../interface/date.interface";
import { Cons_Notas } from "../../interface/cons_Notas.interface";

//Parts
import { HeaderDoc, FooterDoc, StylePage, Qr } from "../PartsDocuments";

//Tipografias
import roboto from "../../assets/Roboto-Regular.ttf"
import robotoBold from "../../assets/Roboto-Bold.ttf"
import montserratItalic from "../../assets/Montserrat-Italic.ttf"

import montserratExtraLight from "../../assets/Montserrat-ExtraLight.ttf"
import montserratSemiBold from "../../assets/Montserrat-SemiBold.ttf"



///////////////////////

const Const_Notas = ({ data, date, qr }: {data: Cons_Notas, date: dateData, qr: string}) => {
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
            { src: montserratSemiBold, fontWeight: "semibold" },
            { src: montserratExtraLight, fontWeight: "light" },
        ]
    })

    const student = data.student;

    const academicData = data.careerData;

    const notesData = data.notesData;

    const enrolled = data.enrolledsData;


    const Body = StyleSheet.create({
        body: { display: "flex", marginTop: "20px" },
        dataStudent: {
            fontFamily: "roboto",
            fontWeight: "normal",
            marginTop: "10px",
            fontSize: "8px",
            marginLeft: "7px",
            lineHeight: 1.3
        },
        table: {
            display: "flex",
            height: "auto",
            width: "475px",
            alignSelf: "center",
            marginTop: "10px",
            border: "0.8px solid black",
            borderTop: "1.2px solid black",
        },
        tableHead: {
            display: "flex",
            flexDirection: "row",
            width: "100%",
            height: "15px",
            borderBottom: "1.2px solid black",
            fontSize: "7.5px",
            fontFamily: "roboto",
            fontWeight: "bold",
        },
        tablePeriod: {
            display: "flex",
            height: "15px",
            justifyContent: "center",
            width: "100%",
            backgroundColor: "#F3F3F0",
            fontSize: "8.5px",
            fontFamily: "montserrat",
            fontWeight: "semibold",
            textAlign: "center",
            borderBottom: "black",
            borderBottomWidth: 0.8,
        },

        tableBody: {
            display: "flex",
            flexDirection: "column",
            width: "100%",
            height: "auto",
        },
        cell: {
            flexDirection: "row",
            height: "14.07px",
            borderBottom: "black",
            borderBottomWidth: 0.8,
            borderTop: "black",
            borderTopWidth: 0.8,
            fontSize: "7.40px",
            fontFamily: "roboto",
        },

    });

    return (
        <Document title="Constancia_de_Notas">
            <Page style={StylePage.page} wrap>
                <HeaderDoc loadDate={true} dateInfo={date} />

                <View style={Body.body}>
                    <Text
                        style={{
                            fontFamily: "roboto",
                            fontWeight: "bold",
                            fontSize: "13px",
                            alignSelf: "center",
                        }}
                    >
                        CONSTANCIA DE CALIFICACIONES
                    </Text>

                    <View style={Body.dataStudent}>
                        <Text>C.I: {student.ci} - {student.last_name} {student.second_surname} {student.first_name} {student.second_name}</Text>
                        <Text>CARRERA: ({academicData.cod}) {academicData.name}</Text>
                        <Text>COHORTE: {student.cohort}</Text>
                        <Text>STATUS: {student.status ? "Activo" : "Inactivo"}</Text>

                    </View>

                    <View style={Body.table}>
                        {/*Cabezera de la tabla*/}
                        <View style={Body.tableHead}>
                            <View
                                style={{
                                    display: "flex",
                                    width: "80px",
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
                                    width: "320px",
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
                                    textAlign: "center",
                                    padding: "0px 7px 0px 7px"
                                }}
                            >
                                <Text>
                                    U.C
                                </Text>
                            </View>

                            <View
                                style={{
                                    display: "flex",
                                    width: "60px",
                                    height: "100%",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    textAlign: "center",
                                    padding: "0px 7px 0px 7px"
                                }}
                            >
                                <Text>
                                    NOTA
                                </Text>
                            </View>


                        </View>

                        {enrolled.map((d, id) => {
                            return (
                                <View key={id}>
                                    {/* Periodos */}

                                    < View style={Body.tablePeriod} wrap={false}>
                                        <Text>
                                            Período {d.period}
                                        </Text>
                                    </View>
                                    {d.enrolled_sub.map((e, id) => {
                                        return (
                                            <View key={id}>
                                                {/*Cuerpo de la tabla*/}
                                                <View style={Body.tableBody}>

                                                    <View style={{ display: "flex", flexDirection: "column" }}>
                                                        <View style={Body.cell}>
                                                            <View
                                                                style={{
                                                                    display: "flex",
                                                                    width: "80px",
                                                                    borderRight: "0.8px solid black",
                                                                    height: "100%",
                                                                    alignItems: "center",
                                                                    justifyContent: "center",
                                                                }}
                                                            >
                                                                <Text>{e.subject.cod}</Text>
                                                            </View>



                                                            <View
                                                                style={{
                                                                    display: "flex",
                                                                    width: "320px",
                                                                    borderRight: "0.8px solid black",
                                                                    height: "100%",
                                                                    alignItems: "center",
                                                                    justifyContent: "center",
                                                                }}
                                                            >
                                                                <Text>{e.subject.name}</Text>
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
                                                                <Text>{e.subject.u_c}</Text>
                                                            </View>




                                                            <View
                                                                style={{
                                                                    display: "flex",
                                                                    width: "60px",
                                                                    height: "100%",
                                                                    alignItems: "center",
                                                                    justifyContent: "center",

                                                                }}

                                                            >
                                                                <Text>{e.qualification}</Text>

                                                            </View>




                                                        </View>

                                                    </View>

                                                </View>
                                            </View>
                                        )
                                    })}

                                </View>
                            )
                        })}

                        {/* Zona para los totales*/}

                        <View style={{ display: "flex", flexDirection: "column" }}>
                            <View style={Body.cell}>
                                <View
                                    style={{
                                        display: "flex",
                                        width: "80px",
                                        borderRight: "0.8px solid black",
                                        height: "100%",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >

                                </View>

                                <View
                                    style={{
                                        display: "flex",
                                        width: "320px",
                                        borderRight: "0.8px solid black",
                                        height: "100%",
                                        alignItems: "flex-end",
                                        justifyContent: "center",
                                    }}
                                >
                                    <Text style={{ marginRight: "4px", fontSize: "7.5px", fontFamily: "roboto", fontWeight: "bold" }}>Totales:</Text>
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
                                    <Text style={{ fontSize: "7.5px", fontFamily: "roboto", fontWeight: "bold" }}>U.C</Text>
                                </View>

                                <View
                                    style={{
                                        display: "flex",
                                        width: "60px",
                                        height: "100%",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    <Text style={{ fontSize: "6.5px", fontFamily: "roboto", fontWeight: "bold" }}>I.A</Text>
                                </View>


                            </View>

                        </View>

                        <View style={{ display: "flex", flexDirection: "column" }}>
                            <View style={Body.cell}>
                                <View
                                    style={{
                                        display: "flex",
                                        width: "80px",
                                        borderRight: "0.8px solid black",
                                        height: "100%",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >

                                </View>

                                <View
                                    style={{
                                        display: "flex",
                                        width: "320px",
                                        borderRight: "0.8px solid black",
                                        height: "100%",
                                        alignItems: "flex-end",
                                        justifyContent: "center",
                                    }}
                                >
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
                                    <Text style={{ fontSize: "7.5px" }}>{notesData.totalU_C}</Text>
                                </View>

                                <View
                                    style={{
                                        display: "flex",
                                        width: "60px",
                                        height: "100%",
                                        alignItems: "center",
                                        justifyContent: "center",

                                    }}
                                >
                                    <Text style={{ fontSize: "7.5px" }}>{notesData.total}</Text>
                                </View>


                            </View>

                        </View>


                    </View>

                    <View style={{
                        display: "flex",
                        flexDirection: "column",
                        marginTop: "20px",
                        fontSize: "11px",
                        alignItems: "center",
                        justifyContent: "center"
                    }}>
                        <View style={{
                            display: "flex",
                            flexDirection: "row",
                        }}>
                            <View style={{
                                marginRight: "6px", display: "flex",
                                flexDirection: "row",
                                letterSpacing: "1.2px"
                            }}>
                                <Text style={{ fontFamily: "montserrat", fontWeight: "light", marginRight: "4px" }}>Escala de medición:</Text>
                                <Text style={{ fontFamily: "montserrat", fontWeight: "semibold" }}>1-10</Text>
                            </View>
                            <View style={{
                                marginRight: "6px", display: "flex",
                                flexDirection: "row"
                            }}>
                                <Text style={{ fontFamily: "montserrat", fontWeight: "light", marginRight: "4px" }}>Calificación mínima aprobatoria:</Text>
                                <Text style={{ fontFamily: "montserrat", fontWeight: "semibold" }}> 6</Text>
                            </View>

                        </View>
                        <View style={{
                            display: "flex",
                            flexDirection: "row",
                        }}>
                            <View style={{
                                marginRight: "6px", display: "flex",
                                flexDirection: "row",
                                letterSpacing: "1.2px"
                            }}>
                                <Text style={{ fontFamily: "montserrat", fontWeight: "light", marginRight: "4px" }}>Calificaciones por equivalencia:</Text>
                                <Text style={{ fontFamily: "montserrat", fontWeight: "semibold" }}>EQ AP</Text>
                            </View>

                        </View>
                    </View>

                </View>


                <Image src={qr} style={Qr.img} />

                <FooterDoc pages={true} />
            </Page>
        </Document >
    );
}

export { Const_Notas }