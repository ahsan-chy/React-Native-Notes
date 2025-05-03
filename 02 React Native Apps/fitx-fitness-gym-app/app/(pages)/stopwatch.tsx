// - Dark Theme
import React, { useState, useRef } from "react";
import { View, Text, TouchableOpacity, Share } from "react-native";
import { Feather, Ionicons, Entypo } from "@expo/vector-icons";

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startStopwatch = () => {
    if (isRunning) {
      clearInterval(intervalRef.current!);
    } else {
      intervalRef.current = setInterval(() => {
        setTime((prev) => prev + 10);
      }, 10);
    }
    setIsRunning(!isRunning);
  };

  const resetStopwatch = () => {
    clearInterval(intervalRef.current!);
    setTime(0);
    setIsRunning(false);
  };

  const shareTime = async () => {
    const message = `My stopwatch time: ${formatTime(time)}`;
    await Share.share({ message });
  };

  const formatTime = (milliseconds: number) => {
    const mins = Math.floor((milliseconds % 3600000) / 60000)
      .toString()
      .padStart(1, "0");
    const secs = Math.floor((milliseconds % 60000) / 1000)
      .toString()
      .padStart(2, "0");
    const millis = Math.floor((milliseconds % 1000) / 10)
      .toString()
      .padStart(2, "0");
    return `${mins}:${secs}.${millis}`;
  };

  const toggleTheme = () => {
    setIsDarkTheme((prev) => !prev);
  };

  return (
    <View
      className={`flex-1 items-center justify-between pt-20 pb-10 ${
        isDarkTheme ? "bg-[#1E1E1E]" : "bg-lightWhite"
      }`}>
      <View className="w-full flex-row items-center justify-center relative">
        <Text className="text-4xl font-bold" style={{ color: isDarkTheme ? "white" : "black" }}>
          Stopwatch
        </Text>
        <TouchableOpacity onPress={toggleTheme} style={{ position: "absolute", right: 20 }}>
          <Ionicons
            name={isDarkTheme ? "sunny" : "moon"}
            size={28}
            color={isDarkTheme ? "white" : "black"}
          />
        </TouchableOpacity>
      </View>

      <View
        className={`${
          isDarkTheme ? "bg-[#2C2C2C]" : "bg-lightWhite"
        } w-64 h-64 rounded-full shadow-lg items-center justify-center`}>
        <Text className="text-5xl font-semibold" style={{ color: isDarkTheme ? "white" : "black" }}>
          {formatTime(time)}
        </Text>
      </View>

      <View className="flex-row items-center justify-between w-full px-16">
        <TouchableOpacity onPress={resetStopwatch}>
          <Feather name="rotate-ccw" size={28} color={isDarkTheme ? "white" : "black"} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={startStopwatch}
          className={`bg-primary w-16 h-16 rounded-full items-center justify-center shadow-lg`}>
          <Ionicons name={isRunning ? "pause" : "play"} size={30} color="white" />
        </TouchableOpacity>

        <TouchableOpacity onPress={shareTime}>
          <Entypo name="share" size={28} color={isDarkTheme ? "white" : "black"} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Stopwatch;
