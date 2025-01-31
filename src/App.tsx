import "./App.css";
import axios from "axios";
import { BASE_URL, URL_COUNTRIES, URL_COUNTRY } from "./globalConstants.ts";
import { useCallback, useEffect, useState } from "react";
import { ApiResponse, CountryDetailsType } from "./types";
import SideBar from "./components/SideBar/SideBar.tsx";
import CountryDetails from "./components/CountryDetails/CountryDetails.tsx";

const App = () => {
  const [countries, setCountries] = useState<ApiResponse[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<CountryDetailsType | null>(null);

  const fetchData = useCallback(async () => {
    const response = await axios.get<ApiResponse[]>(BASE_URL + URL_COUNTRIES);
    setCountries(response.data);
    return response.data;
  }, []);

  useEffect(() => {
    void fetchData();
  }, [fetchData]);

  const onCountryDetails = async (alphaCode: string) => {
    try{
      const response = await axios.get(BASE_URL + URL_COUNTRY + alphaCode);
      setSelectedCountry(response.data);
      console.log(response.data);
    } catch(err){
      console.error(err);
    }
  };

  return (
    <div className='container'>
      <div className='vh-100 p-3 row'>
      <SideBar countries={countries} onCountryDetails={onCountryDetails}/>
      {selectedCountry ? <CountryDetails country={selectedCountry}/> : null}
      </div>
    </div>
  );
};

export default App;
