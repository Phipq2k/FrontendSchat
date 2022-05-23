import { Dimensions, StyleSheet } from "react-native";
const { width, height } = Dimensions.get("window");

const NewJobBodyTheme = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    width: "90%",
    height: 800,
    marginHorizontal: "5%",
    marginTop: "5%",
    borderRadius: 8,
  },
  TienDo: {
    marginTop: 20,
    marginLeft: 10,
    flexDirection: "row",
  },
  txtTiendo: {
    fontSize: 14,
    color: "#353535",
  },
  txtinputPer: {
    textAlign: "center",
    fontSize: 14,
    color: "#353535",
    marginLeft: 12,
    borderWidth: 1,
    width: 48,
    height: 28,
    marginTop: -6,
    borderRadius: 8,
    borderColor: "#27AAE1",
  },
  txtPer: {
    fontSize: 14,
    color: "#353535",
    marginLeft: 10,
  },
  percentBar: {
    marginTop: 10,
    marginHorizontal: "5%",
  },
  txtLinhvuc: {
    fontSize: 14,
    color: "#353535",
    marginTop: 8,
    marginLeft: 10,
  },
  txtGroupWork: {
    fontSize: 14,
    color: "#353535",
    marginTop: 12,
    marginLeft: 10,
  },
  txtTitle: {
    fontSize: 14,
    color: "#353535",
    marginTop: 12,
    marginLeft: 10,
  },
  txtinputTitle: {
    marginTop: 8,
    borderWidth: 1,
    width: "90%",
    height: 38,
    borderRadius: 8,
    borderColor: "#D6D6D6",
    marginHorizontal: "5%",
    fontSize: 12,
    paddingLeft: 15,
    color: "#909090",
  },
  txtContent: {
    fontSize: 14,
    color: "#353535",
    marginTop: 12,
    marginLeft: 10,
  },
  txtinputContent: {
    marginTop: 8,
    borderWidth: 1,
    width: "90%",
    height: 80,
    borderRadius: 8,
    borderColor: "#D6D6D6",
    marginHorizontal: "5%",
    fontSize: 12,
    paddingLeft: 15,
    paddingRight: 5,
    paddingBottom: 8,
    color: "#909090",
  },
  File: {
    marginTop: 12,
    width: "90%",
    height: 38,
    borderWidth: 1,
    marginHorizontal: "5%",
    borderRadius: 8,
    borderColor: "#27AAE1",
  },
  txtFile: {
    textAlign: "center",
    color: "#27AAE1",
    marginVertical: 10,
  },
  txtGiaoChoAi: {
    fontSize: 14,
    color: "#353535",
    marginTop: 12,
    marginLeft: 10,
  },
  txtinputGiaoChoAi: {
    marginTop: 8,
    borderWidth: 1,
    width: "90%",
    height: 38,
    borderRadius: 8,
    borderColor: "#D6D6D6",
    marginHorizontal: "5%",
    fontSize: 12,
    paddingLeft: 15,
    color: "#909090",
  },
  txtDuration: {
    fontSize: 14,
    color: "#353535",
    marginTop: 20,
    marginLeft: 10,
  },
  btnDurationBar: {
    marginTop: 8,
    borderWidth: 1,
    width: "90%",
    height: 38,
    borderRadius: 8,
    borderColor: "#D6D6D6",
    marginHorizontal: "5%",
    paddingLeft: 15,
    paddingTop: 10,
  },
  txtInputDuration: {
    fontSize: 12,
    color: "#909090",
  },
  Cancel: {
    marginLeft: 20,
    borderRadius: 8,
    backgroundColor: "#D9D9D9",
    width: 74,
    height: 42,
  },
  btnCancel: {
    textAlign: "center",
    fontSize: 14,
    color: "#353535",
    paddingVertical: 12,
  },
  Assign: {
    marginLeft: 8,
    borderRadius: 8,
    backgroundColor: "#27AAE1",
    width: 97,
    height: 42,
  },
  btnAssign: {
    textAlign: "center",
    fontSize: 14,
    color: "#FFFFFF",
    paddingVertical: 12,
  },
  modal: {
    width: "90%",
    height: "40%",
    marginHorizontal: "5%",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    padding: 100,
    marginTop: 300,
    borderRadius: 8,
    borderWidth: 0.5,
  },
  btnClose: {
    marginTop: 15,
    backgroundColor: "#D9D9D9",
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 8,
  },
  btnChon: {
    width: "90%",
    marginHorizontal: "5%",
    borderWidth: 1,
    marginTop: 8,
    height: 38,
    borderRadius: 8,
    borderColor: "#D6D6D6",
  },
  selectBox: {
    width: "100%",
    marginHorizontal: "5%",
    // borderWidth: 1,
  },
});

export { NewJobBodyTheme };