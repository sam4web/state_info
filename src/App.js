import Input from './components/Input';
import CountryCard from './components/CountryCard';
import { useState } from 'react';

const App = () => {
  const [stateInfo, setStateInfo] = useState({});

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

  return (
    <div className='App'>
      <Input onKeyDown={searchCountry} />

      {Object.keys(stateInfo).length !== 0 ? (
        <CountryCard info={stateInfo} />
      ) : (
        ''
      )}
    </div>
  );
};

export default App;
