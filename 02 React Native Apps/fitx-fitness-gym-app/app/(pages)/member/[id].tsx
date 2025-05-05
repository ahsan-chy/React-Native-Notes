import { useLocalSearchParams } from "expo-router";
import { View, Text } from "react-native";

export default function MemberDetail() {
  const { id } = useLocalSearchParams();

  return (
    <View className=" mt-14">
      <Text>Member Details for ID: {id}</Text>
      {/* Show member info here */}
    </View>
  );
}
