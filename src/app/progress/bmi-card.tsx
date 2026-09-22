import { Image, Text, View } from "react-native";
import { StyleSheet } from "react-native-unistyles";

import { bmiIcon, normalIcon } from "@/assets";
import { Button } from "@/components/ui/button";
import { STRINGS } from "@/constants/strings";
import { fonts } from "@/theme/fonts";
import { ms } from "@/utils";

interface BmiCardProps {
  bmiValue?: string;
  category?: string;
  heightCm?: string;
  onEditHeight?: () => void;
}

export function BmiCard({
  bmiValue = STRINGS.progress.bmi.defaultBmiValue,
  category = STRINGS.progress.bmi.defaultCategory,
  heightCm = STRINGS.progress.bmi.defaultHeight,
  onEditHeight,
}: BmiCardProps) {
  return (
    <View style={styles.card}>
      <View style={styles.headerRow}>
        <View style={styles.iconCircle}>
          <Image source={bmiIcon} style={styles.bmiIcon} />
        </View>
        <Text style={styles.title}>{STRINGS.progress.bmi.title}</Text>
      </View>

      <View style={styles.valueRow}>
        <Text style={styles.bmiValue}>{bmiValue}</Text>
        <View style={styles.normalBadge}>
          <Image source={normalIcon} style={styles.normalIcon} />
          <Text style={styles.normalBadgeText}>{category}</Text>
        </View>
      </View>

      <Text style={styles.description}>
        {STRINGS.progress.bmi.healthyDescription}
      </Text>

      <View style={styles.barWrapper}>
        <View style={styles.scaleBar}>
          <View style={[styles.segment, styles.underweightSegment]} />
          <View style={[styles.segment, styles.normalSegment]} />
          <View style={[styles.segment, styles.overweightSegment]} />
          <View style={[styles.segment, styles.obeseSegment]} />
        </View>

        <View style={styles.pointerPin} />

        <View style={styles.scaleLabelsRow}>
          <Text style={styles.scaleLabel}>0</Text>
          <Text style={[styles.scaleLabel, { marginLeft: "18%" }]}>18.5</Text>
          <Text style={[styles.scaleLabel, { marginLeft: "22%" }]}>25</Text>
          <Text style={[styles.scaleLabel, { marginLeft: "18%" }]}>30</Text>
        </View>
      </View>

      <View style={styles.heightContainer}>
        <Text style={styles.heightText}>
          {STRINGS.progress.bmi.heightPrefix}
          {heightCm}
        </Text>
        <Button title={STRINGS.common.edit} onPress={onEditHeight} />
      </View>

      <Text style={styles.footerCaption}>
        {STRINGS.progress.bmi.footerCaption}
      </Text>
    </View>
  );
}

export default BmiCard;

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
    marginBottom: ms(10),
  },
  iconCircle: {
    width: ms(32),
    height: ms(32),
    borderRadius: ms(16),
    backgroundColor: theme.colors.fadedWhite,
    alignItems: "center",
    justifyContent: "center",
    marginRight: ms(8),
  },
  bmiIcon: {
    width: ms(20),
    height: ms(20),
    resizeMode: "contain",
  },
  title: {
    fontFamily: fonts.inter.bold,
    fontSize: ms(18),
    color: theme.colors.typography,
  },
  valueRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  bmiValue: {
    fontFamily: fonts.inter.bold,
    fontSize: ms(32),
    color: theme.colors.typography,
    marginRight: ms(10),
  },
  normalBadge: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: theme.colors.decreaseBadge,
    borderRadius: ms(12),
    paddingHorizontal: ms(8),
    paddingVertical: ms(3),
  },
  normalIcon: {
    width: ms(12),
    height: ms(12),
    resizeMode: "contain",
    marginRight: ms(4),
  },
  normalBadgeText: {
    fontFamily: fonts.inter.regular,
    fontSize: ms(12),
    color: theme.colors.decreaseText,
  },
  description: {
    fontFamily: fonts.inter.regular,
    fontSize: ms(13),
    color: theme.colors.textGray,
    marginTop: ms(6),
    marginBottom: ms(16),
  },
  barWrapper: {
    position: "relative",
    marginBottom: ms(14),
  },
  scaleBar: {
    flexDirection: "row",
    height: ms(8),
    borderRadius: ms(4),
    overflow: "hidden",
    gap: ms(3),
  },
  segment: {
    height: "100%",
    borderRadius: ms(3),
  },
  underweightSegment: {
    flex: 1.2,
    backgroundColor: theme.colors.bmiUnderweight,
  },
  normalSegment: {
    flex: 1.2,
    backgroundColor: theme.colors.bmiNormal,
  },
  overweightSegment: {
    flex: 1.2,
    backgroundColor: theme.colors.bmiOverweight,
  },
  obeseSegment: {
    flex: 2.4,
    backgroundColor: theme.colors.bmiObese,
  },
  pointerPin: {
    position: "absolute",
    top: -ms(3),
    left: "29%",
    width: ms(3),
    height: ms(14),
    backgroundColor: theme.colors.bmiPointer,
    borderRadius: ms(1.5),
  },
  scaleLabelsRow: {
    flexDirection: "row",
    marginTop: ms(6),
  },
  scaleLabel: {
    fontFamily: fonts.inter.medium,
    fontSize: ms(10),
    color: theme.colors.iconGray,
  },
  heightContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: theme.colors.fadedWhite,
    borderRadius: ms(14),
    paddingHorizontal: ms(14),
    paddingVertical: ms(10),
    marginTop: ms(6),
  },
  heightText: {
    fontFamily: fonts.inter.semiBold,
    fontSize: ms(14),
    color: theme.colors.typography,
  },
  footerCaption: {
    fontFamily: fonts.inter.regular,
    fontSize: ms(11.5),
    color: theme.colors.iconGray,
    marginTop: ms(8),
  },
}));
