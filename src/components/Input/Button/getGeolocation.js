const getGeolocation = async (city, setWeather, setLocation, location) => {
  if (city === "") {
    console.error("Cidade não definida");
  } else {
    await fetch(
      `https://api.api-ninjas.com/v1/geocoding?city=${city}&country=Brazil`,
      {
        method: "GET",
        contentType: "application/json",
        headers: {
          "X-Api-Key": process.env.REACT_APP_GEOCODING_API_KEY,
        },
      }
    )
      .then((response) => response.json())
      .then((data) => setLocation(data[0]));

    if (location !== null) {
      console.log(location);
/*       await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${location.latitude}&lon=${location.longitude}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
      )
        .then((response) => response.json())
        .then((data) => setWeather(data)); */
    }
  }
};

export default getGeolocation;
