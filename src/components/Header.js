import React from "react";
import styled from "styled-components";
import { Container } from "./Container";
import bgUrlMobile from "../images/mobile/bg-pattern-header.svg";
import bgUrlTablet from "../images/tablet/bg-pattern-header.svg";
import bgUrlDesktop from "../images/desktop/bg-pattern-header.svg";
import Logo from "../images/desktop/logo.svg";
import ThemeToggle from "./ThemeToggle";

const StyledHeader = styled.header`
  height: 136px;
  padding-top: 32px;

  background-image: url(${bgUrlMobile});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;

  @media (min-width: ${({ theme }) => theme.breakpoints.medium}) {
    height: 160px;
    padding-top: 42px;
    background-image: url(${bgUrlTablet});
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    height: 162px;
    padding-top: 45px;
    background-image: url(${bgUrlDesktop});
  }
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

function Header() {
  return (
    <StyledHeader>
      <Container>
        <Flex>
          <img src={Logo} alt="Devjobs logo" />
          <ThemeToggle />
        </Flex>
      </Container>
    </StyledHeader>
  );
}

export default Header;
