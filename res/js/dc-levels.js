//------------------------------------ dcLevels onmousedown and onmouseup
const dcLevels = [dcLevelONE, dcLevelTWO, dcLevelTHREE, dcLevelFOUR, dcLevelFIVE, dcLevelSIX, dcLevelSEVEN, dcLevelEIGHT,
    dcLevelNINE, dcLevelTEN, dcLevelELEVEN, dcLevelTWELVE, dcLevelTHIRTEEN, dcLevelFOURTEEN, dcLevelFIFTEEN];

for (let i = 0; i < dcLevels.length; i++) {
    dcLevels[i].onmousedown = () => {
        dcLevels[i].style.backgroundColor = "white";
        dcLevels[i].style.color = "black";
    }
}

for (let i = 0; i < dcLevels.length; i++) {
    dcLevels[i].onmouseup = () => {
        dcLevels[i].style.backgroundColor = "transparent";
        dcLevels[i].style.border = "3px solid black";
        dcLevels[i].style.color = "black";
        dcLevels[i].style.textDecoration = "underline";
    }

}

//------------------------------------ dc level 1
dcLevelONE.onmouseover = () => {
    enemyName.innerText = "Batman";
}
dcLevelONE.onmouseout = () => {
    enemyName.innerText = " ";
}
dcLevelONE.onclick = () => {
    enemyHpTextValue.innerText = `BATMAN´S HP:`;
    const nameValue = storyPartInput.value;
    const defaultName = "Draezlyr Wielder";
    if (nameValue == "") {
        yourHpTextValue.innerText = `${defaultName}´S HP:`;
    } else {
        yourHpTextValue.innerText = `${nameValue}´S HP:`;
    }
    game.style.boxShadow = "0 0 120px rgb(0,0,100) inset";
    if (dcLevelONECompleted) {
        console.log("Level is completed");
    }
    game.style.backgroundImage = "url(./res/img/batmanBG.png)";
    enemy.src = "./res/img/enemy.batman.png";
    levelInfo.style.display = "none";
    document.body.style.backgroundColor = "black";
    audioButtonClick.src = "./res/audio/buttonsound.mp3";
    enemy.style.animation = "enemyMoving 1s infinite";
    audioButtonClick.play();
    levelsText.style.display = "none";
    game.style.display = "flex";
    gridOfLevels.style.display = "none";
    gridOfLevelsDC.style.display = "none";
    yourHp.innerText = yourHpValue;
    enemyHp.innerText = 95;
    backBtn.style.display = "none";
    backBtnDC.style.display = "none";
    backBtnShop.style.zIndex = "0";
    const enemyDamage = setInterval(() => {
        yourHp.innerText -= 16;
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
            dcLevelONECompleted = false;
            dcLevelONE.disabled = false;
            yourHp.innerText = yourHpValue;
            backBtnDC.style.zIndex = "999";
            backBtn.style.zIndex = "0";
            enemyHp.innerText = 95;
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
            dcLevelONECompleted = true;
            dcLevelONE.disabled = true;
            yourXPValue += yourXPIncrease;
            yourXP.innerText = yourXPValue;
            yourHp.innerText = yourHpValue;
            backBtnDC.style.zIndex = "999";
            backBtn.style.zIndex = "0";
            enemyHp.innerText = 95;
        }

    }, 1000);

}

//------------------------------------ dc level 2
dcLevelTWO.onmouseover = () => {
    enemyName.innerText = "Flash";
}
dcLevelTWO.onmouseout = () => {
    enemyName.innerText = " ";
}
dcLevelTWO.onclick = () => {
    enemyHpTextValue.innerText = `FLASH´S HP:`;
    game.style.boxShadow = "0 0 120px rgb(255,200,50) inset";
    if (dcLevelONECompleted || dcLevelTWOCompleted) {
        console.log("Level is completed");
    }
    game.style.backgroundImage = "url(./res/img/flashBG.png)";
    enemy.src = "./res/img/enemy.flash.png";
    levelInfo.style.display = "none";
    document.body.style.backgroundColor = "black";
    audioButtonClick.src = "./res/audio/buttonsound.mp3";
    enemy.style.animation = "enemyMoving 1s infinite";
    audioButtonClick.play();
    levelsText.style.display = "none";
    game.style.display = "flex";
    gridOfLevels.style.display = "none";
    gridOfLevelsDC.style.display = "none";
    yourHp.innerText = yourHpValue;
    enemyHp.innerText = 100;
    backBtn.style.display = "none";
    backBtnDC.style.display = "none";
    backBtnShop.style.zIndex = "0";
    const enemyDamage = setInterval(() => {
        yourHp.innerText -= 17;
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
            dcLevelTWOCompleted = false;
            dcLevelTWO.disabled = false;
            yourHp.innerText = yourHpValue;
            backBtnDC.style.zIndex = "999";
            backBtn.style.zIndex = "0";
            enemyHp.innerText = 100;
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
            dcLevelTWOCompleted = true;
            dcLevelTWO.disabled = true;
            yourXPValue += yourXPIncrease;
            yourXP.innerText = yourXPValue;
            yourHp.innerText = yourHpValue;
            backBtnDC.style.zIndex = "999";
            backBtn.style.zIndex = "0";
            enemyHp.innerText = 100;
        }

    }, 1000);

}

//------------------------------------ dc level 3
dcLevelTHREE.onmouseover = () => {
    enemyName.innerText = "Wonder woman";
}
dcLevelTHREE.onmouseout = () => {
    enemyName.innerText = " ";
}
dcLevelTHREE.onclick = () => {
    enemyHpTextValue.innerText = `WONDER WOMAN´S HP:`;
    game.style.boxShadow = "0 0 120px rgb(255,20,100) inset";
    if (dcLevelONECompleted || dcLevelTWOCompleted || dcLevelTHREECompleted) {
        console.log("Level is completed");
    }
    game.style.backgroundImage = "url(./res/img/wonderwomanBG.png)";
    enemy.src = "./res/img/enemy.wonderwoman.png";
    levelInfo.style.display = "none";
    document.body.style.backgroundColor = "black";
    audioButtonClick.src = "./res/audio/buttonsound.mp3";
    enemy.style.animation = "enemyMoving 1s infinite";
    audioButtonClick.play();
    levelsText.style.display = "none";
    game.style.display = "flex";
    gridOfLevels.style.display = "none";
    gridOfLevelsDC.style.display = "none";
    yourHp.innerText = yourHpValue;
    enemyHp.innerText = 105;
    backBtn.style.display = "none";
    backBtnDC.style.display = "none";
    backBtnShop.style.zIndex = "0";
    const enemyDamage = setInterval(() => {
        yourHp.innerText -= 18;
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
            dcLevelTHREECompleted = false;
            dcLevelTHREE.disabled = false;
            yourHp.innerText = yourHpValue;
            backBtnDC.style.zIndex = "999";
            backBtn.style.zIndex = "0";
            enemyHp.innerText = 105;
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
            dcLevelTHREECompleted = true;
            dcLevelTHREE.disabled = true;
            yourXPValue += yourXPIncrease;
            yourXP.innerText = yourXPValue;
            yourHp.innerText = yourHpValue;
            backBtnDC.style.zIndex = "999";
            backBtn.style.zIndex = "0";
            enemyHp.innerText = 105;
        }

    }, 1000);

}
//------------------------------------ dc level 4
dcLevelFOUR.onmouseover = () => {
    enemyName.innerText = "Joker";
}
dcLevelFOUR.onmouseout = () => {
    enemyName.innerText = " ";
}
dcLevelFOUR.onclick = () => {
    enemyHpTextValue.innerText = `JOKER´S HP:`;
    game.style.boxShadow = "0 0 120px rgb(255,255,100) inset";
    if (dcLevelONECompleted || dcLevelTWOCompleted || dcLevelTHREECompleted || dcLevelFOURCompleted) {
        console.log("Level is completed");
    }
    game.style.backgroundImage = "url(./res/img/batmanBG.png)";
    enemy.src = "./res/img/enemy.joker.png";
    levelInfo.style.display = "none";
    document.body.style.backgroundColor = "black";
    audioButtonClick.src = "./res/audio/buttonsound.mp3";
    enemy.style.animation = "enemyMoving 1s infinite";
    audioButtonClick.play();
    levelsText.style.display = "none";
    game.style.display = "flex";
    gridOfLevels.style.display = "none";
    gridOfLevelsDC.style.display = "none";
    yourHp.innerText = yourHpValue;
    enemyHp.innerText = 110;
    backBtn.style.display = "none";
    backBtnDC.style.display = "none";
    backBtnShop.style.zIndex = "0";
    const enemyDamage = setInterval(() => {
        yourHp.innerText -= 19;
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
            dcLevelFOURCompleted = false;
            dcLevelFOUR.disabled = false;
            yourHp.innerText = yourHpValue;
            backBtnDC.style.zIndex = "999";
            backBtn.style.zIndex = "0";
            enemyHp.innerText = 110;
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
            dcLevelFOURCompleted = true;
            dcLevelFOUR.disabled = true;
            yourXPValue += yourXPIncrease;
            yourXP.innerText = yourXPValue;
            yourHp.innerText = yourHpValue;
            backBtnDC.style.zIndex = "999";
            backBtn.style.zIndex = "0";
            enemyHp.innerText = 110;
        }

    }, 1000);

}
//------------------------------------ dc level 5
dcLevelFIVE.onmouseover = () => {
    enemyName.innerText = "Superman";
}
dcLevelFIVE.onmouseout = () => {
    enemyName.innerText = " ";
}
dcLevelFIVE.onclick = () => {
    enemyHpTextValue.innerText = `SUPERMAN´S HP:`;
    game.style.boxShadow = "0 0 120px rgb(255,200,50) inset";
    if (dcLevelONECompleted || dcLevelTWOCompleted || dcLevelTHREECompleted || dcLevelFOURCompleted || dcLevelFIVECompleted) {
        console.log("Level is completed");
    }
    game.style.backgroundImage = "url(./res/img/supermanBG.png)";
    enemy.src = "./res/img/enemy.superman.png";
    levelInfo.style.display = "none";
    document.body.style.backgroundColor = "black";
    audioButtonClick.src = "./res/audio/buttonsound.mp3";
    enemy.style.animation = "enemyMoving 1s infinite";
    audioButtonClick.play();
    levelsText.style.display = "none";
    game.style.display = "flex";
    gridOfLevels.style.display = "none";
    gridOfLevelsDC.style.display = "none";
    yourHp.innerText = yourHpValue;
    enemyHp.innerText = 115;
    backBtn.style.display = "none";
    backBtnDC.style.display = "none";
    backBtnShop.style.zIndex = "0";
    const enemyDamage = setInterval(() => {
        yourHp.innerText -= 20;
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
            dcLevelFIVECompleted = false;
            dcLevelFIVE.disabled = false;
            yourHp.innerText = yourHpValue;
            backBtnDC.style.zIndex = "999";
            backBtn.style.zIndex = "0";
            enemyHp.innerText = 115;
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
            dcLevelFIVECompleted = true;
            dcLevelFIVE.disabled = true;
            yourXPValue += yourXPIncrease;
            yourXP.innerText = yourXPValue;
            yourHp.innerText = yourHpValue;
            backBtnDC.style.zIndex = "999";
            backBtn.style.zIndex = "0";
            enemyHp.innerText = 115;
        }

    }, 1000);

}
//------------------------------------ dc level 6
dcLevelSIX.onmouseover = () => {
    enemyName.innerText = "Aquaman";
}
dcLevelSIX.onmouseout = () => {
    enemyName.innerText = " ";
}
dcLevelSIX.onclick = () => {
    enemyHpTextValue.innerText = `AQUAMAN´S HP:`;
    game.style.boxShadow = "0 0 120px rgb(255,200,50) inset";
    if (dcLevelONECompleted || dcLevelTWOCompleted || dcLevelTHREECompleted || dcLevelFOURCompleted || dcLevelFIVECompleted || dcLevelSIXCompleted) {
        console.log("Level is completed");
    }
    game.style.backgroundImage = "url(./res/img/aquamanBG.png)";
    enemy.src = "./res/img/enemy.aquaman.png";
    levelInfo.style.display = "none";
    document.body.style.backgroundColor = "black";
    audioButtonClick.src = "./res/audio/buttonsound.mp3";
    enemy.style.animation = "enemyMoving 1s infinite";
    audioButtonClick.play();
    levelsText.style.display = "none";
    game.style.display = "flex";
    gridOfLevels.style.display = "none";
    gridOfLevelsDC.style.display = "none";
    yourHp.innerText = yourHpValue;
    enemyHp.innerText = 110;
    backBtn.style.display = "none";
    backBtnDC.style.display = "none";
    backBtnShop.style.zIndex = "0";
    const enemyDamage = setInterval(() => {
        yourHp.innerText -= 21;
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
            dcLevelSIXCompleted = false;
            dcLevelSIX.disabled = false;
            yourHp.innerText = yourHpValue;
            backBtnDC.style.zIndex = "999";
            backBtn.style.zIndex = "0";
            enemyHp.innerText = 120;
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
            dcLevelSIXCompleted = true;
            dcLevelSIX.disabled = true;
            yourXPValue += yourXPIncrease;
            yourXP.innerText = yourXPValue;
            yourHp.innerText = yourHpValue;
            backBtnDC.style.zIndex = "999";
            backBtn.style.zIndex = "0";
            enemyHp.innerText = 120;
        }

    }, 1000);

}
//------------------------------------ dc level 7
dcLevelSEVEN.onmouseover = () => {
    enemyName.innerText = "Catwoman";
}
dcLevelSEVEN.onmouseout = () => {
    enemyName.innerText = " ";
}
dcLevelSEVEN.onclick = () => {
    enemyHpTextValue.innerText = `CATWOMAN´S HP:`;
    game.style.boxShadow = "0 0 120px rgb(250,20,60) inset";
    if (dcLevelONECompleted || dcLevelTWOCompleted || dcLevelTHREECompleted || dcLevelFOURCompleted || dcLevelFIVECompleted || dcLevelSIXCompleted || dcLevelSEVENCompleted) {
        console.log("Level is completed");
    }
    game.style.backgroundImage = "url(./res/img/batmanBG.png)";
    enemy.src = "./res/img/enemy.catwoman.png";
    levelInfo.style.display = "none";
    document.body.style.backgroundColor = "black";
    audioButtonClick.src = "./res/audio/buttonsound.mp3";
    enemy.style.animation = "enemyMoving 1s infinite";
    audioButtonClick.play();
    levelsText.style.display = "none";
    game.style.display = "flex";
    gridOfLevels.style.display = "none";
    gridOfLevelsDC.style.display = "none";
    yourHp.innerText = yourHpValue;
    enemyHp.innerText = 125;
    backBtn.style.display = "none";
    backBtnDC.style.display = "none";
    backBtnShop.style.zIndex = "0";
    const enemyDamage = setInterval(() => {
        yourHp.innerText -= 22;
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
            dcLevelSEVENCompleted = false;
            dcLevelSEVEN.disabled = false;
            yourHp.innerText = yourHpValue;
            backBtnDC.style.zIndex = "999";
            backBtn.style.zIndex = "0";
            enemyHp.innerText = 125;
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
            dcLevelSEVENCompleted = true;
            dcLevelSEVEN.disabled = true;
            yourXPValue += yourXPIncrease;
            yourXP.innerText = yourXPValue;
            yourHp.innerText = yourHpValue;
            backBtnDC.style.zIndex = "999";
            backBtn.style.zIndex = "0";
            enemyHp.innerText = 125;
        }

    }, 1000);

}
//------------------------------------ dc level 8
dcLevelEIGHT.onmouseover = () => {
    enemyName.innerText = "Cyborg";
}
dcLevelEIGHT.onmouseout = () => {
    enemyName.innerText = " ";
}
dcLevelEIGHT.onclick = () => {
    enemyHpTextValue.innerText = `CYBORG´S HP:`;
    game.style.boxShadow = "0 0 120px rgb(50,45,180) inset";
    if (dcLevelONECompleted || dcLevelTWOCompleted || dcLevelTHREECompleted || dcLevelFOURCompleted || dcLevelFIVECompleted || dcLevelSIXCompleted || dcLevelSEVENCompleted || dcLevelEIGHTCompleted) {
        console.log("Level is completed");
    }
    game.style.backgroundImage = "url(./res/img/cyborgBG.png)";
    enemy.src = "./res/img/enemy.cyborg.png";
    levelInfo.style.display = "none";
    document.body.style.backgroundColor = "black";
    audioButtonClick.src = "./res/audio/buttonsound.mp3";
    enemy.style.animation = "enemyMoving 1s infinite";
    audioButtonClick.play();
    levelsText.style.display = "none";
    game.style.display = "flex";
    gridOfLevels.style.display = "none";
    gridOfLevelsDC.style.display = "none";
    yourHp.innerText = yourHpValue;
    enemyHp.innerText = 130;
    backBtn.style.display = "none";
    backBtnDC.style.display = "none";
    backBtnShop.style.zIndex = "0";
    const enemyDamage = setInterval(() => {
        yourHp.innerText -= 23;
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
            dcLevelEIGHTCompleted = false;
            dcLevelEIGHT.disabled = false;
            yourHp.innerText = yourHpValue;
            backBtnDC.style.zIndex = "999";
            backBtn.style.zIndex = "0";
            enemyHp.innerText = 130;
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
            dcLevelEIGHTCompleted = true;
            dcLevelEIGHT.disabled = true;
            yourXPValue += yourXPIncrease;
            yourXP.innerText = yourXPValue;
            yourHp.innerText = yourHpValue;
            backBtnDC.style.zIndex = "999";
            backBtn.style.zIndex = "0";
            enemyHp.innerText = 130;
        }

    }, 1000);

}
//------------------------------------ dc level 9
dcLevelNINE.onmouseover = () => {
    enemyName.innerText = "Green Lantern";
}
dcLevelNINE.onmouseout = () => {
    enemyName.innerText = " ";
}
dcLevelNINE.onclick = () => {
    enemyHpTextValue.innerText = `GREEN LANTERN´S HP:`;
    game.style.boxShadow = "0 0 120px rgb(55,255,51) inset";
    if (dcLevelONECompleted || dcLevelTWOCompleted || dcLevelTHREECompleted || dcLevelFOURCompleted || dcLevelFIVECompleted || dcLevelSIXCompleted || dcLevelSEVENCompleted || dcLevelEIGHTCompleted || dcLevelNINECompleted) {
        console.log("Level is completed");
    }
    game.style.backgroundImage = "url(./res/img/greenlanternBG.png)";
    enemy.src = "./res/img/enemy.greenlantern.png";
    levelInfo.style.display = "none";
    document.body.style.backgroundColor = "black";
    audioButtonClick.src = "./res/audio/buttonsound.mp3";
    enemy.style.animation = "enemyMoving 1s infinite";
    audioButtonClick.play();
    levelsText.style.display = "none";
    game.style.display = "flex";
    gridOfLevels.style.display = "none";
    gridOfLevelsDC.style.display = "none";
    yourHp.innerText = yourHpValue;
    enemyHp.innerText = 135;
    backBtn.style.display = "none";
    backBtnDC.style.display = "none";
    backBtnShop.style.zIndex = "0";
    const enemyDamage = setInterval(() => {
        yourHp.innerText -= 24;
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
            dcLevelNINECompleted = false;
            dcLevelNINE.disabled = false;
            yourHp.innerText = yourHpValue;
            backBtnDC.style.zIndex = "999";
            backBtn.style.zIndex = "0";
            enemyHp.innerText = 135;
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
            dcLevelNINECompleted = true;
            dcLevelNINE.disabled = true;
            yourXPValue += yourXPIncrease;
            yourXP.innerText = yourXPValue;
            yourHp.innerText = yourHpValue;
            backBtnDC.style.zIndex = "999";
            backBtn.style.zIndex = "0";
            enemyHp.innerText = 135;
        }

    }, 1000);

}
//------------------------------------ dc level 10
dcLevelTEN.onmouseover = () => {
    enemyName.innerText = "Green Arrow";
}
dcLevelTEN.onmouseout = () => {
    enemyName.innerText = " ";
}
dcLevelTEN.onclick = () => {
    enemyHpTextValue.innerText = `GREEN ARROW´S HP:`;
    game.style.boxShadow = "0 0 120px rgb(0,200,0) inset";
    if (dcLevelONECompleted || dcLevelTWOCompleted || dcLevelTHREECompleted || dcLevelFOURCompleted || dcLevelFIVECompleted || dcLevelSIXCompleted || dcLevelSEVENCompleted || dcLevelEIGHTCompleted || dcLevelNINECompleted || dcLevelTENCompleted) {
        console.log("Level is completed");
    }
    game.style.backgroundImage = "url(./res/img/greenarrowBG.png)";
    enemy.src = "./res/img/enemy.greenarrow.png";
    levelInfo.style.display = "none";
    document.body.style.backgroundColor = "black";
    audioButtonClick.src = "./res/audio/buttonsound.mp3";
    enemy.style.animation = "enemyMoving 1s infinite";
    audioButtonClick.play();
    levelsText.style.display = "none";
    game.style.display = "flex";
    gridOfLevels.style.display = "none";
    gridOfLevelsDC.style.display = "none";
    yourHp.innerText = yourHpValue;
    enemyHp.innerText = 140;
    backBtn.style.display = "none";
    backBtnDC.style.display = "none";
    backBtnShop.style.zIndex = "0";
    const enemyDamage = setInterval(() => {
        yourHp.innerText -= 25;
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
            dcLevelTENCompleted = false;
            dcLevelTEN.disabled = false;
            yourHp.innerText = yourHpValue;
            backBtnDC.style.zIndex = "999";
            backBtn.style.zIndex = "0";
            enemyHp.innerText = 140;
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
            dcLevelTENCompleted = true;
            dcLevelTEN.disabled = true;
            yourXPValue += yourXPIncrease;
            yourXP.innerText = yourXPValue;
            yourHp.innerText = yourHpValue;
            backBtnDC.style.zIndex = "999";
            backBtn.style.zIndex = "0";
            enemyHp.innerText = 140;
        }

    }, 1000);

}
//------------------------------------ dc level 11
dcLevelELEVEN.onmouseover = () => {
    enemyName.innerText = "Nightwing";
}
dcLevelELEVEN.onmouseout = () => {
    enemyName.innerText = " ";
}
dcLevelELEVEN.onclick = () => {
    enemyHpTextValue.innerText = `NIGHTWING´S HP:`;
    game.style.boxShadow = "0 0 120px rgb(0,100,250) inset";
    if (dcLevelONECompleted || dcLevelTWOCompleted || dcLevelTHREECompleted || dcLevelFOURCompleted || dcLevelFIVECompleted || dcLevelSIXCompleted || dcLevelSEVENCompleted || dcLevelEIGHTCompleted || dcLevelNINECompleted || dcLevelTENCompleted || dcLevelELEVENCompleted) {
        console.log("Level is completed");
    }
    game.style.backgroundImage = "url(./res/img/batmanBG.png)";
    enemy.src = "./res/img/enemy.nightwing.png";
    levelInfo.style.display = "none";
    document.body.style.backgroundColor = "black";
    audioButtonClick.src = "./res/audio/buttonsound.mp3";
    enemy.style.animation = "enemyMoving 1s infinite";
    audioButtonClick.play();
    levelsText.style.display = "none";
    game.style.display = "flex";
    gridOfLevels.style.display = "none";
    gridOfLevelsDC.style.display = "none";
    yourHp.innerText = yourHpValue;
    enemyHp.innerText = 145;
    backBtn.style.display = "none";
    backBtnDC.style.display = "none";
    backBtnShop.style.zIndex = "0";
    const enemyDamage = setInterval(() => {
        yourHp.innerText -= 26;
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
            dcLevelELEVENCompleted = false;
            dcLevelELEVEN.disabled = false;
            yourHp.innerText = yourHpValue;
            backBtnDC.style.zIndex = "999";
            backBtn.style.zIndex = "0";
            enemyHp.innerText = 145;
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
            dcLevelELEVENCompleted = true;
            dcLevelELEVEN.disabled = true;
            yourXPValue += yourXPIncrease;
            yourXP.innerText = yourXPValue;
            yourHp.innerText = yourHpValue;
            backBtnDC.style.zIndex = "999";
            backBtn.style.zIndex = "0";
            enemyHp.innerText = 145;
        }

    }, 1000);

}
//------------------------------------ dc level 12
dcLevelTWELVE.onmouseover = () => {
    enemyName.innerText = "Shazam";
}
dcLevelTWELVE.onmouseout = () => {
    enemyName.innerText = " ";
}
dcLevelTWELVE.onclick = () => {
    enemyHpTextValue.innerText = `SHAZAM´S HP:`;
    game.style.boxShadow = "0 0 120px rgb(255,200,0) inset";
    if (dcLevelONECompleted || dcLevelTWOCompleted || dcLevelTHREECompleted || dcLevelFOURCompleted || dcLevelFIVECompleted || dcLevelSIXCompleted || dcLevelSEVENCompleted || dcLevelEIGHTCompleted || dcLevelNINECompleted || dcLevelTENCompleted || dcLevelELEVENCompleted || dcLevelTWELVECompleted) {
        console.log("Level is completed");
    }
    game.style.backgroundImage = "url(./res/img/shazamBG.png)";
    enemy.src = "./res/img/enemy.shazam.png";
    levelInfo.style.display = "none";
    document.body.style.backgroundColor = "black";
    audioButtonClick.src = "./res/audio/buttonsound.mp3";
    enemy.style.animation = "enemyMoving 1s infinite";
    audioButtonClick.play();
    levelsText.style.display = "none";
    game.style.display = "flex";
    gridOfLevels.style.display = "none";
    gridOfLevelsDC.style.display = "none";
    yourHp.innerText = yourHpValue;
    enemyHp.innerText = 150;
    backBtn.style.display = "none";
    backBtnDC.style.display = "none";
    backBtnShop.style.zIndex = "0";
    const enemyDamage = setInterval(() => {
        yourHp.innerText -= 27;
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
            dcLevelTWELVECompleted = false;
            dcLevelTWELVE.disabled = false;
            yourHp.innerText = yourHpValue;
            backBtnDC.style.zIndex = "999";
            backBtn.style.zIndex = "0";
            enemyHp.innerText = 150;
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
            dcLevelTWELVECompleted = true;
            dcLevelTWELVE.disabled = true;
            yourXPValue += yourXPIncrease;
            yourXP.innerText = yourXPValue;
            yourHp.innerText = yourHpValue;
            backBtnDC.style.zIndex = "999";
            backBtn.style.zIndex = "0";
            enemyHp.innerText = 150;
        }

    }, 1000);

}
//------------------------------------ dc level 13
dcLevelTHIRTEEN.onmouseover = () => {
    enemyName.innerText = "Black Adam";
}
dcLevelTHIRTEEN.onmouseout = () => {
    enemyName.innerText = " ";
}
dcLevelTHIRTEEN.onclick = () => {
    enemyHpTextValue.innerText = `BLACK ADAM´S HP:`;
    game.style.boxShadow = "0 0 120px rgb(220,205,0) inset";
    if (dcLevelONECompleted || dcLevelTWOCompleted || dcLevelTHREECompleted || dcLevelFOURCompleted || dcLevelFIVECompleted || dcLevelSIXCompleted || dcLevelSEVENCompleted || dcLevelEIGHTCompleted || dcLevelNINECompleted || dcLevelTENCompleted || dcLevelELEVENCompleted || dcLevelTWELVECompleted || dcLevelTHIRTEENCompleted) {
        console.log("Level is completed");
    }
    game.style.backgroundImage = "url(./res/img/blackadamBG.png)";
    enemy.src = "./res/img/enemy.blackadam.png";
    levelInfo.style.display = "none";
    document.body.style.backgroundColor = "black";
    audioButtonClick.src = "./res/audio/buttonsound.mp3";
    enemy.style.animation = "enemyMoving 1s infinite";
    audioButtonClick.play();
    levelsText.style.display = "none";
    game.style.display = "flex";
    gridOfLevels.style.display = "none";
    gridOfLevelsDC.style.display = "none";
    yourHp.innerText = yourHpValue;
    enemyHp.innerText = 155;
    backBtn.style.display = "none";
    backBtnDC.style.display = "none";
    backBtnShop.style.zIndex = "0";
    const enemyDamage = setInterval(() => {
        yourHp.innerText -= 28;
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
            dcLevelTHIRTEENCompleted = false;
            dcLevelTHIRTEEN.disabled = false;
            yourHp.innerText = yourHpValue;
            backBtnDC.style.zIndex = "999";
            backBtn.style.zIndex = "0";
            enemyHp.innerText = 155;
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
            dcLevelTHIRTEENCompleted = true;
            dcLevelTHIRTEEN.disabled = true;
            yourXPValue += yourXPIncrease;
            yourXP.innerText = yourXPValue;
            yourHp.innerText = yourHpValue;
            backBtnDC.style.zIndex = "999";
            backBtn.style.zIndex = "0";
            enemyHp.innerText = 155;
        }

    }, 1000);

}
//------------------------------------ dc level 14
dcLevelFOURTEEN.onmouseover = () => {
    enemyName.innerText = "Doctor Manhattan";
}
dcLevelFOURTEEN.onmouseout = () => {
    enemyName.innerText = " ";
}
dcLevelFOURTEEN.onclick = () => {
    enemyHpTextValue.innerText = `DOCTOR MANHATTAN´S HP:`;
    game.style.boxShadow = "0 0 120px rgb(0,255,255) inset";
    if (dcLevelONECompleted || dcLevelTWOCompleted || dcLevelTHREECompleted || dcLevelFOURCompleted || dcLevelFIVECompleted || dcLevelSIXCompleted || dcLevelSEVENCompleted || dcLevelEIGHTCompleted || dcLevelNINECompleted || dcLevelTENCompleted || dcLevelELEVENCompleted || dcLevelTWELVECompleted || dcLevelTHIRTEENCompleted || dcLevelFOURTEENCompleted) {
        console.log("Level is completed");
    }
    game.style.backgroundImage = "url(./res/img/doctormanhattanBG.png)";
    enemy.src = "./res/img/enemy.doctormanhattan.png";
    levelInfo.style.display = "none";
    document.body.style.backgroundColor = "black";
    audioButtonClick.src = "./res/audio/buttonsound.mp3";
    enemy.style.animation = "enemyMoving 1s infinite";
    audioButtonClick.play();
    levelsText.style.display = "none";
    game.style.display = "flex";
    gridOfLevels.style.display = "none";
    gridOfLevelsDC.style.display = "none";
    yourHp.innerText = yourHpValue;
    enemyHp.innerText = 160;
    backBtn.style.display = "none";
    backBtnDC.style.display = "none";
    backBtnShop.style.zIndex = "0";
    const enemyDamage = setInterval(() => {
        yourHp.innerText -= 29;
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
            dcLevelFOURTEENCompleted = false;
            dcLevelFOURTEEN.disabled = false;
            yourHp.innerText = yourHpValue;
            backBtnDC.style.zIndex = "999";
            backBtn.style.zIndex = "0";
            enemyHp.innerText = 160;
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
            dcLevelFOURTEENCompleted = true;
            dcLevelFOURTEEN.disabled = true;
            yourXPValue += yourXPIncrease;
            yourXP.innerText = yourXPValue;
            yourHp.innerText = yourHpValue;
            backBtnDC.style.zIndex = "999";
            backBtn.style.zIndex = "0";
            enemyHp.innerText = 160;
        }

    }, 1000);

}
//------------------------------------ dc level 15
dcLevelFIFTEEN.onmouseover = () => {
    enemyName.innerText = "Darkseid";
}
dcLevelFIFTEEN.onmouseout = () => {
    enemyName.innerText = " ";
}
dcLevelFIFTEEN.onclick = () => {
    enemyHpTextValue.innerText = `DARKSEID´S HP:`;
    game.style.boxShadow = "0 0 120px rgb(220,50,70) inset";
    if (dcLevelONECompleted || dcLevelTWOCompleted || dcLevelTHREECompleted || dcLevelFOURCompleted || dcLevelFIVECompleted || dcLevelSIXCompleted || dcLevelSEVENCompleted || dcLevelEIGHTCompleted || dcLevelNINECompleted || dcLevelTENCompleted || dcLevelELEVENCompleted || dcLevelTWELVECompleted || dcLevelTHIRTEENCompleted || dcLevelFOURTEENCompleted || dcLevelFIFTEENCompleted) {
        console.log("Level is completed");
    }
    game.style.backgroundImage = "url(./res/img/darkseidBG.png)";
    enemy.src = "./res/img/enemy.darkseid.png";
    levelInfo.style.display = "none";
    document.body.style.backgroundColor = "black";
    audioButtonClick.src = "./res/audio/buttonsound.mp3";
    enemy.style.animation = "enemyMoving 1s infinite";
    audioButtonClick.play();
    levelsText.style.display = "none";
    game.style.display = "flex";
    gridOfLevels.style.display = "none";
    gridOfLevelsDC.style.display = "none";
    yourHp.innerText = yourHpValue;
    enemyHp.innerText = 110;
    backBtn.style.display = "none";
    backBtnDC.style.display = "none";
    backBtnShop.style.zIndex = "0";
    const enemyDamage = setInterval(() => {
        yourHp.innerText -= 30;
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
            dcLevelFIFTEENCompleted = false;
            dcLevelFIFTEEN.disabled = false;
            yourHp.innerText = yourHpValue;
            backBtnDC.style.zIndex = "999";
            backBtn.style.zIndex = "0";
            enemyHp.innerText = 165;
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
            dcLevelFIFTEENCompleted = true;
            dcLevelFIFTEEN.disabled = true;
            yourXPValue += yourXPIncrease;
            yourXP.innerText = yourXPValue;
            yourHp.innerText = yourHpValue;
            backBtnDC.style.zIndex = "999";
            backBtn.style.zIndex = "0";
            enemyHp.innerText = 165;
        }

    }, 1000);

}
