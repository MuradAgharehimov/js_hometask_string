// 1. a, b və c ədədlərimiz var. ax^2+bx+c=0 kvadrat tənliyinin həllini tapıb konsolda çap edin.
// var a = prompt("a ni daxil edin");
// var b = prompt("b ni daxil edin");
// var c = prompt("c ni daxil edin");


// var discriminant = b * b - 4 * a * c;

// if (discriminant > 0) {

//   var x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
//   var x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
//   console.log("2 kökü vardır:");
//   console.log("x1 = " + x1);
//   console.log("x2 = " + x2);
// } else if (discriminant === 0) {

//   var x = -b / (2 * a);
//   console.log("1 kökü vardır:");
//   console.log("x = " + x);
// } else {

//   console.log("kökü yoxdur.");
// }





// 2. a ədədimiz var. 1-dən 1000-ə qədər A-ya bölünən bütün ədədləri çap edin.

// let A =prompt ("A ni daxil edin");

// for (let i = 1; i <= 1000; i++) {
//   if (i % A === 0) {
//     console.log(i);
//   }
// }



// 3-7 saylı tapşırıqlar bu array üzərindən işləniləcək:
// const arr = [2, 4, 5, 9, 1];



// 3. Bu massivin minimum elementini tapın:  
// const arr = [2, 4, 5, 9, 1];

// const last = Math.min(...arr);

// console.log("minimum element:", last);




// 4. Bu massivin maksimum elementini tapın
// const arr = [2, 4, 5, 9, 1];

// const last = Math.max(...arr); 

// console.log("minimum element:", last);




// 5. Bu massivin minimum elementinin indeksini tapın.
//     const arr = [2, 4, 5, 9, 1];

//     let min = arr[0];

// for (let i = 1; i < arr.length; i++) {
//   if (arr[i] < min) {
//     min = arr[i];
//     minindex = i;
//   }
// }

// console.log("massivin minimum elementi:", min);
// console.log("massivin minimum elementinin indeksi:", minindex);




// 6. Bu massivin maksimum elementinin indeksini tapın.
    // const arr = [2, 4, 5, 9, 1];

    // let max = arr[0];

    // for (let i = 0; i < arr.length; i++) {
    //     if (arr[i] > max) {
    //         max = arr[i];
    //         maxindex = i;
    //     }
    // }
    //  console.log("massivin maksimum elementi:", max);
    //  console.log("massivin maksimum elementinin indeksi:", maxindex);




// 7. Tək indeksli massiv elementlərinin cəmini hesablayın

//     const arr = [2, 4, 5, 9, 1];
//     let total = 0;

//     for (let i = 0; i < arr.length; i++) {
//     if (i % 2 === 1) { 
//     total += arr[i];
// }
// }

// console.log("Tək indeksli massiv elementlərinin cəmi:", total);



// 8. Mən Code Academy Tələbəsiyəm. cümlədəki hərfləri kiçik hərfə çevirin.




// const text = "Mən Code Academy Tələbəsiyəm.";
// const small = text.toLowerCase();

// console.log(small);




// 9. Mətndə başlanğıc və son boşluqları təmizləyin: "            Mən Code Academydə Programing tədrisi alıram            "

// const text = "            Mən Code Academydə Programing tədrisi alıram            ";
// const x = text.trim();

// console.log(x);




// 10. Mən Code Academy Tələbəsiyəm. cümləsini sözlərə ayırın

// const text = "Mən Code Academy Tələbəsiyəm.";
// const y = text.split(" ");

// console.log("Sözlər:", y);




// 11.  "            Mən Code Academydə Programing tədrisi alıram            " cümləsində neçə hərf olduğunu consolda yazdırın.

var text = "            Mən Code Academydə Programing tədrisi alıram            ";
var herftext = text.split('').filter(char => char !== ' ').join('');
var herfsay = herftext.length;
console.log("Hərf sayi: " + herfsay);



