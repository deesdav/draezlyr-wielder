const lobby = document.getElementById("lobby");
const loader = document.getElementById("loader");
const play = document.getElementById("play");
const skipIntroBtn = document.getElementById("skipIntroBtn");
const story = document.getElementById("story");
const author = document.getElementById("author");
const storyinfo = document.getElementById("storyinfo");
const nextBtn = document.getElementById("nextBtn");
const storyPart = document.getElementById("storyPart");
const storyPartInput = document.getElementById("storyPartInput");
const yourName = document.getElementById("yourName");
const yourXPText = document.getElementById("yourXPText");
const yourHPText = document.getElementById("yourHPText");
const yourHpTextPromName = document.getElementById("yourHpTextPromName");
const yourHpTextValue = document.getElementById("yourHpTextValue");
const enemyHpTextPromName = document.getElementById("enemyHpTextPromName");
const enemyHpTextValue = document.getElementById("enemyHpTextValue");
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

const dcID = document.getElementById("dc-id");
const marvelID = document.getElementById("marvel-id");
const deesdavID = document.getElementById("deesdav-id");


const collectionBtn = document.getElementById("collectionBtn");
const collectionsBox = document.getElementById("collectionsBox");
const viewPhoto = document.getElementById("viewPhoto");

//------------------------------------ audios
const audioButtonClick = document.getElementById("audioButtonClick");
const audioButtonClickMulti = document.getElementById("audioButtonClickMulti");
const audioLobbyBackground = document.getElementById("audioLobbyBackground");
const audioYouWin = document.getElementById("audioYouWin");
const audioYouLost = document.getElementById("audioYouLost");

const muteAudio = document.getElementById("muteAudio");

muteAudio.onclick = () => {
    if (muteAudio.innerText == "MUTE AUDIO") {
        toggleMute();
        muteAudio.innerText = "UNMUTE AUDIO";
    } else if (muteAudio.innerText == "UNMUTE AUDIO") {
        toggleUnMute();
        muteAudio.innerText = "MUTE AUDIO";
    }
}


//------------------------------------ mute audio
function toggleMute() {
    if (audioButtonClick.muted || audioButtonClickMulti.muted || audioLobbyBackground.muted || audioYouWin.muted || audioYouLost.muted) {
        audioButtonClick.muted = false;
        audioButtonClickMulti.muted = false;
        audioLobbyBackground.muted = false;
        audioYouWin.muted = false;
        audioYouLost.muted = false;
    } else {
        audioButtonClick.muted = true;
        audioButtonClickMulti.muted = true;
        audioLobbyBackground.muted = true;
        audioYouWin.muted = true;
        audioYouLost.muted = true;
    }
}

function toggleUnMute() {
    audioButtonClick.muted = !audioButtonClick.muted;
    audioButtonClickMulti.muted = !audioButtonClickMulti.muted;
    audioLobbyBackground.muted = !audioLobbyBackground.muted;
    audioYouWin.muted = !audioYouWin.muted;
    audioYouLost.muted = !audioYouLost.muted;
}


const multiverse = document.getElementById("multiverse");

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

let pikachuHP = 270;
let supermarioHP = 275;
let grootHP = 280;
let robocopHP = 285;
let predatorHP = 290;
let terminatorHP = 300;
let geraltHP = 305;
let doomslayerHP = 310;
let solidsnakeHP = 315;
let mandalorianHP = 320;
let darthvaderHP = 325;
let narutoHP = 330;
let gokuHP = 335;
let johnwickHP = 340;
let kratosHP = 345;

multiverse.onclick = () => {
    /* if (winsCounter.innerText >= 5) {
         const multiverseEnemiesHP = [pikachuHP, supermarioHP, grootHP, robocopHP,
             predatorHP, terminatorHP, geraltHP, doomslayerHP, solidsnakeHP, mandalorianHP,
             darthvaderHP, narutoHP, gokuHP, johnwickHP, kratosHP]
         for (let i = 0; i < multiverseEnemiesHP.length; i++) {
             multiverseEnemiesHP[i] += 50;
         }
         console.log("Updated HP values:", multiverseEnemiesHP);
 
     }*/
    const randomEnemy = Math.floor(Math.random() * 15);
    roundValueCounter++;
    //------------------------------------ enemy pikachu
    if (randomEnemy == 0) {
        game.style.boxShadow = "0 0 120px yellow inset";
        game.style.backgroundImage = "url(./res/img/pikachuBG.png)";
        enemy.src = "./res/img/enemy.pikachu.png";
        enemyHpTextValue.innerText = `PIKACHU´S HP:`;
        if (winsCounter.innerText >= 5) {
            enemyHp.innerText = (pikachuHP + 50);
        } else {
            enemyHp.innerText = pikachuHP;
        }
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
                if (winsCounter.innerText >= 5) {
                    enemyHp.innerText = (pikachuHP + 50);
                } else {
                    enemyHp.innerText = pikachuHP;
                }
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
                if (winsCounter.innerText >= 5) {
                    enemyHp.innerText = (pikachuHP + 50);
                } else {
                    enemyHp.innerText = pikachuHP;
                }
            }

        }, 1000);
    }
    //------------------------------------ enemy super mario
    if (randomEnemy == 1) {
        game.style.boxShadow = "0 0 120px red inset";
        game.style.backgroundImage = "url(./res/img/supermarioBG.png)";
        enemy.src = "./res/img/enemy.supermario.png";
        enemyHpTextValue.innerText = `SUPER MARIO´S HP:`;
        enemyHp.innerText = supermarioHP;
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
                enemyHp.innerText = supermarioHP;
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
                enemyHp.innerText = supermarioHP;
            }

        }, 1000);
    }
    //------------------------------------ enemy groot
    if (randomEnemy == 2) {
        game.style.boxShadow = "0 0 120px brown inset";
        game.style.backgroundImage = "url(./res/img/grootBG.png)";
        enemy.src = "./res/img/enemy.groot.png";
        enemyHpTextValue.innerText = `GROOT´S HP:`;
        enemyHp.innerText = grootHP;
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
                enemyHp.innerText = grootHP;
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
                enemyHp.innerText = grootHP;
            }

        }, 1000);
    }
    //------------------------------------ enemy robocop
    if (randomEnemy == 3) {
        game.style.boxShadow = "0 0 120px gray inset";
        game.style.backgroundImage = "url(./res/img/robocopBG.png)";
        enemy.src = "./res/img/enemy.robocop.png";
        enemyHpTextValue.innerText = `ROBOCOP´S HP:`;
        enemyHp.innerText = robocopHP;
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
                enemyHp.innerText = robocopHP;
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
                enemyHp.innerText = robocopHP;
            }

        }, 1000);
    }
    //------------------------------------ enemy predator
    if (randomEnemy == 4) {
        game.style.boxShadow = "0 0 120px green inset";
        game.style.backgroundImage = "url(./res/img/predatorBG.png)";
        enemy.src = "./res/img/enemy.predator.png";
        enemyHpTextValue.innerText = `PREDATOR´S HP:`;
        enemyHp.innerText = predatorHP;
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
                enemyHp.innerText = predatorHP;
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
                enemyHp.innerText = predatorHP;
            }

        }, 1000);
    }
    //------------------------------------ enemy terminator
    if (randomEnemy == 5) {
        game.style.boxShadow = "0 0 120px black inset";
        game.style.backgroundImage = "url(./res/img/terminatorBG.png)";
        enemy.src = "./res/img/enemy.terminator.png";
        enemyHpTextValue.innerText = `TERMINATOR´S HP:`;
        enemyHp.innerText = terminatorHP;
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
                enemyHp.innerText = terminatorHP;
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
                enemyHp.innerText = terminatorHP;
            }

        }, 1000);
    }
    //------------------------------------ enemy geralt
    if (randomEnemy == 6) {
        game.style.boxShadow = "0 0 120px rgb(100,50,10) inset";
        game.style.backgroundImage = "url(./res/img/geraltBG.png)";
        enemy.src = "./res/img/enemy.geralt.png";
        enemyHpTextValue.innerText = `GERALT´S HP:`;
        enemyHp.innerText = geraltHP;
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
                enemyHp.innerText = geraltHP;
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
                enemyHp.innerText = geraltHP;
            }

        }, 1000);
    }
    //------------------------------------ enemy doom slayer
    if (randomEnemy == 7) {
        game.style.boxShadow = "0 0 120px rgb(10,150,10) inset";
        game.style.backgroundImage = "url(./res/img/doomslayerBG.png)";
        enemy.src = "./res/img/enemy.doomslayer.png";
        enemyHpTextValue.innerText = `DOOM SLAYER´S HP:`;
        enemyHp.innerText = doomslayerHP;
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
                enemyHp.innerText = doomslayerHP;
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
                enemyHp.innerText = doomslayerHP;
            }

        }, 1000);
    }
    //------------------------------------ enemy solid snake
    if (randomEnemy == 8) {
        game.style.boxShadow = "0 0 120px rgb(20,20,120) inset";
        game.style.backgroundImage = "url(./res/img/solidsnakeBG.png)";
        enemy.src = "./res/img/enemy.solidsnake.png";
        enemyHpTextValue.innerText = `SOLID SNAKE´S HP:`;
        enemyHp.innerText = solidsnakeHP;
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
                enemyHp.innerText = solidsnakeHP;
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
                enemyHp.innerText = solidsnakeHP;
            }

        }, 1000);
    }
    //------------------------------------ enemy mandalorian
    if (randomEnemy == 9) {
        game.style.boxShadow = "0 0 120px silver inset";
        game.style.backgroundImage = "url(./res/img/mandalorianBG.png)";
        enemy.src = "./res/img/enemy.mandalorian.png";
        enemyHpTextValue.innerText = `MANDALORIAN´S HP:`;
        enemyHp.innerText = mandalorianHP;
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
                enemyHp.innerText = mandalorianHP;
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
                enemyHp.innerText = mandalorianHP;
            }

        }, 1000);
    }
    //------------------------------------ enemy darth vader
    if (randomEnemy == 10) {
        game.style.boxShadow = "0 0 120px rgb(100,0,0) inset";
        game.style.backgroundImage = "url(./res/img/darthvaderBG.png)";
        enemy.src = "./res/img/enemy.darthvader.png";
        enemyHpTextValue.innerText = `DARTH VADER´S HP:`;
        enemyHp.innerText = darthvaderHP;
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
                enemyHp.innerText = darthvaderHP;
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
                enemyHp.innerText = darthvaderHP;
            }

        }, 1000);
    }
    //------------------------------------ enemy naruto
    if (randomEnemy == 11) {
        game.style.boxShadow = "0 0 120px rgb(255,205,0) inset";
        game.style.backgroundImage = "url(./res/img/narutoBG.png)";
        enemy.src = "./res/img/enemy.naruto.png";
        enemyHpTextValue.innerText = `NARUTO´S HP:`;
        enemyHp.innerText = narutoHP;
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
                enemyHp.innerText = narutoHP;
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
                enemyHp.innerText = narutoHP;
            }

        }, 1000);
    }
    //------------------------------------ enemy goku
    if (randomEnemy == 12) {
        game.style.boxShadow = "0 0 120px lightblue inset";
        game.style.backgroundImage = "url(./res/img/gokuBG.png)";
        enemy.src = "./res/img/enemy.goku.png";
        enemyHpTextValue.innerText = `GOKU´S HP:`;
        enemyHp.innerText = gokuHP;
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
                enemyHp.innerText = gokuHP;
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
                enemyHp.innerText = gokuHP;
            }

        }, 1000);
    }
    //------------------------------------ enemy john wick
    if (randomEnemy == 13) {
        game.style.boxShadow = "0 0 120px goldenrod inset";
        game.style.backgroundImage = "url(./res/img/johnwickBG.png)";
        enemy.src = "./res/img/enemy.johnwick.png";
        enemyHpTextValue.innerText = `JOHN WICK´S HP:`;
        enemyHp.innerText = johnwickHP;
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
                yourHp.innerText = yourHpValue;
                backBtn.style.zIndex = "999";
                enemyHp.innerText = johnwickHP;
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
                enemyHp.innerText = johnwickHP;
            }

        }, 1000);
    }
    //------------------------------------ enemy kratos
    if (randomEnemy == 14 || randomEnemy == 15) {
        game.style.boxShadow = "0 0 120px rgb(160,20,20) inset";
        game.style.backgroundImage = "url(./res/img/kratosBG.png)";
        enemy.src = "./res/img/enemy.kratos.png";
        enemyHpTextValue.innerText = `KRATOS´S HP:`;
        enemyHp.innerText = kratosHP;
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
                yourHp.innerText = yourHpValue;
                backBtn.style.zIndex = "999";
                enemyHp.innerText = kratosHP;
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
                enemyHp.innerText = kratosHP;
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
    collectionBtn.style.display = "none";
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


//------------------------------------ img dragging disabled
const elements = [marvelPlanet, deesdavPlanet, dcPlanet, enemy, heroIdle, heroAttack, viewPhoto];

for (let i = 0; i < elements.length; i++) {
    elements[i].ondragstart = function () {
        return false;
    };

}
const imagesDragDisable = document.querySelectorAll("#gridOfKilledEnemies img");

imagesDragDisable.forEach(image => {
    image.addEventListener("dragstart", (dis) => {
        dis.preventDefault();
    });
});

//------------------------------------ btns onmouseover and onmouseout
const btnsOnMouseOverAndOut = [shopBtn, backBtn, backBtnShop, infoBtn, backBtnDC, muteAudio, collectionBtn];

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
    backBtnDC, backBtnShop, shopBtn, infoBtn, nextBtn, sendInputBtn, multiverse, skipIntroBtn, muteAudio, collectionBtn];
const dynamicValues = ["PLAY", "STORY RECAP", "AUTHOR", "MARVEL PLANET", "DC PLANET", "DEESDAV PLANET",
    "BACK", "BACK", "BACK", "SHOP", "INFO", "NEXT", "SEND", "MULTIVERSE PLAY", "SKIP INTRO", "MUTE/UNMUTE AUDIO", "COLLECTION"];
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
    infoBox.style.display = "flex";
    collectionBtn.style.display = "none";
}
infoBox.onclick = () => {
    audioButtonClick.src = "./res/audio/buttonsound.mp3";
    audioButtonClick.play();
    infoBox.style.display = "none";
    collectionBtn.style.display = "block";
}


headline.onmouseover = () => {
    audioLobbyBackground.src = "./res/audio/lobbymusic.mp3";
    audioLobbyBackground.play();
    headline.style.color = "#3498db";
    headline.style.transform = "scale(1.9)";
    headline.style.paddingTop = "50px";
    realtimepresented.style.display = "none";
    skipIntroBtn.style.display = "none";
    muteAudio.style.display = "none";
    play.style.color = "transparent";
    story.style.color = "transparent";
    author.style.color = "transparent";
    document.body.style.backgroundImage = "url(./res/img/draezlyr.lobbyBackground.gif)";
}
headline.onmouseout = () => {
    audioLobbyBackground.pause();
    audioLobbyBackground.currentTime = 0;
    headline.style.color = "black";
    headline.style.transform = "none";
    headline.style.paddingTop = "0px";
    realtimepresented.style.display = "block";
    skipIntroBtn.style.display = "block";
    muteAudio.style.display = "block";
    play.style.color = "black";
    story.style.color = "black";
    author.style.color = "black";
    document.body.style.backgroundImage = "url(./res/img/lobbyBackground.png)";
}

const lobbyElements = [play, story, author]
for (let i = 0; i < lobbyElements.length; i++) {
    lobbyElements[i].onmouseover = () => {
        lobbyElements[i].style.color = "white";
    }
    lobbyElements[i].onmouseout = () => {
        lobbyElements[i].style.color = "black";
    }
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

let playClickTime = 7000;
let nextBtnClickTime = 5000;

function playGame() {
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
    muteAudio.style.display = "none";

    planets.style.top = "250px";
    const playInterval = setTimeout(() => {
        planets.style.display = "none";
        document.body.style.cursor = "default";
        loader.style.display = "none";
        audioButtonClickMulti.pause();
        document.body.style.bakcgroundColor = "black";
        audioButtonClickMulti.currentTime = 0;
        storyinfo.style.display = "flex";
    }, playClickTime);
    if (storyinfo.style.display == "flex") {
        clearTimeout(playInterval)
    }

}

skipIntroBtn.onclick = () => {
    playClickTime = 7;
    nextBtnClickTime = 5;
    playGame();
    skipIntroBtn.style.display = "none";
}
play.onclick = () => {
    playGame();
    skipIntroBtn.style.display = "none";
}

//------------------------------------ brief info and entering your name or not
const nameValue = storyPartInput.value;
const defaultName = "Draezlyr Wielder";
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
        }, nextBtnClickTime);
    }
    if (storyPartInput.style.display == "block") {
        clearTimeout(nextBtnInterval)
    }
}
function sendEnter() {
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
    muteAudio.style.display = "block";
    collectionBtn.style.display = "block";
}
sendInputBtn.onclick = () => {
    sendEnter();
}

//------------------------------------ fast refresh page function, secret color, Enter function and F11 function
document.addEventListener("keyup", (e) => {
    console.log(e);
    switch (e.key) {
        /*case ("Escape"):
            window.location.reload();
            break;*/
        case ("7"): //god mode
            heroIdle.src = "./res/img/secret.hero.idle.png";
            heroAttack.src = "./res/img/secret.hero.attack.png";
            /*
             if (winsCounter.innerText >= 10) {
                 heroIdle.src = "./res/img/secret.hero.idle.gif";
                 heroAttack.src = "./res/img/secret.hero.attack.gif";
             }*/
            yourHp.innerText += 0;
            // Revert to normal state
            setTimeout(() => {
                yourHp.innerText = yourHpValue;
            }, 5000);
            break;

        case ("d" || "D"): //black and white default hero color
            heroIdle.src = "./res/img/hero.idle.png";
            heroAttack.src = "./res/img/hero.attack.png";
            break;
        case ("Enter"): //Enter function
            if (storyPartInput.style.display == "block") {
                sendEnter();
            }
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
    collectionBtn.style.display = "none";
    yourName.style.display = "block";
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
    multiverse.style.display = "none";
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
if (multiverseAppeared == false) {
    dcPlanet.onclick = () => {
        collectionBtn.style.display = "none";
        yourName.style.display = "block";
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
        multiverse.style.display = "none";
    }
}
//------------------------------------ back button to planets
backBtn.onclick = () => {
    collectionBtn.style.display = "block";
    yourName.style.display = "block";
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
    collectionBtn.style.display = "block";
    yourName.style.display = "block";
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
    if (dcLevelFIFTEENCompleted) {
        multiverseAppeared = true;
        multiverse.style.display = "block";
        planets.style.gap = "70px";
        dcPlanet.disable = true;
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
    collectionBtn.style.display = "block";
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
                case ("7"): //god mode
                    heroIdle.src = "./res/img/secret.hero.idle.png";
                    heroAttack.src = "./res/img/secret.hero.attack.png";

                    yourHp.innerText += 0;
                    // Revert to normal state
                    setTimeout(() => {
                        yourHp.innerText = yourHpValue;
                    }, 5000);
                    break;
                case ("r" || "R"): //red hero color
                    heroIdle.src = "./res/img/red.hero.idle.png";
                    heroAttack.src = "./res/img/red.hero.attack.png";
                    break;
                case ("d" || "D"): //black and white default hero color
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
                case ("7"): //god mode
                    heroIdle.src = "./res/img/secret.hero.idle.png";
                    heroAttack.src = "./res/img/secret.hero.attack.png";

                    yourHp.innerText += 0;
                    // Revert to normal state
                    setTimeout(() => {
                        yourHp.innerText = yourHpValue;
                    }, 5000);
                    break;
                case ("r" || "R"): //red hero color
                    heroIdle.src = "./res/img/red.hero.idle.png";
                    heroAttack.src = "./res/img/red.hero.attack.png";
                    break;
                case ("g" || "G"): //green hero color
                    heroIdle.src = "./res/img/green.hero.idle.png";
                    heroAttack.src = "./res/img/green.hero.attack.png";
                    break;
                case ("b" || "B"): //blue hero color
                    heroIdle.src = "./res/img/blue.hero.idle.png";
                    heroAttack.src = "./res/img/blue.hero.attack.png";
                    break;
                case ("y" || "Y"): //yellow hero color
                    heroIdle.src = "./res/img/yellow.hero.idle.png";
                    heroAttack.src = "./res/img/yellow.hero.attack.png";
                    break;
                case ("d" || "D"): //black and white default hero color
                    heroIdle.src = "./res/img/hero.idle.png";
                    heroAttack.src = "./res/img/hero.attack.png";
                    break;
            }
        });
    } else if (redColorOwned == true && greenColorOwned == true && blueColorOwned == false && yellowColorOwned == false) {
        document.addEventListener("keyup", (e) => {
            console.log(e);
            switch (e.key) {
                case ("7"): //god mode
                    heroIdle.src = "./res/img/secret.hero.idle.png";
                    heroAttack.src = "./res/img/secret.hero.attack.png";

                    yourHp.innerText += 0;
                    // Revert to normal state
                    setTimeout(() => {
                        yourHp.innerText = yourHpValue;
                    }, 5000);
                    break;
                case ("r" || "R"): //red hero color
                    heroIdle.src = "./res/img/red.hero.idle.png";
                    heroAttack.src = "./res/img/red.hero.attack.png";
                    break;
                case ("g" || "G"): //green hero color
                    heroIdle.src = "./res/img/green.hero.idle.png";
                    heroAttack.src = "./res/img/green.hero.attack.png";
                    break;
                case ("d" || "D"): //black and white default hero color
                    heroIdle.src = "./res/img/hero.idle.png";
                    heroAttack.src = "./res/img/hero.attack.png";
                    break;
            }
        });
    } else if (redColorOwned == true && greenColorOwned == true && blueColorOwned == true && yellowColorOwned == false) {
        document.addEventListener("keyup", (e) => {
            console.log(e);
            switch (e.key) {
                case ("7"): //god mode
                    heroIdle.src = "./res/img/secret.hero.idle.png";
                    heroAttack.src = "./res/img/secret.hero.attack.png";

                    yourHp.innerText += 0;
                    // Revert to normal state
                    setTimeout(() => {
                        yourHp.innerText = yourHpValue;
                    }, 5000);
                    break;
                case ("r" || "R"): //red hero color
                    heroIdle.src = "./res/img/red.hero.idle.png";
                    heroAttack.src = "./res/img/red.hero.attack.png";
                    break;
                case ("g" || "G"): //green hero color
                    heroIdle.src = "./res/img/green.hero.idle.png";
                    heroAttack.src = "./res/img/green.hero.attack.png";
                    break;
                case ("b" || "B"): //blue hero color
                    heroIdle.src = "./res/img/blue.hero.idle.png";
                    heroAttack.src = "./res/img/blue.hero.attack.png";
                    break;
                case ("d" || "D"): //black and white default hero color
                    heroIdle.src = "./res/img/hero.idle.png";
                    heroAttack.src = "./res/img/hero.attack.png";
                    break;
            }
        });
    } else if (redColorOwned == true && greenColorOwned == false && blueColorOwned == true && yellowColorOwned == false) {
        document.addEventListener("keyup", (e) => {
            console.log(e);
            switch (e.key) {
                case ("7"): //god mode
                    heroIdle.src = "./res/img/secret.hero.idle.png";
                    heroAttack.src = "./res/img/secret.hero.attack.png";

                    yourHp.innerText += 0;
                    // Revert to normal state
                    setTimeout(() => {
                        yourHp.innerText = yourHpValue;
                    }, 5000);
                    break;
                case ("r" || "R"): //red hero color
                    heroIdle.src = "./res/img/red.hero.idle.png";
                    heroAttack.src = "./res/img/red.hero.attack.png";
                    break;
                case ("b" || "B"): //blue hero color
                    heroIdle.src = "./res/img/blue.hero.idle.png";
                    heroAttack.src = "./res/img/blue.hero.attack.png";
                    break;
                case ("d" || "D"): //black and white default hero color
                    heroIdle.src = "./res/img/hero.idle.png";
                    heroAttack.src = "./res/img/hero.attack.png";
                    break;
            }
        });
    } else if (redColorOwned == true && greenColorOwned == false && blueColorOwned == true && yellowColorOwned == true) {
        document.addEventListener("keyup", (e) => {
            console.log(e);
            switch (e.key) {
                case ("7"): //god mode
                    heroIdle.src = "./res/img/secret.hero.idle.png";
                    heroAttack.src = "./res/img/secret.hero.attack.png";

                    yourHp.innerText += 0;
                    // Revert to normal state
                    setTimeout(() => {
                        yourHp.innerText = yourHpValue;
                    }, 5000);
                    break;
                case ("r" || "R"): //red hero color
                    heroIdle.src = "./res/img/red.hero.idle.png";
                    heroAttack.src = "./res/img/red.hero.attack.png";
                    break;
                case ("b" || "B"): //blue hero color
                    heroIdle.src = "./res/img/blue.hero.idle.png";
                    heroAttack.src = "./res/img/blue.hero.attack.png";
                    break;
                case ("y" || "Y"): //yellow hero color
                    heroIdle.src = "./res/img/yellow.hero.idle.png";
                    heroAttack.src = "./res/img/yellow.hero.attack.png";
                    break;
                case ("d" || "D"): //black and white default hero color
                    heroIdle.src = "./res/img/hero.idle.png";
                    heroAttack.src = "./res/img/hero.attack.png";
                    break;
            }
        });
    } else if (redColorOwned == true && greenColorOwned == true && blueColorOwned == false && yellowColorOwned == true) {
        document.addEventListener("keyup", (e) => {
            console.log(e);
            switch (e.key) {
                case ("7"): //god mode
                    heroIdle.src = "./res/img/secret.hero.idle.png";
                    heroAttack.src = "./res/img/secret.hero.attack.png";

                    yourHp.innerText += 0;
                    // Revert to normal state
                    setTimeout(() => {
                        yourHp.innerText = yourHpValue;
                    }, 5000);
                    break;
                case ("r" || "R"): //red hero color
                    heroIdle.src = "./res/img/red.hero.idle.png";
                    heroAttack.src = "./res/img/red.hero.attack.png";
                    break;
                case ("g" || "G"): //green hero color
                    heroIdle.src = "./res/img/green.hero.idle.png";
                    heroAttack.src = "./res/img/green.hero.attack.png";
                    break;
                case ("y" || "Y"): //yellow hero color
                    heroIdle.src = "./res/img/yellow.hero.idle.png";
                    heroAttack.src = "./res/img/yellow.hero.attack.png";
                    break;
                case ("d" || "D"): //black and white default hero color
                    heroIdle.src = "./res/img/hero.idle.png";
                    heroAttack.src = "./res/img/hero.attack.png";
                    break;
            }
        });
    } else if (redColorOwned == true && greenColorOwned == false && blueColorOwned == false && yellowColorOwned == true) {
        document.addEventListener("keyup", (e) => {
            console.log(e);
            switch (e.key) {
                case ("7"): //god mode
                    heroIdle.src = "./res/img/secret.hero.idle.png";
                    heroAttack.src = "./res/img/secret.hero.attack.png";

                    yourHp.innerText += 0;
                    // Revert to normal state
                    setTimeout(() => {
                        yourHp.innerText = yourHpValue;
                    }, 5000);
                    break;
                case ("r" || "R"): //red hero color
                    heroIdle.src = "./res/img/red.hero.idle.png";
                    heroAttack.src = "./res/img/red.hero.attack.png";
                    break;
                case ("y" || "Y"): //yellow hero color
                    heroIdle.src = "./res/img/yellow.hero.idle.png";
                    heroAttack.src = "./res/img/yellow.hero.attack.png";
                    break;
                case ("d" || "D"): //black and white default hero color
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
                case ("7"): //god mode
                    heroIdle.src = "./res/img/secret.hero.idle.png";
                    heroAttack.src = "./res/img/secret.hero.attack.png";

                    yourHp.innerText += 0;
                    // Revert to normal state
                    setTimeout(() => {
                        yourHp.innerText = yourHpValue;
                    }, 5000);
                    break;
                case ("g" || "G"): //green hero color
                    heroIdle.src = "./res/img/green.hero.idle.png";
                    heroAttack.src = "./res/img/green.hero.attack.png";
                    break;
                case ("d" || "D"): //black and white default hero color
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
                case ("7"): //god mode
                    heroIdle.src = "./res/img/secret.hero.idle.png";
                    heroAttack.src = "./res/img/secret.hero.attack.png";

                    yourHp.innerText += 0;
                    // Revert to normal state
                    setTimeout(() => {
                        yourHp.innerText = yourHpValue;
                    }, 5000);
                    break;
                case ("r" || "R"): //red hero color
                    heroIdle.src = "./res/img/red.hero.idle.png";
                    heroAttack.src = "./res/img/red.hero.attack.png";
                    break;
                case ("g" || "G"): //green hero color
                    heroIdle.src = "./res/img/green.hero.idle.png";
                    heroAttack.src = "./res/img/green.hero.attack.png";
                    break;
                case ("b" || "B"): //blue hero color
                    heroIdle.src = "./res/img/blue.hero.idle.png";
                    heroAttack.src = "./res/img/blue.hero.attack.png";
                    break;
                case ("y" || "Y"): //yellow hero color
                    heroIdle.src = "./res/img/yellow.hero.idle.png";
                    heroAttack.src = "./res/img/yellow.hero.attack.png";
                    break;
                case ("d" || "D"): //black and white default hero color
                    heroIdle.src = "./res/img/hero.idle.png";
                    heroAttack.src = "./res/img/hero.attack.png";
                    break;
            }
        });
    } else if (redColorOwned == true && greenColorOwned == true && blueColorOwned == false && yellowColorOwned == false) {
        document.addEventListener("keyup", (e) => {
            console.log(e);
            switch (e.key) {
                case ("7"): //god mode
                    heroIdle.src = "./res/img/secret.hero.idle.png";
                    heroAttack.src = "./res/img/secret.hero.attack.png";

                    yourHp.innerText += 0;
                    // Revert to normal state
                    setTimeout(() => {
                        yourHp.innerText = yourHpValue;
                    }, 5000);
                    break;
                case ("r" || "R"): //red hero color
                    heroIdle.src = "./res/img/red.hero.idle.png";
                    heroAttack.src = "./res/img/red.hero.attack.png";
                    break;
                case ("g" || "G"): //green hero color
                    heroIdle.src = "./res/img/green.hero.idle.png";
                    heroAttack.src = "./res/img/green.hero.attack.png";
                    break;
                case ("d" || "D"): //black and white default hero color
                    heroIdle.src = "./res/img/hero.idle.png";
                    heroAttack.src = "./res/img/hero.attack.png";
                    break;
            }
        });
    } else if (redColorOwned == true && greenColorOwned == true && blueColorOwned == true && yellowColorOwned == false) {
        document.addEventListener("keyup", (e) => {
            console.log(e);
            switch (e.key) {
                case ("7"): //god mode
                    heroIdle.src = "./res/img/secret.hero.idle.png";
                    heroAttack.src = "./res/img/secret.hero.attack.png";

                    yourHp.innerText += 0;
                    // Revert to normal state
                    setTimeout(() => {
                        yourHp.innerText = yourHpValue;
                    }, 5000);
                    break;
                case ("r" || "R"): //red hero color
                    heroIdle.src = "./res/img/red.hero.idle.png";
                    heroAttack.src = "./res/img/red.hero.attack.png";
                    break;
                case ("g" || "G"): //green hero color
                    heroIdle.src = "./res/img/green.hero.idle.png";
                    heroAttack.src = "./res/img/green.hero.attack.png";
                    break;
                case ("b" || "B"): //blue hero color
                    heroIdle.src = "./res/img/blue.hero.idle.png";
                    heroAttack.src = "./res/img/blue.hero.attack.png";
                    break;
                case ("d" || "D"): //black and white default hero color
                    heroIdle.src = "./res/img/hero.idle.png";
                    heroAttack.src = "./res/img/hero.attack.png";
                    break;

            }
        });
    } else if (redColorOwned == false && greenColorOwned == true && blueColorOwned == true && yellowColorOwned == false) {
        document.addEventListener("keyup", (e) => {
            console.log(e);
            switch (e.key) {
                case ("7"): //god mode
                    heroIdle.src = "./res/img/secret.hero.idle.png";
                    heroAttack.src = "./res/img/secret.hero.attack.png";

                    yourHp.innerText += 0;
                    // Revert to normal state
                    setTimeout(() => {
                        yourHp.innerText = yourHpValue;
                    }, 5000);
                    break;

                case ("g" || "G"): //green hero color
                    heroIdle.src = "./res/img/green.hero.idle.png";
                    heroAttack.src = "./res/img/green.hero.attack.png";
                    break;
                case ("b" || "B"): //blue hero color
                    heroIdle.src = "./res/img/blue.hero.idle.png";
                    heroAttack.src = "./res/img/blue.hero.attack.png";
                    break;
                case ("d" || "D"): //black and white default hero color
                    heroIdle.src = "./res/img/hero.idle.png";
                    heroAttack.src = "./res/img/hero.attack.png";
                    break;

            }
        });
    } else if (redColorOwned == false && greenColorOwned == true && blueColorOwned == true && yellowColorOwned == true) {
        document.addEventListener("keyup", (e) => {
            console.log(e);
            switch (e.key) {
                case ("7"): //god mode
                    heroIdle.src = "./res/img/secret.hero.idle.png";
                    heroAttack.src = "./res/img/secret.hero.attack.png";

                    yourHp.innerText += 0;
                    // Revert to normal state
                    setTimeout(() => {
                        yourHp.innerText = yourHpValue;
                    }, 5000);
                    break;

                case ("g" || "G"): //green hero color
                    heroIdle.src = "./res/img/green.hero.idle.png";
                    heroAttack.src = "./res/img/green.hero.attack.png";
                    break;
                case ("b" || "B"): //blue hero color
                    heroIdle.src = "./res/img/blue.hero.idle.png";
                    heroAttack.src = "./res/img/blue.hero.attack.png";
                    break;
                case ("y" || "Y"): //yellow hero color
                    heroIdle.src = "./res/img/yellow.hero.idle.png";
                    heroAttack.src = "./res/img/yellow.hero.attack.png";
                    break;
                case ("d" || "D"): //black and white default hero color
                    heroIdle.src = "./res/img/hero.idle.png";
                    heroAttack.src = "./res/img/hero.attack.png";
                    break;
            }
        });
    } else if (redColorOwned == true && greenColorOwned == true && blueColorOwned == false && yellowColorOwned == true) {
        document.addEventListener("keyup", (e) => {
            console.log(e);
            switch (e.key) {
                case ("7"): //god mode
                    heroIdle.src = "./res/img/secret.hero.idle.png";
                    heroAttack.src = "./res/img/secret.hero.attack.png";

                    yourHp.innerText += 0;
                    // Revert to normal state
                    setTimeout(() => {
                        yourHp.innerText = yourHpValue;
                    }, 5000);
                    break;
                case ("r" || "R"): //red hero color
                    heroIdle.src = "./res/img/red.hero.idle.png";
                    heroAttack.src = "./res/img/red.hero.attack.png";
                    break;
                case ("g" || "G"): //green hero color
                    heroIdle.src = "./res/img/green.hero.idle.png";
                    heroAttack.src = "./res/img/green.hero.attack.png";
                    break;

                case ("y" || "Y"): //yellow hero color
                    heroIdle.src = "./res/img/yellow.hero.idle.png";
                    heroAttack.src = "./res/img/yellow.hero.attack.png";
                    break;
                case ("d" || "D"): //black and white default hero color
                    heroIdle.src = "./res/img/hero.idle.png";
                    heroAttack.src = "./res/img/hero.attack.png";
                    break;
            }
        });
    } else if (redColorOwned == false && greenColorOwned == true && blueColorOwned == false && yellowColorOwned == true) {
        document.addEventListener("keyup", (e) => {
            console.log(e);
            switch (e.key) {
                case ("7"): //god mode
                    heroIdle.src = "./res/img/secret.hero.idle.png";
                    heroAttack.src = "./res/img/secret.hero.attack.png";

                    yourHp.innerText += 0;
                    // Revert to normal state
                    setTimeout(() => {
                        yourHp.innerText = yourHpValue;
                    }, 5000);
                    break;

                case ("g" || "G"): //green hero color
                    heroIdle.src = "./res/img/green.hero.idle.png";
                    heroAttack.src = "./res/img/green.hero.attack.png";
                    break;

                case ("y" || "Y"): //yellow hero color
                    heroIdle.src = "./res/img/yellow.hero.idle.png";
                    heroAttack.src = "./res/img/yellow.hero.attack.png";
                    break;
                case ("d" || "D"): //black and white default hero color
                    heroIdle.src = "./res/img/hero.idle.png";
                    heroAttack.src = "./res/img/hero.attack.png";
                    break;
            }

        });
    }
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
                case ("7"): //god mode
                    heroIdle.src = "./res/img/secret.hero.idle.png";
                    heroAttack.src = "./res/img/secret.hero.attack.png";

                    yourHp.innerText += 0;
                    // Revert to normal state
                    setTimeout(() => {
                        yourHp.innerText = yourHpValue;
                    }, 5000);
                    break;
                case ("b" || "B"): //blue hero color
                    heroIdle.src = "./res/img/blue.hero.idle.png";
                    heroAttack.src = "./res/img/blue.hero.attack.png";
                    break;
                case ("d" || "D"): //black and white default hero color
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
                case ("7"): //god mode
                    heroIdle.src = "./res/img/secret.hero.idle.png";
                    heroAttack.src = "./res/img/secret.hero.attack.png";

                    yourHp.innerText += 0;
                    // Revert to normal state
                    setTimeout(() => {
                        yourHp.innerText = yourHpValue;
                    }, 5000);
                    break;
                case ("r" || "R"): //red hero color
                    heroIdle.src = "./res/img/red.hero.idle.png";
                    heroAttack.src = "./res/img/red.hero.attack.png";
                    break;
                case ("g" || "G"): //green hero color
                    heroIdle.src = "./res/img/green.hero.idle.png";
                    heroAttack.src = "./res/img/green.hero.attack.png";
                    break;
                case ("b" || "B"): //blue hero color
                    heroIdle.src = "./res/img/blue.hero.idle.png";
                    heroAttack.src = "./res/img/blue.hero.attack.png";
                    break;
                case ("y" || "Y"): //yellow hero color
                    heroIdle.src = "./res/img/yellow.hero.idle.png";
                    heroAttack.src = "./res/img/yellow.hero.attack.png";
                    break;
                case ("d" || "D"): //black and white default hero color
                    heroIdle.src = "./res/img/hero.idle.png";
                    heroAttack.src = "./res/img/hero.attack.png";
                    break;
            }
        });
    } else if (redColorOwned == true && greenColorOwned == false && blueColorOwned == true && yellowColorOwned == false) {
        document.addEventListener("keyup", (e) => {
            console.log(e);
            switch (e.key) {
                case ("7"): //god mode
                    heroIdle.src = "./res/img/secret.hero.idle.png";
                    heroAttack.src = "./res/img/secret.hero.attack.png";

                    yourHp.innerText += 0;
                    // Revert to normal state
                    setTimeout(() => {
                        yourHp.innerText = yourHpValue;
                    }, 5000);
                    break;
                case ("r" || "R"): //red hero color
                    heroIdle.src = "./res/img/red.hero.idle.png";
                    heroAttack.src = "./res/img/red.hero.attack.png";
                    break;

                case ("b" || "B"): //blue hero color
                    heroIdle.src = "./res/img/blue.hero.idle.png";
                    heroAttack.src = "./res/img/blue.hero.attack.png";
                    break;
                case ("d" || "D"): //black and white default hero color
                    heroIdle.src = "./res/img/hero.idle.png";
                    heroAttack.src = "./res/img/hero.attack.png";
                    break;

            }
        });
    } else if (redColorOwned == true && greenColorOwned == true && blueColorOwned == true && yellowColorOwned == false) {
        document.addEventListener("keyup", (e) => {
            console.log(e);
            switch (e.key) {
                case ("7"): //god mode
                    heroIdle.src = "./res/img/secret.hero.idle.png";
                    heroAttack.src = "./res/img/secret.hero.attack.png";

                    yourHp.innerText += 0;
                    // Revert to normal state
                    setTimeout(() => {
                        yourHp.innerText = yourHpValue;
                    }, 5000);
                    break;
                case ("r" || "R"): //red hero color
                    heroIdle.src = "./res/img/red.hero.idle.png";
                    heroAttack.src = "./res/img/red.hero.attack.png";
                    break;
                case ("g" || "G"): //green hero color
                    heroIdle.src = "./res/img/green.hero.idle.png";
                    heroAttack.src = "./res/img/green.hero.attack.png";
                    break;
                case ("b" || "B"): //blue hero color
                    heroIdle.src = "./res/img/blue.hero.idle.png";
                    heroAttack.src = "./res/img/blue.hero.attack.png";
                    break;
                case ("d" || "D"): //black and white default hero color
                    heroIdle.src = "./res/img/hero.idle.png";
                    heroAttack.src = "./res/img/hero.attack.png";
                    break;
            }
        });
    } else if (redColorOwned == false && greenColorOwned == true && blueColorOwned == true && yellowColorOwned == false) {
        document.addEventListener("keyup", (e) => {
            console.log(e);
            switch (e.key) {
                case ("7"): //god mode
                    heroIdle.src = "./res/img/secret.hero.idle.png";
                    heroAttack.src = "./res/img/secret.hero.attack.png";

                    yourHp.innerText += 0;
                    // Revert to normal state
                    setTimeout(() => {
                        yourHp.innerText = yourHpValue;
                    }, 5000);
                    break;

                case ("g" || "G"): //green hero color
                    heroIdle.src = "./res/img/green.hero.idle.png";
                    heroAttack.src = "./res/img/green.hero.attack.png";
                    break;
                case ("b" || "B"): //blue hero color
                    heroIdle.src = "./res/img/blue.hero.idle.png";
                    heroAttack.src = "./res/img/blue.hero.attack.png";
                    break;
                case ("d" || "D"): //black and white default hero color
                    heroIdle.src = "./res/img/hero.idle.png";
                    heroAttack.src = "./res/img/hero.attack.png";
                    break;
            }
        });
    } else if (redColorOwned == false && greenColorOwned == true && blueColorOwned == true && yellowColorOwned == true) {
        document.addEventListener("keyup", (e) => {
            console.log(e);
            switch (e.key) {
                case ("7"): //god mode
                    heroIdle.src = "./res/img/secret.hero.idle.png";
                    heroAttack.src = "./res/img/secret.hero.attack.png";

                    yourHp.innerText += 0;
                    // Revert to normal state
                    setTimeout(() => {
                        yourHp.innerText = yourHpValue;
                    }, 5000);
                    break;
                case ("g" || "G"): //green hero color
                    heroIdle.src = "./res/img/green.hero.idle.png";
                    heroAttack.src = "./res/img/green.hero.attack.png";
                    break;
                case ("b" || "B"): //blue hero color
                    heroIdle.src = "./res/img/blue.hero.idle.png";
                    heroAttack.src = "./res/img/blue.hero.attack.png";
                    break;
                case ("y" || "Y"): //yellow hero color
                    heroIdle.src = "./res/img/yellow.hero.idle.png";
                    heroAttack.src = "./res/img/yellow.hero.attack.png";
                    break;
                case ("d" || "D"): //black and white default hero color
                    heroIdle.src = "./res/img/hero.idle.png";
                    heroAttack.src = "./res/img/hero.attack.png";
                    break;
            }
        });
    } else if (redColorOwned == true && greenColorOwned == false && blueColorOwned == true && yellowColorOwned == true) {
        document.addEventListener("keyup", (e) => {
            console.log(e);
            switch (e.key) {
                case ("7"): //god mode
                    heroIdle.src = "./res/img/secret.hero.idle.png";
                    heroAttack.src = "./res/img/secret.hero.attack.png";

                    yourHp.innerText += 0;
                    // Revert to normal state
                    setTimeout(() => {
                        yourHp.innerText = yourHpValue;
                    }, 5000);
                    break;
                case ("r" || "R"): //red hero color
                    heroIdle.src = "./res/img/red.hero.idle.png";
                    heroAttack.src = "./res/img/red.hero.attack.png";
                    break;

                case ("b" || "B"): //blue hero color
                    heroIdle.src = "./res/img/blue.hero.idle.png";
                    heroAttack.src = "./res/img/blue.hero.attack.png";
                    break;
                case ("y" || "Y"): //yellow hero color
                    heroIdle.src = "./res/img/yellow.hero.idle.png";
                    heroAttack.src = "./res/img/yellow.hero.attack.png";
                    break;
                case ("d" || "D"): //black and white default hero color
                    heroIdle.src = "./res/img/hero.idle.png";
                    heroAttack.src = "./res/img/hero.attack.png";
                    break;
            }
        });
    } else if (redColorOwned == false && greenColorOwned == false && blueColorOwned == true && yellowColorOwned == true) {
        document.addEventListener("keyup", (e) => {
            console.log(e);
            switch (e.key) {
                case ("7"): //god mode
                    heroIdle.src = "./res/img/secret.hero.idle.png";
                    heroAttack.src = "./res/img/secret.hero.attack.png";

                    yourHp.innerText += 0;
                    // Revert to normal state
                    setTimeout(() => {
                        yourHp.innerText = yourHpValue;
                    }, 5000);
                    break;
                case ("b" || "B"): //blue hero color
                    heroIdle.src = "./res/img/blue.hero.idle.png";
                    heroAttack.src = "./res/img/blue.hero.attack.png";
                    break;
                case ("y" || "Y"): //yellow hero color
                    heroIdle.src = "./res/img/yellow.hero.idle.png";
                    heroAttack.src = "./res/img/yellow.hero.attack.png";
                    break;
                case ("d" || "D"): //black and white default hero color
                    heroIdle.src = "./res/img/hero.idle.png";
                    heroAttack.src = "./res/img/hero.attack.png";
                    break;
            }
        });
    }

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
                case ("7"): //god mode
                    heroIdle.src = "./res/img/secret.hero.idle.png";
                    heroAttack.src = "./res/img/secret.hero.attack.png";

                    yourHp.innerText += 0;
                    // Revert to normal state
                    setTimeout(() => {
                        yourHp.innerText = yourHpValue;
                    }, 5000);
                    break;
                case ("y" || "Y"): //yellow hero color
                    heroIdle.src = "./res/img/yellow.hero.idle.png";
                    heroAttack.src = "./res/img/yellow.hero.attack.png";
                    break;
                case ("d" || "D"): //black and white default hero color
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
                case ("7"): //god mode
                    heroIdle.src = "./res/img/secret.hero.idle.png";
                    heroAttack.src = "./res/img/secret.hero.attack.png";

                    yourHp.innerText += 0;
                    // Revert to normal state
                    setTimeout(() => {
                        yourHp.innerText = yourHpValue;
                    }, 5000);
                    break;
                case ("r" || "R"): //red hero color
                    heroIdle.src = "./res/img/red.hero.idle.png";
                    heroAttack.src = "./res/img/red.hero.attack.png";
                    break;
                case ("g" || "G"): //green hero color
                    heroIdle.src = "./res/img/green.hero.idle.png";
                    heroAttack.src = "./res/img/green.hero.attack.png";
                    break;
                case ("b" || "B"): //blue hero color
                    heroIdle.src = "./res/img/blue.hero.idle.png";
                    heroAttack.src = "./res/img/blue.hero.attack.png";
                    break;
                case ("y" || "Y"): //yellow hero color
                    heroIdle.src = "./res/img/yellow.hero.idle.png";
                    heroAttack.src = "./res/img/yellow.hero.attack.png";
                    break;
                case ("d" || "D"): //black and white default hero color
                    heroIdle.src = "./res/img/hero.idle.png";
                    heroAttack.src = "./res/img/hero.attack.png";
                    break;
            }
        });
    } else if (redColorOwned == true && greenColorOwned == false && blueColorOwned == false && yellowColorOwned == true) {
        document.addEventListener("keyup", (e) => {
            console.log(e);
            switch (e.key) {
                case ("7"): //god mode
                    heroIdle.src = "./res/img/secret.hero.idle.png";
                    heroAttack.src = "./res/img/secret.hero.attack.png";

                    yourHp.innerText += 0;
                    // Revert to normal state
                    setTimeout(() => {
                        yourHp.innerText = yourHpValue;
                    }, 5000);
                    break;
                case ("r" || "R"): //red hero color
                    heroIdle.src = "./res/img/red.hero.idle.png";
                    heroAttack.src = "./res/img/red.hero.attack.png";
                    break;

                case ("y" || "Y"): //yellow hero color
                    heroIdle.src = "./res/img/yellow.hero.idle.png";
                    heroAttack.src = "./res/img/yellow.hero.attack.png";
                    break;
                case ("d" || "D"): //black and white default hero color
                    heroIdle.src = "./res/img/hero.idle.png";
                    heroAttack.src = "./res/img/hero.attack.png";
                    break;
            }
        });
    } else if (redColorOwned == true && greenColorOwned == true && blueColorOwned == false && yellowColorOwned == true) {
        document.addEventListener("keyup", (e) => {
            console.log(e);
            switch (e.key) {
                case ("7"): //god mode
                    heroIdle.src = "./res/img/secret.hero.idle.png";
                    heroAttack.src = "./res/img/secret.hero.attack.png";

                    yourHp.innerText += 0;
                    // Revert to normal state
                    setTimeout(() => {
                        yourHp.innerText = yourHpValue;
                    }, 5000);
                    break;
                case ("r" || "R"): //red hero color
                    heroIdle.src = "./res/img/red.hero.idle.png";
                    heroAttack.src = "./res/img/red.hero.attack.png";
                    break;
                case ("g" || "G"): //green hero color
                    heroIdle.src = "./res/img/green.hero.idle.png";
                    heroAttack.src = "./res/img/green.hero.attack.png";
                    break;
                case ("y" || "Y"): //yellow hero color
                    heroIdle.src = "./res/img/yellow.hero.idle.png";
                    heroAttack.src = "./res/img/yellow.hero.attack.png";
                    break;
                case ("d" || "D"): //black and white default hero color
                    heroIdle.src = "./res/img/hero.idle.png";
                    heroAttack.src = "./res/img/hero.attack.png";
                    break;
            }
        });
    } else if (redColorOwned == false && greenColorOwned == true && blueColorOwned == false && yellowColorOwned == true) {
        document.addEventListener("keyup", (e) => {
            console.log(e);
            switch (e.key) {
                case ("7"): //god mode
                    heroIdle.src = "./res/img/secret.hero.idle.png";
                    heroAttack.src = "./res/img/secret.hero.attack.png";

                    yourHp.innerText += 0;
                    // Revert to normal state
                    setTimeout(() => {
                        yourHp.innerText = yourHpValue;
                    }, 5000);
                    break;

                case ("g" || "G"): //green hero color
                    heroIdle.src = "./res/img/green.hero.idle.png";
                    heroAttack.src = "./res/img/green.hero.attack.png";
                    break;

                case ("y" || "Y"): //yellow hero color
                    heroIdle.src = "./res/img/yellow.hero.idle.png";
                    heroAttack.src = "./res/img/yellow.hero.attack.png";
                    break;
                case ("d" || "D"): //black and white default hero color
                    heroIdle.src = "./res/img/hero.idle.png";
                    heroAttack.src = "./res/img/hero.attack.png";
                    break;
            }
        });
    } else if (redColorOwned == false && greenColorOwned == true && blueColorOwned == true && yellowColorOwned == true) {
        document.addEventListener("keyup", (e) => {
            console.log(e);
            switch (e.key) {
                case ("7"): //god mode
                    heroIdle.src = "./res/img/secret.hero.idle.png";
                    heroAttack.src = "./res/img/secret.hero.attack.png";

                    yourHp.innerText += 0;
                    // Revert to normal state
                    setTimeout(() => {
                        yourHp.innerText = yourHpValue;
                    }, 5000);
                    break;

                case ("g" || "G"): //green hero color
                    heroIdle.src = "./res/img/green.hero.idle.png";
                    heroAttack.src = "./res/img/green.hero.attack.png";
                    break;
                case ("b" || "B"): //blue hero color
                    heroIdle.src = "./res/img/blue.hero.idle.png";
                    heroAttack.src = "./res/img/blue.hero.attack.png";
                    break;
                case ("y" || "Y"): //yellow hero color
                    heroIdle.src = "./res/img/yellow.hero.idle.png";
                    heroAttack.src = "./res/img/yellow.hero.attack.png";
                    break;
                case ("d" || "D"): //black and white default hero color
                    heroIdle.src = "./res/img/hero.idle.png";
                    heroAttack.src = "./res/img/hero.attack.png";
                    break;
            }
        });
    } else if (redColorOwned == true && greenColorOwned == false && blueColorOwned == true && yellowColorOwned == true) {
        document.addEventListener("keyup", (e) => {
            console.log(e);
            switch (e.key) {
                case ("7"): //god mode
                    heroIdle.src = "./res/img/secret.hero.idle.png";
                    heroAttack.src = "./res/img/secret.hero.attack.png";

                    yourHp.innerText += 0;
                    // Revert to normal state
                    setTimeout(() => {
                        yourHp.innerText = yourHpValue;
                    }, 5000);
                    break;
                case ("r" || "R"): //red hero color
                    heroIdle.src = "./res/img/red.hero.idle.png";
                    heroAttack.src = "./res/img/red.hero.attack.png";
                    break;

                case ("b" || "B"): //blue hero color
                    heroIdle.src = "./res/img/blue.hero.idle.png";
                    heroAttack.src = "./res/img/blue.hero.attack.png";
                    break;
                case ("y" || "Y"): //yellow hero color
                    heroIdle.src = "./res/img/yellow.hero.idle.png";
                    heroAttack.src = "./res/img/yellow.hero.attack.png";
                    break;
                case ("d" || "D"): //black and white default hero color
                    heroIdle.src = "./res/img/hero.idle.png";
                    heroAttack.src = "./res/img/hero.attack.png";
                    break;
            }
        });
    } else if (redColorOwned == false && greenColorOwned == false && blueColorOwned == true && yellowColorOwned == true) {
        document.addEventListener("keyup", (e) => {
            console.log(e);
            switch (e.key) {
                case ("7"): //god mode
                    heroIdle.src = "./res/img/secret.hero.idle.png";
                    heroAttack.src = "./res/img/secret.hero.attack.png";

                    yourHp.innerText += 0;
                    // Revert to normal state
                    setTimeout(() => {
                        yourHp.innerText = yourHpValue;
                    }, 5000);
                    break;

                case ("b" || "B"): //blue hero color
                    heroIdle.src = "./res/img/blue.hero.idle.png";
                    heroAttack.src = "./res/img/blue.hero.attack.png";
                    break;
                case ("y" || "Y"): //yellow hero color
                    heroIdle.src = "./res/img/yellow.hero.idle.png";
                    heroAttack.src = "./res/img/yellow.hero.attack.png";
                    break;
                case ("d" || "D"): //black and white default hero color
                    heroIdle.src = "./res/img/hero.idle.png";
                    heroAttack.src = "./res/img/hero.attack.png";
                    break;
            }
        });
    }
}
//------------------------------------ cost of colors mouse over
redColor.onmouseover = () => {
    costOfColors.innerText = redColorValue;
    overviewSrc.src = "./res/img/red.hero.idle.png";
    overview.style.display = "block";
    audioButtonClick.src = "./res/audio/choose.mp3";
    audioButtonClick.play();
}
greenColor.onmouseover = () => {
    costOfColors.innerText = greenColorValue;
    overviewSrc.src = "./res/img/green.hero.idle.png";
    overview.style.display = "block";
    audioButtonClick.src = "./res/audio/choose.mp3";
    audioButtonClick.play();
}
blueColor.onmouseover = () => {
    costOfColors.innerText = blueColorValue;
    overviewSrc.src = "./res/img/blue.hero.idle.png";
    overview.style.display = "block";
    audioButtonClick.src = "./res/audio/choose.mp3";
    audioButtonClick.play();
}
yellowColor.onmouseover = () => {
    costOfColors.innerText = yellowColorValue;
    overviewSrc.src = "./res/img/yellow.hero.idle.png";
    overview.style.display = "block";
    audioButtonClick.src = "./res/audio/choose.mp3";
    audioButtonClick.play();
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
    audioButtonClick.src = "./res/audio/choose.mp3";
    audioButtonClick.play();
}
upgradeHealth.onmouseover = () => {
    costOfUps.innerText = upgradeHealthValue;
    audioButtonClick.src = "./res/audio/choose.mp3";
    audioButtonClick.play();
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
    collectionBtn.style.display = "block";
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


//------------------------------------ hero audio
heroAttack.onmouseover = () => {
    audioLobbyBackground.src = "./res/audio/bomb.mp3";
    audioLobbyBackground.play();
}
heroIdle.onmouseover = () => {
    audioLobbyBackground.src = "./res/audio/bomb.mp3";
    audioLobbyBackground.play();
}
heroAttack.onmouseout = () => {
    audioLobbyBackground.pause();
    audioLobbyBackground.currentTime = 0;
}
heroIdle.onmouseout = () => {
    audioLobbyBackground.pause();
    audioLobbyBackground.currentTime = 0;
}
yourName.onmouseover = () => {
    yourName.style.left = "35%";
    audioLobbyBackground.src = "./res/audio/bomb.mp3";
    audioLobbyBackground.play();
}
yourName.onmouseout = () => {
    yourName.style.left = "15px";
    audioLobbyBackground.pause();
    audioLobbyBackground.currentTime = 0;
}

//------------------------------------ enemy system

enemy.onmouseout = () => {
    document.body.style.boxShadow = "0 0 0px red inset";
    if (gameResult.style.display == "block") {
        enemyHp.style.color = "red";
        enemy.style.animation = "enemyMoving 1s infinite";
        enemy.style.borderBottom = "none";
        enemy.style.borderRadius = "none";
    }
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
    if (enemyHp.innerText <= 15) {
        enemyHp.style.color = "pink";
        enemy.style.animation = "enemyMoving 1.1s infinite";
    }
    //------------------------------------ gif enemy effects
    let halfEnemyHp = (((enemyHp.innerText) / 2) + 7);
    const enemyTextValue = ["SPIDER MAN", "HULK", "IRON MAN", "THOR", "BLACK WIDOW", "CAPTAIN AMERICA", "DOCTOR STRANGE",
        "VENOM", "WOLVERINE", "DEADPOOL", "BLACK PANTHER", "GHOST RIDER", "LOKI", "CAPTAIN MARVEL", "THANOS", "BATMAN", "FLASH",
        "WONDER WOMAN", "JOKER", "SUPERMAN", "AQUAMAN", "CATWOMAN", "CYBORG", "GREEN LANTERN", "GREEN ARROW", "NIGHTWING", "SHAZAM",
        "BLACK ADAM", "DOCTOR MANHATTAN", "DARKSEID"]
    const damagedAndFinishedEffectEnemies = ["spiderman", "hulk", "ironman", "thor", "blackwidow", "captainamerica", "doctorstrange",
        "venom", "wolverine", "deadpool", "blackpanther", "ghostrider", "loki", "captainmarvel", "thanos", "batman", "flash",
        "wonderwoman", "joker", "superman", "aquaman", "catwoman", "cyborg", "greenlantern", "greenarrow", "nightwing", "shazam",
        "blackadam", "doctormanhattan", "darkseid"];
    for (let i = 0; i < enemyTextValue.length; i++) {
        for (let j = 0; j < damagedAndFinishedEffectEnemies.length; j++) {
            if (enemyHp.innerText <= halfEnemyHp && enemyHpTextValue.innerText == `${enemyTextValue[i]}´S HP:`) {
                game.style.backgroundImage = `url(./res/img/finished.${damagedAndFinishedEffectEnemies[i]}BG.gif)`;
                enemy.src = `./res/img/enemy.${damagedAndFinishedEffectEnemies[i]}.png`;
                enemy.style.filter = "grayscale(100%)drop-shadow(0px 20px 10px red) ";
                document.body.onmousemove = () => {
                    if (enemyHp.innerText <= 15) {
                        enemy.style.filter = "grayscale(100%)drop-shadow(0px 20px 10px red) ";
                    } else {
                        enemy.style.filter = "none";
                    }
                }
            }
        }
    }
}

enemy.onmouseup = () => {
    document.body.style.boxShadow = "0 0 0px red inset";
    enemyHp.style.color = "red";
    enemy.style.animation = "enemyMoving 1s infinite";
    enemy.style.borderBottom = "none";
    enemy.style.borderRadius = "none";
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
    if (enemyHp.innerText <= 15) {
        enemyHp.style.color = "pink";
        enemy.style.animation = "enemyMoving 1.1s infinite";
    }
    //------------------------------------ gif enemy effects
    let halfEnemyHp = (((enemyHp.innerText) / 2) + 7);
    const enemyTextValue = ["SPIDER MAN", "HULK", "IRON MAN", "THOR", "BLACK WIDOW", "CAPTAIN AMERICA", "DOCTOR STRANGE",
        "VENOM", "WOLVERINE", "DEADPOOL", "BLACK PANTHER", "GHOST RIDER", "LOKI", "CAPTAIN MARVEL", "THANOS", "BATMAN", "FLASH",
        "WONDER WOMAN", "JOKER", "SUPERMAN", "AQUAMAN", "CATWOMAN", "CYBORG", "GREEN LANTERN", "GREEN ARROW", "NIGHTWING", "SHAZAM",
        "BLACK ADAM", "DOCTOR MANHATTAN", "DARKSEID"]
    const damagedAndFinishedEffectEnemies = ["spiderman", "hulk", "ironman", "thor", "blackwidow", "captainamerica", "doctorstrange",
        "venom", "wolverine", "deadpool", "blackpanther", "ghostrider", "loki", "captainmarvel", "thanos", "batman", "flash",
        "wonderwoman", "joker", "superman", "aquaman", "catwoman", "cyborg", "greenlantern", "greenarrow", "nightwing", "shazam",
        "blackadam", "doctormanhattan", "darkseid"];
    for (let i = 0; i < enemyTextValue.length; i++) {
        for (let j = 0; j < damagedAndFinishedEffectEnemies.length; j++) {
            if (enemyHp.innerText <= halfEnemyHp && enemyHpTextValue.innerText == `${enemyTextValue[i]}´S HP:`) {
                game.style.backgroundImage = `url(./res/img/finished.${damagedAndFinishedEffectEnemies[i]}BG.gif)`;
                enemy.src = `./res/img/enemy.${damagedAndFinishedEffectEnemies[i]}.png`;
                enemy.style.filter = "grayscale(100%)drop-shadow(0px 20px 10px red) ";
                document.body.onmousemove = () => {
                    if (enemyHp.innerText <= 15) {
                        enemy.style.filter = "grayscale(100%)drop-shadow(0px 20px 10px red) ";
                    } else {
                        enemy.style.filter = "none";
                    }
                }
            }
        }
    }

}

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
        levelONE.style.backgroundColor = "transparent";
        levelONE.style.filter = "invert(100%)";
        levelONE.style.textDecoration = "underline";
    }
    if (levelTWOCompleted) {
        levelTHREE.style.display = "block";
        levelTWO.style.backgroundColor = "transparent";
        levelTWO.style.filter = "invert(100%)";
        levelTWO.style.textDecoration = "underline";
    }
    if (levelTHREECompleted) {
        levelFOUR.style.display = "block";
        levelTHREE.style.backgroundColor = "transparent";
        levelTHREE.style.filter = "invert(100%)";
        levelTHREE.style.textDecoration = "underline";
    }
    if (levelFOURCompleted) {
        levelFIVE.style.display = "block";
        levelFOUR.style.backgroundColor = "transparent";
        levelFOUR.style.filter = "invert(100%)";
        levelFOUR.style.textDecoration = "underline";
    }
    if (levelFIVECompleted) {
        levelSIX.style.display = "block";
        levelFIVE.style.backgroundColor = "transparent";
        levelFIVE.style.filter = "invert(100%)";
        levelFIVE.style.textDecoration = "underline";
    }
    if (levelSIXCompleted) {
        levelSEVEN.style.display = "block";
        levelSIX.style.backgroundColor = "transparent";
        levelSIX.style.filter = "invert(100%)";
        levelSIX.style.textDecoration = "underline";
    }
    if (levelSEVENCompleted) {
        levelEIGHT.style.display = "block";
        levelSEVEN.style.backgroundColor = "transparent";
        levelSEVEN.style.filter = "invert(100%)";
        levelSEVEN.style.textDecoration = "underline";
    }
    if (levelEIGHTCompleted) {
        levelNINE.style.display = "block";
        levelEIGHT.style.backgroundColor = "transparent";
        levelEIGHT.style.filter = "invert(100%)";
        levelEIGHT.style.textDecoration = "underline";
    }
    if (levelNINECompleted) {
        levelTEN.style.display = "block";
        levelNINE.style.backgroundColor = "transparent";
        levelNINE.style.filter = "invert(100%)";
        levelNINE.style.textDecoration = "underline";
    }
    if (levelTENCompleted) {
        levelELEVEN.style.display = "block";
        levelTEN.style.backgroundColor = "transparent";
        levelTEN.style.filter = "invert(100%)";
        levelTEN.style.textDecoration = "underline";
    }
    if (levelELEVENCompleted) {
        levelTWELVE.style.display = "block";
        levelELEVEN.style.backgroundColor = "transparent";
        levelELEVEN.style.filter = "invert(100%)";
        levelELEVEN.style.textDecoration = "underline";
    }
    if (levelTWELVECompleted) {
        levelTHIRTEEN.style.display = "block";
        levelTWELVE.style.backgroundColor = "transparent";
        levelTWELVE.style.filter = "invert(100%)";
        levelTWELVE.style.textDecoration = "underline";
    }
    if (levelTHIRTEENCompleted) {
        levelFOURTEEN.style.display = "block";
        levelTHIRTEEN.style.backgroundColor = "transparent";
        levelTHIRTEEN.style.filter = "invert(100%)";
        levelTHIRTEEN.style.textDecoration = "underline";
    }
    if (levelFOURTEENCompleted) {
        levelFIFTEEN.style.display = "block";
        levelFOURTEEN.style.backgroundColor = "transparent";
        levelFOURTEEN.style.filter = "invert(100%)";
        levelFOURTEEN.style.textDecoration = "underline";
    }
    if (levelFIFTEENCompleted) {
        marvelPlanet.style.filter = "grayscale(100%)";
        levelFIFTEEN.style.backgroundColor = "transparent";
        levelFIFTEEN.style.filter = "invert(100%)";
        levelFIFTEEN.style.textDecoration = "underline";
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
            collectionBtn.style.display = "none";
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
                    document.body.style.boxShadow = "0 0 0px white inset";
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
            const randomPositionX = Math.floor(Math.random() * 450);
            const randomPositionY = Math.floor(Math.random() * 450);
            dot.style.top = randomPositionY + "px";
            dot.style.left = randomPositionX + "px";

        }, 666);


        dot.onclick = () => {
            audioButtonClick.src = "./res/audio/buttonsound.mp3";
            audioButtonClick.play();
            dot.innerText++;
            yourXPValue += dotXP;
            yourXP.innerText = yourXPValue;
            if (yourXP.innerText >= 150) {
                deesdavDimension.style.backgroundImage = "none";
                deesdavDimension.style.color = "white";
                deesdavDimension.style.backgroundColor = "black";
                dot.style.display = "none";
                deesdavDimension.innerText += `NOW YOU WAIT`;
            }
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
            audioLobbyBackground.currentTime = 0;
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
        dcLevelONE.style.backgroundColor = "transparent";
        dcLevelONE.style.filter = "invert(100%)";
        dcLevelONE.style.textDecoration = "underline";
    }
    if (dcLevelTWOCompleted) {
        dcLevelTHREE.style.display = "block";
        dcLevelTWO.style.backgroundColor = "transparent";
        dcLevelTWO.style.filter = "invert(100%)";
        dcLevelTWO.style.textDecoration = "underline";
    }
    if (dcLevelTHREECompleted) {
        dcLevelFOUR.style.display = "block";
        dcLevelTHREE.style.backgroundColor = "transparent";
        dcLevelTHREE.style.filter = "invert(100%)";
        dcLevelTHREE.style.textDecoration = "underline";
    }
    if (dcLevelFOURCompleted) {
        dcLevelFIVE.style.display = "block";
        dcLevelFOUR.style.backgroundColor = "transparent";
        dcLevelFOUR.style.filter = "invert(100%)";
        dcLevelFOUR.style.textDecoration = "underline";
    }
    if (dcLevelFIVECompleted) {
        dcLevelSIX.style.display = "block";
        dcLevelFIVE.style.backgroundColor = "transparent";
        dcLevelFIVE.style.filter = "invert(100%)";
        dcLevelFIVE.style.textDecoration = "underline";
    }
    if (dcLevelSIXCompleted) {
        dcLevelSEVEN.style.display = "block";
        dcLevelSIX.style.backgroundColor = "transparent";
        dcLevelSIX.style.filter = "invert(100%)";
        dcLevelSIX.style.textDecoration = "underline";
    }
    if (dcLevelSEVENCompleted) {
        dcLevelEIGHT.style.display = "block";
        dcLevelSEVEN.style.backgroundColor = "transparent";
        dcLevelSEVEN.style.filter = "invert(100%)";
        dcLevelSEVEN.style.textDecoration = "underline";
    }
    if (dcLevelEIGHTCompleted) {
        dcLevelNINE.style.display = "block";
        dcLevelEIGHT.style.backgroundColor = "transparent";
        dcLevelEIGHT.style.filter = "invert(100%)";
        dcLevelEIGHT.style.textDecoration = "underline";
    }
    if (dcLevelNINECompleted) {
        dcLevelTEN.style.display = "block";
        dcLevelNINE.style.backgroundColor = "transparent";
        dcLevelNINE.style.filter = "invert(100%)";
        dcLevelNINE.style.textDecoration = "underline";
    }
    if (dcLevelTENCompleted) {
        dcLevelELEVEN.style.display = "block";
        dcLevelTEN.style.backgroundColor = "transparent";
        dcLevelTEN.style.filter = "invert(100%)";
        dcLevelTEN.style.textDecoration = "underline";
    }
    if (dcLevelELEVENCompleted) {
        dcLevelTWELVE.style.display = "block";
        dcLevelELEVEN.style.backgroundColor = "transparent";
        dcLevelELEVEN.style.filter = "invert(100%)";
        dcLevelELEVEN.style.textDecoration = "underline";
    }
    if (dcLevelTWELVECompleted) {
        dcLevelTHIRTEEN.style.display = "block";
        dcLevelTWELVE.style.backgroundColor = "transparent";
        dcLevelTWELVE.style.filter = "invert(100%)";
        dcLevelTWELVE.style.textDecoration = "underline";
    }
    if (dcLevelTHIRTEENCompleted) {
        dcLevelFOURTEEN.style.display = "block";
        dcLevelTHIRTEEN.style.backgroundColor = "transparent";
        dcLevelTHIRTEEN.style.filter = "invert(100%)";
        dcLevelTHIRTEEN.style.textDecoration = "underline";
    }
    if (dcLevelFOURTEENCompleted) {
        dcLevelFIFTEEN.style.display = "block";
        dcLevelFOURTEEN.style.backgroundColor = "transparent";
        dcLevelFOURTEEN.style.filter = "invert(100%)";
        dcLevelFOURTEEN.style.textDecoration = "underline";
    }
    if (dcLevelFIFTEENCompleted) {
        dcPlanet.style.filter = "grayscale(100%)";
        multiverseAppeared = true;
        multiverse.style.display = "none";
        lossesCounter.innerText = 0;
        winsCounter.innerText = 0;
        dcLevelFIFTEEN.style.backgroundColor = "transparent";
        dcLevelFIFTEEN.style.filter = "invert(100%)";
        dcLevelFIFTEEN.style.textDecoration = "underline";
    }

    audioButtonClick.src = "./res/audio/buttonsound.mp3";
    audioButtonClick.play();
    levelsText.style.display = "block";
    levelInfo.style.display = "block";
    game.style.display = "none";
    gameResult.style.display = "none";

}

collectionBtn.onclick = () => {
    audioButtonClick.src = "./res/audio/buttonsound.mp3";
    audioButtonClick.play();
    collectionsBox.style.display = "flex";
}

collectionsBox.onclick = () => {
    audioButtonClick.src = "./res/audio/buttonsound.mp3";
    audioButtonClick.play();
    collectionsBox.style.display = "none";
}

const infoOfKilledEnemyName = document.getElementById("infoOfKilledEnemyName");
const infoOfKilledEnemyDamagePerSec = document.getElementById("infoOfKilledEnemyDamagePerSec");
const infoOfKilledEnemyHP = document.getElementById("infoOfKilledEnemyHP");
const infoOfKilledEnemyLocation = document.getElementById("infoOfKilledEnemyLocation");

const styleColor = [infoOfKilledEnemyName, infoOfKilledEnemyDamagePerSec, infoOfKilledEnemyHP, infoOfKilledEnemyLocation, viewPhoto]

for (let i = 0; i < styleColor.length; i++) {
    styleColor[i].style.color = "goldenrod";
}

const killedEnemies = ["spiderman", "hulk", "ironman", "thor", "blackwidow", "captainamerica", "doctorstrange",
    "venom", "wolverine", "deadpool", "blackpanther", "ghostrider", "loki", "captainmarvel", "thanos", "batman", "flash",
    "wonderwoman", "joker", "superman", "aquaman", "catwoman", "cyborg", "greenlantern", "greenarrow", "nightwing", "shazam",
    "blackadam", "doctormanhattan", "darkseid"];

const killedEnemyNames = ["SPIDER MAN", "HULK", "IRON MAN", "THOR", "BLACK WIDOW", "CAPTAIN AMERICA", "DOCTOR STRANGE",
    "VENOM", "WOLVERINE", "DEADPOOL", "BLACK PANTHER", "GHOST RIDER", "LOKI", "CAPTAIN MARVEL", "THANOS", "BATMAN", "FLASH",
    "WONDER WOMAN", "JOKER", "SUPERMAN", "AQUAMAN", "CATWOMAN", "CYBORG", "GREEN LANTERN", "GREEN ARROW", "NIGHTWING", "SHAZAM",
    "BLACK ADAM", "DOCTOR MANHATTAN", "DARKSEID"];

const killedEnemyDamagePerSec = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
    16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];

const killedEnemyHP = [20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90,
    95, 100, 105, 110, 115, 120, 125, 130, 135, 140, 145, 150, 155, 160, 165];

const locations = ["MARVEL LEVEL ONE", "MARVEL LEVEL TWO", "MARVEL LEVEL THREE",
    "MARVEL LEVEL FOUR", "MARVEL LEVEL FIVE", "MARVEL LEVEL SIX", "MARVEL LEVEL SEVEN",
    "MARVEL LEVEL EIGHT", "MARVEL LEVEL NINE", "MARVEL LEVEL TEN", "MARVEL LEVEL ELEVEN",
    "MARVEL LEVEL TWELVE", "MARVEL LEVEL THIRTEEN", "MARVEL LEVEL FOURTEEN", "MARVEL LEVEL FIFTEEN",
    "DC LEVEL ONE", "DC LEVEL TWO", "DC LEVEL THREE", "DC LEVEL FOUR", "DC LEVEL FIVE",
    "DC LEVEL SIX", "DC LEVEL SEVEN", "DC LEVEL EIGHT", "DC LEVEL NINE", "DC LEVEL TEN",
    "DC LEVEL ELEVEN", "DC LEVEL TWELVE", "DC LEVEL THIRTEEN", "DC LEVEL FOURTEEN", "DC LEVEL FIFTEEN"];

infoOfKilledEnemyName.innerHTML = 0;
infoOfKilledEnemyDamagePerSec.innerHTML = 0;
infoOfKilledEnemyHP.innerHTML = 0;
infoOfKilledEnemyLocation.innerHTML = 0;
viewPhoto.src = "";
viewPhoto.style.display = "none";



for (let i = 0; i < killedEnemies.length; i++) {

    const killedEnemiesId = document.getElementById(`${killedEnemies[i]}KilledEnemy`);
    killedEnemiesId.onmouseover = () => {
        audioButtonClick.src = "./res/audio/choose.mp3";
        audioButtonClick.play();
        infoOfKilledEnemyName.innerText = `${killedEnemyNames[i]}`;
        infoOfKilledEnemyDamagePerSec.innerText = `${killedEnemyDamagePerSec[i]}`;
        infoOfKilledEnemyHP.innerText = `${killedEnemyHP[i]}`;
        infoOfKilledEnemyLocation.innerText = `${locations[i]}`;
        viewPhoto.src = `./res/img/enemy.${killedEnemies[i]}.gif`;
        viewPhoto.style.display = "block";
    }
    killedEnemiesId.onmouseout = () => {
        infoOfKilledEnemyName.innerHTML = null;
        infoOfKilledEnemyDamagePerSec.innerHTML = null;
        infoOfKilledEnemyHP.innerHTML = null;
        infoOfKilledEnemyLocation.innerHTML = null;
        viewPhoto.src = "";
        viewPhoto.style.display = "none";
    }
}