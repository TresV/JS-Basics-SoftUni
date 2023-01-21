/* 3. Кино седмица на  "Оскарите"
По време на седмицата на Оскарите, градското кино пуска прожекции на някои от филмите, които са номинирани в категорията за "Най-добър филм". В таблицата са показани кои са филмите и каква е цената за прожекция спрямо залата, в която се прожектира филмът. 

Филм	normal	luxury	ultra luxury
A Star Is Born	7.50 лв.	10.50 лв.	13.50 лв.
Bohemian Rhapsody	7.35 лв.	9.45 лв.	12.75 лв.
Green Book	8.15 лв.	10.25 лв.	13.25 лв.
The Favourite	8.75 лв.	11.55 лв.	13.95 лв.
Напишете програма, която изчислява какъв е приходът от даден филм, като знаете в какъв тип зала се прожектира и колко човека са си купили билет за прожекцията.

Вход
Входът се чете от конзолата и се състои от три реда:
•	Първи ред – име на филм – текст ("A Star Is Born", "Bohemian Rhapsody","Green Book" или "The Favourite")
•	Втори ред– вид на залата – текст ("normal", "luxury" или "ultra luxury")
•	Трети ред – брой на закупените билети – цяло число в интервала [1…100]

Изход
На конзолата трябва да се отпечата един ред:
"{име на филма} -> {приходи от прожекцията на филма} lv."

Приходите да бъдат закръглени до втория знак след десетичната запетая.

 */

function oscarsWeek(input) {

    let movieName = input[0];
    let hallType = input[1];
    let ticketsBought = Number(input[2]);
    let ticketPrice = 0;

    switch (movieName) {
        case "A Star Is Born":
            if (hallType === "normal") {
                ticketPrice = 7.50;
            }
            else if (hallType === "luxury") {
                ticketPrice = 10.50;
            }
            else if (hallType === "ultra luxury") {
                ticketPrice = 13.50;
            }
            break;
        case "Bohemian Rhapsody":
            if (hallType === "normal") {
                ticketPrice = 7.35;
            }
            else if (hallType === "luxury") {
                ticketPrice = 9.45;
            }
            else if (hallType === "ultra luxury") {
                ticketPrice = 12.75;
            }
            break;
        case "Green Book":
            if (hallType === "normal") {
                ticketPrice = 8.15;
            }
            else if (hallType === "luxury") {
                ticketPrice = 10.25;
            }
            else if (hallType === "ultra luxury") {
                ticketPrice = 13.25;
            }
            break;
        case "The Favourite":
            if (hallType === "normal") {
                ticketPrice = 8.75;
            }
            else if (hallType === "luxury") {
                ticketPrice = 11.55;
            }
            else if (hallType === "ultra luxury") {
                ticketPrice = 13.95;
            }
            break;
    }

    let profit = ticketPrice * ticketsBought;

    console.log(`${movieName} -> ${profit.toFixed(2)} lv.`);

}

oscarsWeek(["A Star Is Born", "luxury", "42"]);
oscarsWeek(["Green Book", "normal", "63"]);
oscarsWeek(["The Favourite", "ultra luxury", "34"]);



