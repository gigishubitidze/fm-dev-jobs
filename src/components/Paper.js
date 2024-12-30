import styled from "styled-components";

const Paper = styled.div`
  width: 100%;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors.paper};
`;

export default Paper;
