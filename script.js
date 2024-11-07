// Mortgage Calculator Function
function calculateMortgage() {
    const loanAmount = parseFloat(document.getElementById("loan-amount").value);
    const interestRate = parseFloat(document.getElementById("interest-rate").value) / 100 / 12;
    const loanTerm = parseFloat(document.getElementById("loan-term").value) * 12;

    const monthlyPayment = loanAmount * interestRate / (1 - Math.pow((1 + interestRate), -loanTerm));

    document.getElementById("monthly-payment").innerText = `Monthly Payment: $${monthlyPayment.toFixed(2)}`;
}

// Scroll Animation with Staggered Effect
document.addEventListener("scroll", () => {
    const sections = document.querySelectorAll(".section");
    sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            setTimeout(() => {
                section.classList.add("show");
            }, index * 200); // we canb adjust this
        } else {
            section.classList.remove("show"); // Optional: remove class when scrolled out
        }
    });
});

// Contact Form Submit Event
document.getElementById("viewing-form").addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Your viewing request has been submitted!");
    document.getElementById("viewing-form").reset();
});
