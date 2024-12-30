import React from "react";
import styled from "styled-components";
import { ButtonPrimary as Button } from "../../../components/Button";

const StyledButton = styled(Button)`
  width: 100%;

  @media (min-width: ${({ theme }) => theme.breakpoints.medium}) {
    width: 140px;
  }
`;

function ApplyButton({ url }) {
  const handleClick = () => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <StyledButton onClick={handleClick}>
      Apply now
    </StyledButton>
  );
}

export default ApplyButton;
