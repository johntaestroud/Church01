// lock screen
const lockScreen = document.getElementById('lock-screen');
  const passwordInput = document.getElementById('password-input');
  const correctPassword = "1"; // Replace with your actual password
  
  // Function to show the lock screen
  function showLockScreen() {
    lockScreen.style.display = 'block';
  }

  // Function to hide the lock screen
  function hideLockScreen() {
    lockScreen.style.display = 'none';
  }

  // Function to unlock the page
  function unlockPage() {
    if (passwordInput.value === correctPassword) {
      hideLockScreen();
    } else {
      alert("Incorrect password. Please try again.");
    }
  }
  
  // Show the lock screen on page load (or any other trigger)
  document.addEventListener('DOMContentLoaded', showLockScreen);


/**** 
 Content section
*****/

// utlity
function qs(elem) {
  return document.querySelector(elem);
}
function qsa(elem) {
  return document.querySelectorAll(elem);
}

// globals
var activeCon = 0,
totalCons = 0;

// elements
const v_cons = qsa(".video-con"),
a_cons = qsa(".active-con"),
v_count = qs("#video-count"),
info_btns = qsa("#lower-info div"),
drop_icon = qs("#drop-icon"),
video_list = qs("#v-list"),
display = qs("#display-frame");

// activate container
function activate(con) {
  deactivateAll();
  indexAll();
  countVideos(con.querySelector(".index").innerHTML);
  con.classList.add("active-con");
  con.querySelector(".index").innerHTML = "►";
}
// deactivate all container
function deactivateAll() {
  v_cons.forEach(container => {
    container.classList.remove("active-con");
  });
}
// index containers
function indexAll() {
  var i = 1;
  v_cons.forEach(container => {
    container.querySelector(".index").innerHTML = i;
    i++;
  });
}
// update video count
function countVideos(active) {
  v_count.innerHTML = active + " / " + v_cons.length;
}
// icon activate
function toggle_icon(btn) {
  if (btn.classList.contains("icon-active")) {
    btn.classList.remove("icon-active");
  } else btn.classList.add("icon-active");
}
// toggle video list
function toggle_list() {
  if (video_list.classList.contains("li-collapsed")) {
    drop_icon.style.transform = "rotate(0deg)";
    video_list.classList.remove("li-collapsed");
  } else {
    drop_icon.style.transform = "rotate(180deg)";
    video_list.classList.add("li-collapsed");
  }
}
function loadVideo(url) {
  display.setAttribute("src", url);
}

//******************
// Main Function heres
//******************
window.addEventListener("load", function () {
  // starting calls
  indexAll(); // container indexes
  countVideos(1);
  activate(v_cons[0]);
  loadVideo(v_cons[0].getAttribute("video"));

  // Event handeling goes here
  // on each video container click
  v_cons.forEach(container => {
    container.addEventListener("click", () => {
      activate(container);
      loadVideo(container.getAttribute("video"));
    });
  });
  // on each button click
  info_btns.forEach(button => {
    button.addEventListener("click", () => {
      toggle_icon(button);
    });
  });
  // drop icon click
  drop_icon.addEventListener("click", () => {
    toggle_list();
  });
});

// Resource
// Copyright (c) YEAR - YOUR NAME - https://codepen.io/RIR360/full/GRWNxpo

// Permission is hereby granted, free of charge, to any person 
// obtaining a copy of this software and associated documentation 
// files (the "Software"), to deal in the Software without restriction,
//  including without limitation the rights to use, copy, modify, 
// merge, publish, distribute, sublicense, and/or sell copies of 
// the Software, and to permit persons to whom the Software is 
// furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall 
// be included in all copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, 
// EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES 
// OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND 
// NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT 
// HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, 
// WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, 
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER 
// DEALINGS IN THE SOFTWARE. 