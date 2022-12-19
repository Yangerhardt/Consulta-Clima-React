const getGeolocation = async (city) => {
  if (city === "") {
    console.error("Cidade não definida");
  } else {
    const response = await fetch(
      `https://api.api-ninjas.com/v1/geocoding?city=${city}&country=Brazil`,
      {
        method: "GET",
        contentType: 'application/json',
        headers: {
          "X-Api-Key": process.env.REACT_APP_GEOCODING_API_KEY,
        },
      }
    );
    return response.json();
  }
};

export default getGeolocation