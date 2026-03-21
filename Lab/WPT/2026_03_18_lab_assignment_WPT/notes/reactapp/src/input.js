export default function Data() {

    function call() {
        console.log("Button Click ")
        return ("After Button Click ")
    }
    return <div>
        <input type="text" name="num1"></input>
        <button onClick={call}>Click</button>


    </div >




}