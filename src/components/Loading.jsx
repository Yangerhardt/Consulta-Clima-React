import "./Loading.css";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    teste: "#fff",
  },
});

const Loading = (props) => {
  return (
    <Box sx={{ display: "flex" }}>
      <ThemeProvider theme={theme}>
        <CircularProgress color="teste" sx={{ m: "auto" }} />
      </ThemeProvider>
    </Box>
  );
};

export default Loading;
