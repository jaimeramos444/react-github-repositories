import styled from "styled-components";
import { useEffect, useState } from "react";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  img {
    border-radius: 50%;
    height: 260px;
    width: 260px;
    box-shadow: 0 0 0 1px grey;
  }
`;
const StyledInfo = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: start;
  padding: 10px;
`;

export const ProfileRepository = () => {
  const [repository, setRepository] = useState("error");

  useEffect(() => {
    const fetchRepository = async () => {
      try {
        const response = await fetch("https://api.github.com/users/10delin");
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
      <img src={repository.avatar_url} alt="FotoPerfil" />
      <StyledInfo>
        <p>{repository.name}</p>
        <p>{repository.login}</p>
        <p>{repository.bio}</p>
        <p>{repository.company}</p>
        <p>{repository.location}</p>
        <p>{repository.blog}</p>
      </StyledInfo>
    </StyledWrapper>
  );
};
