//*  JS INTRO   */

// JS oop bir dildir %100 olmasa da kismen destekler, belirli temeller atip o temeller uzerinden turetilerek yazmayi saglar. Her seferinde sifirdan tasarlamaya gerek kalmiyor. Ilk yazilirken js browserlerda calisan bir dil yapmakti sonradan oop eklendi o yuzden oop destekler ama tam anlamiyla bir oop dili degildir.

// Js browserlerin dili diye de adlandilir.

// interpreter tabanli bir dil oldugu icin satir satir calistirarak ilerler, 4 satirda bir hata var ise ilk 3 satirin calisip 4 de hata verir. Compiler tabanli dillerde ise butun kod yazilir taranir ve hata olan satirlar duzeltilir. Bunun sebebi js browserlerdan bilgi cekerek isledigi icin veri geldikce isleniyor. Compiler tabanli diller kodu calisir halde kurulum uzerinden verir ve kullanici kodlari görmez kodlarin calisir halini alir kullanir.

console.log("Hej");
x = 3.14;
console.log(x);

const num = "22";
console.log(num);

// num = 22; //! assignment constant variable

// const pi; //! missing initializer in const baslangic degeri olmali

// pi = 3

const n1 = "5";
const n2 = 10;
console.log(n1 + n2); //! bir ifade string oldugunda concatination yapiyor, web ilk ciktiginda her sey text oldugundan her ifadeyi string tabanli kabul ediyor, en az bir string olmasi yeterli concat yapmasi icin

let lang = "js";
console.log(lang);

lang = "java";
console.log(lang); //! let ile önceden atadigimiz degiskeni degistirebiliriz, ayni sekilde boolean yada number degerlerde atanabilir

let ch;

console.log(ch); //! dedigimizde undefined verir icine bir deger verilmediginde js undefined kabul eder, let ile const daki gibi ayni scope da ayni isimle degisken tanimlanamaz
