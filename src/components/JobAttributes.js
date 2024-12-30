import React from "react";
import styled from "styled-components";

const StyledJobAttributes = styled.div`
  font-size: 1rem;
  color: #6e8098;
  display: flex;
  align-items: baseline;
  gap: 12px;
`;

const Separator = styled.span`
  width: 4px;
  height: 4px;
  background-color: currentColor;
  border-radius: 50%;
`;

function JobAttributes({ postedAt, contract, ...props }) {
  return (
    <StyledJobAttributes {...props}>
      <span>{postedAt}</span>
      <Separator />
      <span>{contract}</span>
    </StyledJobAttributes>
  );
}

export default JobAttributes;
