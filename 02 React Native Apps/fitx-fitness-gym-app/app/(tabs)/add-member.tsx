import { View, Text, TextInput, Button } from "react-native";

export default function AddMember() {
  return (
    <View className="mt-14">
      <Text>Add New Member</Text>
      <TextInput placeholder="Name" />
      <TextInput placeholder="Phone" />
      <Button title="Save" onPress={() => {}} />
    </View>
  );
}
