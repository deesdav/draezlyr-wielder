//------------------------------------ audios
const audioButtonClick = document.getElementById("audioButtonClick");
const audioButtonClickMulti = document.getElementById("audioButtonClickMulti");
const audioLobbyBackground = document.getElementById("audioLobbyBackground");
const audioYouWin = document.getElementById("audioYouWin");
const audioYouLost = document.getElementById("audioYouLost");

const lobby = document.getElementById("lobby");
const loader = document.getElementById("loader");
const play = document.getElementById("play");
const story = document.getElementById("story");
const author = document.getElementById("author");
const storyinfo = document.getElementById("storyinfo");
const nextBtn = document.getElementById("nextBtn");
const storyPart = document.getElementById("storyPart");
const storyPartInput = document.getElementById("storyPartInput");
const yourName = document.getElementById("yourName");
const yourXPText = document.getElementById("yourXPText");
const yourHPText = document.getElementById("yourHPText");
const yourDamageText = document.getElementById("yourDamageText");
const sendInputBtn = document.getElementById("sendInputBtn");
const realtimepresented = document.getElementById("realtimepresented");
const planets = document.getElementById("planets");
const marvelPlanet = document.getElementById("marvelPlanet");
const dcPlanet = document.getElementById("dcPlanet");
const nameOfPlanet = document.getElementById("nameOfPlanet");
const nameOfPlanetDC = document.getElementById("nameOfPlanetDC");
const headline = document.getElementById("headline");
const backBtn = document.getElementById("backBtn");
const shopBtn = document.getElementById("shopBtn");
const infoBtn = document.getElementById("infoBtn");
const infoBox = document.getElementById("infoBox");
const shop = document.getElementById("shop");
const upgradeDamage = document.getElementById("upgradeDamage");
const upgradeHealth = document.getElementById("upgradeHealth");
const DamageInfo = document.getElementById("DamageInfo");
const HealthInfo = document.getElementById("HealthInfo");
const redColor = document.getElementById("redColor");
const greenColor = document.getElementById("greenColor");
const blueColor = document.getElementById("blueColor");
const yellowColor = document.getElementById("yellowColor");
const costOfColors = document.getElementById("costOfColors");
const costOfUps = document.getElementById("costOfUps");
const backBtnShop = document.getElementById("backBtnShop");
const overview = document.getElementById("overview");
const overviewSrc = document.getElementById("overviewSrc");
const winAndLoss = document.getElementById("winAndLoss");
const winsCounter = document.getElementById("winsCounter");
const lossesCounter = document.getElementById("lossesCounter");
const levelsBox = document.getElementById("levelsBox");


const levelsText = document.getElementById("levelsText");
const gridOfLevels = document.getElementById("gridOfLevels");
const levelONE = document.getElementById("levelONE");
const levelTWO = document.getElementById("levelTWO");
const levelTHREE = document.getElementById("levelTHREE");
const levelFOUR = document.getElementById("levelFOUR");
const levelFIVE = document.getElementById("levelFIVE");
const levelSIX = document.getElementById("levelSIX");
const levelSEVEN = document.getElementById("levelSEVEN");
const levelEIGHT = document.getElementById("levelEIGHT");
const levelNINE = document.getElementById("levelNINE");
const levelTEN = document.getElementById("levelTEN");
const levelELEVEN = document.getElementById("levelELEVEN");
const levelTWELVE = document.getElementById("levelTWELVE");
const levelTHIRTEEN = document.getElementById("levelTHIRTEEN");
const levelFOURTEEN = document.getElementById("levelFOURTEEN");
const levelFIFTEEN = document.getElementById("levelFIFTEEN");

const backBtnDC = document.getElementById("backBtnDC");
const gridOfLevelsDC = document.getElementById("gridOfLevelsDC");
const dcLevelONE = document.getElementById("dcLevelONE");
const dcLevelTWO = document.getElementById("dcLevelTWO");
const dcLevelTHREE = document.getElementById("dcLevelTHREE");
const dcLevelFOUR = document.getElementById("dcLevelFOUR");
const dcLevelFIVE = document.getElementById("dcLevelFIVE");
const dcLevelSIX = document.getElementById("dcLevelSIX");
const dcLevelSEVEN = document.getElementById("dcLevelSEVEN");
const dcLevelEIGHT = document.getElementById("dcLevelEIGHT");
const dcLevelNINE = document.getElementById("dcLevelNINE");
const dcLevelTEN = document.getElementById("dcLevelTEN");
const dcLevelELEVEN = document.getElementById("dcLevelELEVEN");
const dcLevelTWELVE = document.getElementById("dcLevelTWELVE");
const dcLevelTHIRTEEN = document.getElementById("dcLevelTHIRTEEN");
const dcLevelFOURTEEN = document.getElementById("dcLevelFOURTEEN");
const dcLevelFIFTEEN = document.getElementById("dcLevelFIFTEEN");


const storyrecap = document.getElementById("storyrecap");
const game = document.getElementById("game");
const heroIdle = document.getElementById("heroIdle");
const heroAttack = document.getElementById("heroAttack");
const enemy = document.getElementById("enemy");
const yourHp = document.getElementById("yourHp");
const enemyHp = document.getElementById("enemyHp");
const gameResult = document.getElementById("gameResult");
const levelInfo = document.getElementById("levelInfo");
const enemyName = document.getElementById("enemyName");
const yourXP = document.getElementById("yourXP");

const deesdavPlanet = document.getElementById("deesdavPlanet");
const nameOfPlanetDeesdav = document.getElementById("nameOfPlanetDeesdav");
const dot = document.getElementById("dot");
const deesdavDimension = document.getElementById("deesdavDimension");
const countDownText = document.getElementById("countDownText");
const countDown = document.getElementById("countDown");


//------------------------------------ img dragging
const elements = [marvelPlanet, deesdavPlanet, dcPlanet, enemy, heroIdle, heroAttack];

for (let i = 0; i < elements.length; i++) {
    elements[i].ondragstart = function () {
        return false;
    };
}

//------------------------------------ btns onmouseover and onmouseout
const btnsOnMouseOverAndOut = [shopBtn, backBtn, backBtnShop, infoBtn, backBtnDC];

for (let i = 0; i < btnsOnMouseOverAndOut.length; i++) {
    btnsOnMouseOverAndOut[i].onmouseover = () => {
        btnsOnMouseOverAndOut[i].style.backgroundColor = "white";
        btnsOnMouseOverAndOut[i].style.color = "black";
        btnsOnMouseOverAndOut[i].style.boxShadow = "0 0 100px white";
    }
}

for (let i = 0; i < btnsOnMouseOverAndOut.length; i++) {
    btnsOnMouseOverAndOut[i].onmouseout = () => {
        btnsOnMouseOverAndOut[i].style.backgroundColor = "transparent";
        btnsOnMouseOverAndOut[i].style.color = "white";
        btnsOnMouseOverAndOut[i].style.boxShadow = "0 0 0px white";
    }

}

//------------------------------------ dynamic title
const dynamicTitleElements = [play, story, author, marvelPlanet, dcPlanet, deesdavPlanet, backBtn,
    backBtnDC, backBtnShop, shopBtn, infoBtn, nextBtn, sendInputBtn];
const dynamicValues = ["PLAY", "STORY RECAP", "AUTHOR", "MARVEL PLANET", "DC PLANET", "DEESDAV PLANET",
    "BACK", "BACK", "BACK", "SHOP", "INFO", "NEXT", "SEND"];
const dynamicTitleDefault = "DRAEZLYR WIELDER";

for (let i = 0; i < dynamicTitleElements.length; i++) {
    dynamicTitleElements[i].addEventListener('mouseover', () => {
        document.title = dynamicValues[i];
    });

    dynamicTitleElements[i].addEventListener('mouseout', () => {
        document.title = dynamicTitleDefault;
    });
}



//------------------------------------ date
const realtime = new Date();
const hours = realtime.getHours();
console.log(hours);


//------------------------------------ respon
const responsivityForPhones = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
if (responsivityForPhones == true) {
    document.body.style.zoom = "60%";
    document.body.style.position = "relative";
    document.body.style.top = "20%";
    game.style.transform = "scale(0.9)";
    game.style.top = "75px";
    game.style.width = "auto";
    game.style.height = "90%";
    game.style.backgroundSize = "cover";
    headline.style.textAlign = "center";
    storyPartInput.style.marginRight = "50px";
    document.addEventListener('touchstart', function (t) {
        t.preventDefault();
    });
}

if (hours >= 0 && hours < 12) {
    realtimepresented.innerText = `Good morning`;
} else if (hours >= 12 && hours <= 16) {
    realtimepresented.innerText = `Good afternoon`;
} else {
    realtimepresented.innerText = `Good evening`;
}

//------------------------------------ info button
infoBtn.onclick = () => {
    audioButtonClick.src = "./res/audio/buttonsound.mp3";
    audioButtonClick.play();
    infoBox.style.display = "block";
}
infoBox.onclick = () => {
    audioButtonClick.src = "./res/audio/buttonsound.mp3";
    audioButtonClick.play();
    infoBox.style.display = "none";
}

headline.onmouseover = () => {
    audioLobbyBackground.src = "./res/audio/lobbymusic.mp3";
    audioLobbyBackground.play();
    document.body.style.backgroundImage = "none";
    document.body.style.color = "red";
    headline.style.transform = "scale(1.9)";
    headline.style.paddingTop = "50px";
}
headline.onmouseout = () => {
    audioLobbyBackground.pause();
    audioLobbyBackground.currentTime = 0;
    document.body.style.backgroundImage = "url(./res/img/lobbyBackground.png)";
    document.body.style.color = "black";
    headline.style.transform = "none";
    headline.style.paddingTop = "0px";
}
//------------------------------------ lobby buttons

story.onclick = () => {
    audioButtonClick.src = "./res/audio/buttonsound.mp3";
    audioButtonClick.play();
    storyrecap.style.display = "block";
    lobby.style.display = "none";

}
storyrecap.onclick = () => {
    audioButtonClick.src = "./res/audio/buttonsound.mp3";
    audioButtonClick.play();
    storyrecap.style.display = "none";
    lobby.style.display = "flex";

}
author.onclick = () => {
    audioButtonClick.src = "./res/audio/buttonsound.mp3";
    audioButtonClick.play();
}

play.onclick = () => {
    audioButtonClick.src = "./res/audio/buttonsound.mp3";
    audioButtonClickMulti.src = "./res/audio/loadingtheme.mp3";
    audioButtonClickMulti.play();
    audioButtonClick.play();
    document.body.style.backgroundImage = "url(./res/img/multiverse.png)";
    document.body.style.bakcgroundColor = "rgba(0, 0, 0, 0.727)";
    document.body.style.cursor = "none";
    play.style.display = "none";
    story.style.display = "none";
    author.style.display = "none";
    lobby.style.display = "none";
    loader.style.display = "block";
    sendInputBtn.style.display = "none";
    realtimepresented.style.display = "none";

    planets.style.top = "250px";
    const playInterval = setTimeout(() => {
        planets.style.display = "none";
        document.body.style.cursor = "default";
        loader.style.display = "none";
        audioButtonClickMulti.pause();
        document.body.style.bakcgroundColor = "black";
        audioButtonClickMulti.currentTime = 0;
        storyinfo.style.display = "flex";
    }, 7000);
    if (storyinfo.style.display == "flex") {
        clearTimeout(playInterval)
    }

}

//------------------------------------ brief info and entering your name or not

nextBtn.onclick = () => {
    audioButtonClick.src = "./res/audio/buttonsound.mp3";
    audioButtonClick.play();
    storyPart.innerText = `You've also lost your mind so you don't know your name so enter your own`;
    const nameValue = storyPartInput.value;
    const defaultName = "Draezlyr Wielder";
    if (nameValue == "") {
        yourName.innerText = `Your name: ${defaultName}`;
    } else {
        yourName.innerText = `Your name: ${nameValue}`;
    }
    nextBtn.style.display = "none";
    if (storyPart.innerText == `You've also lost your mind so you don't know your name so enter your own`) {
        const nextBtnInterval = setTimeout(() => {
            storyPart.innerText = "";
            storyPartInput.style.display = "block";
            sendInputBtn.style.display = "block";
        }, 5000);
    }
    if (storyPartInput.style.display == "block") {
        clearTimeout(nextBtnInterval)
    }
}
sendInputBtn.onclick = () => {
    audioButtonClick.src = "./res/audio/buttonsound.mp3";
    audioButtonClick.play();
    const nameValue = storyPartInput.value;
    const defaultName = "Draezlyr Wielder";
    if (nameValue == "") {
        yourName.innerText = `Your name: ${defaultName}`;
    } else {
        yourName.innerText = `Your name: ${nameValue}`;
    }
    yourName.style.display = "block";
    yourXPText.style.display = "block";
    yourHPText.style.display = "block";
    yourDamageText.style.display = "block";
    storyinfo.style.display = "none";
    storyPart.style.display = "none";
    storyPartInput.style.display = "none";
    sendInputBtn.style.display = "none";
    planets.style.display = "flex";
    shopBtn.style.display = "block";
    winAndLoss.style.display = "block";
    document.body.style.backgroundImage = "none";
    infoBtn.style.display = "block";
}

//------------------------------------ fast refresh page function and secret
document.addEventListener("keyup", (e) => {
    console.log(e);
    switch (e.key) {
        case ("Escape"):
            window.location.reload();
            break;
        case ("7", "7", "7", "8"):
            heroIdle.src = "./res/img/secret.hero.idle.png";
            heroAttack.src = "./res/img/secret.hero.attack.png";
            break;
        case ("o", "g"):
            heroIdle.src = "./res/img/hero.idle.png";
            heroAttack.src = "./res/img/hero.attack.png";
            break;
        default:
            console.log("you type something wrong");
            break;
    }
});

let marvelPlanetClick = false;
let dcPlanetClick = false;

//------------------------------------ marvel planet
marvelPlanet.onmouseover = () => {
    document.body.style.boxShadow = "0 0 999px red inset";
}
marvelPlanet.onmouseout = () => {
    document.body.style.boxShadow = "0 0 0px red inset";
}
marvelPlanet.onclick = () => {
    marvelPlanetClick = true;
    console.log("MARVEL PLANET");
    audioButtonClick.src = "./res/audio/buttonsound.mp3";
    audioButtonClick.play();
    levelsText.style.display = "block";
    levelInfo.style.display = "block";
    gridOfLevels.style.display = "grid";
    gridOfLevelsDC.style.display = "none";
    levelONE.style.display = "block";
    marvelPlanet.style.display = "none";
    nameOfPlanet.style.display = "none";
    dcPlanet.style.display = "none";
    nameOfPlanetDC.style.display = "none";
    deesdavPlanet.style.display = "none";
    nameOfPlanetDeesdav.style.display = "none";
    document.body.style.backgroundColor = "red";
    storyPartInput.style.display = "none";
    backBtn.style.display = "block";
    backBtn.enable = true;
    shopBtn.style.display = "none";
    infoBtn.style.display = "none";

}

//------------------------------------ dc planet
dcPlanet.onmouseover = () => {
    document.body.style.boxShadow = "0 0 999px blue inset";
}
dcPlanet.onmouseout = () => {
    document.body.style.boxShadow = "0 0 0px blue inset";
}
dcPlanet.onclick = () => {
    dcPlanetClick = true;
    console.log("DC PLANET");
    audioButtonClick.src = "./res/audio/buttonsound.mp3";
    audioButtonClick.play();
    levelsText.style.display = "block";
    levelInfo.style.display = "block";
    gridOfLevels.style.display = "none";
    gridOfLevelsDC.style.display = "grid";
    dcLevelONE.style.display = "block";
    marvelPlanet.style.display = "none";
    nameOfPlanet.style.display = "none";
    dcPlanet.style.display = "none";
    nameOfPlanetDC.style.display = "none";
    deesdavPlanet.style.display = "none";
    nameOfPlanetDeesdav.style.display = "none";
    document.body.style.backgroundColor = "blue";
    storyPartInput.style.display = "none";
    backBtn.style.display = "none";
    backBtnDC.style.display = "block";
    shopBtn.style.display = "none";
    winAndLoss.style.display = "block";
    infoBtn.style.display = "none";

}



//------------------------------------ back button to planets
backBtn.onclick = () => {
    audioButtonClick.src = "./res/audio/buttonsound.mp3";
    audioButtonClick.play();
    levelsText.style.display = "none";
    levelInfo.style.display = "none";
    gridOfLevels.style.display = "none";
    gridOfLevelsDC.style.display = "none";
    levelONE.style.display = "none";
    marvelPlanet.style.display = "block";
    nameOfPlanet.style.display = "block";
    document.body.style.backgroundColor = "black";
    backBtn.style.display = "none";
    backBtnDC.style.display = "none";
    shopBtn.style.display = "block";
    infoBtn.style.display = "block";
    if (levelFIFTEENCompleted) {
        shopBtn.style.display = "none";
        deesdavPlanet.style.display = "block";
        nameOfPlanetDeesdav.style.display = "block";
    }
}

backBtnDC.onclick = () => {
    marvelPlanet.disable = true;
    audioButtonClick.src = "./res/audio/buttonsound.mp3";
    audioButtonClick.play();
    levelsText.style.display = "none";
    levelInfo.style.display = "none";
    gridOfLevels.style.display = "none";
    gridOfLevelsDC.style.display = "none";
    levelONE.style.display = "none";
    marvelPlanet.style.display = "block";
    nameOfPlanet.style.display = "block";
    document.body.style.backgroundColor = "black";
    backBtn.style.display = "none";
    backBtnDC.style.display = "none";
    shopBtn.style.display = "block";
    infoBtn.style.display = "block";
    deesdavDimensionCompleted = true;

    if (deesdavDimensionCompleted) {
        shopBtn.style.display = "block";
        infoBtn.style.display = "block";
        deesdavDimension.style.display = "none";
        deesdavPlanet.style.display = "none";
        nameOfPlanetDeesdav.style.display = "none";
        dcPlanet.style.display = "block";
        nameOfPlanetDC.style.display = "block";
        dcPlanetClick = true;
        backBtn.style.display = "none";
        marvelPlanet.style.display = "none";
        nameOfPlanet.style.display = "none";
    }
}
//------------------------------------ shop button, shop system, upgrades 
let yourDamage = 1;
let yourHpValue = 20;
let yourXPValue = 0;
let yourXPIncrease = 2;
let dotXP = 5;
let upgradeDamageValue = 4;
let upgradeHealthValue = 2;


shopBtn.onclick = () => {
    audioButtonClick.src = "./res/audio/buttonsound.mp3";
    audioButtonClick.play();
    shopBtn.style.display = "none";
    shop.style.display = "flex";
    backBtnShop.style.display = "block";
    backBtnShop.style.zIndex = "999";
}
//------------------------------------ merchant upgrades 
DamageInfo.style.color = "orange";
DamageInfo.style.textShadow = "1px 1px 2px black";
DamageInfo.style.fontWeight = "bold";
HealthInfo.style.color = "rgb(0,255,0)";
HealthInfo.style.textShadow = "1px 1px 2px black";
HealthInfo.style.fontWeight = "bold";

upgradeDamage.onclick = () => {
    if (yourXP.innerText >= upgradeDamageValue) {
        upgradeDamage.disable = false;
        audioButtonClick.src = "./res/audio/buttonsound.mp3";
        audioButtonClick.play();
        yourXPValue -= upgradeDamageValue;
        yourXP.innerText = yourXPValue;
        yourDamage++;
        DamageInfo.innerText = yourDamage;
    } else {
        upgradeDamage.disable = true;
    }
}
upgradeHealth.onclick = () => {
    if (yourXP.innerText >= upgradeHealthValue) {
        upgradeDamage.disable = false;
        audioButtonClick.src = "./res/audio/buttonsound.mp3";
        audioButtonClick.play();
        yourXPValue -= upgradeHealthValue;
        yourXP.innerText = yourXPValue;
        yourHpValue += 5;
        HealthInfo.innerText = yourHpValue;
    } else {
        upgradeHealth.disable = true;
    }
}
//------------------------------------ customization upgrades
let redColorOwned = false;
let greenColorOwned = false;
let blueColorOwned = false;
let yellowColorOwned = false;
let redColorValue = 5;
redColor.onclick = () => {
    if (yourXP.innerText >= redColorValue) {
        redColor.style.display = "none";
        redColor.disable = false;
        audioButtonClick.src = "./res/audio/buttonsound.mp3";
        audioButtonClick.play();
        heroIdle.src = "./res/img/red.hero.idle.png";
        heroAttack.src = "./res/img/red.hero.attack.png";
        yourXPValue -= redColorValue;
        yourXP.innerText = yourXPValue;
        redColorOwned = true;
    } else {
        redColor.disable = true;
        redColorOwned = false;
    }
    if (redColorOwned == true) {
        document.addEventListener("keyup", (e) => {
            console.log(e);
            switch (e.key) {
                case ("7", "7", "7", "8"):
                    heroIdle.src = "./res/img/secret.hero.idle.png";
                    heroAttack.src = "./res/img/secret.hero.attack.png";
                    break;
                case ("r", "e", "d"):
                    heroIdle.src = "./res/img/red.hero.idle.png";
                    heroAttack.src = "./res/img/red.hero.attack.png";
                    break;
                case ("o", "g"):
                    heroIdle.src = "./res/img/hero.idle.png";
                    heroAttack.src = "./res/img/hero.attack.png";
                    break;
            }
        });
    }
    if (redColorOwned == true && greenColorOwned == true && blueColorOwned == true && yellowColorOwned == true) {
        document.addEventListener("keyup", (e) => {
            console.log(e);
            switch (e.key) {
                case ("7", "7", "7", "8"):
                    heroIdle.src = "./res/img/secret.hero.idle.png";
                    heroAttack.src = "./res/img/secret.hero.attack.png";
                    break;
                case ("r", "e", "d"):
                    heroIdle.src = "./res/img/red.hero.idle.png";
                    heroAttack.src = "./res/img/red.hero.attack.png";
                    break;
                case ("g", "r", "e", "e", "n"):
                    heroIdle.src = "./res/img/green.hero.idle.png";
                    heroAttack.src = "./res/img/green.hero.attack.png";
                    break;
                case ("b", "l", "u", "e"):
                    heroIdle.src = "./res/img/blue.hero.idle.png";
                    heroAttack.src = "./res/img/blue.hero.attack.png";
                    break;
                case ("y", "e", "l", "l", "o", "w"):
                    heroIdle.src = "./res/img/yellow.hero.idle.png";
                    heroAttack.src = "./res/img/yellow.hero.attack.png";
                    break;
                case ("o", "g"):
                    heroIdle.src = "./res/img/hero.idle.png";
                    heroAttack.src = "./res/img/hero.attack.png";
                    break;
            }
        });
    } else if (redColorOwned == true && greenColorOwned == true && blueColorOwned == false && yellowColorOwned == false) {
        document.addEventListener("keyup", (e) => {
            console.log(e);
            switch (e.key) {
                case ("7", "7", "7", "8"):
                    heroIdle.src = "./res/img/secret.hero.idle.png";
                    heroAttack.src = "./res/img/secret.hero.attack.png";
                    break;
                case ("r", "e", "d"):
                    heroIdle.src = "./res/img/red.hero.idle.png";
                    heroAttack.src = "./res/img/red.hero.attack.png";
                    break;
                case ("g", "r", "e", "e", "n"):
                    heroIdle.src = "./res/img/green.hero.idle.png";
                    heroAttack.src = "./res/img/green.hero.attack.png";
                    break;
                case ("o", "g"):
                    heroIdle.src = "./res/img/hero.idle.png";
                    heroAttack.src = "./res/img/hero.attack.png";
                    break;
            }
        });
    } else if (redColorOwned == true && greenColorOwned == true && blueColorOwned == true && yellowColorOwned == false) {
        document.addEventListener("keyup", (e) => {
            console.log(e);
            switch (e.key) {
                case ("7", "7", "7", "8"):
                    heroIdle.src = "./res/img/secret.hero.idle.png";
                    heroAttack.src = "./res/img/secret.hero.attack.png";
                    break;
                case ("r", "e", "d"):
                    heroIdle.src = "./res/img/red.hero.idle.png";
                    heroAttack.src = "./res/img/red.hero.attack.png";
                    break;
                case ("g", "r", "e", "e", "n"):
                    heroIdle.src = "./res/img/green.hero.idle.png";
                    heroAttack.src = "./res/img/green.hero.attack.png";
                    break;
                case ("b", "l", "u", "e"):
                    heroIdle.src = "./res/img/blue.hero.idle.png";
                    heroAttack.src = "./res/img/blue.hero.attack.png";
                    break;
                case ("o", "g"):
                    heroIdle.src = "./res/img/hero.idle.png";
                    heroAttack.src = "./res/img/hero.attack.png";
                    break;
            }
        });
    } else if (redColorOwned == true && greenColorOwned == false && blueColorOwned == true && yellowColorOwned == false) {
        document.addEventListener("keyup", (e) => {
            console.log(e);
            switch (e.key) {
                case ("7", "7", "7", "8"):
                    heroIdle.src = "./res/img/secret.hero.idle.png";
                    heroAttack.src = "./res/img/secret.hero.attack.png";
                    break;
                case ("r", "e", "d"):
                    heroIdle.src = "./res/img/red.hero.idle.png";
                    heroAttack.src = "./res/img/red.hero.attack.png";
                    break;
                case ("b", "l", "u", "e"):
                    heroIdle.src = "./res/img/blue.hero.idle.png";
                    heroAttack.src = "./res/img/blue.hero.attack.png";
                    break;
                case ("o", "g"):
                    heroIdle.src = "./res/img/hero.idle.png";
                    heroAttack.src = "./res/img/hero.attack.png";
                    break;
            }
        });
    } else if (redColorOwned == true && greenColorOwned == false && blueColorOwned == true && yellowColorOwned == true) {
        document.addEventListener("keyup", (e) => {
            console.log(e);
            switch (e.key) {
                case ("7", "7", "7", "8"):
                    heroIdle.src = "./res/img/secret.hero.idle.png";
                    heroAttack.src = "./res/img/secret.hero.attack.png";
                    break;
                case ("r", "e", "d"):
                    heroIdle.src = "./res/img/red.hero.idle.png";
                    heroAttack.src = "./res/img/red.hero.attack.png";
                    break;
                case ("b", "l", "u", "e"):
                    heroIdle.src = "./res/img/blue.hero.idle.png";
                    heroAttack.src = "./res/img/blue.hero.attack.png";
                    break;
                case ("y", "e", "l", "l", "o", "w"):
                    heroIdle.src = "./res/img/yellow.hero.idle.png";
                    heroAttack.src = "./res/img/yellow.hero.attack.png";
                    break;
                case ("o", "g"):
                    heroIdle.src = "./res/img/hero.idle.png";
                    heroAttack.src = "./res/img/hero.attack.png";
                    break;
            }
        });
    } else if (redColorOwned == true && greenColorOwned == true && blueColorOwned == false && yellowColorOwned == true) {
        document.addEventListener("keyup", (e) => {
            console.log(e);
            switch (e.key) {
                case ("7", "7", "7", "8"):
                    heroIdle.src = "./res/img/secret.hero.idle.png";
                    heroAttack.src = "./res/img/secret.hero.attack.png";
                    break;
                case ("r", "e", "d"):
                    heroIdle.src = "./res/img/red.hero.idle.png";
                    heroAttack.src = "./res/img/red.hero.attack.png";
                    break;
                case ("g", "r", "e", "e", "n"):
                    heroIdle.src = "./res/img/green.hero.idle.png";
                    heroAttack.src = "./res/img/green.hero.attack.png";
                    break;
                case ("y", "e", "l", "l", "o", "w"):
                    heroIdle.src = "./res/img/yellow.hero.idle.png";
                    heroAttack.src = "./res/img/yellow.hero.attack.png";
                    break;
                case ("o", "g"):
                    heroIdle.src = "./res/img/hero.idle.png";
                    heroAttack.src = "./res/img/hero.attack.png";
                    break;
            }
        });
    } else if (redColorOwned == true && greenColorOwned == false && blueColorOwned == false && yellowColorOwned == true) {
        document.addEventListener("keyup", (e) => {
            console.log(e);
            switch (e.key) {
                case ("7", "7", "7", "8"):
                    heroIdle.src = "./res/img/secret.hero.idle.png";
                    heroAttack.src = "./res/img/secret.hero.attack.png";
                    break;
                case ("r", "e", "d"):
                    heroIdle.src = "./res/img/red.hero.idle.png";
                    heroAttack.src = "./res/img/red.hero.attack.png";
                    break;
                case ("y", "e", "l", "l", "o", "w"):
                    heroIdle.src = "./res/img/yellow.hero.idle.png";
                    heroAttack.src = "./res/img/yellow.hero.attack.png";
                    break;
                case ("o", "g"):
                    heroIdle.src = "./res/img/hero.idle.png";
                    heroAttack.src = "./res/img/hero.attack.png";
                    break;
            }
        });
    }
    /*
        redColorOwned == true && greenColorOwned == true && blueColorOwned == true && yellowColorOwned == true y
        redColorOwned == true && greenColorOwned == true && blueColorOwned == false && yellowColorOwned == false y
        redColorOwned == true && greenColorOwned == true && blueColorOwned == true && yellowColorOwned == false y
        redColorOwned == true && greenColorOwned == false && blueColorOwned == true && yellowColorOwned == false y
        redColorOwned == true && greenColorOwned == false && blueColorOwned == true && yellowColorOwned == true y
        redColorOwned == true && greenColorOwned == true && blueColorOwned == false && yellowColorOwned == true y
        redColorOwned == true && greenColorOwned == false && blueColorOwned == false && yellowColorOwned == true y
     */
    /*
            document.addEventListener("keyup", (e) => {
            console.log(e);
            switch (e.key) {
                case ("7", "7", "7", "8"):
                    heroIdle.src = "./res/img/secret.hero.idle.png";
                    heroAttack.src = "./res/img/secret.hero.attack.png";
                    break;
                case ("r", "e", "d"):
                    heroIdle.src = "./res/img/red.hero.idle.png";
                    heroAttack.src = "./res/img/red.hero.attack.png";
                    break;
                case ("g", "r", "e", "e", "n"):
                    heroIdle.src = "./res/img/green.hero.idle.png";
                    heroAttack.src = "./res/img/green.hero.attack.png";
                    break;
                case ("b", "l", "u", "e"):
                    heroIdle.src = "./res/img/blue.hero.idle.png";
                    heroAttack.src = "./res/img/blue.hero.attack.png";
                    break;
                case ("y", "e", "l", "l", "o", "w"):
                    heroIdle.src = "./res/img/yellow.hero.idle.png";
                    heroAttack.src = "./res/img/yellow.hero.attack.png";
                    break;
            }
        });
        */
}
let greenColorValue = 7;
greenColor.onclick = () => {
    if (yourXP.innerText >= greenColorValue) {
        greenColor.style.display = "none";
        greenColor.disable = false;
        audioButtonClick.src = "./res/audio/buttonsound.mp3";
        audioButtonClick.play();
        heroIdle.src = "./res/img/green.hero.idle.png";
        heroAttack.src = "./res/img/green.hero.attack.png";
        yourXPValue -= greenColorValue;
        yourXP.innerText = yourXPValue;
        greenColorOwned = true;
    } else {
        greenColor.disable = true;
        greenColorOwned = false;
    }
    if (greenColorOwned == true) {
        document.addEventListener("keyup", (e) => {
            console.log(e);
            switch (e.key) {
                case ("7", "7", "7", "8"):
                    heroIdle.src = "./res/img/secret.hero.idle.png";
                    heroAttack.src = "./res/img/secret.hero.attack.png";
                    break;
                case ("g", "r", "e", "e", "n"):
                    heroIdle.src = "./res/img/green.hero.idle.png";
                    heroAttack.src = "./res/img/green.hero.attack.png";
                    break;
                case ("o", "g"):
                    heroIdle.src = "./res/img/hero.idle.png";
                    heroAttack.src = "./res/img/hero.attack.png";
                    break;
            }
        });
    }
    if (redColorOwned == true && greenColorOwned == true && blueColorOwned == true && yellowColorOwned == true) {
        document.addEventListener("keyup", (e) => {
            console.log(e);
            switch (e.key) {
                case ("7", "7", "7", "8"):
                    heroIdle.src = "./res/img/secret.hero.idle.png";
                    heroAttack.src = "./res/img/secret.hero.attack.png";
                    break;
                case ("r", "e", "d"):
                    heroIdle.src = "./res/img/red.hero.idle.png";
                    heroAttack.src = "./res/img/red.hero.attack.png";
                    break;
                case ("g", "r", "e", "e", "n"):
                    heroIdle.src = "./res/img/green.hero.idle.png";
                    heroAttack.src = "./res/img/green.hero.attack.png";
                    break;
                case ("b", "l", "u", "e"):
                    heroIdle.src = "./res/img/blue.hero.idle.png";
                    heroAttack.src = "./res/img/blue.hero.attack.png";
                    break;
                case ("y", "e", "l", "l", "o", "w"):
                    heroIdle.src = "./res/img/yellow.hero.idle.png";
                    heroAttack.src = "./res/img/yellow.hero.attack.png";
                    break;
                case ("o", "g"):
                    heroIdle.src = "./res/img/hero.idle.png";
                    heroAttack.src = "./res/img/hero.attack.png";
                    break;
            }
        });
    } else if (redColorOwned == true && greenColorOwned == true && blueColorOwned == false && yellowColorOwned == false) {
        document.addEventListener("keyup", (e) => {
            console.log(e);
            switch (e.key) {
                case ("7", "7", "7", "8"):
                    heroIdle.src = "./res/img/secret.hero.idle.png";
                    heroAttack.src = "./res/img/secret.hero.attack.png";
                    break;
                case ("r", "e", "d"):
                    heroIdle.src = "./res/img/red.hero.idle.png";
                    heroAttack.src = "./res/img/red.hero.attack.png";
                    break;
                case ("g", "r", "e", "e", "n"):
                    heroIdle.src = "./res/img/green.hero.idle.png";
                    heroAttack.src = "./res/img/green.hero.attack.png";
                    break;
                case ("o", "g"):
                    heroIdle.src = "./res/img/hero.idle.png";
                    heroAttack.src = "./res/img/hero.attack.png";
                    break;
            }
        });
    } else if (redColorOwned == true && greenColorOwned == true && blueColorOwned == true && yellowColorOwned == false) {
        document.addEventListener("keyup", (e) => {
            console.log(e);
            switch (e.key) {
                case ("7", "7", "7", "8"):
                    heroIdle.src = "./res/img/secret.hero.idle.png";
                    heroAttack.src = "./res/img/secret.hero.attack.png";
                    break;
                case ("r", "e", "d"):
                    heroIdle.src = "./res/img/red.hero.idle.png";
                    heroAttack.src = "./res/img/red.hero.attack.png";
                    break;
                case ("g", "r", "e", "e", "n"):
                    heroIdle.src = "./res/img/green.hero.idle.png";
                    heroAttack.src = "./res/img/green.hero.attack.png";
                    break;
                case ("b", "l", "u", "e"):
                    heroIdle.src = "./res/img/blue.hero.idle.png";
                    heroAttack.src = "./res/img/blue.hero.attack.png";
                    break;
                case ("o", "g"):
                    heroIdle.src = "./res/img/hero.idle.png";
                    heroAttack.src = "./res/img/hero.attack.png";
                    break;

            }
        });
    } else if (redColorOwned == false && greenColorOwned == true && blueColorOwned == true && yellowColorOwned == false) {
        document.addEventListener("keyup", (e) => {
            console.log(e);
            switch (e.key) {
                case ("7", "7", "7", "8"):
                    heroIdle.src = "./res/img/secret.hero.idle.png";
                    heroAttack.src = "./res/img/secret.hero.attack.png";
                    break;

                case ("g", "r", "e", "e", "n"):
                    heroIdle.src = "./res/img/green.hero.idle.png";
                    heroAttack.src = "./res/img/green.hero.attack.png";
                    break;
                case ("b", "l", "u", "e"):
                    heroIdle.src = "./res/img/blue.hero.idle.png";
                    heroAttack.src = "./res/img/blue.hero.attack.png";
                    break;
                case ("o", "g"):
                    heroIdle.src = "./res/img/hero.idle.png";
                    heroAttack.src = "./res/img/hero.attack.png";
                    break;

            }
        });
    } else if (redColorOwned == false && greenColorOwned == true && blueColorOwned == true && yellowColorOwned == true) {
        document.addEventListener("keyup", (e) => {
            console.log(e);
            switch (e.key) {
                case ("7", "7", "7", "8"):
                    heroIdle.src = "./res/img/secret.hero.idle.png";
                    heroAttack.src = "./res/img/secret.hero.attack.png";
                    break;

                case ("g", "r", "e", "e", "n"):
                    heroIdle.src = "./res/img/green.hero.idle.png";
                    heroAttack.src = "./res/img/green.hero.attack.png";
                    break;
                case ("b", "l", "u", "e"):
                    heroIdle.src = "./res/img/blue.hero.idle.png";
                    heroAttack.src = "./res/img/blue.hero.attack.png";
                    break;
                case ("y", "e", "l", "l", "o", "w"):
                    heroIdle.src = "./res/img/yellow.hero.idle.png";
                    heroAttack.src = "./res/img/yellow.hero.attack.png";
                    break;
                case ("o", "g"):
                    heroIdle.src = "./res/img/hero.idle.png";
                    heroAttack.src = "./res/img/hero.attack.png";
                    break;
            }
        });
    } else if (redColorOwned == true && greenColorOwned == true && blueColorOwned == false && yellowColorOwned == true) {
        document.addEventListener("keyup", (e) => {
            console.log(e);
            switch (e.key) {
                case ("7", "7", "7", "8"):
                    heroIdle.src = "./res/img/secret.hero.idle.png";
                    heroAttack.src = "./res/img/secret.hero.attack.png";
                    break;
                case ("r", "e", "d"):
                    heroIdle.src = "./res/img/red.hero.idle.png";
                    heroAttack.src = "./res/img/red.hero.attack.png";
                    break;
                case ("g", "r", "e", "e", "n"):
                    heroIdle.src = "./res/img/green.hero.idle.png";
                    heroAttack.src = "./res/img/green.hero.attack.png";
                    break;

                case ("y", "e", "l", "l", "o", "w"):
                    heroIdle.src = "./res/img/yellow.hero.idle.png";
                    heroAttack.src = "./res/img/yellow.hero.attack.png";
                    break;
                case ("o", "g"):
                    heroIdle.src = "./res/img/hero.idle.png";
                    heroAttack.src = "./res/img/hero.attack.png";
                    break;
            }
        });
    } else if (redColorOwned == false && greenColorOwned == true && blueColorOwned == false && yellowColorOwned == true) {
        document.addEventListener("keyup", (e) => {
            console.log(e);
            switch (e.key) {
                case ("7", "7", "7", "8"):
                    heroIdle.src = "./res/img/secret.hero.idle.png";
                    heroAttack.src = "./res/img/secret.hero.attack.png";
                    break;

                case ("g", "r", "e", "e", "n"):
                    heroIdle.src = "./res/img/green.hero.idle.png";
                    heroAttack.src = "./res/img/green.hero.attack.png";
                    break;

                case ("y", "e", "l", "l", "o", "w"):
                    heroIdle.src = "./res/img/yellow.hero.idle.png";
                    heroAttack.src = "./res/img/yellow.hero.attack.png";
                    break;
                case ("o", "g"):
                    heroIdle.src = "./res/img/hero.idle.png";
                    heroAttack.src = "./res/img/hero.attack.png";
                    break;
            }

        });
    }
    /*
    redColorOwned == true && greenColorOwned == true && blueColorOwned == true && yellowColorOwned == true y
    redColorOwned == true && greenColorOwned == true && blueColorOwned == false && yellowColorOwned == false y 
    redColorOwned == true && greenColorOwned == true && blueColorOwned == true && yellowColorOwned == false y
    redColorOwned == false && greenColorOwned == true && blueColorOwned == true && yellowColorOwned == false y
    redColorOwned == false && greenColorOwned == true && blueColorOwned == true && yellowColorOwned == true y
    redColorOwned == true && greenColorOwned == true && blueColorOwned == false && yellowColorOwned == true y
    redColorOwned == false && greenColorOwned == true && blueColorOwned == false && yellowColorOwned == true y
 */
    /*
            document.addEventListener("keyup", (e) => {
            console.log(e);
            switch (e.key) {
                case ("7", "7", "7", "8"):
                    heroIdle.src = "./res/img/secret.hero.idle.png";
                    heroAttack.src = "./res/img/secret.hero.attack.png";
                    break;
                case ("r", "e", "d"):
                    heroIdle.src = "./res/img/red.hero.idle.png";
                    heroAttack.src = "./res/img/red.hero.attack.png";
                    break;
                case ("g", "r", "e", "e", "n"):
                    heroIdle.src = "./res/img/green.hero.idle.png";
                    heroAttack.src = "./res/img/green.hero.attack.png";
                    break;
                case ("b", "l", "u", "e"):
                    heroIdle.src = "./res/img/blue.hero.idle.png";
                    heroAttack.src = "./res/img/blue.hero.attack.png";
                    break;
                case ("y", "e", "l", "l", "o", "w"):
                    heroIdle.src = "./res/img/yellow.hero.idle.png";
                    heroAttack.src = "./res/img/yellow.hero.attack.png";
                    break;
            }
        });
        */
}
let blueColorValue = 10;
blueColor.onclick = () => {
    if (yourXP.innerText >= blueColorValue) {
        blueColor.style.display = "none";
        blueColor.disable = false;
        audioButtonClick.src = "./res/audio/buttonsound.mp3";
        audioButtonClick.play();
        heroIdle.src = "./res/img/blue.hero.idle.png";
        heroAttack.src = "./res/img/blue.hero.attack.png";
        yourXPValue -= blueColorValue;
        yourXP.innerText = yourXPValue;
        blueColor = true;
    } else {
        blueColor.disable = true;
        blueColorOwned = false;
    }
    if (blueColorOwned == true) {
        document.addEventListener("keyup", (e) => {
            console.log(e);
            switch (e.key) {
                case ("7", "7", "7", "8"):
                    heroIdle.src = "./res/img/secret.hero.idle.png";
                    heroAttack.src = "./res/img/secret.hero.attack.png";
                    break;
                case ("b", "l", "u", "e"):
                    heroIdle.src = "./res/img/blue.hero.idle.png";
                    heroAttack.src = "./res/img/blue.hero.attack.png";
                    break;
                case ("o", "g"):
                    heroIdle.src = "./res/img/hero.idle.png";
                    heroAttack.src = "./res/img/hero.attack.png";
                    break;
            }
        });
    }
    if (redColorOwned == true && greenColorOwned == true && blueColorOwned == true && yellowColorOwned == true) {
        document.addEventListener("keyup", (e) => {
            console.log(e);
            switch (e.key) {
                case ("7", "7", "7", "8"):
                    heroIdle.src = "./res/img/secret.hero.idle.png";
                    heroAttack.src = "./res/img/secret.hero.attack.png";
                    break;
                case ("r", "e", "d"):
                    heroIdle.src = "./res/img/red.hero.idle.png";
                    heroAttack.src = "./res/img/red.hero.attack.png";
                    break;
                case ("g", "r", "e", "e", "n"):
                    heroIdle.src = "./res/img/green.hero.idle.png";
                    heroAttack.src = "./res/img/green.hero.attack.png";
                    break;
                case ("b", "l", "u", "e"):
                    heroIdle.src = "./res/img/blue.hero.idle.png";
                    heroAttack.src = "./res/img/blue.hero.attack.png";
                    break;
                case ("y", "e", "l", "l", "o", "w"):
                    heroIdle.src = "./res/img/yellow.hero.idle.png";
                    heroAttack.src = "./res/img/yellow.hero.attack.png";
                    break;
                case ("o", "g"):
                    heroIdle.src = "./res/img/hero.idle.png";
                    heroAttack.src = "./res/img/hero.attack.png";
                    break;
            }
        });
    } else if (redColorOwned == true && greenColorOwned == false && blueColorOwned == true && yellowColorOwned == false) {
        document.addEventListener("keyup", (e) => {
            console.log(e);
            switch (e.key) {
                case ("7", "7", "7", "8"):
                    heroIdle.src = "./res/img/secret.hero.idle.png";
                    heroAttack.src = "./res/img/secret.hero.attack.png";
                    break;
                case ("r", "e", "d"):
                    heroIdle.src = "./res/img/red.hero.idle.png";
                    heroAttack.src = "./res/img/red.hero.attack.png";
                    break;

                case ("b", "l", "u", "e"):
                    heroIdle.src = "./res/img/blue.hero.idle.png";
                    heroAttack.src = "./res/img/blue.hero.attack.png";
                    break;
                case ("o", "g"):
                    heroIdle.src = "./res/img/hero.idle.png";
                    heroAttack.src = "./res/img/hero.attack.png";
                    break;

            }
        });
    } else if (redColorOwned == true && greenColorOwned == true && blueColorOwned == true && yellowColorOwned == false) {
        document.addEventListener("keyup", (e) => {
            console.log(e);
            switch (e.key) {
                case ("7", "7", "7", "8"):
                    heroIdle.src = "./res/img/secret.hero.idle.png";
                    heroAttack.src = "./res/img/secret.hero.attack.png";
                    break;
                case ("r", "e", "d"):
                    heroIdle.src = "./res/img/red.hero.idle.png";
                    heroAttack.src = "./res/img/red.hero.attack.png";
                    break;
                case ("g", "r", "e", "e", "n"):
                    heroIdle.src = "./res/img/green.hero.idle.png";
                    heroAttack.src = "./res/img/green.hero.attack.png";
                    break;
                case ("b", "l", "u", "e"):
                    heroIdle.src = "./res/img/blue.hero.idle.png";
                    heroAttack.src = "./res/img/blue.hero.attack.png";
                    break;
                case ("o", "g"):
                    heroIdle.src = "./res/img/hero.idle.png";
                    heroAttack.src = "./res/img/hero.attack.png";
                    break;
            }
        });
    } else if (redColorOwned == false && greenColorOwned == true && blueColorOwned == true && yellowColorOwned == false) {
        document.addEventListener("keyup", (e) => {
            console.log(e);
            switch (e.key) {
                case ("7", "7", "7", "8"):
                    heroIdle.src = "./res/img/secret.hero.idle.png";
                    heroAttack.src = "./res/img/secret.hero.attack.png";
                    break;

                case ("g", "r", "e", "e", "n"):
                    heroIdle.src = "./res/img/green.hero.idle.png";
                    heroAttack.src = "./res/img/green.hero.attack.png";
                    break;
                case ("b", "l", "u", "e"):
                    heroIdle.src = "./res/img/blue.hero.idle.png";
                    heroAttack.src = "./res/img/blue.hero.attack.png";
                    break;
                case ("o", "g"):
                    heroIdle.src = "./res/img/hero.idle.png";
                    heroAttack.src = "./res/img/hero.attack.png";
                    break;
            }
        });
    } else if (redColorOwned == false && greenColorOwned == true && blueColorOwned == true && yellowColorOwned == true) {
        document.addEventListener("keyup", (e) => {
            console.log(e);
            switch (e.key) {
                case ("7", "7", "7", "8"):
                    heroIdle.src = "./res/img/secret.hero.idle.png";
                    heroAttack.src = "./res/img/secret.hero.attack.png";
                    break;
                case ("g", "r", "e", "e", "n"):
                    heroIdle.src = "./res/img/green.hero.idle.png";
                    heroAttack.src = "./res/img/green.hero.attack.png";
                    break;
                case ("b", "l", "u", "e"):
                    heroIdle.src = "./res/img/blue.hero.idle.png";
                    heroAttack.src = "./res/img/blue.hero.attack.png";
                    break;
                case ("y", "e", "l", "l", "o", "w"):
                    heroIdle.src = "./res/img/yellow.hero.idle.png";
                    heroAttack.src = "./res/img/yellow.hero.attack.png";
                    break;
                case ("o", "g"):
                    heroIdle.src = "./res/img/hero.idle.png";
                    heroAttack.src = "./res/img/hero.attack.png";
                    break;
            }
        });
    } else if (redColorOwned == true && greenColorOwned == false && blueColorOwned == true && yellowColorOwned == true) {
        document.addEventListener("keyup", (e) => {
            console.log(e);
            switch (e.key) {
                case ("7", "7", "7", "8"):
                    heroIdle.src = "./res/img/secret.hero.idle.png";
                    heroAttack.src = "./res/img/secret.hero.attack.png";
                    break;
                case ("r", "e", "d"):
                    heroIdle.src = "./res/img/red.hero.idle.png";
                    heroAttack.src = "./res/img/red.hero.attack.png";
                    break;

                case ("b", "l", "u", "e"):
                    heroIdle.src = "./res/img/blue.hero.idle.png";
                    heroAttack.src = "./res/img/blue.hero.attack.png";
                    break;
                case ("y", "e", "l", "l", "o", "w"):
                    heroIdle.src = "./res/img/yellow.hero.idle.png";
                    heroAttack.src = "./res/img/yellow.hero.attack.png";
                    break;
                case ("o", "g"):
                    heroIdle.src = "./res/img/hero.idle.png";
                    heroAttack.src = "./res/img/hero.attack.png";
                    break;
            }
        });
    } else if (redColorOwned == false && greenColorOwned == false && blueColorOwned == true && yellowColorOwned == true) {
        document.addEventListener("keyup", (e) => {
            console.log(e);
            switch (e.key) {
                case ("7", "7", "7", "8"):
                    heroIdle.src = "./res/img/secret.hero.idle.png";
                    heroAttack.src = "./res/img/secret.hero.attack.png";
                    break;
                case ("b", "l", "u", "e"):
                    heroIdle.src = "./res/img/blue.hero.idle.png";
                    heroAttack.src = "./res/img/blue.hero.attack.png";
                    break;
                case ("y", "e", "l", "l", "o", "w"):
                    heroIdle.src = "./res/img/yellow.hero.idle.png";
                    heroAttack.src = "./res/img/yellow.hero.attack.png";
                    break;
                case ("o", "g"):
                    heroIdle.src = "./res/img/hero.idle.png";
                    heroAttack.src = "./res/img/hero.attack.png";
                    break;
            }
        });
    }
    /*
       redColorOwned == true && greenColorOwned == true && blueColorOwned == true && yellowColorOwned == true y
       redColorOwned == true && greenColorOwned == false && blueColorOwned == true && yellowColorOwned == false y
       redColorOwned == true && greenColorOwned == true && blueColorOwned == true && yellowColorOwned == false y
       redColorOwned == false && greenColorOwned == true && blueColorOwned == true && yellowColorOwned == false y
       redColorOwned == false && greenColorOwned == true && blueColorOwned == true && yellowColorOwned == true y
       redColorOwned == true && greenColorOwned == false && blueColorOwned == true && yellowColorOwned == true y
       redColorOwned == false && greenColorOwned == false && blueColorOwned == true && yellowColorOwned == true y
    */
    /*
            document.addEventListener("keyup", (e) => {
            console.log(e);
            switch (e.key) {
                case ("7", "7", "7", "8"):
                    heroIdle.src = "./res/img/secret.hero.idle.png";
                    heroAttack.src = "./res/img/secret.hero.attack.png";
                    break;
                case ("r", "e", "d"):
                    heroIdle.src = "./res/img/red.hero.idle.png";
                    heroAttack.src = "./res/img/red.hero.attack.png";
                    break;
                case ("g", "r", "e", "e", "n"):
                    heroIdle.src = "./res/img/green.hero.idle.png";
                    heroAttack.src = "./res/img/green.hero.attack.png";
                    break;
                case ("b", "l", "u", "e"):
                    heroIdle.src = "./res/img/blue.hero.idle.png";
                    heroAttack.src = "./res/img/blue.hero.attack.png";
                    break;
                case ("y", "e", "l", "l", "o", "w"):
                    heroIdle.src = "./res/img/yellow.hero.idle.png";
                    heroAttack.src = "./res/img/yellow.hero.attack.png";
                    break;
            }
        });
        */
}
let yellowColorValue = 12;
yellowColor.onclick = () => {
    if (yourXP.innerText >= yellowColorValue) {
        yellowColor.style.display = "none";
        yellowColor.disable = false;
        audioButtonClick.src = "./res/audio/buttonsound.mp3";
        audioButtonClick.play();
        heroIdle.src = "./res/img/yellow.hero.idle.png";
        heroAttack.src = "./res/img/yellow.hero.attack.png";
        yourXPValue -= yellowColorValue;
        yourXP.innerText = yourXPValue;
        yellowColorOwned = true;
    } else {
        yellowColor.disable = true;
        yellowColor = false;
    }
    if (yellowColorOwned == true) {
        document.addEventListener("keyup", (e) => {
            console.log(e);
            switch (e.key) {
                case ("7", "7", "7", "8"):
                    heroIdle.src = "./res/img/secret.hero.idle.png";
                    heroAttack.src = "./res/img/secret.hero.attack.png";
                    break;
                case ("y", "e", "l", "l", "o", "w"):
                    heroIdle.src = "./res/img/yellow.hero.idle.png";
                    heroAttack.src = "./res/img/yellow.hero.attack.png";
                    break;
                case ("o", "g"):
                    heroIdle.src = "./res/img/hero.idle.png";
                    heroAttack.src = "./res/img/hero.attack.png";
                    break;
            }
        });
    }
    if (redColorOwned == true && greenColorOwned == true && blueColorOwned == true && yellowColorOwned == true) {
        document.addEventListener("keyup", (e) => {
            console.log(e);
            switch (e.key) {
                case ("7", "7", "7", "8"):
                    heroIdle.src = "./res/img/secret.hero.idle.png";
                    heroAttack.src = "./res/img/secret.hero.attack.png";
                    break;
                case ("r", "e", "d"):
                    heroIdle.src = "./res/img/red.hero.idle.png";
                    heroAttack.src = "./res/img/red.hero.attack.png";
                    break;
                case ("g", "r", "e", "e", "n"):
                    heroIdle.src = "./res/img/green.hero.idle.png";
                    heroAttack.src = "./res/img/green.hero.attack.png";
                    break;
                case ("b", "l", "u", "e"):
                    heroIdle.src = "./res/img/blue.hero.idle.png";
                    heroAttack.src = "./res/img/blue.hero.attack.png";
                    break;
                case ("y", "e", "l", "l", "o", "w"):
                    heroIdle.src = "./res/img/yellow.hero.idle.png";
                    heroAttack.src = "./res/img/yellow.hero.attack.png";
                    break;
                case ("o", "g"):
                    heroIdle.src = "./res/img/hero.idle.png";
                    heroAttack.src = "./res/img/hero.attack.png";
                    break;
            }
        });
    } else if (redColorOwned == true && greenColorOwned == false && blueColorOwned == false && yellowColorOwned == true) {
        document.addEventListener("keyup", (e) => {
            console.log(e);
            switch (e.key) {
                case ("7", "7", "7", "8"):
                    heroIdle.src = "./res/img/secret.hero.idle.png";
                    heroAttack.src = "./res/img/secret.hero.attack.png";
                    break;
                case ("r", "e", "d"):
                    heroIdle.src = "./res/img/red.hero.idle.png";
                    heroAttack.src = "./res/img/red.hero.attack.png";
                    break;

                case ("y", "e", "l", "l", "o", "w"):
                    heroIdle.src = "./res/img/yellow.hero.idle.png";
                    heroAttack.src = "./res/img/yellow.hero.attack.png";
                    break;
                case ("o", "g"):
                    heroIdle.src = "./res/img/hero.idle.png";
                    heroAttack.src = "./res/img/hero.attack.png";
                    break;
            }
        });
    } else if (redColorOwned == true && greenColorOwned == true && blueColorOwned == false && yellowColorOwned == true) {
        document.addEventListener("keyup", (e) => {
            console.log(e);
            switch (e.key) {
                case ("7", "7", "7", "8"):
                    heroIdle.src = "./res/img/secret.hero.idle.png";
                    heroAttack.src = "./res/img/secret.hero.attack.png";
                    break;
                case ("r", "e", "d"):
                    heroIdle.src = "./res/img/red.hero.idle.png";
                    heroAttack.src = "./res/img/red.hero.attack.png";
                    break;
                case ("g", "r", "e", "e", "n"):
                    heroIdle.src = "./res/img/green.hero.idle.png";
                    heroAttack.src = "./res/img/green.hero.attack.png";
                    break;
                case ("y", "e", "l", "l", "o", "w"):
                    heroIdle.src = "./res/img/yellow.hero.idle.png";
                    heroAttack.src = "./res/img/yellow.hero.attack.png";
                    break;
                case ("o", "g"):
                    heroIdle.src = "./res/img/hero.idle.png";
                    heroAttack.src = "./res/img/hero.attack.png";
                    break;
            }
        });
    } else if (redColorOwned == false && greenColorOwned == true && blueColorOwned == false && yellowColorOwned == true) {
        document.addEventListener("keyup", (e) => {
            console.log(e);
            switch (e.key) {
                case ("7", "7", "7", "8"):
                    heroIdle.src = "./res/img/secret.hero.idle.png";
                    heroAttack.src = "./res/img/secret.hero.attack.png";
                    break;

                case ("g", "r", "e", "e", "n"):
                    heroIdle.src = "./res/img/green.hero.idle.png";
                    heroAttack.src = "./res/img/green.hero.attack.png";
                    break;

                case ("y", "e", "l", "l", "o", "w"):
                    heroIdle.src = "./res/img/yellow.hero.idle.png";
                    heroAttack.src = "./res/img/yellow.hero.attack.png";
                    break;
                case ("o", "g"):
                    heroIdle.src = "./res/img/hero.idle.png";
                    heroAttack.src = "./res/img/hero.attack.png";
                    break;
            }
        });
    } else if (redColorOwned == false && greenColorOwned == true && blueColorOwned == true && yellowColorOwned == true) {
        document.addEventListener("keyup", (e) => {
            console.log(e);
            switch (e.key) {
                case ("7", "7", "7", "8"):
                    heroIdle.src = "./res/img/secret.hero.idle.png";
                    heroAttack.src = "./res/img/secret.hero.attack.png";
                    break;

                case ("g", "r", "e", "e", "n"):
                    heroIdle.src = "./res/img/green.hero.idle.png";
                    heroAttack.src = "./res/img/green.hero.attack.png";
                    break;
                case ("b", "l", "u", "e"):
                    heroIdle.src = "./res/img/blue.hero.idle.png";
                    heroAttack.src = "./res/img/blue.hero.attack.png";
                    break;
                case ("y", "e", "l", "l", "o", "w"):
                    heroIdle.src = "./res/img/yellow.hero.idle.png";
                    heroAttack.src = "./res/img/yellow.hero.attack.png";
                    break;
                case ("o", "g"):
                    heroIdle.src = "./res/img/hero.idle.png";
                    heroAttack.src = "./res/img/hero.attack.png";
                    break;
            }
        });
    } else if (redColorOwned == true && greenColorOwned == false && blueColorOwned == true && yellowColorOwned == true) {
        document.addEventListener("keyup", (e) => {
            console.log(e);
            switch (e.key) {
                case ("7", "7", "7", "8"):
                    heroIdle.src = "./res/img/secret.hero.idle.png";
                    heroAttack.src = "./res/img/secret.hero.attack.png";
                    break;
                case ("r", "e", "d"):
                    heroIdle.src = "./res/img/red.hero.idle.png";
                    heroAttack.src = "./res/img/red.hero.attack.png";
                    break;

                case ("b", "l", "u", "e"):
                    heroIdle.src = "./res/img/blue.hero.idle.png";
                    heroAttack.src = "./res/img/blue.hero.attack.png";
                    break;
                case ("y", "e", "l", "l", "o", "w"):
                    heroIdle.src = "./res/img/yellow.hero.idle.png";
                    heroAttack.src = "./res/img/yellow.hero.attack.png";
                    break;
                case ("o", "g"):
                    heroIdle.src = "./res/img/hero.idle.png";
                    heroAttack.src = "./res/img/hero.attack.png";
                    break;
            }
        });
    } else if (redColorOwned == false && greenColorOwned == false && blueColorOwned == true && yellowColorOwned == true) {
        document.addEventListener("keyup", (e) => {
            console.log(e);
            switch (e.key) {
                case ("7", "7", "7", "8"):
                    heroIdle.src = "./res/img/secret.hero.idle.png";
                    heroAttack.src = "./res/img/secret.hero.attack.png";
                    break;

                case ("b", "l", "u", "e"):
                    heroIdle.src = "./res/img/blue.hero.idle.png";
                    heroAttack.src = "./res/img/blue.hero.attack.png";
                    break;
                case ("y", "e", "l", "l", "o", "w"):
                    heroIdle.src = "./res/img/yellow.hero.idle.png";
                    heroAttack.src = "./res/img/yellow.hero.attack.png";
                    break;
                case ("o", "g"):
                    heroIdle.src = "./res/img/hero.idle.png";
                    heroAttack.src = "./res/img/hero.attack.png";
                    break;
            }
        });
    }
    /*
        redColorOwned == true && greenColorOwned == true && blueColorOwned == true && yellowColorOwned == true y
        redColorOwned == true && greenColorOwned == false && blueColorOwned == false && yellowColorOwned == true y
        redColorOwned == true && greenColorOwned == true && blueColorOwned == false && yellowColorOwned == true y
        redColorOwned == false && greenColorOwned == true && blueColorOwned == false && yellowColorOwned == true y
        redColorOwned == false && greenColorOwned == true && blueColorOwned == true && yellowColorOwned == true y
        redColorOwned == true && greenColorOwned == false && blueColorOwned == true && yellowColorOwned == true y
        redColorOwned == false && greenColorOwned == false && blueColorOwned == true && yellowColorOwned == true 
     */
    /*
            document.addEventListener("keyup", (e) => {
            console.log(e);
            switch (e.key) {
                case ("7", "7", "7", "8"):
                    heroIdle.src = "./res/img/secret.hero.idle.png";
                    heroAttack.src = "./res/img/secret.hero.attack.png";
                    break;
                case ("r", "e", "d"):
                    heroIdle.src = "./res/img/red.hero.idle.png";
                    heroAttack.src = "./res/img/red.hero.attack.png";
                    break;
                case ("g", "r", "e", "e", "n"):
                    heroIdle.src = "./res/img/green.hero.idle.png";
                    heroAttack.src = "./res/img/green.hero.attack.png";
                    break;
                case ("b", "l", "u", "e"):
                    heroIdle.src = "./res/img/blue.hero.idle.png";
                    heroAttack.src = "./res/img/blue.hero.attack.png";
                    break;
                case ("y", "e", "l", "l", "o", "w"):
                    heroIdle.src = "./res/img/yellow.hero.idle.png";
                    heroAttack.src = "./res/img/yellow.hero.attack.png";
                    break;
            }
        });
        */
}
//------------------------------------ cost of colors mouse over
redColor.onmouseover = () => {
    costOfColors.innerText = redColorValue;
    overviewSrc.src = "./res/img/red.hero.idle.png";
    overview.style.display = "block";
}
greenColor.onmouseover = () => {
    costOfColors.innerText = greenColorValue;
    overviewSrc.src = "./res/img/green.hero.idle.png";
    overview.style.display = "block";
}
blueColor.onmouseover = () => {
    costOfColors.innerText = blueColorValue;
    overviewSrc.src = "./res/img/blue.hero.idle.png";
    overview.style.display = "block";
}
yellowColor.onmouseover = () => {
    costOfColors.innerText = yellowColorValue;
    overviewSrc.src = "./res/img/yellow.hero.idle.png";
    overview.style.display = "block";
}
//------------------------------------ cost of colors mouse out 
redColor.onmouseout = () => {
    costOfColors.innerText = 0;
    overviewSrc.src = "./res/img/hero.idle.png";
    overview.style.display = "none";
}
greenColor.onmouseout = () => {
    costOfColors.innerText = 0;
    overviewSrc.src = "./res/img/hero.idle.png";
    overview.style.display = "none";
}
blueColor.onmouseout = () => {
    costOfColors.innerText = 0;
    overviewSrc.src = "./res/img/hero.idle.png";
    overview.style.display = "none";
}
yellowColor.onmouseout = () => {
    costOfColors.innerText = 0;
    overviewSrc.src = "./res/img/hero.idle.png";
    overview.style.display = "none";
}
upgradeDamage.onmouseout = () => {
    costOfColors.innerText = 0;
    overview.style.display = "none";
}
upgradeHealth.onmouseout = () => {
    costOfColors.innerText = 0;
    overview.style.display = "none";
}
//------------------------------------ cost of upgrades mouse over
upgradeDamage.onmouseover = () => {
    costOfUps.innerText = upgradeDamageValue;
}
upgradeHealth.onmouseover = () => {
    costOfUps.innerText = upgradeHealthValue;
}
//------------------------------------ cost of upgrades mouse out
upgradeDamage.onmouseout = () => {
    costOfUps.innerText = 0;
}
upgradeHealth.onmouseout = () => {
    costOfUps.innerText = 0;
}
//------------------------------------ back button shop
backBtnShop.onclick = () => {
    backBtnShop.style.display = "none";
    audioButtonClick.src = "./res/audio/buttonsound.mp3";
    audioButtonClick.play();
    levelsText.style.display = "none";
    levelInfo.style.display = "none";
    gridOfLevels.style.display = "none";
    gridOfLevelsDC.style.display = "none";
    levelONE.style.display = "none";
    dcLevelONE.style.display = "none";
    marvelPlanet.style.display = "block";
    nameOfPlanet.style.display = "block";
    document.body.style.backgroundColor = "black";
    shopBtn.style.display = "block";
    shop.style.display = "none";
    infoBtn.style.display = "block";
    if (deesdavDimensionCompleted) {
        marvelPlanet.style.display = "none";
        nameOfPlanet.style.display = "none";
    }
}

//------------------------------------ level and fighting system
let levelONECompleted = false;
let levelTWOCompleted = false;
let levelTHREECompleted = false;
let levelFOURCompleted = false;
let levelFIVECompleted = false;
let levelSIXCompleted = false;
let levelSEVENCompleted = false;
let levelEIGHTCompleted = false;
let levelNINECompleted = false;
let levelTENCompleted = false;
let levelELEVENCompleted = false;
let levelTWELVECompleted = false;
let levelTHIRTEENCompleted = false;
let levelFOURTEENCompleted = false;
let levelFIFTEENCompleted = false;

let dcLevelONECompleted = false;
let dcLevelTWOCompleted = false;
let dcLevelTHREECompleted = false;
let dcLevelFOURCompleted = false;
let dcLevelFIVECompleted = false;
let dcLevelSIXCompleted = false;
let dcLevelSEVENCompleted = false;
let dcLevelEIGHTCompleted = false;
let dcLevelNINECompleted = false;
let dcLevelTENCompleted = false;
let dcLevelELEVENCompleted = false;
let dcLevelTWELVECompleted = false;
let dcLevelTHIRTEENCompleted = false;
let dcLevelFOURTEENCompleted = false;
let dcLevelFIFTEENCompleted = false;

let deesdavDimensionCompleted = false;

yourXP.style.color = "gold";
yourXP.style.textShadow = "1px 1px 2px black";
yourXP.style.fontWeight = "bold";
yourHp.style.color = "rgb(0, 255, 0)";
enemyHp.style.color = "rgb(255, 0, 0)";

//------------------------------------ enemy system
enemy.onmouseout = () => {
    document.body.style.boxShadow = "0 0 0px red inset";
}
enemy.onmousedown = () => {
    document.body.style.boxShadow = "0 0 77px red inset";
    heroAttack.style.left = "35%";
    heroAttack.style.display = "block";
    heroIdle.style.display = "none";
    enemy.style.transform = "rotate(5deg) scale(1.5)";
    enemyHp.innerText -= yourDamage;
    audioButtonClick.src = "./res/audio/punchAttackSound.mp3";
    audioButtonClick.play();
    if (enemyHp.innerText == 0 || enemyHp.innerText <= 0) {
        audioButtonClick.pause();
        audioButtonClick.currentTime = 0;
        enemyHp.innerText = 0;
        yourHp.innerText = yourHpValue;
    }

}
enemy.onmouseup = () => {
    document.body.style.boxShadow = "0 0 0px red inset";
    heroAttack.style.display = "none";
    heroIdle.style.display = "block";
    heroIdle.style.left = "20%";
    enemy.style.transform = "rotate(0deg) scale(1.5)";
    if (enemyHp.innerText == 0 || enemyHp.innerText <= 0) {
        audioButtonClick.pause();
        audioButtonClick.currentTime = 0;
        enemyHp.innerText = 0;
        yourHp.innerText = yourHpValue;
    }
}


//------------------------------------ game result system
/*if (gameResult.innerText == "You lost") {
    gameResult.onmouseover = () => {
        document.body.style.boxShadow = "0 0 999px red inset";
    }
    gameResult.onmouseout = () => {
        document.body.style.boxShadow = "0 0 0px red inset";
    }
} 
if (gameResult.innerText == "You won") {
    gameResult.onmouseover = () => {
        document.body.style.boxShadow = "0 0 999px rgb(0, 255, 0) inset";
    }
    gameResult.onmouseout = () => {
        document.body.style.boxShadow = "0 0 0px rgb(0, 255, 0) inset";
    }
}*/
gameResult.onclick = () => {
    if (marvelPlanetClick) {
        document.body.style.backgroundColor = "red";
        levelONE.style.display = "block";
        gridOfLevels.style.display = "grid";
        gridOfLevelsDC.style.display = "none";
        backBtn.style.display = "block";
        backBtnDC.style.display = "none";
    }

    if (levelONECompleted) {
        levelTWO.style.display = "block";
    }
    if (levelTWOCompleted) {
        levelTHREE.style.display = "block";
    }
    if (levelTHREECompleted) {
        levelFOUR.style.display = "block";
    }
    if (levelFOURCompleted) {
        levelFIVE.style.display = "block";
    }
    if (levelFIVECompleted) {
        levelSIX.style.display = "block";
    }
    if (levelSIXCompleted) {
        levelSEVEN.style.display = "block";
    }
    if (levelSEVENCompleted) {
        levelEIGHT.style.display = "block";
    }
    if (levelEIGHTCompleted) {
        levelNINE.style.display = "block";
    }
    if (levelNINECompleted) {
        levelTEN.style.display = "block";
    }
    if (levelTENCompleted) {
        levelELEVEN.style.display = "block";
    }
    if (levelELEVENCompleted) {
        levelTWELVE.style.display = "block";
    }
    if (levelTWELVECompleted) {
        levelTHIRTEEN.style.display = "block";
    }
    if (levelTHIRTEENCompleted) {
        levelFOURTEEN.style.display = "block";
    }
    if (levelFOURTEENCompleted) {
        levelFIFTEEN.style.display = "block";
    }
    if (levelFIFTEENCompleted) {
        console.log("level 15 hotov");
        marvelPlanetClick = false;
        //------------------------------------ deesdav planet into the dimension
        deesdavDimension.onmouseover = () => {
            audioLobbyBackground.src = "./res/audio/deesdav.mp3";
            audioLobbyBackground.play();
        }
        deesdavPlanet.onmouseover = () => {
            document.body.style.boxShadow = "0 0 999px white inset";
        }
        deesdavPlanet.onmouseout = () => {
            document.body.style.boxShadow = "0 0 0px white inset";
        }
        deesdavPlanet.onclick = () => {
            audioButtonClick.src = "./res/audio/buttonsound.mp3";
            audioButtonClick.play();
            marvelPlanet.style.display = "none";
            nameOfPlanet.style.display = "none";
            nameOfPlanetDeesdav.style.display = "none";
            document.body.style.backgroundColor = "black";
            storyPartInput.style.display = "none";
            deesdavPlanet.style.display = "none";
            deesdavDimension.style.display = "block";
            backBtn.style.display = "none";
            countDownText.style.display = "block";
            backBtn.enable = true;
            shopBtn.style.display = "none";
            infoBtn.style.display = "none";
            winAndLoss.style.display = "none";

            const timerDimension = setInterval(() => {
                countDown.innerText--;
                if (countDown.innerText == 0) {
                    clearInterval(timerDimension);
                    countDown.innerText = 60;
                    deesdavDimension.style.display = "none";
                    countDownText.style.display = "none";
                    marvelPlanet.style.display = "block";
                    nameOfPlanet.style.display = "block";
                    deesdavPlanet.style.display = "block";
                    nameOfPlanetDeesdav.style.display = "block";
                    document.body.style.backgroundColor = "black";
                    backBtn.style.display = "none";
                    dot.innerText = 0;
                    audioLobbyBackground.src = "";
                    audioLobbyBackground.pause();
                    audioLobbyBackground.currentTime = 0;
                }

                if (countDown.innerText == 60 && yourXP.innerText >= 120 && deesdavDimensionCompleted == false) {
                    deesdavDimensionCompleted = true;
                    if (deesdavDimensionCompleted == true) {
                        console.log("deesdav dimension completed");
                    }
                } else {
                    deesdavDimensionCompleted = false;
                }

                if (deesdavDimensionCompleted) {
                    yourXPValue -= 100;
                    yourXP.innerText = yourXPValue;
                    shopBtn.style.display = "block";
                    infoBtn.style.display = "block";
                    deesdavDimension.style.display = "none";
                    deesdavPlanet.style.display = "none";
                    nameOfPlanetDeesdav.style.display = "none";
                    dcPlanet.style.display = "block";
                    nameOfPlanetDC.style.display = "block";
                    dcPlanetClick = true;
                    backBtn.style.display = "none";
                    marvelPlanet.style.display = "none";
                    nameOfPlanet.style.display = "none";
                    planets.style.gap = "0px"; 
                    upgradeDamageValue = 9;
                    upgradeHealthValue = 7;
                    redColorValue = 10;
                    greenColorValue = 12;
                    blueColorValue = 15;
                    yellowColorValue = 17;
                    yourXPIncrease = 4;
                }
            }, 1000);

        }
        setInterval(() => {
            const randomPositionX = Math.floor(Math.random() * 600);
            const randomPositionY = Math.floor(Math.random() * 600);
            dot.style.top = randomPositionY + "px";
            dot.style.left = randomPositionX + "px";

            //console.log(randomPositionX);
            //console.log(randomPositionY);
        }, 666);


        dot.onclick = () => {
            audioButtonClick.src = "./res/audio/buttonsound.mp3";
            audioButtonClick.play();
            dot.innerText++;
            yourXPValue += dotXP;
            yourXP.innerText = yourXPValue;
        }
        dot.onmouseover = () => {
            dot.style.backgroundColor = "white";
            dot.style.color = "black";
            audioLobbyBackground.src = "./res/audio/deesdav.mp3";
            audioLobbyBackground.play();
            document.body.style.boxShadow = "0 0 77px white inset";
        }
        dot.onmouseout = () => {
            dot.style.backgroundColor = "black";
            dot.style.color = "white";
            audioLobbyBackground.src = "";
            audioLobbyBackground.pause();
            document.body.style.boxShadow = "0 0 0px white inset";
        }
    }
    if (dcPlanetClick) {
        document.body.style.backgroundColor = "blue";
        dcLevelONE.style.display = "block";
        gridOfLevels.style.display = "none";
        gridOfLevelsDC.style.display = "grid";
        backBtn.style.display = "none";
        backBtnDC.style.display = "block";
    }
    if (dcLevelONECompleted) {
        dcLevelTWO.style.display = "block";
    }
    if (dcLevelTWOCompleted) {
        dcLevelTHREE.style.display = "block";
    }
    if (dcLevelTHREECompleted) {
        dcLevelFOUR.style.display = "block";
    }
    if (dcLevelFOURCompleted) {
        dcLevelFIVE.style.display = "block";
    }
    if (dcLevelFIVECompleted) {
        dcLevelSIX.style.display = "block";
    }
    if (dcLevelSIXCompleted) {
        dcLevelSEVEN.style.display = "block";
    }
    if (dcLevelSEVENCompleted) {
        dcLevelEIGHT.style.display = "block";
    }
    if (dcLevelEIGHTCompleted) {
        dcLevelNINE.style.display = "block";
    }
    if (dcLevelNINECompleted) {
        dcLevelTEN.style.display = "block";
    }
    if (dcLevelTENCompleted) {
        dcLevelELEVEN.style.display = "block";
    }
    if (dcLevelELEVENCompleted) {
        dcLevelTWELVE.style.display = "block";
    }
    if (dcLevelTWELVECompleted) {
        dcLevelTHIRTEEN.style.display = "block";
    }
    if (dcLevelTHIRTEENCompleted) {
        dcLevelFOURTEEN.style.display = "block";
    }
    if (levelFOURTEENCompleted) {
        dcLevelFIFTEEN.style.display = "block";
    }
    if (dcLevelFIFTEENCompleted) {
        dcLevelFIFTEEN.style.display = "block";
        // tady toho bude ještě hodně !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    }

    console.log("funguje");
    audioButtonClick.src = "./res/audio/buttonsound.mp3";
    audioButtonClick.play();
    levelsText.style.display = "block";
    levelInfo.style.display = "block";
    game.style.display = "none";
    gameResult.style.display = "none";

}
