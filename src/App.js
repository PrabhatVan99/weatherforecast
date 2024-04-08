import React, { useState } from 'react';
import Form from './Form';
import WeatherCard from './WeatherCard';
import Error from './Error';

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const handleWeatherData = (data) => {
    setWeatherData(data);
  };

  const handleError = (errorMessage) => {
    setError(errorMessage);
  };

  return (
    <div className="app">
      <h1>Weather App</h1>
      <Form onWeatherData={handleWeatherData} onError={handleError} />
      {error && <Error message={error} />}
      {weatherData && <WeatherCard data={weatherData} />}
    </div>
  );
};

export default App;