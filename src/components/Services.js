import React, { Component } from 'react';
import {
  FaHeart,
  FaHighlighter,
  FaMoneyBillAlt,
  FaHandshake,
} from 'react-icons/fa';

import Title from './Title';

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaMoneyBillAlt />,
        title: 'Демократичные и объективные цены',
        info: 'Низкие цены на различные цены дают возможность нашим клиентам путешествовать с огромным удовольствием, экономя семейный бюджет.',
      },
      {
        icon: <FaHandshake />,
        title: 'Удобные и прозрачные условия сотрудничества',
        info: 'Мы предельно честно рассказываем нашим клиентам обо всех тонкостях и особенностях поездки, ведь для нас крайне важно не просто продать тур, а сделать так, чтобы клиент остался доволен.',
      },
      {
        icon: <FaHighlighter />,
        title: 'Оперативная работа',
        info: 'Оформление заявок происходит довольно быстро и согласно всем требованиям туристов. Если же в заявке случаются какие-либо изменения, то мы стараемся оперативно сообщить обо всех переменах любым удобным для вас способом (смс, мессенджер, электронная почта, звонок по телефону).',
      },
      {
        icon: <FaHeart />,
        title: 'Высокое качество предоставляемых услуг',
        info: 'Пожелания каждого клиента мы внимательно и выслушиваем и стараемся максимально удовлетворить запросы наших туристов, даже если это бывает сложно или практически невозможно.',
      },
    ],
  };

  render() {
    return (
      <section className="services">
        <Title title="Почему выбирают услуги ELYSIUMTOUR" />
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
