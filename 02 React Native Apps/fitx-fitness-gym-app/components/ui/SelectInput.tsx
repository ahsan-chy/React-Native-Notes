import React from "react";
import { View } from "react-native";
import { Picker } from "@react-native-picker/picker";

interface SelectInputProps {
  label?: string;
  value: string;
  onChange: (val: string) => void;
  options: { label: string; value: string }[];
  containerStyle?: string;
  prefix?: React.ReactNode;
}

const SelectInput: React.FC<SelectInputProps> = ({
  label,
  value,
  onChange,
  options,
  containerStyle = "",
  prefix,
}) => {
  return (
    <View className={`mb-4 ${containerStyle}`}>
      {/* {label && <Text className="text-sm text-neutral-700 mb-1">{label}</Text>} */}

      <View className="flex-row items-center border-b border-gray-300 pb-1">
        {prefix && <View className="mr-0">{prefix}</View>}

        <View className="flex-1">
          <Picker
            selectedValue={value}
            onValueChange={onChange}
            style={{
              color: value ? "#1E1E1E" : "#999999", // placeholder gray
              //   height: Platform.OS === "android" ? 40 : undefined,
            }}
            dropdownIconColor="#999999">
            {options.map((option) => (
              <Picker.Item key={option.value} label={option.label} value={option.value} />
            ))}
          </Picker>
        </View>
      </View>
    </View>
  );
};

export default SelectInput;
