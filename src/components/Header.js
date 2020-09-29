import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { theme } from "../../constants/theme";

const Header = () => {
  return (
    <SafeAreaView>
      <View style={styles.header}>
        <View style={styles.text}>
          <Text style={styles.textColor}>ALL DENMARK'S FAVORITE BRANDS</Text>
        </View>
        <View style={styles.text}>
          <Text style={styles.textColor}>FREE DELIVERY AND RETURNS*</Text>
        </View>
        <View style={styles.text}>
          <Text style={styles.textColor}>100 DAYS RETURN</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 30,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: theme.color.goldenShiny,
  },
  textColor: {
    fontSize: 12,
    textDecorationLine: "underline",
    //fontFamily: "Roboto_medium",
    color: theme.color.white,
  },
});

export default Header;
