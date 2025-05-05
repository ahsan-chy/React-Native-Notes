import { View, Text, TouchableOpacity, Image, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import { EvilIcons, Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const Profile = () => {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-white px-6 mt-14">
      <ScrollView contentContainerStyle={{ paddingVertical: 30 }}>
        {/* Profile Header */}
        <View className="items-center mb-8">
          <Image
            source={require("@/assets/images/profile.png")}
            className="w-28 h-28 rounded-full mb-4"
          />
          <Text className="text-xl font-bold text-secondary">Ali Raza</Text>
          <Text className="text-sm text-gray-500">Gym Owner</Text>
        </View>

        {/* Profile Info */}
        <View className="space-y-5">
          <ProfileRow
            icon={<EvilIcons name="user" size={24} color="#1E1E1E" />}
            label="Name"
            value="Ali Raza"
          />
          <ProfileRow
            icon={<Feather name="mail" size={20} color="#1E1E1E" />}
            label="Email"
            value="ali@example.com"
          />
          <ProfileRow
            icon={<Feather name="phone" size={20} color="#1E1E1E" />}
            label="Phone"
            value="+92 300 1234567"
          />
          <ProfileRow
            icon={<Feather name="map-pin" size={20} color="#1E1E1E" />}
            label="Address"
            value="Lahore, Pakistan"
          />
          {/* <ProfileRow
            icon={<Feather name="calendar" size={20} color="#1E1E1E" />}
            label="Member Since"
            value="Jan 2023"
          /> */}
        </View>

        {/* Actions */}
        <TouchableOpacity className="bg-primary py-3 mt-10 rounded-full shadow-md">
          <Text className="text-white text-center font-semibold text-base">Edit Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="py-3 mt-4 rounded-full border border-red-400"
          onPress={() => router.push("/signin")}>
          <Text className="text-red-500 text-center font-semibold text-base">Log Out</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const ProfileRow = ({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) => (
  <View className="flex-row items-center border-b border-gray-200 pb-4">
    <View className="mr-4">{icon}</View>
    <View>
      <Text className="text-sm text-gray-400">{label}</Text>
      <Text className="text-base text-secondary font-medium">{value}</Text>
    </View>
  </View>
);

export default Profile;
