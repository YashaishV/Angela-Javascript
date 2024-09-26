//life in weeks solution

// lets take age Input
var age = prompt("tell me your fucking age?");

// subtract it by  90
var remainingYears = (90 - age);

// remainder is the remaining years to live 
var months = remainingYears * 12;
var weeks =  remainingYears * 52;
var days = remainingYears * 365;

//DOUBT: why used console.log instead of alert or prompt 
console.log("your remaining life is " + remainingYears + " years, " + months + " months, " +  weeks + " weeks, "  + days + " days.");

// try running the below two and see the difference
// alert("your remaining life is " + remainingYears + " years, " + months + " months, " +  weeks + " weeks, "  + days + " days.");
// prompt("your remaining life is " + remainingYears + " years, " + months + " months, " +  weeks + " weeks, "  + days + " days.");
