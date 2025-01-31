import React from "react";
import { CountryDetailsType } from "../../types";

interface Props {
  country: CountryDetailsType;
}

const CountryDetails: React.FC<Props> = ({country}) => {
  return (
    <div className="col-8 p-2">
      <div className="d-flex justify-content-between align-items-center">
        <h1>{country.name}</h1>
        <div className='width: 50%'>
          <img src={country.flag} alt={`Flag ${country.name}`} className='img-fluid'/>
        </div>
      </div>
      <hr/>
      <div className="mt-5">
        <h5>Capital: {country.capital}</h5>
        <h5>Population: {country.population}</h5>
      </div>
      <hr/>
      Border with:
      <ul>
        {country.borders ? (country.borders.map((item) => (
          <li key={item}>{item}</li>
        ))) : <p>No borders</p>}
      </ul>
    </div>
  );
};

export default CountryDetails;