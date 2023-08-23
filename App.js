import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  const name = "jiwon";
  const add = (a, b) => a + b;
  const isFullName = true;
  return (
    <View style={styles.container}>
      <Text>My name is {name}</Text>
      <Text>1+2={add(1, 2)}</Text>
      <Text>{isFullName === true ? name + "Song" : name}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
