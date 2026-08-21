function toggleDetails(button) {
    const clickedCard = button.closest(".pack-card");
    const clickedDetails = clickedCard.querySelector(".pack-details");

    const text = button.querySelector(".details-text");
    const icon = button.querySelector("span:last-child");

    const shouldOpen = !clickedDetails.classList.contains("open");

    clickedDetails.classList.toggle("open", shouldOpen);

    if (text) {
        text.textContent = shouldOpen
            ? "OCULTAR DETALLES"
            : "VER QUÉ INCLUYE";
    }

    if (icon) {
        icon.textContent = shouldOpen ? "−" : "+";
    }
}
