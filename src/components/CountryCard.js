import PropTypes from 'prop-types';

const CountryCard = ({ info }) => {
  return (
    // name: data.name.common,
    // officialName: data.name.official,
    // capitalCity: data.capital,
    // continent: data.continents[0],
    // currencies: data.currencies,
    // flag: data.flags.svg,
    // languages: data.languages,
    // population: data.population,
    // timezone: data.timezones,

    <div className='CountryCard'>
      <img className='countryImage' src={info.flag} alt='flag' />
      <h1 className='countryName'>{info.name}</h1>

      <div className='description'>
        <p className='countryName'>
          Official Name:
          <span> {info.officialName} </span>
        </p>

        <p className='countryContinent'>
          Continent:
          <span> {info.continent} </span>
        </p>

        <p className='countryPopulation'>
          Population: <span>{info.population}</span>
        </p>

        <h3 className='countryLanguage'>Language</h3>
        {/* languages loop */}
        <ul className='languagesList'>
          {Object.keys(info.languages).map((lang) => (
            <li key={lang} className='language'>
              {info.languages[lang]} ({lang})
            </li>
          ))}
        </ul>

        <h3 className='countryCapital'>Capital City</h3>
        <ul className='coutryCapitalList'>
          {/* Capital city loop */}
          {info.capitalCity.map((capital) => (
            <li key={capital} className='capital'>
              {capital}
            </li>
          ))}
        </ul>

        <h3 className='countryCurrency'>Currency</h3>
        {/* languages loop */}
        <ul className='currencyList'>
          {Object.keys(info.currencies).map((currency) => (
            <li key={currency} className='currency'>
              {info.currencies[currency].name}
              <span>({info.currencies[currency].symbol})</span>
            </li>
          ))}
        </ul>

        <h3 className='countryTimezone'>Timezone</h3>
        {info.timezone.length > 1
          ? info.timezone.map((timezone) => `${timezone}, `)
          : info.timezone}
      </div>
    </div>
  );
};

CountryCard.propTypes = {
  info: PropTypes.object,
};

CountryCard.defaultProps = {
  info: null,
};

export default CountryCard;
