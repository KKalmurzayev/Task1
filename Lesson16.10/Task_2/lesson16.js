// Получить модальный
var modal = document.getElementById("myModal");
modal.style.width = "600px";
modal.style.display = "none";
modal.style.position = "fixed";
modal.style.zIndex = "1";
modal.style.left = "55px";
modal.style.top = "30px";
modal.style.backgroundColor = "rgba(0,0,0)"
modal.style.backgroundColor = "rgba(0,0,0,0.4)";
modal.style.textAlign = "center";
modal.style.paddingTop = "50px";

// Получить кнопку, которая открывает модальный
var btn = document.getElementById("myBtn");
btn.style.marginLeft = "70px"
btn.style.width = "100px";
btn.style.height = "30px";
btn.style.marginTop = "40px";



// Получить элемент <span>, который закрывает модальный
var span = document.getElementById("closeBtn");
span.style.width = "300px";
span.style.height = "30px";
span.style.marginTop = "20px";

// Когда пользователь нажимает на кнопку, откройте модальный
btn.onclick = function () {
  modal.style.display = "block";

}

// Когда пользователь нажимает на <span> (x), закройте модальное окно
span.onclick = function () {
  modal.style.display = "none";
}

// Когда пользователь щелкает в любом месте за пределами модального, закройте его
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}