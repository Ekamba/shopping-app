import React from "react";
import { StyleSheet, View } from "react-native";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import { theme } from "../../constants/theme";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Navbar />
      <Products />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.color.white,
    padding: 20,
  },
});

export default HomeScreen;
