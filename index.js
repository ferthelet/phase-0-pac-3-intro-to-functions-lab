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