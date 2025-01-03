import { View } from "react-native";
import { Input, Button, Text } from "@ui-kitten/components";
import tw from "twrnc";
import { useState } from "react";

const LoginScreen = ({ navigation }: any) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      setError("");
      navigation.navigate("Home");
    } catch (error) {

      setError(
        error instanceof Error
          ? error.message
          : "Login failed. Please try again."
      );
    }
  };

  return (
    <View style={tw`flex-1 justify-center p-4`}>
      <Text style={tw`text-2xl mb-8 text-center`}>Login</Text>
      {error ? (
        <Text style={tw`text-red-500 mb-4 text-center`}>{error}</Text>
      ) : null}
      <Input
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={tw`mb-4`}
      />
      <Input
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={tw`mb-4`}
      />
      <Button onPress={handleLogin} style={tw`mb-4`}>
        Login
      </Button>
      <Button
        appearance="ghost"
        onPress={() => navigation.navigate("Register")}
      >
        Don't have an account? Register
      </Button>
    </View>
  );
};

export default LoginScreen;
