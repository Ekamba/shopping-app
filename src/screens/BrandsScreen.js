import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { theme } from "../../constants/theme";
import axios from "axios";
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

function BrandsScreen() {
  const navigation = useNavigation();
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`http://localhost:3000/router/brand?brand=brand`)
      .then((res) => {
        setProducts(res.data.response);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
        console.error(err);
      });
  }, []);
  return (
    <View>
      <View style={styles.container}>
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
            data={products}
            keyExtractor={(item) => item.id.toString()}
            ItemSeparatorComponent={() => Separator()}
            renderItem={({ item }) => (
              <View style={styles.productItemContainer}>
                <View style={styles.productItemMetaContainer}>
                  <TouchableOpacity
                    onPress={() => navigation.navigate("Details", { id: 1 })}
                  >
                    <Text style={styles.textId} numberOfLines={1}>
                      {item.id}
                    </Text>
                  </TouchableOpacity>
                  <Text style={styles.row}>{item.brand}</Text>
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
  textError: {
    textAlign: "center",
    color: theme.color.white,
    fontSize: theme.text.size.xl,
  },
  productItemMetaContainer: {
    paddingLeft: 5,
    paddingBottom: 45,
  },
  row: {
    fontSize: theme.text.size.lg,
    fontWeight: "400",
    paddingTop: 5,
    color: theme.color.purple,
  },
  textId: {
    color: theme.color.blueDark,
    fontSize: 18,
  },
});

export default BrandsScreen;
