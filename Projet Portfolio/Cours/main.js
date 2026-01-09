console.log("cc")

let lifePoints = 100

console.log(lifePoints)

lifePoints += 90

console.log(lifePoints)

if (true) {
    console.log("bonjour");
}

let age = 15

if (age>=18) {
    console.log("Tu es majeur");
} else {
    console.log("Tu es mineur");
}

let time = 13

if(time >= 8 && time <=12) {
    console.log("Magasin ouvert");
}
else if (time >= 14 && time <= 19) {
    console.log("Magasin ouvert")
}
else {
    console.log("Magasin fermé");
}

let Prénom = "Moi" 

console.log(`Je m'appelle ${Prénom}, bonjour!`)

const name = "moi"
let agee = 20

console.log(`Je m'apelle ${name} et j'ai ${agee} ans.`)

const code = "1234"

const userInput = prompt()

if (userInput === code) {
    // Me user a tapé le bon code
    console.log("Coffre ouvert");
}
else {
    // Le user s'est trompé de code
    console.log("Coffre fermé");
}

function sayHello() {
    console.log("Hello")
}
sayHello()
sayHello()
sayHello()
sayHello()

function addition(number1, number2) {
    return number1 + number2
}

const sum = (a, b) => {
    return a + b
}

const result = addition(10,20)
console.log(result)

const chiffre1 = 8
const chiffre2 = 12

console.log(addition(chiffre1,chiffre2))

let i = 0
while (i<10) {
    console.log(i)
    i++ // = i + 1
}

for(let i = 0; i < 10; i++) {
    console.log(i)
}

function operation (a,b, operationType) {
    if (operationType === "addition") {
        return a + b
    }

    else {
        return a - b
    }
}

const resultt = operation(10, 20, "addition")
console.log(resultt);

console.log(operation(15, 5, "soustraction"))

let fruits = ["pomme","poire","banane"]

fruits.forEach(function(fruit) {
    console.log(fruit)
})

console.log(fruits[0])

fruits[fruits.lenght-1]
fruits.push("orange")
fruits.pop()
fruits
fruits.splice(2,1)
fruits
fruits.forEach(function(LEFRUIT) {
    if (LEFRUIT === "banane") {
        return 
    }
    else {
        console.log(LEFRUIT)
    }})


let student = {
    name: "Nicolas",
    favoriteFood: "Salad",
    city: "Nantes",
}

console.log(student.name)
student.favoriteFood // On peut écrire comme ça dans la console pour avoir le résultat "Salad"
student.city

class Guerrier {
    constructor(attack,defense) {
        this.attack = attack;
        this.defense = defense;
    }

    getAttack() {
        console.log(this.attack);
    }
}

let Alexis = new Guerrier(10, 5);
Alexis.getAttack();

const mainTitle = document.querySelector("h1")
console.log (mainTitle);

const cards = document.querySelectorAll(".card")

console.log(cards)
cards.forEach(function(card) {
    card.querySelector("p").innerText = "CHOSE"
})

const image = document.querySelector("img")

image.alt = "Le logo de mon site"

console.log(image.alt);

//function sayHi() {
    //console.log("Hiiiii")
//}

image.addEventListener("click", function (){
    console.log("Hii");
    image.classList.toggle("border-yellow")
})

const form = document.querySelector("form")
const nameInput = document.querySelector("#name") // # = une ID
const nameError = document.querySelector("#name-error")

form.addEventListener("submit", function(event) {
    event.preventDefault()
    // console.log(event)
    // verifier si le contenu de l'input est vide
    // console.log(nameInput.value)
    if (nameInput.value === "") {
    //if (nameInput.value.lenght === 0) --> marche aussi
        //console.log("L'input est vide!")
        //Afficher un message d'erreur
        nameError.classList.remove("hidden")
    }
    else {
        nameError.classList.add("hidden")
    }
})