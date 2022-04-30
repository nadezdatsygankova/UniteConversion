console.log('hi')

let number = document.getElementById('number-id');
console.log(number);

function metersToFeet(meters) {
    let ft = meters * 3.2808;
    console.log(ft);
    return ft.toFixed(3);
}

function feetToMeters(feet) {
    let m = feet / 3.2808;
    return m.toFixed(3);
}

function litersToGallons(liters) {
    let gallons = 0.264172 * liters;
    return gallons.toFixed(3);
}

function gallonsToLiters(gallons) {
    let liters = 3.785412 * gallons;
    return liters.toFixed(3);
}

function kilogramsToPounds(kilograms) {
    let pounds = 2.2046 * kilograms;
    return pounds.toFixed(3);
}

function PoundsToKilograms(pounds) {
    let kilograms = pounds / 2.2046;
    return kilograms.toFixed(3);
}


function submitInformation() {
    let information = document.getElementById('inputNumber');
    let data = parseInt(information.value);
    number.innerText = data;
    addNumberAll(data);

    let ft = metersToFeet(data);
    addInformationFeet(ft);

    let m = feetToMeters(data);
    addInformationMeters(m);

    let gallons = litersToGallons(data);
    addInformationGallons(gallons);

    let liters = gallonsToLiters(data);
    addInformationLiters(liters);

    let pounds = kilogramsToPounds(data);
    addInformationPounds(pounds);

    let kilograms = PoundsToKilograms(data);
    addInformationPounds(kilograms);

    information.value = 0;

}
function addNumberAll(value) {
    document.getElementById('meters-to-feet-meters').innerText = value;
    document.getElementById('feet-to-meters-feet').innerText = value;
    document.getElementById('liters-to-gallons-liters').innerText = value;
    document.getElementById('gallons-to-liters-gallons').innerText = value;
    document.getElementById('kilos-to-pounds-kilos').innerText = value;
    document.getElementById('pounds-to-kilos-pounds').innerText = value;
}

function addInformationFeet(number) {
    document.getElementById('meters-to-feet-feet').innerText = number;
}
function addInformationMeters(number) {
    document.getElementById('feet-to-meters-meters').innerText = number;
}

function addInformationGallons(number) {
    document.getElementById('liters-to-gallons-gallons').innerText = number;
}
function addInformationLiters(number) {
    document.getElementById('gallons-to-liters-liters').innerText = number;
}

function addInformationPounds(number) {
    document.getElementById('kilos-to-pounds-pounds').innerText = number;
}

function addInformationPounds(number) {
    document.getElementById('pounds-to-kilos-kilos').innerText = number;
}