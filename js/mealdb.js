const searchfood = () => {
    const searField = document.getElementById('search-feild');
    const searchFieldText = searField.value;
    // console.log(searchFieldText);

    searField.value = '';

    const url = `
    https://www.themealdb.com/api/json/v1/1/search.php?s=${searchFieldText}
    `
    // console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => displaySearchResult(data.meals));
}

const displaySearchResult = meals => {
    const searchResult = document.getElementById('search-result');
    meals.forEach(meal => {
        // console.log(meal)
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div onclick="loadmealDetail(${meal.idMeal})" class="card h-100">
             <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
            </div>
    </div>

        `
        searchResult.appendChild(div);
    })
}

const loadmealDetail = (mealid => {
    // console.log(mealid)
    const url = `
    https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}
    `
    fetch(url)
        .then(res => res.json())
        .then(data => displaymealdetail(data.meals[0]))
})

const displaymealdetail = (meal => {
    console.log(meal)
    const meatDetails = document.getElementById('meal-detail');
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">${meal.strMeal}</h5>
        <p class="card-text">${meal.strInstructions.slice(0, 150)}</p>
        <a href="${meal.strYoutube}" class="btn btn-primary">Go somewhere</a>
    </div>
    `
    meatDetails.appendChild(div);
})