var m = [ "John Doe |, M |, BMI:24 |,Normal Weight" ];

var n = ["Marry Anne |, F |, BMI:30 |,Obese" ];

var names  = [m,n]

console.log(names);


var bmi = (weight / Math.pow( (height/100), 2 )).toFixed(1);

var weight = parseInt(prompt("weight (kg)"));

var height = parseInt(prompt("height (cm)"));


if(bmi < 18.5) {
    console.log("underweight");
}

else if( bmi >= 18.5 && bmi <= 25 ){
    console.log("normal");
}

else if( bmi >= 25 && bmi < 30 ){
    console.log("overweight");
}

else{
    console.log("Obese");
}
