import { Tabs } from "expo-router";
import React from "react";
import { Platform, Pressable } from "react-native";
import { StyleSheet, useUnistyles } from "react-native-unistyles";

import { TabBarIcon } from "@/components/tab-bar-icon";
import { TabBarLabel } from "@/components/tab-bar-label";
import { NAVIGATION } from "@/constants/navigation";
import { STRINGS } from "@/constants/strings";
import { ms } from "@/utils";

export default function TabsLayout(): React.JSX.Element {
  const { theme } = useUnistyles();

  const MAIN_TABS: string[] = [
    NAVIGATION.home,
    NAVIGATION.progress,
    NAVIGATION.learn,
    NAVIGATION.journal,
    NAVIGATION.profile,
  ];

  return (
    <Tabs
      initialRouteName={NAVIGATION.home}
      backBehavior="history"
      screenOptions={({ route }) => {
        const isMainTab = MAIN_TABS.includes(route.name);

        if (!isMainTab) {
          return {
            href: null,
            tabBarItemStyle: { display: "none" as const },
            tabBarButton: () => null,
            headerShown: false,
            tabBarStyle: { display: "none" as const },
          };
        }

        return {
          tabBarActiveTintColor: theme.colors.tabActive,
          tabBarInactiveTintColor: theme.colors.tabInactive,
          tabBarActiveBackgroundColor: theme.colors.tabActiveBg,
          tabBarInactiveBackgroundColor: theme.colors.transparent,
          headerShown: false,
          tabBarStyle: styles.tabBar,
          tabBarItemStyle: styles.tabBarItem,
          tabBarButton: (props) => (
            <Pressable
              {...(props as any)}
              style={[props.style, styles.tabBarButton]}
            />
          ),
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              color={color as string}
              focused={focused}
              routeName={route.name}
            />
          ),
          tabBarLabel: ({ color, focused }) => (
            <TabBarLabel
              color={color as string}
              focused={focused}
              routeName={route.name}
            />
          ),
        };
      }}
    >
      <Tabs.Screen
        name={NAVIGATION.home}
        options={{
          title: STRINGS.tabs.home,
        }}
      />
      <Tabs.Screen
        name={NAVIGATION.progress}
        options={{
          title: STRINGS.tabs.progress,
        }}
      />
      <Tabs.Screen
        name={NAVIGATION.learn}
        options={{
          title: STRINGS.tabs.learn,
        }}
      />
      <Tabs.Screen
        name={NAVIGATION.journal}
        options={{
          title: STRINGS.tabs.journal,
        }}
      />
      <Tabs.Screen
        name={NAVIGATION.profile}
        options={{
          title: STRINGS.tabs.profile,
        }}
      />
      <Tabs.Screen
        name={NAVIGATION.explore}
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name={NAVIGATION.measurement}
        options={{
          href: null,
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create((theme) => ({
  tabBar: {
    position: "absolute",
    bottom: Platform.OS === "ios" ? ms(24) : ms(16),
    left: ms(24),
    right: ms(24),
    start: ms(24),
    end: ms(24),
    height: ms(70),
    backgroundColor: theme.colors.tabBarBg,
    borderRadius: ms(35),
    borderTopWidth: 0,
    paddingTop: ms(4),
    paddingBottom: ms(4),
    paddingHorizontal: ms(4),
    elevation: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 16,
  },
  tabBarItem: {
    height: ms(62),
    alignItems: "center",
    justifyContent: "center",
  },
  tabBarButton: {
    width: ms(62),
    height: ms(62),
    borderRadius: ms(31),
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
}));
