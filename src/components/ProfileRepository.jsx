import styled from "styled-components";
import { useEffect, useState } from "react";

const StyledWrapper = styled.div``;

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
      <p>{repository.avatar_url}</p>
      <p>{repository.name}</p>
      <p>{repository.login}</p>
      <p>{repository.bio}</p>
      <p>{repository.company}</p>
      <p>{repository.location}</p>
      <p>{repository.blog}</p>
    </StyledWrapper>
  );
};
