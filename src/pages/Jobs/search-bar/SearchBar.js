import React, { useState } from "react";
import useWindowWidth from "../../../hooks/useWindowWidth";
import styled, { useTheme } from "styled-components";
import Paper from "../../../components/Paper";
import SearchInput from "./SearchInput";
import SearchControls from "./SearchControls";
import { ReactComponent as SearchIcon } from "../../../images/desktop/icon-search.svg";
import { ReactComponent as LocationIcon } from "../../../images/desktop/icon-location.svg";
import { ReactComponent as FilterIcon } from "../../../images/mobile/icon-filter.svg";
import Modal from "./Modal";

const SearchBarContainer = styled(Paper)`
  width: 100%;
  height: 80px;
  margin-bottom: 80px;
  display: flex;
  align-items: center;
`;

function SearchBar({ onSearch }) {
  const [formState, setFormState] = useState({
    jobDetails: "",
    location: "",
    fullTimeOnly: false,
  });

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const theme = useTheme();
  const windowWidth = useWindowWidth();

  const isMobile = windowWidth < parseInt(theme.breakpoints.medium);
  const isLarge = windowWidth >= parseInt(theme.breakpoints.large);

  const handleSearch = () => {
    onSearch(formState);
  };

  return (
    <SearchBarContainer>
      {isMobile ? (
        <>
          <SearchInput
            name="jobDetails"
            value={formState.jobDetails}
            onChange={handleChange}
            icon={FilterIcon}
            iconPosition="right"
            noBorder
            padding="0 16px 0 24px"
            placeholder="Filter by title…"
          />
          <Modal
            formState={formState}
            onChange={handleChange}
            onSearch={handleSearch}
            margin="0 16px 0 8px"
          />
        </>
      ) : (
        <>
          <SearchInput
            name="jobDetails"
            value={formState.jobDetails}
            onChange={handleChange}
            flex={1.1}
            padding={isLarge ? "0 16px 0 32px" : "0 16px 0 24px"}
            icon={SearchIcon}
            placeholder={
              isLarge
                ? "Filter by title, companies, expertise…"
                : "Filter by title…"
            }
          />
          <SearchInput
            name="location"
            value={formState.location}
            onChange={handleChange}
            flex={1}
            padding="0 16px 0 24px"
            icon={LocationIcon}
            placeholder="Filter by location…"
          />
          <SearchControls
            name="fullTimeOnly"
            checked={formState.fullTimeOnly}
            onChange={handleChange}
            width={isLarge ? "345px" : "252px"}
            padding={isLarge ? "0 16px 0 32px" : "0 16px 0 20px"}
            checkboxLabel={isLarge ? "Full Time Only" : "Full Time"}
            buttonWidth={isLarge ? "123px" : "80px"}
            onSearch={handleSearch}
          />
        </>
      )}
    </SearchBarContainer>
  );
}

export default SearchBar;
