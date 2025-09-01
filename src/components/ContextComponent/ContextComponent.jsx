import { createContext, useState, useRef } from "react";
import { ToastBar, toast } from "react-hot-toast";

export const ContextComponent = createContext(null);

export function ContextProvider({children}){
     const [users, setUsers] = useState([]);
     const [user, setUser] = useState("");
     
     // References for UseRef Example 
     const component1 = useRef(null);
     const component2 = useRef(null);
     const component3 = useRef(null);


     function handleComponent1useRef(){
          component1.current.textContent = "Text Content Changed On button 1 Click";
          component1.current.style.color = 'white';
          component1.current.style.backgroundColor = 'orange';
     } 

     function handleComponent2useRef(){
          component2.current.textContent = "Text Content Changed On button 2 Click";
          component2.current.style.color = 'black';
          component2.current.style.backgroundColor = 'gray';
     }     
     
     function handleComponent3useRef(){
          component3.current.textContent = "Text Content Changed On button 3 Click";
          component3.current.style.color = 'white';
          component3.current.style.backgroundColor = 'blue';
     }

     function changeComponentReferenceuseRef(){
          const temp = component1.current;
          component1.current = component2.current;
          component2.current = component3.current;
          component3.current = temp; 
          toast.success('Component reference changed Successfully....')
     }

     const obj = {
          users, setUsers, user, setUser, component1, component2, component3, handleComponent1useRef, handleComponent2useRef, handleComponent3useRef, changeComponentReferenceuseRef
     }

     return (
          <ContextComponent.Provider value={obj}>
               {children}
          </ContextComponent.Provider>
     )
}

