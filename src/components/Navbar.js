import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import SearchScreen from "../screens/SearchScreen";
import ShoppingCartIcon from "./ShoppingCartIcon";
import { theme } from "../../constants/theme";

function Navbar(props) {
  const navigation = useNavigation();
  console.log(navigation);
  return (
    <View style={styles.card}>
      <View style={styles.container}>
        <View style={styles.topLeftItems}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.push("Products")}
          >
            <Text style={styles.categories}>Women |</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.push("Products")}
          >
            <Text style={styles.categories}>Men |</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.push("Products")}
          >
            <Text style={styles.categories}>Kids</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.logo}>
          <Text style={styles.logoName}>Smart Shopping</Text>
        </View>
        <View style={styles.rightTopItems}>
          <TouchableOpacity
            onPress={() => navigation.push("Login")}
            style={styles.marginRight}
          >
            <Ionicons
              name="ios-contact"
              size={32}
              md="md-contact"
              color={theme.color.white}
            />
            <Text style={styles.topRight}>Log in</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.marginRight}>
            <Ionicons
              name="ios-heart"
              size={theme.text.size.xl}
              md="md-heart"
              color={theme.color.redDarkest}
            />
            <Text style={styles.topRight}>WishList</Text>
          </TouchableOpacity>
          <ShoppingCartIcon />
        </View>

        <View style={styles.bottomLeftItems}>
          <TouchableOpacity onPress={() => navigation.navigate("Clothing")}>
            <Text style={styles.marginLeft}>Clothing</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Shoes")}>
            <Text style={styles.marginLeft}>Shoes</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Accessories")}>
            <Text style={styles.marginLeft}>Accessories</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Sport")}>
            <Text style={styles.marginLeft}>Sport</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.marginLeft}>Designers</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Brands")}>
            <Text style={styles.marginLeft}>Brands</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.marginLeft}>Beauty</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.marginLeft}>Outlet</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.marginLeft}>Gift card</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.SearchScreen}>
          <SearchScreen />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    margin: 30,
    justifyContent: "center",
    backgroundColor: theme.color.white,
    fontSize: 10,
    letterSpacing: 1,
    boxShadow:
      "-7px -7px 20px 0 rgba(0, 0, 0, 0.2),\n    7px 7px 20px 0 rgba(0, 0, 0, 0.2)",
  },
  card_hover: {
    boxShadow:
      "inset -7px -7px 20px 0 rgba(0, 0, 0, 0.2),\n    inset 7px 7px 20px 0 rgba(0, 0, 0, 0.2)",
  },
  container: {
    flex: 1,
    backgroundColor: theme.color.goldenShiny,
  },
  logo: {
    alignItems: "center",
    marginTop: -20,
    marginBottom: 30,
  },
  logoName: {
    fontFamily: "TheHistoriaDemo",
    fontSize: 30,
    textTransform: "uppercase",
    color: theme.color.redDark,
    fontWeight: theme.text.weight.normal,
  },
  categories: {
    // fontFamily: "Roboto",
    color: theme.color.white,
  },
  button: {
    padding: 17,
  },
  rightTopItems: {
    alignSelf: "flex-end",
    marginTop: 16,
    position: "absolute",
    marginRight: 120,
    flexDirection: "row",
    justifyContent: "space-between",
    //fontFamily: "",
  },
  topLeftItems: {
    marginLeft: 120,
    marginTop: 10,
    flexDirection: "row",
    //fontFamily: "",
  },
  bottomLeftItems: {
    flexDirection: "row",
    marginLeft: 130,
    marginBottom: 20,
    //fontFamily: "",
  },

  marginLeft: {
    marginRight: 10,
    // fontFamily: "Roboto",
    color: theme.color.white,
  },
  marginRight: {
    marginRight: 10,
    // fontFamily: "Roboto",
    color: theme.color.white,
  },
  topRight: {
    color: theme.color.white,
    // fontFamily: "Roboto",
  },
});

export default Navbar;
