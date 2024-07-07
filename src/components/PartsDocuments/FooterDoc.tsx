import {
  View,
  StyleSheet,
  Text,
  Font,
} from "@react-pdf/renderer";

//Tipografias

import roboto from "../../assets/Roboto-Regular.ttf"
import robotoBold from "../../assets/Roboto-Bold.ttf"
import montserratItalic from "../../assets/Montserrat-Italic.ttf"

interface PageNumber {
  pages: boolean
}

const FooterDoc = ({pages}: PageNumber) => {
  //Estilos y Tipografica
  Font.register({family:"roboto", fonts: [
    {src: roboto, fontWeight:"normal"},
    {src: robotoBold, fontWeight:"bold"}
   ]})

   Font.register({family:"montserrat", fonts: [
    {src: montserratItalic, fontStyle:"italic"},
   ]})

  const Footer = StyleSheet.create({
    footer: {
      position: "absolute",
      fontSize: 7,
      display: "flex",
      alignItems: "center",
      bottom: 60,
      left: 0,
      right: 0,
      fontFamily: "montserrat",
      fontStyle:"italic"
    },
  });

  return (
   
    <View style={Footer.footer} fixed>
      <Text>
        Este documento sin el sello y la firma de la oficina sectorial de
        Control de Estudios, no tiene validez
      </Text>

      {/*Numero de pagina // Solo para Documentos con más de una*/}

      {/* Pages = True // mostrara los números de pagina */}


      {pages ? (   
      <Text
        render={({ pageNumber, totalPages }) =>
          `Pagina ${pageNumber} de ${totalPages}`
        }
      />) : null}
   
    </View>
  );
};


export  {FooterDoc}