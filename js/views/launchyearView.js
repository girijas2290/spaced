import { elements } from './base';

export const getInput = () => elements.space_btn.value;

const filterSelection=id=> {
  let element, i;
        element= document.getElementsByClassName("space_btn");
        if (id===element.value) 
            element = "";
        // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
        for (i = 0; i < element.length; i++) {
            w3RemoveClass(element[i], "show");
            if (element[i].className.indexOf(element) > -1) 
            w3AddClass(element[i], "show");
        }
}

console.log(filterSelection);
// Show filtered elements
function w3AddClass(element, name) {
  let i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current control button (highlight it)
let btnContainer = document.getElementById("btn__group");
let btns = btnContainer.getElementsByClassName("space__btn");
for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}