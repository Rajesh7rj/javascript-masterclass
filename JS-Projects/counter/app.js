
const buttons = document.querySelectorAll(".btn");
let count = 0;

buttons.forEach(function(button) {
  button.addEventListener("click", function(){
    if (button.classList.contains("subBtn")){
      count--;
      // if(count <0){
      //   count = 0;
      // }
    }
    else if(button.classList.contains("addBtn")){
      count++;
    }


    const counter = document.querySelector("#counter");
    counter.textContent = count;
    if(count < 0){
      counter.style.color = "red";
    }
    else if(count > 0){
      counter.style.color = "green";
    }

    else{
      counter.style.color = "black";
    }

  });
});
