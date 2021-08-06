import React from 'react';

import MapSection from '../components/Map';
import ContactForm from '../components/ContactForm';

const location = {
  address: 'Poland, Warsaw, Bartycka 16A',
  lat: 52.21268,
  lng: 21.07049,
};

export default function Contacts() {
  return (
    <div>
      <div className="contact-section">
        <div className="contact-info">
          <div>
            <i className="fas fa-map-marker-alt"></i>Ташкент
          </div>
          <div>
            <i className="fas fa-envelope"></i>elysiumtour@gmail.com
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
