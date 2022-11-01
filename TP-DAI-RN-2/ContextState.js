import * as React from "react";
import { useContext } from "react";

export const initialState = {
    loading: true,
    numCelular: 0,
    video: undefined,
};

export const ActionTypes = {
    SetLoading: "SET_LOADING",
    SetNumCelular: "SET_NUM_CELULAR",
    SetVideo: "SET_VIDEO"
};

export const reducer = (state = {}, action) => {

    switch (action.type) {
        case ActionTypes.SetLoading:
            return {
                ...state,
                loading: action.value,
            };
        case ActionTypes.SetNumCelular:
            return {
                ...state,
                numCelular: action.value,
            };
            case ActionTypes.SetVideo:
                return {
                    ...state,
                    video: action.value,
                };
        default:
            return state;
    }
};

export const initialContext = {
    contextState: initialState,
    setContextState: () => { },
};

const Cont = React.createContext(initialContext);

export function ContextProvider({ children, initial = initialState }) {
    const [state, dispatch] = React.useReducer(reducer, initial);

    const contextState = state;
    const setContextState = dispatch;

    return <Cont.Provider value={{ contextState, setContextState }}>{children}</Cont.Provider>;
}

export const useContextState = () => useContext(Cont);