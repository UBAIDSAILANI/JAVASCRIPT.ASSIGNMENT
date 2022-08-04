var count = 200;
window.onkeydown = function () {
    var character = document.getElementById("character-1");
    if (event.keyCode === 39) {
        character.src = "two.gif";
        count = count + 50;
        character.style.left = count + "px";
        setTimeout(function () {
            character.src = "one.gif"
        }, 100);
    }
    if (event.keyCode === 37) {
        character.src = "two.gif";
        count = count - 50;
        character.style.left = count + "px";
        setTimeout(function () {
            character.src = "one.gif"
        }, 100);
    }
    if (event.keyCode === 38) {
        character.src = "up.gif"
        setTimeout(function () {
            character.src = "one.gif"
        }, 1000);
    }
    if (event.keyCode === 40) {
        character.src = "sit.gif"
        setTimeout(function () {
            character.src = "sit.gif"
        }, 1000);
    }
    if (event.keyCode === 65) {
        character.src = "hit.gif"
        setTimeout(function () {
            character.src = "one.gif"
        }, 1000);
    }


    
    var character2 = document.getElementById("character-2");
    if (event.keyCode === 76) {
        character2.src = "blanka-walkback.gif";
        count = count + 50;
        character2.style.left = count + "px";
        setTimeout(function () {
            character2.src = "blanka-scratch.gif"
        }, 100);
    }
    if (event.keyCode === 74) {
        character2.src = "blanka-walkback.gif";
        count = count - 50;
        character2.style.left = count + "px";
        setTimeout(function () {
            character2.src = "blanka-scratch.gif"
        }, 100)
    }
    if (event.keyCode === 73) {
        character2.src = "blanka-jump.gif";
        setTimeout(function () {
            character2.src = "blanka-scratch.gif"
        }, 1000);
    }
    if (event.keyCode === 75) {
        character2.src = "blanka-sit.gif";
        setTimeout(function () {
            character2.src = 'blanka-sit.gif';
        }, 1000);
    }
    if (event.keyCode === 82) {
        character2.src = "blanka-hit.gif";
        setTimeout(function () {
            character2.src = "blanka-scratch.gif"
        }, 3000);
    }
}
