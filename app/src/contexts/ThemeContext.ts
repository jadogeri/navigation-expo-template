import { DarkTheme, DefaultTheme } from "@react-navigation/native";
import type { Theme as NavigationTheme } from '@react-navigation/native';
import { createDataContext } from "./CreateDataContext";
import { 
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme
} from '@react-navigation/native';
import { 
  Provider as PaperProvider, 
  DefaultTheme as PaperDefaultTheme,
  MD3DarkTheme as PaperDarkTheme 
} from 'react-native-paper'

const initialState = { theme: DefaultTheme, isDarkTheme : false }

  const CustomDefaultTheme = {
    ...NavigationDefaultTheme,
    ...PaperDefaultTheme,
      background: '#ffffff',
      text: '#333333'
    
  }
  
  const CustomDarkTheme = {
    ...NavigationDarkTheme,
    ...PaperDarkTheme,
    ...NavigationDarkTheme,
      ...PaperDarkTheme,
      background: '#333333',
      text: '#ffffff'
    
  }

    const theme = initialState.isDarkTheme ? CustomDarkTheme : CustomDefaultTheme;


import { Dispatch } from 'react';


// Define the state type
interface AppState {
  theme: NavigationTheme
  notificationsEnabled: boolean;
  isDark: boolean;
}

// Define action types
type AppAction = 
  | { type: 'TOGGLE_THEME' }
  | { type: 'TOGGLE_NOTIFICATIONS' };

// Define action creators
const toggleTheme = (dispatch: Dispatch<AppAction>) => () => {
  dispatch({ type: 'TOGGLE_THEME' });
};

const toggleNotifications = (dispatch: Dispatch<AppAction>) => () => {
  dispatch({ type: 'TOGGLE_NOTIFICATIONS' });
};

// Combine action creators
const actions = { toggleTheme, toggleNotifications };

// Define the reducer
const appReducer = (state: AppState, action: AppAction): AppState => {
  switch (action.type) {
    case 'TOGGLE_THEME':
      if(!state.isDark){
        return { ...state, theme: DarkTheme, isDark: true};      
      }else{
        return { ...state, theme: DefaultTheme, isDark: false};      
      }
      
    case 'TOGGLE_NOTIFICATIONS':
      return { ...state, notificationsEnabled: !state.notificationsEnabled };
    default:
      return state;
  }
};

// Default state
const defaultState: AppState = {
  theme: DefaultTheme,
  isDark: false,
  notificationsEnabled: true,
};

// Create the context, provider, and hook
export const { Provider: AppProvider, useContextHook: useAppContext } = 
  createDataContext(appReducer, actions, defaultState);




