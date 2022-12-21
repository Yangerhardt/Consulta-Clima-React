import Typography from "@mui/material/Typography";

const CityCardContext = ({ temp, max, min }) => {
  const convertTemperature = (kel) => {
    const celsius = kel - 273.15;
    return celsius;
  };

  return (
    <>
      <Typography variant="body1" color="text.secondary" paddingBottom={1}>
        Temperatura: {convertTemperature(temp).toFixed(2)} °C
      </Typography>
      <Typography variant="body2" color="text.secondary" padding={1}>
        Máxima: {convertTemperature(max).toFixed(2)} °C
      </Typography>
      <Typography variant="body2" color="text.secondary" padding={1}>
        Mínima: {convertTemperature(min).toFixed(2)} °C
      </Typography>
    </>
  );
};

export default CityCardContext;
