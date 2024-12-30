import React, { useEffect } from "react";
import styled from "styled-components";
import { ContainerSmall as Container } from "../../components/Container";
import Details from "./details";
import Footer from "./Footer";
import Header from "./Header";
import { useLocation } from "react-router-dom";

const Main = styled.main`
  margin-top: -15px;

  @media (min-width: ${({ theme }) => theme.breakpoints.medium}) {
    margin-top: -40px;
  }
`;

function Job() {
  const location = useLocation();
  const job = location.state;

  useEffect(() => window.scroll({ top: 0, behavior: "instant" }), []);

  return (
    <>
      <Main>
        <Container>
          <Header
            logoBackground={job.logoBackground}
            company={job.company}
            logo={job.logo}
            website={job.website}
          />
          <Details
            postedAt={job.postedAt}
            contract={job.contract}
            position={job.position}
            location={job.location}
            apply={job.apply}
            description={job.description}
            requirements={job.requirements}
            role={job.role}
          />
        </Container>
      </Main>
      <Footer position={job.position} company={job.company} apply={job.apply} />
    </>
  );
}

export default Job;
