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
  p {
    color: white;
    font-size: 12px;
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

  const fecha1 = new Date(repo.pushed_at);
  const fecha2 = new Date();
  const difFech = fecha2.getTime() - fecha1.getTime();
  const dateDifFech = Math.round(difFech / (1000 * 60 * 60 * 24));
  let dateSentence = "Updated " + dateDifFech + " days ago";

  function dateSentencefunc(dateDifFech) {
    if (dateDifFech < 31) {
      dateSentence = "Updated " + dateDifFech + " days ago";
      return dateSentence;
    } else if (dateDifFech < 365 && dateDifFech >= 31) {
      let months = dateDifFech / 31;
      let dateSentence = "Updated " + parseInt(months) + " months ago";
      return dateSentence;
    } else if (dateDifFech >= 365) {
      let years = dateDifFech / 365;
      let dateSentence = "Updated " + parseInt(years) + " years ago";
      return dateSentence;
    }
  }

  return (
    <StyledWrapper>
      <StyledContent>
        <StyledContentTittle>
          <a>{repo.name}</a>
          <StyledVisibility>{repo.visibility}</StyledVisibility>
        </StyledContentTittle>
        <StyledContentTittle>
          <p>🟡 {repo.language}</p>
          <p>{dateSentencefunc(dateDifFech)}</p>
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
