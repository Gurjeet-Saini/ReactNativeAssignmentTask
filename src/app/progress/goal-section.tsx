import { Image, Text, View } from "react-native";
import { StyleSheet } from "react-native-unistyles";

import { goalIcon } from "@/assets";
import { Button } from "@/components/ui/button";
import { STRINGS } from "@/constants/strings";
import { fonts } from "@/theme/fonts";
import { ms } from "@/utils";

interface GoalSectionProps {
  target?: string;
  targetUnit?: string;
  byDate?: string;
  byYear?: string;
  pace?: string;
  paceUnit?: string;
  onEdit?: () => void;
}

export function GoalSection({
  target = STRINGS.progress.goal.defaultTarget,
  targetUnit = STRINGS.progress.goal.defaultTargetUnit,
  byDate = STRINGS.progress.goal.defaultByDate,
  byYear = STRINGS.progress.goal.defaultByYear,
  pace = STRINGS.progress.goal.defaultPace,
  paceUnit = STRINGS.progress.goal.defaultPaceUnit,
  onEdit,
}: GoalSectionProps) {
  return (
    <View style={styles.card}>
      <View style={styles.headerRow}>
        <View style={styles.iconWrapper}>
          <Image source={goalIcon} style={styles.goalImage} />
        </View>

        <View style={styles.headerTextWrapper}>
          <Text style={styles.title}>{STRINGS.progress.goal.title}</Text>
          <Text style={styles.subtitle}>
            {STRINGS.progress.goal.subtitle}
          </Text>
        </View>

        <Button
          title={STRINGS.common.edit}
          onPress={onEdit}
          style={styles.editButton}
        />
      </View>

      <View style={styles.metricsRow}>
        <View style={styles.metricCard}>
          <Text style={styles.metricLabel}>{STRINGS.progress.goal.targetLabel}</Text>
          <Text style={styles.metricValue}>{target}</Text>
          <Text style={styles.metricSub}>{targetUnit}</Text>
        </View>

        <View style={styles.metricCard}>
          <Text style={styles.metricLabel}>{STRINGS.progress.goal.byLabel}</Text>
          <Text style={styles.metricValue}>{byDate}</Text>
          <Text style={styles.metricSub}>{byYear}</Text>
        </View>

        <View style={[styles.metricCard, styles.metricCardWide]}>
          <Text style={styles.metricLabel}>{STRINGS.progress.goal.paceLabel}</Text>
          <Text numberOfLines={1} style={styles.metricValuePace}>
            {pace}
          </Text>
          <Text style={styles.metricSub}>{paceUnit}</Text>
        </View>
      </View>
    </View>
  );
}

export default GoalSection;

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
    alignItems: "flex-start",
  },
  iconWrapper: {
    width: ms(32),
    height: ms(32),
    borderRadius: ms(16),
    backgroundColor: "#FEF3F2",
    alignItems: "center",
    justifyContent: "center",
    marginRight: ms(10),
  },
  goalImage: {
    width: ms(18),
    height: ms(18),
    resizeMode: "contain",
  },
  headerTextWrapper: {
    flex: 1,
    marginRight: ms(8),
    paddingTop: ms(3),
  },
  title: {
    fontFamily: fonts.inter.bold,
    fontSize: ms(16),
    lineHeight: ms(20),
    color: theme.colors.typography,
  },
  subtitle: {
    fontFamily: fonts.inter.regular,
    fontSize: ms(12),
    lineHeight: ms(16),
    color: theme.colors.textGray,
    marginTop: ms(4),
  },
  editButton: {
    marginTop: ms(2),
  },
  metricsRow: {
    flexDirection: "row",
    marginTop: ms(14),
    gap: ms(8),
  },
  metricCard: {
    flex: 1,
    backgroundColor: theme.colors.fadedWhite,
    borderRadius: ms(14),
    padding: ms(12),
  },
  metricCardWide: {
    flex: 1.15,
  },
  metricLabel: {
    fontFamily: fonts.inter.medium,
    fontSize: ms(11),
    color: theme.colors.textGray,
  },
  metricValue: {
    fontFamily: fonts.inter.bold,
    fontSize: ms(18),
    color: theme.colors.typography,
    marginVertical: ms(3),
  },
  metricValuePace: {
    fontFamily: fonts.inter.bold,
    fontSize: ms(15),
    color: theme.colors.typography,
    marginVertical: ms(4),
  },
  metricSub: {
    fontFamily: fonts.inter.medium,
    fontSize: ms(11),
    color: theme.colors.iconGray,
  },
}));
