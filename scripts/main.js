let cocktails = [];

const cocktailList = document.querySelector(".card-container");

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
    recipeTitle.classList.add("card__subheading")
    const recipeEl = document.createElement("p");
    recipeEl.classList.add("card__recipe");
    recipeEl.innerText = cocktail.strInstructions;
    bottomEl.append(recipeTitle);
    bottomEl.append(recipeEl);
    cardEl.append(bottomEl);
    cocktailList.append(cardEl);
}

async function getRandomCocktail(){
    let response = await axios.get("https://www.thecocktaildb.com/api/json/v1/1/random.php");
    cocktails = response.data.drinks;
    console.log(cocktails);
    renderCocktails();
}

const renderCocktails = () => {
    cocktailList.innerHTML = "";
    for (i = 0; i < cocktails.length; i++){
        const cocktail = cocktails[i];
        console.log(cocktail);
        createCocktail(cocktail);
    }
}

getRandomCocktail();
