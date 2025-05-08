import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React from "react";
import { EvilIcons, Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const membersData = [
  { id: "1", name: "John Doe", status: "Active Member" },
  { id: "2", name: "Jane Smith", status: "On Leave" },
  { id: "3", name: "Mike Johnson", status: "Expired" },
  { id: "4", name: "Emily Davis", status: "Active Member" },
  { id: "5", name: "Chris Brown", status: "On Leave" },
  { id: "6", name: "Sarah Wilson", status: "Expired" },
  { id: "7", name: "David Lee", status: "Active Member" },
  { id: "8", name: "Sophia Martinez", status: "On Leave" },
  { id: "9", name: "James Anderson", status: "Expired" },
  { id: "10", name: "Olivia Taylor", status: "Active Member" },
];

const MemberCard = ({ id, name, status, onPress }: any) => (
  <TouchableOpacity
    className="flex-row items-center bg-white p-4 mb-3 rounded-xl shadow-sm"
    onPress={onPress}>
    <View className="w-14 h-14 rounded-full bg-gray-100 justify-center items-center mr-4">
      <EvilIcons name="user" size={36} color="#A8B5DB" />
    </View>
    <View>
      <Text className="text-lg font-semibold text-secondary">{name}</Text>
      <Text className="text-sm text-red-500">{status}</Text>
    </View>
  </TouchableOpacity>
);

const Members = () => {
  const router = useRouter();

  return (
    <View className="flex-1 bg-[#f9fafb] px-5 py-6 pt-14">
      <View>
        <View className="w-full flex-row justify-between items-start">
          <Text className="text-2xl font-bold text-secondary mb-4">Gym Members</Text>
          <TouchableOpacity
            onPress={() => router.push("/add-member")}
            className="bg-primary rounded-3xl shadow-lg px-3 py-2">
            <View className="flex-row items-center gap-1">
              <Feather name="plus" size={16} color="white" />
              <Text className="text-sm text-white">Add Member</Text>
            </View>
          </TouchableOpacity>
        </View>

        <FlatList
          data={membersData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <MemberCard
              id={item.id}
              name={item.name}
              status={item.status}
              onPress={() => router.push(`/member/${item.id}`)} // ✅ navigate to detail
            />
          )}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default Members;
