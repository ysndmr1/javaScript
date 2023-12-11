// * =======================================================
// *             FOR LOOP
// * =======================================================

//* for syntax i ilk olarak let ile bir baslangic degeri ile baslar daha sonra bir kosul yazilir ve kosul true oldugu surece döngu devam eder daha sonra ise artim veya azalim miktari yazilir

// //? Ornek: 1 den n kadar sayilari toplayan kodu yaziniz.

// const n = Number(prompt("Enter a number"))

// let sum = 0

// for (let i = 1; i <= n; i++) {
//   sum += i
// }
// console.log("SUM:", sum)

// //? Ornek: 0-100 Arasinda n adet rasgele tamsayi sayi ureten kodu
// //? for dongusu ile yaziniz..

// const num = Number(prompt("Enter a number"))

// for (let j = 1; j <= num; j++) {
//   const randomNum = Math.round(Math.random() * 100)
//   console.log(`${j}. random number: ${randomNum}`)
// }

//* NOT:
//* Math.floor() =>en yakin alt tamsayiya yuvarlar
//* Math.ceil() =>en yaki ust tamsayiya yuvarlar
//* Math.round() => degerine gore yuvarlar.
//* Math.trunc() => kesirli sayinin tam kismini alir.
