import { View, Text, TouchableOpacity, Image, SafeAreaView, ScrollView, Alert } from "react-native";
import React from "react";
import { EvilIcons, Feather } from "@expo/vector-icons";
import { useRouter, useLocalSearchParams } from "expo-router";

const MemberDetail = () => {
  const router = useRouter();
  const { id } = useLocalSearchParams();
  const [menuVisible, setMenuVisible] = React.useState(false);

  const toggleMenu = () => setMenuVisible(!menuVisible);
  const closeMenu = () => setMenuVisible(false);

  // Dummy extended member data
  const member = {
    id,
    name: "John Doe",
    email: "john@example.com",
    phone: "+92 300 0000000",
    cnic: "42101-1234567-1",
    address: "Karachi, Pakistan",
    status: "Active Member",
    joinDate: "2023-01-15",
    membershipFeeDate: "2024-01-01",
  };

  const handleDelete = () => {
    Alert.alert("Confirm Delete", "Are you sure you want to delete this member?", [
      { text: "Cancel", style: "cancel" },
      {
        text: "Delete",
        style: "destructive",
        onPress: () => {
          // TODO: call delete API
          Alert.alert("Deleted", "Member has been deleted.");
          router.back();
        },
      },
    ]);
  };

  return (
    <SafeAreaView className="flex-1 bg-white mt-14 relative">
      <View className="absolute top-4 right-6 z-50">
        <TouchableOpacity onPress={toggleMenu} className="p-2">
          <Feather name="more-vertical" size={24} color="#000" />
        </TouchableOpacity>

        {menuVisible && (
          <View className="mt-2 w-32 bg-white rounded-md shadow border border-gray-200">
            <TouchableOpacity onPress={handleDelete} className="px-4 py-2">
              <Text className="text-red-500 font-medium">Delete</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>

      <ScrollView contentContainerStyle={{ paddingVertical: 30 }} className="px-6">
        {/* Profile Header */}
        <View className="items-center mb-8">
          <Image
            source={require("@/assets/images/profile.png")}
            className="w-28 h-28 rounded-full mb-4"
          />
          <Text className="text-xl font-bold text-secondary">{member.name}</Text>
          <Text className="text-sm text-gray-500">{member.status}</Text>
        </View>

        {/* Profile Info */}
        <View className="space-y-5">
          <ProfileRow
            icon={<EvilIcons name="user" size={24} color="#1E1E1E" />}
            label="Name"
            value={member.name}
          />
          <ProfileRow
            icon={<Feather name="mail" size={20} color="#1E1E1E" />}
            label="Email"
            value={member.email}
          />
          <ProfileRow
            icon={<Feather name="phone" size={20} color="#1E1E1E" />}
            label="Phone"
            value={member.phone}
          />
          <ProfileRow
            icon={<Feather name="credit-card" size={20} color="#1E1E1E" />}
            label="CNIC"
            value={member.cnic}
          />
          <ProfileRow
            icon={<Feather name="map-pin" size={20} color="#1E1E1E" />}
            label="Location"
            value={member.address}
          />
          <ProfileRow
            icon={<Feather name="calendar" size={20} color="#1E1E1E" />}
            label="Join Date"
            value={member.joinDate}
          />
          <ProfileRow
            icon={<Feather name="dollar-sign" size={20} color="#1E1E1E" />}
            label="Fee Date"
            value={member.membershipFeeDate}
          />
        </View>

        {/* Actions */}
        <TouchableOpacity
          // onPress={() => router.push(`/edit-member/${member.id}`)}
          className="bg-primary py-3 mt-10 rounded-full shadow-md">
          <Text className="text-white text-center font-semibold text-base">Update Member</Text>
        </TouchableOpacity>

        {/* <TouchableOpacity
          onPress={handleDelete}
          className="py-2 mt-4 rounded-full border border-red-400">
          <Text className="text-red-500 text-center font-semibold text-base">Delete</Text>
        </TouchableOpacity> */}
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

export default MemberDetail;
