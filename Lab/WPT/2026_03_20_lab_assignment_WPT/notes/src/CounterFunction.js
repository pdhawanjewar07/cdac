import { useState, useEffect } from "react";

export default function CounterFunction() {
    let i = 100;// normal variable 
    //state variablename  <method name >
    let [cnt, setCnt] = useState(i);
    function handler() {
        //i = i + 1;
        setCnt(cnt++)//  cnt value change setter methos 
        //console.log(i);
    }

    useEffect(() => {
        alert("Every Render")
        console.log("in counter useEffect  every render ")

    });

    useEffect(() => {

        alert("Only Once ")
        console.log("in  useEffect  only once  ")

    }, []);

    useEffect(() => {

        alert("after state change ")

        console.log("in  useEffect  when cnt change   ")

    }, [cnt]);



    return <>
        <h2>Counter Function Comp</h2>
        <h3> Count   i  : {i}</h3>
        <h3> Count   cnt  : {cnt}</h3>
        <button name="btn" value="Counter"
            onClick={handler} >Counter</button>
        <br></br>
    </>

}