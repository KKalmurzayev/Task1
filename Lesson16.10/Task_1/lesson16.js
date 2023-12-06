var main = document.querySelector("main");
main.style.backgroundColor = "turquoise";
main.style.borderRadius = "20px";
main.style.position = "fixed";
main.style.width = "800px";
main.style.marginLeft = "400px";
main.style.marginTop = "50px";
main.style.position = "absolute";

let header = document.createElement("h1");
header.innerText = "Enter your name (name can't contain digits):";
header.style.margin = "10px";
header.style.textAlign = "center"


let loginInput = document.createElement("input");
loginInput.type = "text";
loginInput.placeholder = "Enter your fullname";
loginInput.style.width = "600px";
loginInput.style.height = "50px";
loginInput.style.margin = "30px";
loginInput.style.marginLeft = "80px";
loginInput.style.paddingLeft = "50px";
loginInput.style.bordeRadius = "10px";
if (isNaN(loginInput)) {
    text = "Input not valid";
} else {
    text = " ";
}
document.getElementsByClassName("input").innerHTML = text;

console.log(header);

main.append(header, loginInput)


