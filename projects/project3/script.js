const clock = document.getElementById('clock');
// const clock = document.querySelector('#clock')

setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);










const temp = document.querySelectorAll('.button')
const body = document.querySelector('body')

temp.forEach(function (button){
  button.addEventListener('click' , function(nums){


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