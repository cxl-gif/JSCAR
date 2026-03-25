const startInput = document.getElementById("start");
const endInput = document.getElementById("end");

document.querySelector("button").addEventListener("click", function () {
    const start = new Date(startInput.value);
    const end = new Date(endInput.value);

    const diffTime = end - start;
    const days = diffTime / (1000 * 60 * 60 * 24);

    const total = days * 150;

    localStorage.setItem("days", days);
    localStorage.setItem("total", total);

    window.location.href = "/payementpg/index.html";
});