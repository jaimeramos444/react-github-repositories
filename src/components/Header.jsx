import styled from "styled-components";

const StyledWrapper = styled.div`
  position: fixed;
  display: flex;
  width: 100%;
  z-index: 1;
  justify-content: center;
  align-items: center;
  background-color: #010409;
`;
const StyledContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const StyledTittle = styled.h1`
  font-size: 30px;
  font-weight: 400;
`;

export const Header = () => {
  return (
    <StyledWrapper>
      <StyledContent>
        <StyledTittle>Github project</StyledTittle>
      </StyledContent>
    </StyledWrapper>
  );
};
