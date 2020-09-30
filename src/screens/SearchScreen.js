import React, { useState, useEffect } from "react";
import {
  FlatList,
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ADD_TO_CART } from "../redux/CartItem";
import { useDispatch } from "react-redux";
import axios from "axios";
import { theme } from "../../constants/theme";
import { BACKEND_URL } from "../config";

const Separator = () => {
  return (
    <View
      style={{
        borderBottomWidth: 1,
        borderBottomColor: theme.color.goldenShiny,
      }}
    />
  );
};

export default function SearchScreen() {
  const navigation = useNavigation();
  const [products, setProducts] = useState([]);
  const [text, setText] = useState("");
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  //to optimize the code for next time, the search query should be passed to the backend.
  //the logic is good right now, but you should not fetch all products, then filter that, the query should be passed to the backend

  //i have made a commented out example below for inspirations

  useEffect(() => {
    setIsLoading(true);
    //q is for query, which should be used in a sql statement on the backend  like SELECT * from PRODUCTS WHERE NAME = 'q' or something like that
    axios
      .get(`${BACKEND_URL}/api/products/name?q=${text}`)

      .then((res) => {
        const products = res.data.response;
        setProducts(products);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setError(err);
      });
  }, [text]); //call this hook, everytime the "text" state changes, it will fetch new data, with the new query.
  //This way it will automatically fetch everytime the user types in new data

  const dispatch = useDispatch();
  const addItemToCart = (item) =>
    dispatch({ type: ADD_TO_CART, payload: item });

  const searchData = (text) => {
    const searchData = products.filter((item) => {
      const itemData = item.name.toLowerCase();
      const textData = text.toLowerCase();
      return itemData.indexOf(textData) > -1;
    });

    setData(searchData);
    setText(text);
  };
  // useEffect(() => {
  //   axios
  //     .get("http://localhost:3000/api/products/")
  //     .then((products) => {
  //       setProduct(products.data.response);
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     });
  // }, []);

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => searchData(text)}
          value={text}
          underlineColorAndroid="transparent"
          placeholder="Search"
        />
      </View>
      {isLoading ? (
        <View>
          <ActivityIndicator
            size={theme.text.size.xl}
            color={theme.color.greenDarkest}
          />
        </View>
      ) : error ? (
        <Text style={styles.textError}>Something went wrong.....</Text>
      ) : (
        <FlatList
          data={data}
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
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.color.purpleLightest,
  },
  inputContainer: {
    alignSelf: "flex-end",
    marginTop: -105,
    marginRight: 140,
    paddingTop: 70,
  },
  textInput: {
    textAlign: "center",
    borderWidth: 1,
    color: theme.color.white,
  },
  textError: {
    textAlign: "center",
    color: theme.color.white,
    fontSize: theme.text.size.lg,
  },
  productItemContainer: {
    flexDirection: "row",
    paddingTop: 15,
    marginLeft: 10,
  },
  thumbnail: {
    width: 200,
    height: 250,
  },
  productItemMetaContainer: {
    paddingLeft: 10,
    paddingBottom: 45,
  },
  textId: {
    color: theme.color.blueDark,
    fontSize: 18,
  },
  row: {
    fontSize: 18,
    fontWeight: theme.text.weight.normal,
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
