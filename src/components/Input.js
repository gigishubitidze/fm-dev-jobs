import styled from "styled-components";

export const StyledInput = styled.input.attrs({ type: "text" })`
  flex: 1;
  min-width: 0;
  position: relative;
  top: -4px;
  border: none;
  outline: none;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.input.text};
  background-color: transparent;

  &::placeholder {
    color: ${({ theme }) => theme.colors.input.placeholder};
  }
`;
