import React, { Component } from 'react';

import { RoomContext } from '../Context';
import Tour from './Tour';
import Loading from './Loading';
import Title from './Title';

export default class FeaturedTours extends Component {
  static contextType = RoomContext;

  render() {
    let { loading, featuredTours: tours } = this.context;
    tours = tours.map((tour) => {
      return <Tour key={tour.id} tour={tour} />;
    });
    return (
      <section className="featured-rooms">
        <Title title="Актуальные Туры  " />
        <div className="featured-rooms-center">
          {loading ? <Loading /> : tours}
        </div>
      </section>
    );
  }
}
