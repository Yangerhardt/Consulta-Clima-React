import { useState, useEffect } from "react";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import axios from "axios";

const UfCitySelect = (props) => {
  const [cityData, setCityData] = useState([]);
  const [formCity, setFormCity] = useState("")
  let cities = [];

  const callCities = (stateUf) => {
    axios(
      `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${stateUf}/municipios`
    )
      .then((response) => {
        cities = response.data;
      })
  };

  const addUniversityToCompare = async (chiptoadd) => {
    var currentToCompare = cityData.slice();
    currentToCompare.push(chiptoadd);
    setCityData(currentToCompare);
    console.log(chiptoadd);
  };

  useEffect(() => {
    callCities(props.location);
  }, [props.location]);


  return (
    <Select
      disabled={cityData ? true : false}
      value={formCity}
      onChange={(e) => setFormCity(e.target.value)}
      MenuProps={{
        style: {
          maxHeight: 220,
        },
      }}
    >
    </Select>
  );
};

export default UfCitySelect;
