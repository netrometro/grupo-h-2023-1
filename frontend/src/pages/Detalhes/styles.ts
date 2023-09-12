import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: "10%",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    padding: 10,
  },
  textoHeader: {
    textAlign: "center",
    fontSize: 25,
    fontWeight: "bold",
  },
  status: {
    fontSize: 15,
    borderRadius: 10,
    padding: 4,
    fontStyle: "italic",
  },
  content: {
    width: "90%",
    alignContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginTop: 10,
  },
  descricao: {
    fontSize: 18,
    borderRadius: 10,
    padding: 4,
    marginTop: 5,
    fontStyle: "italic",
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginBottom: 30,
    width: "100%",
    padding: 10,
    marginTop: 20,
  },
  butoes: {
    backgroundColor: "#f1ecec",
    borderRadius: 10,
    padding: 10,
    width: "30%",
    alignItems: "center",
  },
});

export default styles;
