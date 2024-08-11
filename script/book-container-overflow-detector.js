document.addEventListener("DOMContentLoaded", function() {
    const bookContainers = document.querySelectorAll(".book-container");
    bookContainers.forEach(container => {
        if (isOverflowing(container)) {
            container.style.flexDirection = "column";
            container.style.alignItems = "center";
        }
    });
});


window.addEventListener('resize', function() {
    const bookContainers = document.querySelectorAll(".book-container");
    bookContainers.forEach(container => {
        if (isOverflowing(container)) {
            container.style.flexDirection = "column";
            container.style.alignItems = "center";
        } else {
            container.style.flexDirection = "row";
        }
    });
});


function isOverflowing(element) {
    return element.scrollHeight > element.clientHeight || element.scrollWidth > element.clientWidth;
}