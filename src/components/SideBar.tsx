import { ApiResponse } from "../types";
import React from "react";

interface Props {
  countries: ApiResponse[];
}

const SideBar: React.FC<Props> = ({countries}) => {
  return (
    <div className="col-4 h-100 d-flex flex-column">
      <div className="overflow-auto border p-2">
        <ul className="list-unstyled">
          {countries.map((country, index) => (
            <li key={country.alpha3Code + index}>
              {country.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
