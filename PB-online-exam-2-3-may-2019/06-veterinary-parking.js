/* 6. Ветеринарен Паркинг
Деси трябва да заведе котката си на ветеринар, но паркингът се заплаща. Напишете програма, която пресмята колко общо трябва да се плати за престоя на колата на Деси на паркинга. Паркингът е различен от останалите и има разнообразен ценоразпис. За всеки четен ден и нечетен час, паркингът таксува 2.50 лева. Във всеки нечетен ден и четен час таксата е 1.25 лева, във всички останали случаи се заплаща 1 лев. Таксуването става на всеки изминал час от деня. Всеки един от изходите трябва да бъде закръглен до втория знак след десетичната запетая.

Вход
От конзолата се четaт два реда:
•	Брой дни – цяло число в интервала [1 … 5]
•	Брой часове за всеки един от дните - цяло число в интервала [1 … 24]

Изход:
Да се отпечата на конзолата:
•	За всеки изминал ден, общата сума, която трябва да се плати – "Day: {индексът на деня} – 
{общата сума за деня} leva"
•	Когато програмата приключи - "Total: {общата сума за всички дни} leva"

 */

function veterinaryParking(input) {

    let daysCount = Number(input[0]);
    let hoursCount = Number(input[1]);
    let total = 0;
  
    for(let currentDay = 1; currentDay <= daysCount; currentDay++) {
      let parkingPerDay = 0;
      for(let currentHour = 1; currentHour <= hoursCount; currentHour++) {
  
        let evenDay = currentDay % 2 === 0;
        let evenHour = currentHour % 2 === 0;
  
        let parkingPrice = 0;
  
        if (evenDay && !evenHour) {
          parkingPrice = 2.50;
        }
        else if (!evenDay && evenHour) {
          parkingPrice = 1.25;      
        }
        else {
          parkingPrice = 1;
        }
        parkingPerDay += parkingPrice;
      }
      console.log(`Day: ${currentDay} - ${parkingPerDay.toFixed(2)} leva`);
      total += parkingPerDay;
    }
    console.log(`Total: ${total.toFixed(2)} leva`);
  }
  veterinaryParking(["2","5"])
  veterinaryParking(["5","2"])