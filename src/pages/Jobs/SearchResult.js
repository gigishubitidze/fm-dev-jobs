import React from "react";
import styled from "styled-components";
import JobCard from "./JobCard";
import { useNavigate } from "react-router-dom";

const StyledSearchResult = styled.ul`
  margin-bottom: 32px;
  list-style: none;
  display: flex;
  column-gap: 0;
  row-gap: 49px;
  flex-wrap: wrap;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.medium}) {
    margin-bottom: 56px;
    column-gap: 11px;
    row-gap: 65px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.large}) {
    margin-bottom: 56px;
    column-gap: 30px;
    row-gap: 65px;
  }
`;

const NoJobs = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text};
`;

function SearchResult({ jobs }) {
  const navigate = useNavigate();

  const handleClick = (job) => {
    navigate(`/jobs/${job.id}`, { state: job, replace: false });
  };

  if (!jobs.length) {
    return <NoJobs>No jobs found. 😒</NoJobs>;
  }

  return (
    <StyledSearchResult>
      {jobs.map((job) => (
        <li key={job.id}>
          <JobCard
            id={job.id}
            logo={job.logo}
            logoBackground={job.logoBackground}
            company={job.company}
            postedAt={job.postedAt}
            contract={job.contract}
            position={job.position}
            location={job.location}
            onClick={() => handleClick(job)}
          />
        </li>
      ))}
    </StyledSearchResult>
  );
}

export default SearchResult;
