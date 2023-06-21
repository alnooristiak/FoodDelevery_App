import React from "react";
import { StyleSheet, Text, View, TextInput, SafeAreaView } from "react-native";
import { Feather } from "@expo/vector-icons";
import Carosel from "../components/Carosel";

const HomeScreen = () => {
  return (
    <SafeAreaView>
      {/* search sec */}
      <View style={styles.searchSec}>
        <TextInput placeholder="search more which like you" />
        <Feather name="search" size={24} color="black" />
      </View>

      {/* carosel */}
      <Carosel />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  searchSec: {
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: "center",
    borderWidth: 1,
    margin: 10,
    padding: 10,
    borderColor: "black",
    borderRadius: 7,
  },
});
