import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Menu = () => {
  const navigation = useNavigation();
  return (
    <View style={{ width: "100%", alignItems: "center" }}>
      <View style={styles.menuContainer}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Home");
          }}
        >
          <Entypo name="home" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("About");
          }}
        >
          <Entypo name="info" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Contact");
          }}
        >
          <MaterialIcons name="contact-mail" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Menu;

const styles = StyleSheet.create({
  menuContainer: {
    backgroundColor: "#03C988",
    width: "90%",
    paddingVertical: 15,
    flexDirection: "row",
    justifyContent: "space-around",
    borderRadius: 10,
    position: "absolute",
    bottom: 20,
  },
});
