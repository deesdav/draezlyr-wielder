const audioButtonClick = document.getElementById("audioButtonClick");
const audioButtonClickMulti = document.getElementById("audioButtonClickMulti");
const audioLobbyBackground = document.getElementById("audioLobbyBackground");
const lobby = document.getElementById("lobby");
const play = document.getElementById("play");
const story = document.getElementById("story");
const customization = document.getElementById("customization");
const storyinfo = document.getElementById("storyinfo");
const nextBtn = document.getElementById("nextBtn");
const storyPart = document.getElementById("storyPart");
const storyPartInput = document.getElementById("storyPartInput");
const yourName = document.getElementById("yourName");
const sendInputBtn = document.getElementById("sendInputBtn");
const realtimepresented = document.getElementById("realtimepresented");
const planets = document.getElementById("planets");
const marvelPlanet = document.getElementById("marvelPlanet");
const headline = document.getElementById("headline");

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
}
headline.onmouseout = () => {
    audioLobbyBackground.pause();
    audioLobbyBackground.currentTime = 0;
}

story.onclick = () => {
    audioButtonClick.src = "./res/audio/buttonsound.mp3";
    audioButtonClick.play();
}
customization.onclick = () => {
    audioButtonClick.src = "./res/audio/buttonsound.mp3";
    audioButtonClick.play();
}

play.onclick = () => {
    audioButtonClick.src = "./res/audio/buttonsound.mp3";
    audioButtonClickMulti.src = "./res/audio/loadingtheme.mp3";
    audioButtonClickMulti.play();
    audioButtonClick.play();
    document.body.style.backgroundImage = "url(./res/img/multiverse.png)";
    play.style.display = "none";
    story.style.display = "none";
    customization.style.display = "none";
    lobby.style.display = "none";
    sendInputBtn.style.display = "none";
    realtimepresented.style.display = "none";
    
    planets.style.top = "250px";
    const playInterval = setTimeout(() => {
        document.body.style.backgroundImage = "url(./res/img/galaxy.gif)";
        planets.style.display = "none";
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
}


window.addEventListener("keyup", (e) => {
    console.log(e);
    switch (e.key) {
        case ("Escape"):
            window.location.reload();
            break;
        default:
            console.log("you type something wrong");
            break;
    }
});