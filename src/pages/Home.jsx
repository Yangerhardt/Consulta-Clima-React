import { Container } from "@mui/material";
import React from "react";
import "@fontsource/roboto/500.css";
import Title from "../components/Title";
import CityCard from "../components/CityCard";
import LocationSelect from "../components/LocationSelect";

const Home = (props) => {
  return (
    <Container>
      <Title title="Consulta Clima" />
      <LocationSelect type="UF" />
      <LocationSelect type="Cidade" margin={10}/>
      <CityCard />
    </Container>
  );
};

export default Home;
