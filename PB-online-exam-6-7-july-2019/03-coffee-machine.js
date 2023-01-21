/* 3. Кафемашина
Напишете софтуер, който да пресмята сметката на клиент, закупил определен брой от дадена напитка от кафемашина.

	       Без захар	Нормално	Допълнително захар
Еспресо	    0.90 лв./бр.  1 лв. /бр.	    1.20 лв. /бр.
Капучино	1.00 лв. /бр.	1.20 лв. /бр.	1.60 лв. /бр.
Чай	        0.50 лв. /бр.	0.60 лв. /бр.	0.70 лв. /бр.

Трябва да имате предвид следните отстъпки:
•	При избрана напитка без захар има 35% отстъпка.
•	При избрана напитка "Espresso" и закупени поне 5 броя, има 25% отстъпка.
•	При сума надвишава 15 лева, 20% отстъпка от крайната цена,  
Отстъпките се прилагат в реда на тяхното описване.

Вход
Входът се чете от конзолата и се състои от три реда:
•	Първи ред - напитка - текст с възможности"Espresso", "Cappuccino" или "Tea"
•	Втори ред - захар - текст  с възможности "Without", "Normal" или "Extra"
•	Трети ред - брой напитки - цяло число в интервала [1… 50]


Изход
На конзолата трябва да се отпечата един ред:
"You bought {брой напитки} cups of {напитка} for {крайна цена} lv."
Цената да бъде форматирана до втората цифра след десетичния знак.

 */

function coffeeMachine(input) {
	let beverage = input[0];
	let sugar = input[1];
	let beverageCount = Number(input[2]);

	let beverageCost = 0;

	switch (beverage) {
		case "Espresso":
			if (sugar == "Without") {
				beverageCost = 0.9;
				beverageCost = beverageCost * 0.65;
			} else if (sugar == "Normal") {
				beverageCost = 1;
			} else if (sugar == "Extra") {
				beverageCost = 1.2;
			}
			break;
		case "Cappuccino":
			if (sugar == "Without") {
				beverageCost = 1;
				beverageCost = beverageCost * 0.65;
			} else if (sugar == "Normal") {
				beverageCost = 1.2;
			} else if (sugar == "Extra") {
				beverageCost = 1.6;
			}
			break;
		case "Tea":
			if (sugar == "Without") {
				beverageCost = 0.5;
				beverageCost = beverageCost * 0.65;
			} else if (sugar == "Normal") {
				beverageCost = 0.6;
			} else if (sugar == "Extra") {
				beverageCost = 0.7;
			}
			break;
	}

	let totalCost = beverageCost * beverageCount;
	let discount = 0;

	if (beverage == "Espresso" && beverageCount >= 5) {
		discount = totalCost * 0.25;
	}

	let finalPrice = totalCost - discount;

	if (finalPrice > 15) {
		console.log(
			`You bought ${beverageCount} cups of ${beverage} for ${(
				finalPrice -
				finalPrice * 0.2
			).toFixed(2)} lv.`,
		);
	} else {
		console.log(`You bought ${beverageCount} cups of ${beverage} for ${finalPrice.toFixed(2)} lv.`);
	}
}

coffeeMachine(["Espresso", "Without", "10"]);

coffeeMachine(["Cappuccino", "Normal", "13"]);

coffeeMachine(["Tea", "Extra", "3"]);
