// script.js
document.addEventListener("DOMContentLoaded", () => {
    const character = document.getElementById("character");
    const characterContainer = document.getElementById("character-container");
    let isMovingLeft = false;
    let isMovingRight = false;
    let verticalVelocity = 0;
    const gravity = 0.5;
    const speed = 2;

    const animations = {
        still: 'Imagin/VVVid-ezgif.com-resize (1).gif',
        idle: 'Imagin/VVVid-ezgif.com-resize (1).gif',
        left: 'Imagin/VVVleftt-ezgif.com-resize (1).gif',
        right: 'Imagin/VVVrigh-ezgif.com-resize (1).gif'
    };

    function setAnimation(animation) {
        character.src = animations[animation];
    }

    function moveCharacter() {
        let left = parseInt(characterContainer.style.left || 100, 10);
        let top = parseInt(characterContainer.style.top || 100, 10);

        if (isMovingLeft) {
            left -= speed;
            if (left < 0) left = 0;
        } else if (isMovingRight) {
            left += speed;
            if (left + characterContainer.offsetWidth > window.innerWidth) left = window.innerWidth - characterContainer.offsetWidth;
        }

        if (top + characterContainer.offsetHeight < window.innerHeight) {
            verticalVelocity += gravity;
            top += verticalVelocity;
        } else {
            top = window.innerHeight - characterContainer.offsetHeight;
            verticalVelocity = 0;
        }

        characterContainer.style.left = `${left}px`;
        characterContainer.style.top = `${top}px`;
    }

    function switchRandomAnimation() {
        const randomAnimation = ["left", "right", "idle"][Math.floor(Math.random() * 3)];
        setAnimation(randomAnimation);

        isMovingLeft = randomAnimation === "left";
        isMovingRight = randomAnimation === "right";
    }

    // Initial position and animation
    characterContainer.style.left = '100px';
    characterContainer.style.top = '100px';
    setAnimation("idle");

    // Timers
    setInterval(moveCharacter, 25);
    setInterval(switchRandomAnimation, Math.random() * 4000 + 1000);
});


//scriptgriffo
document.addEventListener("DOMContentLoaded", () => {
    const characterr = document.getElementById("characterr");
    const characterContainerr = document.getElementById("character-containerr");
    let isMovingLeft = false;
    let isMovingRight = false;
    let verticalVelocity = 0;
    const gravity = 0.5;
    const speed = 2;

    const animations = {
        still: 'Imagin/griffoid-ezgif.com-resize (1).gif',
        idle: 'Imagin/griffoid-ezgif.com-resize (1).gif',
        left: 'Imagin/griffoflleft-ezgif.com-resize (1).gif',
        right: 'Imagin/griffoflrighh-ezgif.com-resize (1).gif'
    };

    function setAnimation(animation) {
        characterr.src = animations[animation];
    }

    function moveCharacter() {
        let left = parseInt(characterContainerr.style.left || 100, 10);
        let top = parseInt(characterContainerr.style.top || 100, 10);

        if (isMovingLeft) {
            left -= speed;
            if (left < 0) left = 0;
        } else if (isMovingRight) {
            left += speed;
            if (left + characterContainerr.offsetWidth > window.innerWidth) left = window.innerWidth - characterContainerr.offsetWidth;
        }

        if (top + characterContainerr.offsetHeight < window.innerHeight) {
            verticalVelocity += gravity;
            top += verticalVelocity;
        } else {
            top = window.innerHeight - characterContainerr.offsetHeight;
            verticalVelocity = 0;
        }

        characterContainerr.style.left = `${left}px`;
        characterContainerr.style.top = `${top}px`;
    }

    function switchRandomAnimation() {
        const randomAnimation = ["left", "right", "idle"][Math.floor(Math.random() * 3)];
        setAnimation(randomAnimation);

        isMovingLeft = randomAnimation === "left";
        isMovingRight = randomAnimation === "right";
    }

    // Initial position and animation
    characterContainerr.style.left = '100px';
    characterContainerr.style.top = '100px';
    setAnimation("idle");

    // Timers
    setInterval(moveCharacter, 25);
    setInterval(switchRandomAnimation, Math.random() * 4000 + 1000);
});