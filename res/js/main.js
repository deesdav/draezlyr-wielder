const audioButtonClick = document.getElementById("audioButtonClick");
const audioButtonClickMulti = document.getElementById("audioButtonClickMulti");
const audioLobbyBackground = document.getElementById("audioLobbyBackground");
const lobby = document.getElementById("lobby");
const play = document.getElementById("play");
const story = document.getElementById("story");
const author = document.getElementById("author");
const storyinfo = document.getElementById("storyinfo");
const nextBtn = document.getElementById("nextBtn");
const storyPart = document.getElementById("storyPart");
const storyPartInput = document.getElementById("storyPartInput");
const yourName = document.getElementById("yourName");
const sendInputBtn = document.getElementById("sendInputBtn");
const realtimepresented = document.getElementById("realtimepresented");
const planets = document.getElementById("planets");
const marvelPlanet = document.getElementById("marvelPlanet");
const nameOfPlanet = document.getElementById("nameOfPlanet");
const headline = document.getElementById("headline");


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
const levelSIXTEEN = document.getElementById("levelSIXTEEN");
const levelSEVENTEEN = document.getElementById("levelSEVENTEEN");
const levelEIGHTTEEN = document.getElementById("levelEIGHTTEEN");
const levelNINETEEN = document.getElementById("levelNINETEEN");
const levelTWENTY = document.getElementById("levelTWENTY");


const storyrecap = document.getElementById("storyrecap");
const game = document.getElementById("game");
const hero = document.getElementById("hero");
const enemy = document.getElementById("enemy");
const yourHp = document.getElementById("yourHp");
const enemyHp = document.getElementById("enemyHp");
const gameResult = document.getElementById("gameResult");

const realtime = new Date();
const hours = realtime.getHours();
console.log(hours);

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
// lobby buttons

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
    document.body.style.cursor = "progress";
    play.style.display = "none";
    story.style.display = "none";
    author.style.display = "none";
    lobby.style.display = "none";
    sendInputBtn.style.display = "none";
    realtimepresented.style.display = "none";

    planets.style.top = "250px";
    const playInterval = setTimeout(() => {
        planets.style.display = "none";
        document.body.style.cursor = "default";
        audioButtonClickMulti.pause();
        audioButtonClickMulti.currentTime = 0;
        storyinfo.style.display = "flex";
    }, 10000);
    if (storyinfo.style.display == "flex") {
        clearTimeout(playInterval)
    }

}

// brief info and entering your name or not

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
    storyinfo.style.display = "none";
    storyPart.style.display = "none";
    storyPartInput.style.display = "none";
    sendInputBtn.style.display = "none";
    planets.style.display = "flex";
    document.body.style.backgroundImage = "none";

}

// fast refresh page function and secret

document.addEventListener("keyup", (e) => {
    console.log(e);
    switch (e.key) {
        case ("Escape"):
            window.location.reload();
            break;
        case ("7", "7", "7", "8"):
            hero.src = "./res/img/secret.hero.idle.png";
            break;
        default:
            console.log("you type something wrong");
            break;
    }
});

marvelPlanet.onclick = () => {
    audioButtonClick.src = "./res/audio/buttonsound.mp3";
    audioButtonClick.play();
    levelsText.style.display = "block";
    gridOfLevels.style.display = "grid";
    levelONE.style.display = "block";
    marvelPlanet.style.display = "none";
    nameOfPlanet.style.display = "none";
    document.body.style.backgroundColor = "red";
    storyPartInput.style.display = "none";
}

// level and fight system
let levelOneCompleted = false;

levelONE.onclick = () => {
    if (levelOneCompleted) {
        console.log("Level is completed");
    }

    document.body.style.backgroundColor = "black";
    audioButtonClick.src = "./res/audio/buttonsound.mp3";
    audioButtonClick.play();
    levelsText.style.display = "none";
    levelONE.style.display = "none";
    game.style.display = "flex";
    gridOfLevels.style.display = "none";
    const enemyDamage = setInterval(() => {
        yourHp.innerHTML--;

        if (yourHp.innerHTML <= 0) {
            clearInterval(enemyDamage);
            enemyHp.innerHTML = 0;
            enemy.style.animation = "none";
            game.style.display = "none";
            gameResult.style.display = "block";
            gameResult.innerHTML = `You lost`;
        }
        if (enemyHp.innerHTML <= 0 && yourHp.innerHTML > 0) {
            clearInterval(enemyDamage);
            enemyHp.innerHTML = 0;
            enemy.style.animation = "none";
            game.style.display = "none";
            gameResult.style.display = "block";
            gameResult.innerHTML = `You won`;
        }

    }, 1000);

    //disabled level one because is completed
    levelOneCompleted = true;
    levelONE.disabled = true;
}


let yourHpValue = 20;
let enemyHpValue = 20;

yourHp.innerHTML = yourHpValue;
enemyHp.innerHTML = enemyHpValue;

enemy.onmousedown = () => {
    hero.style.left = "35%";
    hero.src = "./res/img/hero.attack.png";
    enemy.style.transform = "rotate(5deg)";
    enemyHp.innerHTML--;
    audioButtonClick.src = "./res/audio/buttonsound.mp3";
    audioButtonClick.play();
}
enemy.onmouseup = () => {
    hero.style.left = "20%";
    hero.src = "./res/img/hero.idle.png";
    enemy.style.transform = "none";
}


levelONE.onmousedown = () => {
    levelONE.style.backgroundColor = "white";
    levelONE.style.color = "red";
}
levelONE.onmouseup = () => {
    levelONE.style.backgroundColor = "transparent";
    levelONE.style.color = "black";
}

gameResult.onclick = () => {
    console.log("funguje");
    document.body.style.backgroundColor = "red";
    audioButtonClick.src = "./res/audio/buttonsound.mp3";
    audioButtonClick.play();
    levelsText.style.display = "block";
    levelONE.style.display = "block";
    gridOfLevels.style.display = "grid";
    levelTWO.style.display = "block";
    game.style.display = "none";
    gameResult.style.display = "none";
}
levelTWO.onclick = () => {
    audioButtonClick.src = "./res/audio/buttonsound.mp3";
    audioButtonClick.play();
}