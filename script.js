function toggleDetails(button) {

    const allDetails = document.querySelectorAll(".pack-details");
    const allButtons = document.querySelectorAll(".details-button");

    const clickedCard = button.closest(".pack-card");
    const clickedDetails = clickedCard.querySelector(".pack-details");

    const shouldOpen = !clickedDetails.classList.contains("open");

    allDetails.forEach((details) => {

        if (shouldOpen) {
            details.classList.add("open");
        } else {
            details.classList.remove("open");
        }

    });


    allButtons.forEach((button) => {

        const text = button.querySelector(".details-text");
        const icon = button.querySelector("span");

        if (shouldOpen) {

            if (text) {
                text.textContent = "OCULTAR DETALLES";
            }

            if (icon) {
                icon.textContent = "−";
            }

        } else {

            if (text) {
                text.textContent = "VER QUÉ INCLUYE";
            }

            if (icon) {
                icon.textContent = "+";
            }

        }

    });

}
