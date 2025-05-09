import React from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";

type DropdownItem = {
  key: string;
  label: string;
  icon?: React.ComponentType<{ size?: number; color?: string }>;
};

interface DropdownProps {
  items: DropdownItem[];
  onSelect: (key: string) => void;
  buttonLabel?: string;
  moreIcon?: React.ReactNode;
}

const Dropdown: React.FC<DropdownProps> = ({ items, onSelect, buttonLabel, moreIcon }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleSelect = (key: string) => {
    setIsOpen(false);
    onSelect(key);
  };

  return (
    <View className="relative">
      <TouchableOpacity
        className="flex-row items-center space-x-2 p-2 pt-1"
        onPress={() => setIsOpen((prev) => !prev)}>
        {moreIcon && <View>{moreIcon}</View>}
        {buttonLabel && <Text className="text-base text-gray-800">{buttonLabel}</Text>}
      </TouchableOpacity>

      {isOpen && (
        <View
          className="absolute right-0 min-w-28 bg-white rounded shadow"
          style={{
            top: 25,
          }}>
          <FlatList
            data={items}
            keyExtractor={(item) => item.key}
            renderItem={({ item }) => (
              <TouchableOpacity
                className="flex-row items-center py-2 px-3"
                onPress={() => handleSelect(item.key)}>
                {item.icon && <item.icon size={14} color="gray" />}
                <Text className="ml-2 text-xs text-gray-800 whitespace-nowrap">{item.label}</Text>
              </TouchableOpacity>
            )}
            nestedScrollEnabled
            showsVerticalScrollIndicator={true}
          />
        </View>
      )}
    </View>
  );
};

export default Dropdown;
