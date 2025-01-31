import "./App.css";
import axios from "axios";
import { BASE_URL, URL_COUNTRIES } from "./globalConstants.ts";
import { useCallback, useEffect, useState } from "react";
import { ApiResponse } from "./types";
import SideBar from "./components/SideBar.tsx";

const App = () => {
  const [countries, setCountries] = useState<ApiResponse[]>([]);

  const fetchData = useCallback(async () => {
    const response = await axios.get<ApiResponse[]>(BASE_URL + URL_COUNTRIES);
    console.log(response.data);
    setCountries(response.data);
    return response.data;
  }, []);

  useEffect(() => {
    void fetchData();
  }, [fetchData]);

  return (
    <div className='container vh-100 p-3'>
      <SideBar countries={countries}/>
    </div>
  );
};

export default App;
