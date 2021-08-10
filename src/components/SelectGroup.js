import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';
import Title from './Title';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 220,
  },
}));

export default function SelectGroup(props) {
  const classes = useStyles();
  const items = props.items.map((el) => (
    <option value={el.toString()}>{el}</option>
  ));

  const handleChange = (event) => {
    props.handleChange(event.target.name, event.target.value);
    console.log(event.target.name);
    console.log(event.target.value);
  };

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
        </form>
      </form>
    </section>
  );
}
