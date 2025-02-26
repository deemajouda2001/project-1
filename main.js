


document.addEventListener("DOMContentLoaded", function () {
    let navLinks = document.querySelectorAll(".nav-link");

    window.addEventListener("scroll", () => {
        let current = "";

        document.querySelectorAll("section").forEach((section) => {
            const sectionTop = section.offsetTop;
            if (window.scrollY >= sectionTop - 100) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href").includes(current)) {
                link.classList.add("active");
            }
        });
    });
});













document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll(".counter");
    
    counters.forEach(counter => {
        counter.innerText = "0";
        const updateCounter = () => {
            const target = +counter.getAttribute("data-target");
            const count = +counter.innerText;
            const increment = target / 100;

            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(updateCounter, 20);
            } else {
                counter.innerText = target;
            }
        };
        updateCounter();
    });
});










document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();
    
    let name = document.getElementById("name").value;
    let subject = document.getElementById("subject").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (name && subject && email && message) {
        alert("Message Sent Successfully!");
        document.getElementById("contactForm").reset();
    } else {
        alert("Please fill out all fields.");
    }
});









function subscribe() {
    let email = document.getElementById("newsletterEmail").value;
    
    if (email === "") {
        alert("Please enter your email.");
    } else {
        alert("Thank you for subscribing!");
        document.getElementById("newsletterEmail").value = "";
    }
}
