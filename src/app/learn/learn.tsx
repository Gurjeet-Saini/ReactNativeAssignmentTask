import { ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { ThemedView } from "@/components/themed-view";
import { MaxContentWidth, Spacing } from "@/constants/theme";
import { ms } from "@/utils";

export default function LearnScreen() {
  const lessons = [
    {
      id: "1",
      title: "Getting Started with React Native",
      time: "10 min",
      level: "Beginner",
    },
    {
      id: "2",
      title: "Mastering Layouts & Flexbox",
      time: "15 min",
      level: "Intermediate",
    },
    {
      id: "3",
      title: "Advanced Reanimated Gestures",
      time: "20 min",
      level: "Advanced",
    },
  ];

  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        ></ScrollView>
      </SafeAreaView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "row",
  },
  safeArea: {
    flex: 1,
    maxWidth: MaxContentWidth,
  },
  scrollContent: {
    paddingHorizontal: Spacing.four,
    paddingTop: Spacing.four,
    paddingBottom: ms(120),
    gap: Spacing.three,
  },
  header: {
    gap: Spacing.one,
    marginBottom: Spacing.two,
  },
  lessonCard: {
    padding: Spacing.four,
    borderRadius: ms(20),
    gap: Spacing.one,
  },
  lessonMeta: {
    flexDirection: "row",
    alignItems: "center",
    gap: Spacing.one,
    marginTop: Spacing.one,
  },
  levelBadge: {
    color: "#2563EB",
    fontWeight: "600",
  },
});
