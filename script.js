$(document).ready(function() {
  document.getElementById("Active User").innerHTML = "Johnathan Douglas";
})

function expandMenu() {
  var popouts = document.getElementsByClassName("Popout")
  for (var i = 0; i < popouts.length; i++) {
    popouts.item(i).classList.add("show")
  }
}

function expandItem(className) {
  console.log(className.innerHTML)
  var item = document.getElementsByClassName(className.innerHTML)
  for (var i = 0; i < item.length; i++) {
    item.item(i).classList.add("expand")
  }
}

document.onclick = function(event) {
  var target = 'target' in event ? event.target : event.srcElement;
  if (target.classList.contains("SelectionHref")) {
    window.location.href = "selection.html";
  }
  if (!target.classList.contains("menuKept")) {
    var popouts = document.getElementsByClassName("Popout")
    for (var i = 0; i < popouts.length; i++) {
      popouts.item(i).classList.remove("show")
    }
  }
  if (!target.classList.contains("ItemKeepOne")) {
    var popouts = document.getElementsByClassName("MainItemOne")
    for (var i = 0; i < popouts.length; i++) {
      popouts.item(i).classList.remove("expand")
    }
  }
  if (!target.classList.contains("ItemKeepTwo")) {
    var popouts = document.getElementsByClassName("MainItemTwo")
    for (var i = 0; i < popouts.length; i++) {
      popouts.item(i).classList.remove("expand")
    }
  }
};
