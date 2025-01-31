import "./App.css";
import axios from "axios";
import { BASE_URL, URL_COUNTRIES, URL_COUNTRY } from "./globalConstants.ts";
import { useCallback, useEffect, useState } from "react";
import { ApiResponse, CountryDetailsType } from "./types";
import SideBar from "./components/SideBar/SideBar.tsx";
import CountryDetails from "./components/CountryDetails/CountryDetails.tsx";
import Loader from "./UI/Loader.tsx";

const App = () => {
  const [countries, setCountries] = useState<ApiResponse[]>([]);
  const [selectedCountry, setSelectedCountry] =
    useState<CountryDetailsType | null>(null);
  const [loader, setLoader] = useState<boolean>(true);

  const fetchData = useCallback(async () => {
    try {
      const response = await axios<ApiResponse[]>(BASE_URL + URL_COUNTRIES);
      setCountries(response.data);
      return response.data;
    } catch (error) {
      console.error(error);
    } finally {
      setLoader(false);
    }
  }, []);

  useEffect(() => {
    void fetchData();
  }, [fetchData]);

  const onCountryDetails = useCallback(async (alphaCode: string) => {
    try {
      setLoader(true);
      const response = await axios<CountryDetailsType>(
        BASE_URL + URL_COUNTRY + alphaCode,
      );
      setSelectedCountry(response.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoader(false);
    }
  }, []);

  return (
    <div className="container">
      {loader ? <Loader /> : null}
      <div className="vh-100 p-3 row">
        <SideBar countries={countries} onCountryDetails={onCountryDetails} />
        {selectedCountry ? <CountryDetails country={selectedCountry} /> : null}
      </div>
    </div>
  );
};

export default App;
