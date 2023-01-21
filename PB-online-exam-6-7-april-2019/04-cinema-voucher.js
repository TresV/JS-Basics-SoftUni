/* 4. Кино ваучер
Любо е голям почитател на киното и редовно ходи на прожекции и участва в томболи, от които често печели ваучери за кино. Вашата задача е да напишете програма, която да изчислява колко покупки от киното може да си купи Любо със спечеленият ваучер. Ако името на покупката съдържа повече от 8 символа, то тя е билет за филм, а нейната цена представлява сумата на ASCII символите от първите ѝ два символа. Ако името на покупката съдържа 8 или по-малко символа, нейната цена е равна на стойността на първия ASCII символ в името. Любо въвежда името на покупките, които желае, докато не въведе "End" или не въведе покупка, чиято стойност е по-голяма от останалата сума на ваучера. 

Вход 
Първоначално се чете един ред:
•	Стойността на ваучера – цяло число в интервала [1…100000]
След това до получаване на команда "End" или до изчерпването на ваучера, се чете по един ред:
    o	Покупката, която Любо е избрал – текст

Изход
Програмата приключва при въвеждане на команда "End" или при покупка чиято стойност е по-голяма от останалите пари от ваучера. На конзолата трябва да се напечатат три реда:
•	"{брои закупени билети}"
•	"{брой закупени други покупки}"
 */

function cinemaVoucher(input) {
    let index = 0;
    let voucherValue = Number(input[index]);
    let command = input[index];
    index++;
    let movie = 0;
    let product = 0;
    let price = 0;
    let budget = voucherValue;
    let cost = 0;


    while (command !== "End") {
        let purchase = input[index];
        cost = purchase.length;
        index++

        let movieCost = purchase.charCodeAt(0) + purchase.charCodeAt(1);
        let productCost = purchase.charCodeAt(0);

        if (cost > 8) {
            price = movieCost;
            if (price > budget) {
                break;
            }
            movie++;
        }
        else if (cost <= 8) {
            price = productCost;
            if (price > budget) {
                break;
            }
            product++;
        }

        if (price <= budget) {
            budget -= price;
        }

        command = input[index];
    }
    console.log(movie);
    console.log(product);
}

cinemaVoucher(["300", "Captain Marvel", "popcorn", "Pepsi"]);
cinemaVoucher(["1500","Avengers: Endgame","Bohemian Rhapsody","Deadpool 2","End",]);


