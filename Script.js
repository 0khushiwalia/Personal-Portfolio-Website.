// Smooth scrolling to sections when a navigation link is clicked
document.querySelectorAll("nav a").forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault(); // Prevent default link behavior
        // Extract target section ID from the link's href attribute
        const targetId = link.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            // Scroll smoothly to the target section
            targetSection.scrollIntoView({
                behavior: "smooth",
                block: "start", }); } }); });
// Form submission functionality
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    form.addEventListener("submit", (e) => {
        e.preventDefault(); // Prevent the page from refreshing and submitting
        // Get form field values
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;
        // Validate that all fields are filled
        if (!name || !email || !message) {
            alert("Please fill out all fields before submitting.");
            return; // Exit if any field is empty
}
        // Display a confirmation message
        alert(`Thank you, ${name}! Your message has been sent to Miss. Khushi.`);
        // Optionally, clear the form fields after submission
        form.reset(); }); });