// import { Stack } from "expo-router";
// import { StatusBar } from "react-native";
// import "./global.css";

// export default function RootLayout() {
//   return (
//     <>
//       {/* <Homepage /> */}
//       {/* <StatusBar hidden={true} /> */}

//       <Stack>
//         <Stack.Screen
//           name="(tabs)"
//           options={{
//             headerShown: false,
//           }}
//         />
//         {/* <Stack.Screen
//           name="movie/[id]"
//           options={{
//             headerShown: false,
//           }}
//         /> */}
//       </Stack>
//       {/* <Stack screenOptions={{ headerShown: false }}/> */}
//     </>
//   );
// }

import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "./global.css"; // Tailwind/NativeWind config

export default function RootLayout() {
  return (
    <>
      <StatusBar style="dark" backgroundColor="white" />

      <Stack screenOptions={{ headerShown: false }}>
        {/* (tabs) is your root screen group */}
        <Stack.Screen name="(tabs)" />
        {/* Optional NotFound screen */}
        <Stack.Screen name="+not-found" />
      </Stack>
    </>
  );
}
