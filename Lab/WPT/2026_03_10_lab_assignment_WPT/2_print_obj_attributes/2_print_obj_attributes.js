const obj1 = {
    id: 100,
    name: "abc",
    email: "abc@gmail.com",
};
for (const key in obj1) {
    if (!Object.hasOwn(obj1, key))
        continue;
    const element = obj1[key];
    console.log(key + ": " + element);
}
export {};
