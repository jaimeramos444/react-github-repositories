import styled from "styled-components";
import { ContentRepository } from "../components/ContentRepository";
import { ProfileRepository } from "../components/ProfileRepository";

const StyledWrapper = styled.div`
  padding: 20px 30px;
  padding-top: 100px;
  position: relative;
  display: flex;
  gap: 20px;
  min-width: 1012px;
  margin: 0 10%;
`;

export const Home = () => {
  return (
    <StyledWrapper>
      <ProfileRepository />
      <ContentRepository />
    </StyledWrapper>
  );
};
