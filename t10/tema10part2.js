//cate o functie care primeste cate un parametru: integer, string, object, array, callback

const difference = (x, y) => {
    return x - y;
  };
  console.log(difference(2, 2));
  console.log(difference(5, 6)); //integer
  const place = (x) => {
    return x;
  };
  console.log(place("Paris")); //string
  function message(object) {
    return "Greetings Linda!";
  }
  console.log(message()); //object
  const numbers = (array) => {
    return array;
  };
  console.log(numbers([1, 2, 3])); //array
  const numbersCallB = [1, 2, 3];
  numbersCallB.forEach((number) => console.log(number)); //callback
  //o functie care accepta un numar nedefinit de argumente care returneaza suma lor
  function sumN() {
    var numbersSum = 0;
    for (var i = 0; i < arguments.length; i++) {
      numbersSum += arguments[i];
    }
    return numbersSum;
  }
  console.log(sumN(1, 3));
  console.log(sumN(0, 2));
  //o functie care accepta un boolean si retuneaza un promise, resolve  cu o valoare daca booleanul este true si rejected daca este false cu alta valoare, prindeti ce returneaza functia si afisati cu console.log valoarea
  function promise() {
    const promiseP = new Promise((resolve, reject) => {
      var a = "";
      if (a <= 5) {
        resolve(true);
      } else {
        reject(false);
      }
    });
    return promiseP;
  }
  console.log(promise(2));
  console.log(promise(5));