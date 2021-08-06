import React from 'react';
import { Link } from 'react-router-dom';

import Hero from '../components/Hero';
import Banner from '../components/Banner';
import RoomsContainer from '../components/RoomsContainer';

export default function Rooms() {
  return (
    <>
      <Hero hero="roomsHero">
        <Banner title="Наши туры">
          <Link to="/" className="btn-primary">
            Главное
          </Link>
        </Banner>
      </Hero>
      <RoomsContainer />
    </>
  );
}
