import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const Repository = () => {
  const [repository, setRepository] = useState([]);

  const { name } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    const fetchRepository = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/repos/10delin/${name}`
        );
        const data = await response.json();
        setRepository(data);
        console.log(data);
      } catch (error) {
        console.error("error fetching repositories", error);
      }
    };
    fetchRepository();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const goToHome = () => {
    navigate("/");
  };

  return (
    <>
      <h1>New page</h1>
      <h1>{repository.name}</h1>
      <button onClick={goToHome}>Volver</button>
    </>
  );
};
