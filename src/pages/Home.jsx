import "./Home.css"
import React from "react";
import "@fontsource/roboto/500.css";
import { Container } from "@mui/material";
import Title from "../components/Title";
import CityCard from "../components/CityCard";
import UfLocationSelect from "../components/Input/UfLocationSelect";
import CityLocationSelect from "../components/Input/CityLocationSelect";
import Store from "../context/Store";
import FormButton from "../components/Input/Button/FormButton";

const Home = (props) => {
  return (
    <Store>
      <Container style={{ height: "100vh" }}>
        <div className="content-container">
          <Title title="Consulta Clima" />
          <UfLocationSelect type="UF" />
          <CityLocationSelect type="Cidade" />
          <FormButton />
          <CityCard />
        </div>
      </Container>
    </Store>
  );
};

export default Home;
