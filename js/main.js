let a = document.getElementsByClassName("fa-bars")[0];
let b = document.querySelector("ul");
let sev = document.querySelector(".sev");
a.onclick = () => {
    if (b.style.display === "block") b.style.display = "none"
    else {
        b.style.display = "block"
    }
}
let mybutton = document.querySelector("button");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}
mybutton.onclick = () => {
    document.documentElement.scrollTop = 0;
}

// let link = document.querySelector("[href='#sefgrvices']");
// link.onclick = () => {
//     let rect = sev.getBoundingClientRect();
//     window.scrollTo({
//         top: rect.top,
//         left: rect.bottom,
//         behavior: "smooth"
//     })
// }
// console.log(link)