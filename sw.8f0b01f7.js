webpackJsonp([4,5],{576:/*!****************************!*\
  !*** ./src/sw-register.js ***!
  \****************************/
function(e,o,i){"use strict";"serviceWorker"in navigator&&navigator.serviceWorker.register("./sw.js").then(function(e){console.log("Registration succeeded. Scope is "+e.scope)}).catch(function(e){console.log("Registration failed with "+e)})}},[576]);