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
import { Ionicons, MaterialIcons, FontAwesome5 } from "@expo/vector-icons";

const OwnerDashboard = () => {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1">
        {/* Top Banner */}
        <ImageBackground
          source={require("../../assets/images/gym-room.jpg")}
          className="flex-[0.3] justify-center items-center"
          resizeMode="cover">
          <Text className="text-white text-3xl font-bold drop-shadow-md">Owner Dashboard</Text>
          <Text className="text-white text-lg mt-1 drop-shadow-sm">Manage with Power</Text>
        </ImageBackground>

        {/* Scrollable Cards */}
        <ScrollView
          className="flex-1 px-6 py-4"
          contentContainerStyle={{ paddingBottom: 20 }}
          showsVerticalScrollIndicator={false}>
          {/* Quick Stats */}
          <View className="flex-row justify-between mb-6">
            <View className="flex-1 bg-primary/90 rounded-xl p-4 mr-2">
              <Text className="text-white text-sm">Total Members</Text>
              <Text className="text-white text-2xl font-bold mt-2">240</Text>
            </View>
            <View className="flex-1 bg-secondary rounded-xl p-4 ml-2">
              <Text className="text-white text-sm">Active Staff</Text>
              <Text className="text-white text-2xl font-bold mt-2">12</Text>
            </View>
          </View>

          {/* Action Cards */}
          <View className="flex-row flex-wrap justify-between mb-6">
            <TouchableOpacity
              className="w-[48%] items-center bg-white border border-gray-200 rounded-xl py-5 shadow-sm mb-4"
              onPress={() => router.push("/members")}>
              <FontAwesome5 name="users" size={22} color="#1E1E1E" />
              <Text className="text-secondary mt-2 font-semibold">View Members</Text>
            </TouchableOpacity>

            <TouchableOpacity
              className="w-[48%] items-center bg-white border border-gray-200 rounded-xl py-5 shadow-sm mb-4"
              onPress={() => router.push("/add-member")}>
              <Ionicons name="person-add-outline" size={24} color="#1E1E1E" />
              <Text className="text-secondary mt-2 font-semibold">Add Member</Text>
            </TouchableOpacity>

            <TouchableOpacity
              className="w-[48%] items-center bg-white border border-gray-200 rounded-xl py-5 shadow-sm mb-4"
              onPress={() => router.push("/staff")}>
              <MaterialIcons name="people-outline" size={24} color="#1E1E1E" />
              <Text className="text-secondary mt-2 font-semibold">Manage Staff</Text>
            </TouchableOpacity>

            <TouchableOpacity
              className="w-[48%] items-center bg-white border border-gray-200 rounded-xl py-5 shadow-sm mb-4"
              onPress={() => router.push("/fees")}>
              <MaterialIcons name="payment" size={24} color="#1E1E1E" />
              <Text className="text-secondary mt-2 font-semibold">Fee Records</Text>
            </TouchableOpacity>

            <TouchableOpacity
              className="w-[48%] items-center bg-white border border-gray-200 rounded-xl py-5 shadow-sm"
              // onPress={() => router.push("/gym-info")}
            >
              <Ionicons name="information-circle-outline" size={24} color="#1E1E1E" />
              <Text className="text-secondary mt-2 font-semibold">Gym Info</Text>
            </TouchableOpacity>
          </View>

          {/* Notice */}
          <View className="bg-gray-100 rounded-xl p-4">
            <Text className="text-secondary text-lg font-semibold mb-2">Gym Timing</Text>
            <Text className="text-black text-base">Morning: 6:00 AM - 9:00 AM</Text>
            <Text className="text-black text-base">Evening: 6:00 PM - 1:00 AM</Text>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default OwnerDashboard;
