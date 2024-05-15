
import { createContext, useContext, useState } from "react";

const passContext = createContext();

export const menuContext = ()=>{
    return useContext(passContext)
}


export const Context = ({children}) => {

    let [isClicked, setIsClicked] = useState(false);

    let handleClickChange = () => {
        let clicked = isClicked
        setIsClicked (!clicked);
    }


  return (
    <passContext.Provider value={{isClicked,setIsClicked,handleClickChange}}>
        {children}
    </passContext.Provider>
  )
}

export default Context
