import PropTypes from "prop-types";

export const albumTypes = {
  albumData: PropTypes.shape({
    artist: PropTypes.string.isRequired,
    albumName: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    released: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
  })
};
