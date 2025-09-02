import React, { useContext } from "react";
import Header from "../SmallComponents/Header";
import Explanation from "../SmallComponents/Explanation";
import { ContextComponent } from "../ContextComponent/ContextComponent";

const DerivedState = () => {
  const { users, setUsers, user, setUser } = useContext(ContextComponent);
  const explained = "The project is to demonstrate Derived State. Here, we have stored the information of states such as total users from 'users State', last user from 'users state', and unique users from 'users state' in variables. And Used those variables in the componenets. When we add new user to 'users' state, the variables also change and the component re-renders with the latest value of varibales." 
  return (
    <>
      <Header heading="Derived State Example" />
      {/* Shows the Users Information in Short */}
      
      <UsersInfo />
      {/* Takes Users Input */}
      <UserInput />

      {/* Shows the User Input Values */}
      <Users />

      <Explanation explained={explained} />

    </>
  );
};

export default DerivedState;


// Components are given as: 

function UserInput() {
  const {user, users, setUser, setUsers} = useContext(ContextComponent);
  const handleUserInput = (e)=>{
    setUsers([...users, user]);
    setUser("");
  }
  return (
    <section className="mx-auto p-5 w-90 lg:w-160 bg-purple-300 flex gap-1 items-center rounded">
      <input
        type="text"
        value={user}
        onChange={(e)=>setUser(e.target.value)}
        className="w-8/10 px-3 py-1 rounded text-lg border border-gray-500 text-gray-700"
      />
      <button 
      onClick={handleUserInput}
      className="w-2/10 px-5 py-1.5 rounded bg-blue-400 text-gray-800 hover:scale-110 duration-200 ease-in-out active:scale-90">Add</button>
    </section>
  );
}

function UsersInfo() {
  const {users} = useContext(ContextComponent);

  const total = users.length;
  const lastUser = users[users.length-1] ?? "No User Found";
  const uniqueUsers = [... new Set(users)].length;

  if(users.length == 0)
    return;

  return (
    <div className="mx-auto mb-4 px-5 py-3 w-90 lg:w-160 bg-purple-300 flex flex-col items-start rounded">
      <h2 className="text-lg font-semibold text-gray-700">Total Users: {total}</h2>
      <h2 className="text-lg font-semibold text-gray-700">Last Users: {lastUser}</h2>
      <h2 className="text-lg font-semibold text-gray-700">Unique Users: {uniqueUsers}</h2>
    </div>
  );
}

function Users(){
  const {users} = useContext(ContextComponent);
  if(users.length == 0)
    return;

  return(
    <div className="mx-auto mt-2 px-5 py-3 w-90 lg:w-160 bg-purple-300 flex flex-col items-start rounded">
     <ul className="list-decimal list-inside">
      {
        users.map((element)=>{
          return <li className="text-md font-semibold text-gray-600">{element}</li>
        })   
      }
     </ul>
    </div>
  )
}