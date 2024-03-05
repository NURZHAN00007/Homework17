// 1 example ==============================================================
//  - создать переменную внутри которой будет находится promt внутри котрого загадка 
//  загадка
//  -условие 
//   если ответ в переменной '5' === '5'
//     то вывести что это верный ответ 
// Иначе если 'five' === 'five'
//     то вывести что это верный ответ 
// Иначе 
//    Вывести что ответ не верный 

//    const string = prompt('У квадратного стола отпилили один угол')
//    const num = 'five';
//    const num2 = '5';
//    switch (string) {
//     case num:
//     console.log('Верный ответ');
//     break;
//     case num2:
//     console.log('Верный ответ');
//     break;
//     default:
//     console.log('такого ответа нет');
//     break;
//    }


// const age = prompt('У квадратного стола отпилили один угол');

// alert (age)


// if(age == 5 || age == 'five'){
//     alert('Правильный ответ')
// }else{
//     alert('Не правильный ответ')
// }



// 2 example ===========================================================
// const age = parseInt(prompt('how old are you '));

// function recommendMovie(age) {
//     if (age >= 1 && age <= 13) {
//         return 'Halk';
//     } else if (age >= 14 && age <= 17) {
//         return 'Avenger';
//     } else if (age >= 18) {
//         return 'JusticeLegeue';
//     } else {
//         return 'Не верный возраст';
//     }
// }

// console.log(recommendMovie(age));

// 3 example ==========================================================

// const drinks = prompt('Do you like vodk, water, coffe, beer  ')

// switch (drinks) {
//     case 'vodka':
//         alert('Bad choice');
//         break;

//         case 'beer':
//          alert('Bad choice');
//         break;

//         case 'watter':
//         console.log('great');
//         break;

//         case 'coffe':
//         console.log('coffe bad poison');
//         break;

//     default:
//         console.log('Do you not choice');
//         break;
// }


// 4 exapmle 

// let number = 10 
// if(number === 11){
//     alert('Number is 11!')
// }else {
//     alert('Number is 10!')
// }


// 5 example ====================================================

// (2 < 3) && (3 > 4) || true

// true && false || true

// false || true

// true 
 
// ===============================

// !true && (!true || 100 != 5 * 5)

// !true && ( false || false )

// !true && false

// false && false 

// true

// ===============================

// ("123" == 123) || ((10 <= 10) && ('' === false))

// true || (true && true)

// true || true 

// true


// 6 example =======================================

// let isRaining = true; 
// let isSunny = false; 

// if(isRaining == true && isSunny == false){
//     console.log('Идет дождь');
// }


//7 example ====================================
// let numberAsString = Number('42');
// console.log(numberAsString + 10 );

// 8 example ==============================
// let age = 35;

// if(age >= 18){
//     console.log('Возраст старше');
// }else{
//     console.log('Не коректный ответ');
// }


// 9 example ==================================
// let isWeekend = true
// let hasTimeOff = false

// if (isWeekend || hasTimeOff ){
//     console.log('Все Верно вы можете отдахнуть');
// }else {
//     console.log('Иди работать ');
// }


// 10 example ======================================


// let studentGrade = prompt('Какая оценка');

// if (studentGrade >= 90){
//     console.log('Отлично');
// }else if(studentGrade >= 70 && studentGrade < 90 ){
//     console.log('Хорошо');
// }else{
//     console.log('Попробуйте еще раз');
// }



//11 example ==========================================

// const currentDate = Date('2023-09-01');
// const currentDate2 = Date('2023-08-29')
// if(currentDate <= currentDate2){
//     console.log('Добро пожаловать');
// }else{
//     console.log('Скоро начнем ');
// }