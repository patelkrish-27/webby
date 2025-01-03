import React from "react";
import { View } from "react-native";
import { Button, Text } from "@ui-kitten/components";
import tw from "twrnc";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/types";

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

const HomeScreen = ({ navigation }: Props) => {

  return (
    <View style={tw`flex-1 p-4`}>
      <Text style={tw`text-2xl mb-8 text-center`}>
        Welcome to Restaurant App
      </Text>

      <Button
        style={tw`mb-4`}
        onPress={() => navigation.navigate("RegisterRestaurant")}
      >
        Register New Restaurant
      </Button>

      <Button
        appearance="ghost"
        status="danger"
        onPress={() => {
          navigation.replace("Login");
        }}
      >
        Logout
      </Button>
    </View>
  );
};

export default HomeScreen;
