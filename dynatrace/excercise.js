// var cylinder = {
//     pi: 3.14,
//     volume: function (r, h) {
//         return this.pi * r * r * h;
//     }
// };
//
// console.log(cylinder.volume.call({pi: 3.14159}, 2, 6));
// console.log(cylinder.volume.apply({pi: 3.14159}, [2, 6]));
// var newVolume = cylinder.volume.bind({pi: 3.14159});
// console.log(newVolume(2,6));


// var a = 10;
//
// function Foo() {
//     if (true) {
//         let a = 4;
//     }
//
//     console.log(a); // alerts '10' because the 'let' keyword
// }
// Foo();

//A closure is a function that returns another function and wraps data
// function generator(input) {
//     var index = 0;
//     return {
//         next: function() {
//             if (index < input.length) {
//                 index += 1;
//                 return input[index - 1];
//             }
//             return "";
//         }
//     }
// }
// //
// var mygenerator = generator("boomerang");
// console.log(mygenerator.next()); // returns "b"
// console.log(mygenerator.next()); // returns "o"
// mygenerator = generator("toon");
// console.log(mygenerator.next());  // returns "t"


// function Foo(){
//     console.log(this.a);
//     // console.log(this);
// }
// var food = {a: "Magical this"};
// Foo.call(food); // food is this
// Foo();


// var person = {
//     name: "Stranger",
//     age: 24,
//     get identity() {
//         return {who: this.name, howOld: this.age};
//     },
//     set values(name) {
//         var words = name.split(' ');
//         this.name = words[0];
//         this.age = words[1];
//         return {who: this.name, howOld: this.age};
//     }
// }
// //
// person.values = 'AdnanBoota 25';
// console.log(person.identity);

var marks = {physics: 98, maths: 95, chemistry: 91};
// console.log(JSON.stringify(marks));
// console.log(JSON.parse('{"physics":98,"maths":95,"chemistry":91}'));

// console.log(Object.values(marks));

// var highScore = 0;
// for (i of Object.keys(marks)) {
//     // console.log(marks[i]);
//     if (marks[i] > highScore)
//         highScore = marks[i];
// }
// console.log(highScore);
//
// var colors = {
//     blue: '#23423',
//     green: '#a3453',
//     red: '#a3453',
// };
// console.log(Object.values(colors));
//
//
// console.log(Object.keys(colors));
// console.log(colors.hasOwnProperty('red'));


//Prototype
// function Car(make, model, year) {
//     this.make = make;
//     this.model = model;
//     this.year = year;
// }
// //
// // //
// var newCar = new Car('Honda', 'City', 2007);
// console.log(newCar instanceof Car); // returns true


//Understand Prototypical Inheritance well

// var animalGroups = {
//     MAMMAL: 1,
//     REPTILE: 2,
//     AMPHIBIAN: 3,
//     INVERTEBRATE: 4
// };
//
// //
// function Animal(name, type) {
//     this.name = name;
//     this.type = type;
//
// }


// function Dog(name, type) {
//     // console.log(this);
//     Animal.call(this, name, type);
//     this.sound = "bow";
//
// }
//
// Animal.prototype.shout = function () {
//     console.log(this.name + ' is ' + this.sound + 'ing...');
// }
// //
// Animal.prototype.sleep = function () {
//     console.log(this.name + ' is sleeping...');
// }

// var dog = new Animal("dog", animalGroups.MAMMAL);
// var dog = new Animal("dog", animalGroups.MAMMAL);
// var crocodile = new Animal("crocodile", animalGroups.REPTILE);
// console.log(dog);
// console.log(crocodile);
//
//


// dog.shout();
//
// Dog.prototype = Object.create(Animal.prototype);
// Dog.prototype.constructor = Dog;
// var pet = new Dog("germanShepard", animalGroups.MAMMAL);
// console.log(pet); // returns Dog {name: "germanShepard", type: 1, sound: "bow"}
//
// pet.shout();
// pet.sleep();
// console.log(Dog.prototype.constructor);

//Callbacks!
// function reqListener() {
//     console.log(this.responseText);
// }

// var xhr = new XMLHttpRequest();
// req.addEventListener("load", reqListener);
//
// xhr.open("GET", "https://www.w3.org/TR/PNG/iso_8859-1.txt");
// xhr.send();
//
// xhr.onreadystatechange = function() {
//     if (this.readyState == 4 && this.status == 200) {
//         console.log(this.responseText);
//     }
// };

// throw new Error("user feeds are having fewer fields than expected...");

class Rectangle {
    constructor(x, y) {
        this.sleep = x;
        this.wake = y;
    }

    get simulation() {
        return this.simulate();
    }

    simulate() {
        return this.sleep + ' ' + this.wake;
    }

    static letsWakeup() {

        return 'who is this';
    }

    // console.log(this);

}

class Square extends Rectangle{
    simulate() {
        return this.sleep + ' reallly ' + this.wake;
    }

    welcome() {
        return "welcome to the show";
    }
}
//
const wakeup = new Square('hi', 'dynatrace');
const a = 'abc';
// console.log(wakeup.simulation);
console.log(wakeup.simulation);
console.log(wakeup.welcome());