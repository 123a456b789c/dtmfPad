if ("serviceWorker" in navigator) {
    window.addEventListener("load", function() {
      navigator.serviceWorker
        .register("/serviceWorker.js")
        .then(res => console.log("service worker registered"))
        .catch(err => console.log("service worker not registered", err))
    })
}

function play1() {
    var audio = new Audio('./tones/Dtmf1.ogg');
    audio.play();
    return true;
}

function play2() {
    var audio = new Audio('./tones/Dtmf2.ogg');
    audio.play();
    return true;
}

function play3() {
    var audio = new Audio('./tones/Dtmf3.ogg');
    audio.play();
    return true;
}

function playA() {
    var audio = new Audio('./tones/DtmfA.ogg');
    audio.play();
    return true;
}

function play4() {
    var audio = new Audio('./tones/Dtmf4.ogg');
    audio.play();
    return true;
}

function play5() {
    var audio = new Audio('./tones/Dtmf5.ogg');
    audio.play();
    return true;
}

function play6() {
    var audio = new Audio('./tones/Dtmf6.ogg');
    audio.play();
    return true;
}

function playB() {
    var audio = new Audio('./tones/DtmfB.ogg');
    audio.play();
    return true;
}

function play7() {
    var audio = new Audio('./tones/Dtmf7.ogg');
    audio.play();
    return true;
}

function play8() {
    var audio = new Audio('./tones/Dtmf8.ogg');
    audio.play();
    return true;
}

function play9() {
    var audio = new Audio('./tones/Dtmf9.ogg');
    audio.play();
    return true;
}

function playC() {
    var audio = new Audio('./tones/DtmfC.ogg');
    audio.play();
    return true;
}

function playPound() {
    var audio = new Audio('./tones/DtmfPound.ogg');
    audio.play();
    return true;
}

function playStar() {
    var audio = new Audio('./tones/DtmfStar.ogg');
    audio.play();
    return true;
}

function play0() {
    var audio = new Audio('./tones/Dtmf0.ogg');
    audio.play();
    return true;
}

function playD() {
    var audio = new Audio('./tones/DtmfD.ogg');
    audio.play();
    return true;
}


function playDisconnectAll() {
    var audio = new Audio('./tones/DtmfPoundPound.ogg');
    audio.play();
    return true;
}

function playStatus() {
    var audio = new Audio('./tones/DtmfStatus.ogg');
    audio.play();
    return true;
}