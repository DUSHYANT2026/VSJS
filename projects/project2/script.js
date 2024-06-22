const from = document.querySelector('form')

from.addEventListener('submit' ,function(nums){
    nums.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const checkguide = document.querySelector('#results');
    const checkrange = document.querySelector('#weight-guide');

    if(height < 0 || height === '' || isNaN(height)){
        checkguide.innerHTML = `PLEASE ENTER THE VALID ${height}` 
    }
    if(weight < 0 || weight === '' || isNaN(weight)){
        checkguide.innerHTML = `PLEASE ENTER THE VALID ${weight}` 
    }
    else{
        const temp = (weight / ((height * height) / 10000)).toFixed(2);
        checkguide.innerHTML = `<span>${temp}</span>`

        if(temp < 18.6){
            checkrange.innerHTML = `YOU UNDER WEIGHT TAKE A CALORIES SURPLUS DEIT BECAUSE YOUR BMI IS : ${temp}`
        }
        else if(temp > 24.9){
            checkrange.innerHTML = `YOU OVER WEIGHT TAKE A CALORIES DEFICITE DEIT BECAUSE YOUR BMI IS : ${temp}`
        }
        else{
            checkrange.innerHTML = `YOUR HEIGHT TO WEIGHT RATIO IS PERFECT MAINTAINED BODY BECAUSE YOUR BMI IS : ${temp}`
        }
    }
});