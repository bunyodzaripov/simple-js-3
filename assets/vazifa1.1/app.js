let ball = prompt(
   "Bahoni kiriting va biz sizga natijangiz qanday ekanligini chiqarib beramiz: "
);

switch (ball) {
   case "1":
      document.write("Sizning bahoyingiz yomon");
      break;
   case "2":
      document.write("Sizning bahoyingiz qonoqarsiz");
      break;
   case "3":
      document.write("Sizning bahoyingiz qoniqarli");
      break;
   case "4":
      document.write("Sizning bahoyingiz yaxshi");
      break;
   case "5":
      document.write("Sizning bahoyingiz ajoyib");
      break;
   default:
      document.write("Siz bahoyingizni noto'g'ri kiritdingiz");
}
