let up_scroll = document.getElementById("up-scroll"),
    docElem = document.documentElement,
    offset = 100, scrollPos, docHeight;

docHeight = Math.max(docElem.clientHeight, docElem.offsetHeight, docElem.scrollHeight);
if (docHeight != "undefined") {
    offset = docHeight / 4;
}
window.addEventListener("scroll", function(event) {
    scrollPos = docElem.scrollTop;
    up_scroll.className= (scrollPos > offset) ? "visible" : "";
});
up_scroll.addEventListener("click", function(event) {
    docElem.scrollTop = 0;
})