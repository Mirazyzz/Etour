import React from 'react';

import RoomsFilter from './RoomsFilter';
import ToursList from './ToursList';
import { WithRoomConsumer } from '../Context';
import Loading from './Loading';

function RoomsContainer({ context }) {
  const { loading, sortedTours, tours } = context;
  console.log(sortedTours);
  console.log(tours);
  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <RoomsFilter rooms={tours} />
      <ToursList tours={sortedTours} />
    </>
  );
}

export default WithRoomConsumer(RoomsContainer);
