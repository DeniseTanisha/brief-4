import PropTypes from "prop-types";

// Using propTypes to define the data types for the 'skills' object

export const skillsTypes = PropTypes.shape({
  loudness: PropTypes.number.isRequired,
  greed: PropTypes.number.isRequired,
  attitude: PropTypes.number.isRequired,
  sass: PropTypes.number.isRequired,
  mvp: PropTypes.number.isRequired
});

// Using propTypes to define the data types for
// the props object passed to the card component

export const cardTypes = {
  cardData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    skills: skillsTypes
  })
};
