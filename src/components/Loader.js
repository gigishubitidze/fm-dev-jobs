import styled from "styled-components";

const LoaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  visibility: ${({ isVisible }) => (isVisible ? "visible" : "hidden")};
  transition: opacity 0.3s ease;
  pointer-events: ${(props) => (props.isVisible ? "auto" : "none")};
`;

const Spinner = styled.div`
  width: 50px;
  height: 50px;
  border: 5px solid rgba(0, 0, 255, 0.3);
  border-top: 5px solid blue;
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

function Loader({ isVisible }) {
  return (
    <LoaderContainer
      isVisible={isVisible}
      role="status"
      aria-hidden={!isVisible}
    >
      <Spinner />
    </LoaderContainer>
  );
}

export default Loader;
