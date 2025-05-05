import { Tabs } from "expo-router";
import { Text, View } from "react-native";
import { EvilIcons, Feather, FontAwesome5, MaterialIcons } from "@expo/vector-icons";

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
    <View className="flex-row w-full min-w-[112px] min-h-14 mt-4 justify-center items-center rounded-full overflow-hidden">
      {icon}
      <Text className="text-secondary text-base font-semibold ml-2">{title}</Text>
    </View>
  ) : (
    <View className="size-full justify-center items-center mt-4 rounded-full">{icon}</View>
    // <Text className="text-secondary text-base font-semibold ml-2">{title}</Text>
  );
}

export default function MembersLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarItemStyle: {
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        },
        tabBarStyle: {
          backgroundColor: "#ffffff",
          borderRadius: 50,
          marginHorizontal: 20,
          marginBottom: 36,
          height: 52,
          position: "absolute",
          borderTopWidth: 1,
          overflow: "hidden",
          shadowColor: "transparent", // Remove border/shadow
        },
      }}
      initialRouteName="members">
      <Tabs.Screen
        name="members"
        options={{
          title: "Members",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              title="Members"
              icon={
                <MaterialIcons name="dashboard" size={20} color={focused ? "#1E1E1E" : "#A8B5DB"} />
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
              icon={<FontAwesome5 name="users" size={20} color={focused ? "#1E1E1E" : "#A8B5DB"} />}
            />
          ),
        }}
      />
      {/* Member Detail will be in seprate foler  */}
      {/* <Tabs.Screen
        name="member-detail"
        options={{
          title: "Member Detail",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              title="Member Detail"
              icon={<Feather name="home" size={20} color={focused ? "#1E1E1E" : "#A8B5DB"} />}
            />
          ),
        }}
      /> */}
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              title="Profile"
              icon={<EvilIcons name="user" size={20} color={focused ? "#1E1E1E" : "#A8B5DB"} />}
            />
          ),
        }}
      />
    </Tabs>
  );
}
