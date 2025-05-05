import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, ScrollView, SafeAreaView } from "react-native";

export default function AddMember() {
  const route = useRouter();
  const [form, setForm] = useState({
    name: "",
    phone: "",
    whatsapp: "",
    email: "",
    cnic: "",
    address: "",
    designation: "",
    joiningDate: "",
  });

  const handleChange = (key: string, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = () => {
    console.log("New Member Data:", form);
    // TODO: handle save logic
    route.push("/members"); // Redirect to the Members page
  };

  return (
    <SafeAreaView className="flex-1 bg-white px-6 pt-6 mt-14">
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text className="text-2xl font-bold text-secondary mb-6">Add New Member</Text>

        <TextInput
          placeholder="Full Name"
          placeholderTextColor="#999"
          className="border-b border-gray-300 text-black mb-4 pb-2"
          value={form.name}
          onChangeText={(val) => handleChange("name", val)}
        />
        <TextInput
          placeholder="Phone Number"
          placeholderTextColor="#999"
          keyboardType="phone-pad"
          className="border-b border-gray-300 text-black mb-4 pb-2"
          value={form.phone}
          onChangeText={(val) => handleChange("phone", val)}
        />
        <TextInput
          placeholder="WhatsApp Number"
          placeholderTextColor="#999"
          keyboardType="phone-pad"
          className="border-b border-gray-300 text-black mb-4 pb-2"
          value={form.whatsapp}
          onChangeText={(val) => handleChange("whatsapp", val)}
        />
        <TextInput
          placeholder="Email"
          placeholderTextColor="#999"
          keyboardType="email-address"
          className="border-b border-gray-300 text-black mb-4 pb-2"
          value={form.email}
          onChangeText={(val) => handleChange("email", val)}
        />
        <TextInput
          placeholder="CNIC"
          placeholderTextColor="#999"
          className="border-b border-gray-300 text-black mb-4 pb-2"
          value={form.cnic}
          onChangeText={(val) => handleChange("cnic", val)}
        />
        <TextInput
          placeholder="Joining Date (e.g., 2024-05-03)"
          placeholderTextColor="#999"
          className="border-b border-gray-300 text-black mb-4 pb-2"
          value={form.joiningDate}
          onChangeText={(val) => handleChange("joiningDate", val)}
        />
        <TextInput
          placeholder="Job Designation"
          placeholderTextColor="#999"
          className="border-b border-gray-300 text-black mb-4 pb-2"
          value={form.designation}
          onChangeText={(val) => handleChange("designation", val)}
        />
        <TextInput
          placeholder="Address"
          placeholderTextColor="#999"
          className="border-b border-gray-300 text-black mb-6 pb-2"
          value={form.address}
          onChangeText={(val) => handleChange("address", val)}
        />

        <TouchableOpacity className="bg-primary py-3 rounded-full shadow-md" onPress={handleSubmit}>
          <Text className="text-white text-center font-semibold text-base">Save Member</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
