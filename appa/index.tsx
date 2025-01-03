import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import RestaurantForm from "../src/screens/RestaurantFormScreen";
import * as eva from "@eva-design/eva";
import { ApplicationProvider } from "@ui-kitten/components";
import NewRestaurantForm from "../src/components/Test";

export default function App() {
  return (
    <View>
      <ApplicationProvider {...eva} theme={eva.light}>
        <RestaurantForm></RestaurantForm>
      </ApplicationProvider>
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
