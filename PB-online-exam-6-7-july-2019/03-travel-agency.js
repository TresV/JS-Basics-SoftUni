/* 3. Туристическа агенция
Туристическа агенция има нужда от система за изчисляване на дължимата сума при резервация. В зависимост от различните дестинации и различните пакети, цената е различна.
Цените за ден са следните:

Цена за ден	Банско/Боровец	Варна/Бургас
	с екипировка	без екипировка	със закуска	без закуска
	100лв.	80лв	130лв.	100лв.
VIP отстъпка	10%	5%	12%	7%
Ако клиентът е заявил престой повече от 7 дни, получава единия ден безплатно.

Вход
От конзолата се четат 4 реда:
1.	Име на града - текст с възможности ("Bansko",  "Borovets", "Varna" или "Burgas")
2.	Вид на пакета - текст с възможности ("noEquipment",  "withEquipment", "noBreakfast" или "withBreakfast")
3.	Притежание на VIP отстъпка - текст с възможности  "yes" или "no"
4.	Дни за престой - цяло число в интервала [1 … 10000]

Изход
На конзолата се отпечатва 1 ред:
•	Когато потребителят е въвел всички данни правилно, отпечатваме: 
"The price is {цената, форматирана до втория знак}lv! Have a nice time!"
•	Ако потребителят е въвел по-малко от 1 ден за престой, отпечатваме: 
"Days must be positive number!"
•	Когато при въвеждането на града или вида на пакета се въведат невалидни данни, отпечатваме: "Invalid input!"
 */


function travelAgency(input) {
	let destination = input[0];
	let packet = input[1];
	let VIP = input[2];
	let stayCount = Number(input[3]);

	let pricePerDay = 0;

	switch (destination) {
		case "Bansko":
		case "Borovets":
			if (packet == "withEquipment") {
				pricePerDay = 100;
				if (VIP == "yes") {
					pricePerDay = 100 - 100 * 0.1;
				}
			} else if (packet == "noEquipment") {
				pricePerDay = 80;
				if (VIP == "yes") {
					pricePerDay = 80 - 80 * 0.05;
				}
			}
			break;
		case "Varna":
		case "Burgas":
			if (packet == "withBreakfast") {
				pricePerDay = 130;
				if (VIP == "yes") {
					pricePerDay = 130 - 130 * 0.12;
				}
			} else if (packet == "noBreakfast") {
				pricePerDay = 100;
				if (VIP == "yes") {
					pricePerDay = 100 - 100 * 0.07;
				}
			}
			break;
	}
	if (
		(destination !== "Bansko" &&
			destination !== "Borovets" &&
			destination !== "Varna" &&
			destination !== "Burgas") ||
		(packet !== "withEquipment" &&
			packet !== "noEquipment" &&
			packet !== "withBreakfast" &&
			packet !== "noBreakfast")
	) {
		console.log(`Invalid input!`);
	} else if (stayCount > 7) {
		console.log(
			`The price is ${(pricePerDay * stayCount - pricePerDay).toFixed(2)}lv! Have a nice time!`,
		);
	} else if (stayCount <= 7 && stayCount >= 1) {
		console.log(`The price is ${(pricePerDay * stayCount).toFixed(2)}lv! Have a nice time!`);
	} else if (stayCount < 1) {
		console.log(`Days must be positive number!`);
	}
}

travelAgency(["Borovets",
"noEquipment",
"yes",
"6"])

travelAgency(["Bansko",
"withEquipment",
"no",
"2"])

travelAgency(["Varna",
"withBreakfast",
"yes",
"5"])

travelAgency(["Burgas",
"noBreakfast",
"no",
"4"])

travelAgency(["Varna",
"withBreakfast",
"no",
"0"])

travelAgency(["Gabrovo",
"noBreakfast",
"no",
"3"])
