import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Pressable,
  ScrollView,
  SafeAreaView,
} from "react-native";
import React, { useState } from "react";
import { useRouter } from "expo-router";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Login = () => {
  const router = useRouter();

  const [email, setEmail] = useState("owner@gmail.com");
  const [password, setPassword] = useState("");

  const handleSignIn = () => {
    // Simulate role from backend response
    let role: "owner" | "staff" | "member" = "member";

    if (email === "owner@gmail.com") role = "owner";
    else if (email === "staff@gmail.com") role = "staff";

    // Navigate to the respective dashboard
    if (role === "owner") {
      router.replace("/owner-dashboard");
    } else if (role === "staff") {
      router.replace("/staff-dashboard");
    } else {
      router.replace("/member-dashboard");
    }
  };

  return (
    <SafeAreaView className="flex-1">
      <View className="flex-1">
        {/* Top 30% background */}
        <ImageBackground
          source={require("../../assets/images/signin-bg.jpg")}
          className="flex-[0.4] justify-center items-center"
          resizeMode="cover">
          <Text className="text-white text-3xl font-bold drop-shadow-md">FITX Fitness GYM</Text>
        </ImageBackground>

        {/* Bottom 70% form with scroll for safety */}
        <View className="flex-[0.6] rounded-t-3xl bg-white overflow-hidden">
          <ScrollView
            contentContainerStyle={{ paddingBottom: 20 }}
            className="px-6 py-8"
            showsVerticalScrollIndicator={false}>
            <Text className="text-2xl font-bold text-secondary mb-6 text-center">
              Sign In to Your Account
            </Text>

            <TextInput
              placeholder="Email"
              placeholderTextColor="#999"
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
              className="border-b border-gray-300 text-black mb-4 pb-2"
            />
            <TextInput
              placeholder="Password"
              placeholderTextColor="#999"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
              className="border-b border-gray-300 text-black mb-6 pb-2"
            />

            <TouchableOpacity
              className="bg-primary py-3 rounded-full shadow-md"
              //   onPress={() => router.push("/home")}
              onPress={handleSignIn}>
              <Text className="text-white text-center font-semibold text-base">SIGN IN</Text>
            </TouchableOpacity>

            <View className="flex-row justify-center items-center mt-6">
              <MaterialCommunityIcons name="arrow-left-thin" size={24} color="red" />
              <Pressable onPress={() => router.push("/")}>
                <Text className="text-secondary font-semibold"> Back to Home</Text>
              </Pressable>
            </View>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;
