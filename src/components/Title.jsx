import { Typography } from "@mui/material";
import "./Title.css";

const Title = (props) => {
  return (
    <Typography className="title" variant="h3" gutterBottom>
      {props.title}
    </Typography>
  );
};

export default Title;
