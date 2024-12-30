import { createContext, useContext, useState } from "react";
import { StyleSheetManager, ThemeProvider } from "styled-components";
import GlobalStyles from "./GlobalStyles";
import { lightTheme, darkTheme } from "./theme";
import isPropValid from "@emotion/is-prop-valid";

const ThemeContext = createContext();

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const StyledThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleColorMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <StyleSheetManager shouldForwardProp={shouldForwardProp}>
      <ThemeContext.Provider value={{ isDarkMode, toggleColorMode }}>
        <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
          <GlobalStyles />
          {children}
        </ThemeProvider>
      </ThemeContext.Provider>
    </StyleSheetManager>
  );
};

function shouldForwardProp(propName, target) {
  if (typeof target === "string") {
    return isPropValid(propName);
  }
  return true;
}
