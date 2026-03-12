var obj1 = {
    id: 100,
    name: "abc",
    email: "abc@gmail.com",
};
for (var key in obj1) {
    if (!Object.hasOwn(obj1, key))
        continue;
    var element = obj1[key];
    console.log(key + ": " + element);
}
