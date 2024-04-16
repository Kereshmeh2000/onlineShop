// // importImages.js
// import React from 'react';

// function importAll(r) {
//     let images = {};
//     r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
//     return images;
//   }
  
//   const images = importAll(require.context('./images', false, /\.(jpg)$/));

  
// openMenu.js
export  function openMenu() {
  document.getElementById("side-navigation-drawer").style.width = "300px";
}

// closeMenu.js
export  function closeMenu() {
  document.getElementById("side-navigation-drawer").style.width = "0";
}

// topFunction.js
export  function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
