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
const levelBtn = document.getElementById("levelBtn");
const storyrecap = document.getElementById("storyrecap");

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


document.addEventListener("keyup", (e) => {
    console.log(e);
    switch (e.key) {
        case ("Escape"):
            window.location.reload();
            /**audioButtonClick.style.display = "none";
            audioButtonClick.pause();
            audioButtonClick.currentTime = 0;
            audioButtonClickMulti.style.display = "none";
            audioButtonClickMulti.pause();
            audioButtonClickMulti.currentTime = 0;
            audioLobbyBackground.style.display = "none";
            audioLobbyBackground.pause();
            audioLobbyBackground.currentTime = 0;
            lobby.style.display = "flex";
            play.style.display = "block";
            story.style.display = "block";
            author.style.display = "block";
            storyinfo.style.display = "none";
            nextBtn.style.display = "none";
            storyPart.style.display = "none";
            storyPartInput.style.display = "none";
            yourName.style.display = "none";
            sendInputBtn.style.display = "none";
            realtimepresented.style.display = "block";
            planets.style.display = "none";
            marvelPlanet.style.display = "none";
            headline.style.display = "block";
            leveltText.style.display = "none";
            document.body.style.backgroundImage = "url(./res/img/lobbyBackground.png)";
            document.body.style.cursor = "default"; */
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
    levelBtn.style.display = "block";
    marvelPlanet.style.display = "none";
    nameOfPlanet.style.display = "none";
    document.body.style.backgroundColor = "red";
}

levelBtn.onclick = () => {
    audioButtonClick.src = "./res/audio/buttonsound.mp3";
    audioButtonClick.play();
}
levelBtn.onmousedown = () => {
    levelBtn.style.backgroundColor = "white";
    levelBtn.style.color = "red";
}
levelBtn.onmouseup = () => {
    levelBtn.style.backgroundColor = "transparent";
    levelBtn.style.color = "black";
}