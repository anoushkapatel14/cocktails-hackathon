let cocktails = [];
let searchCocktails = [];

const handleSearch = (event) => {
  event.preventDefault();

  const form = event.target;
  const searchBar = document.querySelector(".form__search-bar");
  const userSearch = form.search.value;

  if (userSearch === "") {
    alert("Please ensure you have filled in the search bar before submitting!");
    return;
  }

  getSearchCocktails(userSearch);
  renderSearchCocktails();
  form.reset();
};

const form = document.querySelector("form");
form.addEventListener("submit", handleSearch);

const cocktailList = document.querySelector(".card-container");
const searchCocktailList = document.querySelector(".search-card-container");

function createCocktail(cocktail) {
  cocktailList.innerHTML = "";

  const cardEl = document.createElement("article");
  cardEl.classList.add("card");

  const topEl = document.createElement("div");
  topEl.classList.add("card__top");
  const imageEl = document.createElement("img");
  imageEl.classList.add("card__image");
  imageEl.src = cocktail.strDrinkThumb;
  topEl.append(imageEl);
  cardEl.append(topEl);

  const bottomEl = document.createElement("div");
  bottomEl.classList.add("card__bottom");
  const nameEl = document.createElement("h2");
  nameEl.classList.add("card__name");
  nameEl.innerText = cocktail.strDrink;
  bottomEl.append(nameEl);

  const ingredientsEl = document.createElement("ul");
  ingredientsEl.classList.add("card__ingredients");
  const ingrTitle = document.createElement("h3");
  ingrTitle.classList.add("card__subheading");
  ingrTitle.innerText = "Ingredients";
  const ingredientEl1 = document.createElement("li");
  ingredientEl1.classList.add("card__ingredient");
  ingredientEl1.innerText = cocktail.strIngredient1;
  ingredientsEl.append(ingredientEl1);
  const ingredientEl2 = document.createElement("li");
  ingredientEl2.classList.add("card__ingredient");
  ingredientEl2.innerText = cocktail.strIngredient2;
  ingredientsEl.append(ingredientEl2);
  const ingredientEl3 = document.createElement("li");
  ingredientEl3.classList.add("card__ingredient");
  ingredientEl3.innerText = cocktail.strIngredient3 ?? "Ice";
  ingredientsEl.append(ingredientEl3);
  bottomEl.append(ingrTitle);
  bottomEl.append(ingredientsEl);

  const recipeTitle = document.createElement("h3");
  recipeTitle.innerText = "Recipe";
  recipeTitle.classList.add("card__subheading");
  const recipeEl = document.createElement("p");
  recipeEl.classList.add("card__recipe");
  recipeEl.innerText = cocktail.strInstructions;
  bottomEl.append(recipeTitle);
  bottomEl.append(recipeEl);
  cardEl.append(bottomEl);
  cocktailList.append(cardEl);
}

function createSearchCocktail(cocktail) {
  searchCocktailList.innerHTML = "";

  const cardEl = document.createElement("article");
  cardEl.classList.add("card");

  const topEl = document.createElement("div");
  topEl.classList.add("card__top");
  const imageEl = document.createElement("img");
  imageEl.classList.add("card__image");
  imageEl.src = cocktail.strDrinkThumb;
  topEl.append(imageEl);
  cardEl.append(topEl);

  const bottomEl = document.createElement("div");
  bottomEl.classList.add("card__bottom");
  const nameEl = document.createElement("h2");
  nameEl.classList.add("card__name");
  nameEl.innerText = cocktail.strDrink;
  bottomEl.append(nameEl);

  const ingredientsEl = document.createElement("ul");
  ingredientsEl.classList.add("card__ingredients");
  const ingrTitle = document.createElement("h3");
  ingrTitle.classList.add("card__subheading");
  ingrTitle.innerText = "Ingredients";
  const ingredientEl1 = document.createElement("li");
  ingredientEl1.classList.add("card__ingredient");
  ingredientEl1.innerText = cocktail.strIngredient1;
  ingredientsEl.append(ingredientEl1);
  const ingredientEl2 = document.createElement("li");
  ingredientEl2.classList.add("card__ingredient");
  ingredientEl2.innerText = cocktail.strIngredient2;
  ingredientsEl.append(ingredientEl2);
  const ingredientEl3 = document.createElement("li");
  ingredientEl3.classList.add("card__ingredient");
  ingredientEl3.innerText = cocktail.strIngredient3 ?? "Ice";
  ingredientsEl.append(ingredientEl3);
  bottomEl.append(ingrTitle);
  bottomEl.append(ingredientsEl);

  const recipeTitle = document.createElement("h3");
  recipeTitle.innerText = "Recipe";
  recipeTitle.classList.add("card__subheading");
  const recipeEl = document.createElement("p");
  recipeEl.classList.add("card__recipe");
  recipeEl.innerText = cocktail.strInstructions;
  bottomEl.append(recipeTitle);
  bottomEl.append(recipeEl);
  cardEl.append(bottomEl);
  searchCocktailList.append(cardEl);
}

async function getRandomCocktail() {
  let response = await axios.get(
    "https://www.thecocktaildb.com/api/json/v1/1/random.php"
  );
  cocktails = response.data.drinks;
  renderCocktails();
}

async function getSearchCocktails(input) {
  let searchResponse = await axios.get(
    "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + input
  );
  searchCocktails = searchResponse.data.drinks;
  renderSearchCocktails();
}

const renderCocktails = () => {
  cocktailList.innerHTML = "";
  for (i = 0; i < cocktails.length; i++) {
    const cocktail = cocktails[i];
    createCocktail(cocktail);
  }
};

const renderSearchCocktails = () => {
  searchCocktailList.innerHTML = "";
  for (i = 0; i < searchCocktails.length; i++) {
    const cocktail = searchCocktails[i];
    createSearchCocktail(cocktail);
  }
};

getRandomCocktail();
