import styled from "styled-components";
import { useEffect, useState } from "react";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  img {
    border-radius: 50%;
    height: 296px;
    width: 296px;
    box-shadow: 0 0 0 1px grey;
  }
`;
const StyledInfo = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: start;
  padding: 10px;

  a {
    color: white;
    font-weight: 350;
  }
`;
const StyledDivNameAndNick = styled.div`
  padding-top: 16px;
  padding-bottom: 16px;
`;

const StyleName = styled.p`
  color: white;
  font-size: 24px;
  font-weight: 600;
  margin: 0;
`;

const StyleInfoExt = styled.p`
  color: white;
  font-size: 14px;
  margin: 0;
  padding-bottom: 5px;
`;

const StyleNick = styled.p`
  color: #8d8d8d;
  font-size: 20px;
  font-style: normal;
  font-weight: 350;
  line-height: 24px;
  margin: 0;
`;
const StyleFollowButton = styled.div`
  display: block;
  width: 100%;
  text-align: center;
  button {
    position: relative;
    padding: 5px 16px;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    white-space: nowrap;
    vertical-align: middle;
    cursor: pointer;
    user-select: none;
    border: 1px solid;
    border-radius: 6px;
    appearance: none;
    width: 100%;
  }
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

  const [isFollow, setIsFollow] = useState(false);
  const handleFav = () => {
    setIsFollow(!isFollow);
  };

  return (
    <StyledWrapper>
      <img src={repository.avatar_url} alt="FotoPerfil" />
      <StyledInfo>
        <StyledDivNameAndNick>
          <StyleName>{repository.name}</StyleName>
          <StyleNick>{repository.login}</StyleNick>
        </StyledDivNameAndNick>
        <StyleFollowButton>
          <button onClick={handleFav}>
            <span>{isFollow ? "Unfollow" : "Follow"}</span>
          </button>
        </StyleFollowButton>
        <p>{repository.bio}</p>
        <StyleInfoExt>🏦 {repository.company}</StyleInfoExt>
        <StyleInfoExt>📌 {repository.location}</StyleInfoExt>
        <a>📎 {repository.blog}</a>
      </StyledInfo>
    </StyledWrapper>
  );
};
