import { Container, Button } from "@mui/material";
import React from "react";
import "@fontsource/roboto/500.css";
import Title from "../components/Title";
import CityCard from "../components/CityCard";
import UfLocationSelect from "../components/Input/UfLocationSelect";
import CityLocationSelect from "../components/Input/CityLocationSelect";
import Store from "../context/Store";

const Home = (props) => {
  return (
    <Store>
      <Container>
        <Title title="Consulta Clima" />
        <UfLocationSelect type="UF" />
        <CityLocationSelect type="Cidade" />
        <Button
          variant="contained"
          sx={{ minWidth: 400 }}
          style={{ marginBottom: "60px", marginTop: "10px" }}
        >
          Consultar
        </Button>
        <CityCard />
      </Container>
    </Store>
  );
};

export default Home;
