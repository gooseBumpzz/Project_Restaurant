import "./styles.css";
console.log("Hello friend. Your webpack bundler is working!")

import { loadHome } from "./home.js";
loadHome ();
import { loadMenu } from "./menu.js";
// loadMenu();
import { loadAbout } from "./about.js";
// loadAbout();


function wipeOut (){
    const content = document.getElementById('content');
    content.innerHTML = "";  
}

// function clearContent() {
//     const content = document.getElementsById("content")
//     while (content.firstChild) {
//         content.removeChild(content.firstChild)
//     }
// }

const homeButton = document.getElementById("headHome");
homeButton.addEventListener("click", wipeOut)
homeButton.addEventListener("click", loadHome);

const menuButton = document.getElementById("headMenu");
menuButton.addEventListener("click", wipeOut);
menuButton.addEventListener("click", loadMenu);

const aboutButton = document.getElementById("headAbout");
aboutButton.addEventListener("click", wipeOut);
aboutButton.addEventListener("click", loadAbout);