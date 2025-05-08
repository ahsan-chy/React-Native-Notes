import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React from "react";
import { EvilIcons, Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const staffData = [
  { id: "1", name: "John Doe", role: "Trainer" },
  { id: "2", name: "Jane Smith", role: "Receptionist" },
  { id: "3", name: "Mike Johnson", role: "Manager" },
  { id: "4", name: "Emily Davis", role: "Trainer" },
];

const StaffCard = ({ id, name, role, onPress }: any) => (
  <TouchableOpacity
    className="flex-row items-center bg-white p-4 mb-3 rounded-xl shadow-sm"
    onPress={onPress}>
    <View className="w-14 h-14 rounded-full bg-gray-100 justify-center items-center mr-4">
      <EvilIcons name="user" size={36} color="#A8B5DB" />
    </View>
    <View>
      <Text className="text-lg font-semibold text-secondary">{name}</Text>
      <Text className="text-sm text-gray-500">{role}</Text>
    </View>
  </TouchableOpacity>
);

const Staff = () => {
  const router = useRouter();

  return (
    <View className="flex-1 bg-[#f9fafb] px-5 pt-16">
      <View>
        <View className="w-full flex-row justify-between items-start">
          <Text className="text-2xl font-bold text-secondary mb-4">Staff Members</Text>
          <TouchableOpacity
            // onPress={() => router.push("/add-staff")}
            className="bg-primary rounded-3xl shadow-lg px-3 py-2">
            <View className="flex-row items-center gap-1">
              <Feather name="plus" size={16} color="white" />
              <Text className="text-sm text-white">Add New Staff</Text>
            </View>
          </TouchableOpacity>
        </View>

        <FlatList
          data={staffData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <StaffCard
              id={item.id}
              name={item.name}
              role={item.role}
              // onPress={() => router.push(`/staff/${item.id}`)} // ✅ navigate to detail
            />
          )}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default Staff;
