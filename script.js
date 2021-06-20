//This program sums all the number between 0 to the given number and returns the output

//receives users input
var num = prompt("Enter a number: ");


//this variable would store the sum of the numbers between 0 and the given number
var sum = 0;

//the input is converted to an Integer here
num = Number(num);
//console.log(num);
//console.log(typeof(num));


//this loop adds the number to the sum variable, while the number is still greater than 0, its deducts 1 from the given number and starts the program again
for (i = 0; num > i; num--) {
//console.log(num);
//this programes adds the number to the sum
sum = sum + num
//console.log(sum);
//console.log(num);
//i += num;
//console.log(i);
}

console.log(sum);