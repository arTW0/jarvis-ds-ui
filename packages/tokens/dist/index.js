"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  colors: () => colors,
  fontSizes: () => fontSizes,
  fontWeights: () => fontWeights,
  fonts: () => fonts,
  lineHeights: () => lineHeights,
  radii: () => radii,
  space: () => space
});
module.exports = __toCommonJS(src_exports);

// src/colors.ts
var colors = {
  white: "#FFF",
  black: "#000",
  red100: "#B3919B",
  red200: "#FFCFD7",
  red300: "#F83845",
  red400: "#DC3545",
  red500: "#DC3545B3",
  red600: "#9A2539",
  gray100: "#F5F5F5",
  gray200: "#E0E0E0",
  gray300: "#AFAFAF",
  gray400: "#958D9E",
  gray500: "#3F3F3F",
  gray600: "#222222",
  gray700: "#27173E",
  green100: "#28A745",
  green200: "#309A259F",
  green300: "#007D00"
};

// src/space.ts
var space = {
  1: "0.25rem",
  2: "0.5rem",
  3: "0.75rem",
  4: "1rem",
  5: "1.25rem",
  6: "1.5rem",
  7: "1.75rem",
  8: "2rem",
  9: "2.25rem",
  10: "2.5rem",
  11: "2.75rem",
  12: "3rem",
  13: "3.25rem",
  14: "3.5rem",
  15: "3.75rem",
  16: "4rem",
  17: "4.25rem",
  18: "4.5rem",
  19: "4.75rem",
  20: "5rem",
  21: "5.25rem",
  22: "5.5rem",
  23: "5.75rem",
  24: "6rem",
  28: "7rem",
  32: "8rem",
  36: "9rem",
  40: "10rem",
  64: "16rem",
  80: "20rem"
};

// src/radii.ts
var radii = {
  px: "1px",
  xs: "4px",
  sm: "6px",
  md: "8px",
  lg: "16px",
  full: "99999px"
};

// src/fonts.ts
var fonts = {
  default: "Roboto, sans-serif",
  code: "monospace"
};

// src/font-sizes.ts
var fontSizes = {
  xxs: "0.625rem",
  xs: "0.75rem",
  sm: "0.875rem",
  md: "1rem",
  lg: "1.125rem",
  xl: "1.25rem",
  "2xl": "1.5rem",
  "4xl": "2rem",
  "5xl": "2.25rem",
  "6xl": "3rem",
  "7xl": "4rem",
  "8xl": "4.5rem",
  "9xl": "6rem"
};

// src/font-weights.ts
var fontWeights = {
  regular: "400",
  medium: "500",
  bold: "700"
};

// src/line-heights.ts
var lineHeights = {
  shorter: "125%",
  short: "140%",
  base: "160%",
  tall: "180%"
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  colors,
  fontSizes,
  fontWeights,
  fonts,
  lineHeights,
  radii,
  space
});
