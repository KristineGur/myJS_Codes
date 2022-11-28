// ცვლადის გამოცხადება
// let name = "Kristine";
// document.write(name);       //ცვლადის გამოძახება
// console.log(name);          //ცვლადის გამოძახება
// name();                     //ცვლადის გამოძახება

// let price = 500;
// name = price; 
// document.write(name);
// price += 10;
// document.write(price);

//მასივის ელემენტენტებთან წვდომა
// let weekdays = ["ორშაბათი", "სამშაბათი", "ოთხშაბათი"]
// document.write("კვირის პირველი დღეა" + " " + weekdays[0]);
// let day = 2;
// document.write("კვირის მესამე დღეა" + " " + weekdays[day]);

// let days = new Array ("ორშაბათი", "სამშაბათი", "ოთხშაბათი");  //მასივის შექმნის მე-2 გზა
// document.write(days.length);

// let fullName = ["Kristine Gurgenidze", "Alina Gurgenidze", "Leila Diasamidze"];
// fullName.push ("Elza Jincharadze");                // ბოლო ელემენტის ჩამატება
// //document.write("ოჯახის წევრები არიან:" + " " + fullName + " " + "სულ:" + " " + fullName.length);
// fullName.pop();                                    // ბოლო ელემენტის წაშლა
// fullName.unshift("Giorgi Gurgenidze");             // I ელემენტის ჩამატება
// fullName.shift();                                  // I ელემენტის წაშლა
// fullName.splice(1, 3);                             // რამდენიმე ელემენტის წაშლა: რომელი ინდექსიდან (ამ ინდექსის ჩათვლით) რამდენი
// fullName.splice(4, 0, "Rezo Gurgenidze", "Archil Gurgenidze"); // რამდენიმე ელემენტის ჩამატება: რომელ ინდექსზე, რამდენი წაიშალოს/არ წაიშალოს, რა ჩაემატოს
// fullName.reverse();                                // მასივის შემობრუნება
// document.write(fullName.sort());                   // სორტირება ანბანის მიხედვით


// ობიექტის მეთოდები: alert, prompt, confirm
// let name = prompt ("ჩაწერეთ თქვენი სახელი");
// alert("გამარჯობა" + " " + name + "!");
// let offer = confirm (name + ", " + "ყავაზე ვიჭორაოთ?");

// let age = prompt ("ჩაწერეთ თქვენი ასაკი");
// if (age >=18){
//   alert("თქვენ სრულწლოვანი ხართ");
// }
// else {
//   alert("თქვენ არასრულწლოვანი ხართ");
// }


//                                          .......Function ფუნქციები........
// function display(){
//   document.write ("Hello World");
// }
// display()                    //ფუნქციის გამოძახება


// function goodMorning() {
//   document.write("დილა მშვიდობისა!");
// }
// let message = goodMorning;
// message();

//ანონიმური ფუნქცია
// let display = function (){
//   document.write ("Hello World");
// }
// display()

// function sum(x){
//   let z = x + x;
//   console.log(x + " დამატებული " + x + " უდრის " + z);
// }
// sum (20);

// function sum (x, y){
//   if (y === undefined){
//     y = x; 
//   } 
//   let z = x * y;
//   document.write(x + " gavravlebuli " + y + "-ze udris " + z + "<br>");
// } 
// sum (5, 6);
// sum (5);

// function rtr (y) {
//   return y + y
// }
// let sum = rtr(5);

// function minus () {
//   return 700-25
// }
// let z = minus();

// function plius (x) {
//   return x + 200 
// }
// let z = plius (250)


//block scope
// function displaySquare() {
//   let z = 10;
//   console.log(z);
// }
// displaySquare()



// let person = {
//   name: "Kristine",
//   lastName: "Gurgenidze",
//   age: 25,
//   sex: "female",
//   hasCar: false,
//   parents: {
//    mother: {
//     name: "Leila",
//     lastName: "Diasamidze",
//     age: 54
//    },
//    father: {
//     name: "Rezo",
//     lastName: "Gurgenidze",
//     age: 66
//    }
//   },
//   getFullName: function () {
//    document.write(this.parents.mother.name + " " + this.parents.mother.lastName)
//   }
// }

// person.getFullName ()
// let hasName = "name" !== undefined;

// for ()



