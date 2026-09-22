import { useState } from "react";
import { Pressable, Text, View } from "react-native";
import { StyleSheet } from "react-native-unistyles";

import { STRINGS } from "@/constants/strings";
import { fonts } from "@/theme/fonts";
import { ms } from "@/utils";

const TIMEFRAMES = STRINGS.progress.weightChart.timeframes;
type Timeframe = (typeof TIMEFRAMES)[number];

const Y_TICKS = STRINGS.progress.weightChart.yTicks;
const MONTHS = STRINGS.progress.weightChart.months;

export function WeightChart() {
  const [selectedTimeframe, setSelectedTimeframe] = useState<Timeframe>("6M");

  return (
    <View style={styles.card}>
      <View style={styles.timeframeContainer}>
        {TIMEFRAMES.map((tf) => {
          const isActive = tf === selectedTimeframe;
          return (
            <Pressable
              key={tf}
              accessibilityRole="tab"
              accessibilityState={{ selected: isActive }}
              onPress={() => setSelectedTimeframe(tf)}
              style={[
                styles.timeframeButton,
                isActive && styles.timeframeButtonActive,
              ]}
            >
              <Text
                style={[
                  styles.timeframeText,
                  isActive && styles.timeframeTextActive,
                ]}
              >
                {tf}
              </Text>
            </Pressable>
          );
        })}
      </View>

      <View style={styles.chartContainer}>
        <View style={styles.gridContainer}>
          {Y_TICKS.map((tick) => (
            <View key={tick} style={styles.gridRow}>
              <Text style={styles.yTickText}>{tick}</Text>
              <View style={styles.gridLine} />
            </View>
          ))}
        </View>

        <View style={styles.indicatorContainer}>
          <View style={styles.tooltip}>
            <Text style={styles.tooltipLabel}>
              {STRINGS.progress.weightChart.average}
            </Text>
            <View style={styles.tooltipValueRow}>
              <Text style={styles.tooltipValue}>
                {STRINGS.progress.weightChart.defaultTooltipValue}
              </Text>
              <Text style={styles.tooltipUnit}>
                {STRINGS.progress.weightChart.defaultTooltipUnit}
              </Text>
            </View>
            <Text style={styles.tooltipDate}>
              {STRINGS.progress.weightChart.defaultTooltipDate}
            </Text>
          </View>

          <View style={styles.markerDot} />

          <View style={styles.verticalBar} />
        </View>

        <View style={styles.xAxisContainer}>
          {MONTHS.map((month) => (
            <Text key={month} style={styles.xMonthText}>
              {month}
            </Text>
          ))}
        </View>
      </View>
    </View>
  );
}

export default WeightChart;

const styles = StyleSheet.create((theme) => ({
  card: {
    backgroundColor: theme.colors.surface,
    borderRadius: ms(20),
    padding: ms(16),
    marginBottom: ms(14),
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.04,
    shadowRadius: 10,
    elevation: 2,
    borderWidth: 1,
    borderColor: theme.colors.borderGray,
  },
  timeframeContainer: {
    flexDirection: "row",
    backgroundColor: theme.colors.headerButtonBg,
    borderRadius: ms(24),
    padding: ms(3),
    marginBottom: ms(16),
  },
  timeframeButton: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: ms(6),
    borderRadius: ms(20),
  },
  timeframeButtonActive: {
    backgroundColor: theme.colors.surface,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  timeframeText: {
    fontFamily: fonts.inter.medium,
    fontSize: ms(13),
    color: theme.colors.textGray,
  },
  timeframeTextActive: {
    fontFamily: fonts.inter.bold,
    color: theme.colors.typography,
  },
  chartContainer: {
    height: ms(210),
    position: "relative",
    justifyContent: "space-between",
  },
  gridContainer: {
    flex: 1,
    justifyContent: "space-between",
    marginBottom: ms(24),
  },
  gridRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  yTickText: {
    width: ms(24),
    fontFamily: fonts.inter.regular,
    fontSize: ms(11),
    color: theme.colors.iconGray,
    textAlign: "left",
  },
  gridLine: {
    flex: 1,
    height: 1,
    backgroundColor: theme.colors.borderGray,
    marginLeft: ms(8),
  },
  indicatorContainer: {
    position: "absolute",
    left: "30%", // Over the "May" column
    top: ms(10),
    bottom: ms(24),
    alignItems: "center",
    width: ms(80),
    marginLeft: -ms(40),
  },
  tooltip: {
    backgroundColor: theme.colors.fadedWhite,
    borderWidth: 1,
    borderColor: theme.colors.borderGray,
    borderRadius: ms(8),
    paddingVertical: ms(5),
    paddingHorizontal: ms(8),
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 3,
    marginBottom: ms(6),
  },
  tooltipLabel: {
    fontFamily: fonts.inter.medium,
    fontSize: ms(9),
    color: theme.colors.textGray,
  },
  tooltipValueRow: {
    flexDirection: "row",
    alignItems: "baseline",
  },
  tooltipValue: {
    fontFamily: fonts.inter.bold,
    fontSize: ms(13),
    color: theme.colors.typography,
  },
  tooltipUnit: {
    fontFamily: fonts.inter.medium,
    fontSize: ms(10),
    color: theme.colors.textGray,
  },
  tooltipDate: {
    fontFamily: fonts.inter.regular,
    fontSize: ms(8.5),
    color: theme.colors.iconGray,
    marginTop: ms(1),
  },
  markerDot: {
    width: ms(10),
    height: ms(10),
    borderRadius: ms(5),
    borderWidth: 2.5,
    borderColor: theme.colors.primary,
    backgroundColor: theme.colors.surface,
    zIndex: 2,
  },
  verticalBar: {
    flex: 1,
    width: ms(3),
    backgroundColor: theme.colors.primaryTransparent,
    borderRadius: ms(1.5),
  },
  xAxisContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: ms(32),
    paddingRight: ms(8),
  },
  xMonthText: {
    fontFamily: fonts.inter.regular,
    fontSize: ms(11),
    color: theme.colors.iconGray,
  },
}));
