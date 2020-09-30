import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import CartScreen from "../screens/CartScreen";
import ProductsScreen from "../screens/ProductsScreen";
// import WomenScreen from "../screens/WomenScreen";
// import MenScreen from "../screens/MenScreen";
// import KidsScreen from "../screens/KidsScreen";
import ShoesScreen from "../screens/ShoesScreen";
import ClothingScreen from "../screens/ClothingScreen";
import AccessoriesScreen from "../screens/AccessoriesScreen";
import SportScreen from "../screens/SportScreen";
import BrandsScreen from "../screens/BrandsScreen";
import DetailsScreen from "../screens/DetailsScreen";
import LoginScreen from "../screens/LoginScreen";

const Stack = createStackNavigator();

function MainStackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Cart" component={CartScreen} />
        <Stack.Screen name="Products" component={ProductsScreen} />
        {/* <Stack.Screen name="Women" component={WomenScreen} /> */}
        {/* <Stack.Screen name="Men" component={MenScreen} />
        <Stack.Screen name="Kids" component={KidsScreen} />  */}
        <Stack.Screen name="Clothing" component={ClothingScreen} />
        <Stack.Screen name="Shoes" component={ShoesScreen} />
        <Stack.Screen name="Accessories" component={AccessoriesScreen} />
        <Stack.Screen name="Sport" component={SportScreen} />
        <Stack.Screen name="Brands" component={BrandsScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainStackNavigator;
