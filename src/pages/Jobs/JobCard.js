import React from "react";
import styled, { useTheme } from "styled-components";
import Paper from "../../components/Paper";
import JobAttributes from "../../components/JobAttributes";
import PositionLink from "../../components/ButtonAsLink";
import { sanitizeLogoPath } from "../../utils/sanitizeLogoPath";

const JobCardStyled = styled(Paper)`
  padding: 0 9px 32px 32px;
  width: 327px;
  height: 228px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.medium}) {
    padding: 0 21px 32px 32px;
    width: 339px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.large}) {
    padding: 0 32px 32px 32px;
    width: 350px;
  }
`;

const LogoContainer = styled.div`
  min-width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  background-color: ${({ background }) => background || "red"};
  margin-top: -25px;
  margin-bottom: 24px;
`;

const Attributes = styled(JobAttributes)`
  margin-bottom: 12px;
`;

const Company = styled.p`
  font-size: 16px;
  color: #6e8098;
  margin-bottom: 40px;
`;

const Location = styled.h4`
  font-size: 14px;
  color: #5964e0;
`;

function JobCard({
  id,
  logo,
  logoBackground,
  company,
  postedAt,
  contract,
  position,
  location,
  onClick,
}) {
  const theme = useTheme();

  const handleClick = () => {
    onClick();
  };

  return (
    <JobCardStyled>
      <LogoContainer background={logoBackground}>
        <img src={sanitizeLogoPath(logo)} alt={`${company} logo`} />
      </LogoContainer>
      <Attributes postedAt={postedAt} contract={contract} />
      <PositionLink
        color={theme.colors.jobCardTitle}
        fontSize="1.25rem"
        fontWeight="700"
        marginBottom="12px"
        hoverColor="#6e8098"
        onClick={handleClick}
      >
        {position}
      </PositionLink>
      <Company>{company}</Company>
      <Location>{location}</Location>
    </JobCardStyled>
  );
}

export default JobCard;
