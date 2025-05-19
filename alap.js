fetch("https://api.exchangerate-api.com/v4/latest/usd")
.then(x => x.json())
.then(y => megjelenit(y));

function megjelenit(y) {
    console.log(y);

    document.getElementById("usaDollar").innerHTML = y.rates.HUF + " Ft"
}

fetch("https://api.exchangerate-api.com/v4/latest/eur")
.then(x => x.json())
.then(y => megjelenitEuro(y));

function megjelenitEuro(y) {
    console.log(y);

    document.getElementById("euro").innerHTML = y.rates.HUF + " Ft"
}

fetch("https://api.exchangerate-api.com/v4/latest/gbp")
.then(x => x.json())
.then(y => megjelenitgbp(y));

function megjelenitgbp(y) {
    console.log(y);

    document.getElementById("gbp").innerHTML = y.rates.HUF + " Ft"
}

fetch("https://api.exchangerate-api.com/v4/latest/ron")
.then(x => x.json())
.then(y => megjelenitLei(y));

function megjelenitLei(y) {
    console.log(y);

    document.getElementById("lei").innerHTML = y.rates.HUF + " Ft"
}

fetch("https://api.exchangerate-api.com/v4/latest/cny")
.then(x => x.json())
.then(y => megjelenitCny(y));

function megjelenitCny(y) {
    console.log(y);

    document.getElementById("cny").innerHTML = y.rates.HUF + " Ft"
}