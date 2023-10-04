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

// src/index.tsx
var src_exports = {};
__export(src_exports, {
  App: () => App
});
module.exports = __toCommonJS(src_exports);

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
let import_jsx_runtime = require('react/jsx-runtime')
function App() {
  // eslint-disable-next-line camelcase
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)('h1', {
    style: { color: colors.green100 },
    children: 'oi',
  })
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  App
});
