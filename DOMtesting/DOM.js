const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);


const redText = document.createElement("p");
redText.textContent = "Hey I'm red!";
redText.style.color = "red";
document.body.appendChild(redText);


const blueHeading = document.createElement ("h3");
blueHeading.textContent = "I'm a blue h3";
blueHeading.style.color = "blue";
document.body.appendChild(blueHeading);


const heading = document.createElement ("h1");
heading.textContent = "I'm in a div";

const text = document.createElement("p");
text.textContent = "ME TOO";




const blackDiv = document.createElement("div");
blackDiv.style.outline = "black solid 3px";

blackDiv.appendChild(heading);
blackDiv.appendChild(text);

document.body.appendChild(blackDiv);

