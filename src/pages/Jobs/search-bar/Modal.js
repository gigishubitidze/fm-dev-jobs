import React, { useState } from "react";
import { IconButton } from "../../../components/Button";
import { ButtonPrimary } from "../../../components/Button";
import { ReactComponent as SearchIcon } from "../../../images/desktop/icon-search.svg";
import { ReactComponent as LocationIcon } from "../../../images/desktop/icon-location.svg";
import styled from "styled-components";
import { Container } from "../../../components/Container";
import Paper from "../../../components/Paper";
import { StyledInput as Input } from "../../../components/Input";
import Checkbox from "../../../components/Checkbox";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled(Paper)``;

const LocationInputContainer = styled.div`
  width: 100%;
  height: 70px;
  padding: 0 24px;
  color: #5964E0;
  border-bottom: 1px solid rgba(110, 128, 152, 0.2);
  display: flex;
  align-items: center;
  gap: 16px;
`;

const SearchControlsContainer = styled.div`
  width: 100%;
  height: 145px;
  padding: 24px;
`;

const SearchButton = styled(ButtonPrimary)`
  margin-top: 24px;
  width: 100%;
`;

function Modal({ formState, onChange, onSearch, ...props }) {
  const [open, setOpen] = useState(false);

  const openDialog = () => {
    setOpen(true);
  };

  const closeDialog = () => {
    setOpen(false);
  };

  const handleClick = (e) => {
    onSearch(e);
    closeDialog();
  };

  return (
    <>
      <IconButton {...props} onClick={openDialog}>
        <SearchIcon />
      </IconButton>
      {open && (
        <ModalOverlay onClick={closeDialog}>
          <Container>
            <ModalContent onClick={(e) => e.stopPropagation()}>
              <LocationInputContainer>
                <LocationIcon />
                <Input
                  name="location"
                  type="text"
                  placeholder="Filter by location…"
                  value={formState.location}
                  onChange={onChange}
                />
              </LocationInputContainer>
              <SearchControlsContainer>
                <Checkbox
                  name="fullTimeOnly"
                  label="Full Time Only"
                  checked={formState.fullTimeOnly}
                  onChange={onChange}
                />
                <SearchButton onClick={handleClick}>Search</SearchButton>
              </SearchControlsContainer>
            </ModalContent>
          </Container>
        </ModalOverlay>
      )}
    </>
  );
}

export default Modal;
