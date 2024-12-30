import React from "react";
import styled from "styled-components";
import { StyledInput as Input } from "../../../components/Input";

const SearchInputContainer = styled.div`
  height: 100%;
  padding: ${({ padding }) => padding || 0};
  flex: ${({ flex }) => flex || 1};
  display: flex;
  align-items: center;
  gap: 16px;
  min-width: 0;
  color: ${({ color }) => color || "#5964E0"};
  border-right: ${({ noBorder }) =>
    noBorder ? "none" : "1px solid rgba(110, 128, 152, .2)"};
`;

function SearchInput({
  name,
  value,
  onChange,
  icon: Icon,
  iconPosition = "left",
  placeholder,
  ...props
}) {
  return (
    <SearchInputContainer {...props}>
      {iconPosition === "left" ? (
        <>
          {Icon && <Icon />}
          <Input
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
          />
        </>
      ) : (
        <>
          <Input
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
          />
          {Icon && <Icon />}
        </>
      )}
    </SearchInputContainer>
  );
}

export default SearchInput;
