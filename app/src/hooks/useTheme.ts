import { Context as ThemeContext } from "../contexts/ThemeContext";
import { useContext } from "react";
 
 
 export default ()  =>{
    const {toggleTheme, state : themeState} = useContext(ThemeContext);

 
  return [toggleTheme , themeState] 
 }
 