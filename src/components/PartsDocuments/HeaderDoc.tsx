import { View, StyleSheet, Text, Font, Image } from "@react-pdf/renderer";

//Tipografias

import roboto from "../../assets/Roboto-Regular.ttf"
import robotoBold from "../../assets/Roboto-Bold.ttf"
import montserratItalic from "../../assets/Montserrat-Italic.ttf"

//Imagenes
import LogoUnerg from "../../assets/logoUnerg.png";

//interface 
import { dateData } from "../../interface/date.interface";

interface Date {
  loadDate: boolean,
  dateInfo?: dateData | undefined
}

const HeaderDoc = ({ loadDate, dateInfo }: Date) => {

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
    head: { display: "flex", flexDirection: "row" },
    containerMembrete: {
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
    },
    membrete: {
      fontSize: "9",
      fontFamily: "roboto",
      fontWeight: "bold"
    },
    logo: { display: "flex", width: "110px" },
    date: {
      position: "absolute",
      top: -15,
      left: 320,
      fontStyle: "roboto",
      fontSize: "10px",
    },
  });


  return (
    <View style={Head.head}>
      {loadDate ? (
        <View style={Head.date}>
          <Text style={{ width: "300px" }}>
            {dateInfo?.week}, {dateInfo?.day} de {dateInfo?.month} de {dateInfo?.year}
          </Text>
        </View>
      ) : null}

      <View style={Head.logo}>
        <Image src={LogoUnerg} style={{ width: "99px", height: "38px" }} />
      </View>

      <View style={Head.containerMembrete}>
        <Text style={Head.membrete}>REPÚBLICA BOLIVARIANA DE VENEZUELA</Text>
        <Text style={Head.membrete}>
          UNIVERSIDAD NACIONAL EXPERIMENTAL RÓMULO GALLEGOS
        </Text>
        <Text style={Head.membrete}>
          DIRECCIÓN DE ADMISIÓN, CONTROL Y EVALUACIÓN
        </Text>
      </View>
    </View>
  );
};

export { HeaderDoc };
