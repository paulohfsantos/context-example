import { createContext, useReducer } from "react";
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

// SET PROVIDER

const MainReducerSec = (state: InitialStateType, action: ReducerActionType) => ({
  user: userReducer(state.user, action),
})