import { Tabs } from "expo-router";
import { MaterialIcons, FontAwesome5, EvilIcons } from "@expo/vector-icons";
import { View, Text } from "react-native";

function TabIcon({
  focused,
  title,
  icon,
}: {
  focused: boolean;
  title: string;
  icon: React.ReactNode;
}) {
  return focused ? (
    <View className="flex-row min-w-[112px] min-h-14 mt-4 justify-center items-center rounded-full overflow-hidden">
      {icon}
      <Text className="text-secondary text-base font-semibold ml-2">{title}</Text>
    </View>
  ) : (
    <View className="size-full justify-center items-center mt-4 rounded-full">{icon}</View>
  );
}

export default function OwnerTabsLayout() {
  return (
    <Tabs
      initialRouteName="owner-dashboard"
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#ffffff",
          borderRadius: 50,
          marginHorizontal: 20,
          marginBottom: 36,
          height: 52,
          position: "absolute",
          borderTopWidth: 1,
          shadowColor: "transparent",
        },
      }}>
      <Tabs.Screen
        name="owner-dashboard"
        options={{
          title: "Dashboard",
          headerShown: false,
          tabBarStyle: { display: "none" },
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              title="Dashboard"
              icon={
                <MaterialIcons name="dashboard" size={20} color={focused ? "#1E1E1E" : "#A8B5DB"} />
              }
            />
          ),
        }}
      />
      <Tabs.Screen
        name="members"
        options={{
          title: "Members",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              title="Members"
              icon={<FontAwesome5 name="users" size={20} color={focused ? "#1E1E1E" : "#A8B5DB"} />}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="staff"
        options={{
          title: "Staff",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              title="Staff"
              icon={
                <MaterialIcons name="people" size={20} color={focused ? "#1E1E1E" : "#A8B5DB"} />
              }
            />
          ),
        }}
      />
      <Tabs.Screen
        name="fees"
        options={{
          title: "Fees",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              title="Fees"
              icon={
                <MaterialIcons name="payment" size={20} color={focused ? "#1E1E1E" : "#A8B5DB"} />
              }
            />
          ),
        }}
      />
      <Tabs.Screen
        name="add-member"
        options={{
          title: "Add Member",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              title="Add Member"
              icon={<EvilIcons name="user" size={24} color={focused ? "#1E1E1E" : "#A8B5DB"} />}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="member/[id]"
        options={{
          href: null, // 👈 hides from tab bar
          headerShown: false,
        }}
      />

      {/* <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              title="Profile"
              icon={<EvilIcons name="user" size={24} color={focused ? "#1E1E1E" : "#A8B5DB"} />}
            />
          ),
        }}
      /> */}
    </Tabs>
  );
}
