import React from 'react';

import MapSection from '../components/Map';
import ContactForm from '../components/ContactForm';

const location = {
  address: '34 Istikbol Street',
  lat: 41.30174339749936,
  lng: 69.28860200083882,
};

export default function Contacts() {
  return (
    <div>
      <div className="contact-section">
        <div className="contact-info">
          <div>
            <i className="fas fa-map-marker-alt"></i>г.Ташкент, Мирабадский
            район, улица Истикбол-34, 2 этаж
          </div>
          <div>
            <i className="fas fa-envelope"></i>info@elysiumtour.uz
          </div>
          <div>
            <i className="fas fa-phone"></i>+998 94 654-20-70
          </div>
          <div>
            <i className="fas fa-clock"></i>Пн - Пт 9:00 - 18:00
          </div>
        </div>
        <ContactForm />
      </div>
      <MapSection location={location} zoomLevel={17} /> {/* include it here */}
    </div>
  );
}
