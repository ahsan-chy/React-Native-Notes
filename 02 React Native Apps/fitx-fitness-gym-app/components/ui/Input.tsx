import React from "react";
import { TextInput, View, TextInputProps } from "react-native";

interface InputProps extends TextInputProps {
    placeholder: string;
    postfix?: React.ReactNode; // Optional postfix element
    prefix?: React.ReactNode; // Optional prefix element
    containerStyle?: string; // Optional custom Tailwind classes for the container
    inputStyle?: string; // Optional custom Tailwind classes for the input
}

const Input: React.FC<InputProps> = ({
    placeholder,
    postfix,
    prefix,
    containerStyle = "",
    inputStyle = "",
    ...rest
}) => {
    return (
        <View className={`mb-4 ${containerStyle}`}>
            <View className="flex-row items-center border-b border-gray-300 pb-1">
                {prefix && <View className="mr-2">{prefix}</View>}
                <TextInput
                    placeholder={placeholder}
                    placeholderTextColor="#999"
                    className={`flex-1 text-base text-black ${inputStyle}`}
                    {...rest}
                />
                {postfix && <View className="ml-2">{postfix}</View>}
            </View>
        </View>
    );
};

export default Input;
