import React from 'react';
//import { Link } from 'react-router-dom';

import Hero from '../components/Hero';
import Banner from '../components/Banner';

import {
  FaGlobe,
  FaMoneyBillAlt,
  FaHotel,
  FaCalendarAlt,
  FaHandsHelping,
  FaPlane,
  FaShuttleVan,
} from 'react-icons/fa';

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
            Миссия ElysiumTour заключается в том, чтобы максимально
            способствовать созданию цивилизованного туристского рынка, где
            отношения в цепочке клиент - агент - оператор основаны на взаимном
            доверии и уважении. Конечная цель деятельности компании - сделать
            качественный отдых доступным для всех категорий населения
            Узбекистана.
            <br />
          </p>
        </div>
        <div className="hostel-services-list">
          <ul className="services-list">
            <li>
              <span>
                <FaMoneyBillAlt />
              </span>
              Выгодные цены
            </li>
            <li>
              <span>
                <FaGlobe />
              </span>
              Любые туры
            </li>
            <li>
              <span>
                <FaHotel />
              </span>
              Лучшие отели
            </li>
            <li>
              <span>
                <FaCalendarAlt />
              </span>
              Быстрая бронь
            </li>
            <li>
              <span>
                <FaHandsHelping />
              </span>
              Визовая поддержка
            </li>
            <li>
              <span>
                <FaPlane />
              </span>
              Авиабилеты
            </li>
            <li>
              <span>
                <FaShuttleVan />
              </span>
              Трансфер
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
