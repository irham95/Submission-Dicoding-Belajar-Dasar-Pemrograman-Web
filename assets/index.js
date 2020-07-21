let card = document.querySelectorAll('.card');
for (cards of card) {
    cards.addEventListener('mouseover', function (event) {
        if (event.target.id === "aini") {
            event.target.setAttribute("src", "assets/image/5aini5new.jpg");
            return;
        } else if (event.target.id === "ragam") {
            event.target.setAttribute("src", "assets/image/9ragam9new.jpg");
            return;
        }
    });

    cards.addEventListener('mouseout', function (event) {
        if (event.target.id === "aini") {
            event.target.setAttribute("src", "assets/image/5aini5.jpg");
            return;
        }
        if (event.target.id === "ragam") {
            event.target.setAttribute("src", "assets/image/9ragam9.jpg");
            return;
        }
    });
}