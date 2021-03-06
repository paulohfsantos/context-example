import React, { useContext } from "react";

type ContextProps = {
  name: string;
  age: number;
}

const initialState = {
  name: "",
  age: 0,
}

export const GeneralContext = React.createContext<ContextProps>(initialState);

// ---------------------------------

// custom hook
export const useGeneralContext = () => {
  return useContext(GeneralContext);
}

// provider set
const GeneralContextProvider: React.FC = ({ children }) => {
  return (
    <GeneralContext.Provider value={initialState}>
      {children}
    </GeneralContext.Provider>
  )
}

export default GeneralContextProvider;