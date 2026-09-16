// import "/global.css";
import { tabs } from "@/constants/data";
import { colors, components } from "@/constants/theme";

import { Tabs } from "expo-router";
import { Image, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { clsx } from "clsx";
const TabIcon = ({ focused, icon }: TabIconProps) => {
  console.log("focused", focused);
  return (
    <View className="w-12 h-12 items-center justify-center">
      <View
        className={clsx(
          "w-12 h-12 items-center justify-center rounded-full bg-transparent",
          focused && "bg-yellow-400",
        )}
      >
        <Image source={icon} resizeMode="contain" className="w-6 h-6" />
      </View>
    </View>
  );
};
console.log("tabs", tabs);
export default function TabLayout() {
  const insets = useSafeAreaInsets();
  const tabBar = components.tabBar;
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          bottom: Math.max(insets.bottom, tabBar.horizontalInset),
          height: tabBar.height,
          marginHorizontal: tabBar.horizontalInset,
          borderRadius: tabBar.radius,
          backgroundColor: colors.primary,
          borderTopWidth: 0,
          elevation: 0,
        },
        tabBarItemStyle: {
          paddingVertical: tabBar.height / 2 - tabBar.iconFrame / 1.6,
        },
        tabBarIconStyle: {
          width: tabBar.iconFrame,
          height: tabBar.iconFrame,
          alignItems: "center",
        },
      }}
    >
      {tabs.map((tab) => (
        <Tabs.Screen
          key={tab.name}
          name={tab.name}
          options={{
            title: tab.title,
            tabBarIcon: ({ focused }) => (
              <TabIcon focused={focused} icon={tab.icon} />
            ),
          }}
        />
      ))}
    </Tabs>
  );
}
