const Savollar = [
    {
        savol: "Bosh kelishik qushimchasi",
        variant: [ alert("XUSH KELIBSIZ!Testni ishlab talaba bulish imkoniyatini quldan boy bermang."), "A. -", "B. ning", "C. ga", "D.ka"],
        javobi: "A"
    },
    {
        savol: "Ona tili qachon mustaqillikka erishgan?",
        variant: [ "A.1989", "B.1991", "C.1993", "D. 1992"],
        javobi: "A"
    },
    {
        savol: "Paleolit davri nechiga bulinadi?",
        variant: [ "A. 4", "B. 3", "C. 2", "D. 5"],
        javobi: "B"
    },
    {
        savol: "Mezolit davri nechanchi ming yillikni oladi",
        variant: [ "A. 8-4ming yil", "B. 12-7ming yillik", "C. 1- 2 ming yillik", "D.6-7 ming yillik"],
        javobi: "B"
    },
    {
        savol: "Tarixning otasi?",
        variant: [ "A. Geradot", "B.Aristotel", "C. Arximed", "D. Suqrot"],
        javobi: "A"
    },
    {
        savol: "Toshketda qattiq zilzila qachon bulgan",
        variant: [ "A. 1997", "B. 1998", "C. 1977", "D. 1966"],
        javobi: "D"
    },
    {
        savol: "Italiya poytaxti",
        variant: [ "A. Rim", "B. Ashxabod", "C. Istanbul", "D. Dehli"],
        javobi: "A"
    },
    {
        savol: "Arablar Marvni qachon egallashdi",
        variant: [ "A. 8", "B. 9", "C. 7", "D. 5"],
        javobi: "C"
    },
    {
        savol: "Amir Temurning nevarasi?",
        variant: [ "A. Shohrux", "B. Bobur", "C. Ulug'bek", "D. Husayn"],
        javobi: "C"
    },
    {
        savol: "Ulug'bek nechta yulduzni aniqlagan?",
        variant: [ "A. 100", "B.2000", "C. 1081", "D. 1082"],
        javobi: "C"
    }
    
];


let togriJavoblar = 0;

for (let i = 0; i < Savollar.length; i++) {
  const userJavobi = prompt(
    Savollar[i].savol + "\nVariantlar: \n" + Savollar[i].variant.join("\n")
  );
  if (userJavobi === Savollar[i].javobi) {
    togriJavoblar++;
  } else if (userJavobi === "" || userJavobi === null) {
    alert("Siz variant belgilamadingiz");
  }
  }

alert(
    Savollar.length +
    " ta savoldan " +
    togriJavoblar +
    " ta to'g'ri bajardingiz."
);

    alert("Tabriklaymiz ! Peshonangiz bor ekan.  Siz byudjetga kirdingiz");


    alert(" Pulingiz bulsa uqing! Siz to'lov kontrakt asosida o'qishga qabul qilindingiz.");


    alert("Sharmanda uydagilarizga nma deysiz!  talabalikka tavsiya etilmadingiz");


testYourKnowledge();


