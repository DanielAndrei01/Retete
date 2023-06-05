
getRandomMeal();

async function getRandomMeal(){
const resp=await fetch('https://www.themeal.com/api/json/v1/1/random.php'
);

const respData=await resp.json();
const randomMeal=await respData.meals[0];



console.log(randomMeal.meals[0]);
}
async function getMealById(){
  const meal=await  fetch('https://www.themeal.com/api/json/v1/1/lookup.php?i='+id);
}
async function getMealBySearch(term){
   const meals= await fetch("www.themealdb.com/api/json/v1/1/search.php?s="+term);

}