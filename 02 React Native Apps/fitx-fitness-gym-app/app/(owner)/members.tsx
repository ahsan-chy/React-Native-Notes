import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React from "react";
import { EvilIcons, Feather, SimpleLineIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import Dropdown from "@/components/ui/Dropdown";
import { ErrorToast, SuccessToast } from "@/components/ui/Toast";

const membersData = [
  {
    id: "1",
    name: "Ali Khan",
    status: "Active",
    gender: "Male",
    feeStatus: "Paid",
    feeDate: "10-05-2025",
  },
  {
    id: "2",
    name: "Ayesha Ahmed",
    status: "Active",
    gender: "Female",
    feeStatus: "Pending",
    feeDate: "15-05-2025",
  },
  {
    id: "3",
    name: "Bilal Saeed",
    status: "Deactive",
    gender: "Male",
    feeStatus: "ادھار",
    feeDate: "20-04-2025",
  },
  {
    id: "4",
    name: "Fatima Noor",
    status: "Active",
    gender: "Female",
    feeStatus: "Paid",
    feeDate: "25-05-2025",
  },
  {
    id: "5",
    name: "Hamza Tariq",
    status: "Active",
    gender: "Male",
    feeStatus: "Pending",
    feeDate: "30-05-2025",
  },
  {
    id: "6",
    name: "Zainab Ali",
    status: "Active",
    gender: "Female",
    feeStatus: "Paid",
    feeDate: "05-06-2025",
  },
  {
    id: "7",
    name: "Usman Malik",
    status: "Deactive",
    gender: "Male",
    feeStatus: "ادھار",
    feeDate: "10-06-2025",
  },
  {
    id: "8",
    name: "Sara Khan",
    status: "Active",
    gender: "Female",
    feeStatus: "Pending",
    feeDate: "15-06-2025",
  },
  {
    id: "9",
    name: "Ahmed Raza",
    status: "Active",
    gender: "Male",
    feeStatus: "Paid",
    feeDate: "20-06-2025",
  },
  {
    id: "10",
    name: "Mariam Shah",
    status: "Active",
    gender: "Female",
    feeStatus: "Pending",
    feeDate: "25-06-2025",
  },
];

const MemberCard = ({ id, name, status, gender, feeStatus, feeDate, onPress }: any) => {
  const dropdownItems = [
    {
      key: "edit",
      label: "Edit Member",
      icon: (props: any) => <Feather name="edit-2" {...props} />,
    },
    {
      key: "delete",
      label: "Delete Member",
      icon: (props: any) => <Feather name="trash-2" {...props} />,
    },
  ];

  const handleDropdownSelect = (key: string) => {
    if (key === "edit") {
      SuccessToast("Edit selected");
    } else if (key === "delete") {
      ErrorToast("Delete selected");
    }
  };

  return (
    <TouchableOpacity className="bg-white p-4 mb-3 rounded-xl shadow-sm" onPress={onPress}>
      <View className="flex-row justify-between items-start">
        <View className="flex-row">
          <View className="w-10 h-10 rounded-full bg-gray-100 mr-4 justify-center items-center">
            {!gender || gender === "Male" ? (
              <EvilIcons name="user" size={30} color="#A8B5DB" className="-mt-1" />
            ) : (
              <SimpleLineIcons name="user-female" size={20} color="#A8B5DB" />
            )}
          </View>
          <View>
            <View className="items-start flex-row gap-2 ">
              <Text className="text-lg font-semibold text-secondary">{name}</Text>
              <Text
                className={`text-base font-medium mt-1 ${
                  feeStatus === "Paid"
                    ? "text-green-600"
                    : feeStatus === "Pending"
                    ? "text-yellow-600"
                    : "text-primary"
                }`}>
                {/* <Text className="text-gray-500">Fee Status: </Text> */}
                {feeStatus}
              </Text>
            </View>

            <Text className={`text-sm ${gender === "Male" ? "text-emerald-600" : "text-primary"}`}>
              {gender}
            </Text>

            <View className="flex-row items-center gap-1">
              <Text className="text-sm text-secondary">Fee Submition Date:</Text>
              <Text className="text-xs text-gray-600">{feeDate}</Text>
            </View>
          </View>
        </View>
        {/* <Feather name="more-vertical" size={20} color="#A8B5DB" /> */}
        <Dropdown
          items={dropdownItems}
          onSelect={handleDropdownSelect}
          moreIcon={<Feather name="more-vertical" size={20} color="#A8B5DB" />}
        />
      </View>
    </TouchableOpacity>
  );
};

const Members = () => {
  const router = useRouter();

  return (
    <View className="flex-1 bg-[#f9fafb] px-5 pt-16">
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

        {/* <FlatList
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
        /> */}
        <FlatList
          data={membersData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <MemberCard
              id={item.id}
              name={item.name}
              status={item.status}
              gender={item.gender}
              feeStatus={item.feeStatus}
              feeDate={item.feeDate}
              onPress={() => router.push(`/member/${item.id}`)}
            />
          )}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default Members;
