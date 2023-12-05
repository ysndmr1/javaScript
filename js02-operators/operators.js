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
