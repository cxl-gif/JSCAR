
let car = JSON.parse(localStorage.getItem("selectedCar"));

const startInput = document.getElementById("start");
const endInput = document.getElementById("end");
const btn = document.querySelector("button");
btn.addEventListener("click", function () {

    // kat7awwel text dyal date l date 7aqiqi li n9dro nkhdmo 3liha
    // const year = myDate.getFullYear();

    const end = new Date(endInput.value);
    const start = new Date(startInput.value);

    const diffTime = end - start;
    const days = diffTime / (1000 * 60 * 60 * 24);

    const total = days * +car.price;

    localStorage.setItem("days", days);
    localStorage.setItem("total", total);

    window.location.href = "/payementpg/index.html";
});

const maincar = document.getElementById("main-car");
const carlook1 = document.getElementById("car-look1");
const carlook2 = document.getElementById("car-look2");


if (car) {
    document.getElementById("car-name").innerHTML = car.name;
    document.getElementById("car-sub").innerHTML = car.category;
    document.getElementById("car-price").innerHTML = "$" + car.price;

    document.getElementById("car-transmission").innerHTML = car.transmission;
    document.getElementById("car-fuel").innerHTML = car.fuel;
    document.getElementById("car-seats").innerHTML = car.seats;
    document.getElementById("car-category").innerHTML = car.category;

    document.getElementById("car-description").innerHTML = car.description;

    maincar.src = car.img;
    carlook1.src = car.images[0];
    carlook2.src = car.images[1];

    carlook1.addEventListener('mouseover', function () {
        maincar.src = car.images[0];
    });

    carlook2.addEventListener('mouseover', function () {
        maincar.src = car.images[1];
    });

    carlook1.addEventListener('mouseout', function () {
        maincar.src = car.img;
    });

    carlook2.addEventListener('mouseout', function () {
        maincar.src = car.img;
    });



}
