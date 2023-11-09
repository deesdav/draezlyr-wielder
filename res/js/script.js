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
const sendInputBtn = document.getElementById("sendInputBtn");
const realtimepresented = document.getElementById("realtimepresented");
const planets = document.getElementById("planets");
const marvelPlanet = document.getElementById("marvelPlanet");
const nameOfPlanet = document.getElementById("nameOfPlanet");
const headline = document.getElementById("headline");
const backBtn = document.getElementById("backBtn");


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
    }, 10000);
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
    storyinfo.style.display = "none";
    storyPart.style.display = "none";
    storyPartInput.style.display = "none";
    sendInputBtn.style.display = "none";
    planets.style.display = "flex";
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

}

//------------------------------------ level and fighting system
let levelONECompleted = false;
let levelTWOCompleted = false;
let levelTHREECompleted = false;
let levelFOURCompleted = false;

yourHp.style.color = "rgb(0, 255, 0)";
enemyHp.style.color = "rgb(255, 0, 0)";


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
    audioButtonClick.play();
    levelsText.style.display = "none";
    game.style.display = "flex";
    gridOfLevels.style.display = "none";
    yourHp.innerHTML = 20;
    enemyHp.innerHTML = 20;
    const enemyDamage = setInterval(() => {
        yourHp.innerHTML--;

        if (yourHp.innerHTML <= 0) {
            clearInterval(enemyDamage);
            enemyHp.innerHTML = 0;
            enemy.style.animation = "none";
            game.style.display = "none";
            gameResult.style.display = "block";
            gameResult.style.textShadow = "0 0 25px rgb(255, 0, 0)";
            gameResult.innerHTML = `You lost`;
            audioYouLost.src = "./res/audio/youLost.mp3";
            audioYouLost.play();
            levelONECompleted = false;
            levelONE.disabled = false;
            yourHp.innerHTML = 20;
            enemyHp.innerHTML = 20;

        }
        if (enemyHp.innerHTML <= 0 && yourHp.innerHTML > 0) {
            clearInterval(enemyDamage);
            enemyHp.innerHTML = 0;
            enemy.style.animation = "none";
            game.style.display = "none";
            gameResult.style.display = "block";
            gameResult.style.textShadow = "0 0 25px rgb(0, 255, 0)";
            gameResult.innerHTML = `You won`;
            audioYouWin.src = "./res/audio/youWin.mp3";
            audioYouWin.play();
            levelONECompleted = true;
            levelONE.disabled = true;
            yourXP.innerHTML = 2;
            yourHp.innerHTML = 20;

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
    yourHp.innerHTML = 20;
    enemyHp.innerHTML = 25;
    const enemyDamage = setInterval(() => {
        yourHp.innerHTML -= 2;

        if (yourHp.innerHTML <= 0) {
            clearInterval(enemyDamage);
            enemyHp.innerHTML = 0;
            enemy.style.animation = "none";
            game.style.display = "none";
            gameResult.style.display = "block";
            gameResult.style.textShadow = "0 0 25px rgb(255, 0, 0)";
            gameResult.innerHTML = `You lost`;
            audioYouLost.src = "./res/audio/youLost.mp3";
            audioYouLost.play();
            levelTWOCompleted = false;
            levelTWO.disabled = false;
            yourHp.innerHTML = 20;
            enemyHp.innerHTML = 25;
        }
        if (enemyHp.innerHTML <= 0 && yourHp.innerHTML > 0) {
            clearInterval(enemyDamage);
            enemyHp.innerHTML = 0;
            enemy.style.animation = "none";
            game.style.display = "none";
            gameResult.style.display = "block";
            gameResult.style.textShadow = "0 0 25px rgb(0, 255, 0)";
            gameResult.innerHTML = `You won`;
            audioYouWin.src = "./res/audio/youWin.mp3";
            audioYouWin.play();
            levelTWOCompleted = true;
            levelTWO.disabled = true;
            yourXP.innerHTML = 4;
            yourHp.innerHTML = 20;
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
    enemy.src = "";
    enemyHp.innerHTML = 30;
    enemy.style.animation = "enemyMoving 1s infinite";
    levelInfo.style.display = "none";
    document.body.style.backgroundColor = "black";
    audioButtonClick.src = "./res/audio/buttonsound.mp3";
    audioButtonClick.play();
    levelsText.style.display = "none";
    game.style.display = "flex";
    gridOfLevels.style.display = "none";
    yourHp.innerHTML = 20;
    enemyHp.innerHTML = 30;
    const enemyDamage = setInterval(() => {
        yourHp.innerHTML -= 3;

        if (yourHp.innerHTML <= 0) {
            clearInterval(enemyDamage);
            enemyHp.innerHTML = 0;
            enemy.style.animation = "none";
            game.style.display = "none";
            gameResult.style.display = "block";
            gameResult.style.textShadow = "0 0 25px rgb(255, 0, 0)";
            gameResult.innerHTML = `You lost`;
            audioYouLost.src = "./res/audio/youLost.mp3";
            audioYouLost.play();
            levelTHREECompleted = false;
            levelTHREE.disabled = false;
            yourHp.innerHTML = 20;
            enemyHp.innerHTML = 30;
        }
        if (enemyHp.innerHTML <= 0 && yourHp.innerHTML > 0) {
            clearInterval(enemyDamage);
            enemyHp.innerHTML = 0;
            enemy.style.animation = "none";
            game.style.display = "none";
            gameResult.style.display = "block";
            gameResult.style.textShadow = "0 0 25px rgb(0, 255, 0)";
            gameResult.innerHTML = `You won`;
            audioYouWin.src = "./res/audio/youWin.mp3";
            audioYouWin.play();
            levelTHREECompleted = true;
            levelTHREE.disabled = true;
            yourXP.innerHTML = 6;
            yourHp.innerHTML = 20;
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
    game.style.backgroundImage = "url(./res/img/.png)";
    enemy.src = "";
    enemyHp.innerHTML = 30;
    enemy.style.animation = "enemyMoving 1s infinite";
    levelInfo.style.display = "none";
    document.body.style.backgroundColor = "black";
    audioButtonClick.src = "./res/audio/buttonsound.mp3";
    audioButtonClick.play();
    levelsText.style.display = "none";
    game.style.display = "flex";
    gridOfLevels.style.display = "none";
    yourHp.innerHTML = 20;
    enemyHp.innerHTML = 35;
    const enemyDamage = setInterval(() => {
        yourHp.innerHTML -= 3;

        if (yourHp.innerHTML <= 0) {
            clearInterval(enemyDamage);
            enemyHp.innerHTML = 0;
            enemy.style.animation = "none";
            game.style.display = "none";
            gameResult.style.display = "block";
            gameResult.style.textShadow = "0 0 25px rgb(255, 0, 0)";
            gameResult.innerHTML = `You lost`;
            audioYouLost.src = "./res/audio/youLost.mp3";
            audioYouLost.play();
            levelFOURCompleted = false;
            levelFOUR.disabled = false;
            yourHp.innerHTML = 20;
            enemyHp.innerHTML = 30;
        }
        if (enemyHp.innerHTML <= 0 && yourHp.innerHTML > 0) {
            clearInterval(enemyDamage);
            enemyHp.innerHTML = 0;
            enemy.style.animation = "none";
            game.style.display = "none";
            gameResult.style.display = "block";
            gameResult.style.textShadow = "0 0 25px rgb(0, 255, 0)";
            gameResult.innerHTML = `You won`;
            audioYouWin.src = "./res/audio/youWin.mp3";
            audioYouWin.play();
            levelFOURCompleted = true;
            levelFOUR.disabled = true;
            yourXP.innerHTML = 8;
            yourHp.innerHTML = 20;
            enemyHp.innerHTML = 30;
        }

    }, 1000);

}

//------------------------------------ level 5 ...


//------------------------------------ game result
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
    game.style.display = "none";
    gameResult.style.display = "none";
    backBtn.style.display = "block";
}

//------------------------------------ enemy system
enemy.onmousedown = () => {
    heroAttack.style.left = "35%";
    heroAttack.style.display = "block";
    heroIdle.style.display = "none";
    enemy.style.transform = "rotate(5deg) scale(1.5)";
    enemyHp.innerHTML--;
    audioButtonClick.src = "./res/audio/buttonsound.mp3";
    audioButtonClick.play();

}
enemy.onmouseup = () => {
    heroAttack.style.display = "none";
    heroIdle.style.display = "block";
    heroIdle.style.left = "20%";
    enemy.style.transform = "rotate(0deg) scale(1.5)";
}
