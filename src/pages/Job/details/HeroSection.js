import React from "react";
import styled from "styled-components";
import { H1, H4, Text } from "../../../theme/Typography";
import ApplyButton from "./ApplyButton";
import JobAttributes from "../../../components/JobAttributes";

const HeroContainer = styled.section`
  margin-bottom: 40px;
`;

const HeroHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 50px;
  margin-bottom: 32px;

  @media (min-width: ${({ theme }) => theme.breakpoints.medium}) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 0;
    margin-bottom: 44px;
  }
`;

const JobInfo = styled.div`
  p,
  h1 {
    margin-bottom: 7px;
  }
`;

function HeroSection({
  postedAt,
  contract,
  position,
  location,
  apply,
  description,
}) {
  return (
    <HeroContainer>
      <HeroHeader>
        <JobInfo>
          <JobAttributes postedAt={postedAt} contract={contract} />
          <H1>{`${position}`}</H1>
          <H4>{`${location}`}</H4>
        </JobInfo>
        <ApplyButton url={apply} />
      </HeroHeader>
      <Text lineHeight="1.625">{`${description}`}</Text>
    </HeroContainer>
  );
}

export default HeroSection;
