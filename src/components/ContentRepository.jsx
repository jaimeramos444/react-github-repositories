import { CardRepository } from "../components/CardRepository";
import { useEffect, useState } from "react";
import styled from "styled-components";

const StyledSearch = styled.div`
  padding: 16px 0;
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;

  input {
    padding: 5px 12px;
    width: 80%;
  }

  button {
    padding: 5px 16px;
  }
`;

const StyledWrapper = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const ContentRepository = () => {
  const [repository, setRepository] = useState([]);

  useEffect(() => {
    const fetchRepository = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/users/10delin/repos"
        );
        const data = await response.json();
        setRepository(data);
        console.log(data);
      } catch (error) {
        console.error("error fetching repositories", error);
      }
    };
    fetchRepository();
  }, []);

  return (
    <StyledWrapper>
      <StyledSearch>
        <input />
        <button>Type</button>
        <button>Lenguage</button>
        <button>Sort</button>
      </StyledSearch>
      {repository?.map((repo) => (
        <CardRepository key={repo.id} repo={repo} />
      ))}
    </StyledWrapper>
  );
};
