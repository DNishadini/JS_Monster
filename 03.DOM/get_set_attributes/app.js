//select the anchor tag
const a = document.querySelector("a");

//Use getAttribute(attrName) to check the attribute

console.log(a.getAttribute("href"));

//Select a-two & set "href" attribute
const a2 = document.querySelector(".a-two");
a2.setAttribute("href", "https://www.youtube.com/@huxnwebdev");
console.log(a2);
