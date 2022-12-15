import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "./LocationSelect.css";
import GetData from "./GetData";
import axios from "axios";

export default function LocationSelect(props) {
  const [ufLocation, setUfLocation] = useState("");
  const [cityData, setCityData] = useState();
  const [disable, setDisable] = useState(false);
  let uf = null;
  let city = null;

  if (props.type === "UF") {
    const res = GetData(
      "https://servicodados.ibge.gov.br/api/v1/localidades/estados"
    );
    uf = res;
  }

  useEffect(() => {
    axios(
      `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufLocation}/municipios`
    ).then((response) => {
      setCityData(response.data);
    }).finally(console.log(cityData))
  }, [ufLocation]);

  return (
    <div>
      <Box
        sx={{ minWidth: 120, maxWidth: 400 }}
        padding={2}
        margin="auto"
        marginBottom={props.margin}
      >
        <FormControl fullWidth className="input-control">
          <InputLabel>{props.type}</InputLabel>
          <Select
            value={ufLocation}
            onChange={(e) => setUfLocation(e.target.value)}
            disabled={props.type === "UF" ? null : disable}
            required
            MenuProps={{
              style: {
                maxHeight: 200,
              },
            }}
          >
            {uf &&
              uf.map((uf) => (
                <MenuItem value={uf} key={uf}>
                  {uf}
                </MenuItem>
              ))}
            {cityData &&
              cityData.map((city) => (
                <MenuItem value={city.nome} key={city.nome}>
                  {city.nome}
                </MenuItem>
              ))}
          </Select>
        </FormControl>
      </Box>
    </div>
  );
}
