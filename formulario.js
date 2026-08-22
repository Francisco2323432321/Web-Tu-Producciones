const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbz9XMnPlCbh78RgeoUnwjeCdzMdLqhBhJjCZ_DUD3n3or46OFqLdwZlyjpVFIow7IQr/exec";

const form = document.querySelector("#production-form");
const statusBox = document.querySelector("#form-status");
const videoSection = document.querySelector(".conditional-video");
const locationSection = document.querySelector(".conditional-location");
const planInputs = document.querySelectorAll('input[name="plan"]');

planInputs.forEach((input) => {
    input.addEventListener("change", () => {
        document.querySelectorAll(".plan-option").forEach((option) => option.classList.remove("selected"));
        input.closest(".plan-option").classList.add("selected");
        setSectionVisible(videoSection, input.hasAttribute("data-video"));
        setSectionVisible(locationSection, input.hasAttribute("data-location"));
    });
});

setSectionVisible(videoSection, false);
setSectionVisible(locationSection, false);

form.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    if (form.elements.website.value) return;

    if (!APPS_SCRIPT_URL.startsWith("https://script.google.com/")) {
        showStatus("Primero tenés que configurar la URL de Google Apps Script.", "error");
        return;
    }

    const button = form.querySelector('button[type="submit"]');
    button.disabled = true;
    button.textContent = "ENVIANDO...";

    const data = new FormData(form);
    data.set("fechaEnvio", new Date().toISOString());

    try {
        await fetch(APPS_SCRIPT_URL, { method: "POST", mode: "no-cors", body: data });
        form.reset();
        document.querySelectorAll(".plan-option").forEach((option) => option.classList.remove("selected"));
        setSectionVisible(videoSection, false);
        setSectionVisible(locationSection, false);
        showStatus("Recibimos tu solicitud. Te contactaremos para revisar los detalles.", "success");
        window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (error) {
        showStatus("No pudimos enviar la solicitud. Intentá nuevamente.", "error");
    } finally {
        button.disabled = false;
        button.textContent = "ENVIAR SOLICITUD";
    }
});

function showStatus(message, type) {
    statusBox.textContent = message;
    statusBox.className = `status ${type}`;
    statusBox.hidden = false;
}

function setSectionVisible(section, visible) {
    section.hidden = !visible;
    section.querySelectorAll("input, textarea, select").forEach((field) => {
        field.disabled = !visible;
        if (!visible && (field.type === "checkbox" || field.type === "radio")) {
            field.checked = false;
        }
    });
}
