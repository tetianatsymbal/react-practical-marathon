import { createTheme } from "@mui/material/styles";

export const Colors = {
  primary: "#00adb5",
  secondary: "#00c7c0",
  success: "#4caf50",
  info: "#00d5ff",
  danger: "#FF5722",
  warning: "#FFC107",
  dark: "#22414d",
  light: "#aaa",
  muted: "#abafb3",
  border: "#DDDFE1",
  inverse: "#2F3D4A",
  shaft: "#333",
  dove_gray: "#d5d5d5",
  body_bg: "#f3f6f9",
  white: "#fff",
  black: "#000",
};

const overrides = {
  palette: {
    primary: {
      main: Colors.primary,
    },
    secondary: {
      main: Colors.secondary,
    },
  },

  components: {
    MuiAccordion: {
      styleOverrides: {
        root: {
          width: "100%",
          backgroundColor: Colors.dark,
          color: Colors.dove_gray,
          border: "none",
          boxShadow: "none",
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          background: Colors.dark,
          color: Colors.dove_gray,
          borderRadius: "20px",
          borderRight: "1px solid",
          borderColor: Colors.primary,
        },
      },
    },
  },
};

const theme = createTheme(overrides);

export { overrides };
export default theme;
