import React from "react";
import styled from "styled-components";
import Paper from "../../../components/Paper";
import HeroSection from "./HeroSection";
import ContentSection from "./ContentSection";

const DetailsContainer = styled(Paper)`
  padding: 40px 24px;
  margin-bottom: 64px;

  & > section:not(:last-child) {
    margin-bottom: 40px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.medium}) {
    padding: 48px;
    margin-bottom: 53px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    padding: 48px 43px 48px 48px;
    margin-bottom: 80px;
  }
`;

function JobDetails({
  postedAt,
  contract,
  position,
  location,
  apply,
  description,
  requirements,
  role,
}) {
  return (
    <DetailsContainer>
      <HeroSection
        postedAt={postedAt}
        contract={contract}
        position={position}
        location={location}
        apply={apply}
        description={description}
      />
      <ContentSection
        title="Requirements"
        content={requirements.content}
        items={requirements.items}
        isOrdered={false}
      />
      <ContentSection
        title="What You Will Do"
        content={role.content}
        items={role.items}
        isOrdered={true}
      />
    </DetailsContainer>
  );
}

export default JobDetails;
