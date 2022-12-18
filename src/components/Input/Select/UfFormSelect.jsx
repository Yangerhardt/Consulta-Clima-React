import { useContext } from "react";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import GetData from "./GetData";
import { CurrentUfContext } from "../../../context/Store";

const UfFormSelect = (props) => {
  const { currentUf, setCurrentUf } = useContext(CurrentUfContext);

  // Não usei o useEffect pois o GetData já está com o hook do useFetch
  const res = GetData(
    "https://servicodados.ibge.gov.br/api/v1/localidades/estados"
  );

  return (
    <Select
      value={currentUf}
      onChange={(e) => setCurrentUf(e.target.value)}
      MenuProps={{
        style: {
          maxHeight: 220,
        },
      }}
    >
      {res &&
        res.map((uf) => (
          <MenuItem value={uf} key={uf}>
            {uf}
          </MenuItem>
        ))}
    </Select>
  );
};

export default UfFormSelect;
