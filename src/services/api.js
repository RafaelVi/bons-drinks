const api = "https://www.thecocktaildb.com/api/json/v1/1/"

export const getPopularDrinks = async () =>{
    const response = await (await fetch(api+"filter.php?c=Cocktail")).json();
    
    return response.drinks;
}

export const getDrinksSearch = async (drink) =>{
    const response = await (await fetch(api+`search.php?s=${drink}`)).json();
    
    return response.drinks;
}

export const getSubtypes = async (type) =>{
    const response = await (await fetch(api+`list.php?${type}=list`)).json();
    
    return response.drinks;
}

export const getFilteredDrinks = async (subtype) =>{
    const response = await (await fetch(api+`filter.php?${localStorage.getItem("type")}=${subtype}`)).json();
    
    return response.drinks;
}