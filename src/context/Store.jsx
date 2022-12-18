import { createContext, useState } from "react";

export const CurrentUfContext = createContext(null);

export default function Store(props) {
  const [currentUf, setCurrentUf] = useState("");
  return (
    <CurrentUfContext.Provider
      value={{
        currentUf,
        setCurrentUf,
      }}
    >
      {props.children}
    </CurrentUfContext.Provider>
  );
}
