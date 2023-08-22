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
    width: 70%;
    border-radius: 6px;
    box-shadow: inset;
    transition: 80ms cubic-bezier(0.33, 1, 0.68, 1);
    transition-property: color, background-color, box-shadow, border-color;
  }

  select {
    width: 10%;
    border-radius: 8px;
    border: 1px solid grey;
    padding: 0.6em 1.2em;
    font-size: 1em;
    font-weight: 500;
    font-family: inherit;
    background-color: #30363d;
    cursor: pointer;
    transition: border-color 0.25s;
    color: white;
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
        <input placeholder="Find a repository..." />
        <select name="Type">
          <option value="Type" selected>
            Type
          </option>
          <option value="All">All</option>
          <option value="Sources">Sources</option>
          <option value="Forks">Forks</option>
          <option value="Archived">Archived</option>
          <option value="sponsored">Can be sponsored</option>
          <option value="Mirrors">Mirrors</option>
          <option value="Templates">Templates</option>
        </select>
        <select name="Lenguage">
          <option value="Lenguage" selected>
            Lenguage
          </option>
          <option value="All">All</option>
          <option value="JavaScript">JavaScript</option>
        </select>
        <select name="Sort">
          <option value="Sort" selected>
            Sort
          </option>
          <option value="updated">Last updated</option>
          <option value="Name">Name</option>
          <option value="Stars">Stars</option>
        </select>
      </StyledSearch>
      {repository?.map((repo) => (
        <CardRepository key={repo.id} repo={repo} />
      ))}
    </StyledWrapper>
  );
};
