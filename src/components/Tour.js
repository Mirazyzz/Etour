import React from 'react';
import { Link } from 'react-router-dom';
import defualtImg from '../images/room-1.jpeg';
import PropTypes from 'prop-types';

export default function Tour({ tour }) {
  const { city, slug, images, price } = tour;

  return (
    <article>
      <div className="img-container">
        <img src={images[0] || defualtImg} alt="tour" />
        <div className="price-top">
          <h6>{price}$</h6>
          <p>за человека</p>
        </div>
        <Link to={`/rooms/${slug}`} className="btn-primary room-link">
          Детали
        </Link>
      </div>
      <p className="room-info">{city}</p>
    </article>
  );
}

Tour.propTypes = {
  tour: PropTypes.shape({
    city: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string),
    price: PropTypes.number,
  }),
};
