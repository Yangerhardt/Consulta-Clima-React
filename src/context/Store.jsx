import { createContext, useState } from "react";

export const CurrentUfContext = createContext(null);

export default function Store(props) {
  const [currentUf, setCurrentUf] = useState("");
  const [currentCity, setCurrentCity] = useState("");
  return (
    <CurrentUfContext.Provider
      value={{
        currentUf,
        setCurrentUf,
        currentCity,
        setCurrentCity,
      }}
    >
      {props.children}
    </CurrentUfContext.Provider>
  );
}
