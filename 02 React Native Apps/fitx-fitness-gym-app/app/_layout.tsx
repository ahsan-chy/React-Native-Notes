import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "./global.css"; // Tailwind/NativeWind config

export default function RootLayout() {
  return (
    <>
      <StatusBar style="dark" translucent backgroundColor="white" />

      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />

        {/*
         */}
        <Stack.Screen name="(auth)" />
        <Stack.Screen name="(owner)" />
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="(staff)" />
        <Stack.Screen name="(member)" />
        <Stack.Screen name="member/[id]" />

        {/* Optional NotFound screen */}
        <Stack.Screen name="+not-found" />
      </Stack>
    </>
  );
}
