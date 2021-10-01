const loadcountries = () => {
    fetch('https://restcountries.com/v2/all')
        .then(res => res.json())
        .then(data => displaycountries(data));
}
loadcountries();
const displaycountries = (countries) => {
    // console.log(countries)
    // for (const country of countries) {
    //     console.log(country);
    // }
    const countriesDiv = document.getElementById('country')
    countries.forEach(country => {
        // console.log(country);
        const div = document.createElement('div');
        div.classList.add('country');
        div.innerHTML = `<h3> ${country.name} </h3>
        <p>${country.subregion}</p>
        <button onclick="loadCountryByName('${country.name}')"> details </button>
        `
        countriesDiv.appendChild(div);

    })

}
const loadCountryByName = name => {
    const url = `https://restcountries.com/v2/name/$s{name}
    `
    fetch(url)
        .then(res => res.json())
        .then(data => displayCountrydetail(data[0]));
}

const displayCountrydetail = (country) => {
    // console.log(country);
    const countrydiv = document.getElementById('country-div');
    countrydiv.innerHTML = `
   <h5>${country.name} </h5>
   <p>${country.subregion} </p>
   <img width="200px" src="${country.flag}"></img>

   `

}