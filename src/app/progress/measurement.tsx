import { useRouter } from "expo-router";
import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  Dimensions,
  NativeScrollEvent,
  NativeSyntheticEvent,
  Pressable,
  ScrollView,
  Text,
  View,
} from "react-native";
import { StyleSheet, useUnistyles } from "react-native-unistyles";

import { Button } from "@/components/ui/button";
import { NAVIGATION } from "@/constants/navigation";
import { STRINGS } from "@/constants/strings";
import { fonts } from "@/theme/fonts";
import { ms } from "@/utils";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

const TICK_SPACING = ms(14);
const MIN_WEIGHT_KG = 30;
const MAX_WEIGHT_KG = 160;
const DEFAULT_WEIGHT_KG = 82.4;

type WeightUnit = "kg" | "lb";

export interface MeasurementProps {
  initialWeight?: number;
  initialUnit?: WeightUnit;
  onContinue?: (weight: number, unit: WeightUnit) => void;
  onSkip?: () => void;
}

export function Measurement({
  initialWeight = DEFAULT_WEIGHT_KG,
  initialUnit = "kg",
  onContinue,
  onSkip,
}: MeasurementProps): React.JSX.Element {
  const router = useRouter();
  const { theme } = useUnistyles();

  const [unit, setUnit] = useState<WeightUnit>(initialUnit);
  const [weightKg, setWeightKg] = useState<number>(initialWeight);
  const scrollViewRef = useRef<ScrollView>(null);
  const isInitialScrollDone = useRef<boolean>(false);

  // Generate 1 tick per 1 kg (matching screenshot with 10 divisions per 10kg)
  const ticks = useMemo(() => {
    const list = [];
    for (let val = MIN_WEIGHT_KG; val <= MAX_WEIGHT_KG; val += 1) {
      const isMajor = val % 10 === 0;
      const isHalf = !isMajor && val % 5 === 0;
      list.push({
        value: val,
        isMajor,
        isHalf,
        isMinor: !isMajor && !isHalf,
        showLabel: isMajor,
        label: isMajor ? `${val}` : undefined,
      });
    }
    return list;
  }, []);

  // Initial scroll to starting weight
  useEffect(() => {
    if (!isInitialScrollDone.current && scrollViewRef.current) {
      const initialOffset = (weightKg - MIN_WEIGHT_KG) * TICK_SPACING;
      setTimeout(() => {
        scrollViewRef.current?.scrollTo({ x: initialOffset, animated: false });
        isInitialScrollDone.current = true;
      }, 60);
    }
  }, []);

  const handleScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const offsetX = e.nativeEvent.contentOffset.x;
    const rawValue = MIN_WEIGHT_KG + offsetX / TICK_SPACING;
    const clampedValue = Math.max(
      MIN_WEIGHT_KG,
      Math.min(MAX_WEIGHT_KG, Math.round(rawValue * 10) / 10),
    );
    setWeightKg(clampedValue);
  };

  const handleScrollEnd = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const offsetX = e.nativeEvent.contentOffset.x;
    const rawValue = MIN_WEIGHT_KG + offsetX / TICK_SPACING;
    const clampedValue = Math.max(
      MIN_WEIGHT_KG,
      Math.min(MAX_WEIGHT_KG, Math.round(rawValue * 10) / 10),
    );
    setWeightKg(clampedValue);
  };

  const displayWeight = useMemo(() => {
    if (unit === "kg") {
      return weightKg.toFixed(1);
    }
    const pounds = weightKg * 2.20462;
    return pounds.toFixed(1);
  }, [weightKg, unit]);

  const handleContinue = () => {
    if (onContinue) {
      onContinue(weightKg, unit);
    } else {
      router.navigate(`/${NAVIGATION.progress}` as any);
    }
  };

  const handleSkip = () => {
    if (onSkip) {
      onSkip();
    } else {
      router.navigate(`/${NAVIGATION.progress}` as any);
    }
  };

  const spacerWidth = SCREEN_WIDTH / 2;

  return (
    <View style={styles.container}>
      {/* Top Header Content */}
      <View style={styles.headerContent}>
        <Text style={styles.title}>{STRINGS.progress.measurement.title}</Text>
        <Text style={styles.subtitle}>
          {STRINGS.progress.measurement.subtitle}
        </Text>
      </View>

      {/* Main Measurement Section */}
      <View style={styles.measurementSection}>
        {/* Value Display */}
        <View style={styles.valueRow}>
          <Text style={styles.weightNumber}>{displayWeight}</Text>
          <Text style={styles.unitLabel}>
            {unit === "kg"
              ? STRINGS.progress.measurement.unitKg
              : STRINGS.progress.measurement.unitLb}
          </Text>
        </View>

        {/* Ruler Container */}
        <View style={styles.rulerContainer}>
          <ScrollView
            ref={scrollViewRef}
            horizontal
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={16}
            onScroll={handleScroll}
            onMomentumScrollEnd={handleScrollEnd}
            contentContainerStyle={styles.rulerScrollContent}
          >
            <View style={{ width: spacerWidth }} />
            {ticks.map((tick) => (
              <View
                key={tick.value}
                style={[styles.tickColumn, { width: TICK_SPACING }]}
              >
                <View
                  style={[
                    styles.tickLine,
                    tick.isMajor && styles.tickMajor,
                    tick.isHalf && styles.tickHalf,
                    tick.isMinor && styles.tickMinor,
                  ]}
                />
                {tick.showLabel ? (
                  <Text style={styles.tickLabel}>{tick.label}</Text>
                ) : (
                  <View style={styles.tickLabelPlaceholder} />
                )}
              </View>
            ))}
            <View style={{ width: spacerWidth }} />
          </ScrollView>

          <View pointerEvents="none" style={styles.pointerNeedle} />
        </View>

        <View style={styles.unitTogglePill}>
          <Pressable
            accessibilityRole="button"
            accessibilityState={{ selected: unit === "kg" }}
            onPress={() => setUnit("kg")}
            style={[
              styles.unitOption,
              unit === "kg" && styles.unitOptionActive,
            ]}
          >
            <Text
              style={[
                styles.unitOptionText,
                unit === "kg" && styles.unitOptionTextActive,
              ]}
            >
              {STRINGS.progress.measurement.pillKg}
            </Text>
          </Pressable>

          <Pressable
            accessibilityRole="button"
            accessibilityState={{ selected: unit === "lb" }}
            onPress={() => setUnit("lb")}
            style={[
              styles.unitOption,
              unit === "lb" && styles.unitOptionActive,
            ]}
          >
            <Text
              style={[
                styles.unitOptionText,
                unit === "lb" && styles.unitOptionTextActive,
              ]}
            >
              {STRINGS.progress.measurement.pillLb}
            </Text>
          </Pressable>
        </View>
      </View>

      <View style={styles.bottomSection}>
        <Button
          title={STRINGS.common.continue}
          variant="primary"
          size="lg"
          onPress={handleContinue}
          style={styles.continueButton}
        />

        <Pressable
          accessibilityRole="button"
          onPress={handleSkip}
          style={({ pressed }) => [
            styles.skipButton,
            pressed && styles.buttonPressed,
          ]}
        >
          <Text style={styles.skipButtonText}>{STRINGS.common.skipForNow}</Text>
        </Pressable>
      </View>
    </View>
  );
}

export default Measurement;

const styles = StyleSheet.create((theme, rt) => ({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingTop: rt.insets.top + ms(24),
    paddingBottom: rt.insets.bottom + ms(12),
    justifyContent: "space-between",
  },
  headerContent: {
    paddingHorizontal: ms(24),
    marginTop: ms(12),
  },
  title: {
    fontFamily: fonts.inter.bold,
    fontSize: ms(28),
    lineHeight: ms(36),
    color: theme.colors.typography,
  },
  subtitle: {
    fontFamily: fonts.inter.regular,
    fontSize: ms(15),
    lineHeight: ms(22),
    color: theme.colors.textGray,
    marginTop: ms(10),
  },
  measurementSection: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: ms(20),
  },
  valueRow: {
    flexDirection: "row",
    alignItems: "baseline",
    justifyContent: "center",
    marginBottom: ms(28),
  },
  weightNumber: {
    fontFamily: fonts.inter.bold,
    fontSize: ms(36),
    color: theme.colors.typography,
  },
  unitLabel: {
    fontFamily: fonts.inter.semiBold,
    fontSize: ms(20),
    color: theme.colors.iconGray,
    marginLeft: ms(6),
  },
  rulerContainer: {
    position: "relative",
    width: "100%",
    height: ms(90),
    justifyContent: "center",
    marginBottom: ms(28),
  },
  rulerScrollContent: {
    alignItems: "flex-start",
  },
  tickColumn: {
    alignItems: "center",
    height: ms(70),
  },
  tickLine: {
    width: 1.5,
    backgroundColor: "#E4E7EC",
    borderRadius: 1,
  },
  tickMajor: {
    height: ms(36),
    backgroundColor: "#D0D5DD",
    width: 2,
  },
  tickHalf: {
    height: ms(24),
    backgroundColor: "#E4E7EC",
    width: 1.5,
  },
  tickMinor: {
    height: ms(16),
    backgroundColor: "#F2F4F7",
    width: 1.5,
  },
  tickLabel: {
    fontFamily: fonts.inter.medium,
    fontSize: ms(12),
    color: "#98A2B3",
    marginTop: ms(8),
    textAlign: "center",
  },
  tickLabelPlaceholder: {
    height: ms(18),
    marginTop: ms(8),
  },
  pointerNeedle: {
    position: "absolute",
    top: 0,
    left: "50%",
    marginLeft: -ms(1.75),
    width: ms(3.5),
    height: ms(48),
    borderRadius: ms(2),
    backgroundColor: theme.colors.primary,
    zIndex: 10,
  },
  unitTogglePill: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F2F4F7",
    borderRadius: ms(20),
    padding: ms(3),
    alignSelf: "center",
  },
  unitOption: {
    paddingHorizontal: ms(16),
    paddingVertical: ms(6),
    borderRadius: ms(16),
  },
  unitOptionActive: {
    backgroundColor: theme.colors.primary,
  },
  unitOptionText: {
    fontFamily: fonts.inter.medium,
    fontSize: ms(13),
    color: "#667085",
  },
  unitOptionTextActive: {
    fontFamily: fonts.inter.semiBold,
    color: "#FFFFFF",
  },
  bottomSection: {
    paddingHorizontal: ms(24),
    paddingBottom: ms(8),
  },
  continueButton: {
    height: ms(54),
    shadowColor: theme.colors.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
  },
  skipButton: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: ms(14),
    marginTop: ms(6),
  },
  skipButtonText: {
    fontFamily: fonts.inter.medium,
    fontSize: ms(15),
    color: theme.colors.primaryText,
  },
  buttonPressed: {
    opacity: 0.75,
  },
}));
