import { StatusBar, StyleSheet, Text, View } from "react-native";
import HomeScreen from "./screens/HomeScreen";

export default function App() {
  return (
    <View style={styles.container}>
      {/* StatusBar */}
      <StatusBar
        backgroundColor="#ecf0f1"
        barStyle="dark-content"
        hidden={false}
      />

      {/* home screen section */}
      <HomeScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    marginTop: 30,
  },
});
