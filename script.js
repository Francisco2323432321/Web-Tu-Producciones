function toggleDetails(button) {

    const card = button.closest(".pack-card");
    const details = card.querySelector(".pack-details");

    details.classList.toggle("open");

    if (details.classList.contains("open")) {

        button.querySelector("span").textContent = "−";
        button.firstChild.textContent = "Ocultar detalles ";

    } else {

        button.querySelector("span").textContent = "+";
        button.firstChild.textContent = "Ver qué incluye ";

    }

}
