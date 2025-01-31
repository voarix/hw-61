import { ApiResponse } from "../../types";
import React from "react";
import "./SideBar.css";

interface Props {
  countries: ApiResponse[];
  onCountryDetails: (alphaCode: string) => void;
}

const SideBar: React.FC<Props> = ({countries, onCountryDetails}) => {
  console.log('render');

  return (
    <div className="col-4 h-100 d-flex flex-column">
      <div className="overflow-auto border p-2">
        <ul className="list-unstyled fs-5 lh-lg">
          {countries.map((country, index) => (
            <li key={country.alpha3Code + index} className='li-country' onClick={() => onCountryDetails(country.alpha3Code)}>
              {country.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
