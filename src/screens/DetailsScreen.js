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
import { ADD_TO_CART } from "../redux/CartItem";
import { useDispatch } from "react-redux";
import ShoppingCartIcon from "../components/ShoppingCartIcon";
import axios from "axios";
import * as BACKEND_URL from "../config";

function Separator() {
  return (
    <View
      style={{ borderBottomWidth: 1, borderBottomColor: theme.color.greyLight }}
    />
  );
}

function DetailsScreen(props) {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const id = props.route.params.id;

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/products/${id}`)
      .then((res) => {
        console.log(res);
        setProducts(res.data.response);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(error);
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
          <Text>Something went wrong.....</Text>
        ) : (
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
                  <Text style={styles.textId} numberOfLines={1}>
                    <Text style={styles.texProd}>ID:</Text> {item.id}
                  </Text>
                  <Text style={styles.row}>
                    <Text style={styles.texProd}>Name: </Text>
                    {item.name}
                  </Text>

                  <Text style={styles.row}>
                    <Text style={styles.texProd}>Category:</Text>{" "}
                    {item.category}
                  </Text>
                  <Text style={styles.row}>
                    <Text style={styles.texProd}>Gender: </Text>
                    {item.gender}
                  </Text>
                  <Text style={styles.row}>
                    <Text style={styles.texProd}>Brand: </Text>
                    {item.brand}
                  </Text>
                  <Text style={styles.price}>
                    <Text style={styles.texProd}>Price: </Text>$ {item.price}
                  </Text>
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
  row: {
    fontSize: 18,
    fontWeight: "400",
    paddingTop: 5,
    color: "purple",
  },
  textId: {
    color: theme.color.blueDark,
    fontSize: 18,
  },
  texProd: {
    color: theme.color.white,
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

export default DetailsScreen;
