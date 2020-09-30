import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  StyleSheet,
} from "react-native";
import { theme } from "../../constants/theme";
import { useSelector, useDispatch } from "react-redux";
import { REMOVE_FROM_CART } from "../redux/CartItem";
import { useNavigation } from "@react-navigation/native";

function Separator() {
  return (
    <View
      style={{
        borderBottomWidth: 1,
        borderBottomColor: theme.color.goldenShiny,
      }}
    />
  );
}

function CartScreen() {
  const navigation = useNavigation();
  const cartItems = useSelector((state) => state);
  const dispatch = useDispatch();

  const removeItemFromCart = (item) =>
    dispatch({
      type: REMOVE_FROM_CART,
      payload: item,
    });
  return (
    <View style={styles.container}>
      {cartItems.length !== 0 ? (
        <FlatList
          data={cartItems}
          keyExtractor={(item) => item.id.toString()}
          ItemSeparatorComponent={() => Separator()}
          renderItem={({ item, index }) => (
            <View style={styles.productItemContainer}>
              <Image
                source={require(`../../assets/images/${index + 1}.jpg`)}
                style={styles.thumbnail}
              />
              <View style={styles.productItemMetaContainer}>
                <TouchableOpacity
                  onPress={() => navigation.navigate("Details", { id: 1 })}
                >
                  <Text style={styles.textId} numberOfLines={1}>
                    {item.id}
                  </Text>
                </TouchableOpacity>
                <Text style={styles.row}> {item.name}</Text>
                <Text style={styles.row}> {item.category}</Text>
                <Text style={styles.row}> {item.gender}</Text>
                <Text style={styles.row}> {item.brand}</Text>
                <Text style={styles.textPrice}>$ {item.price}</Text>
                <View style={styles.buttonContainer}>
                  <TouchableOpacity
                    onPress={() => removeItemFromCart(item)}
                    style={styles.button}
                  >
                    <Text style={styles.buttonText}>Remove -</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          )}
        />
      ) : (
        <View style={styles.emptyCartContainer}>
          <Text style={styles.emptyCartMessage}>Your cart is empty :(</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.color.purpleLightest,
  },
  productItemContainer: {
    flexDirection: "row",
    padding: 10,
  },
  thumbnail: {
    width: 100,
    height: 150,
  },
  productItemMetaContainer: {
    padding: 5,
    paddingBottom: 40,
  },

  row: {
    color: theme.color.purple,
  },
  textId: {
    color: theme.color.blueDark,
    fontSize: 18,
  },
  textPrice: {
    color: theme.color.goldenShiny,
  },
  buttonContainer: {
    position: "absolute",
    marginTop: 130,
    left: 10,
  },
  button: {
    borderRadius: 8,
    padding: 5,
  },
  buttonText: {
    fontSize: 22,
    color: theme.color.white,
    backgroundColor: "#4158D0",
    backgroundImage:
      "linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)",
  },
  emptyCartContainer: {
    marginTop: 250,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyCartMessage: {
    fontSize: 28,
    color: theme.color.redDarkest,
  },
});

export default CartScreen;
