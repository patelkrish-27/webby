import React, { useState } from "react";
import { View } from "react-native";
import { Input, Button, Text } from "@ui-kitten/components";
import tw from "twrnc";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/types";

type Props = NativeStackScreenProps<RootStackParamList, "Register">;

const RegisterScreen = ({ navigation }: Props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      setLoading(true);
      // Implement your registration API call here
      // await api.post('/auth/register', { email, password });

      alert("Registration successful! Please login.");
      navigation.replace("Login");
    } catch (error) {
      alert("Registration failed. Please try again.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={tw`flex-1 justify-center p-4`}>
      <Text style={tw`text-2xl mb-8 text-center`}>Create Account</Text>

      <Input
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        style={tw`mb-4`}
      />

      <Input
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={tw`mb-4`}
      />

      <Input
        placeholder="Confirm Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
        style={tw`mb-4`}
      />

      <Button onPress={handleRegister} disabled={loading} style={tw`mb-4`}>
        {loading ? "Creating Account..." : "Register"}
      </Button>

      <Button appearance="ghost" onPress={() => navigation.navigate("Login")}>
        Already have an account? Login
      </Button>
    </View>
  );
};

export default RegisterScreen;
