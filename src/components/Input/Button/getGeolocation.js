const getGeolocation = async (city, setLocation) => {
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
  }
};

export default getGeolocation;
