import React from "react";
import styles from "./reviewsList.module.css";

const ReviewsList = ({ reviews }) => (
  <ul>
    {reviews.map((review) => (
      <li key={review.id}>
        <h3 className={styles.author}>Author: {review.author}</h3>
        <p className={styles.review}>{review.content}</p>
      </li>
    ))}
  </ul>
);

export default ReviewsList;
