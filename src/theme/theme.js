const breakpoints = {
  medium: "768px",
  large: "1440px",
};

export const sharedStyles = {
  fontSizeBase: "16px",
  fontFamily: '"Kumbh Sans", serif',
  colors: {
    buttonPrimary: {
      text: "#fff",
      background: "#5964e0",
      backgroundHover: "#939bf4",
    },
    checkbox: {
      checkMark: {
        backgroundHover: "rgba(89, 100, 224, .25)",
        backgroundChecked: "rgba(89, 100, 224)",
      },
    },
  },
};

export const lightTheme = {
  fontSizeBase: sharedStyles.fontSizeBase,
  fontFamily: sharedStyles.fontFamily,
  colors: {
    ...sharedStyles.colors,
    background: "#f4f6f8",
    text: "#19202D",
    primary: "#007bff",
    secondary: "#6c757d",
    h1: "#19202D",
    h2: "#19202D",
    h3: "#19202D",
    h4: "#5964E0",
    paper: "#ffffff",
    buttonSecondary: {
      text: "#5964e0",
      background: "rgba(89, 100, 224, .1)",
      backgroundHover: "rgba(89, 100, 224, .35)",
    },
    jobCardTitle: "#19202D",
    input: {
      text: "#19202D",
      placeholder: "rgba(25, 32, 45, 0.5)",
    },
    filterIconColor: "#6E8098",
    checkbox: {
      labelText: "#19202d",
      checkMark: {
        background: "rgba(25, 32, 45, 0.1035)",
        backgroundHover: "rgba(89, 100, 224, .25)",
        backgroundChecked: "rgba(89, 100, 224)",
      },
    },
  },
  breakpoints,
};

export const darkTheme = {
  fontSizeBase: sharedStyles.fontSizeBase,
  fontFamily: sharedStyles.fontFamily,
  colors: {
    ...sharedStyles.colors,
    background: "#121721",
    text: "#9DAEC2",
    primary: "#007bff",
    secondary: "#6c757d",
    h1: "#FFFFFF",
    h2: "#FFFFFF",
    h3: "#FFFFFF",
    h4: "#5964E0",
    paper: "#19202d",
    buttonSecondary: {
      text: "#fff",
      background: "rgba(255, 255, 255, .1)",
      backgroundHover: "rgba(255, 255, 255, .35)",
    },
    jobCardTitle: "#FFFFFF",
    input: {
      text: "#FFFFFF",
      placeholder: "rgba(255, 255, 255, .5)",
    },
    checkbox: {
      labelText: "#FFFFFF",
      checkMark: {
        background: "rgba(255, 255, 255, 0.1035)",
        backgroundHover: "rgba(89, 100, 224, .25)",
        backgroundChecked: "rgba(89, 100, 224)",
      },
    },
  },
  breakpoints,
};
