import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const Onboarding = () => {
  return (
    <View>
      <Text>Onboarding</Text>
   
      {/* <Link href="/(auth)/signup" className="mt-4 rounded-md px-4 py-2 bg-green-500">Create Account</Link> */}
      <Link href="/(auth)/singin" className="mt-4 rounded-md px-4 py-2 bg-green-500"> Sign in</Link>
    <Link href="/(auth)/signup" className="mt-4 rounded-md px-4 py-2 bg-green-500">Create Account</Link>

    </View>
  );
};

export default Onboarding;
