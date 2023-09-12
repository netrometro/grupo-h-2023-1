import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: "10%",
  },
  inputDescricao: {
    width: "90%",
    height: 120,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 10,
    padding: 15,
  },
  inputNome: {
    width: "90%",
    height: 60,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 10,
    padding: 15,
    marginBottom: 30,
  },
  butoes: {
    backgroundColor: "#f1ecec",
    borderRadius: 10,
    padding: 10,
    width: "30%",
    alignItems: "center",
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginBottom: 30,
    width: "100%",
    padding: 10,
  },
});

export default styles;
