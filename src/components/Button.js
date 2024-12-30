import styled from "styled-components";

export const ButtonPrimary = styled.button`
  width: ${({ width }) => width || "auto"};
  padding: 16px 0;
  color: ${({ theme }) => theme.colors.buttonPrimary.text};
  line-height: 1;
  font-weight: 700;
  border: none;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.buttonPrimary.background};
  text-transform: capitalize;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({ theme }) =>
      theme.colors.buttonPrimary.backgroundHover};
  }
`;

export const ButtonSecondary = styled(ButtonPrimary)`
  color: ${({ theme }) => theme.colors.buttonSecondary.text};
  background-color: ${({ theme }) => theme.colors.buttonSecondary.background};

  &:hover {
    background-color: ${({ theme }) =>
      theme.colors.buttonSecondary.backgroundHover};
  }
`;

export const IconButton = styled.button`
  width: 48px;
  height: 48px;
  margin: ${({ margin }) => margin || 0};
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ color }) => color || "#fff"};
  flex: ${({ flex }) => flex || "0 0 auto"};
  background-color: #5964e0;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover,
  &:active {
    background-color: #939bf4;
  }

  svg {
    width: 20px;
    height: 20px;
    fill: currentColor;
    color: #fff;
  }
`;
