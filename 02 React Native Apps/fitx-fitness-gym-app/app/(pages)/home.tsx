// app/(tabs)/home.tsx
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  SafeAreaView,
} from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import { FontAwesome5, Ionicons, MaterialIcons } from "@expo/vector-icons";

const Home = () => {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1">
        {/* Top Banner */}
        <ImageBackground
          source={require("../../assets/images/gym-room.jpg")}
          className="flex-[0.3] justify-center items-center"
          resizeMode="cover">
          <Text className="text-white text-3xl font-bold drop-shadow-md">Welcome to FITX</Text>
          <Text className="text-white text-lg mt-1 drop-shadow-sm">Train Hard. Stay Strong.</Text>
        </ImageBackground>

        {/* Scrollable Content */}
        <ScrollView
          className="flex-1 px-6 py-4"
          contentContainerStyle={{ paddingBottom: 20 }}
          showsVerticalScrollIndicator={false}>
          {/* Quick Stats */}
          <View className="flex-row justify-between mb-6">
            <View className="flex-1 bg-primary/90 rounded-xl p-4 mr-2">
              <Text className="text-white text-sm">Calories Burned</Text>
              <Text className="text-white text-2xl font-bold mt-2">320</Text>
            </View>
            <View className="flex-1 bg-secondary rounded-xl p-4 ml-2">
              <Text className="text-white text-sm">Workout Days</Text>
              <Text className="text-white text-2xl font-bold mt-2">5/7</Text>
            </View>
          </View>

          {/* Action Buttons */}
          <View className="flex-row flex-wrap justify-between mb-6">
            <TouchableOpacity
              className="w-[48%] items-center bg-white border border-gray-200 rounded-xl py-5 shadow-sm mb-4"
              onPress={() => router.push("/members")}>
              <MaterialIcons name="dashboard" size={24} color="#1E1E1E" />
              <Text className="text-secondary mt-2 font-semibold">Members List</Text>
            </TouchableOpacity>

            <TouchableOpacity
              className="w-[48%] items-center bg-white border border-gray-200 rounded-xl py-5 shadow-sm mb-4"
              onPress={() => router.push("/add-member")}>
              <Ionicons name="person-add-outline" size={24} color="#1E1E1E" />
              <Text className="text-secondary mt-2 font-semibold">Add Member</Text>
            </TouchableOpacity>

            <TouchableOpacity
              className="w-[48%] items-center bg-white border border-gray-200 rounded-xl py-5 shadow-sm"
              onPress={() => router.push("/stopwatch")}>
              <Ionicons name="stopwatch-outline" size={24} color="#1E1E1E" />
              <Text className="text-secondary mt-2 font-semibold">Track Workout</Text>
            </TouchableOpacity>
          </View>

          {/* Upcoming Class */}
          <View className="bg-gray-100 rounded-xl p-4">
            <Text className="text-secondary text-lg font-semibold mb-2">GYM TiMING</Text>
            <Text className="text-black text-base">Morning: 6:00 AM - 9:00 AM</Text>
            <Text className="text-black text-base">Evening: 6:00 PM - 1:00 AM</Text>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Home;
