import { Image, Pressable, Text, View } from "react-native";
import { StyleSheet } from "react-native-unistyles";

import { chartInactiveIcon } from "@/assets";
import { STRINGS } from "@/constants/strings";
import { fonts } from "@/theme/fonts";
import { ms } from "@/utils";

interface LogItem {
  readonly id: string;
  readonly weight: string;
  readonly unit: string;
  readonly waist?: string;
  readonly date: string;
  readonly change: string;
  readonly changeType: "increase" | "decrease";
}

const DEFAULT_LOGS: readonly LogItem[] =
  STRINGS.progress.recentLogs.defaultLogs;

interface RecentLogsProps {
  logs?: readonly LogItem[];
  onViewAll?: () => void;
}

export function RecentLogs({
  logs = DEFAULT_LOGS,
  onViewAll,
}: RecentLogsProps) {
  return (
    <View style={styles.card}>
      <View style={styles.headerRow}>
        <View style={styles.titleWithIcon}>
          <View style={styles.iconBox}>
            <Image source={chartInactiveIcon} style={styles.chartIcon} />
          </View>
          <Text style={styles.title}>{STRINGS.progress.recentLogs.title}</Text>
        </View>

        <Pressable accessibilityRole="button" hitSlop={8} onPress={onViewAll}>
          <Text style={styles.viewAllText}>{STRINGS.common.viewAll}</Text>
        </Pressable>
      </View>

      {logs.map((item, index) => {
        const isIncrease = item.changeType === "increase";
        const isLast = index === logs.length - 1;

        return (
          <View
            key={item.id}
            style={[styles.logItem, isLast && styles.logItemLast]}
          >
            <View style={styles.logTopRow}>
              <View style={styles.weightAndWaistRow}>
                <Text style={styles.weightText}>
                  {item.weight} {item.unit}
                </Text>
                {item.waist ? (
                  <Text style={styles.waistText}> {item.waist}</Text>
                ) : null}
              </View>

              <View
                style={[
                  styles.changeBadge,
                  isIncrease ? styles.increaseBadge : styles.decreaseBadge,
                ]}
              >
                <Text
                  style={[
                    styles.changeText,
                    isIncrease ? styles.increaseText : styles.decreaseText,
                  ]}
                >
                  {isIncrease ? "↗ " : "↘ "}
                  {item.change}
                </Text>
              </View>
            </View>

            <Text style={styles.dateText}>{item.date}</Text>
          </View>
        );
      })}
    </View>
  );
}

export default RecentLogs;

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
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: ms(14),
  },
  titleWithIcon: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconBox: {
    width: ms(32),
    height: ms(32),
    borderRadius: ms(8),
    backgroundColor: theme.colors.fadedWhite,
    alignItems: "center",
    justifyContent: "center",
    marginRight: ms(8),
  },
  chartIcon: {
    width: ms(18),
    height: ms(18),
    resizeMode: "contain",
    tintColor: theme.colors.typography,
  },
  title: {
    fontFamily: fonts.inter.bold,
    fontSize: ms(18),
    color: theme.colors.typography,
  },
  viewAllText: {
    fontFamily: fonts.inter.semiBold,
    fontSize: ms(14),
    color: theme.colors.primary,
  },
  logItem: {
    backgroundColor: theme.colors.recentLogItemBg,
    borderRadius: ms(14),
    padding: ms(12),
    marginBottom: ms(10),
  },
  logItemLast: {
    marginBottom: 0,
  },
  logTopRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  weightAndWaistRow: {
    flexDirection: "row",
    alignItems: "baseline",
    flex: 1,
  },
  weightText: {
    fontFamily: fonts.inter.bold,
    fontSize: ms(14.5),
    color: theme.colors.typography,
  },
  waistText: {
    fontFamily: fonts.inter.regular,
    fontSize: ms(13),
    color: theme.colors.textGray,
    marginLeft: ms(4),
  },
  changeBadge: {
    borderRadius: ms(12),
    paddingHorizontal: ms(8),
    paddingVertical: ms(3),
  },
  increaseBadge: {
    backgroundColor: theme.colors.increaseBadge,
  },
  decreaseBadge: {
    backgroundColor: theme.colors.decreaseBadge,
  },
  changeText: {
    fontFamily: fonts.inter.semiBold,
    fontSize: ms(12),
  },
  increaseText: {
    color: theme.colors.increaseText,
  },
  decreaseText: {
    color: theme.colors.decreaseText,
  },
  dateText: {
    fontFamily: fonts.inter.regular,
    fontSize: ms(12),
    color: theme.colors.iconGray,
    marginTop: ms(4),
  },
}));
