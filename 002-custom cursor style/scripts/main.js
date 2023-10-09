const cursorDot = document.querySelector(".cursor-dot");
const cursorOutline = document.querySelector(".cursor-outline");
const title = document.querySelector(".title");

// Mouse Cursor
window.addEventListener("mousemove", (e) => {
    cursorDot.style.top = `${e.pageY}px`;
    cursorDot.style.left = `${e.pageX}px`;

    cursorOutline.style.top = `${e.pageY}px`;
    cursorOutline.style.left = `${e.pageX}px`;

    cursorOutline.animate({
        top: `${e.pageY}px`,
        left: `${e.pageX}px`
    }, {duration: 300, fill: "forwards"})
});

// Title hover
title.addEventListener("mouseover", () => {
    cursorDot.style.width = "5rem";
    cursorDot.style.height = "5rem";
    cursorDot.style.transition = "0.2s";
    cursorDot.style.filter = "invert()";
    
    cursorOutline.style.width = "10rem";
    cursorOutline.style.height = "10rem";
    cursorOutline.style.transition = "0.2s";
});


// Title hover out
title.addEventListener("mouseout", () => {
    cursorDot.style.width = "0.7rem";
    cursorDot.style.height = "0.7rem";
    cursorDot.style.transition = "0s";
    cursorDot.style.filter = "none";


    cursorOutline.style.width = "2rem";
    cursorOutline.style.height = "2rem";
    cursorOutline.style.transition = "0";
});