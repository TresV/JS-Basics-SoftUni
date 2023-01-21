/* 4. Клуб
Времето се затопля и клубовете пускат обещаващи промоции. Напише програма, която да изчислява приходите на един клуб за вечерта и дали е достигната желаната печалба, като знаете следните условия: цената на един коктейл е дължината неговото име. Ако цената на една поръчка е нечетно число, има 25% отстъпка от цената на поръчката. 

Вход
От конзолата се четат:
•	На първия ред – желаната печалба на клуба - реално число в интервала [1.00... 15000.00]
Поредица от два реда до получаване на командата "Party!" или до достигане на желаната печалба:
o	Име на коктейла – текст
o	Брой на коктейлите за поръчката – цяло число в интервала [1… 50]

Изход
На конзолата първо да се отпечата един ред:
•	При получена команда "Party!":
 "We need {недостигаща сума} leva more."
•	При достигане на желаната печалба:
	"Target acquired."
След това да се отпечата:
	"Club income - {приходи от клуба} leva."

Парите да бъдат форматирани до втората цифра след десетичния знак.
 */

function club(input) {
  let target = Number(input[0]);
  let cocktailPrice = 0;
  let cocktailTotal = 0;
  let cocktailSum = 0;

  for (let index = 1; index < input.length; index += 2) {
    let cocktailName = input[index];
    cocktailPrice = cocktailName.length;
    let cocktailCount = Number(input[index + 1]);

    if (cocktailName === "Party!") {
      console.log(`We need ${(target - cocktailTotal).toFixed(2)} leva more.`);
      console.log(`Club income - ${cocktailTotal.toFixed(2)} leva.`);
      break;
    }

    cocktailSum = cocktailCount * cocktailPrice;

    if (cocktailSum % 2 !== 0) {
      cocktailSum *= 0.75;
    }

    cocktailTotal += cocktailSum;

    if (cocktailTotal >= target) {
      break;
    }
  }

  if (cocktailTotal >= target) {
    console.log("Target acquired.");
    console.log(`Club income - ${cocktailTotal.toFixed(2)} leva.`);
  }
}
club(["100", "Sidecar", "7", "Mojito", "5", "White Russian", "10"]);
