//------------------------------------ marvelLevels onmousedown and onmouseup
const marvelLevels = [levelONE, levelTWO, levelTHREE, levelFOUR, levelFIVE, levelSIX, levelSEVEN, levelEIGHT,
    levelNINE, levelTEN, levelELEVEN, levelTWELVE, levelTHIRTEEN, levelFOURTEEN, levelFIFTEEN];

for (let i = 0; i < marvelLevels.length; i++) {
    marvelLevels[i].onmousedown = () => {
        marvelLevels[i].style.backgroundColor = "white";
        marvelLevels[i].style.color = "black";
    }
}
for (let i = 0; i < marvelLevels.length; i++) {
    marvelLevels[i].onmouseup = () => {
        marvelLevels[i].style.backgroundColor = "transparent";
        marvelLevels[i].style.border = "3px solid black";
        marvelLevels[i].style.color = "black";
        marvelLevels[i].style.textDecoration = "underline";
    }

}
//------------------------------------ marvel level 1
levelONE.onmouseover = () => {
    enemyName.innerText = "Spider man";
}
levelONE.onmouseout = () => {
    enemyName.innerText = " ";
}
levelONE.onclick = () => {
    game.style.boxShadow = "0 0 120px red inset";
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
            gameResult.innerText = `You lost`;
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
            gameResult.innerText = `You won`;
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
levelTWO.onmouseover = () => {
    enemyName.innerText = "Hulk";
}
levelTWO.onmouseout = () => {
    enemyName.innerText = " ";
}
levelTWO.onclick = () => {
    game.style.boxShadow = "0 0 120px green inset";
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
            gameResult.innerText = `You lost`;
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
            gameResult.innerText = `You won`;
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
levelTHREE.onmouseover = () => {
    enemyName.innerText = "Iron man";
}
levelTHREE.onmouseout = () => {
    enemyName.innerText = " ";
}
levelTHREE.onclick = () => {
    game.style.boxShadow = "0 0 120px gold inset";
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
            gameResult.innerText = `You lost`;
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
            gameResult.innerText = `You won`;
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
levelFOUR.onmouseover = () => {
    enemyName.innerText = "Thor";
}
levelFOUR.onmouseout = () => {
    enemyName.innerText = " ";
}
levelFOUR.onclick = () => {
    game.style.boxShadow = "0 0 120px lightblue inset";
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
            gameResult.innerText = `You lost`;
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
            gameResult.innerText = `You won`;
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
levelFIVE.onmouseover = () => {
    enemyName.innerText = "Black Widow";
}
levelFIVE.onmouseout = () => {
    enemyName.innerText = " ";
}
levelFIVE.onclick = () => {
    game.style.boxShadow = "0 0 120px grey inset";
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
            gameResult.innerText = `You lost`;
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
            gameResult.innerText = `You won`;
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
levelSIX.onmouseover = () => {
    enemyName.innerText = "Captain America";
}
levelSIX.onmouseout = () => {
    enemyName.innerText = " ";
}
levelSIX.onclick = () => {
    game.style.boxShadow = "0 0 120px skyblue inset";
    if (levelONECompleted || levelTWOCompleted || levelTHREECompleted || levelFOURCompleted || levelFIVECompleted || levelSIXCompleted) {
        console.log("Level is completed");
    }
    game.style.backgroundImage = "url(./res/img/captainamericaBG.png)";
    enemy.src = "./res/img/enemy.captainamerica.png";
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
            gameResult.innerText = `You lost`;
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
            gameResult.innerText = `You won`;
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
levelSEVEN.onmouseover = () => {
    enemyName.innerText = "Doctor Strange";
}
levelSEVEN.onmouseout = () => {
    enemyName.innerText = " ";
}
levelSEVEN.onclick = () => {
    game.style.boxShadow = "0 0 120px orange inset";
    if (levelONECompleted || levelTWOCompleted || levelTHREECompleted || levelFOURCompleted || levelFIVECompleted || levelSIXCompleted || levelSEVENCompleted) {
        console.log("Level is completed");
    }
    game.style.backgroundImage = "url(./res/img/doctorstrangeBG.png)";
    enemy.src = "./res/img/enemy.doctorstrange.png";
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
            gameResult.innerText = `You lost`;
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
            gameResult.innerText = `You won`;
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
levelEIGHT.onmouseover = () => {
    enemyName.innerText = "Venom";
}
levelEIGHT.onmouseout = () => {
    enemyName.innerText = " ";
}
levelEIGHT.onclick = () => {
    game.style.boxShadow = "0 0 120px black inset";
    if (levelONECompleted || levelTWOCompleted || levelTHREECompleted || levelFOURCompleted || levelFIVECompleted || levelSIXCompleted || levelSEVENCompleted || levelEIGHTCompleted) {
        console.log("Level is completed");
    }
    game.style.backgroundImage = "url(./res/img/venomBG.png)";
    enemy.src = "./res/img/enemy.venom.png";
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
            gameResult.innerText = `You lost`;
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
            gameResult.innerText = `You won`;
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
levelNINE.onmouseover = () => {
    enemyName.innerText = "Wolverine";
}
levelNINE.onmouseout = () => {
    enemyName.innerText = " ";
}
levelNINE.onclick = () => {
    game.style.boxShadow = "0 0 120px yellow inset";
    if (levelONECompleted || levelTWOCompleted || levelTHREECompleted || levelFOURCompleted || levelFIVECompleted || levelSIXCompleted || levelSEVENCompleted || levelEIGHTCompleted || levelNINECompleted) {
        console.log("Level is completed");
    }
    game.style.backgroundImage = "url(./res/img/wolverineBG.png)";
    enemy.src = "./res/img/enemy.wolverine.png";
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
            gameResult.innerText = `You lost`;
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
            gameResult.innerText = `You won`;
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
levelTEN.onmouseover = () => {
    enemyName.innerText = "Deadpool";
}
levelTEN.onmouseout = () => {
    enemyName.innerText = " ";
}
levelTEN.onclick = () => {
    game.style.boxShadow = "0 0 120px darkred inset";
    if (levelONECompleted || levelTWOCompleted || levelTHREECompleted || levelFOURCompleted || levelFIVECompleted || levelSIXCompleted || levelSEVENCompleted || levelEIGHTCompleted || levelNINECompleted || levelTENCompleted) {
        console.log("Level is completed");
    }
    game.style.backgroundImage = "url(./res/img/deadpoolBG.png)";
    enemy.src = "./res/img/enemy.deadpool.png";
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
            gameResult.innerText = `You lost`;
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
            gameResult.innerText = `You won`;
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
levelELEVEN.onmouseover = () => {
    enemyName.innerText = "Black Panther";
}
levelELEVEN.onmouseout = () => {
    enemyName.innerText = " ";
}
levelELEVEN.onclick = () => {
    game.style.boxShadow = "0 0 120px purple inset";
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
    yourHp.innerText = yourHpValue;
    enemyHp.innerText = 70;
    backBtn.style.display = "none";
    backBtnShop.style.zIndex = "0";
    const enemyDamage = setInterval(() => {
        yourHp.innerText -= 11;

        if (yourHp.innerText <= 0) {
            clearInterval(enemyDamage);

            enemy.style.animation = "none";
            game.style.display = "none";
            gameResult.style.display = "block";
            gameResult.style.textShadow = "0 0 25px rgb(255, 0, 0)";
            gameResult.innerText = `You lost`;
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
            gameResult.innerText = `You won`;
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
levelTWELVE.onmouseover = () => {
    enemyName.innerText = "Ghost rider";
}
levelTWELVE.onmouseout = () => {
    enemyName.innerText = " ";
}
levelTWELVE.onclick = () => {
    game.style.boxShadow = "0 0 120px rgb(255,102,50) inset";
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
    yourHp.innerText = yourHpValue;
    enemyHp.innerText = 75;
    backBtn.style.display = "none";
    backBtnShop.style.zIndex = "0";
    const enemyDamage = setInterval(() => {
        yourHp.innerText -= 12;

        if (yourHp.innerText <= 0) {
            clearInterval(enemyDamage);

            enemy.style.animation = "none";
            game.style.display = "none";
            gameResult.style.display = "block";
            gameResult.style.textShadow = "0 0 25px rgb(255, 0, 0)";
            gameResult.innerText = `You lost`;
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
            gameResult.innerText = `You won`;
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
levelTHIRTEEN.onmouseover = () => {
    enemyName.innerText = "Loki";
}
levelTHIRTEEN.onmouseout = () => {
    enemyName.innerText = " ";
}
levelTHIRTEEN.onclick = () => {
    game.style.boxShadow = "0 0 120px rgb(0,255,100) inset";
    if (levelONECompleted || levelTWOCompleted || levelTHREECompleted || levelFOURCompleted || levelFIVECompleted || levelSIXCompleted || levelSEVENCompleted || levelEIGHTCompleted || levelNINECompleted || levelTENCompleted || levelELEVENCompleted || levelTWELVECompleted || levelTHIRTEENCompleted) {
        console.log("Level is completed");
    }
    game.style.backgroundImage = "url(./res/img/lokiBG.png)";
    enemy.src = "./res/img/enemy.loki.png";
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

        if (yourHp.innerText <= 0) {
            clearInterval(enemyDamage);

            enemy.style.animation = "none";
            game.style.display = "none";
            gameResult.style.display = "block";
            gameResult.style.textShadow = "0 0 25px rgb(255, 0, 0)";
            gameResult.innerText = `You lost`;
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
            gameResult.innerText = `You won`;
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
levelFOURTEEN.onmouseover = () => {
    enemyName.innerText = "Captain Marvel";
}
levelFOURTEEN.onmouseout = () => {
    enemyName.innerText = " ";
}

levelFOURTEEN.onclick = () => {
    game.style.boxShadow = "0 0 120px rgb(200,20,50) inset";
    if (levelONECompleted || levelTWOCompleted || levelTHREECompleted || levelFOURCompleted || levelFIVECompleted || levelSIXCompleted || levelSEVENCompleted || levelEIGHTCompleted || levelNINECompleted || levelTENCompleted || levelELEVENCompleted || levelTWELVECompleted || levelTHIRTEENCompleted || levelFOURTEENCompleted) {
        console.log("Level is completed");
    }
    game.style.backgroundImage = "url(./res/img/captainmarvelBG.png)";
    enemy.src = "./res/img/enemy.captainmarvel.png";
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

        if (yourHp.innerText <= 0) {
            clearInterval(enemyDamage);

            enemy.style.animation = "none";
            game.style.display = "none";
            gameResult.style.display = "block";
            gameResult.style.textShadow = "0 0 25px rgb(255, 0, 0)";
            gameResult.innerText = `You lost`;
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
            gameResult.innerText = `You won`;
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
levelFIFTEEN.onmouseover = () => {
    enemyName.innerText = "Thanos";
}
levelFIFTEEN.onmouseout = () => {
    enemyName.innerText = " ";
}

levelFIFTEEN.onclick = () => {
    game.style.boxShadow = "0 0 120px blueviolet inset";
    if (levelONECompleted || levelTWOCompleted || levelTHREECompleted || levelFOURCompleted || levelFIVECompleted || levelSIXCompleted || levelSEVENCompleted || levelEIGHTCompleted || levelNINECompleted || levelTENCompleted || levelELEVENCompleted || levelTWELVECompleted || levelTHIRTEENCompleted || levelFOURTEENCompleted || levelFIFTEENCompleted) {
        console.log("Level is completed");
    }
    game.style.backgroundImage = "url(./res/img/thanosBG.png)";
    enemy.src = "./res/img/enemy.thanos.png";
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
        yourHp.innerText -= 15;

        if (yourHp.innerText <= 0) {
            clearInterval(enemyDamage);

            enemy.style.animation = "none";
            game.style.display = "none";
            gameResult.style.display = "block";
            gameResult.style.textShadow = "0 0 25px rgb(255, 0, 0)";
            gameResult.innerText = `You lost`;
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
            gameResult.innerText = `You won`;
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