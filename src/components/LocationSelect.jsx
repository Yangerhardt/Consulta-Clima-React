import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "./LocationSelect.css";
import GetData from "./GetData";

export default function LocationSelect(props) {
  const [ufLocation, setUfLocation] = useState("");
  const [disable, setDisable] = useState(true);
  let uf = null
  let city = null

  if(props.type === "UF") {
    const res = GetData("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    uf = res
  }

/*   if (ufLocation === "") {
    const res = GetData(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufLocation}/municipios`)
    city = res
    setDisable(false)
  } */

  useEffect(() => {
      /*   useEffect(() => {
    axios("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(setLoading(false));
  }, []); */
  }, []);


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
          </Select>
        </FormControl>
      </Box>
    </div>
  );
}
