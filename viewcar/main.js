
const button = document.getElementById("bookBtn");

button.addEventListener("click", function () {

    if (daysSpan.textContent == 0) {
        return;
    }

    localStorage.setItem("days", daysSpan.textContent);
    localStorage.setItem("total", totalSpan.textContent);

    window.location.href = "/payementpg/index.html";
});

const startInput = document.getElementById("start");
const endInput = document.getElementById("end");

document.getElementById("bookBtn").addEventListener("click", function () {

    const start = new Date(startInput.value);
    const end = new Date(endInput.value);

    let diffTime = end - start;
    let diffDays = diffTime / (1000 * 60 * 60 * 24);

    if (diffDays <= 0) diffDays = 1;

    const pricePerDay = 150;
    const total = diffDays * pricePerDay;

    // 🔥 نخزنو
    localStorage.setItem("days", diffDays);
    localStorage.setItem("total", total);

    // 🔥 تمشي لـ payment
    window.location.href = "/payementpg/index.html";
});