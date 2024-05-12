var acc = document.getElementsByClassName("cate");
var i;
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var cate_accord = this.nextElementSibling;
    if (cate_accord.style.display === "block") {
      cate_accord.style.display = "none";
    } else {
      cate_accord.style.display = "block";
    }
  });
}

var a = document.getElementsByClassName("website");
var i;
for (i = 0; i < a.length; i++) {
  a[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var togg = this.nextElementSibling;
    if (togg.style.display === "block") {
      togg.style.display = "none";
    } else {
      togg.style.display = "block";
    }
  });
}


var b = document.getElementsByClassName("primary");
var i;
for (i = 0; i < a.length; i++) {
  b[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var pri = this.nextElementSibling;
    if (pri.style.display === "block") {
      pri.style.display = "none";
    } else {
      pri.style.display = "block";
    }
  });
}