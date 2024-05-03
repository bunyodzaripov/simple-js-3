let num = prompt("Istalgan a son kiriting: ");
let son = prompt("Istalgan b son kiriting: ");
let number = prompt("Istalgan c son kiriting: ");

let raqam;

if (num <= son && num <= number) {
   raqam = num;
} else if (son <= num && son <= number) {
   raqam = son;
} else {
   raqam = number;
}

document.write("Eng kichik son: ", raqam);
