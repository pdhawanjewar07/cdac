
//object 
let data = {
    bookId: 1,
    bookName: "Java",
}

console.log(data.bookId);
// destruct of object 
let { id, name } = data;
console.log(id + "  " + name);
let { bookId: id1 } = data;
let { bookName: name2 } = data;
console.log(id1); // 1

// Destruct 
let s = [1, 2, 3]
console.log(s[0]);  //  oth 
//for 
let [q, w, e] = s;
console.log(q);