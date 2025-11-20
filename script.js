function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
}

// New functions for the Contact Modal
function showContactDialog() {
    const dialog = document.getElementById('contactDialog');
    dialog.showModal(); // Natively opens the dialog as a modal
}

function closeContactDialog() {
    const dialog = document.getElementById('contactDialog');
    dialog.close(); // Natively closes the dialog
}



