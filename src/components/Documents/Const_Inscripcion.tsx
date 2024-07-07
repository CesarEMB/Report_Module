import {
  Document,
  Page,
  View,
  StyleSheet,
  Text,
  Font,
  Image
} from "@react-pdf/renderer";
import { Const_Ins } from "../../interface/cons_Ins.interface.";
import { dateData } from "../../interface/date.interface";


//Parts

import { HeaderDoc, FooterDoc, StylePage, Qr } from "../PartsDocuments";


//Tipografias
import roboto from "../../assets/Roboto-Regular.ttf"
import robotoBold from "../../assets/Roboto-Bold.ttf"
import montserratItalic from "../../assets/Montserrat-Italic.ttf"

////////////////////PDF

const Const_Inscripcion = ({ data, date, qr}: {data: Const_Ins, date: dateData, qr: string}) => {

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
    body: { display: "flex", marginTop: "45px"},

    dataStudent: {
      fontFamily: "roboto",
      fontWeight: "normal",
      marginTop:"10px",
      fontSize: "8px",
      marginLeft: "7px",
      lineHeight:1.3
    },

    table: {
      display: "flex",
      height: "auto",
      width: "350px",
      alignSelf: "center",
      marginTop: "40px",
      border: "0.8px solid black",
      borderTop: "1.2px solid black",
    },

    tableHead: {
      display: "flex",
      flexDirection: "row",
      width: "100%",
      height: "12.5px",
      borderBottom: "1.2px solid black",
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
      fontSize: 8,
      fontFamily: "roboto",
    },
  });


  //Datos a heredar

  const student = data.student;

  const academicData = data.careerData;

  const enrolledSubjects = data.listEnrolled;


  //PDF Generado
  return (
    <Document title="Constancia_de_Inscripción">
      <Page size="A4" style={StylePage.page} wrap>

        {/* Membrete Incial para los docs // Si date es "true", se mostrara la fecha de descarga */}
        <HeaderDoc loadDate={true} dateInfo={date} />

        <View style={Body.body}>
          <Text
            style={{
              fontFamily: "roboto",
              fontWeight: "bold",
              fontSize: 12,
              alignSelf: "center",
            }}
          >
            CONSTANCIA DE INSCRIPCIÓN
          </Text>

          <View style={Body.dataStudent}>
            <Text>C.I: {student.ci} - {student.last_name} {student.second_surname} {student.first_name} {student.second_name}</Text>
            <Text>CARRERA: ({academicData.cod}) {academicData.name}</Text>
            <Text>COHORTE: {student.cohort}</Text>
            <Text>PERÍODO: {academicData.period} - Inscripción</Text>


          </View>

          {/*Tabla*/}
          <View style={Body.table}>
            {/*Cabezera de la tabla*/}
            <View style={Body.tableHead}>
              <View
                style={{
                  display: "flex",
                  width: "20%",
                  borderRight: "0.8px solid black",
                  height: "100%",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text style={{ fontSize: 7, fontFamily: "roboto", fontWeight: "bold" }}>
                  COD.MATERIA
                </Text>
              </View>

              <View
                style={{
                  display: "flex",
                  width: "50%",
                  borderRight: "0.8px solid black",
                  height: "100%",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text style={{ fontSize: 7, fontFamily: "roboto", fontWeight: "bold" }}>
                  NOMBRE MATERIA
                </Text>
              </View>

              <View
                style={{
                  display: "flex",
                  width: "20%",
                  borderRight: "0.8px solid black",
                  height: "100%",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text style={{ fontSize: 7, fontFamily: "roboto", fontWeight: "bold" }}>
                  SECCIÓN
                </Text>
              </View>

              <View
                style={{
                  display: "flex",
                  width: "10%",
                  height: "100%",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text style={{ fontSize: 7, fontFamily: "roboto", fontWeight: "bold" }}>
                  U.C
                </Text>
              </View>
            </View>

            {/*Cuerpo de la tabla*/}
            <View style={Body.tableBody}>
              {/* Recorrido de los elementos a heredar en la tabla*/}
              {enrolledSubjects?.map((d, id) => {
                return (
                  <View key={id} style={Body.cell}>
                    <View
                      style={{
                        display: "flex",
                        width: "20%",
                        borderRight: "0.8px solid black",
                        height: "100%",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Text>{d.cod}</Text>
                    </View>

                    <View
                      style={{
                        display: "flex",
                        width: "50%",
                        borderRight: "0.8px solid black",
                        height: "100%",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Text>{d.name}</Text>
                    </View>

                    <View
                      style={{
                        display: "flex",
                        width: "20%",
                        borderRight: "0.8px solid black",
                        height: "100%",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Text>{d.section}</Text>
                    </View>

                    <View
                      style={{
                        display: "flex",
                        width: "10%",
                        height: "100%",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Text>{d.u_c}</Text>
                    </View>
                  </View>
                );
              })}

              <View
                style={{
                  flexDirection: "row",
                  height: "12.5px",
                  fontSize: 8,
                  fontFamily: "roboto",
                }}
              >
                <View
                  style={{
                    display: "flex",
                    width: "90%",
                    height: "100%",
                    alignItems: "flex-end",
                    justifyContent: "center",
                    fontFamily: "roboto",
                    fontWeight: "bold",
                    borderRight: "0.8px solid black",
                    paddingRight: 5,
                  }}
                >
                  <Text>Total de U.C Inscritas</Text>
                </View>

                <View
                  style={{
                    display: "flex",
                    width: "10%",
                    height: "100%",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text>{data.total}</Text>
                </View>
                
              </View>
            </View>
          </View>
        </View>

        <Image src={qr} style={Qr.img} />



        {/*Pie de página Fijado*/}
        <FooterDoc pages={false} />
      </Page>
    </Document>
  );
};

export { Const_Inscripcion }
