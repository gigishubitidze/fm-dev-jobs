import React from "react";
import styled from "styled-components";
import { ContainerSmall as Container } from "../../components/Container";
import Paper from "../../components/Paper";
import { H3, Text } from "../../theme/Typography";
import ApplyButton from "./details/ApplyButton";

const Flex = styled.div`
  height: 96px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TitleContainer = styled.div`
  display: none;

  h3 {
    margin-bottom: 7px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.medium}) {
    display: block;
  }
`;

function Footer({ position, company, apply }) {
  return (
    <Paper>
      <Container>
        <Flex>
          <TitleContainer>
            <H3>{position}</H3>
            <Text>{company}</Text>
          </TitleContainer>
          <ApplyButton url={apply} />
        </Flex>
      </Container>
    </Paper>
  );
}

export default Footer;
