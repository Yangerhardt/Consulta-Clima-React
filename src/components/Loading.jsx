import "./Loading.css";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const Loading = (props) => {
  return (
    <Box sx={{ display: "flex"}}>
      <CircularProgress color="info" sx={{ m: 'auto'}}/>
    </Box>
  );
};

export default Loading;
