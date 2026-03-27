
const startInput = document.getElementById("start");
const endInput = document.getElementById("end");
const btn = ocument.querySelector("button");

btn.addEventListener("click", function () {

    const start = new Date(startInput.value);
    const end = new Date(endInput.value);

    const diffTime = end - start;
    const days = diffTime / (1000 * 60 * 60 * 24);

    const total = days * 150;

    localStorage.setItem("days", days);
    localStorage.setItem("total", total);

    window.location.href = "/payementpg/index.html";
});


const name = localStorage.getItem("carName");
const img = localStorage.getItem("carImg");
const price = localStorage.getItem("carPrice");
const fuel = localStorage.getItem("carFuel");
const seats = localStorage.getItem("carSeats");
const desc = localStorage.getItem("carDesc");
const transmission = localStorage.getItem("cartrans");
const category = localStorage.getItem("carcategory");


document.getElementById("car-transmission").textContent = transmission;
document.getElementById("car-category").textContent = category;

document.getElementById("car-name").textContent = name;
document.getElementById("car-sub").textContent = name + " 2024";
document.getElementById("car-price").textContent = "$" + price;

document.getElementById("main-car").src = img;

document.getElementById("car-fuel").textContent = fuel;
document.getElementById("car-seats").textContent = seats;
document.getElementById("car-description").textContent = desc;