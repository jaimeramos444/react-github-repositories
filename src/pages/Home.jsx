import { useEffect, useState } from "react";
import { CardRepository } from "../components/CardRepository";

export const Home = () => {
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
    <>
      <h1>Repositorios: </h1>
      {repository?.map((repo) => (
        <CardRepository key={repo.id} repo={repo} />
      ))}
    </>
  );
};
