//Creati cate 2 exemple pentru mostenire si

const firstEx = () =>{
  function Teams() {
    this.type = "";
    this.country = "";
    this.seed = null;
    this.player = null;
  }

  function WorldCup(settings) {
    Teams.call(this);
    const { type, country, seed, player} = settings;
    this.type = type;
    this.country = country;
    this.seed = seed;
    this.player = player;
  }

  function secondWorldCup(settings) {
    Teams.call(this);
    const { type, country, player} = settings;
    this.type = type;
    this.country = country;
    this.player = player;
  }

  WorldCup.prototype = Object.create(Teams.prototype);
  secondWorldCup.prototype = Object.create(Teams.prototype);

  function group (...args){
    this.groupTeams = args;
  }

  var firstTeam = new WorldCup({
    type: "International",
    country:"Spain",
    seed: "1",
    player:"Thiago Alacantara, Sergio Busquets, Marcos Llorente, Pedri, Rodri, Koke, Gavi, Pablo Fornals, Carlos Soler ",
  });

  var secondTeam = new WorldCup ({
    type:"International",
    country: "Germany",
    seed: "1",
    player: "Joshua Kimmich, Jamal Musiala, Mario Gotze,  Leon Goretzka, Niclas Fullkurg,  Julian Brandt ",
  });

  var thirdTeam = new WorldCup({
    type:"International",
    country: "France",
    seed:"1",
    player:"Eduardo Camavinga, Matteo Guendouzi, Aurelien Tchouameni, Antoine Griezmann, Karim Benzema",
  });

  var fourthTeam = new WorldCup({
    type:"International",
    country:"Portugal",
    seed:"1",
    player:"Bernardo Silva, Rafael Leão, Bruno Fernandes, João Mário, Cristiano Ronaldo",
  });

   var fifthTeam = new WorldCup({
    type:"international",
    country:"Brasil",
    seed:"1",
    player:"Vinicious Junior, Rodrygo, Dani Alves, Neymar, Raphinha, Eder Militao",
   });

   var sixthTeam = new WorldCup({
    type:"International",
    country:"Argentina",
    seed:"1",
    player:"Lionel Messi, Angel DiMaria, Paolo Dybala, Lissandro Martinez",
   });

   var seventhTeam = new secondWorldCup ({
    type:"Continental",
    country:"Romania",
    player:"Vlad Chiricheș, Dennis Man, Olimpiu Moruţan, Alexandru Maxim",
   });

   var eighthTeam = new secondWorldCup ({
    type:"Continental",
    country:"Austria",
    player:"David Alaba, Marko Arnautović, Marcel Sabitzer, Julian Baumgartlinger",
   });

   var ninethTeam = new secondWorldCup ({
    type:"Continental",
    country:"Switzerland",
    player:"Granit Xhaka, Xherdan Shaqiri, Yann Sommer, Haris Seferovic, Ricardo Rodriguez",
   });

   var tenthTeam = new secondWorldCup({
    type:"Continental",
    country:"Serbia",
    player: "Dušan Vlahović, Aleksandar Mitrović, Sergej Milinković-Savić, Dušan Tadić, Filip Kostić",
    });

    const theWorldCup = {firstTeam, secondTeam, thirdTeam, fourthTeam, fifthTeam, sixthTeam} ;
    const theSecondWorldCup = {seventhTeam, eighthTeam, ninethTeam, tenthTeam};
    const theCup = new group(theWorldCup, theSecondWorldCup);
    console.log(theCup);
};

firstEx();

const secondEx = () => {
    function Ucl(settings) {
        this.club = "";
        this.standing = "";
        this.country = "";
    }
 function teams(settings){
    Ucl.call(this);
    const { club, standing, country, goalscorers} = settings;
    this.club = club;
    this.standing = standing;
    this.country = country;
    this.goalscorers = goalscorers;
 }
 teams.prototype = Object.create(Ucl.prototype);

 var firstClub = new teams({
    club: "Real Madrid",
    standing: "1",
    country: "Spain",
    goalscorers:"Benzema, Vinicius, Rodrygo",
 });

 var secondClub = new teams({
    club:"Barcelona",
    standing:"2",
    country:"Spain",
    goalscorers:"Dembele, Lewandowski, Pedri",
 });

 var thirdClub = new teams ({
    club:"Bayern Munich",
    standing:"3",
    country:"Germany",
    goalscorers:"Muller, Mane, Gnabry",
 });

 var fourthClub = new teams ({
    club:"Mancester City",
    standing:"4",
    country:"England",
    goalscorers:"Haaland, Foden, Kevin De Bruyne",
 });

 function players(settings){
    Ucl.call(this);
    const { goals, role, nationality} = settings;
    this.goals = goals;
    this.role = role;
    this.nationality = nationality; 
 }
 players.prototype = Object.assign(players.prototype, Ucl.prototype);

 var firstPlayer = new players({
    goals: "5",
    role: "forward",
    nationality: "France",
 });

 var secondPlayer = new players({
    goals: "4",
    role: "left-winger",
    nationality: "Spain",
 });

 var thirdPlayer = new players({
    goals: "3",
    role:"right-winger",
    nationality:"German",
 });

 var fourthPlayer = new players({
    goals:"2",
    role:"midfielder",
    nationality:"England",
 });
 function group(...args){
    this.groupFootball = args;
 }
const newTeams ={firstClub, secondClub, thirdClub, fourthClub};
const newPlayers={firstPlayer, secondPlayer, thirdPlayer, fourthPlayer};
const newUcl = new group(newTeams, newPlayers);
console.log(newUcl);
};

secondEx();

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



