import { useEffect, useState } from "react";

export default function DisplayData() {



    //state 
      let data = ['Task1 ', 'Task2 ', 'Task3']
    //let [data, setData] = useState(['Task1 ', 'Task2 ', 'Task3'])

    function btnHandler(e) {
        data.push(e.target.value);// textfield 
        // 4 
    }

    useEffect(getListData(), [data]);

    function getListData() {

        let l = [];
        for (var i = 0; i < data.length; i++) {

            let item = <li>{data[i]}</li>

            l.push(item)
        }

        return l;


    }


    return <>

        {data}

        TextField Button
        <h2>To Do List </h2>
        <ol>
            {getListData()}
        </ol>
    </>

}