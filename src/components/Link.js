import React from "react";
import styled from "styled-components";

const StyledLink = styled.a`
  color: ${({ color }) => color || "#0073e6"};
  text-decoration: none;
  font-size: ${({ fontSize }) => fontSize || "16px"};
  font-weight: ${({ fontWeight }) => fontWeight || "normal"};
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }

  &:active {
    color: ${({ activeColor }) => activeColor || "#005bb5"};
  }
`;

const Link = ({ href, children, ...props }) => {
  return (
    <StyledLink href={href} {...props}>
      {children}
    </StyledLink>
  );
};

export default Link;
