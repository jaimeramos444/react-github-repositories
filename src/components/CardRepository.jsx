import PropTypes from "prop-types";
import { useState } from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: row;
  border-top: 1px solid white;
  align-items: center;
`;

const StyledContent = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
`;
const StyledContentTittle = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items: center;

  a {
    color: #0969da;
    font-size: 20px;
  }
`;

const StyledVisibility = styled.p`
  padding: 1px 7px;
  border: 1px solid white;
  border-radius: 2em;
  font-size: 12px;
`;

const StyledButton = styled.button`
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  padding: 3px 12px;
`;

export const CardRepository = ({ repo }) => {
  const [isFav, setIsFav] = useState(false);
  const handleFav = () => {
    setIsFav(!isFav);
  };

  return (
    <StyledWrapper>
      <StyledContent>
        <StyledContentTittle>
          <a>{repo.name}</a>
          <StyledVisibility>{repo.visibility}</StyledVisibility>
        </StyledContentTittle>
        <StyledContentTittle>
          <p>🟡 {repo.language}</p>
          <p>{repo.pushed_at}</p>
        </StyledContentTittle>
      </StyledContent>
      <StyledButton onClick={handleFav}>
        <span>{isFav ? "⭐ " : "💫 "}</span>
        <span>{isFav ? " Starred" : " Star"}</span>
      </StyledButton>
    </StyledWrapper>
  );
};

CardRepository.propTypes = {
  repo: PropTypes.object.isRequired,
};
