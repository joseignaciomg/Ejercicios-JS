// Write a program where a user enters the number of tasks they have completed. The program returns one of the following labels to the console: **Failed****Insufficient****Good****Excellent****Error** 

// based on the conditions:Failed if they scored 6 or less,Insufficient if they scored > 6 but less than 9 (9 included), Good if they scored > 9 but less than 14 (14 included), Excellent if they scored 15, Error if participants enter a negative number or a number outside the range supported (outside 0 - 15) 

function resultado(a){
    if (a<0 || a>15) {
        return "error";
        } else if (a<6) {
        return "failed";
        } else if (a>6 && a<9) {
            return "Insufficient";
        } else if (a>9 && a<14) {
            return "Good";
        } else if (a=15) {
            return "Excellent";            
        }
            
}

console.log(resultado(8))