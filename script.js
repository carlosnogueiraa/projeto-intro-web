// Semana 1
const player1 = "Michael Jordan";
const age1 = 59;
const retired1 = true;
const arrChampion1 = [1991, 1992, 1993, 1996, 1997, 1998]

const player2 = "LeBron James";
const age2 = 37;
const retired2 = false;
const arrChampion2 = [2012, 2013, 2016, 2020]

const player3 = "Kareem Abdul Jabbar";
const age3 = 75;
const retired3 = true;
const arrChampion3 = [1971, 1980, 1982, 1985, 1987, 1988]

const media = (age1 + age2 + age3) / 3;
console.log(media);

const retired = retired1 && retired2 && retired3;
console.log(retired);

// Semana 2
// console.log(`    
//     ${player1.toUpperCase()}
//     ${age1}
//     ${retired1}
//     ${arrChampion1}
//     `)

// Semana 3
let objPlayer1 = {
    name: "Michael Jordan",
    age: 59,
    retired: true,
    NbaChampion: [1991, 1992, 1993, 1996, 1997, 1998]
}


let objPlayer2 = {
    name: "LeBron James",
    age: 37,
    retired: false,
    NbaChampion: [2012, 2013, 2016, 2020]
}

let objPlayer3 = {
    name: "Kareem Abdul Jabbar",
    age: 75,
    retired: true,
    NbaChampion: [1971, 1980, 1982, 1985, 1987, 1988]
}

let objPlayer4 = {
    name: "Larry Bird",
    age: 65,
    retired: true,
    NbaChampion: [1981, 1984, 1986]
}

arrObjects = []

// arrObjects.push(objPlayer1, objPlayer2, objPlayer3, objPlayer4)

// Semana 4
if (objPlayer1.retired === true) {
    arrObjects.push(objPlayer1)
} else {
    alert("O objeto 1 não foi adicionado")
}

if (objPlayer2.retired === true) {
    arrObjects.push(objPlayer2)
} else {
    alert("O objeto 2 não foi adicionado")
}

if (objPlayer3.retired === true) {
    arrObjects.push(objPlayer3)
} else {
    alert("O objeto 3 não foi adicionado")
}

if (objPlayer4.retired === true) {
    arrObjects.push(objPlayer4)
} else {
    alert("O objeto 4 não foi adicionado")
}

// Semana 5

// for (let i = 0; i < arrObjects.length; i++) {
//     let string = `
//         Nome: ${arrObjects[i].name.toUpperCase()}
//         Idade: ${arrObjects[i].age}
//         Aposentado: ${arrObjects[i].retired}
//         Títulos da NBA: ${arrObjects[i].NbaChampion}
//     `
//     console.log(string)
// }

for (obj of arrObjects) {
    for (prop in obj) {
        let report = `${prop}: ${obj[prop]}`
        console.log(report)
    }
    console.log("")

}

// Semana 6

const func1 = (obj) => {   
    return obj
}

console.log(func1(objPlayer1))




