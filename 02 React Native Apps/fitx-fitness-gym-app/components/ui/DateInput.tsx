import React from "react";
import { View, Text, TouchableOpacity, Platform } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Feather } from "@expo/vector-icons";
import moment from "moment";

interface DateInputProps {
  label?: string;
  value: string;
  onChange: (val: string) => void;
  mode?: "date" | "time";
}

const DateInput: React.FC<DateInputProps> = ({ label, value, onChange, mode = "date" }) => {
  const [show, setShow] = React.useState(false);

  const handleChange = (_: any, selectedDate?: Date) => {
    setShow(false);
    if (selectedDate) {
      const formatted = moment(selectedDate).format("DD-MM-YYYY"); // keep consistent for storage

      onChange(formatted);
    }
  };
  const displayValue = value ? moment(value).format("DD-MM-YYYY") : label;

  return (
    <View className="mb-4">
      {/* {label && <Text className="text-sm text-neutral-700 mb-1">{label}</Text>} */}
      <TouchableOpacity
        onPress={() => setShow(true)}
        className="flex-row items-center border-b border-gray-300 pb-1">
        <View className="mr-2">
          <Feather name="calendar" size={20} color="#1E1E1E" className="mr-2" />
        </View>
        <Text className={`text-base py-4 ${label && !value ? "text-[#999999]" : "text-[#1E1E1E]"}`}>
          {displayValue}
        </Text>
      </TouchableOpacity>
      {show && (
        <DateTimePicker
          value={value ? moment(value, "DD-MM-YYYY").toDate() : new Date()}
          mode={mode}
          display={Platform.OS === "ios" ? "spinner" : "default"}
          onChange={handleChange}
          className=""
        />
      )}
    </View>
  );
};

export default DateInput;
