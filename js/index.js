//переменные----------------------------------------------------
const burgerClick = document.querySelector(".header__burger");
const scrollLock = document.querySelector(".page-body");
const mobMenu = document.querySelector(".header__nav");

//открытие бургера
burgerClick.addEventListener("click", () => {
  burgerClick.classList.toggle("active");
  mobMenu.classList.toggle("active");
  scrollLock.classList.toggle("lock");
});

// Получаем все ссылки с классом 'header__link'
const links = document.querySelectorAll(".header__link");

// Перебираем все ссылки
links.forEach((link) => {
  // Добавляем обработчик событий на клик
  link.addEventListener("click", function (event) {
    burgerClick.classList.remove("active");
    mobMenu.classList.remove("active");
    scrollLock.classList.remove("lock");
    // Удаляем класс 'active' у всех ссылок и секций
    links.forEach((link) => {
      link.classList.remove("active");
    });
    document.querySelectorAll("section").forEach((section) => {
      section.classList.remove("active");
    });
    // Добавляем класс 'active' к текущей ссылке
    this.classList.add("active");

    // Находим секцию с соответствующим id
    const section = document.getElementById(this.dataset.jac);

    // Если секция найдена, добавляем ей класс 'active'
    if (section) {
      section.classList.add("indent");
    }
  });
});

const smallImages = document.querySelectorAll(".small-images img");
const elementMImg = document.querySelector(".element-m-img");

smallImages.forEach((img) => {
  img.addEventListener("click", function () {
    const newSrc = this.getAttribute("data-src");
    elementMImg.src = newSrc;
  });
});
