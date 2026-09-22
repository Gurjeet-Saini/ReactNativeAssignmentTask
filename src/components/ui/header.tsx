import { useRouter } from "expo-router";
import React from "react";
import {
  Image,
  type ImageSourcePropType,
  Pressable,
  type StyleProp,
  Text,
  type TextStyle,
  View,
  type ViewStyle,
} from "react-native";
import { StyleSheet } from "react-native-unistyles";

import { backIcon, menuIcon } from "@/assets";
import { fonts } from "@/theme/fonts";
import { ms } from "@/utils";

export interface HeaderProps {
  title?: string;
  onBack?: () => void;
  showBack?: boolean;
  leftIcon?: ImageSourcePropType;
  renderLeft?: () => React.ReactNode;
  onRightPress?: () => void;
  showRight?: boolean;
  rightIcon?: ImageSourcePropType;
  renderRight?: () => React.ReactNode;
  style?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
  includeSafeAreaTop?: boolean;
}

export function Header({
  title,
  onBack,
  showBack = true,
  leftIcon,
  renderLeft,
  onRightPress,
  showRight = true,
  rightIcon,
  renderRight,
  style,
  titleStyle,
  includeSafeAreaTop = false,
}: HeaderProps): React.JSX.Element {
  const router = useRouter();

  const handleBack = () => {
    if (onBack) {
      onBack();
    } else if (router.canGoBack()) {
      router.back();
    }
  };

  return (
    <View
      style={[
        styles.container,
        includeSafeAreaTop && styles.safeAreaTop,
        style,
      ]}
    >
      <View style={styles.leftContainer}>
        {renderLeft ? (
          renderLeft()
        ) : showBack ? (
          <Pressable
            accessibilityLabel="Go back"
            accessibilityRole="button"
            hitSlop={8}
            onPress={handleBack}
            style={styles.circleButton}
          >
            <Image
              source={leftIcon ?? backIcon}
              style={styles.icon}
            />
          </Pressable>
        ) : (
          <View style={styles.actionPlaceholder} />
        )}
      </View>

      <View style={styles.titleContainer}>
        {title ? (
          <Text numberOfLines={1} style={[styles.title, titleStyle]}>
            {title}
          </Text>
        ) : null}
      </View>

      <View style={styles.rightContainer}>
        {renderRight ? (
          renderRight()
        ) : showRight ? (
          <Pressable
            accessibilityLabel="More options"
            accessibilityRole="button"
            hitSlop={8}
            onPress={onRightPress}
            style={styles.circleButton}
          >
            <Image
              source={rightIcon ?? menuIcon}
              style={styles.icon}
            />
          </Pressable>
        ) : (
          <View style={styles.actionPlaceholder} />
        )}
      </View>
    </View>
  );
}

export default Header;

const styles = StyleSheet.create((theme, rt) => ({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: ms(16),
    paddingVertical: ms(10),
    backgroundColor: theme.colors.transparent,
  },
  safeAreaTop: {
    paddingTop: rt.insets.top + ms(10),
  },
  leftContainer: {
    width: ms(44),
    alignItems: "flex-start",
    justifyContent: "center",
  },
  titleContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: ms(8),
  },
  rightContainer: {
    width: ms(44),
    alignItems: "flex-end",
    justifyContent: "center",
  },
  circleButton: {
    width: ms(40),
    height: ms(40),
    borderRadius: ms(20),
    backgroundColor: theme.colors.headerButtonBg,
    alignItems: "center",
    justifyContent: "center",
  },
  actionPlaceholder: {
    width: ms(40),
    height: ms(40),
  },
  icon: {
    width: ms(20),
    height: ms(20),
    resizeMode: "contain",
    tintColor: theme.colors.typography,
  },
  title: {
    fontFamily: fonts.inter.bold,
    fontSize: ms(18),
    color: theme.colors.typography,
    textAlign: "center",
  },
}));
