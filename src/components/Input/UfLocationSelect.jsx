import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import "./UfLocationSelect.css";
import axios from "axios";
import UfFormSelect from "./Select/UfFormSelect";

export default function UfLocationSelect(props) {
  const [ufLocation, setUfLocation] = useState("");
  const [cityData, setCityData] = useState([]);
  let cities = [];

  const callCities = (stateUf) => {
    axios(
      `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${stateUf}/municipios`
    )
      .then((response) => {
        cities = response.data;
      })
      .finally(setUfLocation(stateUf));
  };

  const addUniversityToCompare = async (chiptoadd) => {
    var currentToCompare = cityData.slice();
    currentToCompare.push(chiptoadd);
    setCityData(currentToCompare);
    console.log(chiptoadd);
  };

  useEffect(() => {
    callCities(ufLocation);
  }, [ufLocation]);

  return (
    <div>
      <Box sx={{ minWidth: 120, maxWidth: 400 }} padding={2} margin="auto">
        <FormControl fullWidth className="input-control">
          <InputLabel>{props.type}</InputLabel>
          <UfFormSelect />
        </FormControl>
      </Box>
    </div>
  );
}
