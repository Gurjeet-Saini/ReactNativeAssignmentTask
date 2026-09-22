import React from "react";
import {
  type Insets,
  Pressable,
  type StyleProp,
  Text,
  type TextStyle,
  type ViewStyle,
} from "react-native";
import { StyleSheet } from "react-native-unistyles";

import { fonts } from "@/theme/fonts";
import { ms } from "@/utils";

export type ButtonVariant = "outline" | "primary" | "secondary" | "ghost";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps {
  title?: string;
  children?: React.ReactNode;
  onPress?: () => void;
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  hitSlop?: number | Insets;
  accessibilityLabel?: string;
}

export function Button({
  title,
  children,
  onPress,
  variant = "outline",
  size = "sm",
  disabled = false,
  style,
  textStyle,
  leftIcon,
  rightIcon,
  hitSlop = 8,
  accessibilityLabel,
}: ButtonProps): React.JSX.Element {
  const content =
    children ??
    (title ? (
      <Text
        style={[
          styles.text,
          styles[`${variant}Text`],
          styles[`${size}Text`],
          disabled && styles.disabledText,
          textStyle,
        ]}
      >
        {title}
      </Text>
    ) : null);

  return (
    <Pressable
      accessibilityLabel={accessibilityLabel ?? title}
      accessibilityRole="button"
      accessibilityState={{ disabled }}
      disabled={disabled}
      hitSlop={hitSlop}
      onPress={onPress}
      style={({ pressed }) => [
        styles.base,
        styles[variant],
        styles[size],
        disabled && styles.disabled,
        pressed && !disabled && styles.pressed,
        style,
      ]}
    >
      {leftIcon ? leftIcon : null}
      {content}
      {rightIcon ? rightIcon : null}
    </Pressable>
  );
}

export default Button;

const styles = StyleSheet.create((theme) => ({
  base: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  pressed: {
    opacity: 0.7,
  },
  disabled: {
    opacity: 0.4,
  },

  // ── Variants ────────────────────────────────────────────────
  outline: {
    borderWidth: 1,
    borderColor: theme.colors.buttonBorder,
    backgroundColor: theme.colors.surface,
  },
  primary: {
    backgroundColor: theme.colors.primary,
  },
  secondary: {
    backgroundColor: theme.colors.fadedWhite,
  },
  ghost: {
    backgroundColor: theme.colors.transparent,
  },

  // ── Sizes ───────────────────────────────────────────────────
  sm: {
    borderRadius: ms(20),
    paddingHorizontal: ms(14),
    paddingVertical: ms(4),
  },
  md: {
    borderRadius: ms(24),
    paddingHorizontal: ms(18),
    paddingVertical: ms(8),
  },
  lg: {
    borderRadius: ms(28),
    paddingHorizontal: ms(22),
    paddingVertical: ms(12),
  },

  // ── Text Styles ─────────────────────────────────────────────
  text: {
    fontFamily: fonts.inter.semiBold,
    textAlign: "center",
  },
  smText: {
    fontSize: ms(13),
  },
  mdText: {
    fontSize: ms(15),
  },
  lgText: {
    fontSize: ms(17),
  },
  outlineText: {
    color: theme.colors.editText,
    fontFamily: fonts.inter.regular,
  },
  primaryText: {
    color: "#FFFFFF",
  },
  secondaryText: {
    color: theme.colors.typography,
  },
  ghostText: {
    color: theme.colors.primary,
  },
  disabledText: {
    color: theme.colors.textGray,
  },
}));
