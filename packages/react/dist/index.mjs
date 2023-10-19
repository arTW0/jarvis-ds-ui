var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};

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
  14: "3.5rem",
  15: "3.75rem",
  16: "4rem",
  18: "4.5rem",
  20: "5rem",
  24: "6rem",
  32: "8rem",
  40: "10rem",
  64: "16rem",
  80: "20rem"
};
var radii = {
  px: "1px",
  xs: "4px",
  sm: "6px",
  md: "8px",
  lg: "16px",
  full: "99999px"
};
var fonts = {
  default: "Roboto, sans-serif",
  code: "monospace"
};
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
var fontWeights = {
  regular: "400",
  medium: "500",
  bold: "700"
};
var lineHeights = {
  shorter: "125%",
  short: "140%",
  base: "160%",
  tall: "180%"
};

// src/styles/index.ts
import { createStitches, defaultThemeMap } from "@stitches/react";
var {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config
} = createStitches({
  themeMap: __spreadProps(__spreadValues({}, defaultThemeMap), {
    height: "space",
    width: "space"
  }),
  theme: {
    colors,
    fontSizes,
    fontWeights,
    fonts,
    lineHeights,
    radii,
    space
  }
});

// src/components/Box.tsx
var Box = styled("div", {
  padding: "$4",
  borderRadius: "$md",
  backgroundColor: "$red600",
  border: "1px solid $gray100"
});
Box.displayName = "Box";

// src/components/Text.tsx
var Text = styled("p", {
  fontFamily: "$default",
  lineHeight: "$base",
  margin: 0,
  color: "$gray100",
  variants: {
    size: {
      xxs: { fontSize: "$xxs" },
      xs: { fontSize: "$xs" },
      sm: { fontSize: "$sm" },
      md: { fontSize: "$md" },
      lg: { fontSize: "$lg" },
      xl: { fontSize: "$xl" },
      "2xl": { fontSize: "$2xl" },
      "4xl": { fontSize: "$4xl" },
      "5xl": { fontSize: "$5xl" },
      "6xl": { fontSize: "$6xl" },
      "7xl": { fontSize: "$7xl" },
      "8xl": { fontSize: "$8xl" },
      "9xl": { fontSize: "$9xl" }
    }
  },
  defaultVariants: {
    size: "md"
  }
});
Text.displayName = "Text";

// src/components/Heading.tsx
var Heading = styled("h2", {
  fontFamily: "$default",
  lineHeight: "$shorter",
  margin: 0,
  color: "$gray500",
  variants: {
    size: {
      sm: { fontSize: "$xl" },
      md: { fontSize: "$2xl" },
      lg: { fontSize: "$4xl" },
      "2xl": { fontSize: "$5xl" },
      "3xl": { fontSize: "$6xl" },
      "4xl": { fontSize: "$7xl" },
      "5xl": { fontSize: "$8xl" },
      "6xl": { fontSize: "$9xl" }
    }
  },
  defaultVariants: {
    size: "md"
  }
});
Heading.displayName = "Heading";

// src/components/Avatar/index.tsx
import { User } from "phosphor-react";

// src/components/Avatar/styles.ts
import * as Avatar from "@radix-ui/react-avatar";
var AvatarContainer = styled(Avatar.Root, {
  borderRadius: "$full",
  display: "inline-block",
  width: "$12",
  height: "$12",
  overflow: "hidden"
});
var AvatarImage = styled(Avatar.Image, {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderRadius: "inherit"
});
var AvatarFallback = styled(Avatar.Fallback, {
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "$red200",
  color: "$gray500",
  svg: {
    width: "$6",
    height: "$6"
  }
});

// src/components/Avatar/index.tsx
import { jsx, jsxs } from "react/jsx-runtime";
function Avatar2(props) {
  return /* @__PURE__ */ jsxs(AvatarContainer, { children: [
    /* @__PURE__ */ jsx(AvatarImage, __spreadValues({}, props)),
    /* @__PURE__ */ jsx(AvatarFallback, { delayMs: 600, children: /* @__PURE__ */ jsx(User, {}) })
  ] });
}
Avatar2.displayName = "Avatar";

// src/components/Button.tsx
var Button = styled("button", {
  all: "unset",
  borderRadius: "$sm",
  fontSize: "$sm",
  fontWeight: "$medium",
  fontFamily: "$default",
  textAlign: "center",
  minWidth: 120,
  boxSizing: "border-box",
  padding: "0 $4",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "$2",
  cursor: "pointer",
  svg: {
    width: "$4",
    height: "$4"
  },
  "&:disabled": {
    cursor: "not-allowed"
  },
  variants: {
    variant: {
      primary: {
        color: "$white",
        background: "$red300",
        "&:not(:disabled):hover": {
          background: "$red400"
        },
        "&:disabled": {
          backgroundColor: "$gray200"
        }
      },
      secondary: {
        color: "$red300",
        border: "2px solid $red500",
        "&:not(:disabled):hover": {
          background: "$red400",
          color: "$white"
        },
        "&:disabled": {
          color: "$gray500",
          borderColor: "$gray500"
        }
      },
      tertiary: {
        color: "$red300",
        "&:not(:disabled):hover": {
          color: "$red400"
        },
        "&:disabled": {
          color: "$gray600"
        }
      }
    },
    size: {
      sm: {
        height: 38
      },
      md: {
        height: 46
      }
    }
  },
  defaultVariants: {
    variant: "primary",
    size: "md"
  }
});
Button.displayName = "Button";

// src/components/TextInput/styles.ts
var TextInputContainer = styled("div", {
  backgroundColor: "$gray100",
  padding: "$3 $4",
  borderRadius: "$sm",
  boxSizing: "border-box",
  border: "2px solid $red600",
  display: "flex",
  alignItems: "baseline",
  "&:has(input:focus)": {
    borderColor: "$red300"
  },
  "&:has(input:disabled)": {
    opacity: 0.5,
    backgroundColor: "$gray600",
    cursor: "not-allowed"
  }
});
var Prefix = styled("span", {
  fontFamily: "$default",
  fontSize: "$sm",
  color: "$gray400",
  fontWeight: "regular"
});
var Input = styled("input", {
  fontFamily: "$default",
  fontSize: "$sm",
  color: "$gray600",
  fontWeight: "regular",
  background: "transparent",
  border: 0,
  width: "100%",
  "&:focus": {
    outline: 0
  },
  "&:disabled": {
    cursor: "not-allowed"
  },
  "&:placeholder": {
    color: "$gray100"
  }
});

// src/components/TextInput/index.tsx
import { jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
function TextInput(_a) {
  var _b = _a, { prefix } = _b, props = __objRest(_b, ["prefix"]);
  return /* @__PURE__ */ jsxs2(TextInputContainer, { children: [
    !!prefix && /* @__PURE__ */ jsx2(Prefix, { children: prefix }),
    /* @__PURE__ */ jsx2(Input, __spreadValues({}, props))
  ] });
}
TextInput.displayName = "TextInput";

// src/components/TextArea.tsx
var TextArea = styled("textarea", {
  backgroundColor: "$gray100",
  padding: "$3 $4",
  borderRadius: "$sm",
  boxSizing: "border-box",
  border: "2px solid $gray900",
  fontFamily: "$default",
  fontSize: "$sm",
  color: "$gray500",
  fontWeight: "$regular",
  resize: "vertical",
  minHeight: 80,
  "&:focus": {
    outline: 0,
    borderColor: "$red300"
  },
  "&:disabled": {
    backgroundColor: "$gray400",
    cursor: "not-allowed"
  },
  "&:placeholder": {
    color: "$gray400"
  }
});
TextArea.displayName = "TextArea";

// src/components/Checkbox/index.tsx
import { Check } from "phosphor-react";

// src/components/Checkbox/styles.ts
import * as Checkbox from "@radix-ui/react-checkbox";
var CheckboxContainer = styled(Checkbox.Root, {
  all: "unset",
  width: "$6",
  height: "$6",
  backgroundColor: "$gray100",
  borderRadius: "$xs",
  lineHeight: 0,
  cursor: "pointer",
  overflow: "hidden",
  boxSizing: "border-box",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  border: "2px solid $gray300",
  '&[data-state="checked"]': {
    backgroundColor: "$red300"
  },
  "&:focus": {
    border: "2px solid $red300"
  }
});
var slideIn = keyframes({
  from: {
    transform: "translateY(-100%)"
  },
  to: {
    transform: "translateY(0)"
  }
});
var slideOut = keyframes({
  from: {
    transform: "translateY(0)"
  },
  to: {
    transform: "translateY(-100%)"
  }
});
var CheckboxIndicator = styled(Checkbox.Indicator, {
  color: "$gray100",
  width: "$4",
  height: "$4",
  '&[data-state="checked"]': {
    animation: `${slideIn} 200ms ease-out`
  },
  '&[data-state="unchecked"]': {
    animation: `${slideOut} 200ms ease-out`
  }
});

// src/components/Checkbox/index.tsx
import { jsx as jsx3 } from "react/jsx-runtime";
function Checkbox2(props) {
  return /* @__PURE__ */ jsx3(CheckboxContainer, __spreadProps(__spreadValues({}, props), { children: /* @__PURE__ */ jsx3(CheckboxIndicator, { asChild: true, children: /* @__PURE__ */ jsx3(Check, { weight: "bold" }) }) }));
}
Checkbox2.displayName = "Checkbox";

// src/components/MultiStep/styles.ts
var MultiStepContainer = styled("div", {});
var Label = styled(Text, {
  color: "$gray200",
  defaultVariants: {
    size: "xs"
  }
});
var Steps = styled("div", {
  display: "grid",
  gridTemplateColumns: "repeat(var(--steps-size), 1fr)",
  gap: "$2",
  marginTop: "$1"
});
var Step = styled("div", {
  height: "$1",
  borderRadius: "$px",
  backgroundColor: "$gray600",
  variants: {
    active: {
      true: {
        backgroundColor: "$gray100"
      }
    }
  }
});

// src/components/MultiStep/index.tsx
import { jsx as jsx4, jsxs as jsxs3 } from "react/jsx-runtime";
function MultiStep({ size, currentStep = 1 }) {
  return /* @__PURE__ */ jsxs3(MultiStepContainer, { children: [
    /* @__PURE__ */ jsxs3(Label, { children: [
      "Passo ",
      currentStep,
      " de ",
      size
    ] }),
    /* @__PURE__ */ jsx4(Steps, { css: { "--steps-size": size }, children: Array.from({ length: size }, (_, i) => i + 1).map((step) => {
      return /* @__PURE__ */ jsx4(Step, { active: currentStep >= step }, step);
    }) })
  ] });
}
MultiStep.displayName = "MultiStep";

// src/components/ActionSheet/index.tsx
import { useState } from "react";

// src/components/ActionSheet/styles.ts
var ActionSheetContainer = styled("div", {
  fontFamily: "$default"
});
var ActionButton = styled("button", {
  backgroundColor: "$red300",
  color: "$white",
  fontSize: "$sm",
  width: "$32",
  height: "$16",
  borderRadius: "$sm",
  padding: "$4",
  cursor: "pointer",
  fontWeight: "bold",
  border: "none"
});
var ActiveAnimation = keyframes({
  from: {
    transform: "translatey(100%)",
    opacity: 0
  },
  to: {
    transform: "translatey(0%)"
  }
});
var InactiveAnimation = keyframes({
  from: {
    transform: "translatey(0%)",
    opacity: 1
  },
  to: {
    transform: "translatey(110%)"
  }
});
var ActionSheetContent = styled("div", {
  position: "fixed",
  left: "10%",
  bottom: 20,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: "$gray300",
  width: "25vw",
  borderRadius: "$sm",
  zIndex: 1,
  padding: "$2 $1",
  animationFillMode: "forwards",
  "a": {
    color: "$black",
    padding: "$3 $4",
    textDecoration: "none",
    display: "block"
  },
  "&.active": {
    animation: `${ActiveAnimation} 0.5s`
  },
  "&.inactive": {
    animation: `${InactiveAnimation} 0.5s`
  }
});
var CancelButton = styled("button", {
  color: "$red300",
  fontWeight: "$bold",
  width: "80%",
  padding: "$2",
  marginTop: "$2",
  border: "none",
  backgroundColor: "transparent",
  fontSize: "$sm",
  cursor: "pointer"
});

// src/components/ActionSheet/index.tsx
import { jsx as jsx5, jsxs as jsxs4 } from "react/jsx-runtime";
function ActionSheet({ labelButton, children }) {
  const [open, setOpen] = useState(false);
  const [isOnTheScreen, setIsOnTheScreen] = useState(false);
  const handleOnTheScreen = () => {
    if (isOnTheScreen) {
      setTimeout(() => {
        setIsOnTheScreen(false);
      }, 500);
      return;
    }
    setIsOnTheScreen(true);
  };
  const handleActionSheetOpen = () => {
    setOpen(!open);
  };
  return /* @__PURE__ */ jsxs4(ActionSheetContainer, { children: [
    /* @__PURE__ */ jsx5(
      ActionButton,
      {
        onClick: () => {
          handleActionSheetOpen();
          handleOnTheScreen();
        },
        children: labelButton
      }
    ),
    isOnTheScreen && /* @__PURE__ */ jsxs4(ActionSheetContent, { className: open ? "active" : "inactive", children: [
      children,
      /* @__PURE__ */ jsx5(CancelButton, { onClick: () => {
        handleActionSheetOpen();
        handleOnTheScreen();
      }, children: "Cancel" })
    ] })
  ] });
}
ActionSheet.displayName = "ActionSheet";

// src/components/BottomMenu/index.tsx
import LeaderboardRoundedIcon from "@mui/icons-material/LeaderboardRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import AppsRoundedIcon from "@mui/icons-material/AppsRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";

// src/components/BottomMenu/styles.ts
var BottomBox = styled("div", {
  minHeight: "$12",
  position: "fixed",
  width: "70%",
  bottom: 10,
  left: "15%",
  boxShadow: "0px $2 $4 0px rgba(0,0,0,0.2)",
  overflow: "hidden",
  background: "$gray200",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "0 $1",
  borderRadius: "$full"
});
var Item = styled("a", {
  width: "80%",
  height: "$12",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  textDecoration: "none"
});
var ItemContent = styled("div", {
  padding: "$1",
  fontSize: "$xxs",
  display: "flex",
  margin: "1px auto $1 auto",
  lineHeight: "$4",
  color: "$red600",
  paddinTop: "$4",
  marginBottom: "$px",
  ".active": {
    borderRadius: "$full",
    backgroundColor: "$red600",
    color: "$white",
    padding: "$2"
  }
});

// src/components/BottomMenu/index.tsx
import { jsx as jsx6, jsxs as jsxs5 } from "react/jsx-runtime";
function BottomMenu({ appsLink, settingsLink, overviewLink, profileLink, active }) {
  return /* @__PURE__ */ jsxs5(BottomBox, { children: [
    /* @__PURE__ */ jsx6(Item, { href: profileLink, children: /* @__PURE__ */ jsx6(ItemContent, { children: /* @__PURE__ */ jsx6(PersonRoundedIcon, { className: active == "profile" ? "active" : "" }) }) }),
    /* @__PURE__ */ jsx6(Item, { href: appsLink, children: /* @__PURE__ */ jsx6(ItemContent, { children: /* @__PURE__ */ jsx6(LeaderboardRoundedIcon, { className: active == "overview" ? "active" : "" }) }) }),
    /* @__PURE__ */ jsx6(Item, { href: overviewLink, children: /* @__PURE__ */ jsx6(ItemContent, { children: /* @__PURE__ */ jsx6(AppsRoundedIcon, { className: active == "apps" ? "active" : "" }) }) }),
    /* @__PURE__ */ jsx6(Item, { href: settingsLink, children: /* @__PURE__ */ jsx6(ItemContent, { children: /* @__PURE__ */ jsx6(SettingsRoundedIcon, { className: active == "settings" ? "active" : "" }) }) })
  ] });
}
BottomMenu.displayName = "BottomMenu";

// src/components/Cards/index.tsx
import MoreHorizRoundedIcon from "@mui/icons-material/MoreHorizRounded";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import UpgradeRoundedIcon from "@mui/icons-material/UpgradeRounded";
import CreditCardOffRoundedIcon from "@mui/icons-material/CreditCardOffRounded";
import { useState as useState2 } from "react";

// src/components/Cards/styles.ts
var CardBox = styled("section", {
  padding: "0 $4",
  fontFamily: "$default"
});
var CardBlock = styled("div", {
  height: "220px",
  width: "$80",
  borderRadius: "10px",
  background: "$red400",
  boxShadow: "0 $px $xs 0 rgba(0, 0, 0, 0.09)",
  color: "$gray500",
  position: "relative"
});
var CardMain = styled("div", {
  display: "flex",
  alignItems: "flex-end",
  position: "absolute",
  left: 0,
  right: 0,
  bottom: 0,
  top: 0,
  backgroundImage: "linear-gradient(-180deg, rgba(0, 0, 0, 0) 0 %, rgba(0, 0, 0, 0.23) 100 %)",
  borderRadius: "10px",
  padding: "$5 $6"
});
var CardBalance = styled("div", {
  position: "absolute",
  left: "$6",
  top: "$6"
});
var Title = styled("h1", {
  fontWeight: "$bold",
  color: "$white",
  marginTop: "$2",
  fontSize: "$4xl"
});
var CardLabel = styled("span", {
  fontSize: "$xs",
  letterSpacing: "$px",
  opacity: 0.5,
  lineHeight: "$shorter",
  marginBottom: "$sm",
  textTransform: "uppercase",
  display: "block",
  fontWeight: "$medium",
  color: "$red200"
});
var CardNumber = styled("div", {
  fontSize: "$sm",
  letterSpacing: "$1",
  fontWeight: "$medium",
  color: "$white"
});
var CardBottom = styled("div", {
  display: "flex",
  alignItems: "center",
  marginTop: "$5",
  color: "$white"
});
var CardExpiry = styled("div", {
  fontWeight: "$medium",
  fontSize: "$sm",
  color: "$white",
  marginRight: "$4"
});
var CardCVV = styled("div", {
  fontWeight: "$medium",
  fontSize: "$sm",
  color: "$white"
});
var CardButton = styled("div", {
  position: "absolute",
  right: "10px",
  top: "10px"
});
var Dropdown = styled("div", {
  position: "relative",
  display: "inline-block"
});
var DropdownButton = styled("button", {
  display: "block",
  color: "$white",
  padding: "$px",
  fontSize: "$md",
  cursor: "pointer",
  fontWeight: "$bold",
  backgroundColor: "transparent",
  border: "none"
});
var DropdownContent = styled("button", {
  position: "absolute",
  left: "-10px",
  minWidth: "$18",
  marginLeft: "-70px",
  background: "$red500",
  borderRadius: "$4",
  boxShadow: "0 $1 $8 rgba(0, 0, 0, 0.1)",
  backdropFilter: "blur(5.9px)",
  WebkitBackdropFilter: "blur(5.9px)",
  border: "$px solid rgba(255, 255, 255, 0.3)",
  "a": {
    color: "$white",
    padding: "$3 $4",
    textDecoration: "none",
    display: "block"
  },
  "div": {
    display: "flex",
    alignItems: "center",
    ".icon": {
      color: "$white",
      marginLeft: "$2",
      fontSize: "$2xl"
    }
  }
});

// src/components/Cards/index.tsx
import { jsx as jsx7, jsxs as jsxs6 } from "react/jsx-runtime";
function Cards({ balanceValue, cardNumber, cvv, expiryDate, linkDelete, linkEdit, linkUpdate }) {
  const [open, setOpen] = useState2(false);
  const handleDropdownOpen = () => {
    setOpen(!open);
  };
  return /* @__PURE__ */ jsx7(CardBox, { children: /* @__PURE__ */ jsx7(CardBlock, { children: /* @__PURE__ */ jsxs6(CardMain, { children: [
    /* @__PURE__ */ jsx7(CardButton, { children: /* @__PURE__ */ jsxs6(Dropdown, { children: [
      /* @__PURE__ */ jsx7(
        DropdownButton,
        {
          onClick: handleDropdownOpen,
          children: /* @__PURE__ */ jsx7(
            MoreHorizRoundedIcon,
            {
              sx: { fontSize: "2rem" }
            }
          )
        }
      ),
      open ? /* @__PURE__ */ jsxs6(DropdownContent, { children: [
        /* @__PURE__ */ jsxs6("div", { children: [
          /* @__PURE__ */ jsx7(EditRoundedIcon, { className: "icon" }),
          /* @__PURE__ */ jsx7("a", { href: linkEdit, children: "Editar" })
        ] }),
        /* @__PURE__ */ jsxs6("div", { children: [
          /* @__PURE__ */ jsx7(UpgradeRoundedIcon, { className: "icon" }),
          /* @__PURE__ */ jsx7("a", { href: linkUpdate, children: "Atualizar" })
        ] }),
        /* @__PURE__ */ jsxs6("div", { children: [
          /* @__PURE__ */ jsx7(CreditCardOffRoundedIcon, { className: "icon" }),
          /* @__PURE__ */ jsx7("a", { href: linkDelete, children: "Excluir" })
        ] })
      ] }) : null
    ] }) }),
    /* @__PURE__ */ jsxs6(CardBalance, { children: [
      /* @__PURE__ */ jsx7(CardLabel, { children: "BALANCE" }),
      /* @__PURE__ */ jsx7(Title, { children: balanceValue.toLocaleString("pt-BR", { style: "currency", currency: "BRL" }) })
    ] }),
    /* @__PURE__ */ jsxs6("div", { children: [
      /* @__PURE__ */ jsxs6(CardNumber, { children: [
        /* @__PURE__ */ jsx7(CardLabel, { children: "Card Number" }),
        `\u2022\u2022\u2022\u2022 ${cardNumber}`
      ] }),
      /* @__PURE__ */ jsxs6(CardBottom, { children: [
        /* @__PURE__ */ jsxs6(CardExpiry, { children: [
          /* @__PURE__ */ jsx7(CardLabel, { children: "Expiry Date" }),
          expiryDate
        ] }),
        /* @__PURE__ */ jsxs6(CardCVV, { children: [
          /* @__PURE__ */ jsx7(CardLabel, { children: "CVV" }),
          cvv
        ] })
      ] })
    ] })
  ] }) }) });
}

// src/components/ComponentsHeader/styles.ts
var ComponentHeader = styled("section", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginTop: "$8",
  marginBottom: "$4",
  padding: "0 $4",
  fontFamily: "$default",
  fontWeight: "$medium",
  ".title": {
    margin: 0,
    fontSize: "$xl",
    letterSpacing: "-0.01em",
    lineHeight: "$short",
    paddingRight: "$4",
    fontWeight: "$bold",
    color: "$gray500"
  },
  ".link": {
    color: "$red500",
    fontSize: "$sm",
    fontWeight: "$medium",
    textDecoration: "none"
  }
});

// src/components/ComponentsHeader/index.tsx
import { jsx as jsx8, jsxs as jsxs7 } from "react/jsx-runtime";
function ComponentsHeader({ title, pageLink, labelLink }) {
  return /* @__PURE__ */ jsxs7(ComponentHeader, { children: [
    /* @__PURE__ */ jsx8("h2", { className: "title", children: title }),
    /* @__PURE__ */ jsx8("a", { href: pageLink, className: "link", children: labelLink })
  ] });
}

// src/components/Dropdown/styles.ts
var DropdownBox = styled("div", {
  position: "relative",
  display: "inline-block",
  fontFamily: "$default"
});
var DropdownButton2 = styled("button", {
  display: "block",
  backgroundColor: "$red400",
  color: "$gray100",
  fontSize: "$xs",
  borderRadius: "$md",
  padding: "$4",
  cursor: "pointer",
  fontWeight: "$bold",
  border: "none",
  fontFamily: "$default"
});
var DropdownContent2 = styled("div", {
  display: "flex",
  flexDirection: "column",
  position: "absolute",
  textAlign: "center",
  backgroundColor: "$gray300",
  borderRadius: "$md",
  padding: "$1 $2",
  zIndex: 1,
  boxShadow: "0px $2 $4 0px rgba(0,0,0,0.2)",
  fontSize: "$xs",
  "a": {
    display: "block",
    color: "$black",
    padding: "$2 $5",
    textDecoration: "none"
  }
});

// src/components/Dropdown/index.tsx
import { useState as useState3 } from "react";
import { jsx as jsx9, jsxs as jsxs8 } from "react/jsx-runtime";
function Dropdown2({ options, label }) {
  const [open, setOpen] = useState3(false);
  const handleDropdownOpen = () => {
    setOpen(!open);
  };
  const optionsArray = [...options];
  return /* @__PURE__ */ jsxs8(DropdownBox, { children: [
    /* @__PURE__ */ jsx9(
      DropdownButton2,
      {
        onClick: handleDropdownOpen,
        children: label
      }
    ),
    open ? /* @__PURE__ */ jsx9(DropdownContent2, { children: optionsArray.map((item, index) => /* @__PURE__ */ jsx9(
      "a",
      {
        href: "#",
        children: item.option
      },
      `${item}${index}`
    )) }) : null
  ] });
}

// src/components/Footer/styles.ts
var AppFooter = styled("div", {
  position: "fixed",
  left: 0,
  bottom: 0,
  width: "100%",
  borderTop: "1px solid $gray300",
  color: "$white",
  padding: "$4",
  fontSize: "$xs",
  textAlign: "center",
  lineHeight: "base",
  background: "$red400",
  marginTop: "$6",
  fontFamily: "$default"
});
var FooterTitle = styled("div", {
  fontWeight: "$medium",
  marginBottomm: "$2",
  color: "$white"
});

// src/components/Footer/index.tsx
import { jsxs as jsxs9 } from "react/jsx-runtime";
function Footer() {
  const year = (/* @__PURE__ */ new Date()).getFullYear();
  return /* @__PURE__ */ jsxs9(AppFooter, { children: [
    /* @__PURE__ */ jsxs9(FooterTitle, { children: [
      "\xA9 ",
      year,
      " CREDFRANCO \u2013 Solu\xE7\xF5es Financeiras."
    ] }),
    "Todos os direitos reservados."
  ] });
}

// src/components/Header/index.tsx
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import NotificationsNoneRoundedIcon from "@mui/icons-material/NotificationsNoneRounded";

// src/components/Header/styles.ts
var Header = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around",
  position: "relative",
  height: "$14",
  width: "100vw",
  background: "$red300"
});
var MenuIcon = styled("button", {
  fontSize: "$4xl",
  color: "$white",
  backgroundColor: "transparent",
  border: "none"
});
var BoxLogo = styled("div", {
  padding: "0 $3"
});
var BoxLeft = styled("div", {
  height: "$14",
  display: "flex",
  alignItems: "center",
  position: "relative"
});

// src/components/Modal/styles.ts
var ModalContainer = styled("div", {
  position: "absolute",
  top: 0,
  left: "-2.7rem",
  zIndex: 10,
  transitionProperty: "all",
  boxShadow: "50px 50px 50px 500px rgba(0, 0, 0, 0.5)"
});
var ModalContent = styled("div", {
  width: "$40",
  height: "100vh",
  backgroundColor: "$red400",
  padding: "$3",
  overflow: "y",
  ".border-top": {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    margin: "$4 0",
    padding: "0 $4"
  }
});
var CloseButton = styled("button", {
  border: "none",
  backgroundColor: "transparent",
  color: "$white",
  fontSize: "$5"
});

// src/components/Modal/index.tsx
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import { jsx as jsx10, jsxs as jsxs10 } from "react/jsx-runtime";
function Modal({ children, onClose, show }) {
  return onClose ? /* @__PURE__ */ jsx10(
    ModalContainer,
    {
      style: {
        transform: show ? "translateX(0%)" : "translateX(-290%)"
      },
      children: /* @__PURE__ */ jsxs10(ModalContent, { children: [
        /* @__PURE__ */ jsxs10("div", { className: "border-top", children: [
          /* @__PURE__ */ jsx10("div", { children: /* @__PURE__ */ jsx10(
            AccountCircleRoundedIcon,
            {
              sx: {
                color: "white",
                fontSize: "2.5rem"
              }
            }
          ) }),
          /* @__PURE__ */ jsx10(
            CloseButton,
            {
              onClick: () => {
                onClose(false);
              },
              children: /* @__PURE__ */ jsx10(
                CloseRoundedIcon,
                {
                  sx: {
                    fontSize: "2rem"
                  }
                }
              )
            }
          )
        ] }),
        children
      ] })
    }
  ) : null;
}

// src/components/Header/index.tsx
import { useState as useState4 } from "react";
import { jsx as jsx11, jsxs as jsxs11 } from "react/jsx-runtime";
function HeaderComponent({ children, activeModal, activeNotifications, notificationLink }) {
  const [modalIsOpen, setModalIsOpen] = useState4(false);
  return /* @__PURE__ */ jsxs11(Header, { children: [
    /* @__PURE__ */ jsxs11(BoxLeft, { children: [
      activeModal === "on" ? /* @__PURE__ */ jsx11(MenuIcon, { onClick: () => {
        setModalIsOpen;
      }, children: /* @__PURE__ */ jsx11(MenuRoundedIcon, {}) }) : /* @__PURE__ */ jsx11("div", {}),
      /* @__PURE__ */ jsx11(
        Modal,
        {
          show: () => {
            modalIsOpen;
          },
          onClose: () => {
            setModalIsOpen;
          },
          children
        }
      )
    ] }),
    /* @__PURE__ */ jsx11(BoxLogo, { children: /* @__PURE__ */ jsx11(
      "img",
      {
        src: "/",
        width: 160,
        height: 100,
        alt: "logo"
      }
    ) }),
    activeNotifications === "on" ? /* @__PURE__ */ jsx11(
      "a",
      {
        href: notificationLink,
        className: "box-right",
        children: /* @__PURE__ */ jsx11(NotificationsNoneRoundedIcon, { sx: { color: "white" } })
      }
    ) : /* @__PURE__ */ jsx11("div", {})
  ] });
}

// src/components/Loader/styles.ts
var LoadingAnimation = keyframes({
  from: {
    transform: "rotate(0deg)"
  },
  to: {
    transform: "rotate(360deg)"
  }
});
var LoadingWrapper = styled("div", {
  position: "fixed",
  width: "100%",
  height: "100%",
  left: 0,
  top: 0,
  zIndex: 99999,
  background: "$red300",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  ".loading-icon": {
    animation: `${LoadingAnimation} 0.8s linear infinite`
  }
});

// src/components/Loader/index.tsx
import { jsx as jsx12 } from "react/jsx-runtime";
function Loader({ logo }) {
  return /* @__PURE__ */ jsx12(LoadingWrapper, { children: /* @__PURE__ */ jsx12(
    "img",
    {
      src: logo,
      width: 42,
      height: 42,
      alt: "logo",
      className: "loading-icon"
    }
  ) });
}

// src/components/MonthlyGoals/styles.ts
var Bill = styled("div", {
  background: "$red600",
  boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.09)",
  borderRadius: "$md",
  padding: "$5 $6",
  textAlign: "center",
  color: "$white",
  width: "25%",
  fontFamily: "$default",
  ".wrapper": {
    textAlign: "center",
    marginBottom: "$4"
  },
  ".price": {
    fontSize: "$5",
    fontWeight: "$bold",
    color: "$gray100",
    letterSpacing: "-0.02rem",
    lineHeight: "$shorter",
    marginBottom: "$3"
  },
  ".btn": {
    height: "$9",
    padding: "$1 0",
    fontSize: "$xs",
    lineHeight: "$shorter",
    fontWeight: 500,
    boxShadow: "none !important",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "0.2s all",
    textDecoration: "none !important",
    borderRadius: "$md",
    borderWidth: "$px",
    background: "$red200 !important",
    borderColor: "$red300 !important",
    color: "$gray500",
    width: "100%"
  },
  "p": {
    fontSize: "$xs",
    lineHeight: "$short",
    height: "$9",
    margin: "0 0 $3 0"
  }
});
var IconBox = styled("div", {
  width: "$12",
  height: "$12",
  background: "$red400",
  borderRadius: "$md",
  lineHeight: "$short",
  color: "$white",
  fontSize: "$6",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center"
});

// src/components/MonthlyGoals/index.tsx
import PixRoundedIcon from "@mui/icons-material/PixRounded";
import CreditCardRoundedIcon from "@mui/icons-material/CreditCardRounded";
import AttachMoneyRoundedIcon from "@mui/icons-material/AttachMoneyRounded";
import ShoppingBasketRoundedIcon from "@mui/icons-material/ShoppingBasketRounded";
import AccountBalanceRoundedIcon from "@mui/icons-material/AccountBalanceRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import { jsx as jsx13, jsxs as jsxs12 } from "react/jsx-runtime";
function MonthlyBills({ categoryIcon, description, pageToPay, price }) {
  return /* @__PURE__ */ jsxs12(Bill, { children: [
    /* @__PURE__ */ jsx13("div", { className: "wrapper", children: /* @__PURE__ */ jsx13(IconBox, { children: categoryIcon === "pix" ? /* @__PURE__ */ jsx13(PixRoundedIcon, {}) : categoryIcon === "credit-card" ? /* @__PURE__ */ jsx13(CreditCardRoundedIcon, {}) : categoryIcon === "transfer" ? /* @__PURE__ */ jsx13(AttachMoneyRoundedIcon, {}) : categoryIcon === "shopping" ? /* @__PURE__ */ jsx13(ShoppingBasketRoundedIcon, {}) : categoryIcon === "loan" ? /* @__PURE__ */ jsx13(AccountBalanceRoundedIcon, {}) : categoryIcon === "rent" ? /* @__PURE__ */ jsx13(HomeRoundedIcon, {}) : null }) }),
    /* @__PURE__ */ jsx13("div", { className: "price", children: price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" }) }),
    /* @__PURE__ */ jsx13("p", { children: description }),
    /* @__PURE__ */ jsx13("a", { href: pageToPay, className: "btn", children: "PAY NOW" })
  ] });
}

// src/components/SavingGoals/styles.ts
var Goals = styled("div", {
  margin: "$4",
  fontFamily: "$default"
});
var Item2 = styled("div", {
  background: "$red600",
  boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.09)",
  borderRadius: "$md",
  padding: "$5 $6",
  marginBottom: "$3"
});
var GoalContent = styled("div", {
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "space-between",
  marginBottom: "$1",
  "h4": {
    margin: 0,
    fontSize: "$md",
    fontWeight: "$medium",
    color: "$gray100"
  },
  "p": {
    fontSize: "$xs",
    color: "$red100"
  }
});
var Price = styled("div", {
  fontWeight: "$bold",
  color: "$gray100"
});
var Progress = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  fontSize: "$xs",
  fontWeight: "$medium",
  letterSpacing: 0,
  width: "100%",
  color: "$gray100"
});
var ProgressBar = styled("progress", {
  width: "90%",
  height: "$6",
  boxShadow: "1px 1px 4px rgba( 0, 0, 0, 0.2)",
  backgroundColor: "$red100",
  borderRadius: "$md",
  "&::-webkit-progress-value": {
    backgroundColor: "$red500",
    borderRadius: "$md"
  }
});

// src/components/SavingGoals/index.tsx
import { jsx as jsx14, jsxs as jsxs13 } from "react/jsx-runtime";
function SavingGoals({ goal, category, amount, locked }) {
  const percentage = locked * 100 / amount;
  return /* @__PURE__ */ jsx14(Goals, { children: /* @__PURE__ */ jsxs13(Item2, { children: [
    /* @__PURE__ */ jsxs13(GoalContent, { children: [
      /* @__PURE__ */ jsxs13("div", { children: [
        /* @__PURE__ */ jsx14("h4", { children: goal }),
        /* @__PURE__ */ jsx14("p", { children: category })
      ] }),
      /* @__PURE__ */ jsx14(Price, { children: amount.toLocaleString("pt-BR", { style: "currency", currency: "BRL" }) })
    ] }),
    /* @__PURE__ */ jsxs13(Progress, { children: [
      /* @__PURE__ */ jsx14(
        ProgressBar,
        {
          max: "100",
          value: percentage
        }
      ),
      /* @__PURE__ */ jsx14("p", { children: `${percentage.toFixed(0)} %` })
    ] })
  ] }) });
}

// src/components/Stats/styles.ts
var StatBox = styled("div", {
  boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.09)",
  borderRadius: "$md",
  padding: "$5 $6",
  fontFamily: "$default",
  backgroundColor: "$gray500",
  ".title": {
    fontSize: "$xs",
    color: "$gray100",
    fontWeight: "$medium",
    display: "block",
    marginBottom: "$2",
    lineHeight: "$short"
  },
  ".value": {
    fontSize: "$xl",
    fontWeight: "$bold",
    letterSpacing: "-0.02em",
    lineHeight: "$shorter"
  },
  ".text-success": {
    color: "$green100"
  },
  ".text-danger": {
    color: "$red400"
  }
});

// src/components/Stats/index.tsx
import { jsx as jsx15, jsxs as jsxs14 } from "react/jsx-runtime";
function Stats({ title, value, typeValue }) {
  const color = typeValue === "positive" ? "text-success" : typeValue === "negative" ? "text-danger" : null;
  return /* @__PURE__ */ jsxs14(StatBox, { children: [
    /* @__PURE__ */ jsx15("div", { className: "title", children: title }),
    /* @__PURE__ */ jsx15("div", { className: `value ${color}`, children: value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" }) })
  ] });
}

// src/components/StatsBlock.tsx
var StatsBox = styled("section", {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gridGap: "$4",
  padding: "0 $4",
  marginTop: "$4"
});
StatsBox.displayName = "StatsBox";

// src/components/Transactions/styles.ts
var TransactionsBox = styled("section", {
  padding: "0 $4",
  fontFamily: "$default"
});
var Transaction = styled("a", {
  background: "$gray500",
  boxShadow: "0 $px $1 0 rgba(0, 0, 0, 0.09)",
  borderRadius: "$md",
  padding: "$5 $6",
  marginBottom: "$2",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  textDecoration: "none",
  ".price": {
    fontWeight: "$bold",
    letterSpacing: "-0.03em",
    color: "$green300"
  },
  ".text-danger": {
    color: "$red400"
  }
});
var BoxRight = styled("div", {
  paddingLeft: "$2"
});
var Details = styled("div", {
  color: "$gray100",
  fontSize: "$lg",
  "p": {
    fontSize: "$sm",
    color: "$gray300"
  }
});

// src/components/Transactions/index.tsx
import { jsx as jsx16, jsxs as jsxs15 } from "react/jsx-runtime";
function Transactions({ title, amount, category, key, type }) {
  return /* @__PURE__ */ jsx16(TransactionsBox, { children: /* @__PURE__ */ jsxs15(Transaction, { href: "#", children: [
    /* @__PURE__ */ jsxs15(Details, { children: [
      /* @__PURE__ */ jsx16("strong", { children: title }),
      /* @__PURE__ */ jsx16("p", { children: category })
    ] }),
    /* @__PURE__ */ jsx16(BoxRight, { children: /* @__PURE__ */ jsx16(
      "div",
      {
        className: type === "deposit" ? "price" : "price text-danger",
        children: type === "deposit" ? amount.toLocaleString("pt-BR", { style: "currency", currency: "BRL" }) : `- ${amount.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}`
      }
    ) })
  ] }) }, key);
}

// src/components/Wallet/index.tsx
import ControlPointRoundedIcon from "@mui/icons-material/ControlPointRounded";

// src/components/Wallet/styles.ts
var Wallet = styled("div", {
  padding: "0 $4",
  fontFamily: "$default"
});
var Balance = styled("div", {
  display: "flex",
  height: "$32",
  width: "$64",
  alignItems: "center",
  justifyContent: "space-between",
  background: "$red600",
  boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.09)",
  borderRadius: "$md",
  padding: "$4 $5"
});
var Title2 = styled("span", {
  fontWeight: "$medium",
  display: "block",
  marginBottom: "$1",
  color: "$gray100"
});
var Total = styled("h1", {
  fontWeight: "$bold",
  letterSpacing: "-0.01em",
  lineHeight: "$tall",
  fontSize: "$4xl",
  color: "$gray100"
});
var BoxLeft2 = styled("div", {
  paddingRight: "$2"
});
var BoxRight2 = styled("div", {
  padding: 0,
  color: "$gray100"
});

// src/components/Wallet/index.tsx
import { jsx as jsx17, jsxs as jsxs16 } from "react/jsx-runtime";
function WalletComponent({ totalBalance, addFoundsLink }) {
  return /* @__PURE__ */ jsx17(Wallet, { children: /* @__PURE__ */ jsxs16(Balance, { children: [
    /* @__PURE__ */ jsxs16(BoxLeft2, { children: [
      /* @__PURE__ */ jsx17(Title2, { children: "Total Balance" }),
      /* @__PURE__ */ jsx17(Total, { children: totalBalance ? totalBalance.toLocaleString("pt-BR", { style: "currency", currency: "BRL" }) : null })
    ] }),
    /* @__PURE__ */ jsx17(BoxRight2, { children: /* @__PURE__ */ jsx17("a", { href: addFoundsLink, children: /* @__PURE__ */ jsx17(
      ControlPointRoundedIcon,
      {
        sx: {
          color: "white",
          fontSize: "2.5rem",
          marginTop: "1rem"
        }
      }
    ) }) })
  ] }) });
}
export {
  ActionSheet,
  Avatar2 as Avatar,
  BottomMenu,
  Box,
  Button,
  Cards,
  Checkbox2 as Checkbox,
  ComponentsHeader,
  Dropdown2 as Dropdown,
  Footer,
  HeaderComponent,
  Heading,
  Loader,
  Modal,
  MonthlyBills,
  MultiStep,
  SavingGoals,
  Stats,
  StatsBox,
  Text,
  TextArea,
  TextInput,
  Transactions,
  WalletComponent
};
