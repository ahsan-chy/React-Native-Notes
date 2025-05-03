import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  SafeAreaView,
  Pressable,
} from "react-native";
import React from "react";
import { useRouter } from "expo-router";

const Homepage = () => {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1">
      <ImageBackground
        source={require("../assets/images/homepage.jpg")}
        resizeMode="cover"
        className="flex-1">
        {/* Overlay */}
        <View className="absolute inset-0 bg-black opacity-50" />

        {/* Content */}
        <View className="flex-1 justify-center items-center px-6 relative">
          <Text className="text-white text-4xl font-extrabold text-center drop-shadow-lg">
            FITX Fitness GYM
          </Text>
          <Text className="text-white text-base mt-4 text-center drop-shadow">
            Transform your body and lifestyle with expert training and community support.
          </Text>

          <View className="w-full h-auto">
            <TouchableOpacity
              onPress={() => router.push("/signin")}
              className="w-full mt-10 bg-primary py-4 px-10 rounded-full shadow-md">
              <Text className="text-white text-center text-lg font-bold">Get Started</Text>
            </TouchableOpacity>
          </View>

          <Pressable onPress={() => router.push("/stopwatch")}>
            <Text className="text-white font-semibold mt-3">Stopwatch</Text>
          </Pressable>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Homepage;
