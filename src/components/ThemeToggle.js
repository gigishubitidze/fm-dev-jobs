import React from "react";
import styled from "styled-components";
import { useTheme } from "../theme/ThemeContext";
import Sun from "../images/desktop/icon-sun.svg";
import Moon from "../images/desktop/icon-moon.svg";

const ThemeToggleStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const Button = styled.button`
  width: 48px;
  height: 24px;
  border: none;
  border-radius: 12px;
  background-color: #fff;
  position: relative;
  cursor: pointer;

  &::after {
    content: "";
    display: block;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background-color: #5964e0;
    position: absolute;
    top: 5px;
    left: ${({ $isDarkMode }) => ($isDarkMode ? "29px" : "5px")};
  }
`;

const ThemeToggle = () => {
  const { isDarkMode, toggleColorMode } = useTheme();

  return (
    <ThemeToggleStyled>
      <img src={Sun} alt="Sun icon" />
      <Button $isDarkMode={isDarkMode} onClick={toggleColorMode} />
      <img src={Moon} alt="Moon icon" />
    </ThemeToggleStyled>
  );
};

export default ThemeToggle;
