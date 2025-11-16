module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Paleta de colores Flhour UI Kit (Figma Design)
        primary: "#e46f20", // Zest
        secondary: "#fcb72b", // My Sin
        accent: "#cc5803", // Red Stage
        dark: "#582b11", // Jambalaya
        light: "#f6e6c4", // Sidecar
        beige: "#e7d7c9", // Bone
        white: "#ffffff",
        // Colores semánticos
        success: "#f6e6c4", // Sidecar (success background)
        warning: "#ffe5cc", // Tequila
        error: "#cc0303", // Guardsman Red
        info: "#e5f3ff", // Pippin/Solitude
        // Grises
        gray: "#767676", // Boulder
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
      },
      fontSize: {
        // Semantic Typography
        "heading-1": ["45.2px", { lineHeight: "76.8px", fontWeight: "700" }],
        "heading-2": ["31.1px", { lineHeight: "51.2px", fontWeight: "700" }],
        "heading-3": ["19.1px", { lineHeight: "32px", fontWeight: "700" }],
        "heading-4": ["18.6px", { lineHeight: "32px", fontWeight: "700" }],
        "heading-5": ["12.5px", { lineHeight: "21.25px", fontWeight: "700" }],
        "heading-6": ["9.9px", { lineHeight: "17.15px", fontWeight: "700" }],
        body: ["14.9px", { lineHeight: "25.6px", fontWeight: "400" }],
        "body-small": ["12.9px", { lineHeight: "22.4px", fontWeight: "400" }],
      },
      spacing: {
        "item-spacing-s": "24px",
        "item-spacing": "15px",
      },
    },
  },
  plugins: [],
};
