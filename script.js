function toggleDetails(button) {
    const card = button.closest(".pack-card");

    if (!card) return;

    const details = card.querySelector(".pack-details");
    const text = button.querySelector(".details-text");
    const icon = button.querySelector("span:last-child");

    if (!details) return;

    const shouldOpen = !details.classList.contains("open");

    details.classList.toggle("open", shouldOpen);
    button.setAttribute("aria-expanded", String(shouldOpen));

    if (text) {
        text.textContent = shouldOpen
            ? "OCULTAR DETALLES"
            : "VER QUÉ INCLUYE";
    }

    if (icon) {
        icon.textContent = shouldOpen ? "−" : "+";
    }
}
