import { useRouter } from "expo-router";
import React from "react";
import { View } from "react-native";
import { StyleSheet } from "react-native-unistyles";

import { Header } from "@/components/ui/header";
import ScreenWrapper from "@/components/ui/screen-wrapper";
import { STRINGS } from "@/constants/strings";
import { ms } from "@/utils";

import BmiCard from "./bmi-card";
import GoalSection from "./goal-section";
import RecentLogs from "./recent-logs";
import WalkthroughSection from "./walkthrough-section";
import WeightCard from "./weight-card";
import WeightChart from "./weight-chart";

export default function ProgressScreen() {
  const router = useRouter();

  return (
    <ScreenWrapper scrollable={true} style={styles.scrollContainer}>
      <Header title={STRINGS.progress.headerTitle} includeSafeAreaTop />

      <View style={styles.content}>
        <WeightCard
          onEdit={() => router.push("/progress/measurement" as any)}
        />
        <GoalSection />
        <WeightChart />
        <BmiCard />
        <RecentLogs />
        <WalkthroughSection />
      </View>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create((theme) => ({
  scrollContainer: {
    paddingBottom: ms(110),
    backgroundColor: theme.colors.background,
  },
  content: {
    paddingHorizontal: ms(16),
    paddingTop: ms(6),
  },
}));
