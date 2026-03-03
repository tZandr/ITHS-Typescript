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
