//* js de data types divided by 2
//* primitive data types number, string, boolean, undefined, Null, symbol, BigInt
//* non-primitive data types object  const object={name="x",surname="y"}

//  ========== Operators ===========

// Aritmetik operators
// +,-,*,/, %mod,++ bir arttirma eger ++ degerin onundeyse once arttir sonra yazdir eger arkasindan gelirse önce yazdir sonra arttir,-- da ayni sekilde, ** us alma exponential pow fonksiyonuda kullanilabilir

const cola = 20;
const gumm = 5;
const bisc = 15;
const totalPrice = cola + gumm + bisc;
console.log(totalPrice);

//* bir islemin sonucu sayi degilse NaN döner sayi degildir data type i numberdir bir islemin sonucu NaN olup olmadigini anlamak icin isNaN() fonk kullanilabilir. clg (isNan(varName))

//? ex

const yearOfBirth = 2000;
const name = "john";
// console.log(name + " is " + (2023 - yearOfBirth) + " years old");

console.log(
  name + " is " + (new Date().getFullYear() - yearOfBirth) + " years old"
);

console.log(`${name}is ${new Date().getFullYear() - yearOfBirth}  years old`);

// //* CAPRMA VE US ALMA (Multiply, Pow)
// //*--------------------------------------

// //? Ornek
// //?-------------------------------------
// //? Kullanicidan veri girisi istedik.
// ? prompt ile kullancidan alinan veri default olarak string'dir
// //? Bu veriyi number'a Number() fonksyinu ile cevirebilriz.
// const r = +prompt("Please enter r:")
// const r = Number(prompt("Please enter r:"))
// const pi = 3.14
// const square = pi * r * r //? carpma
// const square = pi * r ** 2 //? us alma
// console.log(`Square of Circle: ${square} `)
// console.log(`Square of Circle: ${square.toFixed(3)} `)

// console.log(`Square of Circle: ${Math.floor(square)} `)
// console.log(`Square of Circle: ${Math.ceil(square)} `)
// console.log(`Square of Circle: ${Math.trunc(square)} `)
// console.log(`Square of Circle: ${Math.round(square)} `)

// //?Bazi fonksiyonlar
// Math.floor();  //* her zaman en yakin alt tamsayiya yuvarlar
// Math.ceil();  //* her zaman en yakin ust tam tamsayiya yuvarlar
// Math.trunc(); //* sayinin tam kismini alir.
// Math.round(); //* en yakin tam sayiya yuvarlar.
// Math.random(); //* 0 ve 1 arasında rasgele sayi uretir.

// const randomNumber = Math.random() //? 0 - 1 arasinda rasgele sayi
// console.log(randomNumber)

// //? 0-100 arasinda sayi uretmek istenirse
// const rasgele = Math.round(Math.random() * 100) //?
// console.log(rasgele)

// //? Ornek : 1 eksiltme, 1 arttirma
// let a = 5
// a++
// console.log(a++) //? 6
// y = a + 5 //? 7 + 5
// console.log(--y) //? 11

// //? Ornek : 5 arttirma
// let z = 4
// z = z + 5
// z += 10 //? z = z + 10

// //? Ornek : 10 eksiltme
// let k = 20
// k -= 10 //? k = k - 10
// console.log("k:", --k) //? k:9
// console.log({ k }) //? {k:9}

// //? Ornek : 3 katini alma
// let b = 4
// b = b * 3
// b *= 3 //? b = b *3
// console.log({ b })

// //* MOD
// //*--------------------------------------
// const number = prompt("Please enter a 3-digits number:")

// const ones = number % 10
// const tens = Math.floor(number / 10) % 10
// const hundreds = Math.trunc(number / 100)
// console.log(`Hundreds: ${hundreds}, Tens: ${tens}, Ones: ${ones} `)

// * ================================================
// *          KARSILASTIRMA OPERATORLERI
// * ================================================

// const num1 = 3

// console.log(num1 == 3) //? true
// console.log(num1 === 3) //? true
// console.log(num1 === "3") //? False

// const num2 = "3"

// console.log(num1 == num2)
// console.log(num1 != num2) //? false

// const num3 = 5
// const num4 = "1"

// console.log(num1 > num3) //?false  (3>5)
// console.log(num1 <= num3) //? true  (3 <= 5)

// console.log(num2 > num4) //? "3" > "1" ASCII'ye gore kiyaslama yapilir

// * ================================================
// *            MANTIKSAL OPERATORLER
// * ================================================

const v1 = true;
const v2 = false;

// console.log(v1 && v2) //? false
// console.log(v1 || v2) //? true

// console.log(!v1) //?false

// //? Ornek:
// const age = prompt("Please enter your age:")
// const healty = confirm("are you healty?")
// console.log(age, healty)

// if (age >= 18 && healty == true) {
//   console.log("Ehliyet alabilir")
// } else {
//   console.log("ehliyet alamaz")
// }

//? Javascripte surekli falsy olan 6 deger bulunmaktadir.
const nal = null;
const tanimsiz = undefined;
const bos = "";
const sayiDegil = NaN;
const sifir = 0;
const falsy = false;

console.log(Boolean(0)); //? false
console.log(Boolean(5)); //? true
console.log(Boolean(-5)); //? true
console.log(Boolean(12.4)); //? true

console.log(v1 && null && true && true); //? null
console.log(v1 && 4 && true && 5); //? 5
console.log(0 && v1); //? 0
console.log(v1 || 0); //? true

const num5 = 0; //? falsy

if (num5 === true) {
  console.log("sayi sifir degildir");
} else {
  console.log("sayi sifirdir");
}
