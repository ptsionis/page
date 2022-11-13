"use strict";

// Header objects
const header = document.querySelector("header");
const topNavUl = document.querySelector(".top-nav-ul");
const homeLink = document.getElementById("nav-li-home");
const toolsLink = document.getElementById("nav-li-tools");
const nerdworkLink = document.getElementById("nav-li-projects");
const blackjackLink = document.getElementById("nav-li-project2");
const langSpan = document.getElementsByClassName("lang-span");
const darkPath = document.getElementsByClassName("dark-path");
const langSwitch = document.getElementById("lang-switch");
const darkSwitch = document.getElementById("dark-switch");
const accessSwitch = document.getElementById("switches-access");
const accessSpan = document.getElementById("access-span");
const mobileMenu = document.getElementById("mobile-menu");
const mobileMenuPath = document.getElementById("mobile-menu-path");
let accessBool = -1;
let changeMenuBool = -1;

//Home objects
const homeWelcome = document.getElementById("home-welcome");
const homeName = document.getElementById("home-name");
const homeBio = document.getElementById("home-bio");
const buttonCvLink = document.getElementById("button-cv-link");
const buttonGithubLink = document.getElementById("button-github-link");
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

//Project objects
const projectsTitle = document.getElementById("projects-title");

//Nerdwork objects
const nerdworkTitle = document.getElementById("nerdwork-title");
const nerdworkBio = document.getElementById("nerdwork-bio");
const nerdworkAward = document.getElementById("nerdwork-award");
const nerdworkGithubLink = document.getElementById("nerdwork-github-link");

//Blackjack objects
const blackjackTitle = document.getElementById("blackjack-title");
const blackjackBio = document.getElementById("blackjack-bio");
const blackjackGithubLink = document.getElementById("blackjack-github-link");
const blackjackPlayLink = document.getElementById("blackjack-play-link");

//Footer objects
const footer = document.getElementById("page-5");
const footerCopy = document.getElementById("footer-copy");
const footerNavHome = document.getElementById("bottom-nav-li-home");
const footerNavTools = document.getElementById("bottom-nav-li-tools");
const footerNavProjects = document.getElementById("bottom-nav-li-projects");
const footerNavProject2 = document.getElementById("bottom-nav-li-project2");
const footerPath = document.getElementsByClassName("footer-path");

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
        nerdworkLink.innerHTML = "NerdWork";
        blackjackLink.innerHTML = "Εικοσιμία";
        
        //Home text to greek
        homeWelcome.innerHTML = "ΚΑΛΩΣ ΗΡΘΑΤΕ";
        homeName.innerHTML = "Ονομάζομαι <span>Παναγιώτης</span> Τσιώνης.";
        homeBio.innerHTML = "Είμαι προπτυχιακός φοιτητής στο τμήμα Εφαρμοσμένης Πληροφορικής του <span>Πανεπιστημίου Μακεδονίας</span>."
        buttonCvLink.innerHTML = "Λήψη βιογραφικού";
        buttonGithubLink.innerHTML = "Προφίλ GitHub";
        buttonLinkedinLink.innerHTML = "Προφίλ LinkedIn";

        //Tools text to greek
        toolsTitle.innerHTML = "Εργαλεία <span>&</span> Τεχνολογίες";

        //Projects text to greek
        projectsTitle.innerHTML = "Πρότζεκτς";

        //Nerdwork text to greek
        nerdworkBio.innerHTML = "Το NerdWork είναι ένα ομαδικό πρότζεκτ, φτιαγμένο σε <span>Java</span> και <span>PHP</span>, το οποίο δημιουργήθηκε στα πλαίσια του μαθήματος Τεχνολογίας Λογισμικού."
        + " Κάθε φοιτητής που κατέχει ένα ακαδημαϊκό email του τμήματος Εφαρμοσμένης Πληροφορικής, μπορεί να εγγραφεί και να χρησιμοποιεί το NerdWork για να παρατηρεί την πορεία των"
        + " μαθημάτων του.<br><br>"
        + "Το NerdWork διαπρέπει στο κομμάτι <span>προγραμματισμού ραντεβού</span> μεταξύ φοιτητών και καθηγητών, βοηθώντας αμφότερους στην διαχείριση των ραντεβού με ευκολία,"
        + " <span>χωρίς</span> την ανάγκη για <span>άμεση και ταυτόχρονη επικοινωνία</span>.<br>Περαιτέρω πληροφορίες μπορούν να βρεθούν στο GitHub repository.<br><br>";
        nerdworkAward.innerHTML = "Το NerdWork βραβεύτηκε ως ένα από τα <span>Top-3</span> πρότζεκτ στο μάθημα της Τεχνολογίας Λογισμικού για την ακαδημαϊκή χρονιά 2021 - 2022.";
        nerdworkGithubLink.innerHTML = "NerdWork στο GitHub";

        //Blackjack text to greek
        blackjackTitle.innerHTML = "Εικοσι<span>μία</span>";
        blackjackBio.innerHTML = "Η Εικοσιμία είναι ένα διαδικτυακό παιχνίδι που υλοποίησα, με στόχο την εξάσκηση των Front-end (και επί του παρόντος Back-end) ικανοτήτων μου."
        + " Δημιουργήθηκε με χρήση <span>HTML5</span>, <span>CSS3</span> και <span>JavaScript</span>."
        + "<br><br>Το πρότζεκτ βρίσκεται σε <span>BETA</span> έκδοση, καθώς υπάρχουν διάφορα bugs που χρήζουν επίλυσης, και επίσης, ορισμένα νέα χαρακτηριστικά που πρέπει να προστεθούν.<br>"
        + "Χρησιμοποιείται ως ένα πρότζεκτ - <span>πείραμα</span>, πάνω στο οποίο δοκιμάζω διάφορα εργαλεία και τεχνολογίες, και ευελπιστώ να προσθέσω ένα τοπικό αποθετήριο βάσης δεδομένων,"
        + " όπου ο παίχτης θα μπορεί να σώσει την πρόοδό του και να συνεχίσει από εκεί που σταμάτησε.";
        blackjackGithubLink.innerHTML = "Εικοσιμία στο GitHub";
        blackjackPlayLink.innerHTML = "Παίξτε Εικοσιμία";

        //Footer text to greek
        footerNavHome.innerHTML = "Αρχική";
        footerNavTools.innerHTML = "Εργαλεία";
        footerNavProjects.innerHTML = "NerdWork";
        footerNavProject2.innerHTML = "Εικοσιμία";
    }
    else {
        //Header text to english
        homeLink.innerHTML = "Home";
        toolsLink.innerHTML = "Tools";
        nerdworkLink.innerHTML = "NerdWork";
        blackjackLink.innerHTML = "BlackJack";

        //Home text to english
        homeWelcome.innerHTML = "WELCOME";
        homeName.innerHTML = "My name is <span>Panagiotis</span> Tsionis.";
        homeBio.innerHTML = "I am an undergraduate student at Applied Informatics Department at <span>University of Macedonia</span>."
        buttonCvLink.innerHTML = "Download CV";
        buttonGithubLink.innerHTML = "GitHub Profile";
        buttonLinkedinLink.innerHTML = "LinkedIn Profile";

        //Tools text to english
        toolsTitle.innerHTML = "Tools <span>&</span> Technologies";

        //Projects text to english
        projectsTitle.innerHTML = "Projects";

        //Nerdwork text to english
        nerdworkBio.innerHTML = "NerdWork is a team project, built with <span>Java</span> and <span>PHP</span>, that was created for my Software Engineering course."
        + " Any student that holds an academic email from the Applied Informatics Department can sign up and use Nerdwork in order to keep track of his university courses.<br><br>"
        + "NerdWork excels when it comes to <span>managing appointments</span> between students and professors, helping both sides manage their appointments with ease,"
        + " <span>without</span> the need of <span>direct and simultaneous communication</span>.<br>Further information can be found in GitHub repository.<br><br>"
        nerdworkAward.innerHTML = "NerdWork was awarded as one of the <span>Top-3</span> projects in our Software Engineering course for the academic year 2021 - 2022.";
        nerdworkGithubLink.innerHTML = "NerdWork on GitHub";

        //Blackjack text to english
        blackjackTitle.innerHTML = "Black<span>Jack</span>";
        blackjackBio.innerHTML = "BlackJack is a web game I created in order to practice my Front-end (and currently Back-end) skills."
        + " It is built using <span>HTML5</span>, <span>CSS3</span> and <span>JavaScript ES6+</span>.<br><br>"
        + "This project is still in <span>BETA</span> version, since there are some bugs that have to be resolved and some new features to be added.<br>"
        + "It serves as a project - <span>experiment</span>, where I test various tools and technologies, and I am looking forward to add a local storage database,"
        + " where a player can save his progress and resume from where he left off.";
        blackjackGithubLink.innerHTML = "BlackJack on GitHub";
        blackjackPlayLink.innerHTML = "Play BlackJack";

        //Footer text to english
        footerNavHome.innerHTML = "Home";
        footerNavTools.innerHTML = "Tools";
        footerNavProjects.innerHTML = "NerdWork";
        footerNavProject2.innerHTML = "BlackJack";
    }
}

//Function that is called when theme toggler is clicked and changes the theme of the page
function changeTheme() {
    if (darkSwitch.checked) {
        //Body and header objects for dark mode
        document.body.style.backgroundColor = clrSecondary;
        header.style.backgroundColor = clrSecondary;
        if (changeMenuBool!=1) {
            mobileMenuPath.style.stroke = clrPrimary;
        }
        homeLink.style.color = clrPrimary;
        toolsLink.style.color = clrPrimary;
        nerdworkLink.style.color = clrPrimary;
        blackjackLink.style.color = clrPrimary;
        for (let span of langSpan) {
            span.style.color = clrPrimary;
        }
        for (let path of darkPath) {
            path.style.fill = clrPrimary;
        }
        accessSwitch.style.backgroundColor = clrPrimary;
        accessSpan.style.color = clrSecondary;

        //Home objects for dark mode
        homeWelcome.style.color = clrPrimary;
        homeName.style.color = clrPrimary;
        homeBio.style.color = clrPrimary;
        buttonGithubLink.style.color = clrSecondary;
        buttonGithubLink.style.backgroundColor = clrPrimary;
        buttonLinkedinLink.style.outline = "1px solid ".concat(clrPrimary);
        buttonLinkedinLink.style.color = clrPrimary;
        buttonLinkedinLink.style.backgroundColor = clrSecondary;

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

        //Projects objects for dark mode
        projectsTitle.style.color = clrPrimary;

        //Nerdwork objects for dark mode
        nerdworkTitle.style.color = clrPrimary;
        nerdworkBio.style.color = clrPrimary;
        nerdworkAward.style.color = clrPrimary;
        nerdworkGithubLink.style.backgroundColor = clrPrimary;
        nerdworkGithubLink.style.color = clrSecondary;

        //Blackjack objects for dark mode
        blackjackTitle.style.color= clrPrimary;
        blackjackBio.style.color = clrPrimary;
        blackjackGithubLink.style.backgroundColor = clrPrimary;
        blackjackGithubLink.style.color = clrSecondary;

        //Footer objects for dark mode
        footer.style.backgroundColor = clrPrimary;
        footerCopy.style.color = clrSecondary;
        footerNavHome.style.color = clrSecondary;
        footerNavTools.style.color = clrSecondary;
        footerNavProjects.style.color = clrSecondary;
        footerNavProject2.style.color = clrSecondary;
        for (let path of footerPath) {
            path.style.fill = clrSecondary;
        }
    }
    else {
        //Body and header objects for light mode
        document.body.style.backgroundColor = clrPrimary;
        header.style.backgroundColor = clrPrimary;
        if (changeMenuBool!=1) {
            mobileMenuPath.style.stroke = clrSecondary;
        }
        // If mobile menu is open, do not make nav li items' color secondary 
        if (changeMenuBool!=1) {
            homeLink.style.color = clrSecondary;
            toolsLink.style.color = clrSecondary;
            nerdworkLink.style.color = clrSecondary;
            blackjackLink.style.color = clrSecondary;
        }
        for (let span of langSpan) {
            span.style.color = clrSecondary;
        }
        for (let path of darkPath) {
            path.style.fill = clrSecondary;
        }
        accessSwitch.style.backgroundColor = clrSecondary;
        accessSpan.style.color = clrPrimary;

        //Home objects for light mode
        homeWelcome.style.color = clrSecondary;
        homeName.style.color = clrSecondary;
        homeBio.style.color = clrSecondary;
        buttonGithubLink.style.color = clrPrimary;
        buttonGithubLink.style.backgroundColor = clrSecondary;
        buttonLinkedinLink.style.backgroundColor = clrPrimary;
        buttonLinkedinLink.style.outline = "1px solid ".concat(clrSecondary);
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

        //Projects objects for light mode
        projectsTitle.style.color = clrSecondary;

        //Nerdwork objects for light mode
        nerdworkTitle.style.color = clrSecondary;
        nerdworkBio.style.color = clrSecondary;
        nerdworkAward.style.color = clrSecondary;
        nerdworkGithubLink.style.backgroundColor = clrSecondary;
        nerdworkGithubLink.style.color = clrPrimary;

        //Blackjack objects for light mode
        blackjackTitle.style.color= clrSecondary;
        blackjackBio.style.color = clrSecondary;
        blackjackGithubLink.style.backgroundColor = clrSecondary;
        blackjackGithubLink.style.color = clrPrimary;

        //Footer objects for dark mode
        footer.style.backgroundColor = clrSecondary;
        footerCopy.style.color = clrPrimary;
        footerNavHome.style.color = clrPrimary;
        footerNavTools.style.color = clrPrimary;
        footerNavProjects.style.color = clrPrimary;
        footerNavProject2.style.color = clrPrimary;
        for (let path of footerPath) {
            path.style.fill = clrPrimary;
        }
    }
}

// Makes font bigger or smaller
function changeAccess() {
    accessBool *= -1;

    if (accessBool==1) {
        document.body.style.fontSize = "1.25rem";
    }
    else {
        document.body.style.fontSize = "1rem";
    }
}

// Opens or closes the mobile menu
function changeMenu() {
    // Menu icon and nav list changes will be made only if user's screen is smaller than a specific number of pixels
    // This help to avoid problems with the top nav list when user visits the page from a desktop screen
    if (window.innerWidth <= 768) {
        changeMenuBool *= -1;

        homeLink.style.color = clrPrimary;
        toolsLink.style.color = clrPrimary;
        nerdworkLink.style.color = clrPrimary;
        blackjackLink.style.color = clrPrimary;

        if (changeMenuBool==1) {
            topNavUl.style.display = "block";
            mobileMenu.style.transform = "rotate(180deg)";
            mobileMenuPath.style.stroke = clrAlternative;
        }
        else {
            topNavUl.style.display = "none";
            mobileMenu.style.transform = "rotate(0deg)";
            // If user closes menu and site is in dark morde, then make menu icon white, else dark grey
            if (darkSwitch.checked) {
                mobileMenuPath.style.stroke = clrPrimary;
            }
            else {
                mobileMenuPath.style.stroke = clrSecondary;
            }
        }
    }
}
