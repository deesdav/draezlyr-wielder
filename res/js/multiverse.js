//------------------------------------ multiverse
const randomNumberFunciton = (max, min) => {
    const rdNum = Math.floor(Math.random() * (max - min + 1)) + min;
    return rdNum;
}

const multiverseChangingBGColor = () => {
    const red = randomNumberFunciton(0, 255);
    const green = randomNumberFunciton(0, 255);
    const blue = randomNumberFunciton(0, 255);
    const animationPulse = randomNumberFunciton(25, 65);

    multiverse.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    multiverse.style.boxShadow = `0 0 ${animationPulse}px rgb(${red}, ${green}, ${blue})`;

}

let multiverseAppeared = false;
let roundValueCounter = 1;

multiverse.onmouseover = () => {
    multiverse.innerHTML = `ROUND ${roundValueCounter}`;
    const multi = setInterval(() => {
        multiverseChangingBGColor();
    }, 400);
    multiverse.onmouseout = () => {
        multiverse.innerText = "MULTIVERSE";
        roundValueCounter.style.display = "none";
        clearInterval(multi)
    }

}

multiverse.onclick = () => {
    const randomEnemy = Math.floor(Math.random() * 14);
    roundValueCounter++;
    //------------------------------------ enemy pikachu
    if (randomEnemy == 0) {
        game.style.boxShadow = "0 0 120px yellow inset";
        game.style.backgroundImage = "url(./res/img/pikachuBG.png)";
        enemy.src = "./res/img/enemy.pikachu.png";
        enemyHpTextValue.innerText = `PIKACHU´S HP:`;
        enemyHp.innerText = 270;
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
                yourHp.innerText = yourHpValue;
                backBtn.style.zIndex = "999";
                enemyHp.innerText = 270;
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
                yourXPValue += yourXPIncrease;
                yourXP.innerText = yourXPValue;
                yourHp.innerText = yourHpValue;
                backBtn.style.zIndex = "999";
                enemyHp.innerText = 270;
            }

        }, 1000);
    }
    //------------------------------------ enemy super mario
    if (randomEnemy == 1) {
        game.style.boxShadow = "0 0 120px red inset";
        game.style.backgroundImage = "url(./res/img/supermarioBG.png)";
        enemy.src = "./res/img/enemy.supermario.png";
        enemyHpTextValue.innerText = `SUPER MARIO´S HP:`;
        enemyHp.innerText = 275;
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
                yourHp.innerText = yourHpValue;
                backBtn.style.zIndex = "999";
                enemyHp.innerText = 275;
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
                yourXPValue += yourXPIncrease;
                yourXP.innerText = yourXPValue;
                yourHp.innerText = yourHpValue;
                backBtn.style.zIndex = "999";
                enemyHp.innerText = 275;
            }

        }, 1000);
    }
    //------------------------------------ enemy groot
    if (randomEnemy == 2) {
        game.style.boxShadow = "0 0 120px brown inset";
        game.style.backgroundImage = "url(./res/img/grootBG.png)";
        enemy.src = "./res/img/enemy.groot.png";
        enemyHpTextValue.innerText = `GROOT´S HP:`;
        enemyHp.innerText = 280;
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
                yourHp.innerText = yourHpValue;
                backBtn.style.zIndex = "999";
                enemyHp.innerText = 280;
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
                yourXPValue += yourXPIncrease;
                yourXP.innerText = yourXPValue;
                yourHp.innerText = yourHpValue;
                backBtn.style.zIndex = "999";
                enemyHp.innerText = 280;
            }

        }, 1000);
    }
    //------------------------------------ enemy robocop
    if (randomEnemy == 3) {
        game.style.boxShadow = "0 0 120px gray inset";
        game.style.backgroundImage = "url(./res/img/robocopBG.png)";
        enemy.src = "./res/img/enemy.robocop.png";
        enemyHpTextValue.innerText = `ROBOCOP´S HP:`;
        enemyHp.innerText = 285;
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
                yourHp.innerText = yourHpValue;
                backBtn.style.zIndex = "999";
                enemyHp.innerText = 285;
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
                yourXPValue += yourXPIncrease;
                yourXP.innerText = yourXPValue;
                yourHp.innerText = yourHpValue;
                backBtn.style.zIndex = "999";
                enemyHp.innerText = 285;
            }

        }, 1000);
    }
    //------------------------------------ enemy predator
    if (randomEnemy == 4) {
        game.style.boxShadow = "0 0 120px green inset";
        game.style.backgroundImage = "url(./res/img/predatorBG.png)";
        enemy.src = "./res/img/enemy.predator.png";
        enemyHpTextValue.innerText = `PREDATOR´S HP:`;
        enemyHp.innerText = 240;
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
                yourHp.innerText = yourHpValue;
                backBtn.style.zIndex = "999";
                enemyHp.innerText = 240;
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
                yourXPValue += yourXPIncrease;
                yourXP.innerText = yourXPValue;
                yourHp.innerText = yourHpValue;
                backBtn.style.zIndex = "999";
                enemyHp.innerText = 240;
            }

        }, 1000);
    }
    //------------------------------------ enemy terminator
    if (randomEnemy == 5) {
        game.style.boxShadow = "0 0 120px black inset";
        game.style.backgroundImage = "url(./res/img/terminatorBG.png)";
        enemy.src = "./res/img/enemy.terminator.png";
        enemyHpTextValue.innerText = `TERMINATOR´S HP:`;
        enemyHp.innerText = 245;
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
                yourHp.innerText = yourHpValue;
                backBtn.style.zIndex = "999";
                enemyHp.innerText = 245;
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
                yourXPValue += yourXPIncrease;
                yourXP.innerText = yourXPValue;
                yourHp.innerText = yourHpValue;
                backBtn.style.zIndex = "999";
                enemyHp.innerText = 245;
            }

        }, 1000);
    }
    //------------------------------------ enemy 
    if (randomEnemy == 6) {
        game.style.boxShadow = "0 0 120px brown inset";
        game.style.backgroundImage = "url(./res/img/BG.png)";
        enemy.src = "./res/img/enemy..png";
        enemyHpTextValue.innerText = `´S HP:`;
        enemyHp.innerText = 250;
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
                yourHp.innerText = yourHpValue;
                backBtn.style.zIndex = "999";
                enemyHp.innerText = 250;
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
                yourXPValue += yourXPIncrease;
                yourXP.innerText = yourXPValue;
                yourHp.innerText = yourHpValue;
                backBtn.style.zIndex = "999";
                enemyHp.innerText = 250;
            }

        }, 1000);
    }
    //------------------------------------ enemy 
    if (randomEnemy == 7) {
        game.style.boxShadow = "0 0 120px brown inset";
        game.style.backgroundImage = "url(./res/img/BG.png)";
        enemy.src = "./res/img/enemy..png";
        enemyHpTextValue.innerText = `´S HP:`;
        enemyHp.innerText = 255;
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
                yourHp.innerText = yourHpValue;
                backBtn.style.zIndex = "999";
                enemyHp.innerText = 255;
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
                yourXPValue += yourXPIncrease;
                yourXP.innerText = yourXPValue;
                yourHp.innerText = yourHpValue;
                backBtn.style.zIndex = "999";
                enemyHp.innerText = 255;
            }

        }, 1000);
    }
    //------------------------------------ enemy 
    if (randomEnemy == 8) {
        game.style.boxShadow = "0 0 120px brown inset";
        game.style.backgroundImage = "url(./res/img/BG.png)";
        enemy.src = "./res/img/enemy..png";
        enemyHpTextValue.innerText = `´S HP:`;
        enemyHp.innerText = 260;
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
                yourHp.innerText = yourHpValue;
                backBtn.style.zIndex = "999";
                enemyHp.innerText = 260;
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
                yourXPValue += yourXPIncrease;
                yourXP.innerText = yourXPValue;
                yourHp.innerText = yourHpValue;
                backBtn.style.zIndex = "999";
                enemyHp.innerText = 260;
            }

        }, 1000);
    }
    //------------------------------------ enemy 
    if (randomEnemy == 9) {
        game.style.boxShadow = "0 0 120px brown inset";
        game.style.backgroundImage = "url(./res/img/BG.png)";
        enemy.src = "./res/img/enemy..png";
        enemyHpTextValue.innerText = `´S HP:`;
        enemyHp.innerText = 265;
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
                yourHp.innerText = yourHpValue;
                backBtn.style.zIndex = "999";
                enemyHp.innerText = 265;
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
                yourXPValue += yourXPIncrease;
                yourXP.innerText = yourXPValue;
                yourHp.innerText = yourHpValue;
                backBtn.style.zIndex = "999";
                enemyHp.innerText = 265;
            }

        }, 1000);
    }
    //------------------------------------ enemy 
    if (randomEnemy == 10) {
        game.style.boxShadow = "0 0 120px brown inset";
        game.style.backgroundImage = "url(./res/img/BG.png)";
        enemy.src = "./res/img/enemy..png";
        enemyHpTextValue.innerText = `´S HP:`;
        enemyHp.innerText = 270;
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
                yourHp.innerText = yourHpValue;
                backBtn.style.zIndex = "999";
                enemyHp.innerText = 270;
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
                yourXPValue += yourXPIncrease;
                yourXP.innerText = yourXPValue;
                yourHp.innerText = yourHpValue;
                backBtn.style.zIndex = "999";
                enemyHp.innerText = 270;
            }

        }, 1000);
    }
    //------------------------------------ enemy 
    if (randomEnemy == 11) {
        game.style.boxShadow = "0 0 120px brown inset";
        game.style.backgroundImage = "url(./res/img/BG.png)";
        enemy.src = "./res/img/enemy..png";
        enemyHpTextValue.innerText = `´S HP:`;
        enemyHp.innerText = 275;
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
                yourHp.innerText = yourHpValue;
                backBtn.style.zIndex = "999";
                enemyHp.innerText = 275;
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
                yourXPValue += yourXPIncrease;
                yourXP.innerText = yourXPValue;
                yourHp.innerText = yourHpValue;
                backBtn.style.zIndex = "999";
                enemyHp.innerText = 275;
            }

        }, 1000);
    }
    //------------------------------------ enemy 
    if (randomEnemy == 12) {
        game.style.boxShadow = "0 0 120px brown inset";
        game.style.backgroundImage = "url(./res/img/BG.png)";
        enemy.src = "./res/img/enemy..png";
        enemyHpTextValue.innerText = `´S HP:`;
        enemyHp.innerText = 280;
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
                yourHp.innerText = yourHpValue;
                backBtn.style.zIndex = "999";
                enemyHp.innerText = 280;
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
                yourXPValue += yourXPIncrease;
                yourXP.innerText = yourXPValue;
                yourHp.innerText = yourHpValue;
                backBtn.style.zIndex = "999";
                enemyHp.innerText = 280;
            }

        }, 1000);
    }
    //------------------------------------ enemy 
    if (randomEnemy == 13) {
        game.style.boxShadow = "0 0 120px brown inset";
        game.style.backgroundImage = "url(./res/img/BG.png)";
        enemy.src = "./res/img/enemy..png";
        enemyHpTextValue.innerText = `´S HP:`;
        enemyHp.innerText = 285;
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
                yourHp.innerText = yourHpValue;
                backBtn.style.zIndex = "999";
                enemyHp.innerText = 285;
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
                yourXPValue += yourXPIncrease;
                yourXP.innerText = yourXPValue;
                yourHp.innerText = yourHpValue;
                backBtn.style.zIndex = "999";
                enemyHp.innerText = 285;
            }

        }, 1000);
    }
    //------------------------------------ enemy 
    if (randomEnemy == 14) {
        game.style.boxShadow = "0 0 120px brown inset";
        game.style.backgroundImage = "url(./res/img/BG.png)";
        enemy.src = "./res/img/enemy..png";
        enemyHpTextValue.innerText = `´S HP:`;
        enemyHp.innerText = 290;
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
                yourHp.innerText = yourHpValue;
                backBtn.style.zIndex = "999";
                enemyHp.innerText = 290;
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
                yourXPValue += yourXPIncrease;
                yourXP.innerText = yourXPValue;
                yourHp.innerText = yourHpValue;
                backBtn.style.zIndex = "999";
                enemyHp.innerText = 290;
            }

        }, 1000);
    }

    yourName.style.display = "none";
    shopBtn.style.display = "none";
    infoBtn.style.display = "none";
    planets.style.display = "none";

    const nameValue = storyPartInput.value;
    const defaultName = "Draezlyr Wielder";
    if (nameValue == "") {
        yourHpTextValue.innerText = `${defaultName}´S HP:`;
    } else {
        yourHpTextValue.innerText = `${nameValue}´S HP:`;
    }
    levelInfo.style.display = "none";
    document.body.style.backgroundColor = "black";
    audioButtonClick.src = "./res/audio/buttonsound.mp3";
    enemy.style.animation = "enemyMoving 1s infinite";
    audioButtonClick.play();
    levelsText.style.display = "none";
    game.style.display = "flex";
    gridOfLevels.style.display = "none";
    yourHp.innerText = yourHpValue;

    backBtn.style.display = "none";
    backBtnShop.style.zIndex = "0";

    gameResult.onclick = () => {
        audioButtonClick.src = "./res/audio/buttonsound.mp3";
        audioButtonClick.play();
        yourName.style.display = "block";
        shopBtn.style.display = "block";
        infoBtn.style.display = "block";
        planets.style.display = "flex";
        gameResult.style.display = "none";
    }
}
