let box = document.querySelector('.box'); // Add a dot before 'box'
window.onmousemove = function(e) {
    let x = e.clientX / 3;
    box.style.transform = "perspective(1000px) rotateY(" + x + "deg)";
}
