var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.querySelectorAll("li");
var close = document.querySelectorAll(".fa");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	var i = document.createElement("i");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
	i.classList.add("fa");
	i.classList.add("fa-trash");
	i.addEventListener("click",removeListAfterClick);
	li.appendChild(i);
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function toggleAfterClick(event) {
	var element = event.target; 
		element.classList.toggle("done");
}

function removeListAfterClick(event) {
	event.target.parentNode.remove();
}

function closeLength() {
	return close.length;
}

function clearList() {
	ul.innerHTML = "";
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

ul.addEventListener("click", toggleAfterClick);

for (let i = 0; i < closeLength(); i++) {
    close[i].addEventListener("click", removeListAfterClick);
}