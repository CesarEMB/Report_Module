import {
  Document,
  Text,
  View,
  Font,
  Page,
  StyleSheet,
  Image
} from "@react-pdf/renderer";
import { Const_Es } from "../../interface/cons_Est.interface";
import { dateData } from "../../interface/date.interface";

//Parts
import { HeaderDoc, FooterDoc, StylePage, Qr } from "../PartsDocuments";

//Tipografias
import roboto from "../../assets/Roboto-Regular.ttf"
import robotoBold from "../../assets/Roboto-Bold.ttf"
import montserratItalic from "../../assets/Montserrat-Italic.ttf"



///////////////////////


const Const_Estudio = ({ data, date, qr }: {data: Const_Es, date: dateData, qr: string}) => {

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
    data: { display: "flex", marginTop: "40px", width: "100%" },
    center: { position: "absolute", bottom: "340", left: "0", right: "0" },
    footer: { position: "absolute", bottom: "180", left: "80" }
  });

  return (
    <Document title="Constancia_de_Estudio">
      <Page style={StylePage.page} wrap>
        <HeaderDoc loadDate={false} dateInfo={undefined} />

        <View style={Body.body}>
          <Text
            style={{
              fontFamily: "roboto",
              fontWeight: "bold",
              fontSize: 10,
              alignSelf: "center",
            }}
          >
            CONSTANCIA DE ESTUDIO
          </Text>

          <View style={Body.data}>
            <Text style={{
              fontFamily: "roboto",
              fontSize: 10.81,
              textIndent: "20px",
              textAlign: "justify",
              padding: "5px"
            }}>
              QUIEN SUSCRIBE HACE CONSTAR POR MEDIO DE LA PRESENTE QUE EL CIUDADANO
              BACHILLER:  <Text style={{ fontFamily: "roboto", fontWeight: "bold" }}>{data.student.first_name} {data.student.last_name}</Text>  CI:  <Text style={{ fontFamily: "roboto", fontWeight: "bold" }}>{data.student.ci}</Text>  ESTÁ INSCRITO COMO
              ALUMNO REGULAR DE ESTA UNIVERSIDAD, EN EL LAPSO ACADÉMICO: {data.student.cohort} EN LA
              CARRERA DE <Text style={{ fontFamily: "roboto", fontWeight: "bold" }}>{data.student.career.split('-')[0].trim()}</Text>.
            </Text>
          </View>


          <View style={Body.data}>
            <Text style={{
              fontFamily: "roboto",
              fontSize: 10.8,
              textIndent: "20px",
              textAlign: "justify",
              padding: "5px"
            }}>
              CONSTANCIA QUE SE EXPIDE A PETICIÓN DE PARTE INTERESADA, EN LA CIUDAD DE
              SAN JUAN DE LOS MORROS, A LOS {date.day} DIAS DEL MES DE {date.month.toUpperCase()} DE {date.year}.
            </Text>
          </View>

        </View>

        <View style={Body.center}>
          <Text style={{
            fontFamily: "roboto",
            fontWeight: "bold",
            fontSize: 9,
            alignSelf: "center",
            marginBottom: "15px"
          }}>
            PROF. {data.director}
          </Text>


          <Text style={{
            fontFamily: "roboto",
            fontWeight: "bold",
            fontSize: 9,
            alignSelf: "center"
          }}>
            DIRECTOR ADMISIÓN, CONTROL Y EVALUACIÓN
          </Text>

        </View>


        <View style={Body.footer}>
          <Text style={{
            fontFamily: "roboto",
            fontWeight: "bold",
            fontSize: 10,
            marginBottom: "15px"
          }}>
            Primer período inscrito: <Text style={{ fontFamily: "roboto" }}>{data.student.cohort}</Text>
          </Text>


          <Text style={{
            fontFamily: "roboto",
            fontWeight: "bold",
            fontSize: 10,
          }}>
            Nota: <Text style={{ fontFamily: "roboto" }}>Caduca en 90 Días</Text>
          </Text>

        </View>

        <Image src={qr} style={Qr.img} />
        <FooterDoc pages={false} />
      </Page>
    </Document>
  );
};

export { Const_Estudio }