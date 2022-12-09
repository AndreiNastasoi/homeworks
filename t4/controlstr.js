var i = 0 ; 
var start = 1 ;
var end = 20 ;


for(i = 0 ; i <= 20 ; i++ )  {     
    
     console.log(i)
     }

//1.display in the console the odd numbers from 1 to 20

var i = 0;
    for(i=0; i <=20; i++) {
        if(i % 2 != 0) {
        console. log(i)
        }
    }

//2.compute the sum of the elements of an array and display it in the console

     
var numbers = [1, 2, 3, 4, 5, 6, 7, 8,];
var sum = 0 ;

    for (var nums of numbers)  {

            sum += nums; 
            console.log(sum)
        }
    


//3.compute the maximum of the elements of an array and display it in the console
    
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 5, 3, 2,];
var max = 0;
    for (var i = 0; i < numbers.length; i++) {
         if (numbers[i] > max) {
            max = numbers[i];
         }
        }
        console.log(max);

//4.compute how many times a certain element appears in an array
    
var numbers = [1, 2, 3, 7, 5, 6, 7, 8, 9, 10, 5, 3, 2,]
var target = 7;
var counter = 0;
    for (var nums of numbers) {
         if (nums === target) {
             counter++;
         }
        }
        console.log(counter);