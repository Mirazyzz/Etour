import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';

import defaultBcg from '../images/room-1.jpeg';

import Banner from '../components/Banner';
import { RoomContext } from '../Context';
import StyledHero from '../components/StyledHero';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader

export default class SingleTour extends Component {
  static contextType = RoomContext;

  constructor(props) {
    super(props);

    this.state = {
      slug: this.props.match.params.slug,
      defaultBcg,
    };
  }

  //componentDidMount() {}

  render() {
    const { getRoom } = this.context;
    const room = getRoom(this.state.slug);

    if (!room) {
      return (
        <div className="error">
          <h3>No such tour could be found :(</h3>
          <Link to="/tours" className="btn-primary">
            Back home
          </Link>
        </div>
      );
    }

    const {
      city,
      price,
      info,
      //extras,
      //breakfast,
      //pets,
      images,
    } = room;

    const [mainImg, ...defaultImg] = images;

    return (
      <>
        <StyledHero img={mainImg || this.state.defaultBcg}>
          <Banner title={city}>
            <Link to="/tours" className="btn-primary">
              Туры
            </Link>
          </Banner>
        </StyledHero>

        <section className="single-room">
          <div className="single-room-images">
            <Carousel>
              {defaultImg.map((item, index) => (
                <img key={index} src={item} alt={city} />
              ))}
            </Carousel>
          </div>
          <div className="single-room-info">
            <article className="desc">
              <h3>Описание</h3>
              <p>{room.description}</p>
            </article>
            <article className="info">
              <h3>Детали</h3>
              <p>
                Цена: {price}$ на одного человека при двухместном размещение.
              </p>
              <p>Длительность отдыха: от 2 до 3 недель.</p>
            </article>
          </div>
        </section>
        <section className="room-extras">
          <h6>В цену включено</h6>
          <ul className="extras">
            {info.map((item, index) => {
              return <li key={index}>- {item}</li>;
            })}
          </ul>
        </section>
      </>
    );
  }
}
