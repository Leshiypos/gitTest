$(document).ready(function(){
  /* Вторичное меню */
  const menu = document.querySelector(".menu__list");
  var menuact = $(".menu__list .active"); //устанавливаем подчеркивания на активную ссылку
  var x = menuact.width() + "px"; //определяем ширину текущей ссылки
  var y = menuact[0].offsetLeft + "px"; // определяем расстояние от края текущй ссылки до края блока (чтобы обратится к  свойству offsetLeft тк это свойство JS а не JQ то к элементу DOM  нужно обратится как к массиву - те через 0 элемент)
  menu.style.setProperty("--underline-width", x); // устанавливаем значение для переменной CSS
  menu.style.setProperty("--underline-offset-x", y);// устанавливаем значение для переменной CSS

    menu.addEventListener("mouseover", (event) => {             // обработчик события наведения на ссылку
      if (event.target.classList.contains("menu__link")) {
        menu.style.setProperty(
          "--underline-width",
          `${event.target.offsetWidth}px`
        );
        menu.style.setProperty(
          "--underline-offset-x",
          `${event.target.offsetLeft}px`
        );
      }
    });

    menu.addEventListener("mouseleave", () =>{                // обработчик события при сходе с сылки
      menu.style.setProperty("--underline-width", x);
      menu.style.setProperty("--underline-offset-x", y)
    }
    );
});