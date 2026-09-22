import { ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { ThemedView } from "@/components/themed-view";
import { MaxContentWidth, Spacing } from "@/constants/theme";
import { ms } from "@/utils";

export default function ProfileScreen() {
  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          <ThemedView style={styles.header}></ThemedView>
        </ScrollView>
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
    alignItems: "center",
    gap: Spacing.one,
    marginVertical: Spacing.four,
  },
  avatar: {
    width: ms(80),
    height: ms(80),
    borderRadius: ms(40),
    backgroundColor: "#2563EB",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: Spacing.two,
  },
  avatarText: {
    color: "#FFFFFF",
    fontSize: ms(32),
  },
  card: {
    padding: Spacing.four,
    borderRadius: ms(20),
    gap: Spacing.two,
  },
});
