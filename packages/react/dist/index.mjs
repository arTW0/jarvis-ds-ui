// ../tokens/dist/index.mjs
var colors = {
  white: "#FFF",
  black: "#000",
  red100: "#B3919B",
  red200: "#FFCFD7",
  red300: "#F83845",
  red400: "#DC3545",
  red500: "#DC3545B3",
  red600: "#9A2539",
  gray100: "#f1f1f1",
  gray200: "#F5F5F5",
  gray300: "#e0e0e0",
  gray400: "#AFAFAF",
  gray500: "#958D9E",
  gray600: "#3F3F3F",
  gray700: "#222222",
  gray800: "#27173E",
  green100: "#007D00",
  green200: "#28A745",
  green300: "#309A259F"
};

// src/index.tsx
import { jsx } from "react/jsx-runtime";
function App() {
  return /* @__PURE__ */ jsx('h1', {
    style: { color: colors.green100 },
    children: 'oi',
  })
}
export {
  App
};
