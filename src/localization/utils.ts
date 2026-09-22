import { STRINGS } from "@/constants/strings";

export function translate(key: string, fallback?: string): string {
  const keys = key.split(".");
  let current: any = STRINGS;
  for (const k of keys) {
    if (current && typeof current === "object" && k in current) {
      current = current[k];
    } else {
      return fallback ?? key;
    }
  }
  return typeof current === "string" ? current : (fallback ?? key);
}

export function useTranslate() {
  return translate;
}
