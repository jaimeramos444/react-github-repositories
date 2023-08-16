import PropTypes from "prop-types";
import { useState } from "react";

export const CardRepository = ({ repo }) => {
  const [isFav, setIsFav] = useState(false);
  const handleFav = () => {
    setIsFav(!isFav);
  };

  return (
    <div>
      <h3>{repo.name}</h3>
      <button onClick={handleFav}>{isFav ? "⭐ Starred" : "🌚 Star"}</button>
      <p>{repo.visibility}</p>
      <p>{repo.language}</p>
      <p>{repo.pushed_at}</p>
    </div>
  );
};

CardRepository.propTypes = {
  repo: PropTypes.object.isRequired,
};
