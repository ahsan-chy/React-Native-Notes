import { Text, View } from "react-native";
import { Link, useRouter } from "expo-router";
import Homepage from "@/components/Homepage";

export default function Index() {
  const router = useRouter();

  return (
    // <View className="flex-1 items-center justify-center bg-light-100">
    //   <Text className="text-3xl text-primary">FITX Fitness GYM</Text>
    //   <Text className="text-3xl text-secondary">FITX Fitness GYM</Text>

    //   <Link href="/signup" className="mt-4 text-blue-500">
    //     Sign Up
    //   </Link>

    //   <Text onPress={() => router.push("/signin")} className="mt-2 text-blue-700">
    //     Sign In
    //   </Text>
    // </View>
    <>
      <Homepage />
    </>
  );
}
