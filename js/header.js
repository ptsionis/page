"use strict";

// Header objects
const header = document.querySelector("header");
const homeLink = document.getElementById("nav-li-home");
const skillsLink = document.getElementById("nav-li-skills");
const projectLink = document.getElementById("nav-li-projects");
const contactLink = document.getElementById("nav-li-contact");
const langSpan = document.getElementsByClassName("lang-span");
const darkPath = document.getElementsByClassName("dark-path");
const langSwitch = document.getElementById("lang-switch");
const darkSwitch = document.getElementById("dark-switch");

//Home objects
const homeWelcome = document.getElementById("home-welcome");
const homeName = document.getElementById("home-name");
const homeBio = document.getElementById("home-bio");
const buttonCvLink = document.getElementById("button-cv-link");
const buttonGithub = document.getElementById("button-github");
const buttonGithubLink = document.getElementById("button-github-link");
const meImg = document.getElementById("me-img");

//Color palette
let clrPrimary = "rgba(248, 242, 242, 1)";
let clrSecondary = "rgba(30, 30, 30, 1)";
let clrAlternative = "rgba(237, 7, 53, 1)";

//Function that is called when lang toggler is clicked and changes the lang of the page
function changeLang() {
    if (langSwitch.checked) {
        //Header text to greek
        homeLink.innerHTML = "Αρχική";
        skillsLink.innerHTML = "Ικανότητες";
        projectLink.innerHTML = "Πρότζεκτς";
        contactLink.innerHTML = "Επικοινωνία";
        
        //Home text to greek
        homeWelcome.innerHTML = "ΚΑΛΩΣ ΗΡΘΑΤΕ";
        homeName.innerHTML = "Ονομάζομαι <span>Παναγιώτης</span> Τσιώνης.";
        homeBio.innerHTML = "Είμαι προπτυχιακός φοιτητής στο τμήμα Εφαρμοσμένης Πληροφορικής του <span><a href=\"https://www.uom.gr/\" target=\"_blank\">Πανεπιστημίου Μακεδονίας</a></span>."
        buttonCvLink.innerHTML = "Λήψη βιογραφικού";
        buttonGithubLink.innerHTML = "Προφίλ GitHub";
    }
    else {
        //Header text to english
        homeLink.innerHTML = "Home";
        skillsLink.innerHTML = "Skills";
        projectLink.innerHTML = "Projects";
        contactLink.innerHTML = "Contact";

        //Home text to english
        homeWelcome.innerHTML = "WELCOME";
        homeName.innerHTML = "My name is <span>Panagiotis</span> Tsionis.";
        homeBio.innerHTML = "I am an undergraduate student at Applied Informatics Department at <span><a href=\"https://www.uom.gr/\" target=\"_blank\">University of Macedonia</a></span>."
        buttonCvLink.innerHTML = "Download CV";
        buttonGithubLink.innerHTML = "GitHub Profile";
    }
}

//Function that is called when theme toggler is clicked and changes the theme of the page
function changeTheme() {
    if (darkSwitch.checked) {
        //Body and header objects for dark mode
        document.body.style.backgroundColor = clrSecondary;
        header.style.backgroundColor = clrSecondary;
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

        //Home objects for dark mode
        homeWelcome.style.color = clrPrimary;
        homeName.style.color = clrPrimary;
        homeBio.style.color = clrPrimary;
        buttonGithub.style.backgroundColor = clrPrimary;
        buttonGithubLink.style.color = clrSecondary;
        meImg.src = "./images/mebw-stroke-white.png"
    }
    else {
        //Body and header objects for light mode
        document.body.style.backgroundColor = clrPrimary;
        header.style.backgroundColor = clrPrimary;
        homeLink.style.color = clrSecondary;
        skillsLink.style.color = clrSecondary;
        projectLink.style.color = clrSecondary;
        contactLink.style.color = clrSecondary;
        buttonGithub.style.backgroundColor = clrSecondary;
        buttonGithubLink.style.color = clrPrimary;
        meImg.src = "./images/mebw.png"
        for (let span of langSpan) {
            span.style.color = clrSecondary;
        }
        for (let path of darkPath) {
            path.style.fill = clrSecondary;
        }

        //Home objects for light mode
        homeWelcome.style.color = clrSecondary;
        homeName.style.color = clrSecondary;
        homeBio.style.color = clrSecondary;
        meImg.src = "./images/mebw-stroke-white.png"
    }
}