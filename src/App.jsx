import axios from "axios";
import { Fragment, useState } from "react";

import SearchComponent from "./components/SearchComponent";
import WeatherComponent from "./components/WeatherComponent";
import { ApiKey } from "./Constants";

function App() {
  const [enterdCity, setEnteredCity] = useState("");
  const [weather, setWeather] = useState();
  const fetchApi = (event) => {
    event.preventDefault();
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${enterdCity}&appid=${ApiKey}`
      )
      .then((response) => {
        setWeather(response.data);
      });
  };
  return (
    <Fragment>
      {weather ? (
        <WeatherComponent weather={weather} />
      ) : (
        <SearchComponent
          city={enterdCity}
          updatedCity={setEnteredCity}
          fetchWeather={fetchApi}
        />
      )}
    </Fragment>
  );
}

export default App;
