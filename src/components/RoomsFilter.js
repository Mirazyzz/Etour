import { React, useContext } from 'react';
import 'react-day-picker/lib/style.css';

import { RoomContext } from '../Context';
import { makeStyles } from '@material-ui/core/styles';
import Title from './Title';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';

export default function RoomsFilter({ tours }) {
  const context = useContext(RoomContext);

  const { handleChange } = context;

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
            <Select
              native
              defaultValue=""
              id="grouped-native-select"
              onChange={handleChange}
            >
              <option aria-label="None" value="" />
              <optgroup label="Турция">
                <option value={'Анталия'}>Анталия</option>
                <option value={'Стамбул'}>Стамбул</option>
                <option value={'Бодрум'}>Бодрум</option>
                <option value={'Мармарис'}>Мармарис</option>
              </optgroup>
              <optgroup label="ОАЭ">
                <option value={'Дубаи'}>Дубаи</option>
                <option value={'Шарджа'}>Шарджа</option>
              </optgroup>
              <optgroup label="Египет">
                <option value={'Шарм Эль шейх'}>Шарм Эль шейх</option>
                <option value={'Хурганда'}>Хурганда</option>
              </optgroup>
            </Select>
          </FormControl>
          {/*end select type */}
        </form>
      </form>
    </section>
  );
}
