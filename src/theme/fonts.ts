export const fonts = {
  openSan: {
    regular: "OpenSans-Regular",
    semiBold: "OpenSans-SemiBold",
    bold: "OpenSans-Bold",
  },
  inter: {
    regular: "Inter-Regular",
    medium: "Inter-Medium",
    semiBold: "Inter-SemiBold",
    bold: "Inter-Bold",
  },
} as const;

export const customFonts = {
  [fonts.inter.regular]: require("../assets/fonts/Inter-Regular.ttf"),
  [fonts.inter.medium]: require("../assets/fonts/Inter-Medium.ttf"),
  [fonts.inter.semiBold]: require("../assets/fonts/Inter-SemiBold.ttf"),
  [fonts.inter.bold]: require("../assets/fonts/Inter-Bold.ttf"),
  [fonts.openSan.regular]: require("../assets/fonts/OpenSans-Regular.ttf"),
  [fonts.openSan.semiBold]: require("../assets/fonts/OpenSans-SemiBold.ttf"),
  [fonts.openSan.bold]: require("../assets/fonts/OpenSans-Bold.ttf"),
};
