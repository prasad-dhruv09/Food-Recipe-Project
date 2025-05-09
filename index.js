let food=document.querySelector('.food')

let indian=document.querySelector('#indian')
let american=document.querySelector('#american')
let canadian=document.querySelector('#canadian')
let thai=document.querySelector('#thai')
let british=document.querySelector('#british')
let russian=document.querySelector('#russian')

let recipe;
const fetchdata=async(area)=>{
    const api=await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`);
    const data=await api.json();

    recipe=data.meals;

    showdata(recipe);
};

const searchrecipe=()=>{
    let input=document.querySelector("#search");

    input.addEventListener("keydown",async(e)=>{
        if(e.key === "Enter"){
            let inputvalue =input.value ;
            const api=await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputvalue}`);
            const data=await api.json();
            recipe=data.meals;
            showdata(recipe);
        }
        });
};
searchrecipe();

let showdata=(recipe)=>{
    food.innerHTML=recipe.map((meal)=>`
    <div style="text-align: center">
    <div>
      <img src=${meal.strMealThumb} style="width:220px; border-radius:10px; border:2px solid blue"/>
    </div>
    <h5 style="margin-top:10px">${meal.strMeal}</h5>
    </div>
    `).join(" ")
};
american.addEventListener("click",()=>{
    fetchdata('american');
});
thai.addEventListener("click",()=>{
    fetchdata('thai');
});
russian.addEventListener("click",()=>{
    fetchdata('russian');
});
british.addEventListener("click",()=>{
    fetchdata('british');
});
canadian.addEventListener("click",()=>{
    fetchdata('canadian');
});
indian.addEventListener("click",()=>{
    fetchdata('indian');
});

fetchdata('indian');


