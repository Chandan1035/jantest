pic1 = document.getElementById('pic1');
function p1c() {
  fr();
}

const form = document.querySelector("#form");
const coupon = document.querySelector("#coupon");
const image1 = document.querySelector(".image-1");
const image4 = document.querySelector(".image-4");

image1.addEventListener("click", function() {
  form.style.display = "block";
});

image4.addEventListener("click", function() {
  coupon.style.display = "block";
  coupon.innerHTML = Math.floor(Math.random() * 1000000000000);
});
