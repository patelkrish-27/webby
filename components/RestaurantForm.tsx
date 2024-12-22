import { View, Text } from "react-native";
import React, { useState } from "react";
import tw from "twrnc";
import { Input,Button } from "@ui-kitten/components";
import * as ImagePicker from 'expo-image-picker';
import axios from "axios";


const RestaurantForm = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
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

  const handleForm = async () => { 
    const response = await axios.post("http://192.168.149.37:3000/add",{name,address})
    setName('')
    setAddress('')
  }
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
        placeholder="Enter Restaurant addressress"
        value={address}
        onChangeText={(val) => setAddress(val)}
        style={tw`m-3`}
        label={"Restaurant addressress"}
      />
      <View style={tw`flex-row gap-1`}>
        <Button appearance="outline" style={tw`w-1/2`} onPress={pickImage}>Upload Image</Button>
        <Button appearance="filled" style={tw`w-1/2`} onPress={handleForm}>Submit</Button>
      </View>
    </View>
  );
};

export default RestaurantForm;
