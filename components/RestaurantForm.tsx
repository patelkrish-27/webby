import { View, Text } from "react-native";
import React, { useState } from "react";
import tw from "twrnc";
import { Input,Button } from "@ui-kitten/components";
import * as ImagePicker from 'expo-image-picker';
const RestaurantForm = () => {
  const [name, setName] = useState('');
  const [add, setAdd] = useState('');
  const [image, setImage] = useState('');
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images', 'videos'],
      // allowsEditing: true,
      // aspect: [4, 3],
      quality: 1,
    });
    if(!result.canceled){
      setImage(result.assets[0].uri);
    }
  }

  const sendData = async () => { 
    
  }
  return (
    <View>
      <Text style={tw`text-2xl p-3`}>Register Restaurant</Text>
      <Input
        placeholder="Enter Restaurant Name"
        // value={'value'}
        onChangeText={(val) => setName(val)}
        style={tw`m-3`}
        label={"Restaurant Name"}
      />
      <Input
        placeholder="Enter Restaurant Address"
        // value={'value'}
        onChangeText={(val) => setAdd(val)}
        style={tw`m-3`}
        label={"Restaurant Address"}
      />
      <Button appearance="outline" style={tw`w-1/2 m-3`} onPress={pickImage}>Upload Image</Button>
    </View>
  );
};

export default RestaurantForm;
