import styled from "styled-components";

export const Container = styled.div`
  width: 375px;
  padding: 0 24px;
  margin: 0 auto;
  background-color: transparent;
  transition: all 0.3s ease;

  @media (min-width: ${({ theme }) => theme.breakpoints.medium}) {
    width: 768px;
    padding: 0 39px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    width: 1440px;
    padding: 0 165px;
  }
`;

export const ContainerSmall = styled(Container)`
  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    padding: 0 355px;
  }
`;
