import "./CityCard.css";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import { useContext } from "react";
import { CurrentUfContext } from "../context/Store";
import CityCardContext from "./CityCardContext";
import Loading from "./Loading";

const now = Date.now();
const today = new Date(now);

export default function CityCard(props) {
  const { weather, currentCity, loading } = useContext(CurrentUfContext);

  return (
    <Card className="card" sx={{ maxWidth: 400 }}>
      <CardHeader
        title={currentCity || "Selecione a cidade"}
        subheader={today.toLocaleDateString()}
      />
      <CardContent>
        {weather ? (
          <CityCardContext
            temp={weather.main.temp}
            max={weather.main.temp_max}
            min={weather.main.temp_min}
          />
        ) : null}
        {loading ? <Loading /> : null}
      </CardContent>
    </Card>
  );
}
