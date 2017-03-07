function hasClass(ele, cls) {
  return !!ele.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
}

function addClass(ele, cls) {
  if (!hasClass(ele, cls)) ele.className += " " + cls;
}

function removeClass(ele, cls) {
  if (hasClass(ele, cls)) {
    var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
    ele.className = ele.className.replace(reg, ' ');
  }
}

function toggleMenu() {
  var ele = document.getElementsByTagName('body')[0];
  if (!hasClass(ele, "slide-menu-open")) {
    addClass(ele, "slide-menu-open");
  } else {
    removeClass(ele, "slide-menu-open");
  }
}

document.addEventListener('readystatechange', function() {
  if (document.readyState === "complete") {
    init();
  }
});

function init() {
  // toggle menu on click
  document.getElementById("slide-menu-toggle").addEventListener("click", toggleMenu);

  // close menu on body click
  document.addEventListener('click', (event) => {
    let slideMenu = document.querySelector("#slide-menu");
    var isClickInside = slideMenu.contains(event.target) || event.target == document.getElementById("slide-menu-toggle");
    if(isClickInside) return;
    if(hasClass(document.body, 'slide-menu-open')) {
      removeClass(document.body, 'slide-menu-open')
    }
  });
}
