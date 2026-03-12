type Obj = {
  id: number;
  name: string;
  email: string;
};

const obj1: Obj = {
  id: 100,
  name: "abc",
  email: "abc@gmail.com",
};

for (const key in obj1) {
  if (!Object.hasOwn(obj1, key)) continue;

  const element = obj1[key as keyof Obj];

  console.log(key + ": " + element);
}







