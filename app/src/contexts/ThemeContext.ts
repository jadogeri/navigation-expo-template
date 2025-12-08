import createDataContext from "./createDataContext";
import { DefaultTheme } from "@react-navigation/native";
import { themeReducer } from "../reducers/themeReducer"
import { toggleTheme } from "../actions/themeActions";


const initialState = { theme: DefaultTheme, isDarkTheme : false }

export const { Provider, Context } = createDataContext(
    themeReducer ,
    { toggleTheme },
    initialState
);