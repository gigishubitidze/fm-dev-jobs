import React from "react";
import styled from "styled-components";
import Checkbox from "../../../components/Checkbox";
import { ButtonPrimary } from "../../../components/Button";

const SearchControlContainer = styled.div`
  height: 100%;
  width: ${({ width }) => width || "auto"};
  padding: ${({ padding }) => padding || "0"};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

function SearchControls({
  name,
  checked,
  onChange,
  checkboxLabel,
  buttonWidth,
  onSearch,
  ...props
}) {
  return (
    <SearchControlContainer {...props}>
      <Checkbox
        name={name}
        label={checkboxLabel}
        checked={checked}
        onChange={onChange}
      />
      <ButtonPrimary width={buttonWidth} onClick={onSearch}>
        Search
      </ButtonPrimary>
    </SearchControlContainer>
  );
}

export default SearchControls;
