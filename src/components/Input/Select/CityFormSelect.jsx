import { useState, useEffect, useContext } from "react";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import axios from "axios";
import { CurrentUfContext } from "../../../context/Store";

const CityFormSelect = (props) => {
  const { currentUf, setCurrentCity } = useContext(CurrentUfContext);
  const [cityData, setCityData] = useState([]);
  const [formCity, setFormCity] = useState("");

  const callCities = (stateUf) => {
    axios(
      `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${stateUf}/municipios`
    ).then((response) => {
      setCityData(response.data);
    });
  };

  useEffect(() => {
    callCities(currentUf);
  }, [currentUf]);

  return (
    <Select
      disabled={currentUf === "" ? true : false}
      value={formCity}
      onChange={(e) => setFormCity(e.target.value)}
      onBlur={(e) => setCurrentCity(e.target.value)}
      MenuProps={{
        style: {
          maxHeight: 220,
        },
      }}
    >
      {cityData &&
        cityData.map((city) => (
          <MenuItem value={city.nome} key={city.nome}>
            {city.nome}
          </MenuItem>
        ))}
    </Select>
  );
};

export default CityFormSelect;
