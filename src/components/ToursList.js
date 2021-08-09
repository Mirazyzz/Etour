import React from 'react';

import Tour from './Tour';

export default function ToursList({ tours }) {
  if (tours?.length === 0) {
    return (
      <div className="empty-search">
        <h3>unfortunately no rooms matched your search parameters</h3>
      </div>
    );
  }

  return (
    <section className="roomsList">
      <div className="roomslist-center">
        {tours.map((item) => {
          return <Tour key={item.id} tour={item} />;
        })}
      </div>
    </section>
  );
}
