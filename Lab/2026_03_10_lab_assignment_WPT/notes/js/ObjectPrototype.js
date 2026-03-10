Object.prototype.print = function (s) {
	//console.log("prototype " + s.id);
	//console.log(typeof (s));
	//object key : value 
	for (const key in s) {
		if (!Object.hasOwn(s, key)) continue;
		const element = s[key];
		console.log(key + "   " + element);
	}
}

Object.prototype.display = function () {
	console.log(" display protorype ");
}
let e = []
//object   name value Object prototype   array   for 
let a = {
	id: 100,
	name: "abc",
	email: "abc@gmail.com",
	print1() {
		console.log(" a print ");
	}
}
a.print(a);// prototype 







//a.print1();
//a.display();
let data = {
	d: 458,
	print1() {
		console.log(" data  print ");
	}
}
data.print(data);


//
let b = {
	i1: 100,
}
//Object
//console.log(b);
//b.print(b.i1, 2, 3);