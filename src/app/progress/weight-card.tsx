import { useRouter } from "expo-router";
import { Image, Text, View } from "react-native";
import { StyleSheet } from "react-native-unistyles";

import { increaseIcon } from "@/assets";
import { Button } from "@/components/ui/button";
import { STRINGS } from "@/constants/strings";
import { fonts } from "@/theme/fonts";
import { ms } from "@/utils";

interface WeightCardProps {
  currentWeight?: string;
  unit?: string;
  change?: string;
  changeType?: "increase" | "decrease";
  lastLogged?: string;
  onEdit?: () => void;
}

export function WeightCard({
  currentWeight = STRINGS.progress.weightCard.defaultWeight,
  unit = STRINGS.progress.weightCard.defaultUnit,
  change = STRINGS.progress.weightCard.defaultChange,
  changeType = "increase",
  lastLogged = STRINGS.progress.weightCard.defaultLastLogged,
  onEdit,
}: WeightCardProps) {
  const router = useRouter();
  const isIncrease = changeType === "increase";

  const handleEdit = () => {
    if (onEdit) {
      onEdit();
    } else {
      router.push("/progress/measurement" as any);
    }
  };

  return (
    <View style={styles.card}>
      <View style={styles.topRow}>
        <Text style={styles.label}>{STRINGS.progress.weightCard.label}</Text>
        <Button
          title={STRINGS.common.edit}
          onPress={handleEdit}
          textStyle={styles.editText}
        />
      </View>

      <View style={styles.weightRow}>
        <Text style={styles.weightValue}>{currentWeight}</Text>
        <Text style={styles.weightUnit}>{unit}</Text>
        <View
          style={[
            styles.changeBadge,
            isIncrease ? styles.increaseBadge : styles.decreaseBadge,
          ]}
        >
          <Image
            source={increaseIcon}
            style={[styles.trendIcon, !isIncrease && styles.decreaseTrendIcon]}
          />
          <Text
            style={[
              styles.changeText,
              isIncrease ? styles.increaseText : styles.decreaseText,
            ]}
          >
            {change}
          </Text>
        </View>
      </View>

      <Text style={styles.lastLoggedText}>{lastLogged}</Text>
    </View>
  );
}

export default WeightCard;

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
  topRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  label: {
    fontFamily: fonts.inter.regular,
    fontSize: ms(14),
    color: theme.colors.textGray,
  },
  editText: {
    color: theme.colors.editText,
  },
  weightRow: {
    flexDirection: "row",
    alignItems: "baseline",
    marginTop: ms(10),
  },
  weightValue: {
    fontFamily: fonts.inter.bold,
    fontSize: ms(36),
    color: theme.colors.typography,
  },
  weightUnit: {
    fontFamily: fonts.inter.semiBold,
    fontSize: ms(16),
    color: theme.colors.textGray,
    marginLeft: ms(6),
  },
  changeBadge: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: ms(12),
    paddingHorizontal: ms(8),
    paddingVertical: ms(3),
    marginLeft: ms(10),
    alignSelf: "center",
  },
  trendIcon: {
    width: ms(12),
    height: ms(8),
    resizeMode: "contain",
    marginRight: ms(4),
  },
  decreaseTrendIcon: {
    transform: [{ scaleY: -1 }],
    tintColor: theme.colors.decreaseText,
  },
  increaseBadge: {
    backgroundColor: theme.colors.increaseBadge,
  },
  decreaseBadge: {
    backgroundColor: theme.colors.decreaseBadge,
  },
  changeText: {
    fontFamily: fonts.inter.regular,
    fontSize: ms(12),
  },
  increaseText: {
    color: theme.colors.increaseText,
  },
  decreaseText: {
    color: theme.colors.decreaseText,
  },
  lastLoggedText: {
    fontFamily: fonts.inter.regular,
    fontSize: ms(12),
    color: theme.colors.iconGray,
    marginTop: ms(8),
  },
}));
