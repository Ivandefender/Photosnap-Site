const headerNav = document.querySelector(".header__nav");
const headerNavList = document.querySelector(".header__nav-list");
const headerBtn = document.querySelector(".header__btn");

const burgerBtn = document.querySelector(".header__burger");
const closeBtn = document.querySelector(".header__close");

burgerBtn.addEventListener("click", () => {
  headerNav.style.display = "block";
  headerNavList.style.display = "flex";
  headerBtn.style.display = "block";
  closeBtn.style.display = "block";
  burgerBtn.style.display = "none";
});

closeBtn.addEventListener("click", () => {
  headerNav.style.display = "none";
  headerNavList.style.display = "none";
  headerBtn.style.display = "none";
  closeBtn.style.display = "none";
  burgerBtn.style.display = "block";
});

const btnPlan = document.querySelector(".checkbox__plan");
const itemsPrice = document.querySelectorAll(".item__price");

btnPlan.addEventListener("click", () => {
  btnPlan.checked = btnPlan.checked;
  console.log(btnPlan.checked);
  if (btnPlan.checked === true) {
    itemsPrice[0].textContent = "$190.00";
    itemsPrice[1].textContent = "$390.00";
    itemsPrice[2].textContent = "$990.00";
  } else {
    itemsPrice[0].textContent = "$19.00";
    itemsPrice[1].textContent = "$39.00";
    itemsPrice[2].textContent = "$99.00";
  }
});
