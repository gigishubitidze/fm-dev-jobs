import React from "react";
import styled from "styled-components";
import { ReactComponent as CheckMark } from "../images/desktop/icon-check.svg";

const CheckBoxWrapper = styled.label`
  width: fit-content;
  display: flex;
  align-items: flex-start;
  gap: 16px;
  cursor: pointer;
  user-select: none;
`;

const HiddenInput = styled.input.attrs({
  type: "checkbox",
})`
  display: none;
`;

const StyledCheckbox = styled.span`
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
  transition: all 0.3s ease;

  background-color: ${({ theme, checked }) =>
    checked
      ? theme.colors.checkbox.checkMark.backgroundChecked
      : theme.colors.checkbox.checkMark.background};

  &:hover {
    background-color: ${({ theme, checked }) =>
      checked
        ? theme.colors.checkbox.checkMark.backgroundChecked
        : theme.colors.checkbox.checkMark.backgroundHover};
  }

  & svg {
    opacity: ${({ checked }) => (checked ? "1" : "0")};
    transform: ${({ checked }) => (checked ? "scale(1)" : "scale(0)")};
    transition: all 0.3s ease;
  }
`;

const LabelText = styled.span`
  display: inline-block;
  font-size: 1rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.checkbox.labelText};
`;

function Checkbox({ name, label, checked, onChange }) {
  return (
    <CheckBoxWrapper>
      <HiddenInput name={name} checked={checked} onChange={onChange} />
      <StyledCheckbox checked={checked}>
        <CheckMark />
      </StyledCheckbox>
      <LabelText>{label}</LabelText>
    </CheckBoxWrapper>
  );
}

export default Checkbox;
