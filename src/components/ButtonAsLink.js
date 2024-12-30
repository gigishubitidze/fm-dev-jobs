import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  width: 100%;
  background: none;
  border: none;
  padding: 0;

  text-align: left;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  color: ${({ color }) => color || "#0073e6"};
  font-size: ${({ fontSize }) => fontSize || "16px"};
  font-weight: ${({ fontWeight }) => fontWeight || "normal"};
  margin-bottom: ${({ marginBottom }) => marginBottom || "0"};
  cursor: pointer;

  &:hover,
  &:active {
    color: ${({ hoverColor }) => hoverColor || "#005bb5"};
  }

  &:disabled {
    color: #ccc;
    cursor: not-allowed;
  }
`;

const ButtonAsLink = ({ children, onClick, ...props }) => {
  return (
    <StyledButton onClick={onClick} {...props}>
      {children}
    </StyledButton>
  );
};

export default ButtonAsLink;
