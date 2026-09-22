import { ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { ThemedView } from "@/components/themed-view";
import { MaxContentWidth, Spacing } from "@/constants/theme";
import { ms } from "@/utils";

export default function JournalScreen() {
  const entries = [
    {
      id: "1",
      date: "Today, 2:30 PM",
      title: "Navigation Architecture Review",
      content:
        "Configured custom floating tab navigation with responsive scaling and active indicators.",
    },
    {
      id: "2",
      date: "Yesterday, 10:15 AM",
      title: "Expo SDK 57 Setup",
      content:
        "Explored Expo Router v57, typed routes, and React Compiler optimizations.",
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
  entryCard: {
    padding: Spacing.four,
    borderRadius: ms(20),
    gap: Spacing.one,
  },
  entryDate: {
    color: "#2563EB",
    fontSize: ms(11),
  },
});
