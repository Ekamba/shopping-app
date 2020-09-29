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

// this is fine, but the functionality is almost the same as all the other components, you could have used the same component as i also said in the index.js
// making generic and reusable components is the most important part of being a frontend developer
function ProductsScreen() {
  const navigation = useNavigation();
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const men = `http://localhost:3000/router/gender?gender=men`;
  const women = `http://localhost:3000/router/gender?gender=women`;
  const kids = `http://localhost:3000/router/gender?gender=kids`;

  //====filter products according to men

  if (men) {
  }

  useEffect(() => {
    axios
      .get(`http://localhost:3000/products`)
      .then((res) => {
        console.log(res);
        setProducts(res.data.response);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
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
        {isLoading ? (
          <Text>Loading.....</Text>
        ) : error ? (
          <Text style={styles.textError}>Something went wrong.....</Text>
        ) : (
          <FlatList
            data={products}
            keyExtractor={(item) => item.id.toString()}
            ItemSeparatorComponent={() => Separator()}
            renderItem={({ item, index }) => (
              <View style={styles.productItemContainer}>
                <Image
                  source={require(`../../assets/images/${index + 6}.jpg`)}
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
        )}
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
  textError: {
    textAlign: "center",
    color: theme.color.white,
    fontSize: theme.text.size.xl,
  },
  productItemContainer: {
    flexDirection: "row",
    padding: 10,
  },
  thumbnail: {
    width: 450,
    height: 290,
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
    color: theme.color.width,
    backgroundColor: "#4158D0",
    backgroundImage:
      "linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)",
  },
});

export default ProductsScreen;
