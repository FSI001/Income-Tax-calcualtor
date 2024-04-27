let income = parseInt(prompt("Enter income"));
let tax;

if (0 <= income && income <= 100000) {
    tax = income * (10 / 100);
} else if (100001 <= income && income <= 300000) {
    tax = income * (20 / 100);
} else if (300001 <= income && income <= 500000) {
    tax = income * (30 / 100);
} else if (500001 <= income && income <= 600000) {
    tax = income * (40 / 100);
} else if (income >= 600001) {
    tax = income * (70 / 100);
}

let fIncome = income - tax;
document.getElementById("para1").innerHTML = "Your final income after tax is"+" "+fIncome;