import React, {useState, useEffect, createContext, PropsWithChildren} from "react";

interface iData {
    globalState? : boolean;
    setGlobalState? : React.Dispatch<React.SetStateAction<boolean>>
}

 export const contextStates = createContext<any>({})

export const GlobalState: React.FC<PropsWithChildren>= ({children}) => {
    const [globalState, setGlobalState] = useState<boolean>(false)

   return(
    <
   )
}

