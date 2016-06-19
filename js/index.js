
function calculateCalories() {   
var form = document.getElementById("caloriesForm");
var gender = form.elements["gender"].value;
var activity = form.elements["activity"].value;
 var age = document.getElementById("age").value;
  var height = document.getElementById("height").value;
  var weight = document.getElementById("weight").value;
  var result = 0;
  
  if (gender == "male"){
    if (activity == "sedentary"){
      result = (10*weight+6.25*height-5*age+5) * 1.2;
    }
    if (activity == "light"){
      result = (10*weight+6.25*height-5*age+5) * 1.375;
    }
    if (activity == "moderate"){
      result = (10*weight+6.25*height-5*age+5) * 1.55;
    }
    if (activity == "active"){
      result = (10*weight+6.25*height-5*age+5) * 1.725;
    }
  }
  
    if (gender == "female"){
    if (activity == "sedentary"){
      result = (10*weight+6.25*height-5*age-161) * 1.2;
    }
    if (activity == "light"){
      result = (10*weight+6.25*height-5*age-161) * 1.375;
    }
    if (activity == "moderate"){
      result = (10*weight+6.25*height-5*age-161) * 1.55;
    }
    if (activity == "active"){
      result = (10*weight+6.25*height-5*age-161) * 1.725;
    }
  }
  
  var protein = weight*2.2*0.825;
  var fat = result*0.25/9;
  var carbs = (result-(protein*4)-(fat*9))/4;
  
  document.getElementById("result").value = Math.round(result);
  document.getElementById("protein").value = Math.round(protein);
  document.getElementById("fat").value = Math.round(fat);
  document.getElementById("carbs").value = Math.round(carbs);  
}

function getRecipe() {

    var result = 2000;
    if (document.getElementById("result").value > 0){
      result = document.getElementById("result").value;
    }

    $.ajax({
      data: {
        "X-Mashape-Key": "0Emt9Cj5xnmshdxatPaMQNvVaDY4p19cQ3qjsnEZe5TkvRusna",
        "targetCalories": result,
        "timeFrame":"day"
   },
       url: 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/mealplans/generate',
      beforeSend: function(xhr){xhr.setRequestHeader('X-Mashape-Key', '0Emt9Cj5xnmshdxatPaMQNvVaDY4p19cQ3qjsnEZe5TkvRusna');},

      success: function(response) {
        console.log(response);

      $('#breakfast-title').text(response.meals[0].title);
      $('#breakfast-img').attr('src', 'https://spoonacular.com/recipeImages/' + response.meals[0].image);

      $('#lunch-title').text(response.meals[1].title);
      $('#lunch-img').attr('src', 'https://spoonacular.com/recipeImages/' + response.meals[1].image);

      $('#dinner-title').text(response.meals[2].title);
      $('#dinner-img').attr('src', 'https://spoonacular.com/recipeImages/' + response.meals[2].image);

      $('#breakfast-link').attr('href', 'https://spoonacular.com/recipe/' + response.meals[0].image.slice(0, -4));
      $('#lunch-link').attr('href', 'https://spoonacular.com/recipe/' + response.meals[1].image.slice(0, -4));
      $('#dinner-link').attr('href', 'https://spoonacular.com/recipe/' + response.meals[2].image.slice(0, -4));


      $('#nutrition-menu').text('Nutrition value of menu:');
      $('#calories-food').text('Calories: ' + response.nutrients.calories);
      $('#fat-food').text('Fat: '+ response.nutrients.fat);
      $('#protein-food').text('Protein: ' + response.nutrients.protein);
      $('#carbs-food').text('Carbs: ' + response.nutrients.carbohydrates);

    },
     error: function(XMLHttpRequest, textStatus, errorThrown) {
        alert("Status: " + textStatus); alert("Error: " + errorThrown);
    }
  });
}
$(document).ready(function() {
  $('#new-recipe').on('click', getRecipe);
});
