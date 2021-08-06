import React from 'react';
//import { Link } from 'react-router-dom';

import Hero from '../components/Hero';
import Banner from '../components/Banner';

export default function About() {
  return (
    <>
      <Hero>
        <Banner title="О нашей фирме"></Banner>
      </Hero>
      <h2 className="about-title">Наша миссия</h2>
      <div className="about-section">
        <div className="about-description">
          <p>
            Миссия Elysium tour заключается в том, чтобы максимально
            способствовать созданию цивилизованного туристского рынка, где
            отношения в цепочке клиент - агент - оператор основаны на взаимном
            доверии и уважении. Конечная цель деятельности компании - сделать
            качественный отдых доступным для всех категорий населения
            Узбекистана.
            <br />
            <br />
            Through our leading search functionality on desktop and mobile app,
            we connect young and independent travellers with over 17,700 hostel
            properties across more than 179 countries, allowing them to book the
            right hostel based on more than 13 million customer reviews.
            <br />
            <br />
            Over the last 20 years we have built our industry expertise by
            partnering with hostels worldwide, enabling them to manage and
            distribute their inventory to our highly engaged and valuable global
            customer base.
          </p>
        </div>
        <div className="hostel-services-list">
          <ul className="services-list">
            <li>Free Internet</li>
            <li>20 min from Centrum</li>
            <li>Calm localization</li>
            <li>Bus stop (108, 167)</li>
            <li>100 meters Zabka</li>
            <li>Daily cleaning</li>
          </ul>
        </div>
      </div>
    </>
  );
}
