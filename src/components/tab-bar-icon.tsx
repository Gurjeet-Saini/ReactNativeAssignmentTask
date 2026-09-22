import React from "react";
import { Image, type ImageSourcePropType } from "react-native";
import { StyleSheet } from "react-native-unistyles";

import {
  homeActiveIcon,
  homeInactiveIcon,
  progressActiveIcon,
  progressInactiveIcon,
  notesActiveIcon,
  notesInactiveIcon,
  chartActiveIcon,
  chartInactiveIcon,
  userActiveIcon,
  userInactiveIcon,
} from "@/assets";
import { NAVIGATION } from "@/constants/navigation";
import { ms } from "@/utils";

const tabActiveIcons: Record<string, ImageSourcePropType> = {
  [NAVIGATION.home]: homeActiveIcon,
  [NAVIGATION.progress]: progressActiveIcon,
  [NAVIGATION.learn]: notesActiveIcon,
  [NAVIGATION.journal]: chartActiveIcon,
  [NAVIGATION.profile]: userActiveIcon,
};

const tabInactiveIcons: Record<string, ImageSourcePropType> = {
  [NAVIGATION.home]: homeInactiveIcon,
  [NAVIGATION.progress]: progressInactiveIcon,
  [NAVIGATION.learn]: notesInactiveIcon,
  [NAVIGATION.journal]: chartInactiveIcon,
  [NAVIGATION.profile]: userInactiveIcon,
};

interface TabBarIconProps {
  color: string;
  routeName: string;
  focused?: boolean;
}

export function TabBarIcon({ color, routeName, focused }: TabBarIconProps) {
  const iconSource = focused
    ? tabActiveIcons[routeName] ?? tabInactiveIcons[routeName]
    : tabInactiveIcons[routeName] ?? tabActiveIcons[routeName];

  // progressActiveIcon is a filled blue squircle with white bars inside, so avoid tinting it
  const isMultiColor = routeName === NAVIGATION.progress && focused;

  return (
    <Image
      accessibilityIgnoresInvertColors
      source={iconSource}
      style={[styles.icon, !isMultiColor && { tintColor: color }]}
    />
  );
}

const styles = StyleSheet.create(() => ({
  icon: {
    width: ms(22),
    height: ms(22),
    resizeMode: "contain",
  },
}));
