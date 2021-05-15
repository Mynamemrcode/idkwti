var SpeechRecognition = window.webkitSpeechRecognition;
var Recognition = new SpeechRecognition;

function start() {
    document.getElementById("no").innerHTML = " ";
    Recognition.start();
}

Recognition.onresult = function (event) {
    console.log(event);
    var Content = event.results[0][0].transcript;
    document.getElementById("no").innerHTML = Content;
    console.log(Content);
};
