import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import "./UfLocationSelect.css";
import UfFormSelect from "./Select/UfFormSelect";

export default function UfLocationSelect(props) {
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
