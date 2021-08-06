import React, { Component } from 'react';
import {
  FaUmbrellaBeach,
  FaPlane,
  FaShuttleVan,
  FaHotel,
} from 'react-icons/fa';

import Title from './Title';

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaUmbrellaBeach />,
        title: 'Туры',
        info: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. ',
      },
      {
        icon: <FaPlane />,
        title: 'Авиабилеты',
        info: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. ',
      },
      {
        icon: <FaShuttleVan />,
        title: 'Трансфер',
        info: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. ',
      },
      {
        icon: <FaHotel />,
        title: 'Отели',
        info: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. ',
      },
    ],
  };

  render() {
    return (
      <section className="services">
        <Title title="Наши услуги" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
