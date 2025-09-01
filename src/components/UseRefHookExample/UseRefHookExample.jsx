import { useContext } from "react";
import Header from "../SmallComponents/Header";
import Explanation from "../SmallComponents/Explanation";
import { ContextComponent } from "../ContextComponent/ContextComponent";
import { Toaster } from "react-hot-toast";

const UseRefHookExample = () => {
  const { component1, component2, component3 } = useContext(ContextComponent);

  const explained = `Here, we have used UseRef Hook to store references of 3 Components [component 1, component 2, component 3]. Then used those references to change the corresponding components CSS Properties by clicking the 3 Buttons Below. Also, we can change the references of components by clicking Change Component Reference Button...`;

  return (
    <>
      <Toaster />
      <Header heading="UseRef Hook Example" />
      <hr className="mb-5 opacity-0" />
      <DemoComponent textContext="Component 1" reference={component1} />
      <DemoComponent textContext="Component 2" reference={component2} />
      <DemoComponent textContext="Component 3" reference={component3} />

      <Buttons />

      <ChangeComponentReference />
      {explained && <Explanation explained={explained} />}
    </>
  );
};

export default UseRefHookExample;

// Small Components for same projects
function DemoComponent({ textContext, reference }) {
  return (
    <section
      ref={reference}
      className="mx-auto my-5 w-90 lg:w-160 px-5 py-2 rounded text-md lg:text-xl font-bold flex justify-center items-center bg-slate-300 text-gray-700"
    >
      {textContext}
    </section>
  );
}

function Buttons() {
  const {
    handleComponent1useRef,
    handleComponent2useRef,
    handleComponent3useRef,
  } = useContext(ContextComponent);

  return (
    <section className="mx-auto my-5 w-100 lg:w-160 px-5 py-4 rounded text-md lg:text-xl font-bold bg-amber-200">
      <p className="text-md font-semibold mb-3 text-center text-gray-600">
        Click on any Button to change the style of Components...
      </p>
      <div className="flex justify-between lg:justify-around">
        <Button name={"Button 1"} functn={handleComponent1useRef} />
        <Button name={"Button 2"} functn={handleComponent2useRef} />
        <Button name={"Button 3"} functn={handleComponent3useRef} />
      </div>
    </section>
  );
}

function Button({ name, functn }) {
  const {
    component1,
    component2,
    component3,
    handleComponent1useRef,
    handleComponent2useRef,
    handleComponent3useRef,
  } = useContext(ContextComponent);

  return (
    <button
      onClick={functn}
      className="px-3 lg:px-5 py-2 lg:py-3 bg-violet-400 text-sm lg:text-lg font-semibold text-white rounded hover:scale-105 active:scale-95 transition-transform duration-200 ease-in-out"
    >
      {name}
    </button>
  );
}

function ChangeComponentReference() {
  const { changeComponentReferenceuseRef } = useContext(ContextComponent);
  return (
    <section className="mx-auto my-5 w-100 lg:w-160 px-5 py-4 rounded text-md lg:text-xl font-bold bg-amber-200 flex flex-col justify-center">
      <p className="text-md font-semibold mb-3 text-center text-gray-600">
        Click the Button to change the Components Reference...
      </p>
      <button
        onClick={changeComponentReferenceuseRef}
        className="px-3 lg:px-5 py-2 lg:py-3 bg-violet-400 text-sm lg:text-md font-semibold text-white rounded hover:scale-105 active:scale-95 transition-transform duration-200 ease-in-out"
      >
        Change Component Reference
      </button>
    </section>
  );
}
