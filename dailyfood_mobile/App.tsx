import { StyleSheet, Text, View } from "react-native";
import { colors } from "./src/theme/colors";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to dailyfood</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray[900],
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: colors.gray[400],
  },
});
