import "./FormButton.css";
import { useContext, useState, useEffect } from "react";
import { Button } from "@mui/material";
import { CurrentUfContext } from "../../../context/Store";
import getGeolocation from "./getGeolocation";

const FormButton = (props) => {
  const [location, setLocation] = useState();
  const { currentCity, setWeather, setLoading, loading } =
    useContext(CurrentUfContext);

  useEffect(() => {
    if (!location) return;
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${location.latitude}&lon=${location.longitude}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => setWeather(data))
      .finally(setLoading(false));
  }, [location]);

  return (
    <>
      <Button
        variant="contained"
        className="search-button"
        style={{ marginBottom: "60px", marginTop: "10px" }}
        onClick={async () => {
          if (currentCity) {
            setLoading(true);
            setWeather(null);
            await getGeolocation(currentCity, setLocation);
          } else {
            alert("Preencha os campos primeiro");
          }
        }}
      >
        Consultar
      </Button>
    </>
  );
};

export default FormButton;
