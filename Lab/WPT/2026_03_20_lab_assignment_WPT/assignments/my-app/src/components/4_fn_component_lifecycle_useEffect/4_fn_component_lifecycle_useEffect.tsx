import { useEffect, useState } from "react";

function LifecycleUseEffectFnComponent() {
  const [count, setCount] = useState(0);

  // Mount
  useEffect(() => {
    console.log("Assignment 4: Component Mounted");

    return () => {
      console.log("Assignment 4: Component Unmounted");
    };
  }, []);

  // Update
  useEffect(() => {
    console.log("Assignment 4: Count Updated:", count);
  }, [count]);

  return (
    <>
      <h2>Assignment 4. Functional Component Lifecycle(useEffect)</h2>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  );
}

export default function Parent(){
  const [show, setShow] = useState(true);

  return (
    <>
    <button onClick={()=>setShow(false)}>Unmount Component</button>
    <br />
    {show && <LifecycleUseEffectFnComponent/>}
    </>
  )
  
}

