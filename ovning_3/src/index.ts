let returnString = (res: string) => {
  console.log(res);
};

let returnNumber = (res: number) => {
  console.log(res);
};

returnNumber(1);
returnString("Yeah!!");

// Solve it with Generics
let returnT = <T>(res: T) => {
  console.log(res);
};

returnT("String");
returnT(2);
returnT({ id: 2, name: "Zandr" });

// Generics with Arrays
let returnArray = <T>(res: T[]) => {
  return res[0];
};

// Skapa en wrapper
const first = returnArray([{ id: 1, name: "object" }, 2, "string"]);
console.log(first);

let wrapper = <T>(data: T) => {
  return { data };
};

console.log(wrapper(1));

// Begränsa en Generic(Bonus)
const limited = <T extends { id: number }>(data: T) => {
  return { data };
};

console.log(limited({ id: 1 }));
