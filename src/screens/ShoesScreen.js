import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { theme } from "../../constants/theme";
import { useNavigation } from "@react-navigation/native";
import { ADD_TO_CART } from "../redux/CartItem";
import { useDispatch } from "react-redux";
import ShoppingCartIcon from "../components/ShoppingCartIcon";
import axios from "axios";
import * as BACKEND_URL from "../config";

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

function ShoesScreen() {
  const navigation = useNavigation();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/router/category?category=shoes`)
      .then((res) => {
        setProducts(res.data.response);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const dispatch = useDispatch();
  const addItemToCart = (item) =>
    dispatch({ type: ADD_TO_CART, payload: item });
  return (
    <View style={styles.container}>
      <View style={styles.shoppingCartContainer}>
        <View style={styles.shoppingCart}>
          <ShoppingCartIcon />
        </View>
      </View>
      <View>
        <FlatList
          data={products}
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
                <Text style={styles.row}>{item.name}</Text>

                <Text style={styles.row}> {item.category}</Text>
                <Text style={styles.row}> {item.gender}</Text>
                <Text style={styles.row}> {item.brand}</Text>
                <Text style={styles.price}>$ {item.price}</Text>
                <View style={styles.buttonContainer}>
                  <TouchableOpacity
                    onPress={() => addItemToCart(item)}
                    style={styles.button}
                  >
                    <Text style={styles.buttonText}>Add to Cart +</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.color.purpleLightest,
  },
  shoppingCartContainer: {
    backgroundColor: theme.color.goldenShiny,
  },
  shoppingCart: { alignSelf: "flex-end", padding: 10 },
  productItemContainer: {
    flexDirection: "row",
    padding: 10,
  },
  thumbnail: {
    width: 200,
    height: 170,
  },
  productItemMetaContainer: {
    paddingLeft: 5,
    paddingBottom: 45,
  },
  textId: {
    color: theme.color.blueDark,
    fontSize: 18,
  },
  row: {
    fontSize: 18,
    fontWeight: "400",
    paddingTop: 5,
    color: "purple",
  },
  price: {
    fontSize: 18,
    fontWeight: "400",
    paddingTop: 10,
    color: theme.color.goldenShiny,
  },
  buttonContainer: {
    position: "absolute",
    top: 140,
  },
  button: {
    borderRadius: 8,
    padding: 15,
    marginTop: 30,
  },
  buttonText: {
    fontSize: 22,
    color: theme.color.white,
    backgroundColor: "#4158D0",
    backgroundImage:
      "linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)",
  },
});

export default ShoesScreen;
