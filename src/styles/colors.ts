export const colors = {
  primary: "#e46f20",
  secondary: "#fcb72b",
  accent: "#cc5803",
  hover: "#ff9505",
  dark: "#582b11",
  light: "#f6e6c4",
  beige: "#e7d7c9",
  white: "#ffffff",
  error: "#cc0303",
  errorBg: "#ffe5e5",
  warningBg: "#ffe5cc",
  infoBg: "#e5f3ff",
} as const;

export type ColorKey = keyof typeof colors;
