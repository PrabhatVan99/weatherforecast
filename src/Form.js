import React, { useState } from 'react';
import axios from 'axios';

const Form = ({ onWeatherData, onError }) => {
  const [city, setCity] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&limit=5&appid=1fadda7905a9f477ca994909821b85b7`
      );
      onWeatherData(response.data);
      setCity('');
    } catch (error) {
      onError('City not found. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name"
        required
      />
      <button type="submit">Get Weather</button>
    </form>
  );
};

export default Form;