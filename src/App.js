import Input from './components/Input';
import CountryCard from './components/CountryCard';
import ThemeBtn from './components/ThemeBtn';
import { useState } from 'react';
import $ from 'jquery';

const App = () => {
  const [stateInfo, setStateInfo] = useState({});
  const [light, setLight] = useState(true);
  const colorArray = [
    '#219ebc',
    '#023047',
    '#8ecae6',
    '#ffffffa6',
    '#0000008c',
    '#fff',
    '#000',
  ];

  const searchCountry = (name) => {
    fetch(`https://restcountries.com/v3.1/name/${name}`)
      .then((res) => res.json())
      .then((data) => renderData(data[0]));
  };

  const renderData = (data = null) => {
    if (data === null) {
      return null;
    }

    const info = {
      name: data.name.common,
      officialName: data.name.official,
      capitalCity: data.capital,
      continent: data.continents[0],
      currencies: data.currencies,
      flag: data.flags.svg,
      languages: data.languages,
      population: data.population,
      timezone: data.timezones,
    };
    // Debug
    console.log(info);
    setStateInfo(info);
  };

  const changeTheme = () => {
    setLight(!light);
    if (light) {
      $(':root')
        .css('--light-clr', colorArray[1])
        .css('--dark-clr', colorArray[2])
        .css('--bg-clr', colorArray[4])
        .css('--light', colorArray[6])
        .css('--dark', colorArray[5]);
    } else {
      $(':root')
        .css('--light-clr', colorArray[2])
        .css('--dark-clr', colorArray[1])
        .css('--bg-clr', colorArray[3])
        .css('--light', colorArray[5])
        .css('--dark', colorArray[6]);
    }
  };

  return (
    <div className='App'>
      <Input onKeyDown={searchCountry} />

      {Object.keys(stateInfo).length !== 0 ? (
        <CountryCard info={stateInfo} />
      ) : (
        ''
      )}

      <ThemeBtn onClick={changeTheme} isLight={light} />
    </div>
  );
};

export default App;
