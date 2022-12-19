import "./FormButton.css";
import { useContext, useState } from "react";
import { Button } from "@mui/material";
import { CurrentUfContext } from "../../../context/Store";
import getGeolocation from "./getGeolocation";

const FormButton = (props) => {
  const [location, setLocation] = useState({});
  const { currentCity } = useContext(CurrentUfContext);

  return (
    <Button
      variant="contained"
      sx={{ minWidth: 400 }}
      style={{ marginBottom: "60px", marginTop: "10px" }}
      onClick={async () =>
        currentCity
          ? setLocation(await getGeolocation(currentCity)[0])
          : alert("Preencha os campos primeiro")
      }
    >
      Consultar
    </Button>
  );
};

export default FormButton;
