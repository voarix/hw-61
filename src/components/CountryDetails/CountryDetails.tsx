import React from "react";
import { CountryDetailsType } from "../../types";

interface Props {
  country: CountryDetailsType;
}

const CountryDetails: React.FC<Props> = ({country}) => {
  return (
    <div className='col-8 p-2'>
      <div>
        <h1>{country.name}</h1>
        <img src={country.flag} alt={`Flag ${country.name}`}/>
      </div>
      <div className="mt-5">
        <h5>Capital: {country.capital}</h5>
        <h5>Population: {country.population}</h5>
      </div>
      Border with:
      <ul>
        {country.borders.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default CountryDetails;