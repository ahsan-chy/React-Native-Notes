import { Text, TouchableOpacity, SafeAreaView, ScrollView, Alert } from "react-native";
import React, { useState } from "react";
import { EvilIcons, Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import Input from "@/components/ui/Input";
import DateInput from "@/components/ui/DateInput";
import SelectInput from "@/components/ui/SelectInput";
import { SuccessToast } from "@/components/ui/Toast";

const AddMember = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    cnic: "",
    address: "",
    joinDate: "",
    membershipFeeDate: "",
    gender: "", // ✅ include gender here
  });

  const handleInputChange = (key: string, value: string) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleAddMember = () => {
    const { name, email, phone } = formData;
    if (!name || !email || !phone) {
      Alert.alert("Error", "Please fill in all required fields.");
      return;
    }

    SuccessToast("Member added successfully!");

    console.log(formData);
    router.push("/owner-dashboard");
    setFormData({
      name: "",
      email: "",
      phone: "",
      cnic: "",
      address: "",
      joinDate: "",
      membershipFeeDate: "",
      gender: "",
    });
  };

  return (
    <SafeAreaView className="flex-1 bg-white mt-14">
      <ScrollView contentContainerStyle={{ paddingVertical: 30 }} className="px-6">
        <Text className="text-2xl font-bold text-secondary text-center mb-6">Add New Member</Text>

        <Input
          placeholder="Name"
          prefix={<EvilIcons name="user" size={24} color="#1E1E1E" />}
          value={formData.name}
          onChangeText={(text) => handleInputChange("name", text)}
        />

        <SelectInput
          label="Gender"
          value={formData.gender}
          prefix={<Feather name="user" size={20} color="#1E1E1E" />}
          onChange={(val) => handleInputChange("gender", val)}
          options={[
            { label: "Select Gender", value: "" },
            { label: "Male", value: "male" },
            { label: "Female", value: "female" },
            { label: "Other", value: "other" },
          ]}
        />

        <Input
          placeholder="Email"
          prefix={<Feather name="mail" size={20} color="#1E1E1E" />}
          value={formData.email}
          onChangeText={(text) => handleInputChange("email", text)}
          keyboardType="email-address"
        />
        <Input
          placeholder="Phone"
          prefix={<Feather name="phone" size={20} color="#1E1E1E" />}
          value={formData.phone}
          onChangeText={(text) => handleInputChange("phone", text)}
          keyboardType="phone-pad"
        />
        <Input
          placeholder="CNIC"
          prefix={<Feather name="credit-card" size={20} color="#1E1E1E" />}
          value={formData.cnic}
          onChangeText={(text) => handleInputChange("cnic", text)}
          keyboardType="phone-pad"
        />
        <Input
          placeholder="Address"
          prefix={<Feather name="map-pin" size={20} color="#1E1E1E" />}
          value={formData.address}
          onChangeText={(text) => handleInputChange("address", text)}
        />

        <DateInput
          label="Join Date"
          value={formData.joinDate}
          onChange={(val) => handleInputChange("joinDate", val)}
        />

        <DateInput
          label="Membership Fee Date"
          value={formData.membershipFeeDate}
          onChange={(val) => handleInputChange("membershipFeeDate", val)}
        />

        <TouchableOpacity
          onPress={handleAddMember}
          className="bg-primary py-3 mt-10 rounded-full shadow-md">
          <Text className="text-white text-center font-semibold text-base">Add Member</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddMember;
