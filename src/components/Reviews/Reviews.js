import React, { Component } from "react";
import { fetchMovieReviews } from "../../services/Api";
import ReviewsList from "../ReviewsList/ReviewsList";
import PropTypes from "prop-types";

class Reviews extends Component {
  state = {
    reviews: [],
  };

  componentDidMount = () => {
    this.getReviews();
  };

  getReviews = () => {
    fetchMovieReviews(this.props.match.params.id, 1)
      .then(({ data }) => {
        this.setState({
          reviews: [...data.results],
        });
      })
      .catch((error) => console.log(error));
  };

  render() {
    const { reviews } = this.state;
    return (
      <>
        {reviews.length > 0 ? (
          <ReviewsList reviews={reviews} />
        ) : (
          `There is no reviews for this movie :(`
        )}
      </>
    );
  }
}

export default Reviews;

Reviews.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }),
};
