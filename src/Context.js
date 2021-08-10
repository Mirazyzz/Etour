import React, { Component } from 'react';

import { formatDate } from 'react-day-picker/moment';

//import items from './data';
import Client from './Contentful';

const RoomContext = React.createContext();

class RoomProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tours: [],
      sortedTours: [],
      featuredTours: [],
      loading: true,
      city: 'all',
      capacity: '1',
      price: 0,
      minPrice: 500,
      maxPrice: 600,
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData = async () => {
    try {
      let response = await Client.getEntries({
        content_type: 'tour',
      });

      const tours = this.formatData(response.items);
      const featuredTours = tours.filter((room) => room.featured === true);
      let maxPrice = Math.max(...tours.map((el) => el.price));

      this.setState({
        tours: tours,
        sortedTours: tours,
        featuredTours: featuredTours,
        loading: false,
        price: maxPrice,
        maxPrice,
      });
    } catch (err) {
      console.error(`error fetching data: ${err}`);
    }
  };

  formatData(items) {
    let formattedItems = items.map((item) => {
      let id = item.sys.id;
      let images = item.fields.images.map((image) => image.fields.file.url);
      let tour = { ...item.fields, images, id };

      console.log(tour);
      return tour;
    });

    return formattedItems;
  }

  getRoom = (slug) => {
    let tempRooms = Array.from(this.state.tours);
    const room = tempRooms.find((el) => el.slug === slug);

    return room;
  };

  handleChange = (e) => {
    // console.log(typeName);
    // this.setState({ [typeName]: newValue }, this.filterRooms);
    console.log(e.target.value);
    this.setState({ city: e.target.value }, this.filterTours);
  };

  handlePriceChange = (newValue) => {
    //console.log(newValue);
    this.setState({ price: newValue }, this.filterRooms);
  };

  handleDayClick = (day) => {
    this.setState({ selectedDate: formatDate(day) }, this.filterRooms);
  };

  filterTours = () => {
    let { tours, city } = this.state;
    if (city === '') {
      this.setState({ sortedTours: this.state.tours });
      return;
    }
    let tempTours = tours.filter((item) => item.city === city);

    // update state
    this.setState({ sortedTours: tempTours });
  };

  render() {
    return (
      <RoomContext.Provider
        value={{
          ...this.state,
          getRoom: this.getRoom,
          handleChange: this.handleChange,
          handleDayClick: this.handleDayClick,
          handlePriceChange: this.handlePriceChange,
        }}
      >
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}

const RoomConsumer = RoomContext.Consumer;

export function WithRoomConsumer(Component) {
  return function ConsumerWrapper(props) {
    return (
      <RoomConsumer>
        {(value) => <Component {...props} context={value} />}
      </RoomConsumer>
    );
  };
}

export { RoomProvider, RoomConsumer, RoomContext };
