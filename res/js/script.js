const lobby = document.getElementById("lobby");
const loader = document.getElementById("loader");
const play = document.getElementById("play");
const skipIntroBtn = document.getElementById("skipIntroBtn");
const story = document.getElementById("story");
const author = document.getElementById("author");
const playDraezlyr1 = document.getElementById("playDraezlyr1");
const storyinfo = document.getElementById("storyinfo");
const nextBtn = document.getElementById("nextBtn");
const storyPart = document.getElementById("storyPart");
const storyPartInput = document.getElementById("storyPartInput");
const yourName = document.getElementById("yourName");
const yourXPText = document.getElementById("yourXPText");
const yourHPText = document.getElementById("yourHPText");
const yourShieldText = document.getElementById("yourShieldText");
const yourCriticalText = document.getElementById("yourCriticalText");
const yourHpTextPromName = document.getElementById("yourHpTextPromName");
const yourHpTextValue = document.getElementById("yourHpTextValue");
const enemyHpTextPromName = document.getElementById("enemyHpTextPromName");
const enemyHpTextValue = document.getElementById("enemyHpTextValue");
const yourDamageText = document.getElementById("yourDamageText");
const sendInputBtn = document.getElementById("sendInputBtn");
const realtimepresented = document.getElementById("realtimepresented");
const planets = document.getElementById("planets");
const theEndOfTheGame = document.getElementById("theEndOfTheGame");
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
const shield = document.getElementById("shield");
const critical = document.getElementById("critical");
const upgradeDamage = document.getElementById("upgradeDamage");
const upgradeHealth = document.getElementById("upgradeHealth");
const upgradeShield = document.getElementById("upgradeShield");
const upgradeCritical = document.getElementById("upgradeCritical");
const costingMerchant = document.getElementById("costingMerchant");
const costingCustomization = document.getElementById("costingCustomization");
const damageInfo = document.getElementById("damageInfo");
const healthInfo = document.getElementById("healthInfo");
const shieldInfo = document.getElementById("shieldInfo");
const criticalInfo = document.getElementById("criticalInfo");
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
const lastLevelReward = document.getElementById("lastLevelReward");
const rewardOverview = document.getElementById("rewardOverview");
const backToLobby = document.getElementById("backToLobby");
const noLobby = document.getElementById("noLobby");
const yesLobby = document.getElementById("yesLobby");
const inGameStoryRecapBtn = document.getElementById("inGameStoryRecapBtn");

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

const storyRecap = document.getElementById("storyRecap");
const inGameStoryRecap = document.getElementById("inGameStoryRecap");
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
const lastLevelRewardHeadline = document.getElementById("lastLevelRewardHeadline");
const lastLevelRewardSwitch = document.getElementById("lastLevelRewardSwitch");
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


//------------------------------------ easter egg
storyPartInput.addEventListener("input", function () {
    const nameV = storyPartInput.value;
    if (storyPartInput.style.display == "block") {
        audioButtonClick.src = "./res/audio/keyboard.sound.mp3";
        audioButtonClick.play();
    }
    if (nameV === "sepia" || nameV === "SEPIA") {
        console.log("sepiaaaaaaaa");
        document.body.style.filter = "sepia(150%)";
    } else if (nameV === "hue" || nameV === "HUE") {
        console.log("hueeeeee");
        document.body.style.filter = "hue-rotate(90deg)";
    } else if (nameV === "grayscale" || nameV === "GRAYSCALE") {
        console.log("grayscaleeeee");
        document.body.style.filter = "grayscale(100%)";
    } else if (nameV === "brightness" || nameV === "BRIGHTNESS") {
        console.log("brightnesseeee");
        document.body.style.filter = "brightness(150%)";
    } else if (nameV === "blur" || nameV === "BLUR") {
        console.log("bluuuuuur");
        document.body.style.filter = "blur(5px)";
    } else if (nameV === "contrast" || nameV === "CONTRAST") {
        console.log("contrasssst");
        document.body.style.filter = "contrast(200%)";
    } else if (nameV === "invert" || nameV === "INVERT") {
        console.log("inverttttt");
        document.body.style.filter = "invert(100%)";
    } else if (nameV === "saturate" || nameV === "SATURATE") {
        console.log("saturateeeee");
        document.body.style.filter = "saturate(200%)";
    } else if (nameV === "opacity" || nameV === "OPACITY") {
        console.log("opacityyyyy");
        document.body.style.filter = "opacity(50%)";
    } else if (nameV === "dropshadow" || nameV === "DROPSHADOW") {
        console.log("dropshadoooow");
        document.body.style.filter = "drop-shadow(2px 2px red) drop-shadow(-2px -2px blue)";
    } else {
        document.body.style.filter = "none";
    }
});

//------------------------------------ audios
const audioButtonClick = document.getElementById("audioButtonClick");
const audioButtonClickMulti = document.getElementById("audioButtonClickMulti");
const audioLobbyBackground = document.getElementById("audioLobbyBackground");
const audioYouWin = document.getElementById("audioYouWin");
const audioYouLost = document.getElementById("audioYouLost");

const muteAudio = document.getElementById("muteAudio");

//------------------------------------ mute audio
muteAudio.onclick = () => {
    if (muteAudio.innerText == "MUTE AUDIO") {
        toggleMute();
        muteAudio.innerText = "UNMUTE AUDIO";
    } else if (muteAudio.innerText == "UNMUTE AUDIO") {
        toggleUnMute();
        muteAudio.innerText = "MUTE AUDIO";
    }
}

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

//------------------------------------ multiverse
const multiverse = document.getElementById("multiverse");

const randomNumberFunciton = (max, min) => {
    const rdNum = Math.floor(Math.random() * (max - min + 1)) + min;
    return rdNum;
}

const multiverseHellHeavenChangingBGColor = () => {
    const red = randomNumberFunciton(0, 255);
    const green = randomNumberFunciton(0, 255);
    const blue = randomNumberFunciton(0, 255);
    const animationPulse = randomNumberFunciton(25, 65);

    multiverse.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    multiverse.style.boxShadow = `0 0 ${animationPulse}px rgb(${red}, ${green}, ${blue})`;

    hell.style.boxShadow = `0 0 ${animationPulse}px rgb(255,0,0)`;
    heaven.style.boxShadow = `0 0 ${animationPulse}px gold`;
}

let multiverseAppeared = false;
let roundValueCounter = 1;

multiverse.onmouseover = () => {
    multiverse.innerHTML = `ROUND ${roundValueCounter}`;
    const multi = setInterval(() => {
        multiverseHellHeavenChangingBGColor();
    }, 400);
    multiverse.onmouseout = () => {
        multiverse.innerText = "MULTIVERSE";
        clearInterval(multi)
    }
}

let pikachuHP = 170;
let supermarioHP = 175;
let grootHP = 180;
let robocopHP = 185;
let predatorHP = 190;
let terminatorHP = 200;
let geraltHP = 205;
let doomslayerHP = 210;
let solidsnakeHP = 215;
let mandalorianHP = 220;
let darthvaderHP = 225;
let narutoHP = 230;
let gokuHP = 235;
let johnwickHP = 240;
let kratosHP = 245;

let hellBossCompleted = false;
let heavenBossCompleted = false;

multiverse.onclick = () => {
    const randomEnemy = Math.floor(Math.random() * 15);
    roundValueCounter++;
    yourName.style.display = "block";

    //------------------------------------ enemy pikachu
    if (randomEnemy == 0) {
        game.style.boxShadow = "0 0 120px yellow inset";
        game.style.backgroundImage = "url(./res/img/backgrounds/pikachuBG.png)";
        enemy.src = "./res/img/enemies/enemy.pikachu.png";
        enemyHpTextValue.innerText = `PIKACHU´S HP:`;
        /*  if (winsCounter.innerText >= 5) {
                       enemyHp.innerText = (pikachuHP + 50);
                   } else {
                       
                   }*/
        enemyHp.innerText = pikachuHP;
        const enemyDamage = setInterval(() => {
            yourHp.innerText -= 31;
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
                /*  if (winsCounter.innerText >= 5) {
                       enemyHp.innerText = (pikachuHP + 50);
                   } else {
                       
                   }*/
                enemyHp.innerText = pikachuHP;
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
                if (hellBossCompleted == false) {
                    if (roundValueCounter > 20 && (winsCounter.innerText > lossesCounter.innerText)) {
                        console.log("hell is here");
                        hell.style.display = "block";
                    }
                }
                if (heavenBossCompleted == false) {
                    if (roundValueCounter > 40 && (winsCounter.innerText > lossesCounter.innerText) && hell.style.display == "none") {
                        console.log("heaven is here");
                        hell.style.display = "none";
                        heaven.style.display = "block";
                    }
                }

                audioYouWin.src = "./res/audio/youWin.mp3";
                audioYouWin.play();
                yourXPValue += yourXPIncrease;
                yourXP.innerText = yourXPValue;
                yourHp.innerText = yourHpValue;
                backBtn.style.zIndex = "999";
                /*  if (winsCounter.innerText >= 5) {
                      enemyHp.innerText = (pikachuHP + 50);
                  } else {
                      
                  }*/
                enemyHp.innerText = pikachuHP;
            }

        }, 1000);
    }
    //------------------------------------ enemy super mario
    if (randomEnemy == 1) {
        game.style.boxShadow = "0 0 120px red inset";
        game.style.backgroundImage = "url(./res/img/backgrounds/supermarioBG.png)";
        enemy.src = "./res/img/enemies/enemy.supermario.png";
        enemyHpTextValue.innerText = `SUPER MARIO´S HP:`;
        enemyHp.innerText = supermarioHP;
        const enemyDamage = setInterval(() => {
            yourHp.innerText -= 32;
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
                if (hellBossCompleted == false) {
                    if (roundValueCounter > 20 && (winsCounter.innerText > lossesCounter.innerText)) {
                        console.log("hell is here");
                        hell.style.display = "block";
                    }
                }
                if (heavenBossCompleted == false) {
                    if (roundValueCounter > 40 && (winsCounter.innerText > lossesCounter.innerText) && hell.style.display == "none") {
                        console.log("heaven is here");
                        hell.style.display = "none";
                        heaven.style.display = "block";
                    }
                }

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
        game.style.backgroundImage = "url(./res/img/backgrounds/grootBG.png)";
        enemy.src = "./res/img/enemies/enemy.groot.png";
        enemyHpTextValue.innerText = `GROOT´S HP:`;
        enemyHp.innerText = grootHP;
        const enemyDamage = setInterval(() => {
            yourHp.innerText -= 33;
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
                if (hellBossCompleted == false) {
                    if (roundValueCounter > 20 && (winsCounter.innerText > lossesCounter.innerText)) {
                        console.log("hell is here");
                        hell.style.display = "block";
                    }
                }
                if (heavenBossCompleted == false) {
                    if (roundValueCounter > 40 && (winsCounter.innerText > lossesCounter.innerText) && hell.style.display == "none") {
                        console.log("heaven is here");
                        hell.style.display = "none";
                        heaven.style.display = "block";
                    }
                }

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
        game.style.backgroundImage = "url(./res/img/backgrounds/robocopBG.png)";
        enemy.src = "./res/img/enemies/enemy.robocop.png";
        enemyHpTextValue.innerText = `ROBOCOP´S HP:`;
        enemyHp.innerText = robocopHP;
        const enemyDamage = setInterval(() => {
            yourHp.innerText -= 34;
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
                if (hellBossCompleted == false) {
                    if (roundValueCounter > 20 && (winsCounter.innerText > lossesCounter.innerText)) {
                        console.log("hell is here");
                        hell.style.display = "block";
                    }
                }
                if (heavenBossCompleted == false) {
                    if (roundValueCounter > 40 && (winsCounter.innerText > lossesCounter.innerText) && hell.style.display == "none") {
                        console.log("heaven is here");
                        hell.style.display = "none";
                        heaven.style.display = "block";
                    }
                }

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
        game.style.backgroundImage = "url(./res/img/backgrounds/predatorBG.png)";
        enemy.src = "./res/img/enemies/enemy.predator.png";
        enemyHpTextValue.innerText = `PREDATOR´S HP:`;
        enemyHp.innerText = predatorHP;
        const enemyDamage = setInterval(() => {
            yourHp.innerText -= 35;
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
                if (hellBossCompleted == false) {
                    if (roundValueCounter > 20 && (winsCounter.innerText > lossesCounter.innerText)) {
                        console.log("hell is here");
                        hell.style.display = "block";
                    }
                }
                if (heavenBossCompleted == false) {
                    if (roundValueCounter > 40 && (winsCounter.innerText > lossesCounter.innerText) && hell.style.display == "none") {
                        console.log("heaven is here");
                        hell.style.display = "none";
                        heaven.style.display = "block";
                    }
                }

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
        game.style.backgroundImage = "url(./res/img/backgrounds/terminatorBG.png)";
        enemy.src = "./res/img/enemies/enemy.terminator.png";
        enemyHpTextValue.innerText = `TERMINATOR´S HP:`;
        enemyHp.innerText = terminatorHP;
        const enemyDamage = setInterval(() => {
            yourHp.innerText -= 36;
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
                if (hellBossCompleted == false) {
                    if (roundValueCounter > 20 && (winsCounter.innerText > lossesCounter.innerText)) {
                        console.log("hell is here");
                        hell.style.display = "block";
                    }
                }
                if (heavenBossCompleted == false) {
                    if (roundValueCounter > 40 && (winsCounter.innerText > lossesCounter.innerText) && hell.style.display == "none") {
                        console.log("heaven is here");
                        hell.style.display = "none";
                        heaven.style.display = "block";
                    }
                }

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
        game.style.backgroundImage = "url(./res/img/backgrounds/geraltBG.png)";
        enemy.src = "./res/img/enemies/enemy.geralt.png";
        enemyHpTextValue.innerText = `GERALT´S HP:`;
        enemyHp.innerText = geraltHP;
        const enemyDamage = setInterval(() => {
            yourHp.innerText -= 37;
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
                if (hellBossCompleted == false) {
                    if (roundValueCounter > 20 && (winsCounter.innerText > lossesCounter.innerText)) {
                        console.log("hell is here");
                        hell.style.display = "block";
                    }
                }
                if (heavenBossCompleted == false) {
                    if (roundValueCounter > 40 && (winsCounter.innerText > lossesCounter.innerText) && hell.style.display == "none") {
                        console.log("heaven is here");
                        hell.style.display = "none";
                        heaven.style.display = "block";
                    }
                }

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
        game.style.backgroundImage = "url(./res/img/backgrounds/doomslayerBG.png)";
        enemy.src = "./res/img/enemies/enemy.doomslayer.png";
        enemyHpTextValue.innerText = `DOOM SLAYER´S HP:`;
        enemyHp.innerText = doomslayerHP;
        const enemyDamage = setInterval(() => {
            yourHp.innerText -= 38;
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
                if (hellBossCompleted == false) {
                    if (roundValueCounter > 20 && (winsCounter.innerText > lossesCounter.innerText)) {
                        console.log("hell is here");
                        hell.style.display = "block";
                    }
                }
                if (heavenBossCompleted == false) {
                    if (roundValueCounter > 40 && (winsCounter.innerText > lossesCounter.innerText) && hell.style.display == "none") {
                        console.log("heaven is here");
                        hell.style.display = "none";
                        heaven.style.display = "block";
                    }
                }

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
        game.style.backgroundImage = "url(./res/img/backgrounds/solidsnakeBG.png)";
        enemy.src = "./res/img/enemies/enemy.solidsnake.png";
        enemyHpTextValue.innerText = `SOLID SNAKE´S HP:`;
        enemyHp.innerText = solidsnakeHP;
        const enemyDamage = setInterval(() => {
            yourHp.innerText -= 39;
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
                if (hellBossCompleted == false) {
                    if (roundValueCounter > 20 && (winsCounter.innerText > lossesCounter.innerText)) {
                        console.log("hell is here");
                        hell.style.display = "block";
                    }
                }
                if (heavenBossCompleted == false) {
                    if (roundValueCounter > 40 && (winsCounter.innerText > lossesCounter.innerText) && hell.style.display == "none") {
                        console.log("heaven is here");
                        hell.style.display = "none";
                        heaven.style.display = "block";
                    }
                }

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
        game.style.backgroundImage = "url(./res/img/backgrounds/mandalorianBG.png)";
        enemy.src = "./res/img/enemies/enemy.mandalorian.png";
        enemyHpTextValue.innerText = `MANDALORIAN´S HP:`;
        enemyHp.innerText = mandalorianHP;
        const enemyDamage = setInterval(() => {
            yourHp.innerText -= 40;
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
                if (hellBossCompleted == false) {
                    if (roundValueCounter > 20 && (winsCounter.innerText > lossesCounter.innerText)) {
                        console.log("hell is here");
                        hell.style.display = "block";
                    }
                }
                if (heavenBossCompleted == false) {
                    if (roundValueCounter > 40 && (winsCounter.innerText > lossesCounter.innerText) && hell.style.display == "none") {
                        console.log("heaven is here");
                        hell.style.display = "none";
                        heaven.style.display = "block";
                    }
                }

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
        game.style.backgroundImage = "url(./res/img/backgrounds/darthvaderBG.png)";
        enemy.src = "./res/img/enemies/enemy.darthvader.png";
        enemyHpTextValue.innerText = `DARTH VADER´S HP:`;
        enemyHp.innerText = darthvaderHP;
        const enemyDamage = setInterval(() => {
            yourHp.innerText -= 41;
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
                if (hellBossCompleted == false) {
                    if (roundValueCounter > 20 && (winsCounter.innerText > lossesCounter.innerText)) {
                        console.log("hell is here");
                        hell.style.display = "block";
                    }
                }
                if (heavenBossCompleted == false) {
                    if (roundValueCounter > 40 && (winsCounter.innerText > lossesCounter.innerText) && hell.style.display == "none") {
                        console.log("heaven is here");
                        hell.style.display = "none";
                        heaven.style.display = "block";
                    }
                }

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
        game.style.backgroundImage = "url(./res/img/backgrounds/narutoBG.png)";
        enemy.src = "./res/img/enemies/enemy.naruto.png";
        enemyHpTextValue.innerText = `NARUTO´S HP:`;
        enemyHp.innerText = narutoHP;
        const enemyDamage = setInterval(() => {
            yourHp.innerText -= 42;
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
                if (hellBossCompleted == false) {
                    if (roundValueCounter > 20 && (winsCounter.innerText > lossesCounter.innerText)) {
                        console.log("hell is here");
                        hell.style.display = "block";
                    }
                }
                if (heavenBossCompleted == false) {
                    if (roundValueCounter > 40 && (winsCounter.innerText > lossesCounter.innerText) && hell.style.display == "none") {
                        console.log("heaven is here");
                        hell.style.display = "none";
                        heaven.style.display = "block";
                    }
                }

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
        game.style.backgroundImage = "url(./res/img/backgrounds/gokuBG.png)";
        enemy.src = "./res/img/enemies/enemy.goku.png";
        enemyHpTextValue.innerText = `GOKU´S HP:`;
        enemyHp.innerText = gokuHP;
        const enemyDamage = setInterval(() => {
            yourHp.innerText -= 43;
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
                if (hellBossCompleted == false) {
                    if (roundValueCounter > 20 && (winsCounter.innerText > lossesCounter.innerText)) {
                        console.log("hell is here");
                        hell.style.display = "block";
                    }
                }
                if (heavenBossCompleted == false) {
                    if (roundValueCounter > 40 && (winsCounter.innerText > lossesCounter.innerText) && hell.style.display == "none") {
                        console.log("heaven is here");
                        hell.style.display = "none";
                        heaven.style.display = "block";
                    }
                }

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
        game.style.backgroundImage = "url(./res/img/backgrounds/johnwickBG.png)";
        enemy.src = "./res/img/enemies/enemy.johnwick.png";
        enemyHpTextValue.innerText = `JOHN WICK´S HP:`;
        enemyHp.innerText = johnwickHP;
        const enemyDamage = setInterval(() => {
            yourHp.innerText -= 44;
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
                if (hellBossCompleted == false) {
                    if (roundValueCounter > 20 && (winsCounter.innerText > lossesCounter.innerText)) {
                        console.log("hell is here");
                        hell.style.display = "block";
                    }
                }
                if (heavenBossCompleted == false) {
                    if (roundValueCounter > 40 && (winsCounter.innerText > lossesCounter.innerText) && hell.style.display == "none") {
                        console.log("heaven is here");
                        hell.style.display = "none";
                        heaven.style.display = "block";
                    }
                }

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
        game.style.backgroundImage = "url(./res/img/backgrounds/kratosBG.png)";
        enemy.src = "./res/img/enemies/enemy.kratos.png";
        enemyHpTextValue.innerText = `KRATOS´S HP:`;
        enemyHp.innerText = kratosHP;
        const enemyDamage = setInterval(() => {
            yourHp.innerText -= 45;
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
                if (hellBossCompleted == false) {
                    if (roundValueCounter > 20 && (winsCounter.innerText > lossesCounter.innerText)) {
                        console.log("hell is here");
                        hell.style.display = "block";
                    }
                }
                if (heavenBossCompleted == false) {
                    if (roundValueCounter > 40 && (winsCounter.innerText > lossesCounter.innerText) && hell.style.display == "none") {
                        console.log("heaven is here");
                        hell.style.display = "none";
                        heaven.style.display = "block";
                    }
                }

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
    if (hours >= 0 && hours < 12) {
        realtimepresented.innerText = `Good morning`;
        document.body.style.backgroundColor = "#2d0020";
    } else if (hours >= 12 && hours <= 16) {
        realtimepresented.innerText = `Good afternoon`;
        document.body.style.backgroundColor = "#1a0019";
    } else {
        realtimepresented.innerText = `Good evening`;
        document.body.style.backgroundColor = "#01021f";
    }
    audioButtonClick.src = "./res/audio/buttonsound.mp3";
    enemy.style.animation = "enemyMoving 1s infinite";
    audioButtonClick.play();
    levelsText.style.display = "none";
    lastLevelReward.style.display = "none";
    game.style.display = "flex";
    gridOfLevels.style.display = "none";
    yourHp.innerText = yourHpValue;

    backBtn.style.display = "none";
    collectionBtn.style.display = "none";
    inGameStoryRecapBtn.style.display = "none";
    backBtnShop.style.zIndex = "0";

    gameResult.onclick = () => {
        console.log("multiverse gamee resultt");
        audioButtonClick.src = "./res/audio/buttonsound.mp3";
        audioButtonClick.play();
        yourName.style.display = "block";
        shopBtn.style.display = "block";
        infoBtn.style.display = "block";
        collectionBtn.style.display = "block";
        inGameStoryRecapBtn.style.display = "block";
        planets.style.display = "flex";
        game.style.display = "none";
        gameResult.style.display = "none";
        heroAttack.style.display = "none";
        heroIdle.style.display = "block";
        heroIdle.style.left = "20%";
        heroIdle.style.filter = "drop-shadow(3px 3px 5px #333)drop-shadow(-3px -3px 5px goldenrod)";
        heroAttack.style.filter = "drop-shadow(3px 3px 5px #333)drop-shadow(-3px -3px 5px silver)";

        if (shieldInfo.innerText == "ON") {
            console.log("shieldyyyyyyyyyyyyy");
            shield.style.display = "block";
        }
        if (criticalInfo.innerText == "ON") {
            console.log("criticalll hitt");
            critical.style.display = "block";
        }
    }
}

const hell = document.getElementById("hell");
const heaven = document.getElementById("heaven");


//------------------------------------ hell
let devilHP = 500;
let roundHellCounter = 1;

hell.onmouseover = () => {
    hell.innerText = `ROUND ${roundHellCounter}`;
    document.body.style.backgroundImage = "url(./res/img/hellCover.png)";
    hell.style.backgroundImage = "none";
    setInterval(() => {
        multiverseHellHeavenChangingBGColor();
    }, 800);
    hell.onmouseout = () => {
        hell.innerText = "HELL";
        hell.style.backgroundImage = "url(./res/img/hellCover.png)";
        document.body.style.backgroundImage = "none";
    }
}


/**
    if (roundValueCounter == 20 && (winsCounter.innerText > lossesCounter.innerText )) {
        dcPlanet.style.display = "none";
        nameOfPlanetDC.style.display = "none";
        marvelPlanet.style.display = "none";
        nameOfPlanet.style.display = "none";
        hell.style.display = "block";
    }
 */




hell.onclick = () => {
    roundHellCounter++;
    yourName.style.display = "block";
    game.style.boxShadow = "0 0 120px #850111 inset";
    game.style.backgroundImage = "url(./res/img/backgrounds/hellBG.png)";
    enemy.src = "./res/img/enemies/enemy.devil.png";
    enemyHpTextValue.innerText = `DEVIL´S HP:`;
    enemyHp.innerText = devilHP;
    const enemyDamage = setInterval(() => {
        yourHp.innerText -= 50;
        audioButtonClick.src = "./res/audio/punchAttackSound.mp3";
        audioButtonClick.play();
        if (yourHp.innerText <= 0) {
            clearInterval(enemyDamage);
            hellBossCompleted = false;
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
            enemyHp.innerText = devilHP;
        }
        if (enemyHp.innerText <= 0 && yourHp.innerText > 0) {
            clearInterval(enemyDamage);
            hellBossCompleted = true;
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
            enemyHp.innerText = devilHP;
            hell.style.display = "none";

        }

    }, 1000);

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
    if (hours >= 0 && hours < 12) {
        realtimepresented.innerText = `Good morning`;
        document.body.style.backgroundColor = "#2d0020";
    } else if (hours >= 12 && hours <= 16) {
        realtimepresented.innerText = `Good afternoon`;
        document.body.style.backgroundColor = "#1a0019";
    } else {
        realtimepresented.innerText = `Good evening`;
        document.body.style.backgroundColor = "#01021f";
    }
    audioButtonClick.src = "./res/audio/buttonsound.mp3";
    enemy.style.animation = "enemyMoving 1s infinite";
    audioButtonClick.play();
    levelsText.style.display = "none";
    lastLevelReward.style.display = "none";
    game.style.display = "flex";
    gridOfLevels.style.display = "none";
    yourHp.innerText = yourHpValue;
    backBtn.style.display = "none";
    collectionBtn.style.display = "none";
    inGameStoryRecapBtn.style.display = "none";
    backBtnShop.style.zIndex = "0";

    gameResult.onclick = () => {
        console.log("hell gamee resultt");
        audioButtonClick.src = "./res/audio/buttonsound.mp3";
        audioButtonClick.play();
        yourName.style.display = "block";
        shopBtn.style.display = "block";
        infoBtn.style.display = "block";
        collectionBtn.style.display = "block";
        inGameStoryRecapBtn.style.display = "block";
        planets.style.display = "flex";
        game.style.display = "none";
        gameResult.style.display = "none";
        heroAttack.style.display = "none";
        heroIdle.style.display = "block";
        heroIdle.style.left = "20%";
        heroIdle.style.filter = "drop-shadow(3px 3px 5px #333)drop-shadow(-3px -3px 5px goldenrod)";
        heroAttack.style.filter = "drop-shadow(3px 3px 5px #333)drop-shadow(-3px -3px 5px silver)";


        if (shieldInfo.innerText == "ON") {
            console.log("shieldyyyyyyyyyyyyy");
            shield.style.display = "block";
        }
        if (criticalInfo.innerText == "ON") {
            console.log("criticalll hitt");
            critical.style.display = "block";
        }
    }
}



//------------------------------------ heaven
let angelHP = 1000;
let roundHeavenCounter = 1;

heaven.onmouseover = () => {
    heaven.innerText = `ROUND ${roundHeavenCounter}`;
    document.body.style.backgroundImage = "url(./res/img/heavenCover.png)";
    heaven.style.backgroundImage = "none";
    setInterval(() => {
        multiverseHellHeavenChangingBGColor();
    }, 800);
    heaven.onmouseout = () => {
        heaven.innerText = "HEAVEN";
        heaven.style.backgroundImage = "url(./res/img/heavenCover.png)";
        document.body.style.backgroundImage = "none";
    }
}

heaven.onclick = () => {
    roundHeavenCounter++;
    yourName.style.display = "block";
    game.style.boxShadow = "0 0 120px #87CEEB inset";
    game.style.backgroundImage = "url(./res/img/backgrounds/heavenBG.png)";
    enemy.src = "./res/img/enemies/enemy.angel.png";
    enemyHpTextValue.innerText = `ANGEL´S HP:`;
    enemyHp.innerText = angelHP;
    const enemyDamage = setInterval(() => {
        yourHp.innerText -= 100;
        audioButtonClick.src = "./res/audio/punchAttackSound.mp3";
        audioButtonClick.play();
        if (yourHp.innerText <= 0) {
            clearInterval(enemyDamage);
            heavenBossCompleted = false;
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
            enemyHp.innerText = angelHP;
        }
        if (enemyHp.innerText <= 0 && yourHp.innerText > 0) {
            clearInterval(enemyDamage);
            heavenBossCompleted = true;
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
            enemyHp.innerText = angelHP;
            heaven.style.display = "none";

        }

    }, 1000);

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
    if (hours >= 0 && hours < 12) {
        realtimepresented.innerText = `Good morning`;
        document.body.style.backgroundColor = "#2d0020";
    } else if (hours >= 12 && hours <= 16) {
        realtimepresented.innerText = `Good afternoon`;
        document.body.style.backgroundColor = "#1a0019";
    } else {
        realtimepresented.innerText = `Good evening`;
        document.body.style.backgroundColor = "#01021f";
    }
    audioButtonClick.src = "./res/audio/buttonsound.mp3";
    enemy.style.animation = "enemyMoving 1s infinite";
    audioButtonClick.play();
    levelsText.style.display = "none";
    lastLevelReward.style.display = "none";
    game.style.display = "flex";
    gridOfLevels.style.display = "none";
    yourHp.innerText = yourHpValue;
    backBtn.style.display = "none";
    collectionBtn.style.display = "none";
    inGameStoryRecapBtn.style.display = "none";
    backBtnShop.style.zIndex = "0";

    gameResult.onclick = () => {
        console.log("heaven gamee resultt");
        audioButtonClick.src = "./res/audio/buttonsound.mp3";
        audioButtonClick.play();
        yourName.style.display = "block";
        shopBtn.style.display = "block";
        infoBtn.style.display = "block";
        collectionBtn.style.display = "block";
        inGameStoryRecapBtn.style.display = "block";
        planets.style.display = "flex";
        game.style.display = "none";
        gameResult.style.display = "none";
        heroAttack.style.display = "none";
        heroIdle.style.display = "block";
        heroIdle.style.left = "20%";
        heroIdle.style.filter = "drop-shadow(3px 3px 5px #333)drop-shadow(-3px -3px 5px goldenrod)";
        heroAttack.style.filter = "drop-shadow(3px 3px 5px #333)drop-shadow(-3px -3px 5px silver)";

        if (shieldInfo.innerText == "ON") {
            console.log("shieldyyyyyyyyyyyyy");
            shield.style.display = "block";
        }
        if (criticalInfo.innerText == "ON") {
            console.log("criticalll hitt");
            critical.style.display = "block";
        }

        if (hellBossCompleted && heavenBossCompleted) {
            dcPlanet.style.display = "none";
            nameOfPlanetDC.style.display = "none";
            marvelPlanet.style.display = "none";
            nameOfPlanet.style.display = "none";
            heaven.style.display = "none";
            hell.style.display = "none";
            inGameStoryRecapBtn.style.display = "none";
            collectionBtn.style.display = "none";
            shopBtn.style.display = "none";
            infoBtn.style.display = "none";
            multiverse.style.display = "none";
            theEndOfTheGame.style.display = "block";
        }
    }
}

theEndOfTheGame.onclick = () => {
    dcPlanet.style.display = "block";
    nameOfPlanetDC.style.display = "block";
    marvelPlanet.style.display = "none";//
    nameOfPlanet.style.display = "none";//
    heaven.style.display = "none";
    hell.style.display = "none";
    inGameStoryRecapBtn.style.display = "block";
    collectionBtn.style.display = "block";
    shopBtn.style.display = "block";
    infoBtn.style.display = "block";
    multiverse.style.display = "block";
    theEndOfTheGame.style.display = "none";
    pikachuHP = 220;
    supermarioHP = 225;
    grootHP = 230;
    robocopHP = 235;
    predatorHP = 240;
    terminatorHP = 250;
    geraltHP = 255;
    doomslayerHP = 260;
    solidsnakeHP = 265;
    mandalorianHP = 270;
    darthvaderHP = 275;
    narutoHP = 280;
    gokuHP = 285;
    johnwickHP = 290;
    kratosHP = 295;
}

theEndOfTheGame.onmouseover = () => {
    theEndOfTheGame.style.textDecoration = "underline";
    theEndOfTheGame.innerText = "DO YOU WANT TO PLAY ENDLESSLY?";
}
theEndOfTheGame.onmouseout = () => {
    theEndOfTheGame.style.textDecoration = "none";
    theEndOfTheGame.innerText = "CONGRATULATIONS, YOU HAVE COMPLETED THE GAME AND THE AUTHOR DAVID GIVES YOU A 👍";
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
const btnsOnMouseOverAndOut = [shopBtn, backBtn, backBtnShop, infoBtn, backBtnDC, muteAudio, collectionBtn, yesLobby, noLobby, playDraezlyr1, inGameStoryRecapBtn];

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
const dynamicTitleElements = [play, story, author, playDraezlyr1, marvelPlanet, dcPlanet, deesdavPlanet, backBtn,
    backBtnDC, backBtnShop, shopBtn, infoBtn, nextBtn, sendInputBtn, multiverse, skipIntroBtn, muteAudio,
    collectionBtn, hell, heaven, backToLobby, inGameStoryRecapBtn, theEndOfTheGame];
const dynamicValues = ["PLAY", "STORY RECAP", "AUTHOR", "PLAY DRAEZLYR SWORD MASSACRE", "MARVEL PLANET", "DC PLANET", "DEESDAV PLANET",
    "BACK", "BACK", "BACK", "SHOP", "INFO", "NEXT", "SEND", "MULTIVERSE PLAY", "SKIP INTRO", "MUTE/UNMUTE AUDIO",
    "COLLECTION", "HELL", "HEAVEN", "BACK TO LOBBY", "IN GAME STORY RECAP", "THE END"];
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

if (hours >= 0 && hours < 12) {
    realtimepresented.innerText = `Good morning`;
    document.body.style.backgroundColor = "#2d0020";
} else if (hours >= 12 && hours <= 16) {
    realtimepresented.innerText = `Good afternoon`;
    document.body.style.backgroundColor = "#1a0019";
} else {
    realtimepresented.innerText = `Good evening`;
    document.body.style.backgroundColor = "#01021f";
}


//------------------------------------ info button
function showInfoBox() {
    audioButtonClick.src = "./res/audio/buttonsound.mp3";
    audioButtonClick.play();
    infoBox.style.display = "flex";
    collectionBtn.style.display = "none";
    inGameStoryRecapBtn.style.display = "none";
}
infoBtn.onclick = () => {
    showInfoBox();
}
infoBox.onclick = () => {
    audioButtonClick.src = "./res/audio/buttonsound.mp3";
    audioButtonClick.play();
    infoBox.style.display = "none";
    collectionBtn.style.display = "block";
    inGameStoryRecapBtn.style.display = "block";
}

infoBox.onmouseover = () => {
    yourName.style.zIndex = "0";
    muteAudio.style.zIndex = "0";
}
infoBox.onmouseout = () => {
    yourName.style.zIndex = "999";
    muteAudio.style.zIndex = "999";
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
const storyRecapP = document.querySelectorAll("#storyRecap p");
const inGameStoryRecapP = document.querySelectorAll("#inGameStoryRecap p");
function showStoryRecap() {
    audioButtonClick.src = "./res/audio/buttonsound.mp3";
    audioButtonClick.play();
    storyRecap.style.display = "block";
    lobby.style.display = "none";
    storyRecapP.forEach(p => {
        p.innerText = "You were a knight named John Guiscard Coral Ironside who went to the Temple of Doom and Oblivion where he was sent on a mission to find a fabled sword that was in an ancient prophecy to be the most powerful weapon ever and it bore the name Draezlyr. John found a sword stuck in a stone and pulled it out and he was cursed with the desire to kill monsters. The soul of the dragon Hraezlyr is hidden in the sword. The sword could also regenerate you, so John has gained immortality, great strength, and was controlled by anger.";
    });
}

function showInGameStoryRecap() {
    audioButtonClick.src = "./res/audio/buttonsound.mp3";
    audioButtonClick.play();
    inGameStoryRecap.style.display = "block";
    planets.style.display = "none";
    collectionBtn.style.display = "none";
    infoBtn.style.display = "none";
    shopBtn.style.display = "none";
    inGameStoryRecapBtn.style.display = "none";
    inGameStoryRecapP.forEach(p => {
        p.innerText = "You were a knight named John Guiscard Coral Ironside who went to the Temple of Doom and Oblivion where he was sent on a mission to find a fabled sword that was in an ancient prophecy to be the most powerful weapon ever and it bore the name Draezlyr. John found a sword stuck in a stone and pulled it out and he was cursed with the desire to kill monsters. The soul of the dragon Hraezlyr is hidden in the sword. The sword could also regenerate you, so John has gained immortality, great strength, and was controlled by anger.";
    });
}
story.onclick = () => {
    showStoryRecap();
}
inGameStoryRecapBtn.onclick = () => {
    showInGameStoryRecap();
}
storyRecap.onclick = () => {
    audioButtonClick.src = "./res/audio/buttonsound.mp3";
    audioButtonClick.play();
    storyRecap.style.display = "none";
    lobby.style.display = "flex";

}
inGameStoryRecap.onclick = () => {
    audioButtonClick.src = "./res/audio/buttonsound.mp3";
    audioButtonClick.play();
    inGameStoryRecap.style.display = "none";
    planets.style.display = "flex";
    collectionBtn.style.display = "block";
    infoBtn.style.display = "block";
    shopBtn.style.display = "block";
    inGameStoryRecapBtn.style.display = "block";
}
author.onclick = () => {
    audioButtonClick.src = "./res/audio/buttonsound.mp3";
    audioButtonClick.play();
}
playDraezlyr1.onclick = () => {
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
    playDraezlyr1.style.display = "none";
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
    yourShieldText.style.display = "block";
    yourCriticalText.style.display = "block";
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
    inGameStoryRecapBtn.style.display = "block";
    if (hours >= 0 && hours < 12) {
        realtimepresented.innerText = `Good morning`;
        document.body.style.backgroundColor = "#2d0020";
    } else if (hours >= 12 && hours <= 16) {
        realtimepresented.innerText = `Good afternoon`;
        document.body.style.backgroundColor = "#1a0019";
    } else {
        realtimepresented.innerText = `Good evening`;
        document.body.style.backgroundColor = "#01021f";
    }
    showInfoBox();
}
sendInputBtn.onclick = () => {
    sendEnter();
}

//------------------------------------ secret color and god mode, Enter function, Critical hit and Shield function
document.addEventListener("keyup", (e) => {
    switch (e.key) {
        case ("7"): //god mode and secret hero color
            if (game.style.display == "flex") {
                audioButtonClick.src = "./res/audio/keyboard.sound.mp3";
                audioButtonClick.play();
            }
            heroIdle.src = "./res/img/secret.hero.idle.png";
            heroAttack.src = "./res/img/secret.hero.attack.png";
            yourHp.innerText += 0;
            // normal mode
            setTimeout(() => {
                yourHp.innerText = yourHpValue;
            }, 5000);
            break;
        case ("d"): //black and white default hero color
        case ("D"):
            if (game.style.display == "flex") {
                audioButtonClick.src = "./res/audio/keyboard.sound.mp3";
                audioButtonClick.play();
            }
            heroIdle.src = "./res/img/default.hero.idle.png";
            heroAttack.src = "./res/img/default.hero.attack.png";
            break;
        case ("Enter"): //Enter function
            if (storyPartInput.style.display == "flex") {
                audioButtonClick.src = "./res/audio/buttonsound.mp3";
                audioButtonClick.play();
            }
            if (storyPartInput.style.display == "none") {
                audioButtonClick.src = "";
                audioButtonClick.play();
            }
            if (storyPartInput.style.display == "block") {
                sendEnter();
            }
            break;
        case ("c"): //Critical hit function
        case ("C"):
            if (game.style.display == "flex") {
                audioButtonClick.src = "./res/audio/keyboard.sound.mp3";
                audioButtonClick.play();
                console.log("critical hit works");
            }

            if (critical.style.display == "block") {
                criticalFce();
            }
            break;
        case (" "): //Shield function
            if (game.style.display == "flex") {
                audioButtonClick.src = "./res/audio/keyboard.sound.mp3";
                audioButtonClick.play();
                console.log("shield works");
            }

            if (shield.style.display == "block") {
                shieldFce();
            }
            break;
        case ("Escape"): //Escape function
            console.log("escape works");
            if (backToLobby.style.display == "none") {
                audioButtonClick.src = "./res/audio/buttonsound.mp3";
                audioButtonClick.play();
            }
            if (backToLobby.style.display == "flex") {
                audioButtonClick.src = "";
                audioButtonClick.play();
            }
            backToLobby.style.display = "flex";

            document.body.onclick = () => {
                backToLobby.style.display = "none";
            }
            noLobby.onclick = () => {
                backToLobby.style.display = "none";
                audioButtonClick.src = "./res/audio/buttonsound.mp3";
                audioButtonClick.play();
            }
            yesLobby.onclick = () => {
                window.location.reload();
                audioButtonClick.src = "./res/audio/buttonsound.mp3";
                audioButtonClick.play();
            }
            break;
        case ("a"):
        case ("A"):
            enemyKeyUp();
            break;

        case ("b"): //bronze hero color = reward from marvel planet
        case ("B"):
            if (levelFIFTEENCompleted) {
                if (game.style.display == "flex") {
                    audioButtonClick.src = "./res/audio/keyboard.sound.mp3";
                    audioButtonClick.play();
                }
                heroIdle.src = "./res/img/bronze.hero.idle.png";
                heroAttack.src = "./res/img/bronze.hero.attack.png";
            }
            break;
        case ("s"): //silver hero color = reward from deesdav dimension
        case ("S"):
            if (deesdavDimensionCompleted) {
                if (game.style.display == "flex") {
                    audioButtonClick.src = "./res/audio/keyboard.sound.mp3";
                    audioButtonClick.play();
                }
                heroIdle.src = "./res/img/silver.hero.idle.png";
                heroAttack.src = "./res/img/silver.hero.attack.png";
            }
            break;
        case ("g"): //gold hero color = reward from dc planet
        case ("G"):
            if (dcLevelFIFTEENCompleted) {
                if (game.style.display == "flex") {
                    audioButtonClick.src = "./res/audio/keyboard.sound.mp3";
                    audioButtonClick.play();
                }
                heroIdle.src = "./res/img/gold.hero.idle.png";
                heroAttack.src = "./res/img/gold.hero.attack.png";
            }
            break;

        default:
            console.log("you typed something wrong");
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
    lastLevelRewardHeadline.innerText = "reward for completing level 15";
    lastLevelRewardSwitch.innerText = "b or B";
    planets.style.backgroundImage = "linear-gradient(rgba(0, 0, 0,  0.436), rgba(0, 0, 0, 0.436)), url(./res/img/marvelLevelsBG.png)";
    planets.style.height = "100%";
    yourName.style.zIndex = "999";
    muteAudio.style.zIndex = "999";
    rewardOverview.style.display = "block";
    rewardOverview.src = "./res/img/bronze.hero.idle.png";
    collectionBtn.style.display = "none";
    inGameStoryRecapBtn.style.display = "none";
    yourName.style.display = "block";
    marvelPlanetClick = true;
    console.log("MARVEL PLANET");
    audioButtonClick.src = "./res/audio/buttonsound.mp3";
    audioButtonClick.play();
    levelsText.style.display = "block";
    lastLevelReward.style.display = "block";
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
        lastLevelRewardHeadline.innerText = "reward for completing level 15";
        lastLevelRewardSwitch.innerText = "g or G";
        planets.style.backgroundImage = "linear-gradient(rgba(0, 0, 0,  0.436), rgba(0, 0, 0, 0.436)), url(./res/img/dcLevelsBG.png)";
        planets.style.height = "100%";
        yourName.style.zIndex = "999";
        muteAudio.style.zIndex = "999";
        rewardOverview.style.display = "block";
        rewardOverview.src = "./res/img/gold.hero.idle.png";
        collectionBtn.style.display = "none";
        inGameStoryRecapBtn.style.display = "none";
        yourName.style.display = "block";
        dcPlanetClick = true;
        console.log("DC PLANET");
        audioButtonClick.src = "./res/audio/buttonsound.mp3";
        audioButtonClick.play();
        levelsText.style.display = "block";
        lastLevelReward.style.display = "block";
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
    planets.style.backgroundImage = "none";
    planets.style.height = "380px";

    collectionBtn.style.display = "block";
    inGameStoryRecapBtn.style.display = "block";
    yourName.style.display = "block";
    audioButtonClick.src = "./res/audio/buttonsound.mp3";
    audioButtonClick.play();
    levelsText.style.display = "none";
    lastLevelReward.style.display = "none";
    levelInfo.style.display = "none";
    gridOfLevels.style.display = "none";
    gridOfLevelsDC.style.display = "none";
    levelONE.style.display = "none";
    marvelPlanet.style.display = "block";
    nameOfPlanet.style.display = "block";
    if (hours >= 0 && hours < 12) {
        realtimepresented.innerText = `Good morning`;
        document.body.style.backgroundColor = "#2d0020";
    } else if (hours >= 12 && hours <= 16) {
        realtimepresented.innerText = `Good afternoon`;
        document.body.style.backgroundColor = "#1a0019";
    } else {
        realtimepresented.innerText = `Good evening`;
        document.body.style.backgroundColor = "#01021f";
    }
    backBtn.style.display = "none";
    backBtnDC.style.display = "none";
    shopBtn.style.display = "block";
    infoBtn.style.display = "block";
    if (levelFIFTEENCompleted) {
        shopBtn.style.display = "none";
        inGameStoryRecap.style.display = "none";
        deesdavPlanet.style.display = "block";
        lastLevelReward.style.display = "none";
        nameOfPlanetDeesdav.style.display = "block";
    }
}

backBtnDC.onclick = () => {
    planets.style.backgroundImage = "none";
    planets.style.height = "380px";

    collectionBtn.style.display = "block";
    inGameStoryRecapBtn.style.display = "block";
    yourName.style.display = "block";
    marvelPlanet.disable = true;
    audioButtonClick.src = "./res/audio/buttonsound.mp3";
    audioButtonClick.play();
    levelsText.style.display = "none";
    lastLevelReward.style.display = "none";
    levelInfo.style.display = "none";
    gridOfLevels.style.display = "none";
    gridOfLevelsDC.style.display = "none";
    levelONE.style.display = "none";
    marvelPlanet.style.display = "block";
    nameOfPlanet.style.display = "block";
    if (hours >= 0 && hours < 12) {
        realtimepresented.innerText = `Good morning`;
        document.body.style.backgroundColor = "#2d0020";
    } else if (hours >= 12 && hours <= 16) {
        realtimepresented.innerText = `Good afternoon`;
        document.body.style.backgroundColor = "#1a0019";
    } else {
        realtimepresented.innerText = `Good evening`;
        document.body.style.backgroundColor = "#01021f";
    }
    backBtn.style.display = "none";
    backBtnDC.style.display = "none";
    shopBtn.style.display = "block";
    infoBtn.style.display = "block";
    deesdavDimensionCompleted = true;

    if (deesdavDimensionCompleted) {
        shopBtn.style.display = "block";
        inGameStoryRecap.style.display = "none";
        infoBtn.style.display = "block";
        deesdavDimension.style.display = "none";
        deesdavPlanet.style.display = "none";
        lastLevelReward.style.display = "none";
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
let shieldHpValue = 10;
let criticalHitValue = 10;
let shieldActivate = "OFF";
let criticalActivate = "OFF";
let yourXPValue = 0;
let yourXPIncrease = 2;
let dotXP = 5;
let upgradeDamageValue = 4;
let upgradeHealthValue = 2;
let upgradeShieldValue = 7;//7
let upgradeCriticalValue = 6;//6

shopBtn.onclick = () => {
    collectionBtn.style.display = "block";
    inGameStoryRecapBtn.style.display = "block";
    audioButtonClick.src = "./res/audio/buttonsound.mp3";
    audioButtonClick.play();
    shopBtn.style.display = "none";
    shop.style.display = "flex";
    backBtnShop.style.display = "block";
    backBtnShop.style.zIndex = "999";
}
//------------------------------------ merchant upgrades 
damageInfo.style.color = "orange";
damageInfo.style.textShadow = "1px 1px 2px black";
damageInfo.style.fontWeight = "bold";
healthInfo.style.color = "rgb(0,255,0)";
healthInfo.style.textShadow = "1px 1px 2px black";
healthInfo.style.fontWeight = "bold";
shieldInfo.style.color = "cyan";
shieldInfo.style.textShadow = "1px 1px 2px black";
shieldInfo.style.fontWeight = "bold";
criticalInfo.style.color = "rgb(128,9,9)";
criticalInfo.style.textShadow = "1px 1px 2px black";
criticalInfo.style.fontWeight = "bold";

upgradeDamage.onclick = () => {
    upgradeDamage.style.borderColor = "red";
    upgradeDamage.style.color = "red";
    if (yourXP.innerText >= upgradeDamageValue) {
        upgradeDamage.style.borderColor = "rgb(255, 165, 0, 0.684)";
        upgradeDamage.style.color = "rgb(255, 165, 0, 0.684)";
        upgradeDamage.disable = false;
        audioButtonClick.src = "./res/audio/buttonsound.mp3";
        audioButtonClick.play();
        yourXPValue -= upgradeDamageValue;
        yourXP.innerText = yourXPValue;
        yourDamage++;
        damageInfo.innerText = yourDamage;
    } else {
        upgradeDamage.disable = true;
    }
}
upgradeHealth.onclick = () => {
    upgradeHealth.style.borderColor = "red";
    upgradeHealth.style.color = "red";
    if (yourXP.innerText >= upgradeHealthValue) {
        upgradeHealth.style.borderColor = "rgb(0, 255, 0, 0.684)";
        upgradeHealth.style.color = "rgb(0, 255, 0, 0.684)";
        upgradeDamage.disable = false;
        audioButtonClick.src = "./res/audio/buttonsound.mp3";
        audioButtonClick.play();
        yourXPValue -= upgradeHealthValue;
        yourXP.innerText = yourXPValue;
        yourHpValue += 5;
        healthInfo.innerText = yourHpValue;
    } else {
        upgradeHealth.disable = true;
    }
}

upgradeShield.onclick = () => {
    upgradeShield.style.borderColor = "red";
    upgradeShield.style.color = "red";
    if (yourXP.innerText >= upgradeShieldValue) {
        upgradeShield.style.borderColor = "rgb(0, 255, 255, 0.684)";
        upgradeShield.style.color = "rgb(0, 255, 255, 0.684)";
        upgradeShield.disable = false;
        audioButtonClick.src = "./res/audio/buttonsound.mp3";
        audioButtonClick.play();
        yourXPValue -= upgradeShieldValue;
        yourXP.innerText = yourXPValue;
        shieldActivate = "ON";
        shieldInfo.innerText = shieldActivate;
        upgradeShield.style.display = "none";
        shield.style.display = "block";
    } else {
        upgradeShield.disable = true;
    }
}

function shieldFce() {
    audioButtonClick.src = "./res/audio/shield.mp3";
    audioButtonClick.play();
    shield.style.display = "none";
    yourHp.innerText = yourHpValue + shieldHpValue;
    shieldActivate = "ON";
    shieldInfo.innerText = shieldActivate;
    heroIdle.style.filter = "drop-shadow(3px 3px 5px cyan)drop-shadow(-3px -3px 5px cyan)";
    heroAttack.style.filter = "drop-shadow(3px 3px 5px cyan)drop-shadow(-3px -3px 5px cyan)";
    if (critical.style.display === "none" && shield.style.display === "none") {
        heroIdle.style.filter = "drop-shadow(3px 3px 5px rgb(0, 255, 255))drop-shadow(-3px -3px 5px rgb(128, 9, 9))";
        heroAttack.style.filter = "drop-shadow(3px 3px 5px rgb(128, 9, 9))drop-shadow(-3px -3px 5px rgb(0, 255, 255))";
    }
}

shield.onclick = () => {
    shieldFce();
}

upgradeCritical.onclick = () => {
    upgradeCritical.style.borderColor = "red";
    upgradeCritical.style.color = "red";
    if (yourXP.innerText >= upgradeCriticalValue) {
        upgradeCritical.style.borderColor = "rgb(128, 9, 9, 0.684)";
        upgradeCritical.style.color = "rgb(128, 9, 9, 0.684)";
        upgradeCritical.disable = false;
        audioButtonClick.src = "./res/audio/buttonsound.mp3";
        audioButtonClick.play();
        yourXPValue -= upgradeCriticalValue;
        yourXP.innerText = yourXPValue;
        criticalActivate = "ON";
        criticalInfo.innerText = criticalActivate;
        upgradeCritical.style.display = "none";
        critical.style.display = "block";
    } else {
        upgradeCritical.disable = true;
    }
}

function criticalFce() {
    audioButtonClick.src = "./res/audio/critical.mp3";
    audioButtonClick.play();
    critical.style.display = "none";
    enemyHp.innerText -= criticalHitValue;
    criticalActivate = "ON";
    criticalInfo.innerText = criticalActivate;
    heroIdle.style.filter = "drop-shadow(3px 3px 5px rgb(128, 9, 9))drop-shadow(-3px -3px 5px rgb(128, 9, 9))";
    heroAttack.style.filter = "drop-shadow(3px 3px 5px rgb(128, 9, 9))drop-shadow(-3px -3px 5px rgb(128, 9, 9))";
    if (critical.style.display === "none" && shield.style.display === "none") {
        heroIdle.style.filter = "drop-shadow(3px 3px 5px rgb(0, 255, 255))drop-shadow(-3px -3px 5px rgb(128, 9, 9))";
        heroAttack.style.filter = "drop-shadow(3px 3px 5px rgb(128, 9, 9))drop-shadow(-3px -3px 5px rgb(0, 255, 255))";
    }
    if (enemyHp.innerText == 0 || enemyHp.innerText <= 0) {
        enemyHp.innerText = 0;
        yourHp.innerText = yourHpValue;
    }
}

critical.onclick = () => {
    criticalFce();
}
critical.onmousedown = () => {
    heroAttack.style.left = "35%";
    heroAttack.style.display = "block";
    heroIdle.style.display = "none";
}
critical.onmouseup = () => {
    heroAttack.style.display = "none";
    heroIdle.style.display = "block";
    heroIdle.style.left = "20%";
}


//------------------------------------ customization upgrades
let redColorOwned = false;
let greenColorOwned = false;
let blueColorOwned = false;
let yellowColorOwned = false;
let redColorValue = 5;
redColor.onclick = () => {
    redColor.style.borderColor = "red";
    redColor.style.backgroundColor = "white";
    redColor.style.color = "red";
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
                case ("r"): //redhero color
                case ("R"):
                    heroIdle.src = "./res/img/red.hero.idle.png";
                    heroAttack.src = "./res/img/red.hero.attack.png";
                    break;
                case ("d"): //black and white default hero color
                case ("D"):
                    heroIdle.src = "./res/img/default.hero.idle.png";
                    heroAttack.src = "./res/img/default.hero.attack.png";
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
                case ("r"): //redhero color
                case ("R"):
                    heroIdle.src = "./res/img/red.hero.idle.png";
                    heroAttack.src = "./res/img/red.hero.attack.png";
                    break;
                case ("g"): //green hero color
                case ("G"):
                    heroIdle.src = "./res/img/green.hero.idle.png";
                    heroAttack.src = "./res/img/green.hero.attack.png";
                    break;
                case ("b"): //blue hero color
                case ("B"):
                    heroIdle.src = "./res/img/blue.hero.idle.png";
                    heroAttack.src = "./res/img/blue.hero.attack.png";
                    break;
                case ("y"): //yellow hero color
                case ("Y"):
                    heroIdle.src = "./res/img/yellow.hero.idle.png";
                    heroAttack.src = "./res/img/yellow.hero.attack.png";
                    break;
                case ("d"): //black and white default hero color
                case ("D"):
                    heroIdle.src = "./res/img/default.hero.idle.png";
                    heroAttack.src = "./res/img/default.hero.attack.png";
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
                case ("r"): //redhero color
                case ("R"):
                    heroIdle.src = "./res/img/red.hero.idle.png";
                    heroAttack.src = "./res/img/red.hero.attack.png";
                    break;
                case ("g"): //green hero color
                case ("G"):
                    heroIdle.src = "./res/img/green.hero.idle.png";
                    heroAttack.src = "./res/img/green.hero.attack.png";
                    break;
                case ("d"): //black and white default hero color
                case ("D"):
                    heroIdle.src = "./res/img/default.hero.idle.png";
                    heroAttack.src = "./res/img/default.hero.attack.png";
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
                case ("r"): //redhero color
                case ("R"):
                    heroIdle.src = "./res/img/red.hero.idle.png";
                    heroAttack.src = "./res/img/red.hero.attack.png";
                    break;
                case ("g"): //green hero color
                case ("G"):
                    heroIdle.src = "./res/img/green.hero.idle.png";
                    heroAttack.src = "./res/img/green.hero.attack.png";
                    break;
                case ("b"): //blue hero color
                case ("B"):
                    heroIdle.src = "./res/img/blue.hero.idle.png";
                    heroAttack.src = "./res/img/blue.hero.attack.png";
                    break;
                case ("d"): //black and white default hero color
                case ("D"):
                    heroIdle.src = "./res/img/default.hero.idle.png";
                    heroAttack.src = "./res/img/default.hero.attack.png";
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
                case ("r"): //redhero color
                case ("R"):
                    heroIdle.src = "./res/img/red.hero.idle.png";
                    heroAttack.src = "./res/img/red.hero.attack.png";
                    break;
                case ("b"): //blue hero color
                case ("B"):
                    heroIdle.src = "./res/img/blue.hero.idle.png";
                    heroAttack.src = "./res/img/blue.hero.attack.png";
                    break;
                case ("d"): //black and white default hero color
                case ("D"):
                    heroIdle.src = "./res/img/default.hero.idle.png";
                    heroAttack.src = "./res/img/default.hero.attack.png";
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
                case ("r"): //redhero color
                case ("R"):
                    heroIdle.src = "./res/img/red.hero.idle.png";
                    heroAttack.src = "./res/img/red.hero.attack.png";
                    break;
                case ("b"): //blue hero color
                case ("B"):
                    heroIdle.src = "./res/img/blue.hero.idle.png";
                    heroAttack.src = "./res/img/blue.hero.attack.png";
                    break;
                case ("y"): //yellow hero color
                case ("Y"):
                    heroIdle.src = "./res/img/yellow.hero.idle.png";
                    heroAttack.src = "./res/img/yellow.hero.attack.png";
                    break;
                case ("d"): //black and white default hero color
                case ("D"):
                    heroIdle.src = "./res/img/default.hero.idle.png";
                    heroAttack.src = "./res/img/default.hero.attack.png";
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
                case ("r"): //redhero color
                case ("R"):
                    heroIdle.src = "./res/img/red.hero.idle.png";
                    heroAttack.src = "./res/img/red.hero.attack.png";
                    break;
                case ("g"): //green hero color
                case ("G"):
                    heroIdle.src = "./res/img/green.hero.idle.png";
                    heroAttack.src = "./res/img/green.hero.attack.png";
                    break;
                case ("y"): //yellow hero color
                case ("Y"):
                    heroIdle.src = "./res/img/yellow.hero.idle.png";
                    heroAttack.src = "./res/img/yellow.hero.attack.png";
                    break;
                case ("d"): //black and white default hero color
                case ("D"):
                    heroIdle.src = "./res/img/default.hero.idle.png";
                    heroAttack.src = "./res/img/default.hero.attack.png";
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
                case ("r"): //redhero color
                case ("R"):
                    heroIdle.src = "./res/img/red.hero.idle.png";
                    heroAttack.src = "./res/img/red.hero.attack.png";
                    break;
                case ("y"): //yellow hero color
                case ("Y"):
                    heroIdle.src = "./res/img/yellow.hero.idle.png";
                    heroAttack.src = "./res/img/yellow.hero.attack.png";
                    break;
                case ("d"): //black and white default hero color
                case ("D"):
                    heroIdle.src = "./res/img/default.hero.idle.png";
                    heroAttack.src = "./res/img/default.hero.attack.png";
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
    greenColor.style.borderColor = "red";
    greenColor.style.backgroundColor = "white";
    greenColor.style.color = "red";
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
                case ("g"): //green hero color
                case ("G"):
                    heroIdle.src = "./res/img/green.hero.idle.png";
                    heroAttack.src = "./res/img/green.hero.attack.png";
                    break;
                case ("d"): //black and white default hero color
                case ("D"):
                    heroIdle.src = "./res/img/default.hero.idle.png";
                    heroAttack.src = "./res/img/default.hero.attack.png";
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
                case ("r"): //redhero color
                case ("R"):
                    heroIdle.src = "./res/img/red.hero.idle.png";
                    heroAttack.src = "./res/img/red.hero.attack.png";
                    break;
                case ("g"): //green hero color
                case ("G"):
                    heroIdle.src = "./res/img/green.hero.idle.png";
                    heroAttack.src = "./res/img/green.hero.attack.png";
                    break;
                case ("b"): //blue hero color
                case ("B"):
                    heroIdle.src = "./res/img/blue.hero.idle.png";
                    heroAttack.src = "./res/img/blue.hero.attack.png";
                    break;
                case ("y"): //yellow hero color
                case ("Y"):
                    heroIdle.src = "./res/img/yellow.hero.idle.png";
                    heroAttack.src = "./res/img/yellow.hero.attack.png";
                    break;
                case ("d"): //black and white default hero color
                case ("D"):
                    heroIdle.src = "./res/img/default.hero.idle.png";
                    heroAttack.src = "./res/img/default.hero.attack.png";
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
                case ("r"): //redhero color
                case ("R"):
                    heroIdle.src = "./res/img/red.hero.idle.png";
                    heroAttack.src = "./res/img/red.hero.attack.png";
                    break;
                case ("g"): //green hero color
                case ("G"):
                    heroIdle.src = "./res/img/green.hero.idle.png";
                    heroAttack.src = "./res/img/green.hero.attack.png";
                    break;
                case ("d"): //black and white default hero color
                case ("D"):
                    heroIdle.src = "./res/img/default.hero.idle.png";
                    heroAttack.src = "./res/img/default.hero.attack.png";
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
                case ("r"): //redhero color
                case ("R"):
                    heroIdle.src = "./res/img/red.hero.idle.png";
                    heroAttack.src = "./res/img/red.hero.attack.png";
                    break;
                case ("g"): //green hero color
                case ("G"):
                    heroIdle.src = "./res/img/green.hero.idle.png";
                    heroAttack.src = "./res/img/green.hero.attack.png";
                    break;
                case ("b"): //blue hero color
                case ("B"):
                    heroIdle.src = "./res/img/blue.hero.idle.png";
                    heroAttack.src = "./res/img/blue.hero.attack.png";
                    break;
                case ("d"): //black and white default hero color
                case ("D"):
                    heroIdle.src = "./res/img/default.hero.idle.png";
                    heroAttack.src = "./res/img/default.hero.attack.png";
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

                case ("g"): //green hero color
                case ("G"):
                    heroIdle.src = "./res/img/green.hero.idle.png";
                    heroAttack.src = "./res/img/green.hero.attack.png";
                    break;
                case ("b"): //blue hero color
                case ("B"):
                    heroIdle.src = "./res/img/blue.hero.idle.png";
                    heroAttack.src = "./res/img/blue.hero.attack.png";
                    break;
                case ("d"): //black and white default hero color
                case ("D"):
                    heroIdle.src = "./res/img/default.hero.idle.png";
                    heroAttack.src = "./res/img/default.hero.attack.png";
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

                case ("g"): //green hero color
                case ("G"):
                    heroIdle.src = "./res/img/green.hero.idle.png";
                    heroAttack.src = "./res/img/green.hero.attack.png";
                    break;
                case ("b"): //blue hero color
                case ("B"):
                    heroIdle.src = "./res/img/blue.hero.idle.png";
                    heroAttack.src = "./res/img/blue.hero.attack.png";
                    break;
                case ("y"): //yellow hero color
                case ("Y"):
                    heroIdle.src = "./res/img/yellow.hero.idle.png";
                    heroAttack.src = "./res/img/yellow.hero.attack.png";
                    break;
                case ("d"): //black and white default hero color
                case ("D"):
                    heroIdle.src = "./res/img/default.hero.idle.png";
                    heroAttack.src = "./res/img/default.hero.attack.png";
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
                case ("r"): //redhero color
                case ("R"):
                    heroIdle.src = "./res/img/red.hero.idle.png";
                    heroAttack.src = "./res/img/red.hero.attack.png";
                    break;
                case ("g"): //green hero color
                case ("G"):
                    heroIdle.src = "./res/img/green.hero.idle.png";
                    heroAttack.src = "./res/img/green.hero.attack.png";
                    break;

                case ("y"): //yellow hero color
                case ("Y"):
                    heroIdle.src = "./res/img/yellow.hero.idle.png";
                    heroAttack.src = "./res/img/yellow.hero.attack.png";
                    break;
                case ("d"): //black and white default hero color
                case ("D"):
                    heroIdle.src = "./res/img/default.hero.idle.png";
                    heroAttack.src = "./res/img/default.hero.attack.png";
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

                case ("g"): //green hero color
                case ("G"):
                    heroIdle.src = "./res/img/green.hero.idle.png";
                    heroAttack.src = "./res/img/green.hero.attack.png";
                    break;

                case ("y"): //yellow hero color
                case ("Y"):
                    heroIdle.src = "./res/img/yellow.hero.idle.png";
                    heroAttack.src = "./res/img/yellow.hero.attack.png";
                    break;
                case ("d"): //black and white default hero color
                case ("D"):
                    heroIdle.src = "./res/img/default.hero.idle.png";
                    heroAttack.src = "./res/img/default.hero.attack.png";
                    break;
            }

        });
    }
}
let blueColorValue = 10;
blueColor.onclick = () => {
    blueColor.style.borderColor = "red";
    blueColor.style.backgroundColor = "white";
    blueColor.style.color = "red";
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
                case ("b"): //blue hero color
                case ("B"):
                    heroIdle.src = "./res/img/blue.hero.idle.png";
                    heroAttack.src = "./res/img/blue.hero.attack.png";
                    break;
                case ("d"): //black and white default hero color
                case ("D"):
                    heroIdle.src = "./res/img/default.hero.idle.png";
                    heroAttack.src = "./res/img/default.hero.attack.png";
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
                case ("r"): //redhero color
                case ("R"):
                    heroIdle.src = "./res/img/red.hero.idle.png";
                    heroAttack.src = "./res/img/red.hero.attack.png";
                    break;
                case ("g"): //green hero color
                case ("G"):
                    heroIdle.src = "./res/img/green.hero.idle.png";
                    heroAttack.src = "./res/img/green.hero.attack.png";
                    break;
                case ("b"): //blue hero color
                case ("B"):
                    heroIdle.src = "./res/img/blue.hero.idle.png";
                    heroAttack.src = "./res/img/blue.hero.attack.png";
                    break;
                case ("y"): //yellow hero color
                case ("Y"):
                    heroIdle.src = "./res/img/yellow.hero.idle.png";
                    heroAttack.src = "./res/img/yellow.hero.attack.png";
                    break;
                case ("d"): //black and white default hero color
                case ("D"):
                    heroIdle.src = "./res/img/default.hero.idle.png";
                    heroAttack.src = "./res/img/default.hero.attack.png";
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
                case ("r"): //redhero color
                case ("R"):
                    heroIdle.src = "./res/img/red.hero.idle.png";
                    heroAttack.src = "./res/img/red.hero.attack.png";
                    break;

                case ("b"): //blue hero color
                case ("B"):
                    heroIdle.src = "./res/img/blue.hero.idle.png";
                    heroAttack.src = "./res/img/blue.hero.attack.png";
                    break;
                case ("d"): //black and white default hero color
                case ("D"):
                    heroIdle.src = "./res/img/default.hero.idle.png";
                    heroAttack.src = "./res/img/default.hero.attack.png";
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
                case ("r"): //redhero color
                case ("R"):
                    heroIdle.src = "./res/img/red.hero.idle.png";
                    heroAttack.src = "./res/img/red.hero.attack.png";
                    break;
                case ("g"): //green hero color
                case ("G"):
                    heroIdle.src = "./res/img/green.hero.idle.png";
                    heroAttack.src = "./res/img/green.hero.attack.png";
                    break;
                case ("b"): //blue hero color
                case ("B"):
                    heroIdle.src = "./res/img/blue.hero.idle.png";
                    heroAttack.src = "./res/img/blue.hero.attack.png";
                    break;
                case ("d"): //black and white default hero color
                case ("D"):
                    heroIdle.src = "./res/img/default.hero.idle.png";
                    heroAttack.src = "./res/img/default.hero.attack.png";
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

                case ("g"): //green hero color
                case ("G"):
                    heroIdle.src = "./res/img/green.hero.idle.png";
                    heroAttack.src = "./res/img/green.hero.attack.png";
                    break;
                case ("b"): //blue hero color
                case ("B"):
                    heroIdle.src = "./res/img/blue.hero.idle.png";
                    heroAttack.src = "./res/img/blue.hero.attack.png";
                    break;
                case ("d"): //black and white default hero color
                case ("D"):
                    heroIdle.src = "./res/img/default.hero.idle.png";
                    heroAttack.src = "./res/img/default.hero.attack.png";
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
                case ("g"): //green hero color
                case ("G"):
                    heroIdle.src = "./res/img/green.hero.idle.png";
                    heroAttack.src = "./res/img/green.hero.attack.png";
                    break;
                case ("b"): //blue hero color
                case ("B"):
                    heroIdle.src = "./res/img/blue.hero.idle.png";
                    heroAttack.src = "./res/img/blue.hero.attack.png";
                    break;
                case ("y"): //yellow hero color
                case ("Y"):
                    heroIdle.src = "./res/img/yellow.hero.idle.png";
                    heroAttack.src = "./res/img/yellow.hero.attack.png";
                    break;
                case ("d"): //black and white default hero color
                case ("D"):
                    heroIdle.src = "./res/img/default.hero.idle.png";
                    heroAttack.src = "./res/img/default.hero.attack.png";
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
                case ("r"): //redhero color
                case ("R"):
                    heroIdle.src = "./res/img/red.hero.idle.png";
                    heroAttack.src = "./res/img/red.hero.attack.png";
                    break;

                case ("b"): //blue hero color
                case ("B"):
                    heroIdle.src = "./res/img/blue.hero.idle.png";
                    heroAttack.src = "./res/img/blue.hero.attack.png";
                    break;
                case ("y"): //yellow hero color
                case ("Y"):
                    heroIdle.src = "./res/img/yellow.hero.idle.png";
                    heroAttack.src = "./res/img/yellow.hero.attack.png";
                    break;
                case ("d"): //black and white default hero color
                case ("D"):
                    heroIdle.src = "./res/img/default.hero.idle.png";
                    heroAttack.src = "./res/img/default.hero.attack.png";
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
                case ("b"): //blue hero color
                case ("B"):
                    heroIdle.src = "./res/img/blue.hero.idle.png";
                    heroAttack.src = "./res/img/blue.hero.attack.png";
                    break;
                case ("y"): //yellow hero color
                case ("Y"):
                    heroIdle.src = "./res/img/yellow.hero.idle.png";
                    heroAttack.src = "./res/img/yellow.hero.attack.png";
                    break;
                case ("d"): //black and white default hero color
                case ("D"):
                    heroIdle.src = "./res/img/default.hero.idle.png";
                    heroAttack.src = "./res/img/default.hero.attack.png";
                    break;
            }
        });
    }

}
let yellowColorValue = 12;
yellowColor.onclick = () => {
    yellowColor.style.borderColor = "red";
    yellowColor.style.backgroundColor = "white";
    yellowColor.style.color = "red";
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
                case ("y"): //yellow hero color
                case ("Y"):
                    heroIdle.src = "./res/img/yellow.hero.idle.png";
                    heroAttack.src = "./res/img/yellow.hero.attack.png";
                    break;
                case ("d"): //black and white default hero color
                case ("D"):
                    heroIdle.src = "./res/img/default.hero.idle.png";
                    heroAttack.src = "./res/img/default.hero.attack.png";
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
                case ("r"): //redhero color
                case ("R"):
                    heroIdle.src = "./res/img/red.hero.idle.png";
                    heroAttack.src = "./res/img/red.hero.attack.png";
                    break;
                case ("g"): //green hero color
                case ("G"):
                    heroIdle.src = "./res/img/green.hero.idle.png";
                    heroAttack.src = "./res/img/green.hero.attack.png";
                    break;
                case ("b"): //blue hero color
                case ("B"):
                    heroIdle.src = "./res/img/blue.hero.idle.png";
                    heroAttack.src = "./res/img/blue.hero.attack.png";
                    break;
                case ("y"): //yellow hero color
                case ("Y"):
                    heroIdle.src = "./res/img/yellow.hero.idle.png";
                    heroAttack.src = "./res/img/yellow.hero.attack.png";
                    break;
                case ("d"): //black and white default hero color
                case ("D"):
                    heroIdle.src = "./res/img/default.hero.idle.png";
                    heroAttack.src = "./res/img/default.hero.attack.png";
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
                case ("r"): //redhero color
                case ("R"):
                    heroIdle.src = "./res/img/red.hero.idle.png";
                    heroAttack.src = "./res/img/red.hero.attack.png";
                    break;

                case ("y"): //yellow hero color
                case ("Y"):
                    heroIdle.src = "./res/img/yellow.hero.idle.png";
                    heroAttack.src = "./res/img/yellow.hero.attack.png";
                    break;
                case ("d"): //black and white default hero color
                case ("D"):
                    heroIdle.src = "./res/img/default.hero.idle.png";
                    heroAttack.src = "./res/img/default.hero.attack.png";
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
                case ("r"): //redhero color
                case ("R"):
                    heroIdle.src = "./res/img/red.hero.idle.png";
                    heroAttack.src = "./res/img/red.hero.attack.png";
                    break;
                case ("g"): //green hero color
                case ("G"):
                    heroIdle.src = "./res/img/green.hero.idle.png";
                    heroAttack.src = "./res/img/green.hero.attack.png";
                    break;
                case ("y"): //yellow hero color
                case ("Y"):
                    heroIdle.src = "./res/img/yellow.hero.idle.png";
                    heroAttack.src = "./res/img/yellow.hero.attack.png";
                    break;
                case ("d"): //black and white default hero color
                case ("D"):
                    heroIdle.src = "./res/img/default.hero.idle.png";
                    heroAttack.src = "./res/img/default.hero.attack.png";
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

                case ("g"): //green hero color
                case ("G"):
                    heroIdle.src = "./res/img/green.hero.idle.png";
                    heroAttack.src = "./res/img/green.hero.attack.png";
                    break;

                case ("y"): //yellow hero color
                case ("Y"):
                    heroIdle.src = "./res/img/yellow.hero.idle.png";
                    heroAttack.src = "./res/img/yellow.hero.attack.png";
                    break;
                case ("d"): //black and white default hero color
                case ("D"):
                    heroIdle.src = "./res/img/default.hero.idle.png";
                    heroAttack.src = "./res/img/default.hero.attack.png";
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

                case ("g"): //green hero color
                case ("G"):
                    heroIdle.src = "./res/img/green.hero.idle.png";
                    heroAttack.src = "./res/img/green.hero.attack.png";
                    break;
                case ("b"): //blue hero color
                case ("B"):
                    heroIdle.src = "./res/img/blue.hero.idle.png";
                    heroAttack.src = "./res/img/blue.hero.attack.png";
                    break;
                case ("y"): //yellow hero color
                case ("Y"):
                    heroIdle.src = "./res/img/yellow.hero.idle.png";
                    heroAttack.src = "./res/img/yellow.hero.attack.png";
                    break;
                case ("d"): //black and white default hero color
                case ("D"):
                    heroIdle.src = "./res/img/default.hero.idle.png";
                    heroAttack.src = "./res/img/default.hero.attack.png";
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
                case ("r"): //redhero color
                case ("R"):
                    heroIdle.src = "./res/img/red.hero.idle.png";
                    heroAttack.src = "./res/img/red.hero.attack.png";
                    break;

                case ("b"): //blue hero color
                case ("B"):
                    heroIdle.src = "./res/img/blue.hero.idle.png";
                    heroAttack.src = "./res/img/blue.hero.attack.png";
                    break;
                case ("y"): //yellow hero color
                case ("Y"):
                    heroIdle.src = "./res/img/yellow.hero.idle.png";
                    heroAttack.src = "./res/img/yellow.hero.attack.png";
                    break;
                case ("d"): //black and white default hero color
                case ("D"):
                    heroIdle.src = "./res/img/default.hero.idle.png";
                    heroAttack.src = "./res/img/default.hero.attack.png";
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

                case ("b"): //blue hero color
                case ("B"):
                    heroIdle.src = "./res/img/blue.hero.idle.png";
                    heroAttack.src = "./res/img/blue.hero.attack.png";
                    break;
                case ("y"): //yellow hero color
                case ("Y"):
                    heroIdle.src = "./res/img/yellow.hero.idle.png";
                    heroAttack.src = "./res/img/yellow.hero.attack.png";
                    break;
                case ("d"): //black and white default hero color
                case ("D"):
                    heroIdle.src = "./res/img/default.hero.idle.png";
                    heroAttack.src = "./res/img/default.hero.attack.png";
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
    costingCustomization.style.color = "red";
    redColor.style.borderColor = "red";
    redColor.style.color = "red";
    redColor.style.backgroundColor = "black";
}
greenColor.onmouseover = () => {
    costOfColors.innerText = greenColorValue;
    overviewSrc.src = "./res/img/green.hero.idle.png";
    overview.style.display = "block";
    audioButtonClick.src = "./res/audio/choose.mp3";
    audioButtonClick.play();
    costingCustomization.style.color = "rgb(0,255,0)";
    greenColor.style.borderColor = "rgb(0,255,0)";
    greenColor.style.color = "rgb(0,255,0)";
    greenColor.style.backgroundColor = "black";
}
blueColor.onmouseover = () => {
    costOfColors.innerText = blueColorValue;
    overviewSrc.src = "./res/img/blue.hero.idle.png";
    overview.style.display = "block";
    audioButtonClick.src = "./res/audio/choose.mp3";
    audioButtonClick.play();
    costingCustomization.style.color = "blue";
    blueColor.style.borderColor = "blue";
    blueColor.style.color = "blue";
    blueColor.style.backgroundColor = "black";
}
yellowColor.onmouseover = () => {
    costOfColors.innerText = yellowColorValue;
    overviewSrc.src = "./res/img/yellow.hero.idle.png";
    overview.style.display = "block";
    audioButtonClick.src = "./res/audio/choose.mp3";
    audioButtonClick.play();
    costingCustomization.style.color = "yellow";
    yellowColor.style.borderColor = "yellow";
    yellowColor.style.color = "yellow";
    yellowColor.style.backgroundColor = "black";
}
//------------------------------------ cost of colors mouse out 
redColor.onmouseout = () => {
    costOfColors.innerText = 0;
    overviewSrc.src = "./res/img/default.hero.idle.png";
    overview.style.display = "none";
    costingCustomization.style.color = "white";
    redColor.style.borderColor = "black";
    redColor.style.color = "black";
    redColor.style.backgroundColor = "red";
}
greenColor.onmouseout = () => {
    costOfColors.innerText = 0;
    overviewSrc.src = "./res/img/default.hero.idle.png";
    overview.style.display = "none";
    costingCustomization.style.color = "white";
    greenColor.style.borderColor = "black";
    greenColor.style.color = "black";
    greenColor.style.backgroundColor = "rgb(0,255,0)";
}
blueColor.onmouseout = () => {
    costOfColors.innerText = 0;
    overviewSrc.src = "./res/img/default.hero.idle.png";
    overview.style.display = "none";
    costingCustomization.style.color = "white";
    blueColor.style.borderColor = "black";
    blueColor.style.color = "black";
    blueColor.style.backgroundColor = "blue";
}
yellowColor.onmouseout = () => {
    costOfColors.innerText = 0;
    overviewSrc.src = "./res/img/default.hero.idle.png";
    overview.style.display = "none";
    costingCustomization.style.color = "white";
    yellowColor.style.borderColor = "black";
    yellowColor.style.color = "black";
    yellowColor.style.backgroundColor = "yellow";
}
upgradeDamage.onmouseout = () => {
    costOfColors.innerText = 0;
    overview.style.display = "none";
    costingMerchant.style.color = "white";
    upgradeDamage.style.borderColor = "rgb(255, 165, 0, 0.684)";
    upgradeDamage.style.color = "rgb(255, 165, 0, 0.684)";
}
upgradeHealth.onmouseout = () => {
    costOfColors.innerText = 0;
    overview.style.display = "none";
    costingMerchant.style.color = "white";
    upgradeHealth.style.borderColor = "rgb(0, 255, 0, 0.684)";
    upgradeHealth.style.color = "rgb(0, 255, 0, 0.684)";
}
upgradeShield.onmouseout = () => {
    costOfColors.innerText = 0;
    overview.style.display = "none";
    costingMerchant.style.color = "white";
    upgradeShield.style.borderColor = "rgb(0, 255, 255, 0.684)";
    upgradeShield.style.color = "rgb(0, 255, 255, 0.684)";
}
upgradeCritical.onmouseout = () => {
    costOfColors.innerText = 0;
    overview.style.display = "none";
    costingMerchant.style.color = "white";
    upgradeCritical.style.borderColor = "rgb(128, 9, 9, 0.684)";
    upgradeCritical.style.color = "rgb(128, 9, 9, 0.684)";
}
//------------------------------------ cost of upgrades mouse over
upgradeDamage.onmouseover = () => {
    costOfUps.innerText = upgradeDamageValue;
    audioButtonClick.src = "./res/audio/choose.mp3";
    audioButtonClick.play();
    costingMerchant.style.color = "orange";
}
upgradeHealth.onmouseover = () => {
    costOfUps.innerText = upgradeHealthValue;
    audioButtonClick.src = "./res/audio/choose.mp3";
    audioButtonClick.play();
    costingMerchant.style.color = "rgb(0,255,0)";
}
upgradeShield.onmouseover = () => {
    costOfUps.innerText = upgradeShieldValue;
    audioButtonClick.src = "./res/audio/choose.mp3";
    audioButtonClick.play();
    costingMerchant.style.color = "cyan";
}
upgradeCritical.onmouseover = () => {
    costOfUps.innerText = upgradeCriticalValue;
    audioButtonClick.src = "./res/audio/choose.mp3";
    audioButtonClick.play();
    costingMerchant.style.color = "rgb(128, 9, 9, 0.684)";
}
//------------------------------------ cost of upgrades mouse out
upgradeDamage.onmouseout = () => {
    costOfUps.innerText = 0;
    costingMerchant.style.color = "white";
    upgradeDamage.style.borderColor = "rgb(255, 165, 0, 0.684)";
    upgradeDamage.style.color = "rgb(255, 165, 0, 0.684)";
}
upgradeHealth.onmouseout = () => {
    costOfUps.innerText = 0;
    costingMerchant.style.color = "white";
    upgradeHealth.style.borderColor = "rgb(0, 255, 0, 0.684)";
    upgradeHealth.style.color = "rgb(0, 255, 0, 0.684)";
}
upgradeShield.onmouseout = () => {
    costOfUps.innerText = 0;
    costingMerchant.style.color = "white";
    upgradeShield.style.borderColor = "rgb(0, 255, 255, 0.684)";
    upgradeShield.style.color = "rgb(0, 255, 255, 0.684)";
}
upgradeCritical.onmouseout = () => {
    costOfUps.innerText = 0;
    costingMerchant.style.color = "white";
    upgradeCritical.style.borderColor = "rgb(128, 9, 9, 0.684)";
    upgradeCritical.style.color = "rgb(128, 9, 9, 0.684)";
}
//------------------------------------ back button shop
backBtnShop.onclick = () => {
    collectionBtn.style.display = "block";
    inGameStoryRecapBtn.style.display = "block";
    backBtnShop.style.display = "none";
    audioButtonClick.src = "./res/audio/buttonsound.mp3";
    audioButtonClick.play();
    levelsText.style.display = "none";
    lastLevelReward.style.display = "none";
    levelInfo.style.display = "none";
    gridOfLevels.style.display = "none";
    gridOfLevelsDC.style.display = "none";
    levelONE.style.display = "none";
    dcLevelONE.style.display = "none";
    marvelPlanet.style.display = "block";
    nameOfPlanet.style.display = "block";
    if (hours >= 0 && hours < 12) {
        realtimepresented.innerText = `Good morning`;
        document.body.style.backgroundColor = "#2d0020";
    } else if (hours >= 12 && hours <= 16) {
        realtimepresented.innerText = `Good afternoon`;
        document.body.style.backgroundColor = "#1a0019";
    } else {
        realtimepresented.innerText = `Good evening`;
        document.body.style.backgroundColor = "#01021f";
    }
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
    audioLobbyBackground.src = "./res/audio/bomb.mp3";
    audioLobbyBackground.play();
}
yourName.onmouseout = () => {
    audioLobbyBackground.pause();
    audioLobbyBackground.currentTime = 0;
}

//------------------------------------ hero hp 



//------------------------------------ enemy system
let enemyCrosshair = false;

enemy.onmouseover = () => {
    enemy.style.cursor = "crosshair";
    enemyCrosshair = true;
    document.addEventListener("mouseout", onMouseOut);
    document.addEventListener("click", onClick);
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("keyup", onKeyUp);
};

enemy.onmouseleave = () => {
    enemy.style.cursor = "";
    enemyCrosshair = false;
    document.removeEventListener("mouseout", onMouseOut);
    document.removeEventListener("click", onClick);
    document.removeEventListener("keydown", onKeyDown);
    document.removeEventListener("keyup", onKeyUp);
};

function onMouseOut(e) {
    switch (e.key) {
        case "a":
        case "A":
            enemyOnMouseOut();
            break;
    }
}

function onClick(e) {
    switch (e.key) {
        case "a":
        case "A":
            enemyOnClick();
            enemyKeyDown();
            break;
    }
}

let aKeyDown = false;

function updateMouseEvents() {
    if (aKeyDown == true) {
        enemy.onmouseout = () => {
            return;
        };
        enemy.onclick = () => {
            return;
        };
        enemy.onmousedown = () => {
            return;
        };
        enemy.onmouseup = () => {
            return;
        };
    } else {
        enemy.onmouseout = () => {
            enemyOnMouseOut();
        };
        enemy.onclick = () => {
            enemyOnClick();
        };
        enemy.onmousedown = () => {
            enemyKeyDown();
        };
        enemy.onmouseup = () => {
            enemyKeyUp();
        };
    }
}

updateMouseEvents();

function onKeyDown(e) {
    if ((e.key === "a" || e.key === "A") && !aKeyDown) {
        aKeyDown = true;
        enemyKeyDown();
        updateMouseEvents();

    }
}

function onKeyUp(e) {
    if (e.key === "a" || e.key === "A") {
        aKeyDown = false;
        updateMouseEvents();
    }
}

document.addEventListener("mousedown", (e) => {
    if (aKeyDown) {
        console.log("ZABRANUJU");
        e.preventDefault();
    }
});

function enemyOnMouseOut() {
    enemy.style.cursor = "default";
    document.body.style.boxShadow = "0 0 0px red inset";
    if (gameResult.style.display == "block") {
        enemyHp.style.color = "red";
        enemy.style.animation = "enemyMoving 1s infinite";
        enemy.style.borderBottom = "none";
        enemy.style.borderRadius = "none";
    }
    if (enemyHp.innerText == 0 || enemyHp.innerText <= 0) {
        audioButtonClick.pause();
        audioButtonClick.currentTime = 0;
        enemyHp.innerText = 0;
        yourHp.innerText = yourHpValue;
        enemyHpTextPromName.style.backgroundColor = "#333";
    }
}

function enemyOnClick() {
    if (enemyHp.innerText == 0 || enemyHp.innerText <= 0) {
        audioButtonClick.pause();
        audioButtonClick.currentTime = 0;
        enemyHp.innerText = 0;
        yourHp.innerText = yourHpValue;
        enemyHpTextPromName.style.backgroundColor = "#333";
    }
}

function enemyKeyDown() {
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
        enemyHpTextPromName.style.backgroundColor = "#333";
    }
    if (enemyHp.innerText <= 15) {
        enemyHp.style.color = "darkred";
        enemy.style.animation = "enemyMoving 1.1s infinite";
        enemyHpTextPromName.style.backgroundColor = "#1c0000";
        enemyHpTextPromName.style.color = "white";
        enemyHpTextPromName.style.transition = "none";
    } else {
        enemyHp.style.color = "red";
        enemyHpTextPromName.style.backgroundColor = "#333";
        enemyHpTextPromName.style.transition = "none";
    }
    //------------------------------------ gif enemy effects
    const enemyTextValue = ["SPIDER MAN", "HULK", "IRON MAN", "THOR", "BLACK WIDOW", "CAPTAIN AMERICA", "DOCTOR STRANGE",
        "VENOM", "WOLVERINE", "DEADPOOL", "BLACK PANTHER", "GHOST RIDER", "LOKI", "CAPTAIN MARVEL", "THANOS", "BATMAN", "FLASH",
        "WONDER WOMAN", "JOKER", "SUPERMAN", "AQUAMAN", "CATWOMAN", "CYBORG", "GREEN LANTERN", "GREEN ARROW", "NIGHTWING", "SHAZAM",
        "BLACK ADAM", "DOCTOR MANHATTAN", "DARKSEID", "PIKACHU", "SUPER MARIO", "GROOT", "ROBOCOP", "PREDATOR", "TERMINATOR", "GERALT",
        "DOOMSLAYER", "SOLID SNAKE", "MANDALORIAN", "DARTH VADER", "NARUTO", "GOKU", "JOHN WICK", "KRATOS"];

    const damagedAndFinishedEffectEnemies = ["spiderman", "hulk", "ironman", "thor", "blackwidow", "captainamerica", "doctorstrange",
        "venom", "wolverine", "deadpool", "blackpanther", "ghostrider", "loki", "captainmarvel", "thanos", "batman", "flash",
        "wonderwoman", "joker", "superman", "aquaman", "catwoman", "cyborg", "greenlantern", "greenarrow", "nightwing", "shazam",
        "blackadam", "doctormanhattan", "darkseid", "pikachu", "supermario", "groot", "robocop", "predator", "terminator", "geralt",
        "doomslayer", "solidsnake", "mandalorian", "darthvader", "naruto", "goku", "johnwick", "kratos"];

    const damagedAndFinishedEffectEnemiesBGs = ["spiderman", "hulk", "ironman", "thor", "blackwidow", "captainamerica", "doctorstrange",
        "venom", "wolverine", "deadpool", "blackpanther", "ghostrider", "loki", "captainmarvel", "thanos", "batman", "flash",
        "batman", "batman", "batman", "aquaman", "batman", "cyborg", "greenlantern", "greenarrow", "batman", "shazam",
        "blackadam", "doctormanhattan", "darkseid", "pikachu", "supermario", "groot", "robocop", "predator", "terminator", "geralt",
        "doomslayer", "solidsnake", "mandalorian", "darthvader", "naruto", "goku", "johnwick", "kratos"];

    for (let i = 0; i < enemyTextValue.length; i++) {
        if (enemyHp.innerText <= 15 && enemyHpTextValue.innerText === `${enemyTextValue[i]}´S HP:`) {
            game.style.backgroundImage = `url(./res/img/backgrounds/finished.${damagedAndFinishedEffectEnemiesBGs[i]}BG.gif)`;
            enemy.src = `./res/img/enemies/enemy.${damagedAndFinishedEffectEnemies[i]}.png`;
            enemy.style.filter = "grayscale(100%) drop-shadow(0px 20px 10px red)";

            document.body.onmousemove = () => {
                if (enemyHp.innerText <= 15) {
                    enemy.style.filter = "grayscale(100%) drop-shadow(0px 20px 10px red)";
                } else {
                    enemy.style.filter = "none";
                }
            }
            break;
        }
    }
}

function enemyKeyUp() {
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
        enemyHpTextPromName.style.backgroundColor = "#333";
    }
    if (enemyHp.innerText <= 15) {
        enemyHp.style.color = "darkred";
        enemy.style.animation = "enemyMoving 1.1s infinite";
        enemyHpTextPromName.style.color = "white";
        enemyHpTextPromName.style.backgroundColor = "#1c0000";
        enemyHpTextPromName.style.transition = "none";
    } else {
        enemyHp.style.color = "red";
        enemyHpTextPromName.style.backgroundColor = "#333";
        enemyHpTextPromName.style.transition = "none";
    }
    //------------------------------------ gif enemy effects
    const enemyTextValue = ["SPIDER MAN", "HULK", "IRON MAN", "THOR", "BLACK WIDOW", "CAPTAIN AMERICA", "DOCTOR STRANGE",
        "VENOM", "WOLVERINE", "DEADPOOL", "BLACK PANTHER", "GHOST RIDER", "LOKI", "CAPTAIN MARVEL", "THANOS", "BATMAN", "FLASH",
        "WONDER WOMAN", "JOKER", "SUPERMAN", "AQUAMAN", "CATWOMAN", "CYBORG", "GREEN LANTERN", "GREEN ARROW", "NIGHTWING", "SHAZAM",
        "BLACK ADAM", "DOCTOR MANHATTAN", "DARKSEID", "PIKACHU", "SUPER MARIO", "GROOT", "ROBOCOP", "PREDATOR", "TERMINATOR", "GERALT",
        "DOOMSLAYER", "SOLID SNAKE", "MANDALORIAN", "DARTH VADER", "NARUTO", "GOKU", "JOHN WICK", "KRATOS"];

    const damagedAndFinishedEffectEnemies = ["spiderman", "hulk", "ironman", "thor", "blackwidow", "captainamerica", "doctorstrange",
        "venom", "wolverine", "deadpool", "blackpanther", "ghostrider", "loki", "captainmarvel", "thanos", "batman", "flash",
        "wonderwoman", "joker", "superman", "aquaman", "catwoman", "cyborg", "greenlantern", "greenarrow", "nightwing", "shazam",
        "blackadam", "doctormanhattan", "darkseid", "pikachu", "supermario", "groot", "robocop", "predator", "terminator", "geralt",
        "doomslayer", "solidsnake", "mandalorian", "darthvader", "naruto", "goku", "johnwick", "kratos"];

    const damagedAndFinishedEffectEnemiesBGs = ["spiderman", "hulk", "ironman", "thor", "blackwidow", "captainamerica", "doctorstrange",
        "venom", "wolverine", "deadpool", "blackpanther", "ghostrider", "loki", "captainmarvel", "thanos", "batman", "flash",
        "batman", "batman", "batman", "aquaman", "batman", "cyborg", "greenlantern", "greenarrow", "batman", "shazam",
        "blackadam", "doctormanhattan", "darkseid", "pikachu", "supermario", "groot", "robocop", "predator", "terminator", "geralt",
        "doomslayer", "solidsnake", "mandalorian", "darthvader", "naruto", "goku", "johnwick", "kratos"];

    for (let i = 0; i < enemyTextValue.length; i++) {
        if (enemyHp.innerText <= 15 && enemyHpTextValue.innerText === `${enemyTextValue[i]}´S HP:`) {
            game.style.backgroundImage = `url(./res/img/backgrounds/finished.${damagedAndFinishedEffectEnemiesBGs[i]}BG.gif)`;
            enemy.src = `./res/img/enemies/enemy.${damagedAndFinishedEffectEnemies[i]}.png`;
            enemy.style.filter = "grayscale(100%) drop-shadow(0px 20px 10px red)";

            document.body.onmousemove = () => {
                if (enemyHp.innerText <= 15) {
                    enemy.style.filter = "grayscale(100%) drop-shadow(0px 20px 10px red)";
                } else {
                    enemy.style.filter = "none";
                }
            }
            break;
        }
    }
}

gameResult.onclick = () => {
    console.log("gamee resultt");
    audioButtonClick.src = "./res/audio/buttonsound.mp3";
    audioButtonClick.play();
    levelsText.style.display = "block";
    lastLevelReward.style.display = "block";
    levelInfo.style.display = "block";
    game.style.display = "none";
    gameResult.style.display = "none";
    heroAttack.style.display = "none";
    heroIdle.style.display = "block";
    heroIdle.style.left = "20%";
    heroIdle.style.filter = "drop-shadow(3px 3px 5px #333)drop-shadow(-3px -3px 5px goldenrod)";
    heroAttack.style.filter = "drop-shadow(3px 3px 5px #333)drop-shadow(-3px -3px 5px silver)";

    if (shieldInfo.innerText == "ON") {
        console.log("shieldyyyyyyyyyyyyy");
        shield.style.display = "block";
    }
    if (criticalInfo.innerText == "ON") {
        console.log("criticalll hitt");
        critical.style.display = "block";
    }

    if (marvelPlanetClick) {
        planets.style.backgroundImage = "linear-gradient(rgba(0, 0, 0,  0.436), rgba(0, 0, 0, 0.436)), url(./res/img/marvelLevelsBG.png)";
        document.body.style.backgroundColor = "red";
        levelONE.style.display = "block";
        gridOfLevels.style.display = "grid";
        gridOfLevelsDC.style.display = "none";
        backBtn.style.display = "block";
        backBtnDC.style.display = "none";
    }

    if (levelONECompleted) {
        levelTWO.style.display = "block";
        levelONE.style.backgroundColor = "white";
        levelONE.style.color = "black";
        levelONE.style.filter = "invert(100%)";
        levelONE.style.textDecoration = "underline";
    }
    if (levelTWOCompleted) {
        levelTHREE.style.display = "block";
        levelTWO.style.backgroundColor = "white";
        levelTWO.style.color = "black";
        levelTWO.style.filter = "invert(100%)";
        levelTWO.style.textDecoration = "underline";
    }
    if (levelTHREECompleted) {
        levelFOUR.style.display = "block";
        levelTHREE.style.backgroundColor = "white";
        levelTHREE.style.color = "black";
        levelTHREE.style.filter = "invert(100%)";
        levelTHREE.style.textDecoration = "underline";
    }
    if (levelFOURCompleted) {
        levelFIVE.style.display = "block";
        levelFOUR.style.backgroundColor = "white";
        levelFOUR.style.color = "black";
        levelFOUR.style.filter = "invert(100%)";
        levelFOUR.style.textDecoration = "underline";
    }
    if (levelFIVECompleted) {
        levelSIX.style.display = "block";
        levelFIVE.style.backgroundColor = "white";
        levelFIVE.style.color = "black";
        levelFIVE.style.filter = "invert(100%)";
        levelFIVE.style.textDecoration = "underline";
    }
    if (levelSIXCompleted) {
        levelSEVEN.style.display = "block";
        levelSIX.style.backgroundColor = "white";
        levelSIX.style.color = "black";
        levelSIX.style.filter = "invert(100%)";
        levelSIX.style.textDecoration = "underline";
    }
    if (levelSEVENCompleted) {
        levelEIGHT.style.display = "block";
        levelSEVEN.style.backgroundColor = "white";
        levelSEVEN.style.color = "black";
        levelSEVEN.style.filter = "invert(100%)";
        levelSEVEN.style.textDecoration = "underline";
    }
    if (levelEIGHTCompleted) {
        levelNINE.style.display = "block";
        levelEIGHT.style.backgroundColor = "white";
        levelEIGHT.style.color = "black";
        levelEIGHT.style.filter = "invert(100%)";
        levelEIGHT.style.textDecoration = "underline";
    }
    if (levelNINECompleted) {
        levelTEN.style.display = "block";
        levelNINE.style.backgroundColor = "white";
        levelNINE.style.color = "black";
        levelNINE.style.filter = "invert(100%)";
        levelNINE.style.textDecoration = "underline";
    }
    if (levelTENCompleted) {
        levelELEVEN.style.display = "block";
        levelTEN.style.backgroundColor = "white";
        levelTEN.style.color = "black";
        levelTEN.style.filter = "invert(100%)";
        levelTEN.style.textDecoration = "underline";
    }
    if (levelELEVENCompleted) {
        levelTWELVE.style.display = "block";
        levelELEVEN.style.backgroundColor = "white";
        levelELEVEN.style.color = "black";
        levelELEVEN.style.filter = "invert(100%)";
        levelELEVEN.style.textDecoration = "underline";
    }
    if (levelTWELVECompleted) {
        levelTHIRTEEN.style.display = "block";
        levelTWELVE.style.backgroundColor = "white";
        levelTWELVE.style.color = "black";
        levelTWELVE.style.filter = "invert(100%)";
        levelTWELVE.style.textDecoration = "underline";
    }
    if (levelTHIRTEENCompleted) {
        levelFOURTEEN.style.display = "block";
        levelTHIRTEEN.style.backgroundColor = "white";
        levelTHIRTEEN.style.color = "black";
        levelTHIRTEEN.style.filter = "invert(100%)";
        levelTHIRTEEN.style.textDecoration = "underline";
    }
    if (levelFOURTEENCompleted) {
        levelFIFTEEN.style.display = "block";
        levelFOURTEEN.style.backgroundColor = "white";
        levelFOURTEEN.style.color = "black";
        levelFOURTEEN.style.filter = "invert(100%)";
        levelFOURTEEN.style.textDecoration = "underline";
    }
    if (levelFIFTEENCompleted) {
        heroIdle.src = "./res/img/bronze.hero.idle.png";
        heroAttack.src = "./res/img/bronze.hero.attack.png";
        marvelPlanet.style.filter = "grayscale(100%)";
        levelFIFTEEN.style.backgroundColor = "white";
        levelFIFTEEN.style.color = "black";
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
            document.body.style.backgroundImage = "linear-gradient(rgba(0, 0, 0,  0.436), rgba(0, 0, 0, 0.436)), url(./res/img/deesdav.dimension.png)";
        }
        deesdavPlanet.onmouseout = () => {
            document.body.style.boxShadow = "0 0 0px white inset";
            document.body.style.backgroundImage = "none";
        }
        deesdavPlanet.onclick = () => {
            planets.style.backgroundImage = "url(./res/img/marvelLevelsBG.png)"
            lastLevelRewardHeadline.innerText = "reward for completing Deesdav Dimension";
            lastLevelRewardSwitch.innerText = "s or S";
            collectionBtn.style.display = "none";
            inGameStoryRecapBtn.style.display = "none";
            audioButtonClick.src = "./res/audio/buttonsound.mp3";
            audioButtonClick.play();
            marvelPlanet.style.display = "none";
            nameOfPlanet.style.display = "none";
            nameOfPlanetDeesdav.style.display = "none";
            if (hours >= 0 && hours < 12) {
                realtimepresented.innerText = `Good morning`;
                document.body.style.backgroundColor = "#2d0020";
            } else if (hours >= 12 && hours <= 16) {
                realtimepresented.innerText = `Good afternoon`;
                document.body.style.backgroundColor = "#1a0019";
            } else {
                realtimepresented.innerText = `Good evening`;
                document.body.style.backgroundColor = "#01021f";
            }
            storyPartInput.style.display = "none";
            deesdavPlanet.style.display = "none";
            lastLevelReward.style.display = "block";
            deesdavDimension.style.display = "block";
            backBtn.style.display = "none";
            countDownText.style.display = "block";
            backBtn.enable = true;
            shopBtn.style.display = "none";
            infoBtn.style.display = "none";
            winAndLoss.style.display = "none";
            rewardOverview.style.display = "block";
            rewardOverview.src = "./res/img/silver.hero.idle.png";
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
                    lastLevelReward.style.display = "none";
                    nameOfPlanetDeesdav.style.display = "block";
                    if (hours >= 0 && hours < 12) {
                        realtimepresented.innerText = `Good morning`;
                        document.body.style.backgroundColor = "#2d0020";
                    } else if (hours >= 12 && hours <= 16) {
                        realtimepresented.innerText = `Good afternoon`;
                        document.body.style.backgroundColor = "#1a0019";
                    } else {
                        realtimepresented.innerText = `Good evening`;
                        document.body.style.backgroundColor = "#01021f";
                    }
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
                    heroIdle.src = "./res/img/silver.hero.idle.png";
                    heroAttack.src = "./res/img/silver.hero.attack.png";
                    yourXPValue -= 100;
                    yourXP.innerText = yourXPValue;
                    shopBtn.style.display = "block";
                    infoBtn.style.display = "block";
                    inGameStoryRecapBtn.style.display = "block";
                    collectionBtn.style.display = "block";
                    deesdavDimension.style.display = "none";
                    deesdavPlanet.style.display = "none";
                    lastLevelReward.style.display = "none";
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
                    upgradeShieldValue = 12;//12
                    upgradeCriticalValue = 11;//11
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
                deesdavDimension.innerText += `NOW WAIT AND THE REWARD IS ACHIEVED`;
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
        planets.style.backgroundImage = "linear-gradient(rgba(0, 0, 0,  0.436), rgba(0, 0, 0, 0.436)), url(./res/img/dcLevelsBG.png)";
        document.body.style.backgroundColor = "blue";
        dcLevelONE.style.display = "block";
        gridOfLevels.style.display = "none";
        gridOfLevelsDC.style.display = "grid";
        backBtn.style.display = "none";
        backBtnDC.style.display = "block";
    }
    if (dcLevelONECompleted) {
        dcLevelTWO.style.display = "block";
        dcLevelONE.style.backgroundColor = "white";
        dcLevelONE.style.color = "black";
        dcLevelONE.style.filter = "invert(100%)";
        dcLevelONE.style.textDecoration = "underline";
    }
    if (dcLevelTWOCompleted) {
        dcLevelTHREE.style.display = "block";
        dcLevelTWO.style.backgroundColor = "white";
        dcLevelTWO.style.color = "black";
        dcLevelTWO.style.filter = "invert(100%)";
        dcLevelTWO.style.textDecoration = "underline";
    }
    if (dcLevelTHREECompleted) {
        dcLevelFOUR.style.display = "block";
        dcLevelTHREE.style.backgroundColor = "white";
        dcLevelTHREE.style.color = "black";
        dcLevelTHREE.style.filter = "invert(100%)";
        dcLevelTHREE.style.textDecoration = "underline";
    }
    if (dcLevelFOURCompleted) {
        dcLevelFIVE.style.display = "block";
        dcLevelFOUR.style.backgroundColor = "white";
        dcLevelFOUR.style.color = "black";
        dcLevelFOUR.style.filter = "invert(100%)";
        dcLevelFOUR.style.textDecoration = "underline";
    }
    if (dcLevelFIVECompleted) {
        dcLevelSIX.style.display = "block";
        dcLevelFIVE.style.backgroundColor = "white";
        dcLevelFIVE.style.color = "black";
        dcLevelFIVE.style.filter = "invert(100%)";
        dcLevelFIVE.style.textDecoration = "underline";
    }
    if (dcLevelSIXCompleted) {
        dcLevelSEVEN.style.display = "block";
        dcLevelSIX.style.backgroundColor = "white";
        dcLevelSIX.style.color = "black";
        dcLevelSIX.style.filter = "invert(100%)";
        dcLevelSIX.style.textDecoration = "underline";
    }
    if (dcLevelSEVENCompleted) {
        dcLevelEIGHT.style.display = "block";
        dcLevelSEVEN.style.backgroundColor = "white";
        dcLevelSEVEN.style.color = "black";
        dcLevelSEVEN.style.filter = "invert(100%)";
        dcLevelSEVEN.style.textDecoration = "underline";
    }
    if (dcLevelEIGHTCompleted) {
        dcLevelNINE.style.display = "block";
        dcLevelEIGHT.style.backgroundColor = "white";
        dcLevelEIGHT.style.color = "black";
        dcLevelEIGHT.style.filter = "invert(100%)";
        dcLevelEIGHT.style.textDecoration = "underline";
    }
    if (dcLevelNINECompleted) {
        dcLevelTEN.style.display = "block";
        dcLevelNINE.style.backgroundColor = "white";
        dcLevelNINE.style.color = "black";
        dcLevelNINE.style.filter = "invert(100%)";
        dcLevelNINE.style.textDecoration = "underline";
    }
    if (dcLevelTENCompleted) {
        dcLevelELEVEN.style.display = "block";
        dcLevelTEN.style.backgroundColor = "white";
        dcLevelTEN.style.color = "black";
        dcLevelTEN.style.filter = "invert(100%)";
        dcLevelTEN.style.textDecoration = "underline";
    }
    if (dcLevelELEVENCompleted) {
        dcLevelTWELVE.style.display = "block";
        dcLevelELEVEN.style.backgroundColor = "white";
        dcLevelELEVEN.style.color = "black";
        dcLevelELEVEN.style.filter = "invert(100%)";
        dcLevelELEVEN.style.textDecoration = "underline";
    }
    if (dcLevelTWELVECompleted) {
        dcLevelTHIRTEEN.style.display = "block";
        dcLevelTWELVE.style.backgroundColor = "white";
        dcLevelTWELVE.style.color = "black";
        dcLevelTWELVE.style.filter = "invert(100%)";
        dcLevelTWELVE.style.textDecoration = "underline";
    }
    if (dcLevelTHIRTEENCompleted) {
        dcLevelFOURTEEN.style.display = "block";
        dcLevelTHIRTEEN.style.backgroundColor = "white";
        dcLevelTHIRTEEN.style.color = "black";
        dcLevelTHIRTEEN.style.filter = "invert(100%)";
        dcLevelTHIRTEEN.style.textDecoration = "underline";
    }
    if (dcLevelFOURTEENCompleted) {
        dcLevelFIFTEEN.style.display = "block";
        dcLevelFOURTEEN.style.backgroundColor = "white";
        dcLevelFOURTEEN.style.color = "black";
        dcLevelFOURTEEN.style.filter = "invert(100%)";
        dcLevelFOURTEEN.style.textDecoration = "underline";
    }
    if (dcLevelFIFTEENCompleted) {
        heroIdle.src = "./res/img/gold.hero.idle.png";
        heroAttack.src = "./res/img/gold.hero.attack.png";
        dcPlanet.style.filter = "grayscale(100%)";
        multiverseAppeared = true;
        multiverse.style.display = "none";
        lossesCounter.innerText = 0;
        winsCounter.innerText = 0;
        dcLevelFIFTEEN.style.backgroundColor = "white";
        dcLevelFIFTEEN.style.color = "black";
        dcLevelFIFTEEN.style.filter = "invert(100%)";
        dcLevelFIFTEEN.style.textDecoration = "underline";
    }
}

//------------------------------------ collections functionality
collectionBtn.onclick = () => {
    audioButtonClick.src = "./res/audio/buttonsound.mp3";
    audioButtonClick.play();
    collectionsBox.style.display = "flex";
    inGameStoryRecapBtn.style.zIndex = "0";
}

collectionsBox.onclick = () => {
    audioButtonClick.src = "./res/audio/buttonsound.mp3";
    audioButtonClick.play();
    collectionsBox.style.display = "none";
    inGameStoryRecapBtn.style.zIndex = "1";
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
    "venom", "wolverine", "deadpool", "blackpanther", "ghostrider", "loki", "captainmarvel", "thanos", "dot", "batman", "flash",
    "wonderwoman", "joker", "superman", "aquaman", "catwoman", "cyborg", "greenlantern", "greenarrow", "nightwing", "shazam",
    "blackadam", "doctormanhattan", "darkseid", "pikachu", "supermario", "groot", "robocop", "predator", "terminator", "geralt",
    "doomslayer", "solidsnake", "mandalorian", "darthvader", "naruto", "goku", "johnwick", "kratos", "devil", "angel"];

const killedEnemyNames = ["SPIDER MAN", "HULK", "IRON MAN", "THOR", "BLACK WIDOW", "CAPTAIN AMERICA", "DOCTOR STRANGE",
    "VENOM", "WOLVERINE", "DEADPOOL", "BLACK PANTHER", "GHOST RIDER", "LOKI", "CAPTAIN MARVEL", "THANOS", "DOT", "BATMAN", "FLASH",
    "WONDER WOMAN", "JOKER", "SUPERMAN", "AQUAMAN", "CATWOMAN", "CYBORG", "GREEN LANTERN", "GREEN ARROW", "NIGHTWING", "SHAZAM",
    "BLACK ADAM", "DOCTOR MANHATTAN", "DARKSEID", "PIKACHU", "SUPER MARIO", "GROOT", "ROBOCOP", "PREDATOR", "TERMINATOR", "GERALT",
    "DOOMSLAYER", "SOLID SNAKE", "MANDALORIAN", "DARTH VADER", "NARUTO", "GOKU", "JOHN WICK", "KRATOS", "DEVIL", "ANGEL"];

const killedEnemyDamagePerSec = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, "NONE",
    16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37,
    38, 39, 40, 41, 42, 43, 44, 45, 50, 100];

const killedEnemyHP = [
    20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 1,
    95, 100, 105, 110, 115, 120, 125, 130, 135, 140, 145, 150, 155, 160, 165,
    `${pikachuHP}, AFTER THE END 220`, `${supermarioHP}, AFTER THE END 225`,
    `${grootHP}, AFTER THE END 230`, `${robocopHP}, AFTER THE END 235`,
    `${predatorHP}, AFTER THE END 240`, `${terminatorHP}, AFTER THE END 250`,
    `${geraltHP}, AFTER THE END 255`, `${doomslayerHP}, AFTER THE END 260`,
    `${solidsnakeHP}, AFTER THE END 265`, `${mandalorianHP}, AFTER THE END 270`,
    `${darthvaderHP}, AFTER THE END 275`, `${narutoHP}, AFTER THE END 280`,
    `${gokuHP}, AFTER THE END 285`, `${johnwickHP}, AFTER THE END 290`,
    `${kratosHP}, AFTER THE END 295`, devilHP, angelHP
];


const locations = ["MARVEL LEVEL ONE", "MARVEL LEVEL TWO", "MARVEL LEVEL THREE",
    "MARVEL LEVEL FOUR", "MARVEL LEVEL FIVE", "MARVEL LEVEL SIX", "MARVEL LEVEL SEVEN",
    "MARVEL LEVEL EIGHT", "MARVEL LEVEL NINE", "MARVEL LEVEL TEN", "MARVEL LEVEL ELEVEN",
    "MARVEL LEVEL TWELVE", "MARVEL LEVEL THIRTEEN", "MARVEL LEVEL FOURTEEN", "MARVEL LEVEL FIFTEEN",
    "DEESDAV DIMENSION", "DC LEVEL ONE", "DC LEVEL TWO", "DC LEVEL THREE", "DC LEVEL FOUR", "DC LEVEL FIVE",
    "DC LEVEL SIX", "DC LEVEL SEVEN", "DC LEVEL EIGHT", "DC LEVEL NINE", "DC LEVEL TEN", "DC LEVEL ELEVEN",
    "DC LEVEL TWELVE", "DC LEVEL THIRTEEN", "DC LEVEL FOURTEEN", "DC LEVEL FIFTEEN"];

const hellAndHeavenLocation = ["HELL", "HEAVEN"];

infoOfKilledEnemyName.innerHTML = 0;
infoOfKilledEnemyDamagePerSec.innerHTML = 0;
infoOfKilledEnemyHP.innerHTML = 0;
infoOfKilledEnemyLocation.innerHTML = 0;
viewPhoto.src = "";
viewPhoto.style.display = "none";

for (let i = 0; i < killedEnemies.length; i++) {
    const killedEnemiesId = document.getElementById(`${killedEnemies[i]}KilledEnemy`);
    killedEnemiesId.style.filter = "blur(3px)";
    killedEnemiesId.style.backgroundColor = "#111";
    killedEnemiesId.onmouseover = () => {
        audioButtonClick.src = "./res/audio/choose.mp3";
        audioButtonClick.play();
        infoOfKilledEnemyName.innerText = `${killedEnemyNames[i]}`;
        infoOfKilledEnemyDamagePerSec.innerText = `${killedEnemyDamagePerSec[i]}`;
        infoOfKilledEnemyHP.innerText = `${killedEnemyHP[i]}`;
        if (killedEnemiesId.alt == "marvel" || killedEnemiesId.alt == "dc" || killedEnemiesId.alt == "deesdav-dimension" || killedEnemiesId.alt == "hell" || killedEnemiesId.alt == "heaven") {
            infoOfKilledEnemyLocation.innerText = `${locations[i]}`;
        } else {
            infoOfKilledEnemyLocation.innerText = "MULTIVERSE";
        }

        if (killedEnemiesId.alt == "hell") {
            infoOfKilledEnemyLocation.innerText = "HELL";
        }
        if (killedEnemiesId.alt == "heaven") {
            infoOfKilledEnemyLocation.innerText = "HEAVEN";
        }
        viewPhoto.src = `./res/img/enemies/enemy.${killedEnemies[i]}.gif`;
        if (killedEnemiesId.alt == "multiverse" || killedEnemiesId.alt == "deesdav-dimension"
            || killedEnemiesId.alt == "hell" || killedEnemiesId.alt == "heaven") {
            viewPhoto.src = `./res/img/enemies/enemy.${killedEnemies[i]}.png`;
        }
        viewPhoto.style.display = "block";
        killedEnemiesId.style.filter = "blur(0px)";
    }
    killedEnemiesId.onmouseout = () => {
        infoOfKilledEnemyName.innerHTML = null;
        infoOfKilledEnemyDamagePerSec.innerHTML = null;
        infoOfKilledEnemyHP.innerHTML = null;
        infoOfKilledEnemyLocation.innerHTML = null;
        viewPhoto.src = "";
        viewPhoto.style.display = "none";
        killedEnemiesId.style.filter = "blur(3px)";
    }
}

//------------------------------------ body appear effect functionality
const appearEffect = () => {
    document.body.style.opacity = "1";
}

const appearEffectInterval = setInterval(() => {
    appearEffect();
}, 1000);

window.onload = () => {
    appearEffect();
};