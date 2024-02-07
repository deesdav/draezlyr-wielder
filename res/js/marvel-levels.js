//------------------------------------ marvelLevels onmousedown and onmouseup
const marvelLevels = [levelONE, levelTWO, levelTHREE, levelFOUR, levelFIVE, levelSIX, levelSEVEN, levelEIGHT,
    levelNINE, levelTEN, levelELEVEN, levelTWELVE, levelTHIRTEEN, levelFOURTEEN, levelFIFTEEN];

const enemiesNamesOver = ["SPIDER MAN", "HULK", "IRON MAN", "THOR", "BLACK WIDOW", "CAPTAIN AMERICA", "DOCTOR STRANGE",
    "VENOM", "WOLVERINE", "DEADPOOL", "BLACK PANTHER", "GHOST RIDER", "LOKI", "CAPTAIN MARVEL", "THANOS"]

for (let i = 0; i < marvelLevels.length; i++) {
    marvelLevels[i].onmouseover = () => {
        enemyName.innerText = enemiesNamesOver[i];

    }
    marvelLevels[i].onmouseout = () => {
        enemyName.innerText = " ";
    }
}

//------------------------------------ marvel level 1
levelONE.onclick = () => {
    game.style.filter = "saturate(120%) drop-shadow(0px 0px 1000px rgba(255, 0, 0, 0.41))";
    enemyHpTextValue.innerText = `SPIDER MAN´S HP:`;
    const nameValue = storyPartInput.value;
    const defaultName = "Draezlyr Wielder";
    if (nameValue == "") {
        yourHpTextValue.innerText = `${defaultName}´S HP:`;
    } else {
        yourHpTextValue.innerText = `${nameValue}´S HP:`;
    }
    game.style.boxShadow = "0 0 70px red inset";
    if (levelONECompleted) {
        console.log("Level is completed");
    }
    game.style.backgroundImage = "url(./res/img/spidermanBG.gif)";
    enemy.src = "./res/img/enemy.spiderman.png";
    levelInfo.style.display = "none";
    document.body.style.backgroundColor = "black";
    audioButtonClick.src = "./res/audio/buttonsound.mp3";
    enemy.style.animation = "enemyMoving 1s infinite";
    audioButtonClick.play();
    levelsText.style.display = "none";
    game.style.display = "flex";
    gridOfLevels.style.display = "none";
    yourHp.innerText = yourHpValue;
    enemyHp.innerText = 20;
    backBtn.style.display = "none";
    backBtnShop.style.zIndex = "0";
    const enemyDamage = setInterval(() => {
        yourHp.innerText--;
        audioButtonClick.src = "./res/audio/punchAttackSound.mp3";
        audioButtonClick.play();
        if (yourHp.innerText <= 0) {
            clearInterval(enemyDamage);

            enemy.style.animation = "none";
            game.style.display = "none";
            gameResult.style.display = "block";
            gameResult.style.textShadow = "0 0 25px rgb(255, 0, 0)";
            const nameValue = storyPartInput.value;
            const defaultName = "Draezlyr Wielder";
            if (nameValue == "") {
                gameResult.innerText = `${defaultName} lost`;
            } else {
                gameResult.innerText = `${nameValue} lost`;
            }
            lossesCounter.innerText++;
            audioYouLost.src = "./res/audio/youLost.mp3";
            audioYouLost.play();
            levelONECompleted = false;
            levelONE.disabled = false;
            yourHp.innerText = yourHpValue;
            backBtn.style.zIndex = "999";
            enemyHp.innerText = 20;
        }
        if (enemyHp.innerText <= 0 && yourHp.innerText > 0) {
            clearInterval(enemyDamage);

            enemy.style.animation = "none";
            game.style.display = "none";
            gameResult.style.display = "block";
            gameResult.style.textShadow = "0 0 25px rgb(0, 255, 0)";
            const nameValue = storyPartInput.value;
            const defaultName = "Draezlyr Wielder";
            if (nameValue == "") {
                gameResult.innerText = `${defaultName} won`;
            } else {
                gameResult.innerText = `${nameValue} won`;
            }
            winsCounter.innerText++;
            audioYouWin.src = "./res/audio/youWin.mp3";
            audioYouWin.play();
            levelONECompleted = true;
            levelONE.disabled = true;
            yourXPValue += yourXPIncrease;
            yourXP.innerText = yourXPValue;
            yourHp.innerText = yourHpValue;
            backBtn.style.zIndex = "999";
            enemyHp.innerText = 20;
        }

    }, 1000);

}

//------------------------------------ marvel level 2
levelTWO.onclick = () => {
    enemyHpTextValue.innerText = `HULK´S HP:`;
    game.style.boxShadow = "0 0 70px green inset";
    if (levelONECompleted || levelTWOCompleted) {
        console.log("Level is completed");
    }
    game.style.backgroundImage = "url(./res/img/hulkBG.gif)";
    enemy.src = "./res/img/enemy.hulk.gif";
    enemy.style.animation = "enemyMoving 1s infinite";
    levelInfo.style.display = "none";
    document.body.style.backgroundColor = "black";
    audioButtonClick.src = "./res/audio/buttonsound.mp3";
    audioButtonClick.play();
    levelsText.style.display = "none";
    game.style.display = "flex";
    gridOfLevels.style.display = "none";
    yourHp.innerText = yourHpValue;
    enemyHp.innerText = 25;
    backBtn.style.display = "none";
    backBtnShop.style.zIndex = "0";
    const enemyDamage = setInterval(() => {
        yourHp.innerText -= 2;
        audioButtonClick.src = "./res/audio/punchAttackSound.mp3";
        audioButtonClick.play();
        if (yourHp.innerText <= 0) {
            clearInterval(enemyDamage);

            enemy.style.animation = "none";
            game.style.display = "none";
            gameResult.style.display = "block";
            gameResult.style.textShadow = "0 0 25px rgb(255, 0, 0)";
            const nameValue = storyPartInput.value;
            const defaultName = "Draezlyr Wielder";
            if (nameValue == "") {
                gameResult.innerText = `${defaultName} lost`;
            } else {
                gameResult.innerText = `${nameValue} lost`;
            }
            lossesCounter.innerText++;
            audioYouLost.src = "./res/audio/youLost.mp3";
            audioYouLost.play();
            levelTWOCompleted = false;
            levelTWO.disabled = false;
            yourHp.innerText = yourHpValue;
            backBtn.style.zIndex = "999";
            enemyHp.innerText = 25;
        }
        if (enemyHp.innerText <= 0 && yourHp.innerText > 0) {
            clearInterval(enemyDamage);

            enemy.style.animation = "none";
            game.style.display = "none";
            gameResult.style.display = "block";
            gameResult.style.textShadow = "0 0 25px rgb(0, 255, 0)";
            const nameValue = storyPartInput.value;
            const defaultName = "Draezlyr Wielder";
            if (nameValue == "") {
                gameResult.innerText = `${defaultName} won`;
            } else {
                gameResult.innerText = `${nameValue} won`;
            }
            winsCounter.innerText++;
            audioYouWin.src = "./res/audio/youWin.mp3";
            audioYouWin.play();
            levelTWOCompleted = true;
            levelTWO.disabled = true;
            yourXPValue += yourXPIncrease;
            yourXP.innerText = yourXPValue;
            yourHp.innerText = yourHpValue;
            backBtn.style.zIndex = "999";
            enemyHp.innerText = 25;
        }


    }, 1000);

}

//------------------------------------ marvel level 3
levelTHREE.onclick = () => {
    enemyHpTextValue.innerText = `IRON MAN´S HP:`;
    game.style.boxShadow = "0 0 70px gold inset";
    if (levelONECompleted || levelTWOCompleted || levelTHREECompleted) {
        console.log("Level is completed");
    }
    game.style.backgroundImage = "url(./res/img/ironmanBG.gif)";
    enemy.src = "./res/img/enemy.ironman.gif";
    enemy.style.animation = "enemyMoving 1s infinite";
    levelInfo.style.display = "none";
    document.body.style.backgroundColor = "black";
    audioButtonClick.src = "./res/audio/buttonsound.mp3";
    audioButtonClick.play();
    levelsText.style.display = "none";
    game.style.display = "flex";
    gridOfLevels.style.display = "none";
    yourHp.innerText = yourHpValue;
    enemyHp.innerText = 30;
    backBtn.style.display = "none";
    backBtnShop.style.zIndex = "0";
    const enemyDamage = setInterval(() => {
        yourHp.innerText -= 3;
        audioButtonClick.src = "./res/audio/punchAttackSound.mp3";
        audioButtonClick.play();
        if (yourHp.innerText <= 0) {
            clearInterval(enemyDamage);

            enemy.style.animation = "none";
            game.style.display = "none";
            gameResult.style.display = "block";
            gameResult.style.textShadow = "0 0 25px rgb(255, 0, 0)";
            const nameValue = storyPartInput.value;
            const defaultName = "Draezlyr Wielder";
            if (nameValue == "") {
                gameResult.innerText = `${defaultName} lost`;
            } else {
                gameResult.innerText = `${nameValue} lost`;
            }
            lossesCounter.innerText++;
            audioYouLost.src = "./res/audio/youLost.mp3";
            audioYouLost.play();
            levelTHREECompleted = false;
            levelTHREE.disabled = false;
            yourHp.innerText = yourHpValue;
            backBtn.style.zIndex = "999";
            enemyHp.innerText = 30;
        }
        if (enemyHp.innerText <= 0 && yourHp.innerText > 0) {
            clearInterval(enemyDamage);

            enemy.style.animation = "none";
            game.style.display = "none";
            gameResult.style.display = "block";
            gameResult.style.textShadow = "0 0 25px rgb(0, 255, 0)";
            const nameValue = storyPartInput.value;
            const defaultName = "Draezlyr Wielder";
            if (nameValue == "") {
                gameResult.innerText = `${defaultName} won`;
            } else {
                gameResult.innerText = `${nameValue} won`;
            }
            winsCounter.innerText++;
            audioYouWin.src = "./res/audio/youWin.mp3";
            audioYouWin.play();
            levelTHREECompleted = true;
            levelTHREE.disabled = true;
            yourXPValue += yourXPIncrease;
            yourXP.innerText = yourXPValue;
            yourHp.innerText = yourHpValue;
            backBtn.style.zIndex = "999";
            enemyHp.innerText = 30;
        }


    }, 1000);

}

//------------------------------------ marvel level 4
levelFOUR.onclick = () => {
    enemyHpTextValue.innerText = `THOR´S HP:`;
    game.style.boxShadow = "0 0 70px lightblue inset";
    if (levelONECompleted || levelTWOCompleted || levelTHREECompleted || levelFOURCompleted) {
        console.log("Level is completed");
    }
    game.style.backgroundImage = "url(./res/img/thorBG.gif)";
    enemy.src = "./res/img/enemy.thor.gif";
    enemy.style.animation = "enemyMoving 1s infinite";
    levelInfo.style.display = "none";
    document.body.style.backgroundColor = "black";
    audioButtonClick.src = "./res/audio/buttonsound.mp3";
    audioButtonClick.play();
    levelsText.style.display = "none";
    game.style.display = "flex";
    gridOfLevels.style.display = "none";
    yourHp.innerText = yourHpValue;
    enemyHp.innerText = 35;
    backBtn.style.display = "none";
    backBtnShop.style.zIndex = "0";
    const enemyDamage = setInterval(() => {
        yourHp.innerText -= 4;
        audioButtonClick.src = "./res/audio/punchAttackSound.mp3";
        audioButtonClick.play();
        if (yourHp.innerText <= 0) {
            clearInterval(enemyDamage);

            enemy.style.animation = "none";
            game.style.display = "none";
            gameResult.style.display = "block";
            gameResult.style.textShadow = "0 0 25px rgb(255, 0, 0)";
            const nameValue = storyPartInput.value;
            const defaultName = "Draezlyr Wielder";
            if (nameValue == "") {
                gameResult.innerText = `${defaultName} lost`;
            } else {
                gameResult.innerText = `${nameValue} lost`;
            }
            lossesCounter.innerText++;
            audioYouLost.src = "./res/audio/youLost.mp3";
            audioYouLost.play();
            levelFOURCompleted = false;
            levelFOUR.disabled = false;
            yourHp.innerText = yourHpValue;
            backBtn.style.zIndex = "999";
            enemyHp.innerText = 35;
        }
        if (enemyHp.innerText <= 0 && yourHp.innerText > 0) {
            clearInterval(enemyDamage);

            enemy.style.animation = "none";
            game.style.display = "none";
            gameResult.style.display = "block";
            gameResult.style.textShadow = "0 0 25px rgb(0, 255, 0)";
            const nameValue = storyPartInput.value;
            const defaultName = "Draezlyr Wielder";
            if (nameValue == "") {
                gameResult.innerText = `${defaultName} won`;
            } else {
                gameResult.innerText = `${nameValue} won`;
            }
            winsCounter.innerText++;
            audioYouWin.src = "./res/audio/youWin.mp3";
            audioYouWin.play();
            levelFOURCompleted = true;
            levelFOUR.disabled = true;
            yourXPValue += yourXPIncrease;
            yourXP.innerText = yourXPValue;
            yourHp.innerText = yourHpValue;
            backBtn.style.zIndex = "999";
            enemyHp.innerText = 35;
        }


    }, 1000);

}

//------------------------------------ marvel level 5
levelFIVE.onclick = () => {
    enemyHpTextValue.innerText = `BLACK WIDOW´S HP:`;
    game.style.boxShadow = "0 0 70px grey inset";
    if (levelONECompleted || levelTWOCompleted || levelTHREECompleted || levelFOURCompleted || levelFIVECompleted) {
        console.log("Level is completed");
    }
    game.style.backgroundImage = "url(./res/img/blackwidowBG.gif)";
    enemy.src = "./res/img/enemy.blackwidow.gif";
    enemy.style.animation = "enemyMoving 1s infinite";
    levelInfo.style.display = "none";
    document.body.style.backgroundColor = "black";
    audioButtonClick.src = "./res/audio/buttonsound.mp3";
    audioButtonClick.play();
    levelsText.style.display = "none";
    game.style.display = "flex";
    gridOfLevels.style.display = "none";
    yourHp.innerText = yourHpValue;
    enemyHp.innerText = 40;
    backBtn.style.display = "none";
    backBtnShop.style.zIndex = "0";
    const enemyDamage = setInterval(() => {
        yourHp.innerText -= 5;
        audioButtonClick.src = "./res/audio/punchAttackSound.mp3";
        audioButtonClick.play();
        if (yourHp.innerText <= 0) {
            clearInterval(enemyDamage);

            enemy.style.animation = "none";
            game.style.display = "none";
            gameResult.style.display = "block";
            gameResult.style.textShadow = "0 0 25px rgb(255, 0, 0)";
            const nameValue = storyPartInput.value;
            const defaultName = "Draezlyr Wielder";
            if (nameValue == "") {
                gameResult.innerText = `${defaultName} lost`;
            } else {
                gameResult.innerText = `${nameValue} lost`;
            }
            lossesCounter.innerText++;
            audioYouLost.src = "./res/audio/youLost.mp3";
            audioYouLost.play();
            levelFIVECompleted = false;
            levelFIVE.disabled = false;
            yourHp.innerText = yourHpValue;
            backBtn.style.zIndex = "999";
            enemyHp.innerText = 40;
        }
        if (enemyHp.innerText <= 0 && yourHp.innerText > 0) {
            clearInterval(enemyDamage);

            enemy.style.animation = "none";
            game.style.display = "none";
            gameResult.style.display = "block";
            gameResult.style.textShadow = "0 0 25px rgb(0, 255, 0)";
            if (nameValue == "") {
                gameResult.innerText = `${defaultName} won`;
            } else {
                gameResult.innerText = `${nameValue} won`;
            }
            winsCounter.innerText++;
            audioYouWin.src = "./res/audio/youWin.mp3";
            audioYouWin.play();
            levelFIVECompleted = true;
            levelFIVE.disabled = true;
            yourXPValue += yourXPIncrease;
            yourXP.innerText = yourXPValue;
            yourHp.innerText = yourHpValue;
            backBtn.style.zIndex = "999";
            enemyHp.innerText = 40;
        }

    }, 1000);

}
//------------------------------------ marvel level 6
levelSIX.onclick = () => {
    enemyHpTextValue.innerText = `CAPTAIN AMERICA´S HP:`;
    game.style.boxShadow = "0 0 70px skyblue inset";
    if (levelONECompleted || levelTWOCompleted || levelTHREECompleted || levelFOURCompleted || levelFIVECompleted || levelSIXCompleted) {
        console.log("Level is completed");
    }
    game.style.backgroundImage = "url(./res/img/captainamericaBG.gif)";
    enemy.src = "./res/img/enemy.captainamerica.gif";
    enemy.style.animation = "enemyMoving 1s infinite";
    levelInfo.style.display = "none";
    document.body.style.backgroundColor = "black";
    audioButtonClick.src = "./res/audio/buttonsound.mp3";
    audioButtonClick.play();
    levelsText.style.display = "none";
    game.style.display = "flex";
    gridOfLevels.style.display = "none";
    yourHp.innerText = yourHpValue;
    enemyHp.innerText = 45;
    backBtn.style.display = "none";
    backBtnShop.style.zIndex = "0";
    const enemyDamage = setInterval(() => {
        yourHp.innerText -= 6;
        audioButtonClick.src = "./res/audio/punchAttackSound.mp3";
        audioButtonClick.play();
        if (yourHp.innerText <= 0) {
            clearInterval(enemyDamage);

            enemy.style.animation = "none";
            game.style.display = "none";
            gameResult.style.display = "block";
            gameResult.style.textShadow = "0 0 25px rgb(255, 0, 0)";
            const nameValue = storyPartInput.value;
            const defaultName = "Draezlyr Wielder";
            if (nameValue == "") {
                gameResult.innerText = `${defaultName} lost`;
            } else {
                gameResult.innerText = `${nameValue} lost`;
            }
            lossesCounter.innerText++;
            audioYouLost.src = "./res/audio/youLost.mp3";
            audioYouLost.play();
            levelSIXCompleted = false;
            levelSIX.disabled = false;
            yourHp.innerText = yourHpValue;
            backBtn.style.zIndex = "999";
            enemyHp.innerText = 45;
        }
        if (enemyHp.innerText <= 0 && yourHp.innerText > 0) {
            clearInterval(enemyDamage);

            enemy.style.animation = "none";
            game.style.display = "none";
            gameResult.style.display = "block";
            gameResult.style.textShadow = "0 0 25px rgb(0, 255, 0)";
            const nameValue = storyPartInput.value;
            const defaultName = "Draezlyr Wielder";
            if (nameValue == "") {
                gameResult.innerText = `${defaultName} won`;
            } else {
                gameResult.innerText = `${nameValue} won`;
            }
            winsCounter.innerText++;
            audioYouWin.src = "./res/audio/youWin.mp3";
            audioYouWin.play();
            levelSIXCompleted = true;
            levelSIX.disabled = true;
            yourXPValue += yourXPIncrease;
            yourXP.innerText = yourXPValue;
            yourHp.innerText = yourHpValue;
            backBtn.style.zIndex = "999";
            enemyHp.innerText = 45;
        }

    }, 1000);

}
//------------------------------------ marvel level 7
levelSEVEN.onclick = () => {
    enemyHpTextValue.innerText = `DOCTOR STRANGE´S HP:`;
    game.style.boxShadow = "0 0 70px orange inset";
    if (levelONECompleted || levelTWOCompleted || levelTHREECompleted || levelFOURCompleted || levelFIVECompleted || levelSIXCompleted || levelSEVENCompleted) {
        console.log("Level is completed");
    }
    game.style.backgroundImage = "url(./res/img/doctorstrangeBG.gif)";
    enemy.src = "./res/img/enemy.doctorstrange.gif";
    enemy.style.animation = "enemyMoving 1s infinite";
    levelInfo.style.display = "none";
    document.body.style.backgroundColor = "black";
    audioButtonClick.src = "./res/audio/buttonsound.mp3";
    audioButtonClick.play();
    levelsText.style.display = "none";
    game.style.display = "flex";
    gridOfLevels.style.display = "none";
    yourHp.innerText = yourHpValue;
    enemyHp.innerText = 50;
    backBtn.style.display = "none";
    backBtnShop.style.zIndex = "0";
    const enemyDamage = setInterval(() => {
        yourHp.innerText -= 7;
        audioButtonClick.src = "./res/audio/punchAttackSound.mp3";
        audioButtonClick.play();
        if (yourHp.innerText <= 0) {
            clearInterval(enemyDamage);

            enemy.style.animation = "none";
            game.style.display = "none";
            gameResult.style.display = "block";
            gameResult.style.textShadow = "0 0 25px rgb(255, 0, 0)";
            const nameValue = storyPartInput.value;
            const defaultName = "Draezlyr Wielder";
            if (nameValue == "") {
                gameResult.innerText = `${defaultName} lost`;
            } else {
                gameResult.innerText = `${nameValue} lost`;
            }
            lossesCounter.innerText++;
            audioYouLost.src = "./res/audio/youLost.mp3";
            audioYouLost.play();
            levelSEVENCompleted = false;
            levelSEVEN.disabled = false;
            yourHp.innerText = yourHpValue;
            backBtn.style.zIndex = "999";
            enemyHp.innerText = 50;
        }
        if (enemyHp.innerText <= 0 && yourHp.innerText > 0) {
            clearInterval(enemyDamage);

            enemy.style.animation = "none";
            game.style.display = "none";
            gameResult.style.display = "block";
            gameResult.style.textShadow = "0 0 25px rgb(0, 255, 0)";
            const nameValue = storyPartInput.value;
            const defaultName = "Draezlyr Wielder";
            if (nameValue == "") {
                gameResult.innerText = `${defaultName} won`;
            } else {
                gameResult.innerText = `${nameValue} won`;
            }
            winsCounter.innerText++;
            audioYouWin.src = "./res/audio/youWin.mp3";
            audioYouWin.play();
            levelSEVENCompleted = true;
            levelSEVEN.disabled = true;
            yourXPValue += yourXPIncrease;
            yourXP.innerText = yourXPValue;
            yourHp.innerText = yourHpValue;
            backBtn.style.zIndex = "999";
            enemyHp.innerText = 50;
        }

    }, 1000);

}
//------------------------------------ marvel level 8
levelEIGHT.onclick = () => {
    enemyHpTextValue.innerText = `VENOM´S HP:`;
    game.style.boxShadow = "0 0 70px black inset";
    if (levelONECompleted || levelTWOCompleted || levelTHREECompleted || levelFOURCompleted || levelFIVECompleted || levelSIXCompleted || levelSEVENCompleted || levelEIGHTCompleted) {
        console.log("Level is completed");
    }
    game.style.backgroundImage = "url(./res/img/venomBG.gif)";
    enemy.src = "./res/img/enemy.venom.gif";
    enemy.style.animation = "enemyMoving 1s infinite";
    levelInfo.style.display = "none";
    document.body.style.backgroundColor = "black";
    audioButtonClick.src = "./res/audio/buttonsound.mp3";
    audioButtonClick.play();
    levelsText.style.display = "none";
    game.style.display = "flex";
    gridOfLevels.style.display = "none";
    yourHp.innerText = yourHpValue;
    enemyHp.innerText = 55;
    backBtn.style.display = "none";
    backBtnShop.style.zIndex = "0";
    const enemyDamage = setInterval(() => {
        yourHp.innerText -= 8;
        audioButtonClick.src = "./res/audio/punchAttackSound.mp3";
        audioButtonClick.play();
        if (yourHp.innerText <= 0) {
            clearInterval(enemyDamage);

            enemy.style.animation = "none";
            game.style.display = "none";
            gameResult.style.display = "block";
            gameResult.style.textShadow = "0 0 25px rgb(255, 0, 0)";
            const nameValue = storyPartInput.value;
            const defaultName = "Draezlyr Wielder";
            if (nameValue == "") {
                gameResult.innerText = `${defaultName} lost`;
            } else {
                gameResult.innerText = `${nameValue} lost`;
            }
            lossesCounter.innerText++;
            audioYouLost.src = "./res/audio/youLost.mp3";
            audioYouLost.play();
            levelEIGHTCompleted = false;
            levelEIGHT.disabled = false;
            yourHp.innerText = yourHpValue;
            backBtn.style.zIndex = "999";
            enemyHp.innerText = 55;
        }
        if (enemyHp.innerText <= 0 && yourHp.innerText > 0) {
            clearInterval(enemyDamage);

            enemy.style.animation = "none";
            game.style.display = "none";
            gameResult.style.display = "block";
            gameResult.style.textShadow = "0 0 25px rgb(0, 255, 0)";
            const nameValue = storyPartInput.value;
            const defaultName = "Draezlyr Wielder";
            if (nameValue == "") {
                gameResult.innerText = `${defaultName} won`;
            } else {
                gameResult.innerText = `${nameValue} won`;
            }
            winsCounter.innerText++;
            audioYouWin.src = "./res/audio/youWin.mp3";
            audioYouWin.play();
            levelEIGHTCompleted = true;
            levelEIGHT.disabled = true;
            yourXPValue += yourXPIncrease;
            yourXP.innerText = yourXPValue;
            yourHp.innerText = yourHpValue;
            backBtn.style.zIndex = "999";
            enemyHp.innerText = 55;
        }

    }, 1000);

}
//------------------------------------ marvel level 9
levelNINE.onclick = () => {
    enemyHpTextValue.innerText = `WOLVERINE´S HP:`;
    game.style.boxShadow = "0 0 70px yellow inset";
    if (levelONECompleted || levelTWOCompleted || levelTHREECompleted || levelFOURCompleted || levelFIVECompleted || levelSIXCompleted || levelSEVENCompleted || levelEIGHTCompleted || levelNINECompleted) {
        console.log("Level is completed");
    }
    game.style.backgroundImage = "url(./res/img/wolverineBG.gif)";
    enemy.src = "./res/img/enemy.wolverine.gif";
    enemy.style.animation = "enemyMoving 1s infinite";
    levelInfo.style.display = "none";
    document.body.style.backgroundColor = "black";
    audioButtonClick.src = "./res/audio/buttonsound.mp3";
    audioButtonClick.play();
    levelsText.style.display = "none";
    game.style.display = "flex";
    gridOfLevels.style.display = "none";
    yourHp.innerText = yourHpValue;
    enemyHp.innerText = 60;
    backBtn.style.display = "none";
    backBtnShop.style.zIndex = "0";
    const enemyDamage = setInterval(() => {
        yourHp.innerText -= 9;
        audioButtonClick.src = "./res/audio/punchAttackSound.mp3";
        audioButtonClick.play();
        if (yourHp.innerText <= 0) {
            clearInterval(enemyDamage);

            enemy.style.animation = "none";
            game.style.display = "none";
            gameResult.style.display = "block";
            gameResult.style.textShadow = "0 0 25px rgb(255, 0, 0)";
            const nameValue = storyPartInput.value;
            const defaultName = "Draezlyr Wielder";
            if (nameValue == "") {
                gameResult.innerText = `${defaultName} lost`;
            } else {
                gameResult.innerText = `${nameValue} lost`;
            }
            lossesCounter.innerText++;
            audioYouLost.src = "./res/audio/youLost.mp3";
            audioYouLost.play();
            levelNINECompleted = false;
            levelNINE.disabled = false;
            yourHp.innerText = yourHpValue;
            backBtn.style.zIndex = "999";
            enemyHp.innerText = 60;
        }
        if (enemyHp.innerText <= 0 && yourHp.innerText > 0) {
            clearInterval(enemyDamage);

            enemy.style.animation = "none";
            game.style.display = "none";
            gameResult.style.display = "block";
            gameResult.style.textShadow = "0 0 25px rgb(0, 255, 0)";
            const nameValue = storyPartInput.value;
            const defaultName = "Draezlyr Wielder";
            if (nameValue == "") {
                gameResult.innerText = `${defaultName} won`;
            } else {
                gameResult.innerText = `${nameValue} won`;
            }
            winsCounter.innerText++;
            audioYouWin.src = "./res/audio/youWin.mp3";
            audioYouWin.play();
            levelNINECompleted = true;
            levelNINE.disabled = true;
            yourXPValue += yourXPIncrease;
            yourXP.innerText = yourXPValue;
            yourHp.innerText = yourHpValue;
            backBtn.style.zIndex = "999";
            enemyHp.innerText = 60;
        }

    }, 1000);

}
//------------------------------------ marvel level 10
levelTEN.onclick = () => {
    enemyHpTextValue.innerText = `DEADPOOL´S HP:`;
    game.style.boxShadow = "0 0 70px darkred inset";
    if (levelONECompleted || levelTWOCompleted || levelTHREECompleted || levelFOURCompleted || levelFIVECompleted || levelSIXCompleted || levelSEVENCompleted || levelEIGHTCompleted || levelNINECompleted || levelTENCompleted) {
        console.log("Level is completed");
    }
    game.style.backgroundImage = "url(./res/img/deadpoolBG.gif)";
    enemy.src = "./res/img/enemy.deadpool.gif";
    enemy.style.animation = "enemyMoving 1s infinite";
    levelInfo.style.display = "none";
    document.body.style.backgroundColor = "black";
    audioButtonClick.src = "./res/audio/buttonsound.mp3";
    audioButtonClick.play();
    levelsText.style.display = "none";
    game.style.display = "flex";
    gridOfLevels.style.display = "none";
    yourHp.innerText = yourHpValue;
    enemyHp.innerText = 65;
    backBtn.style.display = "none";
    backBtnShop.style.zIndex = "0";
    const enemyDamage = setInterval(() => {
        yourHp.innerText -= 10;
        audioButtonClick.src = "./res/audio/punchAttackSound.mp3";
        audioButtonClick.play();
        if (yourHp.innerText <= 0) {
            clearInterval(enemyDamage);

            enemy.style.animation = "none";
            game.style.display = "none";
            gameResult.style.display = "block";
            gameResult.style.textShadow = "0 0 25px rgb(255, 0, 0)";
            const nameValue = storyPartInput.value;
            const defaultName = "Draezlyr Wielder";
            if (nameValue == "") {
                gameResult.innerText = `${defaultName} lost`;
            } else {
                gameResult.innerText = `${nameValue} lost`;
            }
            lossesCounter.innerText++;
            audioYouLost.src = "./res/audio/youLost.mp3";
            audioYouLost.play();
            levelTENCompleted = false;
            levelTEN.disabled = false;
            yourHp.innerText = yourHpValue;
            backBtn.style.zIndex = "999";
            enemyHp.innerText = 65;
        }
        if (enemyHp.innerText <= 0 && yourHp.innerText > 0) {
            clearInterval(enemyDamage);

            enemy.style.animation = "none";
            game.style.display = "none";
            gameResult.style.display = "block";
            gameResult.style.textShadow = "0 0 25px rgb(0, 255, 0)";
            const nameValue = storyPartInput.value;
            const defaultName = "Draezlyr Wielder";
            if (nameValue == "") {
                gameResult.innerText = `${defaultName} won`;
            } else {
                gameResult.innerText = `${nameValue} won`;
            }
            winsCounter.innerText++;
            audioYouWin.src = "./res/audio/youWin.mp3";
            audioYouWin.play();
            levelTENCompleted = true;
            levelTEN.disabled = true;
            yourXPValue += yourXPIncrease;
            yourXP.innerText = yourXPValue;
            yourHp.innerText = yourHpValue;
            backBtn.style.zIndex = "999";
            enemyHp.innerText = 65;
        }

    }, 1000);

}

//------------------------------------ marvel level 11
levelELEVEN.onclick = () => {
    enemyHpTextValue.innerText = `BLACK PANTHER´S HP:`;
    game.style.boxShadow = "0 0 70px purple inset";
    if (levelONECompleted || levelTWOCompleted || levelTHREECompleted || levelFOURCompleted || levelFIVECompleted || levelSIXCompleted || levelSEVENCompleted || levelEIGHTCompleted || levelNINECompleted || levelTENCompleted || levelELEVENCompleted) {
        console.log("Level is completed");
    }
    game.style.backgroundImage = "url(./res/img/blackpantherBG.gif)";
    enemy.src = "./res/img/enemy.blackpanther.gif";
    enemy.style.animation = "enemyMoving 1s infinite";
    levelInfo.style.display = "none";
    document.body.style.backgroundColor = "black";
    audioButtonClick.src = "./res/audio/buttonsound.mp3";
    audioButtonClick.play();
    levelsText.style.display = "none";
    game.style.display = "flex";
    gridOfLevels.style.display = "none";
    yourHp.innerText = yourHpValue;
    enemyHp.innerText = 70;
    backBtn.style.display = "none";
    backBtnShop.style.zIndex = "0";
    const enemyDamage = setInterval(() => {
        yourHp.innerText -= 11;
        audioButtonClick.src = "./res/audio/punchAttackSound.mp3";
        audioButtonClick.play();
        if (yourHp.innerText <= 0) {
            clearInterval(enemyDamage);

            enemy.style.animation = "none";
            game.style.display = "none";
            gameResult.style.display = "block";
            gameResult.style.textShadow = "0 0 25px rgb(255, 0, 0)";
            const nameValue = storyPartInput.value;
            const defaultName = "Draezlyr Wielder";
            if (nameValue == "") {
                gameResult.innerText = `${defaultName} lost`;
            } else {
                gameResult.innerText = `${nameValue} lost`;
            }
            lossesCounter.innerText++;
            audioYouLost.src = "./res/audio/youLost.mp3";
            audioYouLost.play();
            levelELEVENCompleted = false;
            levelELEVEN.disabled = false;
            yourHp.innerText = yourHpValue;
            backBtn.style.zIndex = "999";
            enemyHp.innerText = 70;
        }
        if (enemyHp.innerText <= 0 && yourHp.innerText > 0) {
            clearInterval(enemyDamage);

            enemy.style.animation = "none";
            game.style.display = "none";
            gameResult.style.display = "block";
            gameResult.style.textShadow = "0 0 25px rgb(0, 255, 0)";
            const nameValue = storyPartInput.value;
            const defaultName = "Draezlyr Wielder";
            if (nameValue == "") {
                gameResult.innerText = `${defaultName} won`;
            } else {
                gameResult.innerText = `${nameValue} won`;
            }
            winsCounter.innerText++;
            audioYouWin.src = "./res/audio/youWin.mp3";
            audioYouWin.play();
            levelELEVENCompleted = true;
            levelELEVEN.disabled = true;
            yourXPValue += yourXPIncrease;
            yourXP.innerText = yourXPValue;
            yourHp.innerText = yourHpValue;
            backBtn.style.zIndex = "999";
            enemyHp.innerText = 70;
        }

    }, 1000);

}

//------------------------------------ marvel level 12
levelTWELVE.onclick = () => {
    enemyHpTextValue.innerText = `GHOST RIDER´S HP:`;
    game.style.boxShadow = "0 0 70px rgb(255,102,50) inset";
    if (levelONECompleted || levelTWOCompleted || levelTHREECompleted || levelFOURCompleted || levelFIVECompleted || levelSIXCompleted || levelSEVENCompleted || levelEIGHTCompleted || levelNINECompleted || levelTENCompleted || levelELEVENCompleted || levelTWELVECompleted) {
        console.log("Level is completed");
    }
    game.style.backgroundImage = "url(./res/img/ghostriderBG.gif)";
    enemy.src = "./res/img/enemy.ghostrider.gif";
    enemy.style.animation = "enemyMoving 1s infinite";
    levelInfo.style.display = "none";
    document.body.style.backgroundColor = "black";
    audioButtonClick.src = "./res/audio/buttonsound.mp3";
    audioButtonClick.play();
    levelsText.style.display = "none";
    game.style.display = "flex";
    gridOfLevels.style.display = "none";
    yourHp.innerText = yourHpValue;
    enemyHp.innerText = 75;
    backBtn.style.display = "none";
    backBtnShop.style.zIndex = "0";
    const enemyDamage = setInterval(() => {
        yourHp.innerText -= 12;
        audioButtonClick.src = "./res/audio/punchAttackSound.mp3";
        audioButtonClick.play();
        if (yourHp.innerText <= 0) {
            clearInterval(enemyDamage);

            enemy.style.animation = "none";
            game.style.display = "none";
            gameResult.style.display = "block";
            gameResult.style.textShadow = "0 0 25px rgb(255, 0, 0)";
            const nameValue = storyPartInput.value;
            const defaultName = "Draezlyr Wielder";
            if (nameValue == "") {
                gameResult.innerText = `${defaultName} lost`;
            } else {
                gameResult.innerText = `${nameValue} lost`;
            }
            lossesCounter.innerText++;
            audioYouLost.src = "./res/audio/youLost.mp3";
            audioYouLost.play();
            levelTWELVECompleted = false;
            levelTWELVE.disabled = false;
            yourHp.innerText = yourHpValue;
            backBtn.style.zIndex = "999";
            enemyHp.innerText = 75;
        }
        if (enemyHp.innerText <= 0 && yourHp.innerText > 0) {
            clearInterval(enemyDamage);

            enemy.style.animation = "none";
            game.style.display = "none";
            gameResult.style.display = "block";
            gameResult.style.textShadow = "0 0 25px rgb(0, 255, 0)";
            const nameValue = storyPartInput.value;
            const defaultName = "Draezlyr Wielder";
            if (nameValue == "") {
                gameResult.innerText = `${defaultName} won`;
            } else {
                gameResult.innerText = `${nameValue} won`;
            }
            winsCounter.innerText++;
            audioYouWin.src = "./res/audio/youWin.mp3";
            audioYouWin.play();
            levelTWELVECompleted = true;
            levelTWELVE.disabled = true;
            yourXPValue += yourXPIncrease;
            yourXP.innerText = yourXPValue;
            yourHp.innerText = yourHpValue;
            backBtn.style.zIndex = "999";
            enemyHp.innerText = 75;
        }

    }, 1000);

}

//------------------------------------ marvel level 13
levelTHIRTEEN.onclick = () => {
    enemyHpTextValue.innerText = `LOKI´S HP:`;
    game.style.boxShadow = "0 0 70px rgb(0,255,100) inset";
    if (levelONECompleted || levelTWOCompleted || levelTHREECompleted || levelFOURCompleted || levelFIVECompleted || levelSIXCompleted || levelSEVENCompleted || levelEIGHTCompleted || levelNINECompleted || levelTENCompleted || levelELEVENCompleted || levelTWELVECompleted || levelTHIRTEENCompleted) {
        console.log("Level is completed");
    }
    game.style.backgroundImage = "url(./res/img/lokiBG.gif)";
    enemy.src = "./res/img/enemy.loki.gif";
    enemy.style.animation = "enemyMoving 1s infinite";
    levelInfo.style.display = "none";
    document.body.style.backgroundColor = "black";
    audioButtonClick.src = "./res/audio/buttonsound.mp3";
    audioButtonClick.play();
    levelsText.style.display = "none";
    game.style.display = "flex";
    gridOfLevels.style.display = "none";
    yourHp.innerText = yourHpValue;
    enemyHp.innerText = 80;
    backBtn.style.display = "none";
    backBtnShop.style.zIndex = "0";
    const enemyDamage = setInterval(() => {
        yourHp.innerText -= 13;
        audioButtonClick.src = "./res/audio/punchAttackSound.mp3";
        audioButtonClick.play();
        if (yourHp.innerText <= 0) {
            clearInterval(enemyDamage);

            enemy.style.animation = "none";
            game.style.display = "none";
            gameResult.style.display = "block";
            gameResult.style.textShadow = "0 0 25px rgb(255, 0, 0)";
            const nameValue = storyPartInput.value;
            const defaultName = "Draezlyr Wielder";
            if (nameValue == "") {
                gameResult.innerText = `${defaultName} lost`;
            } else {
                gameResult.innerText = `${nameValue} lost`;
            }
            lossesCounter.innerText++;
            audioYouLost.src = "./res/audio/youLost.mp3";
            audioYouLost.play();
            levelTHIRTEENCompleted = false;
            levelTHIRTEEN.disabled = false;
            yourHp.innerText = yourHpValue;
            backBtn.style.zIndex = "999";
            enemyHp.innerText = 80;
        }
        if (enemyHp.innerText <= 0 && yourHp.innerText > 0) {
            clearInterval(enemyDamage);

            enemy.style.animation = "none";
            game.style.display = "none";
            gameResult.style.display = "block";
            gameResult.style.textShadow = "0 0 25px rgb(0, 255, 0)";
            const nameValue = storyPartInput.value;
            const defaultName = "Draezlyr Wielder";
            if (nameValue == "") {
                gameResult.innerText = `${defaultName} won`;
            } else {
                gameResult.innerText = `${nameValue} won`;
            }
            winsCounter.innerText++;
            audioYouWin.src = "./res/audio/youWin.mp3";
            audioYouWin.play();
            levelTHIRTEENCompleted = true;
            levelTHIRTEEN.disabled = true;
            yourXPValue += yourXPIncrease;
            yourXP.innerText = yourXPValue;
            yourHp.innerText = yourHpValue;
            backBtn.style.zIndex = "999";
            enemyHp.innerText = 80;
        }

    }, 1000);

}
//------------------------------------ marvel level 14
levelFOURTEEN.onclick = () => {
    enemyHpTextValue.innerText = `CAPTAIN MARVEL´S HP:`;
    game.style.boxShadow = "0 0 70px rgb(200,20,50) inset";
    if (levelONECompleted || levelTWOCompleted || levelTHREECompleted || levelFOURCompleted || levelFIVECompleted || levelSIXCompleted || levelSEVENCompleted || levelEIGHTCompleted || levelNINECompleted || levelTENCompleted || levelELEVENCompleted || levelTWELVECompleted || levelTHIRTEENCompleted || levelFOURTEENCompleted) {
        console.log("Level is completed");
    }
    game.style.backgroundImage = "url(./res/img/captainmarvelBG.gif)";
    enemy.src = "./res/img/enemy.captainmarvel.gif";
    enemy.style.animation = "enemyMoving 1s infinite";
    levelInfo.style.display = "none";
    document.body.style.backgroundColor = "black";
    audioButtonClick.src = "./res/audio/buttonsound.mp3";
    audioButtonClick.play();
    levelsText.style.display = "none";
    game.style.display = "flex";
    gridOfLevels.style.display = "none";
    yourHp.innerText = yourHpValue;
    enemyHp.innerText = 85;
    backBtn.style.display = "none";
    backBtnShop.style.zIndex = "0";
    const enemyDamage = setInterval(() => {
        yourHp.innerText -= 14;
        audioButtonClick.src = "./res/audio/punchAttackSound.mp3";
        audioButtonClick.play();
        if (yourHp.innerText <= 0) {
            clearInterval(enemyDamage);

            enemy.style.animation = "none";
            game.style.display = "none";
            gameResult.style.display = "block";
            gameResult.style.textShadow = "0 0 25px rgb(255, 0, 0)";
            const nameValue = storyPartInput.value;
            const defaultName = "Draezlyr Wielder";
            if (nameValue == "") {
                gameResult.innerText = `${defaultName} lost`;
            } else {
                gameResult.innerText = `${nameValue} lost`;
            }
            lossesCounter.innerText++;
            audioYouLost.src = "./res/audio/youLost.mp3";
            audioYouLost.play();
            levelFOURTEENCompleted = false;
            levelFOURTEEN.disabled = false;
            yourHp.innerText = yourHpValue;
            backBtn.style.zIndex = "999";
            enemyHp.innerText = 85;
        }
        if (enemyHp.innerText <= 0 && yourHp.innerText > 0) {
            clearInterval(enemyDamage);

            enemy.style.animation = "none";
            game.style.display = "none";
            gameResult.style.display = "block";
            gameResult.style.textShadow = "0 0 25px rgb(0, 255, 0)";
            const nameValue = storyPartInput.value;
            const defaultName = "Draezlyr Wielder";
            if (nameValue == "") {
                gameResult.innerText = `${defaultName} won`;
            } else {
                gameResult.innerText = `${nameValue} won`;
            }
            winsCounter.innerText++;
            audioYouWin.src = "./res/audio/youWin.mp3";
            audioYouWin.play();
            levelFOURTEENCompleted = true;
            levelFOURTEEN.disabled = true;
            yourXPValue += yourXPIncrease;
            yourXP.innerText = yourXPValue;
            yourHp.innerText = yourHpValue;
            backBtn.style.zIndex = "999";
            enemyHp.innerText = 85;
        }

    }, 1000);

}
//------------------------------------ marvel level 15
levelFIFTEEN.onclick = () => {
    enemyHpTextValue.innerText = `THANOS´S HP:`;
    game.style.boxShadow = "0 0 70px blueviolet inset";
    if (levelONECompleted || levelTWOCompleted || levelTHREECompleted || levelFOURCompleted || levelFIVECompleted || levelSIXCompleted || levelSEVENCompleted || levelEIGHTCompleted || levelNINECompleted || levelTENCompleted || levelELEVENCompleted || levelTWELVECompleted || levelTHIRTEENCompleted || levelFOURTEENCompleted || levelFIFTEENCompleted) {
        console.log("Level is completed");
    }
    game.style.backgroundImage = "url(./res/img/thanosBG.gif)";
    enemy.src = "./res/img/enemy.thanos.gif";
    enemy.style.animation = "enemyMoving 1s infinite";
    levelInfo.style.display = "none";
    document.body.style.backgroundColor = "black";
    audioButtonClick.src = "./res/audio/buttonsound.mp3";
    audioButtonClick.play();
    levelsText.style.display = "none";
    game.style.display = "flex";
    gridOfLevels.style.display = "none";
    yourHp.innerText = yourHpValue;
    enemyHp.innerText = 90;
    backBtn.style.display = "none";
    backBtnShop.style.zIndex = "0";
    const enemyDamage = setInterval(() => {
        yourHp.innerText -= 15;
        audioButtonClick.src = "./res/audio/punchAttackSound.mp3";
        audioButtonClick.play();
        if (yourHp.innerText <= 0) {
            clearInterval(enemyDamage);

            enemy.style.animation = "none";
            game.style.display = "none";
            gameResult.style.display = "block";
            gameResult.style.textShadow = "0 0 25px rgb(255, 0, 0)";
            const nameValue = storyPartInput.value;
            const defaultName = "Draezlyr Wielder";
            if (nameValue == "") {
                gameResult.innerText = `${defaultName} lost`;
            } else {
                gameResult.innerText = `${nameValue} lost`;
            }
            lossesCounter.innerText++;
            audioYouLost.src = "./res/audio/youLost.mp3";
            audioYouLost.play();
            levelFIFTEENCompleted = false;
            levelFIFTEEN.disabled = false;
            yourHp.innerText = yourHpValue;
            backBtn.style.zIndex = "999";
            enemyHp.innerText = 90;
        }
        if (enemyHp.innerText <= 0 && yourHp.innerText > 0) {
            clearInterval(enemyDamage);

            enemy.style.animation = "none";
            game.style.display = "none";
            gameResult.style.display = "block";
            gameResult.style.textShadow = "0 0 25px rgb(0, 255, 0)";
            const nameValue = storyPartInput.value;
            const defaultName = "Draezlyr Wielder";
            if (nameValue == "") {
                gameResult.innerText = `${defaultName} won`;
            } else {
                gameResult.innerText = `${nameValue} won`;
            }
            winsCounter.innerText++;
            audioYouWin.src = "./res/audio/youWin.mp3";
            audioYouWin.play();
            levelFIFTEENCompleted = true;
            levelFIFTEEN.disabled = true;
            yourXPValue += yourXPIncrease;
            yourXP.innerText = yourXPValue;
            yourHp.innerText = yourHpValue;
            backBtn.style.zIndex = "999";
            enemyHp.innerText = 90;
        }

    }, 1000);

}
