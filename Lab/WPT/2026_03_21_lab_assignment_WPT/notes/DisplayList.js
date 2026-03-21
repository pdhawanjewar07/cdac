import { useEffect, useState } from "react";

export default function DisplayData() {


    // let [data, setData] = useState('')
    //state 
    //  let data = ['Task1 ', 'Task2 ', 'Task3']
    let [data, setData] = useState(['Task1 ', 'Task2 ', 'Task3'])
    let temp;
    function textHandler(e) {
        temp = e.target.value;// textfield 
    }

    function handler(e) {
        //data.push(temp);// array         // data = temp
        //setData(data);// state variable data 
        console.log(data);
        //  copy array clone [...<obj>]
        let n1 = data;  // assignment operator 
        let n = [...data];//  Object 
        n.push(temp)
        setData(n);
        console.log(data);
    }


    useEffect(() => {
        console.log("render ")
    }, [data])
    //useEffect(getListData(), [data]);

    function getListData() {
        let l = [];
        for (var i = 0; i < data.length; i++) {
            let item = <li>{data[i]}</li>
            l.push(item)
        }
        //data.map()// 
        return l;


    }


    return <>
        <input type="text" name="t1" onBlur={textHandler} />
        <button onClick={handler}>Add Task </button>
        <h2>To Do List </h2>
        <ol style={{ textAlign: "left" }}>
            {getListData()}
        </ol>
    </>

}