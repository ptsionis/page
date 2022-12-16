"use strict";

const clrPrimary = "#f8fafb";
const clrSecondary = "#1e1e1e";
const clrAlternative = "#ed0735";

const themeSwitch = document.getElementById("theme-switch");
themeSwitch.addEventListener("click", changeTheme);

const mobileMenu = document.getElementById("nav-menu");
mobileMenu.addEventListener("click", toggleMenu);
let mobileBool = 0;
const mobileMenuPath = document.getElementById("mobile-menu-path");
const navUl = document.getElementById("nav-ul");

const bgClrP = document.getElementsByClassName("bg-clr-p");
const bgClrS = document.getElementsByClassName("bg-clr-s");
const clrP = document.getElementsByClassName("clr-p");
const clrS = document.getElementsByClassName("clr-s");
const fillP = document.getElementsByClassName("fill-p");
const fillS = document.getElementsByClassName("fill-s");
const btnP = document.getElementsByClassName("btn-p");
const btnS = document.getElementsByClassName("btn-s");

function changeTheme() {
    if (themeSwitch.checked) {
        mobileMenuPath.style.stroke = clrSecondary;
        [].forEach.call(bgClrP, function (element) {
            element.style.backgroundColor = clrSecondary;
        });
        [].forEach.call(bgClrS, function (element) {
            element.style.backgroundColor = clrPrimary;
        });
        [].forEach.call(clrP, function (element) {
            element.style.color = clrSecondary;
        });
        [].forEach.call(clrS, function (element) {
            element.style.color = clrPrimary;
        });
        [].forEach.call(fillP, function (element) {
            element.style.fill = clrSecondary;
        });
        [].forEach.call(fillS, function (element) {
            element.style.fill = clrPrimary;
        });
        [].forEach.call(btnP, function (element) {
            element.style.backgroundColor = clrSecondary;
            element.style.color = clrPrimary;
            element.style.border = "3px solid" + clrPrimary;
        });
        [].forEach.call(btnS, function (element) {
            element.style.backgroundColor = clrPrimary;
            element.style.color = clrSecondary;
            element.style.border = "3px solid" + clrPrimary;
        });
    }
    else {
        mobileMenuPath.style.stroke = clrPrimary;
        [].forEach.call(bgClrP, function (element) {
            element.style.backgroundColor = clrPrimary;
        });
        [].forEach.call(bgClrS, function (element) {
            element.style.backgroundColor = clrSecondary;
        });
        [].forEach.call(clrP, function (element) {
            element.style.color = clrPrimary;
        });
        [].forEach.call(clrS, function (element) {
            element.style.color = clrSecondary;
        });
        [].forEach.call(fillP, function (element) {
            element.style.fill = clrPrimary;
        });
        [].forEach.call(fillS, function (element) {
            element.style.fill = clrSecondary;
        });
        [].forEach.call(btnP, function (element) {
            element.style.backgroundColor = clrPrimary;
            element.style.color = clrSecondary;
            element.style.border = "3px solid" + clrSecondary;
        });
        [].forEach.call(btnS, function (element) {
            element.style.backgroundColor = clrSecondary;
            element.style.color = clrPrimary;
            element.style.border = "3px solid" + clrSecondary;
        });
    }
}

function toggleMenu() {
    if (!mobileBool) {
        mobileMenu.style.transform = "rotate(180deg)";
        navUl.style.display = "flex";
        mobileBool = 1;
    }
    else {
        mobileMenu.style.transform = "rotate(0deg)";
        navUl.style.display = "none";
        mobileBool = 0;
    }
}

(() => {
    document.getElementById("footer-copy").innerHTML = "&copy; " + new Date().getFullYear() + " Panagiotis Tsionis";
})();