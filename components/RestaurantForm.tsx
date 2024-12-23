import { View, Text } from "react-native";
import React, { useState } from "react";
import tw from "twrnc";
import { Input, Button } from "@ui-kitten/components";
import * as ImagePicker from "expo-image-picker";
import axios from "axios";

const RestaurantForm = () => {
  const [name, setName] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [image, setImage] = useState<any>(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    if (!result.canceled && result.assets && result.assets.length > 0) {
      setImage(result.assets[0]);
    }
  };

  const handleForm = async () => {
    if (!name || !address || !image) {
      alert("Please fill all fields and select an image!");
      return;
    }
  
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("address", address);
  
      if (image?.uri) {
        const response = await fetch(image.uri);
        const blob = await response.blob();
        const fileName = image.title || "image.jpg"; // Default filename
  
        formData.append("file", blob, fileName);
      }
  
      const response = await axios.post(
        "http://192.168.149.37:3000/add",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Response:", response.data);
      alert("Restaurant registered successfully!");
  
      setName("");
      setAddress("");
      setImage(null);
    } catch (error) {
      console.error("Error adding restaurant:", error);
      alert("Failed to register restaurant. Please try again.");
    }
  };

  return (
    <View>
      <Text style={tw`text-2xl p-3`}>Register Restaurant</Text>
      <Input
        placeholder="Enter Restaurant Name"
        value={name}
        onChangeText={(val) => setName(val)}
        style={tw`m-3`}
        label={"Restaurant Name"}
      />
      <Input
        placeholder="Enter Restaurant Address"
        value={address}
        onChangeText={(val) => setAddress(val)}
        style={tw`m-3`}
        label={"Restaurant Address"}
      />
      <Button appearance="outline" style={tw`w-1/2 m-3`} onPress={pickImage}>
        Upload Image
      </Button>
      <Button appearance="filled" style={tw`w-1/2 m-3`} onPress={handleForm}>
        Submit
      </Button>
    </View>
  );
};

export default RestaurantForm;
