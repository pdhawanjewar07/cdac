let obj = {
    fname: "AAA",
    show: function () {
        console.log("From Function : " + this.fname)
    }
}
//this  == current instance 
obj.show(); //  AAA

let f = obj.show;
f = f.bind(obj);// bind  
console.log(f)
f();// undefined    AAA
