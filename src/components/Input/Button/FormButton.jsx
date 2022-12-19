import "./FormButton.css";
import { useContext, useState } from "react";
import { Button } from "@mui/material";
import { CurrentUfContext } from "../../../context/Store";

const getGeolocation = async (city) => {
  if (city === "") {
    console.error("Cidade não definida");
  } else {
    const response = await fetch(
      `https://api.api-ninjas.com/v1/geocoding?city=${city}&country=Brazil`,
      {
        method: "GET",
        headers: {
          "X-Api-Key": process.env.REACT_APP_API_KEY,
        },
      }
    );
    return response.json();
  }
};

const FormButton = (props) => {
  const [location, setLocation] = useState({});
  const { currentCity } = useContext(CurrentUfContext);

  return (
    <Button
      variant="contained"
      sx={{ minWidth: 400 }}
      style={{ marginBottom: "60px", marginTop: "10px" }}
      onClick={() =>
        currentCity
          ? getGeolocation(currentCity)
          : alert("Preencha os campos primeiro")
      }
    >
      Consultar
    </Button>
  );
};

export default FormButton;
