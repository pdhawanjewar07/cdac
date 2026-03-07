/* INCOMPLETE !!!!!!!!!!!!
(WAP) - validate email id format

can only validate of type: textNum@domain.topLevelDomain(user123@google.com)

*/

function validate() { //""  undefined  null
    // var data = document.getElementById("a2").value;
    var data = d;
    //alert(data);
    var i = data.indexOf('@');
    if (i > 0) {
        var j = data.lastIndexOf('.');
        if (j > i) {
            console.log("Valid Format");
        }
        else {
            console.log("Invalid Format ");
        }
    }
    else {
        console.log("Invalid Format ");
    }
}

let d = "abc@gmail.com";
validate(d);



