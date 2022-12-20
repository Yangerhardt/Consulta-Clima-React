const getWeather = async (data, lat, lon) => {
  if (data) {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
    );
    return response.json();
  }
};

export default getWeather;
