import { Image, Pressable, ScrollView, Text, View } from "react-native";
import { StyleSheet } from "react-native-unistyles";

import { STRINGS } from "@/constants/strings";
import { fonts } from "@/theme/fonts";
import { ms } from "@/utils";

interface WalkthroughItem {
  id: string;
  tag: string;
  title: string;
  imageUri: string;
}

const DEFAULT_WALKTHROUGHS: WalkthroughItem[] = [
  {
    ...STRINGS.progress.walkthrough.items[0],
    imageUri:
      "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?w=600&auto=format&fit=crop&q=80",
  },
  {
    ...STRINGS.progress.walkthrough.items[1],
    imageUri:
      "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=600&auto=format&fit=crop&q=80",
  },
  {
    ...STRINGS.progress.walkthrough.items[2],
    imageUri:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&auto=format&fit=crop&q=80",
  },
];

interface WalkthroughSectionProps {
  items?: WalkthroughItem[];
  onItemPress?: (item: WalkthroughItem) => void;
}

export function WalkthroughSection({
  items = DEFAULT_WALKTHROUGHS,
  onItemPress,
}: WalkthroughSectionProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>
        {STRINGS.progress.walkthrough.title}
      </Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {items.map((item) => (
          <Pressable
            key={item.id}
            accessibilityRole="button"
            onPress={() => onItemPress?.(item)}
            style={styles.card}
          >
            <View style={styles.imageWrapper}>
              <Image source={{ uri: item.imageUri }} style={styles.thumbnail} />
              <View style={styles.playButtonOverlay}>
                <View style={styles.playIconTriangle} />
              </View>
            </View>

            <View style={styles.tagPill}>
              <Text style={styles.tagText}>{item.tag}</Text>
            </View>

            <Text numberOfLines={2} style={styles.title}>
              {item.title}
            </Text>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
}

export default WalkthroughSection;

const styles = StyleSheet.create((theme) => ({
  container: {
    marginTop: ms(10),
    marginBottom: ms(20),
  },
  sectionTitle: {
    fontFamily: fonts.inter.bold,
    fontSize: ms(20),
    color: theme.colors.typography,
    marginBottom: ms(12),
  },
  scrollContent: {
    paddingRight: ms(16),
  },
  card: {
    width: ms(240),
    marginRight: ms(14),
  },
  imageWrapper: {
    width: ms(240),
    height: ms(140),
    borderRadius: ms(16),
    overflow: "hidden",
    position: "relative",
    backgroundColor: theme.colors.borderGray,
  },
  thumbnail: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  playButtonOverlay: {
    position: "absolute",
    alignSelf: "center",
    top: "50%",
    marginTop: -ms(22),
    width: ms(44),
    height: ms(44),
    borderRadius: ms(22),
    backgroundColor: "rgba(0, 0, 0, 0.45)",
    alignItems: "center",
    justifyContent: "center",
  },
  playIconTriangle: {
    width: 0,
    height: 0,
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderLeftWidth: ms(12),
    borderTopWidth: ms(8),
    borderBottomWidth: ms(8),
    borderLeftColor: "#FFFFFF",
    borderTopColor: "transparent",
    borderBottomColor: "transparent",
    marginLeft: ms(3),
  },
  tagPill: {
    alignSelf: "flex-start",
    backgroundColor: theme.colors.headerButtonBg,
    borderRadius: ms(8),
    paddingHorizontal: ms(10),
    paddingVertical: ms(4),
    marginTop: ms(10),
  },
  tagText: {
    fontFamily: fonts.inter.semiBold,
    fontSize: ms(11),
    color: theme.colors.primaryText,
  },
  title: {
    fontFamily: fonts.inter.semiBold,
    fontSize: ms(14),
    color: theme.colors.typography,
    marginTop: ms(6),
    lineHeight: ms(20),
  },
}));
