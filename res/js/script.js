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
const nameOfPlanet = document.getElementById("nameOfPlanet");
const headline = document.getElementById("headline");
const backBtn = document.getElementById("backBtn");
const shopBtn = document.getElementById("shopBtn");
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
const levelFIFTEEN = document.getElementById("levlevelFIFTEENelONE");


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

const realtime = new Date();
const hours = realtime.getHours();
console.log(hours);

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
    document.addEventListener('touchstart', function (t) {
        t.preventDefault();
    });
}

if (hours >= 0 && hours < 12) {
    realtimepresented.innerHTML = `Good morning`;
} else if (hours >= 12 && hours <= 16) {
    realtimepresented.innerHTML = `Good afternoon`;
} else {
    realtimepresented.innerHTML = `Good evening`;
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
    storyPart.innerHTML = `You've also lost your mind so you don't know your name so enter your own`;
    const nameValue = storyPartInput.value;
    const defaultName = "Draezlyr Wielder";
    if (nameValue == "") {
        yourName.innerHTML = `Your name: ${defaultName}`;
    } else {
        yourName.innerHTML = `Your name: ${nameValue}`;
    }
    nextBtn.style.display = "none";
    if (storyPart.innerHTML == `You've also lost your mind so you don't know your name so enter your own`) {
        const nextBtnInterval = setTimeout(() => {
            storyPart.innerHTML = "";
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
        yourName.innerHTML = `Your name: ${defaultName}`;
    } else {
        yourName.innerHTML = `Your name: ${nameValue}`;
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
//------------------------------------ planets
marvelPlanet.onclick = () => {
    audioButtonClick.src = "./res/audio/buttonsound.mp3";
    audioButtonClick.play();
    levelsText.style.display = "block";
    levelInfo.style.display = "block";
    gridOfLevels.style.display = "grid";
    levelONE.style.display = "block";
    marvelPlanet.style.display = "none";
    nameOfPlanet.style.display = "none";
    document.body.style.backgroundColor = "red";
    storyPartInput.style.display = "none";
    backBtn.style.display = "block";
    backBtn.enable = true;
    shopBtn.style.display = "none";
}

//------------------------------------ back button to portals
backBtn.onclick = () => {
    audioButtonClick.src = "./res/audio/buttonsound.mp3";
    audioButtonClick.play();
    levelsText.style.display = "none";
    levelInfo.style.display = "none";
    gridOfLevels.style.display = "none";
    levelONE.style.display = "none";
    marvelPlanet.style.display = "block";
    nameOfPlanet.style.display = "block";
    document.body.style.backgroundColor = "black";
    backBtn.style.display = "none";
    shopBtn.style.display = "block";
}
backBtn.onmouseover = () => {
    backBtn.style.backgroundColor = "white";
    backBtn.style.color = "black";
}
backBtn.onmouseout = () => {
    backBtn.style.backgroundColor = "transparent";
    backBtn.style.color = "white";
}
//------------------------------------ shop button, shop system, upgrades 
let yourDamage = 1;
let yourHpValue = 20;
let yourXPValue = 0;
let yourXPIncrease = 2;

shopBtn.onclick = () => {
    audioButtonClick.src = "./res/audio/buttonsound.mp3";
    audioButtonClick.play();
    shopBtn.style.display = "none";
    shop.style.display = "flex";
    backBtnShop.style.display = "block";
    backBtnShop.style.zIndex = "999";
}
shopBtn.onmouseover = () => {
    shopBtn.style.backgroundColor = "white";
    shopBtn.style.color = "black";
}
shopBtn.onmouseout = () => {
    shopBtn.style.backgroundColor = "transparent";
    shopBtn.style.color = "white";
}
//------------------------------------ merchant upgrades 
DamageInfo.style.color = "orange";
DamageInfo.style.textShadow = "1px 1px 2px black";
DamageInfo.style.fontWeight = "bold";
HealthInfo.style.color = "rgb(0,255,0)";
HealthInfo.style.textShadow = "1px 1px 2px black";
HealthInfo.style.fontWeight = "bold";

upgradeDamage.onclick = () => {
    if (yourXP.innerHTML >= 4) {
        upgradeDamage.disable = false;
        audioButtonClick.src = "./res/audio/buttonsound.mp3";
        audioButtonClick.play();
        yourXPValue -= 4;
        yourXP.innerHTML = yourXPValue;
        yourDamage++;
        DamageInfo.innerHTML = yourDamage;
    } else {
        upgradeDamage.disable = true;
    }
}
upgradeHealth.onclick = () => {
    if (yourXP.innerHTML >= 2) {
        upgradeDamage.disable = false;
        audioButtonClick.src = "./res/audio/buttonsound.mp3";
        audioButtonClick.play();
        yourXPValue -= 2;
        yourXP.innerHTML = yourXPValue;
        yourHpValue += 5;
        HealthInfo.innerHTML = yourHpValue;
    } else {
        upgradeHealth.disable = true;
    }
}
//------------------------------------ customization upgrades
let redColorOwned = false;
let greenColorOwned = false;
let blueColorOwned = false;
let yellowColorOwned = false;
redColor.onclick = () => {
    if (yourXP.innerHTML >= 5) {
        redColor.style.display = "none";
        redColor.disable = false;
        audioButtonClick.src = "./res/audio/buttonsound.mp3";
        audioButtonClick.play();
        heroIdle.src = "./res/img/red.hero.idle.png";
        heroAttack.src = "./res/img/red.hero.attack.png";
        yourXPValue -= 5;
        yourXP.innerHTML = yourXPValue;
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

greenColor.onclick = () => {
    if (yourXP.innerHTML >= 7) {
        greenColor.style.display = "none";
        greenColor.disable = false;
        audioButtonClick.src = "./res/audio/buttonsound.mp3";
        audioButtonClick.play();
        heroIdle.src = "./res/img/green.hero.idle.png";
        heroAttack.src = "./res/img/green.hero.attack.png";
        yourXPValue -= 7;
        yourXP.innerHTML = yourXPValue;
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

blueColor.onclick = () => {
    if (yourXP.innerHTML >= 10) {
        blueColor.style.display = "none";
        blueColor.disable = false;
        audioButtonClick.src = "./res/audio/buttonsound.mp3";
        audioButtonClick.play();
        heroIdle.src = "./res/img/blue.hero.idle.png";
        heroAttack.src = "./res/img/blue.hero.attack.png";
        yourXPValue -= 10;
        yourXP.innerHTML = yourXPValue;
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

yellowColor.onclick = () => {
    if (yourXP.innerHTML >= 12) {
        yellowColor.style.display = "none";
        yellowColor.disable = false;
        audioButtonClick.src = "./res/audio/buttonsound.mp3";
        audioButtonClick.play();
        heroIdle.src = "./res/img/yellow.hero.idle.png";
        heroAttack.src = "./res/img/yellow.hero.attack.png";
        yourXPValue -= 12;
        yourXP.innerHTML = yourXPValue;
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
    costOfColors.innerHTML = 5;
    overviewSrc.src = "./res/img/red.hero.idle.png";
    overview.style.display = "block";
}
greenColor.onmouseover = () => {
    costOfColors.innerHTML = 7;
    overviewSrc.src = "./res/img/green.hero.idle.png";
    overview.style.display = "block";
}
blueColor.onmouseover = () => {
    costOfColors.innerHTML = 10;
    overviewSrc.src = "./res/img/blue.hero.idle.png";
    overview.style.display = "block";
}
yellowColor.onmouseover = () => {
    costOfColors.innerHTML = 12;
    overviewSrc.src = "./res/img/yellow.hero.idle.png";
    overview.style.display = "block";
}
//------------------------------------ cost of colors mouse out 
redColor.onmouseout = () => {
    costOfColors.innerHTML = 0;
    overviewSrc.src = "./res/img/hero.idle.png";
    overview.style.display = "none";
}
greenColor.onmouseout = () => {
    costOfColors.innerHTML = 0;
    overviewSrc.src = "./res/img/hero.idle.png";
    overview.style.display = "none";
}
blueColor.onmouseout = () => {
    costOfColors.innerHTML = 0;
    overviewSrc.src = "./res/img/hero.idle.png";
    overview.style.display = "none";
}
yellowColor.onmouseout = () => {
    costOfColors.innerHTML = 0;
    overviewSrc.src = "./res/img/hero.idle.png";
    overview.style.display = "none";
}
upgradeDamage.onmouseout = () => {
    costOfColors.innerHTML = 0;
    overview.style.display = "none";
}
upgradeHealth.onmouseout = () => {
    costOfColors.innerHTML = 0;
    overview.style.display = "none";
}
//------------------------------------ cost of upgrades mouse over
upgradeDamage.onmouseover = () => {
    costOfUps.innerHTML = 4;
}
upgradeHealth.onmouseover = () => {
    costOfUps.innerHTML = 2;
}
//------------------------------------ cost of upgrades mouse out
upgradeDamage.onmouseout = () => {
    costOfUps.innerHTML = 0;
}
upgradeHealth.onmouseout = () => {
    costOfUps.innerHTML = 0;
}
//------------------------------------ back button shop
backBtnShop.onclick = () => {
    backBtnShop.style.display = "none";
    audioButtonClick.src = "./res/audio/buttonsound.mp3";
    audioButtonClick.play();
    levelsText.style.display = "none";
    levelInfo.style.display = "none";
    gridOfLevels.style.display = "none";
    levelONE.style.display = "none";
    marvelPlanet.style.display = "block";
    nameOfPlanet.style.display = "block";
    document.body.style.backgroundColor = "black";
    shopBtn.style.display = "block";
    shop.style.display = "none";
}
backBtnShop.onmouseover = () => {
    backBtnShop.style.backgroundColor = "white";
    backBtnShop.style.color = "black";
}
backBtnShop.onmouseout = () => {
    backBtnShop.style.backgroundColor = "transparent";
    backBtnShop.style.color = "white";
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

yourXP.style.color = "gold";
yourXP.style.textShadow = "1px 1px 2px black";
yourXP.style.fontWeight = "bold";
yourHp.style.color = "rgb(0, 255, 0)";
enemyHp.style.color = "rgb(255, 0, 0)";

//------------------------------------ enemy system
enemy.onmousedown = () => {
    heroAttack.style.left = "35%";
    heroAttack.style.display = "block";
    heroIdle.style.display = "none";
    enemy.style.transform = "rotate(5deg) scale(1.5)";
    enemyHp.innerHTML -= yourDamage;
    audioButtonClick.src = "./res/audio/punchAttackSound.mp3";
    audioButtonClick.play();
    if (enemyHp.innerHTML == 0 || enemyHp.innerHTML <= 0) {
        audioButtonClick.pause();
        audioButtonClick.currentTime = 0;
        enemyHp.innerHTML = 0;
        yourHp.innerHTML = yourHpValue;
    }

}
enemy.onmouseup = () => {
    heroAttack.style.display = "none";
    heroIdle.style.display = "block";
    heroIdle.style.left = "20%";
    enemy.style.transform = "rotate(0deg) scale(1.5)";
    if (enemyHp.innerHTML == 0 || enemyHp.innerHTML <= 0) {
        audioButtonClick.pause();
        audioButtonClick.currentTime = 0;
        enemyHp.innerHTML = 0;
        yourHp.innerHTML = yourHpValue;
    }
}

//------------------------------------ level 1
levelONE.onmouseover = () => {
    enemyName.innerHTML = "Spider-man";
}
levelONE.onmouseout = () => {
    enemyName.innerHTML = " ";
}
levelONE.onmousedown = () => {
    levelONE.style.backgroundColor = "white";
    levelONE.style.color = "red";
}
levelONE.onmouseup = () => {
    levelONE.style.backgroundColor = "transparent";
    levelONE.style.color = "black";
}

levelONE.onclick = () => {

    if (levelONECompleted) {
        console.log("Level is completed");
    }
    game.style.backgroundImage = "url(./res/img/spidermanBG.png)";
    enemy.src = "./res/img/enemy.spiderman.png";
    levelInfo.style.display = "none";
    document.body.style.backgroundColor = "black";
    audioButtonClick.src = "./res/audio/buttonsound.mp3";
    enemy.style.animation = "enemyMoving 1s infinite";
    audioButtonClick.play();
    levelsText.style.display = "none";
    game.style.display = "flex";
    gridOfLevels.style.display = "none";
    yourHp.innerHTML = yourHpValue;
    enemyHp.innerHTML = 20;
    backBtn.style.display = "none";
    backBtnShop.style.zIndex = "0";
    const enemyDamage = setInterval(() => {
        yourHp.innerHTML--;
        audioButtonClick.src = "./res/audio/punchAttackSound.mp3";
        audioButtonClick.play();
        if (yourHp.innerHTML <= 0) {
            clearInterval(enemyDamage);

            enemy.style.animation = "none";
            game.style.display = "none";
            gameResult.style.display = "block";
            gameResult.style.textShadow = "0 0 25px rgb(255, 0, 0)";
            gameResult.innerHTML = `You lost`;
            lossesCounter.innerHTML++;
            audioYouLost.src = "./res/audio/youLost.mp3";
            audioYouLost.play();
            levelONECompleted = false;
            levelONE.disabled = false;
            yourHp.innerHTML = yourHpValue;
            backBtn.style.zIndex = "999";
            enemyHp.innerHTML = 20;
        }
        if (enemyHp.innerHTML <= 0 && yourHp.innerHTML > 0) {
            clearInterval(enemyDamage);

            enemy.style.animation = "none";
            game.style.display = "none";
            gameResult.style.display = "block";
            gameResult.style.textShadow = "0 0 25px rgb(0, 255, 0)";
            gameResult.innerHTML = `You won`;
            winsCounter.innerHTML++;
            audioYouWin.src = "./res/audio/youWin.mp3";
            audioYouWin.play();
            levelONECompleted = true;
            levelONE.disabled = true;
            yourXPValue += yourXPIncrease;
            yourXP.innerHTML = yourXPValue;
            yourHp.innerHTML = yourHpValue;
            backBtn.style.zIndex = "999";
            enemyHp.innerHTML = 20;
        }

    }, 1000);

}

//------------------------------------ level 2
levelTWO.onmouseover = () => {
    enemyName.innerHTML = "Hulk";
}
levelTWO.onmouseout = () => {
    enemyName.innerHTML = " ";
}
levelTWO.onmousedown = () => {
    levelTWO.style.backgroundColor = "white";
    levelTWO.style.color = "red";
}
levelTWO.onmouseup = () => {
    levelTWO.style.backgroundColor = "transparent";
    levelTWO.style.color = "black";
}

levelTWO.onclick = () => {
    if (levelONECompleted || levelTWOCompleted) {
        console.log("Level is completed");
    }
    game.style.backgroundImage = "url(./res/img/hulkBG.png)";
    enemy.src = "./res/img/enemy.hulk.png";
    enemy.style.animation = "enemyMoving 1s infinite";
    levelInfo.style.display = "none";
    document.body.style.backgroundColor = "black";
    audioButtonClick.src = "./res/audio/buttonsound.mp3";
    audioButtonClick.play();
    levelsText.style.display = "none";
    game.style.display = "flex";
    gridOfLevels.style.display = "none";
    yourHp.innerHTML = yourHpValue;
    enemyHp.innerHTML = 25;
    backBtn.style.display = "none";
    backBtnShop.style.zIndex = "0";
    const enemyDamage = setInterval(() => {
        yourHp.innerHTML -= 2;
        audioButtonClick.src = "./res/audio/punchAttackSound.mp3";
        audioButtonClick.play();
        if (yourHp.innerHTML <= 0) {
            clearInterval(enemyDamage);

            enemy.style.animation = "none";
            game.style.display = "none";
            gameResult.style.display = "block";
            gameResult.style.textShadow = "0 0 25px rgb(255, 0, 0)";
            gameResult.innerHTML = `You lost`;
            lossesCounter.innerHTML++;
            audioYouLost.src = "./res/audio/youLost.mp3";
            audioYouLost.play();
            levelTWOCompleted = false;
            levelTWO.disabled = false;
            yourHp.innerHTML = yourHpValue;
            backBtn.style.zIndex = "999";
            enemyHp.innerHTML = 25;
        }
        if (enemyHp.innerHTML <= 0 && yourHp.innerHTML > 0) {
            clearInterval(enemyDamage);

            enemy.style.animation = "none";
            game.style.display = "none";
            gameResult.style.display = "block";
            gameResult.style.textShadow = "0 0 25px rgb(0, 255, 0)";
            gameResult.innerHTML = `You won`;
            winsCounter.innerHTML++;
            audioYouWin.src = "./res/audio/youWin.mp3";
            audioYouWin.play();
            levelTWOCompleted = true;
            levelTWO.disabled = true;
            yourXPValue += yourXPIncrease;
            yourXP.innerHTML = yourXPValue;
            yourHp.innerHTML = yourHpValue;
            backBtn.style.zIndex = "999";
            enemyHp.innerHTML = 25;
        }


    }, 1000);

}

//------------------------------------ level 3
levelTHREE.onmouseover = () => {
    enemyName.innerHTML = "Iron man";
}
levelTHREE.onmouseout = () => {
    enemyName.innerHTML = " ";
}
levelTHREE.onmousedown = () => {
    levelTHREE.style.backgroundColor = "white";
    levelTHREE.style.color = "red";
}
levelTHREE.onmouseup = () => {
    levelTHREE.style.backgroundColor = "transparent";
    levelTHREE.style.color = "black";
}

levelTHREE.onclick = () => {
    if (levelONECompleted || levelTWOCompleted || levelTHREECompleted) {
        console.log("Level is completed");
    }
    game.style.backgroundImage = "url(./res/img/ironmanBG.png)";
    enemy.src = "./res/img/enemy.ironman.png";
    enemy.style.animation = "enemyMoving 1s infinite";
    levelInfo.style.display = "none";
    document.body.style.backgroundColor = "black";
    audioButtonClick.src = "./res/audio/buttonsound.mp3";
    audioButtonClick.play();
    levelsText.style.display = "none";
    game.style.display = "flex";
    gridOfLevels.style.display = "none";
    yourHp.innerHTML = yourHpValue;
    enemyHp.innerHTML = 30;
    backBtn.style.display = "none";
    backBtnShop.style.zIndex = "0";
    const enemyDamage = setInterval(() => {
        yourHp.innerHTML -= 3;
        audioButtonClick.src = "./res/audio/punchAttackSound.mp3";
        audioButtonClick.play();
        if (yourHp.innerHTML <= 0) {
            clearInterval(enemyDamage);

            enemy.style.animation = "none";
            game.style.display = "none";
            gameResult.style.display = "block";
            gameResult.style.textShadow = "0 0 25px rgb(255, 0, 0)";
            gameResult.innerHTML = `You lost`;
            lossesCounter.innerHTML++;
            audioYouLost.src = "./res/audio/youLost.mp3";
            audioYouLost.play();
            levelTHREECompleted = false;
            levelTHREE.disabled = false;
            yourHp.innerHTML = yourHpValue;
            backBtn.style.zIndex = "999";
            enemyHp.innerHTML = 30;
        }
        if (enemyHp.innerHTML <= 0 && yourHp.innerHTML > 0) {
            clearInterval(enemyDamage);

            enemy.style.animation = "none";
            game.style.display = "none";
            gameResult.style.display = "block";
            gameResult.style.textShadow = "0 0 25px rgb(0, 255, 0)";
            gameResult.innerHTML = `You won`;
            winsCounter.innerHTML++;
            audioYouWin.src = "./res/audio/youWin.mp3";
            audioYouWin.play();
            levelTHREECompleted = true;
            levelTHREE.disabled = true;
            yourXPValue += yourXPIncrease;
            yourXP.innerHTML = yourXPValue;
            yourHp.innerHTML = yourHpValue;
            backBtn.style.zIndex = "999";
            enemyHp.innerHTML = 30;
        }


    }, 1000);

}

//------------------------------------ level 4
levelFOUR.onmouseover = () => {
    enemyName.innerHTML = "Thor";
}
levelFOUR.onmouseout = () => {
    enemyName.innerHTML = " ";
}
levelFOUR.onmousedown = () => {
    levelFOUR.style.backgroundColor = "white";
    levelFOUR.style.color = "red";
}
levelFOUR.onmouseup = () => {
    levelFOUR.style.backgroundColor = "transparent";
    levelFOUR.style.color = "black";
}

levelFOUR.onclick = () => {
    if (levelONECompleted || levelTWOCompleted || levelTHREECompleted || levelFOURCompleted) {
        console.log("Level is completed");
    }
    game.style.backgroundImage = "url(./res/img/thorBG.png)";
    enemy.src = "./res/img/enemy.thor.png";
    enemy.style.animation = "enemyMoving 1s infinite";
    levelInfo.style.display = "none";
    document.body.style.backgroundColor = "black";
    audioButtonClick.src = "./res/audio/buttonsound.mp3";
    audioButtonClick.play();
    levelsText.style.display = "none";
    game.style.display = "flex";
    gridOfLevels.style.display = "none";
    yourHp.innerHTML = yourHpValue;
    enemyHp.innerHTML = 35;
    backBtn.style.display = "none";
    backBtnShop.style.zIndex = "0";
    const enemyDamage = setInterval(() => {
        yourHp.innerHTML -= 4;
        audioButtonClick.src = "./res/audio/punchAttackSound.mp3";
        audioButtonClick.play();
        if (yourHp.innerHTML <= 0) {
            clearInterval(enemyDamage);

            enemy.style.animation = "none";
            game.style.display = "none";
            gameResult.style.display = "block";
            gameResult.style.textShadow = "0 0 25px rgb(255, 0, 0)";
            gameResult.innerHTML = `You lost`;
            lossesCounter.innerHTML++;
            audioYouLost.src = "./res/audio/youLost.mp3";
            audioYouLost.play();
            levelFOURCompleted = false;
            levelFOUR.disabled = false;
            yourHp.innerHTML = yourHpValue;
            backBtn.style.zIndex = "999";
            enemyHp.innerHTML = 35;
        }
        if (enemyHp.innerHTML <= 0 && yourHp.innerHTML > 0) {
            clearInterval(enemyDamage);

            enemy.style.animation = "none";
            game.style.display = "none";
            gameResult.style.display = "block";
            gameResult.style.textShadow = "0 0 25px rgb(0, 255, 0)";
            gameResult.innerHTML = `You won`;
            winsCounter.innerHTML++;
            audioYouWin.src = "./res/audio/youWin.mp3";
            audioYouWin.play();
            levelFOURCompleted = true;
            levelFOUR.disabled = true;
            yourXPValue += yourXPIncrease;
            yourXP.innerHTML = yourXPValue;
            yourHp.innerHTML = yourHpValue;
            backBtn.style.zIndex = "999";
            enemyHp.innerHTML = 35;
        }


    }, 1000);

}

//------------------------------------ level 5
levelFIVE.onmouseover = () => {
    enemyName.innerHTML = "Black Widow";
}
levelFIVE.onmouseout = () => {
    enemyName.innerHTML = " ";
}
levelFIVE.onmousedown = () => {
    levelFIVE.style.backgroundColor = "white";
    levelFIVE.style.color = "red";
}
levelFIVE.onmouseup = () => {
    levelFIVE.style.backgroundColor = "transparent";
    levelFIVE.style.color = "black";
}

levelFIVE.onclick = () => {
    if (levelONECompleted || levelTWOCompleted || levelTHREECompleted || levelFOURCompleted || levelFIVECompleted) {
        console.log("Level is completed");
    }
    game.style.backgroundImage = "url(./res/img/blackwidowBG.png)";
    enemy.src = "./res/img/enemy.blackwidow.png";
    enemy.style.animation = "enemyMoving 1s infinite";
    levelInfo.style.display = "none";
    document.body.style.backgroundColor = "black";
    audioButtonClick.src = "./res/audio/buttonsound.mp3";
    audioButtonClick.play();
    levelsText.style.display = "none";
    game.style.display = "flex";
    gridOfLevels.style.display = "none";
    yourHp.innerHTML = yourHpValue;
    enemyHp.innerHTML = 40;
    backBtn.style.display = "none";
    backBtnShop.style.zIndex = "0";
    const enemyDamage = setInterval(() => {
        yourHp.innerHTML -= 5;
        audioButtonClick.src = "./res/audio/punchAttackSound.mp3";
        audioButtonClick.play();
        if (yourHp.innerHTML <= 0) {
            clearInterval(enemyDamage);

            enemy.style.animation = "none";
            game.style.display = "none";
            gameResult.style.display = "block";
            gameResult.style.textShadow = "0 0 25px rgb(255, 0, 0)";
            gameResult.innerHTML = `You lost`;
            lossesCounter.innerHTML++;
            audioYouLost.src = "./res/audio/youLost.mp3";
            audioYouLost.play();
            levelFIVECompleted = false;
            levelFIVE.disabled = false;
            yourHp.innerHTML = yourHpValue;
            backBtn.style.zIndex = "999";
            enemyHp.innerHTML = 40;
        }
        if (enemyHp.innerHTML <= 0 && yourHp.innerHTML > 0) {
            clearInterval(enemyDamage);

            enemy.style.animation = "none";
            game.style.display = "none";
            gameResult.style.display = "block";
            gameResult.style.textShadow = "0 0 25px rgb(0, 255, 0)";
            gameResult.innerHTML = `You won`;
            winsCounter.innerHTML++;
            audioYouWin.src = "./res/audio/youWin.mp3";
            audioYouWin.play();
            levelFIVECompleted = true;
            levelFIVE.disabled = true;
            yourXPValue += yourXPIncrease;
            yourXP.innerHTML = yourXPValue;
            yourHp.innerHTML = yourHpValue;
            backBtn.style.zIndex = "999";
            enemyHp.innerHTML = 40;
        }

    }, 1000);

}
//------------------------------------ level 6
levelSIX.onmouseover = () => {
    enemyName.innerHTML = "Captain America";
}
levelSIX.onmouseout = () => {
    enemyName.innerHTML = " ";
}
levelSIX.onmousedown = () => {
    levelSIX.style.backgroundColor = "white";
    levelSIX.style.color = "red";
}
levelSIX.onmouseup = () => {
    levelSIX.style.backgroundColor = "transparent";
    levelSIX.style.color = "black";
}

levelSIX.onclick = () => {
    if (levelONECompleted || levelTWOCompleted || levelTHREECompleted || levelFOURCompleted || levelFIVECompleted || levelSIXCompleted) {
        console.log("Level is completed");
    }
    game.style.backgroundImage = "url(./res/img/.png)";
    enemy.src = "";
    enemy.style.animation = "enemyMoving 1s infinite";
    levelInfo.style.display = "none";
    document.body.style.backgroundColor = "black";
    audioButtonClick.src = "./res/audio/buttonsound.mp3";
    audioButtonClick.play();
    levelsText.style.display = "none";
    game.style.display = "flex";
    gridOfLevels.style.display = "none";
    yourHp.innerHTML = yourHpValue;
    enemyHp.innerHTML = 45;
    backBtn.style.display = "none";
    backBtnShop.style.zIndex = "0";
    const enemyDamage = setInterval(() => {
        yourHp.innerHTML -= 6;
        audioButtonClick.src = "./res/audio/punchAttackSound.mp3";
        audioButtonClick.play();
        if (yourHp.innerHTML <= 0) {
            clearInterval(enemyDamage);

            enemy.style.animation = "none";
            game.style.display = "none";
            gameResult.style.display = "block";
            gameResult.style.textShadow = "0 0 25px rgb(255, 0, 0)";
            gameResult.innerHTML = `You lost`;
            lossesCounter.innerHTML++;
            audioYouLost.src = "./res/audio/youLost.mp3";
            audioYouLost.play();
            levelSIXCompleted = false;
            levelSIX.disabled = false;
            yourHp.innerHTML = yourHpValue;
            backBtn.style.zIndex = "999";
            enemyHp.innerHTML = 45;
        }
        if (enemyHp.innerHTML <= 0 && yourHp.innerHTML > 0) {
            clearInterval(enemyDamage);

            enemy.style.animation = "none";
            game.style.display = "none";
            gameResult.style.display = "block";
            gameResult.style.textShadow = "0 0 25px rgb(0, 255, 0)";
            gameResult.innerHTML = `You won`;
            winsCounter.innerHTML++;
            audioYouWin.src = "./res/audio/youWin.mp3";
            audioYouWin.play();
            levelSIXCompleted = true;
            levelSIX.disabled = true;
            yourXPValue += yourXPIncrease;
            yourXP.innerHTML = yourXPValue;
            yourHp.innerHTML = yourHpValue;
            backBtn.style.zIndex = "999";
            enemyHp.innerHTML = 45;
        }

    }, 1000);

}
//------------------------------------ level 7
levelSEVEN.onmouseover = () => {
    enemyName.innerHTML = "Moon Knight";
}
levelSEVEN.onmouseout = () => {
    enemyName.innerHTML = " ";
}
levelSEVEN.onmousedown = () => {
    levelSEVEN.style.backgroundColor = "white";
    levelSEVEN.style.color = "red";
}
levelSEVEN.onmouseup = () => {
    levelSEVEN.style.backgroundColor = "transparent";
    levelSEVEN.style.color = "black";
}

levelSEVEN.onclick = () => {
    if (levelONECompleted || levelTWOCompleted || levelTHREECompleted || levelFOURCompleted || levelFIVECompleted || levelSIXCompleted || levelSEVENCompleted) {
        console.log("Level is completed");
    }
    game.style.backgroundImage = "url(./res/img/.png)";
    enemy.src = "";
    enemy.style.animation = "enemyMoving 1s infinite";
    levelInfo.style.display = "none";
    document.body.style.backgroundColor = "black";
    audioButtonClick.src = "./res/audio/buttonsound.mp3";
    audioButtonClick.play();
    levelsText.style.display = "none";
    game.style.display = "flex";
    gridOfLevels.style.display = "none";
    yourHp.innerHTML = yourHpValue;
    enemyHp.innerHTML = 50;
    backBtn.style.display = "none";
    backBtnShop.style.zIndex = "0";
    const enemyDamage = setInterval(() => {
        yourHp.innerHTML -= 7;
        audioButtonClick.src = "./res/audio/punchAttackSound.mp3";
        audioButtonClick.play();
        if (yourHp.innerHTML <= 0) {
            clearInterval(enemyDamage);

            enemy.style.animation = "none";
            game.style.display = "none";
            gameResult.style.display = "block";
            gameResult.style.textShadow = "0 0 25px rgb(255, 0, 0)";
            gameResult.innerHTML = `You lost`;
            lossesCounter.innerHTML++;
            audioYouLost.src = "./res/audio/youLost.mp3";
            audioYouLost.play();
            levelSEVENCompleted = false;
            levelSEVEN.disabled = false;
            yourHp.innerHTML = yourHpValue;
            backBtn.style.zIndex = "999";
            enemyHp.innerHTML = 50;
        }
        if (enemyHp.innerHTML <= 0 && yourHp.innerHTML > 0) {
            clearInterval(enemyDamage);

            enemy.style.animation = "none";
            game.style.display = "none";
            gameResult.style.display = "block";
            gameResult.style.textShadow = "0 0 25px rgb(0, 255, 0)";
            gameResult.innerHTML = `You won`;
            winsCounter.innerHTML++;
            audioYouWin.src = "./res/audio/youWin.mp3";
            audioYouWin.play();
            levelSEVENCompleted = true;
            levelSEVEN.disabled = true;
            yourXPValue += yourXPIncrease;
            yourXP.innerHTML = yourXPValue;
            yourHp.innerHTML = yourHpValue;
            backBtn.style.zIndex = "999";
            enemyHp.innerHTML = 50;
        }

    }, 1000);

}
//------------------------------------ level 8
levelEIGHT.onmouseover = () => {
    enemyName.innerHTML = "Venom";
}
levelEIGHT.onmouseout = () => {
    enemyName.innerHTML = " ";
}
levelEIGHT.onmousedown = () => {
    levelEIGHT.style.backgroundColor = "white";
    levelEIGHT.style.color = "red";
}
levelEIGHT.onmouseup = () => {
    levelEIGHT.style.backgroundColor = "transparent";
    levelEIGHT.style.color = "black";
}

levelEIGHT.onclick = () => {
    if (levelONECompleted || levelTWOCompleted || levelTHREECompleted || levelFOURCompleted || levelFIVECompleted || levelSIXCompleted || levelSEVENCompleted || levelEIGHTCompleted) {
        console.log("Level is completed");
    }
    game.style.backgroundImage = "url(./res/img/.png)";
    enemy.src = "";
    enemy.style.animation = "enemyMoving 1s infinite";
    levelInfo.style.display = "none";
    document.body.style.backgroundColor = "black";
    audioButtonClick.src = "./res/audio/buttonsound.mp3";
    audioButtonClick.play();
    levelsText.style.display = "none";
    game.style.display = "flex";
    gridOfLevels.style.display = "none";
    yourHp.innerHTML = yourHpValue;
    enemyHp.innerHTML = 55;
    backBtn.style.display = "none";
    backBtnShop.style.zIndex = "0";
    const enemyDamage = setInterval(() => {
        yourHp.innerHTML -= 8;
        audioButtonClick.src = "./res/audio/punchAttackSound.mp3";
        audioButtonClick.play();
        if (yourHp.innerHTML <= 0) {
            clearInterval(enemyDamage);

            enemy.style.animation = "none";
            game.style.display = "none";
            gameResult.style.display = "block";
            gameResult.style.textShadow = "0 0 25px rgb(255, 0, 0)";
            gameResult.innerHTML = `You lost`;
            lossesCounter.innerHTML++;
            audioYouLost.src = "./res/audio/youLost.mp3";
            audioYouLost.play();
            levelEIGHTCompleted = false;
            levelEIGHT.disabled = false;
            yourHp.innerHTML = yourHpValue;
            backBtn.style.zIndex = "999";
            enemyHp.innerHTML = 55;
        }
        if (enemyHp.innerHTML <= 0 && yourHp.innerHTML > 0) {
            clearInterval(enemyDamage);

            enemy.style.animation = "none";
            game.style.display = "none";
            gameResult.style.display = "block";
            gameResult.style.textShadow = "0 0 25px rgb(0, 255, 0)";
            gameResult.innerHTML = `You won`;
            winsCounter.innerHTML++;
            audioYouWin.src = "./res/audio/youWin.mp3";
            audioYouWin.play();
            levelEIGHTCompleted = true;
            levelEIGHT.disabled = true;
            yourXPValue += yourXPIncrease;
            yourXP.innerHTML = yourXPValue;
            yourHp.innerHTML = yourHpValue;
            backBtn.style.zIndex = "999";
            enemyHp.innerHTML = 55;
        }

    }, 1000);

}
//------------------------------------ level 9
levelNINE.onmouseover = () => {
    enemyName.innerHTML = "Wolverine";
}
levelNINE.onmouseout = () => {
    enemyName.innerHTML = " ";
}
levelNINE.onmousedown = () => {
    levelNINE.style.backgroundColor = "white";
    levelNINE.style.color = "red";
}
levelNINE.onmouseup = () => {
    levelNINE.style.backgroundColor = "transparent";
    levelNINE.style.color = "black";
}

levelNINE.onclick = () => {
    if (levelONECompleted || levelTWOCompleted || levelTHREECompleted || levelFOURCompleted || levelFIVECompleted || levelSIXCompleted || levelSEVENCompleted || levelEIGHTCompleted || levelNINECompleted) {
        console.log("Level is completed");
    }
    game.style.backgroundImage = "url(./res/img/.png)";
    enemy.src = "";
    enemy.style.animation = "enemyMoving 1s infinite";
    levelInfo.style.display = "none";
    document.body.style.backgroundColor = "black";
    audioButtonClick.src = "./res/audio/buttonsound.mp3";
    audioButtonClick.play();
    levelsText.style.display = "none";
    game.style.display = "flex";
    gridOfLevels.style.display = "none";
    yourHp.innerHTML = yourHpValue;
    enemyHp.innerHTML = 60;
    backBtn.style.display = "none";
    backBtnShop.style.zIndex = "0";
    const enemyDamage = setInterval(() => {
        yourHp.innerHTML -= 9;
        audioButtonClick.src = "./res/audio/punchAttackSound.mp3";
        audioButtonClick.play();
        if (yourHp.innerHTML <= 0) {
            clearInterval(enemyDamage);

            enemy.style.animation = "none";
            game.style.display = "none";
            gameResult.style.display = "block";
            gameResult.style.textShadow = "0 0 25px rgb(255, 0, 0)";
            gameResult.innerHTML = `You lost`;
            lossesCounter.innerHTML++;
            audioYouLost.src = "./res/audio/youLost.mp3";
            audioYouLost.play();
            levelNINECompleted = false;
            levelNINE.disabled = false;
            yourHp.innerHTML = yourHpValue;
            backBtn.style.zIndex = "999";
            enemyHp.innerHTML = 60;
        }
        if (enemyHp.innerHTML <= 0 && yourHp.innerHTML > 0) {
            clearInterval(enemyDamage);

            enemy.style.animation = "none";
            game.style.display = "none";
            gameResult.style.display = "block";
            gameResult.style.textShadow = "0 0 25px rgb(0, 255, 0)";
            gameResult.innerHTML = `You won`;
            winsCounter.innerHTML++;
            audioYouWin.src = "./res/audio/youWin.mp3";
            audioYouWin.play();
            levelNINECompleted = true;
            levelNINE.disabled = true;
            yourXPValue += yourXPIncrease;
            yourXP.innerHTML = yourXPValue;
            yourHp.innerHTML = yourHpValue;
            backBtn.style.zIndex = "999";
            enemyHp.innerHTML = 60;
        }

    }, 1000);

}
//------------------------------------ level 10
levelTEN.onmouseover = () => {
    enemyName.innerHTML = "Deadpool";
}
levelTEN.onmouseout = () => {
    enemyName.innerHTML = " ";
}
levelTEN.onmousedown = () => {
    levelTEN.style.backgroundColor = "white";
    levelTEN.style.color = "red";
}
levelTEN.onmouseup = () => {
    levelTEN.style.backgroundColor = "transparent";
    levelTEN.style.color = "black";
}

levelTEN.onclick = () => {
    if (levelONECompleted || levelTWOCompleted || levelTHREECompleted || levelFOURCompleted || levelFIVECompleted || levelSIXCompleted || levelSEVENCompleted || levelEIGHTCompleted || levelNINECompleted || levelTENCompleted) {
        console.log("Level is completed");
    }
    game.style.backgroundImage = "url(./res/img/.png)";
    enemy.src = "";
    enemy.style.animation = "enemyMoving 1s infinite";
    levelInfo.style.display = "none";
    document.body.style.backgroundColor = "black";
    audioButtonClick.src = "./res/audio/buttonsound.mp3";
    audioButtonClick.play();
    levelsText.style.display = "none";
    game.style.display = "flex";
    gridOfLevels.style.display = "none";
    yourHp.innerHTML = yourHpValue;
    enemyHp.innerHTML = 65;
    backBtn.style.display = "none";
    backBtnShop.style.zIndex = "0";
    const enemyDamage = setInterval(() => {
        yourHp.innerHTML -= 10;
        audioButtonClick.src = "./res/audio/punchAttackSound.mp3";
        audioButtonClick.play();
        if (yourHp.innerHTML <= 0) {
            clearInterval(enemyDamage);

            enemy.style.animation = "none";
            game.style.display = "none";
            gameResult.style.display = "block";
            gameResult.style.textShadow = "0 0 25px rgb(255, 0, 0)";
            gameResult.innerHTML = `You lost`;
            lossesCounter.innerHTML++;
            audioYouLost.src = "./res/audio/youLost.mp3";
            audioYouLost.play();
            levelTENCompleted = false;
            levelTEN.disabled = false;
            yourHp.innerHTML = yourHpValue;
            backBtn.style.zIndex = "999";
            enemyHp.innerHTML = 65;
        }
        if (enemyHp.innerHTML <= 0 && yourHp.innerHTML > 0) {
            clearInterval(enemyDamage);

            enemy.style.animation = "none";
            game.style.display = "none";
            gameResult.style.display = "block";
            gameResult.style.textShadow = "0 0 25px rgb(0, 255, 0)";
            gameResult.innerHTML = `You won`;
            winsCounter.innerHTML++;
            audioYouWin.src = "./res/audio/youWin.mp3";
            audioYouWin.play();
            levelTENCompleted = true;
            levelTEN.disabled = true;
            yourXPValue += yourXPIncrease;
            yourXP.innerHTML = yourXPValue;
            yourHp.innerHTML = yourHpValue;
            backBtn.style.zIndex = "999";
            enemyHp.innerHTML = 65;
        }

    }, 1000);

}

//------------------------------------ level 11
levelELEVEN.onmouseover = () => {
    enemyName.innerHTML = "Black Panther";
}
levelELEVEN.onmouseout = () => {
    enemyName.innerHTML = " ";
}
levelELEVEN.onmousedown = () => {
    levelELEVEN.style.backgroundColor = "white";
    levelELEVEN.style.color = "red";
}
levelELEVEN.onmouseup = () => {
    levelELEVEN.style.backgroundColor = "transparent";
    levelELEVEN.style.color = "black";
}

levelELEVEN.onclick = () => {
    if (levelONECompleted || levelTWOCompleted || levelTHREECompleted || levelFOURCompleted || levelFIVECompleted || levelSIXCompleted || levelSEVENCompleted || levelEIGHTCompleted || levelNINECompleted || levelTENCompleted || levelELEVENCompleted) {
        console.log("Level is completed");
    }
    game.style.backgroundImage = "url(./res/img/blackpantherBG.png)";
    enemy.src = "./res/img/enemy.blackpanther.png";
    enemy.style.animation = "enemyMoving 1s infinite";
    levelInfo.style.display = "none";
    document.body.style.backgroundColor = "black";
    audioButtonClick.src = "./res/audio/buttonsound.mp3";
    audioButtonClick.play();
    levelsText.style.display = "none";
    game.style.display = "flex";
    gridOfLevels.style.display = "none";
    yourHp.innerHTML = yourHpValue;
    enemyHp.innerHTML = 70;
    backBtn.style.display = "none";
    backBtnShop.style.zIndex = "0";
    const enemyDamage = setInterval(() => {
        yourHp.innerHTML -= 11;

        if (yourHp.innerHTML <= 0) {
            clearInterval(enemyDamage);

            enemy.style.animation = "none";
            game.style.display = "none";
            gameResult.style.display = "block";
            gameResult.style.textShadow = "0 0 25px rgb(255, 0, 0)";
            gameResult.innerHTML = `You lost`;
            lossesCounter.innerHTML++;
            audioYouLost.src = "./res/audio/youLost.mp3";
            audioYouLost.play();
            levelELEVENCompleted = false;
            levelELEVEN.disabled = false;
            yourHp.innerHTML = yourHpValue;
            backBtn.style.zIndex = "999";
            enemyHp.innerHTML = 70;
        }
        if (enemyHp.innerHTML <= 0 && yourHp.innerHTML > 0) {
            clearInterval(enemyDamage);

            enemy.style.animation = "none";
            game.style.display = "none";
            gameResult.style.display = "block";
            gameResult.style.textShadow = "0 0 25px rgb(0, 255, 0)";
            gameResult.innerHTML = `You won`;
            winsCounter.innerHTML++;
            audioYouWin.src = "./res/audio/youWin.mp3";
            audioYouWin.play();
            levelELEVENCompleted = true;
            levelELEVEN.disabled = true;
            yourXPValue += yourXPIncrease;
            yourXP.innerHTML = yourXPValue;
            yourHp.innerHTML = yourHpValue;
            backBtn.style.zIndex = "999";
            enemyHp.innerHTML = 70;
        }

    }, 1500);

}

//------------------------------------ level 12
levelTWELVE.onmouseover = () => {
    enemyName.innerHTML = "Ghost rider";
}
levelTWELVE.onmouseout = () => {
    enemyName.innerHTML = " ";
}
levelTWELVE.onmousedown = () => {
    levelTWELVE.style.backgroundColor = "white";
    levelTWELVE.style.color = "red";
}
levelTWELVE.onmouseup = () => {
    levelTWELVE.style.backgroundColor = "transparent";
    levelTWELVE.style.color = "black";
}

levelTWELVE.onclick = () => {
    if (levelONECompleted || levelTWOCompleted || levelTHREECompleted || levelFOURCompleted || levelFIVECompleted || levelSIXCompleted || levelSEVENCompleted || levelEIGHTCompleted || levelNINECompleted || levelTENCompleted || levelELEVENCompleted || levelTWELVECompleted) {
        console.log("Level is completed");
    }
    game.style.backgroundImage = "url(./res/img/ghostriderBG.png)";
    enemy.src = "./res/img/enemy.ghostrider.png";
    enemy.style.animation = "enemyMoving 1s infinite";
    levelInfo.style.display = "none";
    document.body.style.backgroundColor = "black";
    audioButtonClick.src = "./res/audio/buttonsound.mp3";
    audioButtonClick.play();
    levelsText.style.display = "none";
    game.style.display = "flex";
    gridOfLevels.style.display = "none";
    yourHp.innerHTML = yourHpValue;
    enemyHp.innerHTML = 75;
    backBtn.style.display = "none";
    backBtnShop.style.zIndex = "0";
    const enemyDamage = setInterval(() => {
        yourHp.innerHTML -= 12;

        if (yourHp.innerHTML <= 0) {
            clearInterval(enemyDamage);

            enemy.style.animation = "none";
            game.style.display = "none";
            gameResult.style.display = "block";
            gameResult.style.textShadow = "0 0 25px rgb(255, 0, 0)";
            gameResult.innerHTML = `You lost`;
            lossesCounter.innerHTML++;
            audioYouLost.src = "./res/audio/youLost.mp3";
            audioYouLost.play();
            levelTWELVECompleted = false;
            levelTWELVE.disabled = false;
            yourHp.innerHTML = yourHpValue;
            backBtn.style.zIndex = "999";
            enemyHp.innerHTML = 75;
        }
        if (enemyHp.innerHTML <= 0 && yourHp.innerHTML > 0) {
            clearInterval(enemyDamage);

            enemy.style.animation = "none";
            game.style.display = "none";
            gameResult.style.display = "block";
            gameResult.style.textShadow = "0 0 25px rgb(0, 255, 0)";
            gameResult.innerHTML = `You won`;
            winsCounter.innerHTML++;
            audioYouWin.src = "./res/audio/youWin.mp3";
            audioYouWin.play();
            levelTWELVECompleted = true;
            levelTWELVE.disabled = true;
            yourXPValue += yourXPIncrease;
            yourXP.innerHTML = yourXPValue;
            yourHp.innerHTML = yourHpValue;
            backBtn.style.zIndex = "999";
            enemyHp.innerHTML = 75;
        }

    }, 1500);

}

//------------------------------------ level 13
levelTHIRTEEN.onmouseover = () => {
    enemyName.innerHTML = "Magneto";
}
levelTHIRTEEN.onmouseout = () => {
    enemyName.innerHTML = " ";
}
levelTHIRTEEN.onmousedown = () => {
    levelTHIRTEEN.style.backgroundColor = "white";
    levelTHIRTEEN.style.color = "red";
}
levelTHIRTEEN.onmouseup = () => {
    levelTHIRTEEN.style.backgroundColor = "transparent";
    levelTHIRTEEN.style.color = "black";
}

levelTHIRTEEN.onclick = () => {
    if (levelONECompleted || levelTWOCompleted || levelTHREECompleted || levelFOURCompleted || levelFIVECompleted || levelSIXCompleted || levelSEVENCompleted || levelEIGHTCompleted || levelNINECompleted || levelTENCompleted || levelELEVENCompleted || levelTWELVECompleted || levelTHIRTEENCompleted) {
        console.log("Level is completed");
    }
    game.style.backgroundImage = "url(./res/img/magnetoBG.png)";
    enemy.src = "./res/img/enemy.magneto.png";
    enemy.style.animation = "enemyMoving 1s infinite";
    levelInfo.style.display = "none";
    document.body.style.backgroundColor = "black";
    audioButtonClick.src = "./res/audio/buttonsound.mp3";
    audioButtonClick.play();
    levelsText.style.display = "none";
    game.style.display = "flex";
    gridOfLevels.style.display = "none";
    yourHp.innerHTML = yourHpValue;
    enemyHp.innerHTML = 80;
    backBtn.style.display = "none";
    backBtnShop.style.zIndex = "0";
    const enemyDamage = setInterval(() => {
        yourHp.innerHTML -= 13;

        if (yourHp.innerHTML <= 0) {
            clearInterval(enemyDamage);

            enemy.style.animation = "none";
            game.style.display = "none";
            gameResult.style.display = "block";
            gameResult.style.textShadow = "0 0 25px rgb(255, 0, 0)";
            gameResult.innerHTML = `You lost`;
            lossesCounter.innerHTML++;
            audioYouLost.src = "./res/audio/youLost.mp3";
            audioYouLost.play();
            levelTHIRTEENCompleted = false;
            levelTHIRTEEN.disabled = false;
            yourHp.innerHTML = yourHpValue;
            backBtn.style.zIndex = "999";
            enemyHp.innerHTML = 80;
        }
        if (enemyHp.innerHTML <= 0 && yourHp.innerHTML > 0) {
            clearInterval(enemyDamage);

            enemy.style.animation = "none";
            game.style.display = "none";
            gameResult.style.display = "block";
            gameResult.style.textShadow = "0 0 25px rgb(0, 255, 0)";
            gameResult.innerHTML = `You won`;
            winsCounter.innerHTML++;
            audioYouWin.src = "./res/audio/youWin.mp3";
            audioYouWin.play();
            levelTHIRTEENCompleted = true;
            levelTHIRTEEN.disabled = true;
            yourXPValue += yourXPIncrease;
            yourXP.innerHTML = yourXPValue;
            yourHp.innerHTML = yourHpValue;
            backBtn.style.zIndex = "999";
            enemyHp.innerHTML = 80;
        }

    }, 1500);

}

//------------------------------------ game result system
gameResult.onclick = () => {

    console.log("funguje");
    document.body.style.backgroundColor = "red";
    audioButtonClick.src = "./res/audio/buttonsound.mp3";
    audioButtonClick.play();
    levelsText.style.display = "block";
    levelInfo.style.display = "block";
    levelONE.style.display = "block";
    gridOfLevels.style.display = "grid";
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
    game.style.display = "none";
    gameResult.style.display = "none";
    backBtn.style.display = "block";
}
