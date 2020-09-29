import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { theme } from "../../constants/theme";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Ionicons
          name="ios-contact"
          size={150}
          md="md-contact"
          color="#FFCC70"
        />
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="email..."
            returnKeyType="go"
            autoCorrect={false}
            //placeholderTextColor="#003f5c"
            onChangeText={() => setEmail(email)}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="PasseWord..."
            returnKeyType="go"
            secureTextEntry
            autoCorrect={false}
            //placeholderTextColor="#003f5c"
            onChangeText={() => setPassword(password)}
          />
        </View>
        <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.color.goldenShiny,
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    margin: 30,
    height: "85%",
    width: "40%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 40,
    backgroundColor: theme.color.white,
    fontSize: "10px",
    letterSpacing: "1px",
    boxShadow:
      "-7px -7px 20px 0 rgba(0, 0, 0, 0.2),\n    7px 7px 20px 0 rgba(0, 0, 0, 0.2)",
  },
  card_hover: {
    boxShadow:
      "inset -7px -7px 20px 0 rgba(0, 0, 0, 0.2),\n    inset 7px 7px 20px 0 rgba(0, 0, 0, 0.2)",
  },
  logo: {
    fontWeight: "bold",
    fontSize: 50,
    color: "#fb5b5a",
    marginBottom: 40,
  },
  inputView: {
    width: "40%",
    backgroundColor: theme.color.blueDarker,
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20,
  },
  inputText: {
    height: 50,
    color: "white",
    backgroundColor: theme.color.blueDarkest,
  },

  loginBtn: {
    width: "40%",
    backgroundColor: theme.color.redDark,
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10,
  },
});

export default LoginScreen;
