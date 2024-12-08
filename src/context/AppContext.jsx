import { createContext, useState } from "react";
import { doctors } from "../assets/assets";

export const AppContext = createContext();
const AppContextProvider = (props) => {
  const currencySymbol = "$";

  const value = {
    doctors,
    currencySymbol,
  };
  // const [mode,setMode]=useState('light');
  // const toggleMode=()=>{
  //   if(mode=='light'){
  //     setMode('dark');
  //     document.body.style.backgroundColor = "rgb(17,24,39)";

  //   }
  //   else{
  //     setMode('light')
  //     document.body.style.backgroundColor='white'

  //   }
  // }
  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};
export default AppContextProvider;
