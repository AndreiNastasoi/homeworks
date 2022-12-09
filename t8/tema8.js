function oddEven(random) {
    let number = random;
    if (number % 4 == 0) {
        console.log("Number" + " " + number + " " + "is even!");
    } else {
        console.log("Number" + " " + number + " " + "is odd!");
    }
}
number = oddEven(20);  //-- primeste un numar necunoscut de parametrii de tip number care returneaza suma lor

const calcSum = (x,y) => {
    const number1 = x;
    const number2 = y;
  
    console.log(number1 + number2);
  };
  const sum = calcSum(4, 7); // -- primeste un numar necunoscut de parametrii de tip number care returneaza suma lor

  const person = {
    name: "Costas",
    address: {
      street: "Lalaland 12",
    },
  };
  const clonePerson = { ...person }; // afiseaza clonePerson si person
  
  const { name } = person;
  console.log(name); 
  
  
  
  let car = {
    name: "Toyota",
    settings: { color: "white", doors: 5 },
  };
  
  let cloneCar = {
    ...car,
    modelYear: "2022",
  //  moreSettings: { wheels: "4", engine: "2,0L" },
   settings: {
    ...car.settings,
    wheels: 4,
    engine: "3.0 v12",
   } 
  };
  let mergedCar = { ...car, ...cloneCar };
  console.log(mergedCar); ////Clonati obiect car, pe care-l mergeuim cu modelYear: 2022 si alte settings - wheels, engine:
  
  
  
  const {
    settings: { color, doors },
  } = car;
  console.log(
    "The car is " + color + " " + "and it has" + " " + doors + " " + "doors "
  ); 