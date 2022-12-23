import { createContext, useState } from "react";

export const CurrentUfContext = createContext(null);

export default function Store(props) {
  const [currentUf, setCurrentUf] = useState("");
  const [currentCity, setCurrentCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  return (
    <CurrentUfContext.Provider
      value={{
        currentUf,
        setCurrentUf,
        currentCity,
        setCurrentCity,
        weather,
        setWeather,
        loading,
        setLoading,
      }}
    >
      {props.children}
    </CurrentUfContext.Provider>
  );
}
