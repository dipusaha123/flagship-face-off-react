export const addFavorite = phone =>{
    console.log(phone)
    localStorage.setItem('favorites',JSON.stringify(phone))
}