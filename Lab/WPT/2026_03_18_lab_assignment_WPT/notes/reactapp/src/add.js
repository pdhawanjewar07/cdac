//destructing props object properties

// let obj = {num1: 10  , num2 : 20}
// obj.num1 
// {num1:a , num2:b } = obj 

export default function Addition
    ({ num1: a, num2: b }) {
    return <div>
        <p><b>Addition is  {a + b}</b></p>
    </div>
}