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
// let z = plius (250);

//block scope
// function displaySquare() {
//   let z = 10;
//   console.log(z);
// }
// displaySquare();

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

// function createUser (pName, pAge){
//   return {
//     name: pName,
//     age: pAge,
//     displayInfo: function (){
//       document.write(this.name + this.age)
//     }
//   }
// }
// let tom = createUser("Tom", 26);
// tom.displayInfo();
// let giorgi = createUser("Giorgi", 30);
// giorgi.displayInfo();

//ფუნქციების გაერთიანება
// function createUser (pName, pAge){
//   return {
//     name: pName,
//     age: pAge,
//     displayInfo: function (){
//       document.write(this.name + this.age)
//     },
//     driveCar: function (car){
//       document.write(this.name + " ატარებს მანქანას" + car.name + car.year)
//     }
//   }
// }
// function createCar (mName, mYear){
//   return {
//     name: mName,
//     year: mYear
//   }
// }
// let tom = createUser("Tom", 26);
// tom.displayInfo();
// let tesla = createCar("Tesla", 2022);
// tom.driveCar(tesla);

//კონსტრუქტორი: სახელი ენიჭება დიდი ასოთი. კონსტრუქტორი იგივე გეგმაა იმავე "ტიპის" მრავალი ობიექტის შესაქმნელად. ქვემოთ მოცემულ მაგალითში function User(pName, pAge) არის ობიექტის კონსტრუქტორის ფუნქცია. იმავე ტიპის ობიექტები იქმნება კონსტრუქტორის ფუნქციის გამოძახებით new საკვანძო სიტყვით:
// function User (pName, pAge){
//   this.name = pName,
//   this.age = pAge
//   this.displayInfo = function() {
//     document.write("სახელი:" + this.name + "ასაკი:" + this.age)
//   }
// }
// let tom = new User ("Tom", 26);
// tom.displayInfo();

//კონსტრუქტორი: Car და User ტიპის კონსტრუქტორების გაერთიანება
//Car ტიპის კონსტრუქტორი
// function Car (mName, mYear){
//   this.name = mName,
//   this.year = mYear,
//   this.getCarInfo = function () {
//     document.write(this.name + this.year)
//   }
// }
// //User ტიპის კონსტრუქტორი
// function User (pName, pAge){
//   this.name = pName,
//   this.age = pAge,
//   this.driveCar = function(car) {
//     document.write(this.name + car.name)
//   }
//   this.displayInfo = function () {
//     document.write (this.name + this.age)
//   }
// }
// let tom = new User ("Tom", 26);
// tom.displayInfo ();
// let tesla = new Car ("Tesla", 2022);
// tom.driveCar(tesla);


//პროტოტიპი: ყველა ფუნქციას გააჩნია თვისება prototype, რომელიც წარმოადგენს ფუნქციის პროტოტიპს. ანუ თვისება User.prototype წარმოადგენს User ობიექტების პროტოტიპს. ყველა თვისება და მეთოდი, რომელიც განსაზღვრულია User.prototype-ში, იქნება საერთო ყველა User ობიექტისთვის.
// function User(pName, pAge) {
//   this.name = pName;
//   this.age = pAge;
//   this.displayInfo = function(){
//     document.write("სახელი: " + this.name + "; ასაკი: " + this.age);
//   };
// };

// User.prototype.hello = function (){
//   document.write(this.name + " ამბობს: 'გამარჯობა!'");
// };
// User.prototype.maxAge = 110;

// let tom = new User("ტომი", 26);
// tom.hello();
// let john = new User("ჯონი", 28);
// john.hello();
// console.log(tom.maxAge); // 110
// console.log(john.maxAge); // 110


//ინკაპსულაცია: წარმოადგენს ობიექტის მდგომარეობის დაფარვას გარე ზემოქმედებისაგან. მიუთითებლობისას ობიექტის ყველა თვისება წარმოადგენს საჯაროს და მათზე მიმართვა შესაძლებელია პროგრამის ნებისმიერი ადგილიდან.
// function User (name, age) {
//   this.name = name;
//   let _age = age;
//   this.displayInfo = function(){
//     document.write(this.name + _age);
//   };
//   this.getAge = function() {
//     return _age;
//   }
//   this.setAge = function(age) {
//     if(typeof age === "number" && age >  0 && age < 110){
//       return _age = age;
//     } else {
//       alert("Non Valueble Info");
//     }
//   }
// }
// let tom = new User ("Том", 26);
// console.log(tom._age); // undefined - _age - ლოკალური ცვლადი
// console.log(tom.getAge()); // 26
// tom.setAge(32);
// console.log(tom.getAge()); // 32
// // tom.setAge("54"); // არასწორი მნიშვნელობა

//call მეთოდი
// function add(x, y){   
//   return x + y;
// }
// let result = add.call(null, 3, 8);
// console.log(result); // 11

//call მეორე მაგალითი
// function User (name, age){
//   this.name = name;
//   this.age = age;
// }
// let tom = new User ("Tom", 26);
// function display() {
//   document.write(this.name)
// }
// display.call (tom)    //Tom

//apply მეთოდი: call()-ის მსგავსია. აქაც პირველ პარამეტრად გადაეცემა ობიექტი, რომლისთვისაც ხდება ფუნქციის გამოძახება. ხოლო მეორე პარამეტრად გადაეცემა არგუმენტების მასივი:
// function add(x, y){   
//   return x + y;
// }
// var result = add.apply(null, [3, 8]);
// console.log(result);    // 11


//მემკვიდრეობითობა, რაც საშუალებას იძლევა ობიექტების ახალი ტიპების შექმნისას, საჭიროებისას, შევინარჩუნოთ არსებული ტიპებისგან მემკვიდრეობით მიღებული ფუნქციონალი. მაგალითად, ვთქვათ გვაქვს ობიექტი User , რომელიც წარმოადგენსმომხმარებელს. ვთქვათ, ასევე გვაქვს ობიექტი Employee, რომელიც წარმოადგენს მომუშავეს. მაგრამ მომუშავე ამავე დროს მომხმარებელიცაა, შესაბამისად, მას უნდა ჰქონდეს ასევე User ობიექტის ყველა თვისება და მეთოდი.
// მომხმარებლის კონსტრუქტორი
// function User (name, age) {
//   this.name = name;
//   this.age = age;
//   this.go = function(){
//     document.write(this.name);
//   }
//   this.displayInfo = function(){
//     document.write(this.name + this.age);
//   };
// }
// User.prototype.maxage = 110;
// // მომუშავის კონსტრუქტორი
// function Employee(name, age, comp){
//   User.call(this, name, age);
//   this.company = comp;
//   this.displayInfo = function(){
//     document.write(this.name + this.age + this.company);
//   };
// }
// Employee.prototype = Object.create(User.prototype);
// let tom = new User("Tom", 26);
// let bill = new Employee("Bill", 32, "Google");
// tom.go();  //Tom26
// bill.go();  //Bill32
// tom.displayInfo(); //Tom26
// bill.displayInfo();  //Bill32Google
// console.log(bill.maxage); //110

