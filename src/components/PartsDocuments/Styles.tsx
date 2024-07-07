import { StyleSheet } from "@react-pdf/renderer";

//Estilos Globales

const StylePage = StyleSheet.create({
  page: {
    paddingTop: 100,
    paddingLeft: 68,
    paddingBottom: 110,
    paddingRight: 71,
    display: "flex",
    flexDirection: "column",
  },
});

const Qr = StyleSheet.create({
  img: {
    position: "absolute",
    bottom: "130",
    right: "70",
    height: "100px",
    width: "100px"
  },
});


export { StylePage, Qr }
