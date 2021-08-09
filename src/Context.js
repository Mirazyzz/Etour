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
      country: 'all',
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
      console.log('tours');
      console.log(tours);
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

      return tour;
    });

    return formattedItems;
  }

  getRoom = (slug) => {
    let tempRooms = Array.from(this.state.rooms);
    const room = tempRooms.find((el) => el.slug === slug);

    return room;
  };

  handleChange = (typeName, newValue) => {
    this.setState({ [typeName]: newValue }, this.filterRooms);
  };

  handlePriceChange = (newValue) => {
    //console.log(newValue);
    this.setState({ price: newValue }, this.filterRooms);
  };

  handleDayClick = (day) => {
    this.setState({ selectedDate: formatDate(day) }, this.filterRooms);
  };

  filterRooms = () => {
    let { rooms, type, capacity, price, selectedDate } = this.state;

    // all the rooms
    let tempRooms = [...rooms];

    // transform values
    capacity = Number(capacity);
    //price = Number(price);

    // filter by type
    if (type !== 'all') {
      tempRooms = tempRooms.filter((room) => room.type === type);
    }

    // filter by capacity
    if (capacity !== 1) {
      tempRooms = tempRooms.filter((room) => room.capacity >= capacity);
    }
    //console.log(tempRooms);

    // filter by price
    tempRooms = tempRooms.filter((room) => room.price <= price);
    //console.log(tempRooms);

    // filter by Date
    if (selectedDate)
      tempRooms = tempRooms.filter(
        (room) => room.avialableFrom <= formatDate(selectedDate)
      );

    // update state
    this.setState({ sortedRooms: tempRooms });
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
