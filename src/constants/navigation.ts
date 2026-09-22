export const NAVIGATION = {
  home: "index/index",
  progress: "progress/progress",
  learn: "learn/learn",
  journal: "journal/journal",
  profile: "profile/profile",
  explore: "explore/explore",
  measurement: "progress/measurement",
  posts: "posts",
} as const;

export type NavigationRoute = (typeof NAVIGATION)[keyof typeof NAVIGATION];
