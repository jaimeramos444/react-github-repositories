import PropTypes from "prop-types";

export const CardRepository = ({ repo }) => {
  return (
    <div>
      <h3>{repo.name}</h3>
    </div>
  );
};

CardRepository.propTypes = {
  repo: PropTypes.object.isRequired,
};
