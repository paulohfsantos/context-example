import { createContext, useReducer, useContext } from "react";
import { userReducer, userInitialState, UserType } from "../reducers/userReducer";
import { ReducerActionType } from "../types/reducerActionType";

type InitialStateType = {
  user: UserType;
}

type ContextProps = {
  state: InitialStateType;
  dispatch: React.Dispatch<any>;
}

const initialState = {
  user: userInitialState,
}

export const GeneralContextSec = createContext<ContextProps>({
  state: initialState,
  dispatch: () => {},
});

// custom hook
export function useSecContext() {
  return useContext(GeneralContextSec);
}

// SET PROVIDER
const MainReducerSec = (state: InitialStateType, action: ReducerActionType) => ({
  user: userReducer(state.user, action),
});

export const GeneralProviderSec: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(MainReducerSec, initialState);

  return (
    <GeneralContextSec.Provider value={{ state, dispatch }}>
      {children}
    </GeneralContextSec.Provider>
  );
};