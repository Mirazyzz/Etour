import { React, useContext } from 'react';
import 'react-day-picker/lib/style.css';

import { RoomContext } from '../Context';
import { makeStyles } from '@material-ui/core/styles';
import Title from './Title';
import DateTimePicker from './DatePicker';
import Slider from './SelectRange';
import NativeSelects from './Select';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';

// get unique values of rooms data
const getUnique = (items, value) => {
  return [...new Set(items.map((item) => item[value]))];
};

export default function RoomsFilter({ rooms }) {
  const context = useContext(RoomContext);
  const prices = [...new Set(rooms.map((room) => room.price))];

  const { handleChange, handleDayClick, handlePriceChange, selectedDate } =
    context;

  let types = getUnique(rooms, 'type');
  // add 'all' type
  types = ['all', ...types].sort((a, b) => a.length - b.length);

  // get data in JSX format

  let pricesFor = ['1 day', '1 week', '1 month', '6 months'];

  const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
      maxWidth: 220,
    },
  }));
  const classes = useStyles();

  return (
    <section className="filter-container">
      <Title title="Искать туры" />
      <form className="filter-form">
        {/*select type */}
        <form className="filter-form">
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="grouped-native-select">
              Выберите город отправки
            </InputLabel>
            <Select native defaultValue="" id="grouped-native-select">
              <option aria-label="None" value="" />
              <optgroup label="Турция">
                <option value={1}>Анталия</option>
                <option value={2}>Стамбул</option>
                <option value={3}>Бодрум</option>
                <option value={4}>Мармарис</option>
              </optgroup>
              <optgroup label="ОАЭ">
                <option value={5}>Дубаи</option>
                <option value={6}>Шарджа</option>
              </optgroup>
              <optgroup label="Египет">
                <option value={7}>Шарм Эль шейх</option>
                <option value={8}>Хурганда</option>
              </optgroup>
            </Select>
          </FormControl>
          {/*end select type */}

          {/*guests */}
          <div className="form-group">
            <NativeSelects
              items={pricesFor}
              selectName="capacity"
              title="Price for"
              handleChange={handleChange}
            />
          </div>
          {/*end guests */}
        </form>
      </form>
    </section>
  );
}
