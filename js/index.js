
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