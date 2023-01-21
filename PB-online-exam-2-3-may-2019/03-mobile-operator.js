/* 3. Мобилен оператор
Мобилен оператор предлага договори с различна месечна такса в зависимост от срока - 1 или 2 години.  Да се напише програма, която изчислява дължимата сума, която трябва да се плати за определен брой месеци.

срок / тип	Small	Middle	Large	ExtraLarge
1 година(one)	9.98 лв.	18.99 лв.	25.98 лв.	35.99 лв.
2 години(two)	8.58 лв.	17.09 лв.	23.59 лв.	31.79 лв.
Условия:
•	при добавен мобилен интернет, към таксата за един месец се добавя:
o	при такса по-малка или равна на 10.00 лв.  5.50 лв.
o	при такса по-малка или равна на 30.00 лв.  4.35 лв.
o	при такса по-голяма от 30.00 лв.  3.85 лв.
•	ако договорът e за две години, общата сума се намалява с 3.75%

Вход
От конзолата се четат 3 реда:
1.	Срок на договор – текст – "one", или "two"
2.	Тип на договор – текст – "Small",  "Middle", "Large"или "ExtraLarge"
3.	Добавен мобилен интернет – текст – "yes" или "no"
4.	Брой месеци за плащане - цяло число в интервала [1 … 24]

Изход
На конзолата се отпечатва 1 ред:
•	Цената, която заплаща клиентът, форматирана до втория знак след десетичната запетая, в следния формат:  "{цената} lv."
 */

function mobileOperator(input) {
    let contractLength = input[0];
    let contractType = input[1];
    let mobNet = input[2];
    let monthsPaid = Number(input[3]);
  
    let monthlyFee = 0;
    let mobNetAdd = 0;
  
    switch (contractLength) {
      case "one":
        if (contractType == "Small") {
          monthlyFee = 9.98;
        } else if (contractType == "Middle") {
          monthlyFee = 18.99;
        } else if (contractType == "Large") {
          monthlyFee = 25.98;
        } else if (contractType == "ExtraLarge") {
          monthlyFee = 35.99;
        }
        break;
      case "two":
        if (contractType == "Small") {
          monthlyFee = 8.58;
        } else if (contractType == "Middle") {
          monthlyFee = 17.09;
        } else if (contractType == "Large") {
          monthlyFee = 23.59;
        } else if (contractType == "ExtraLarge") {
          monthlyFee = 31.79;
        }
        break;
    }
  
    if (mobNet == "yes") {
      if (monthlyFee <= 10.0) {
        mobNetAdd = 5.5;
      } else if (monthlyFee <= 30.0) {
        mobNetAdd = 4.35;
      } else if (monthlyFee > 30.0) {
        mobNetAdd = 3.85;
      }
    }
  
    let totalCost = monthlyFee + mobNetAdd;
  
    if (contractLength == "two") {
      totalCost = totalCost - totalCost * 0.0375;
    }
  
    let finalCost = totalCost * monthsPaid;
  
    console.log(`${finalCost.toFixed(2)} lv.`);
  }
  
  mobileOperator(["one", "Small", "yes", "10"]);
  mobileOperator(["two", "Large", "no", "10"]);
  mobileOperator(["two", "ExtraLarge", "yes", "20"]);
  mobileOperator(["two", "Small", "yes", "20"]);
  