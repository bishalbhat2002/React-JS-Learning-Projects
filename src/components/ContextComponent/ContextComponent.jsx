import { createContext, useState } from "react";


export const ContextComponent = createContext(null);

export function ContextProvider({children}){
     const [users, setUsers] = useState([]);
     const [user, setUser] = useState("");
     
     return (
          <ContextComponent.Provider value={{users, setUsers, user, setUser}}>
               {children}
          </ContextComponent.Provider>
     )
}

