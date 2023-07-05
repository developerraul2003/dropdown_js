let selectedMenu = document.querySelector(".menu_select");
let selectedMenuText = document.querySelector("p");
let optionMenu = document.querySelector(".menu_options");

selectedMenu.addEventListener("click", () => {
  optionMenu.classList.toggle("active");

  let items = optionMenu.querySelectorAll(".option>p");
  items.forEach((elem,index) => {
    elem.style=`--i: ${index}`;
    elem.addEventListener("mouseover", () => {
      selectedMenu.innerText = elem.textContent;
      //   optionMenu.classList.remove("active");
    });
    elem.addEventListener("click", () => {
      selectedMenu.innerText = elem.textContent;
      optionMenu.classList.remove("active");
    });
  });
});
