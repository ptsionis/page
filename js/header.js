"use strict";

const homeLink = document.getElementById("nav-li-home");
const skillsLink = document.getElementById("nav-li-skills");
const projectLink = document.getElementById("nav-li-projects");
const contactLink = document.getElementById("nav-li-contact");
const langSpan = document.getElementsByClassName("lang-span");
const darkPath = document.getElementsByClassName("dark-path");

const langSwitch = document.getElementById("lang-switch");
const darkSwitch = document.getElementById("dark-switch");

let clrPrimary = "rgba(248, 242, 242, 1)";
let clrSecondary = "rgba(30, 30, 30, 1)";
let clrAlternative = "rgba(237, 7, 53, 1)";

function changeHeaderLang() {
    if (langSwitch.checked) {
        homeLink.innerHTML = "Αρχική";
        skillsLink.innerHTML = "Ικανότητες";
        projectLink.innerHTML = "Πρότζεκτς";
        contactLink.innerHTML = "Επικοινωνία";
    }
    else {
        homeLink.innerHTML = "Home";
        skillsLink.innerHTML = "Skills";
        projectLink.innerHTML = "Projects";
        contactLink.innerHTML = "Contact";
    }
}

function changeHeaderDark() {
    if (darkSwitch.checked) {
        document.body.style.backgroundColor = clrSecondary;
        homeLink.style.color = clrPrimary;
        skillsLink.style.color = clrPrimary;
        projectLink.style.color = clrPrimary;
        contactLink.style.color = clrPrimary;
        for (let span of langSpan) {
            span.style.color = clrPrimary;
        }
        for (let path of darkPath) {
            path.style.fill = clrPrimary;
        }
    }
    else {
        document.body.style.backgroundColor = clrPrimary;
        homeLink.style.color = clrSecondary;
        skillsLink.style.color = clrSecondary;
        projectLink.style.color = clrSecondary;
        contactLink.style.color = clrSecondary;
        for (let span of langSpan) {
            span.style.color = clrSecondary;
        }
        for (let path of darkPath) {
            path.style.fill = clrSecondary;
        }
    }
}