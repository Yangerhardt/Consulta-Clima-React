import { createContext, useState } from "react";

export const CurrentUfContext = createContext(null);

export default function Store(props) {
  const [currentUf, setCurrentUf] = useState("");
  const [currentCity, setCurrentCity] = useState("");
  const [weather, setWeather] = useState(null);
  return (
    <CurrentUfContext.Provider
      value={{
        currentUf,
        setCurrentUf,
        currentCity,
        setCurrentCity,
        weather,
        setWeather,
      }}
    >
      {props.children}
    </CurrentUfContext.Provider>
  );
}
