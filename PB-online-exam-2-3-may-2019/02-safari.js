/* 2. Сафари
Симона и Светлин ще ходят на почивка в Африка и искат да отидат на сафари. Понеже за делничните дни вече имат планове, решават, че ще отидат събота или неделя. Напишете програма, която изчислява колко ще им струва ходенето на сафари и дали бюджетът им ще им стигне да отидат, като имате предвид следното:
•	Цената на един литър гориво е 2.10 лв.
•	Цената за екскурзовод е 100лв.
•	В зависимост от деня има отстъпки от общата цена - за събота 10%, а за неделя 20%

Вход
От конзолата се четат 3 реда:
•	Бюджет – реално число в интервала [0.00… 10000.00]
•	Колко литра гориво ще са им нужни – реално число в интервала [1.00… 50.00]
•	Ден от седмицата – текст с възможности "Saturday" и "Sunday" 

Изход
Да се отпечата на конзолата един ред:  
•	Ако бюджетът е достатъчен:
"Safari time! Money left: {колко пари са им останали} lv. "
•	Ако бюджетът не е достатъчен:
"Not enough money! Money needed: {колко пари не им достигат} lv."

Сумите трябва да са форматирани до втория знак след десетичната запетая.
 */

function safari(input) {
    let tourGuide = 100;
    let fuel = 2.1;
  
    let budget = Number(input[0]);
    let litresFuel = Number(input[1]);
    let dayOfWeek = input[2];
  
    let fuelPrice = litresFuel * fuel;
    let totalExpenses = fuelPrice + tourGuide;
  
    if (dayOfWeek === "Saturday") {
      totalExpenses = (totalExpenses * 0.9).toFixed(2);
    }
    if (dayOfWeek === "Sunday") {
      totalExpenses = (totalExpenses * 0.8).toFixed(2);
    }
  
    if (budget >= totalExpenses) {
      console.log(
        `Safari time! Money left: ${(budget - totalExpenses).toFixed(2)} lv.`
      );
    } else {
      console.log(
        `Not enough money! Money needed: ${(totalExpenses - budget).toFixed(
          2
        )} lv. `
      );
    }
  }
  
  safari(["1000", "10", "Sunday"]);
  safari(["120", "30", "Saturday"]);