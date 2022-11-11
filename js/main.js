"use strict";

// Header objects
const header = document.querySelector("header");
const homeLink = document.getElementById("nav-li-home");
const toolsLink = document.getElementById("nav-li-tools");
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
const buttonLinkedin = document.getElementById("button-linkedin");
const buttonLinkedinLink = document.getElementById("button-linkedin-link");

//Tools objects
const toolsTitle = document.getElementById("tools-title");
const javaSvgPath = document.getElementsByClassName("java-svg-path");
const htmlSvgPathP = document.getElementsByClassName("html-svg-path-p");
const htmlSvgPathS = document.getElementsByClassName("html-svg-path-s");
const cssSvgPathP = document.getElementsByClassName("css-svg-path-p");
const cssSvgPathS = document.getElementsByClassName("css-svg-path-s");
const jsSvgPathP = document.getElementsByClassName("js-svg-path-p");
const jsSvgPathS = document.getElementsByClassName("js-svg-path-s");
const mysqlSvgPath = document.getElementsByClassName("mysql-svg-path");
const photoshopSvgPath = document.getElementsByClassName("photoshop-svg-path");

//Color palette
let clrPrimary = "rgba(248, 242, 242, 1)";
let clrSecondary = "rgba(30, 30, 30, 1)";
let clrAlternative = "rgba(237, 7, 53, 1)";

//Function that is called when lang toggler is clicked and changes the lang of the page
function changeLang() {
    if (langSwitch.checked) {
        //Header text to greek
        homeLink.innerHTML = "Αρχική";
        toolsLink.innerHTML = "Εργαλεία";
        projectLink.innerHTML = "Πρότζεκτς";
        contactLink.innerHTML = "Επικοινωνία";
        
        //Home text to greek
        homeWelcome.innerHTML = "ΚΑΛΩΣ ΗΡΘΑΤΕ";
        homeName.innerHTML = "Ονομάζομαι <span>Παναγιώτης</span> Τσιώνης.";
        homeBio.innerHTML = "Είμαι προπτυχιακός φοιτητής στο τμήμα Εφαρμοσμένης Πληροφορικής του <span><a href=\"https://www.uom.gr/\" target=\"_blank\">Πανεπιστημίου Μακεδονίας</a></span>."
        buttonCvLink.innerHTML = "Λήψη βιογραφικού";
        buttonGithubLink.innerHTML = "Προφίλ GitHub";
        buttonLinkedinLink.innerHTML = "Προφίλ LinkedIn";

        //Tools text to greek
        toolsTitle.innerHTML = "Εργαλεία <span>&</span> Τεχνολογίες";
    }
    else {
        //Header text to english
        homeLink.innerHTML = "Home";
        toolsLink.innerHTML = "Tools";
        projectLink.innerHTML = "Projects";
        contactLink.innerHTML = "Contact";

        //Home text to english
        homeWelcome.innerHTML = "WELCOME";
        homeName.innerHTML = "My name is <span>Panagiotis</span> Tsionis.";
        homeBio.innerHTML = "I am an undergraduate student at Applied Informatics Department at <span><a href=\"https://www.uom.gr/\" target=\"_blank\">University of Macedonia</a></span>."
        buttonCvLink.innerHTML = "Download CV";
        buttonGithubLink.innerHTML = "GitHub Profile";
        buttonLinkedinLink.innerHTML = "LinkedIn Profile";

        //Tools text to english
        toolsTitle.innerHTML = "Tools <span>&</span> Technologies";
    }
}

//Function that is called when theme toggler is clicked and changes the theme of the page
function changeTheme() {
    if (darkSwitch.checked) {
        //Body and header objects for dark mode
        document.body.style.backgroundColor = clrSecondary;
        header.style.backgroundColor = clrSecondary;
        homeLink.style.color = clrPrimary;
        toolsLink.style.color = clrPrimary;
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
        buttonLinkedin.style.backgroundColor = clrSecondary;
        buttonLinkedin.style.outline = "1px solid ".concat(clrPrimary);
        buttonLinkedinLink.style.color = clrPrimary;

        //Tools object for dark mode
        toolsTitle.style.color = clrPrimary;
        for (let path of javaSvgPath) {
            path.style.fill = clrPrimary;
        }
        for (let path of htmlSvgPathP) {
            path.style.fill = clrPrimary;
        }
        for (let path of htmlSvgPathS) {
            path.style.fill = clrSecondary;
        }
        for (let path of cssSvgPathP) {
            path.style.fill = clrPrimary;
        }
        for (let path of cssSvgPathS) {
            path.style.fill = clrSecondary;
        }
        for (let path of jsSvgPathP) {
            path.style.fill = clrPrimary;
        }
        for (let path of jsSvgPathS) {
            path.style.fill = clrSecondary;
        }
        for (let path of mysqlSvgPath) {
            path.style.fill = clrPrimary;
        }
        for (let path of photoshopSvgPath) {
            path.style.fill = clrPrimary;
        }
    }
    else {
        //Body and header objects for light mode
        document.body.style.backgroundColor = clrPrimary;
        header.style.backgroundColor = clrPrimary;
        homeLink.style.color = clrSecondary;
        toolsLink.style.color = clrSecondary;
        projectLink.style.color = clrSecondary;
        contactLink.style.color = clrSecondary;
        buttonGithub.style.backgroundColor = clrSecondary;
        buttonGithubLink.style.color = clrPrimary;
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
        buttonLinkedin.style.backgroundColor = clrPrimary;
        buttonLinkedin.style.outline = "1px solid ".concat(clrSecondary);
        buttonLinkedinLink.style.color = clrSecondary;

        //Tools object for dark mode
        toolsTitle.style.color = clrSecondary;
        for (let path of javaSvgPath) {
            path.style.fill = clrSecondary;
        }
        for (let path of htmlSvgPathP) {
            path.style.fill = clrSecondary;
        }
        for (let path of htmlSvgPathS) {
            path.style.fill = clrPrimary;
        }
        for (let path of cssSvgPathP) {
            path.style.fill = clrSecondary;
        }
        for (let path of cssSvgPathS) {
            path.style.fill = clrPrimary;
        }
        for (let path of jsSvgPathP) {
            path.style.fill = clrSecondary;
        }
        for (let path of jsSvgPathS) {
            path.style.fill = clrPrimary;
        }
        for (let path of mysqlSvgPath) {
            path.style.fill = clrSecondary;
        }
        for (let path of photoshopSvgPath) {
            path.style.fill = clrSecondary;
        }
    }
}
