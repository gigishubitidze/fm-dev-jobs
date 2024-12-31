import React, { useState } from "react";
import styled from "styled-components";
import { Container } from "../../components/Container";
import SearchBar from "./search-bar/SearchBar";
import { ButtonPrimary as LoadMoreButton } from "../../components/Button";
import useData from "../../hooks/useData";
import SearchResult from "./SearchResult";
import Loader from "../../components/Loader";

const Main = styled.main`
  margin-top: -40px;
`;

const ButtonContainer = styled.div`
  margin-bottom: 62px;
  text-align: center;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.large}) {
    margin-bottom: 104px;
  }
`;

function Jobs() {
  const [query, setQuery] = useState({ limit: 12 });
  const { data, isLoading, error } = useData(
    `${process.env.PUBLIC_URL}/data.json`,
    query
  );

  const handleSearchChange = (filters) => {
    setQuery((prevQuery) => ({ ...prevQuery, ...filters }));
  };

  const handleLoadMore = () => {
    setQuery((prevQuery) => ({ ...prevQuery, limit: prevQuery.limit + 6 }));
  };

  return (
    <Main>
      <Container>
        <Loader isVisible={isLoading} />
        <SearchBar onSearch={handleSearchChange} />
        {error && <div>error: {error}</div>}
        {data && (
          <>
            <SearchResult jobs={data} />
            <ButtonContainer>
              <LoadMoreButton width="141px" onClick={handleLoadMore}>
                Load more
              </LoadMoreButton>
            </ButtonContainer>
          </>
        )}
      </Container>
    </Main>
  );
}

export default Jobs;
