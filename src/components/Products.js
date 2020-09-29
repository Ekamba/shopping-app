import React from "react";
import { View, StyleSheet, Text, ImageBackground } from "react-native";
import { theme } from "../../constants/theme";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const Products = (props) => {
  const navigation = useNavigation();
  console.log(navigation);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/images/bg.jpg")}
        style={{ width: 1100, height: 680 }}
      >
        <View style={styles.textContainer}>
          <Text style={styles.firstTextImage}>
            Europe's largest selection of fashion
          </Text>
          <Text style={styles.secondTextImage}>
            Explore more than 2000 brands and click home your favorites
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Women")}
          >
            <Text style={styles.btnText}>Women</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Men")}
          >
            <Text style={styles.btnText}>Men</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Kids")}
          >
            <Text style={styles.btnText}>Kids</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: theme.color.white,
  },

  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    justifyContent: "space-evenly",
    position: "relative",
    marginTop: 20,
  },
  button: {
    elevation: 8,
    backgroundColor: theme.color.goldenShiny,
    borderRadius: 2,
    padding: 5,
  },
  btnText: {
    fontSize: 20,
    fontFamily: "TheHistoriaDemo",
    width: 100,
    textAlign: "center",
    color: theme.color.white,
    alignSelf: "center",
  },
  textContainer: {
    alignItems: "center",
    marginTop: 150,
  },
  firstTextImage: {
    flexDirection: "row",
    height: "50%",
    alignItems: "center",
    justifyContent: "center",
    justifyContent: "space-evenly",
    color: theme.color.white,
    textColor: theme.color.greyLightest,
    fontWeight: "500",
    fontSize: 20,
    // fontFamily: "Roboto_medium",
  },
  secondTextImage: {
    flexDirection: "row",
    height: "50%",
    alignItems: "center",
    justifyContent: "center",
    justifyContent: "space-evenly",
    color: theme.color.white,
    textColor: theme.color.greyLightest,
    fontWeight: "500",
    // fontFamily: "Roboto_medium",
    lineHeight: 30,
  },
});

export default Products;
