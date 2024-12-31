import React from "react";
import { H2, Text } from "../../theme/Typography";
import { ButtonSecondary } from "../../components/Button";
import styled from "styled-components";
import Paper from "../../components/Paper";
import { sanitizeLogoPath } from "../../utils/sanitizeLogoPath";

const HeaderContainer = styled(Paper)`
  height: 205px;
  margin-bottom: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;

  @media (min-width: ${({ theme }) => theme.breakpoints.medium}) {
    height: 140px;
    margin-bottom: 32px;
    flex-direction: row;
    gap: 0;
  }
`;

const HeaderLogoContainer = styled.div`
  width: 50px;
  height: 50px;
  margin-top: -25px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  background-color: ${({ background }) => background || "red"};

  @media (min-width: ${({ theme }) => theme.breakpoints.medium}) {
    width: 140px;
    height: 140px;
    margin: 0;
    border-radius: 0 0 0 6px;
  }
`;

const HeaderItemsContainer = styled.div`
  padding: 0 40px;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  width: 100%;

  @media (min-width: ${({ theme }) => theme.breakpoints.medium}) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 0;
  }
`;

const HeaderTextContainer = styled.div`
  text-align: center;

  h2 {
    margin-bottom: 7px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.medium}) {
    text-align: left;
  }
`;

function Header({ logoBackground, company, logo, website }) {
  const handleClick = () => {
    window.open(website, "_blank", "noopener,noreferrer");
  };

  return (
    <HeaderContainer>
      <HeaderLogoContainer background={logoBackground}>
        <img src={sanitizeLogoPath(logo)} alt={`${company} logo`} />
      </HeaderLogoContainer>
      <HeaderItemsContainer>
        <HeaderTextContainer>
          <H2>{company}</H2>
          <Text>{`${company.replace(" ", "").toLowerCase()}.com`}</Text>
        </HeaderTextContainer>
        <ButtonSecondary
          width="147px"
          aria-label="Visit company site"
          onClick={handleClick}
        >
          Company site
        </ButtonSecondary>
      </HeaderItemsContainer>
    </HeaderContainer>
  );
}

export default Header;
