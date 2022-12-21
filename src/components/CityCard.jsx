import "./CityCard.css";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useContext } from "react";
import { CurrentUfContext } from "../context/Store";

const now = Date.now();
const today = new Date(now);

const convertTemperature = (kel) => {
  const celsius = (kel - 273.15);
  return celsius;
};

export default function CityCard(props) {
  const { weather, currentCity } = useContext(CurrentUfContext);

  return (
    <Card className="card" sx={{ maxWidth: 400 }}>
      <CardHeader
        title={currentCity || "Selecione a cidade"}
        subheader={today.toLocaleDateString()} 
      />
      <CardContent>
        <Typography variant="body1" color="text.secondary" paddingBottom={1}>
          Temperatura: {convertTemperature(weather.main.temp).toFixed(2)} °C
        </Typography>
        <Typography variant="body2" color="text.secondary" padding={1}>
          Máxima: {convertTemperature(weather.main.temp_max).toFixed(2)} °C
        </Typography>
        <Typography variant="body2" color="text.secondary" padding={1}>
          Mínima: {convertTemperature(weather.main.temp_min).toFixed(2)} °C
        </Typography>
        {console.log(weather)}
      </CardContent>
    </Card>
  );
}
