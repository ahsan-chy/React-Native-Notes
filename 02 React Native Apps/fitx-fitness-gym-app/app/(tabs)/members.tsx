import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React from "react";
import { EvilIcons } from "@expo/vector-icons";

const membersData = [
  { id: "1", name: "John Doe", status: "Active Member" },
  { id: "2", name: "Jane Smith", status: "On Leave" },
  { id: "3", name: "Mike Johnson", status: "Expired" },
];

const MemberCard = ({ name, status }: any) => (
  <TouchableOpacity className="flex-row items-center bg-white p-4 mb-3 rounded-xl shadow-sm">
    <View className="w-14 h-14 rounded-full bg-gray-100 justify-center items-center mr-4">
      <EvilIcons name="user" size={36} color="#A8B5DB" />
    </View>
    <View>
      <Text className="text-lg font-semibold text-secondary">{name}</Text>
      <Text className="text-sm text-gray-500">{status}</Text>
    </View>
  </TouchableOpacity>
);

const Members = () => {
  return (
    <>
      <View className="flex-1 bg-[#f9fafb] px-5 py-6 mt-14">
        <Text className="text-2xl font-bold text-secondary mb-4">Gym Members</Text>
        <FlatList
          data={membersData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <MemberCard name={item.name} status={item.status} />}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </>
  );
};

export default Members;
