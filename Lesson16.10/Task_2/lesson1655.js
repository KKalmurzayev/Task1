// Получить модальный
var modal = document.getElementById("main");
modal.style.width = "700px";
modal.style.height = "200px";
modal.style.display = "none";
modal.style.position = "fixed";
modal.style.zIndex = "1";
modal.style.left = "55px";
modal.style.top = "0";
modal.style.backgroundColor = "rgba(0,0,0)"
modal.style.backgroundColor = "rgba(0,0,0,0.4)";

// Получить кнопку, которая открывает модальный
var button = document.getElement("button");
button.innerText = "Open Modal";
button.style.marginLeft = "130px";
button.style.height = "40px"
button.style.marginTop = "20px";
button.style.marginBottom = "20px";
button.style.backgroundColor = "lightgreen"
button.style.borderRadius = "5px";
button.style.width = "100px";
button.style.display = "block"
button.style.position = "fixed";
button.style.fontSize = "16px"
button.style.fontWeight = "bolder"





// Получить элемент <span>, который закрывает модальный
var span = document.getElementById("closeBtn");
span.style.width = "300px";
span.style.height = "30px"

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


main.append(modal, button)