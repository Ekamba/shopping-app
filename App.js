import React, { useState } from "react";
import MainStackNavigator from "./src/navigation/AppNavigator";
import { Provider as StoreProvider } from "react-redux";
import store from "./src/redux/store";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import { BrowserRouter } from "react-router-dom";

const fetchFonts = (props) => {
  return Font.loadAsync({
    "LongCang-Regular": require("./assets/fonts/LongCang-Regular.ttf"),
    TheHistoriaDemo: require("./assets/fonts/TheHistoriaDemo.ttf"),
  });
};

/**
 *
 *   Overall things
 *   The code is alright, but there is a lot of redundancy, all the "Screens" (MenScreen, KidsScreen, CartScreen etc.) are essentially doing the same thing
 *   You could have used one component to do it all, and just make some subcomponents for rendering specific things.
 */

export default function App(props) {
  const [dataLoading, setDataLoading] = useState(false);
  if (!dataLoading) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoading(true)}
      />
    );
  }
  return (
    <BrowserRouter>
      <StoreProvider store={store}>
        <MainStackNavigator />
      </StoreProvider>
    </BrowserRouter>
  );
}
