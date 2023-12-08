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
    game.style.boxShadow = "0 0 500px rgb(0,0,100) inset";
    if (dcLevelONECompleted) {
        console.log("Level is completed");
    }
    game.style.backgroundImage = "url(./res/img/.png)";
    enemy.src = "./res/img/enemy..png";
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
            gameResult.innerText = `You lost`;
            lossesCounter.innerText++;
            audioYouLost.src = "./res/audio/youLost.mp3";
            audioYouLost.play();
            dcLevelONECompleted = false;
            dcLevelONE.disabled = false;
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
            dcLevelONECompleted = true;
            dcLevelONE.disabled = true;
            yourXPValue += yourXPIncrease;
            yourXP.innerText = yourXPValue;
            yourHp.innerText = yourHpValue;
            backBtn.style.zIndex = "999";
            enemyHp.innerText = 90;
        }

    }, 1000);

}
