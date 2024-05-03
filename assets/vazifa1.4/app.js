let a = prompt("A son kiriting");
let b = prompt("B son kiriting");
let c = prompt("+ - / *");

switch (c) {
   case "+":
      document.write("a + b =", a + b);
      break;
   case "-":
      document.write("a - b =", a - b);
      break;
   case "*":
      document.write("a * b =", a * b);
      break;
   case "/":
      document.write("a / b =", a / b);
      break;
   default:
      document.write("Noto'g'ri amal belgisi!");
}
