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
console.log("")

// Semana 2
// console.log(`    
//     ${player1.toUpperCase()}
//     ${age1}
//     ${retired1}
//     ${arrChampion1}
//     `)

// Semana 3
let objPlayer1 = {
    image: "./images/jordan.png",
    name: "Michael Jordan",
    age: 59,
    retired: true,
    nbaChampion: [1991, 1992, 1993, 1996, 1997, 1998],
    page: "https://www.basketball-reference.com/players/j/jordami01.html"
}

let objPlayer2 = {
    image: "./images/lebron.png",
    name: "LeBron James",
    age: 37,
    retired: false,
    nbaChampion: [2012, 2013, 2016, 2020],
    page: "https://www.basketball-reference.com/players/j/jamesle01.html"
}

let objPlayer3 = {
    image: "./images/kareem.png",
    name: "Kareem Abdul Jabbar",
    age: 75,
    retired: true,
    nbaChampion: [1971, 1980, 1982, 1985, 1987, 1988],
    page: "https://www.basketball-reference.com/players/a/abdulka01.html"
}

let objPlayer4 = {
    image: "./images/bird.png",
    name: "Larry Bird",
    age: 65,
    retired: true,
    nbaChampion: [1981, 1984, 1986],
    page: "https://www.basketball-reference.com/players/b/birdla01.html"
}

let objPlayer5 = {
    image: "./images/oneal.png",
    name: "Shaquille O'Neal",
    age: 50,
    retired: true,
    nbaChampion: [2000, 2001, 2002, 2006],
    page: "https://www.basketball-reference.com/players/o/onealsh01.html"
}

let objPlayer6 = {
    image: "./images/chamberlain.png",
    name: "Wilt Chamberlain",
    age: 63,
    retired: true,
    nbaChampion: [1967, 1972],
    page: "https://www.basketball-reference.com/players/c/chambwi01.html"
}

let objPlayer7 = {
    image: "./images/erving.png",
    name: "Julius Erving",
    age: 72,
    retired: true,
    nbaChampion: [1983],
    page: "https://www.basketball-reference.com/players/e/ervinju01.html"
}

let objPlayer8 = {
    image: "./images/johnson.png",
    name: "Magic Johnson",
    age: 63,
    retired: true,
    nbaChampion: [1980, 1982, 1985 , 1987, 1988],
    page: "https://www.basketball-reference.com/players/j/johnsma02.html"
}

let objPlayer9 = {
    image: "./images/irving.png",
    name: "Kyrie Irving",
    age: 30,
    retired: false,
    nbaChampion: [2016],
    page: "https://www.basketball-reference.com/players/i/irvinky01.html"
}

arrObjects = []

// arrObjects.push(objPlayer1, objPlayer2, objPlayer3, objPlayer4)
// console.log(arrObjects)

// Semana 4

// Sem usar função

if (objPlayer1.retired === true) {
    arrObjects.push(objPlayer1)
} else {
    alert(`${objPlayer1.name} não foi adicionado pois ainda não se aposentou`)
}

if (objPlayer2.retired === true) {
    arrObjects.push(objPlayer2)
} else {
    alert(`${objPlayer2.name} não foi adicionado pois ainda não se aposentou`)
}

if (objPlayer3.retired === true) {
    arrObjects.push(objPlayer3)
} else {
    alert(`${objPlayer3.name} não foi adicionado pois ainda não se aposentou`)
}

if (objPlayer4.retired === true) {
    arrObjects.push(objPlayer4)
} else {
    alert(`${objPlayer4.name} não foi adicionado pois ainda não se aposentou`)
}

if (objPlayer5.retired === true) {
    arrObjects.push(objPlayer5)
} else {
    alert(`${objPlayer5.name} não foi adicionado pois ainda não se aposentou`)
}

if (objPlayer6.retired === true) {
    arrObjects.push(objPlayer6)
} else {
    alert(`${objPlayer6.name} não foi adicionado pois ainda não se aposentou`)
}

if (objPlayer7.retired === true) {
    arrObjects.push(objPlayer7)
} else {
    alert(`${objPlayer7.name} não foi adicionado pois ainda não se aposentou`)
}

if (objPlayer8.retired === true) {
    arrObjects.push(objPlayer8)
} else {
    alert(`${objPlayer8.name} não foi adicionado pois ainda não se aposentou`)
}

if (objPlayer9.retired === true) {
    arrObjects.push(objPlayer9)
} else {
    alert(`${objPlayer9.name} não foi adicionado pois ainda não se aposentou`)
}

// Semana 5

// for (let i = 0; i < arrObjects.length; i++) {
//     let string = `
//         Nome: ${arrObjects[i].name.toUpperCase()}
//         Idade: ${arrObjects[i].age}
//         Aposentado: ${arrObjects[i].retired}
//         Títulos da NBA: ${arrObjects[i].nbaChampion}
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

const returnString = (obj) => {
    return `
        ${obj.name}
        ${obj.age}
        ${obj.retired}
        ${obj.nbaChampion}
    `
}

console.log(returnString(objPlayer1))


const returnObj = (arrayObj, string) => {
	const allPlayers = arrayObj.filter((player) => {
		const filterPlayer = player.name.toLowerCase().includes(string.toLowerCase())
		return filterPlayer
	})

	if(!allPlayers.length) {
		alert("Jogador não encontrado")
	} else {
		return allPlayers[0]
	}
}

// const objBird = returnObj(arrObjects, "Larry Bird")
// console.log(objBird)

// Semana 11

arrObjects.map((player) => {
    const infoList = document.createElement("section")
    const mainContainer = document.getElementById("main-page")

    mainContainer.insertAdjacentElement("beforeend", infoList)
    const listItem = document.createElement("ul")
    const imgPlayer = document.createElement("div")

    imgPlayer.setAttribute("id", "img-player")
    infoList.setAttribute("id", "section-main")
    listItem.setAttribute("id", "main-ul")

    infoList.appendChild(imgPlayer)
    infoList.appendChild(listItem)

    imgPlayer.innerHTML = `<img class="imgRes" src="${player.image}"/>`
    listItem.innerHTML = 
    `
        <li id="list-player">Nome: <a href="${player.page}" target="_blank">${player.name}</a></li>
        <li id="list-player">Idade: ${player.age}</li>
        <li id="list-player">Já se aposentou: ${player.retired ? "Sim" : "Não"}</li>
        <li id="list-player">Títulos da NBA: ${player.nbaChampion}</li>
    `
})

// Semana 12

const searchItem = () => {
    const item = document.getElementById("myInput").value.toUpperCase()
    const sectionMain = document.querySelectorAll("#section-main")
    const filteredPLayer = returnObj(arrObjects, item)

    if(item) {
        for(i = 0; i < sectionMain.length; i++) {
            let listPLayer = sectionMain[i].querySelector("#main-ul #list-player")

            if(filteredPLayer?.name) {
                if(listPLayer.innerHTML.toUpperCase().indexOf(item) > -1) {
                    sectionMain[i].style.display = ""
                } else {
                    sectionMain[i].style.display = "none"
                }
            }
        }
    } else {
        alert("Digite um nome no campo de busca")
    }
}


const refreshbtn = document.querySelector("#refresh")

const refresh = () => {
    location.reload()
}