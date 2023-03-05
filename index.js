function shout(string) {
    //receives an argument and returns it in all caps
    return string.toUpperCase();
}

function whisper(string) {
    return string.toLowerCase();
}

function logShout(string) {
    //prints in console
    console.log(shout(string));
}

function logWhisper(string) {
    console.log(whisper(string));
}

function sayHiToHeadphonedRoommate(string) {
    //todo
    let returnString = "";
    if (string === "Let's have dinner together!") {
        returnString = "I would love to!";
    } else if (string === string.toLowerCase()) {
        returnString = "I can't hear you!";
    } else {
        returnString = "YES INDEED!";
    }
    return returnString;
}