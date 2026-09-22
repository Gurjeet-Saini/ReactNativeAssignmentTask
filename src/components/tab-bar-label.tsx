import React from "react";
import { Text } from "react-native";
import { StyleSheet } from "react-native-unistyles";

import { NAVIGATION } from "@/constants/navigation";
import { STRINGS } from "@/constants/strings";
import { ms } from "@/utils";

interface TabBarLabelProps {
  color: string;
  routeName?: string;
  focused?: boolean;
  children?: string;
}

const routeLabels: Record<string, string> = {
  [NAVIGATION.home]: STRINGS.tabs.home,
  [NAVIGATION.progress]: STRINGS.tabs.progress,
  [NAVIGATION.learn]: STRINGS.tabs.learn,
  [NAVIGATION.journal]: STRINGS.tabs.journal,
  [NAVIGATION.profile]: STRINGS.tabs.profile,
};

export function TabBarLabel({ color, routeName, focused, children }: TabBarLabelProps) {
  const label =
    children ??
    (routeName && routeName in routeLabels
      ? routeLabels[routeName]
      : routeName && routeName in STRINGS.tabs
        ? STRINGS.tabs[routeName as keyof typeof STRINGS.tabs]
        : routeName);

  return (
    <Text
      numberOfLines={1}
      style={[styles.label, { color, fontWeight: focused ? "600" : "500" }]}
    >
      {label}
    </Text>
  );
}

const styles = StyleSheet.create(() => ({
  label: {
    fontSize: ms(10),
    textAlign: "center",
    marginTop: ms(1),
    paddingHorizontal: ms(4),
  },
}));
