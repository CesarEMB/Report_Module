import {
    Document,
    Page,
    View,
    StyleSheet,
    Text,
    Font
} from "@react-pdf/renderer";
import { dateData } from "../../interface/date.interface";
import { PensumData } from "../../interface/pensum.interface";

//Tipografias
import roboto from "../../assets/Roboto-Regular.ttf"
import robotoBold from "../../assets/Roboto-Bold.ttf"
import montserratItalic from "../../assets/Montserrat-Italic.ttf"


////////////////////PDF

const Pensum = ({ data, date }: { data: PensumData, date: dateData}) => {
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

    const Head = StyleSheet.create({
        head: { display: "flex", flexDirection: "column" },
        date: {
            position: "absolute",
            top: -25,
            left: 350,
            fontStyle: "roboto",
            fontSize: 8,
        },
        title: { fontSize: "9.8px", fontFamily: "roboto", fontWeight: "bold", textAlign: "center", marginBottom: "20px" },
        info: { fontSize: "7.6px", fontFamily: "roboto", fontWeight: "bold", lineHeight: "2px", marginLeft: "5px" }
    });

    const Body = StyleSheet.create({
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
            height: "11px",
            borderBottom: "1.2px solid black",
            fontSize: "4px",
            fontFamily: "roboto",
            fontWeight: "bold",
            backgroundColor: "#FAFAF2"
        },

        tableBody: {
            display: "flex",
            flexDirection: "column",
            width: "100%",
            height: "auto",
        },
        cell: {
            flexDirection: "row",
            height: "12px",
            borderBottom: "black",
            borderBottomWidth: 0.8,
            borderTop: "black",
            borderTopWidth: 0.8,
            fontSize: "6.40px",
            fontFamily: "roboto",
        },
    });

    const combinedData = data.combinedData;

    //PDF Generado
    return (
        <Document title="Pensum">
            <Page size="A4" style={{
                paddingTop: 100,
                paddingLeft: 68,
                paddingBottom: 81,
                paddingRight: 71,
                display: "flex",
                flexDirection: "column",
            }} wrap>

                {/* Cabezera*/}
                <View style={Head.head}>
                    <View style={Head.date}>
                        <Text>
                            {date.week}, {date.day} de {date.month} de {date.year}
                        </Text>
                    </View>
                    <View>
                        <Text style={Head.title}>PENSUM DE ESTUDIOS DE INGENIERIA EN INFORMATICA</Text>
                        <Text style={Head.info}>Carrera: Ingeneria en Informatica</Text>
                        <Text style={Head.info}>Pensum ID: 5</Text>
                    </View>
                </View>

                {/*Tabla*/}
                <View style={Body.table}>
                    {/*Cabezera de la tabla*/}
                    <View style={Body.tableHead}>
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
                                COD
                            </Text>
                        </View>

                        <View
                            style={{
                                display: "flex",
                                width: "145px",
                                borderRight: "0.8px solid black",
                                height: "100%",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <Text>
                                ASIGNATURA
                            </Text>
                        </View>

                        <View
                            style={{
                                display: "flex",
                                width: "40px",
                                borderRight: "0.8px solid black",
                                height: "100%",
                                alignItems: "center",
                                justifyContent: "center",
                                textAlign: "center",
                                padding: "0px 7px 0px 7px"
                            }}
                        >
                            <Text>
                                HORAS TEÓRICAS
                            </Text>
                        </View>

                        <View
                            style={{
                                display: "flex",
                                width: "40px",
                                borderRight: "0.8px solid black",
                                height: "100%",
                                alignItems: "center",
                                justifyContent: "center",
                                textAlign: "center",
                                padding: "0px 7px 0px 7px"
                            }}
                        >
                            <Text>
                                HORAS PRÁCTICAS
                            </Text>
                        </View>

                        <View
                            style={{
                                display: "flex",
                                width: "40px",
                                borderRight: "0.8px solid black",
                                height: "100%",
                                alignItems: "center",
                                justifyContent: "center",
                                textAlign: "center",
                                padding: "0px 7px 0px 7px"
                            }}
                        >
                            <Text>
                                HORAS 
                            </Text>
                            <Text>
                                SEMANALES 
                            </Text>
                        </View>
                        <View
                            style={{
                                display: "flex",
                                width: "20px",
                                height: "100%",
                                alignItems: "center",
                                justifyContent: "center",
                                borderRight: "0.8px solid black",
                            }}
                        >
                            <Text>
                                U.C
                            </Text>
                        </View>
                        <View
                            style={{
                                display: "flex",
                                width: "145px",
                                height: "100%",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <Text>
                                PRELACIONES
                            </Text>
                        </View>
                    </View>

                    {/*Cuerpo de la tabla*/}
                    <View style={Body.tableBody}>

                        {/* Recorrido de todas las materias por semestre/año */}
                        {combinedData.map((d, id) => {
                            return (
                                <View key={id} style={{ display: "flex", flexDirection: "column" }}>
                                    <View style={Body.cell}>
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
                                            <Text>{d.year}</Text>
                                        </View>



                                        <View
                                            style={{
                                                display: "flex",
                                                width: "145px",
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
                                                width: "40px",
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
                                                width: "40px",
                                                height: "100%",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                borderRight: "0.8px solid black",
                                            }}

                                        >


                                        </View>


                                        <View
                                            style={{
                                                display: "flex",
                                                width: "40px",
                                                height: "100%",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                borderRight: "0.8px solid black"
                                            }}
                                        >
                                        </View>

                                        <View
                                            style={{
                                                display: "flex",
                                                width: "20px",
                                                height: "100%",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                borderRight: "0.8px solid black"
                                            }}
                                        >
                                        </View>
                                        <View
                                            style={{
                                                display: "flex",
                                                width: "145px",
                                                height: "100%",
                                                alignItems: "center",
                                                justifyContent: "center",
                                            }}
                                        >
                                        </View>



                                    </View>
                                    {d.list.map((l, i) => {
                                        return (
                                            <View key={i} style={{ display: "flex", flexDirection: "row" }}>
                                                <View style={Body.cell}>
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
                                                        <Text>{l.cod}</Text>
                                                    </View>
                                                </View>
                                                <View style={Body.cell}>
                                                    <View
                                                        style={{
                                                            display: "flex",
                                                            width: "145px",
                                                            borderRight: "0.8px solid black",
                                                            height: "100%",
                                                            alignItems: "center",
                                                            justifyContent: "center",
                                                        }}
                                                    >
                                                        <Text>{l.name}</Text>
                                                    </View>
                                                </View>
                                                <View style={Body.cell}>
                                                    <View
                                                        style={{
                                                            display: "flex",
                                                            width: "40px",
                                                            borderRight: "0.8px solid black",
                                                            height: "100%",
                                                            alignItems: "center",
                                                            justifyContent: "center",
                                                        }}
                                                    >
                                                        <Text>{l.theoretical_h}</Text>
                                                    </View>
                                                </View>
                                                <View style={Body.cell}>
                                                    <View
                                                        style={{
                                                            display: "flex",
                                                            width: "40px",
                                                            borderRight: "0.8px solid black",
                                                            height: "100%",
                                                            alignItems: "center",
                                                            justifyContent: "center",
                                                        }}
                                                    >
                                                        <Text>{l.practical_h}</Text>
                                                    </View>
                                                </View>
                                                <View style={Body.cell}>
                                                    <View
                                                        style={{
                                                            display: "flex",
                                                            width: "40px",
                                                            borderRight: "0.8px solid black",
                                                            height: "100%",
                                                            alignItems: "center",
                                                            justifyContent: "center",
                                                        }}
                                                    >
                                                        <Text>{l.weekly_h}</Text>
                                                    </View>
                                                </View>
                                                <View style={Body.cell}>
                                                    <View
                                                        style={{
                                                            display: "flex",
                                                            width: "20px",
                                                            borderRight: "0.8px solid black",
                                                            height: "100%",
                                                            alignItems: "center",
                                                            justifyContent: "center",
                                                        }}
                                                    >
                                                        <Text>{l.u_c}</Text>
                                                    </View>
                                                </View>
                                                <View style={Body.cell}>
                                                    <View
                                                        style={{
                                                            display: "flex",
                                                            width: "145px",

                                                            height: "100%",
                                                            alignItems: "center",
                                                            justifyContent: "center",
                                                        }}
                                                    >
                                                        <Text>{l.priorities}</Text>
                                                    </View>
                                                </View>


                                            </View>
                                        )
                                    })}
                                </View>
                            )
                        })}
                    </View>
                </View>
                {/* Numero de paginas */}
                <Text fixed
                    render={({ pageNumber, totalPages }) =>
                        `Página ${pageNumber} de ${totalPages}`
                    } style={{
                        position: "absolute",
                        fontSize: "6px",
                        display: "flex",
                        alignItems: "center",
                        bottom: 20,
                        left: 0,
                        right: 0,
                        fontFamily: "montserrat",
                        fontStyle: "italic",
                        textAlign:"center"
                    }} />
            </Page>
        </Document>
    )
}

export { Pensum }