// console.log("TO CHECK THAT PROPER WORK OF SCRIPT")


const temp = document.querySelectorAll('.buttons')
const body = document.querySelector('body')

temp.forEach(function (tempvar){
  tempvar.addEventListener('click' , function(nums){


                                                                           // simple project just add an event (click) 

    // if(nums.target.id === "grey"){                                     // we can use if-else as well as switch case 
    //   body.style.backgroundColor = nums.target.id;
    // }
    // if(nums.target.id === "black"){
    //   body.style.backgroundColor = nums.target.id;
    // }
    // if(nums.target.id === "blue"){
    //   body.style.backgroundColor = nums.target.id;
    // }
    // if(nums.target.id === "yellow"){
    //   body.style.backgroundColor = nums.target.id;
    // }
    // if(nums.target.id === "red"){
    //   body.style.backgroundColor = nums.target.id;
    // }
    // if(nums.target.id === "pink"){
    //   body.style.backgroundColor = nums.target.id;
    // }




    switch(nums.target.id){
      case "grey":
        body.style.backgroundColor = nums.target.id;
        break;

      case "black":
        body.style.backgroundColor = nums.target.id;
        break;

      case "blue":
        body.style.backgroundColor = nums.target.id;
        break;

      case "yellow":
        body.style.backgroundColor = nums.target.id;
        break;

      case "red":
        body.style.backgroundColor = nums.target.id;
        break;       

      case "pink":
        body.style.backgroundColor = nums.target.id;
        break; 
    }


  });
});





document.addEventListener('DOMContentLoaded', (event) => {
  let incrementBtn = document.getElementById('incrementBtn');
  let subone = document.getElementById('subone');
  let results = document.getElementById('results');
  let counter = 0;

  incrementBtn.addEventListener('click', function() {
    counter += 1;
    results.innerHTML = counter;
  });

  subone.addEventListener('click', function() {
    counter -= 1;
    results.innerHTML = counter;
  });

});



