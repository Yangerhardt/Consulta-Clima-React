import { useState } from "react";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import GetData from "./GetData";

const UfFormSelect = (props) => {
  const [ufLocation, setUfLocation] = useState("");
  let uf = null;

  // Não usei o useEffect pois o GetData já está com o hook do useFetch
  const res = GetData(
    "https://servicodados.ibge.gov.br/api/v1/localidades/estados"
  );
  uf = res;

  return (
    <Select
      value={ufLocation}
      onChange={(e) => setUfLocation(e.target.value)}
      MenuProps={{
        style: {
          maxHeight: 220,
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
  );
};

export default UfFormSelect;
