import "./FormButton.css";
import { useContext, useEffect, useState } from "react";
import { Button } from "@mui/material";
import { CurrentUfContext } from "../../../context/Store";
import getGeolocation from "./getGeolocation";

const FormButton = (props) => {
  const [location, setLocation] = useState();
  const { currentCity, setWeather } = useContext(CurrentUfContext);

  
  return (
    <>
      <Button
        variant="contained"
        sx={{ minWidth: 400 }}
        style={{ marginBottom: "60px", marginTop: "10px" }}
        onClick={async () => {
          currentCity
            ? setLocation((await getGeolocation(currentCity, setWeather, setLocation, location)))
            : alert("Preencha os campos primeiro");
        }}
      >
        {console.log(location)}
        Consultar
      </Button>
    </>
  );
};

export default FormButton;
