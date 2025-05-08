// components/ToastConfig.tsx
import { View, Text, TouchableOpacity } from "react-native";
import { Feather, Ionicons } from "@expo/vector-icons";
import Toast, { BaseToastProps } from "react-native-toast-message";

const toastConfig = {
  success: ({ text1, text2 }: BaseToastProps) => (
    <View className="flex-row items-center px-4 py-3 bg-green-100 border-l-4 border-green-500 rounded-md mx-4 mt-6">
      <Ionicons name="checkmark-circle" size={24} color="#22C55E" className="mr-2" />
      <View className="flex-1">
        {/* <Text className="text-green-800 font-semibold">{text1}</Text> */}
        {text2 ? <Text className="text-green-700 text-sm">{text2}</Text> : null}
      </View>
      <TouchableOpacity onPress={() => Toast.hide()}>
        <Feather name="x" size={20} color="#22C55E" />
      </TouchableOpacity>
    </View>
  ),
  error: ({ text1, text2 }: BaseToastProps) => (
    <View className="flex-row items-center px-4 py-3 bg-red-100 border-l-4 border-red-500 rounded-md mx-4 mt-6">
      <Ionicons name="alert-circle" size={24} color="#EF4444" className="mr-2" />
      <View className="flex-1">
        {/* <Text className="text-red-800 font-semibold">{text1}</Text> */}
        {text2 ? <Text className="text-red-700 text-sm">{text2}</Text> : null}
      </View>
      <TouchableOpacity onPress={() => Toast.hide()}>
        <Feather name="x" size={20} color="#EF4444" />
      </TouchableOpacity>
    </View>
  ),
};

export default toastConfig;
