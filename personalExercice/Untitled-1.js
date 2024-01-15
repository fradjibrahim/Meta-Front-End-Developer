// exercice with fucntional programming
////////////// il faut des execices ou on utilises des fonctions sans return avec return (done)
////////////// il faut des execices recursion (done)
////////////// il faut des execices faire des exercice de scope de fontion et de variable (done)
////////////// il faut des execices faire des exercice pour comprendre la diff entre var et let et const (done)


/* 
// declaration d'une fonction 
function printName(){
    console.log("hi my name is Ibrahim nice to meet you ")
}
// call the function
printName()



const namesSiblings = ['test','test2', 'test3', 'test4']
// je test si jej vais pouvoir afficher tout les siblings 
function isThelittle(names){
    var test = "on est entrain de tester la var"
    for(let i = 0; i<namesSiblings.length; i++) {
        console.log(namesSiblings[i])
    }   
}
isThelittle(namesSiblings)

let result = 0;
function recursionExample(r) {
    console.log(r)
    if (r < 10 ){
        r++
        recursionExample(r)
    }
    
}
recursionExample(result)

function factorielle(n){
    if(n === 0 || n === 1  ){
        
        return 1;
    } else {
        return factorielle(n-1)*n;
    }

}
console.log(factorielle(2))
*/

// exercice with OOP
////////////// il faut des execices creer des class js
////////////// appeler les class et les instancier en objet 
////////////// heritage  
////////////// polymorphisme  


class Livre {
    constructor(titre, auteur, anneePublication = new Date().getFullYear()) {
        this.titre = titre;
        this.auteur = auteur;
        this.anneePublication = anneePublication;
    }
}

class Utilisateur {
    // #test;
    constructor(nom, age) {
        this.nom = nom;
        this.age = age;
        this.livresEmpruntes = [];
    }

    test() {
        console.log('test')
    }
    emprunterLivre(livre) {
        this.livresEmpruntes.push(livre);
    }

}

class Employe extends Utilisateur {
    constructor(nom, idEmploye) {
        super(nom);
        this.idEmploye = idEmploye;
    }
}

// Création des instances et tests
let livre1 = new Livre("Le Petit Prince", "Antoine de Saint-Exupéry", 1943);
let livre2 = new Livre("1984", "George Orwell");

let utilisateur = new Utilisateur("Alice", 25);
let employe = new Employe("Bob","E123");

utilisateur.emprunterLivre(livre1);
employe.emprunterLivre(livre2);

console.log(utilisateur);
console.log(employe);


// exercice with advanced javascript features 
////////////// data structures 
////////////// spread et rest 

// destructuring 
let {titre} = livre1
console.log('on test le titre ', titre)

// faire une boucle sur les propriete de l'objet
for(let i of Object.keys(employe)) {
    console.log('objet', i)
  
}

for(let i in employe){
    console.log(`objet2, ${i}`)
}
Object.keys(employe).forEach(key => {
    utilisateur.test();
});

Object.keys(employe).filter(i =>{
    return i =='nom'
})

console.log(Object.keys(employe).filter(i =>{
    return i =='nom'
}))


let testArr = ["pomme", "poire", "fraise", "raisin"]

console.log(testArr)

const car1 = {
    speed: 200,
    color: 'yellow'
}
const car2 = {...car1}

car1.speed = 201

console.log(car1.speed, car2.speed)


let bestBoxers = new Map();
bestBoxers.set(1, "The Champion");
bestBoxers.set(2, "The Runner-up");
bestBoxers.set(3, "The third place");
bestBoxers.set(1, "Test");
console.log(bestBoxers);

class Animal {

}

class Dog extends Animal {
    constructor() {
        super();
        this.noise = "bark";
    }

    makeNoise() {
      return this.noise;
    }
}

class Wolf extends Dog {
    constructor() {
        super();
        this.noise = "growl";
    }
}

var result = new Wolf();
console.log(result.makeNoise());

const  [a, b]  =  [1,2,3,4]
console.log(b)