import styled, { css } from "styled-components";

const BaseList = css`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  gap: 8px;

  li {
    padding-left: 2rem;
    position: relative;
  }

  li::before {
    font-weight: 700;
    line-height: 1.65;
    color: #5964e0;
    position: absolute;
    left: 0;
  }
`;

export const StyledUL = styled.ul`
  ${BaseList}

  li::before {
    content: "\\2022";
  }
`;

export const StyledOL = styled.ol`
  ${BaseList}
  counter-reset: list-counter;

  li {
    counter-increment: list-counter;
  }

  li::before {
    content: counter(list-counter);
  }
`;