import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { theme } from "../../constants/theme";

function ShoppingCartIcon() {
  const navigation = useNavigation();
  const cartItems = useSelector((state) => state);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate("Cart")}
        style={styles.button}
      >
        <View style={styles.itemCountContainer}>
          <Text style={styles.itemCountText}>{cartItems.length}</Text>
        </View>

        <Ionicons name="ios-cart" size={32} color="#fff" />
        <Text style={styles.topRight}>Cart</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  button: {
    marginRight: 10,
  },
  itemCountContainer: {
    position: "absolute",
    height: 15,
    width: 15,
    marginRight: 2,
    borderRadius: 15,
    backgroundColor: theme.color.redDarkest,
    right: 5,
    bottom: 40,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 2000,
  },
  itemCountText: {
    color: theme.color.white,
    fontWeight: "bold",
    paddingBottom: 1.6,
  },
  topRight: {
    color: theme.color.white,
    fontFamily: "Roboto",
  },
});

export default ShoppingCartIcon;
