import "./FormButton.css";
import { useContext, useEffect, useState } from "react";
import { Button } from "@mui/material";
import { CurrentUfContext } from "../../../context/Store";
import getGeolocation from "./getGeolocation";

const FormButton = (props) => {
  const [location, setLocation] = useState({latitude: null, longitude: null});
  const { currentCity, weather, setWeather } = useContext(CurrentUfContext);

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${location.latitude}&lon=${location.longitude}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => setWeather(data));
  }, [location]);

  return (
    <>
      <Button
        variant="contained"
        sx={{ minWidth: 400 }}
        style={{ marginBottom: "60px", marginTop: "10px" }}
        onClick={async () => {
          currentCity
            ? setLocation((await getGeolocation(currentCity))[0])
            : alert("Preencha os campos primeiro");
        }}
      >
        Consultar
      </Button>
    </>
  );
};

export default FormButton;
