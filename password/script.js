const input = document.querySelector("input"),
showHide = document.querySelector(".show_hide"),
indicator = document.querySelector(".indicator"),
icontext = document.querySelector(".icon-text"),
text = document.querySelector(".text");


showHide.addEventListener("click" , ()=>{
    if(input.type === "password"){
        input.type ="text";
        showHide.classList.replace("fa-eye-slash","fa-eye");

    }
    else{
        input.type = "password";
        showHide.classList.replace("fa-eye","fa-eye-slash");

    }
});

let alphabet = /[a-zA-Z]/,
    numbers =  /[0-9]/,
    scharacters = /[!,@,#,$,%,^,&,*]/;


    input.addEventListener("keyup", ()=>{
        indicator.classList.add("active");

        let val = input.value;
        if(val.match(alphabet) || val.match(numbers) || val.match(scharacters)){
            text.textContent = "Password is weak";
            icontext.style.color = "#FF6333";
            showHide.style.color = "#FF6333";
            icontext.style.color = "#FF6333";
        }


          
        if(val.match(alphabet) && val.match(numbers) && val.length >= 6){
             text.textContent = "Password is Medium";
             icontext.style.color = "#cc8500";
             showHide.style.color = "#cc8500";
             icontext.style.color = "#cc8500";
                 }
           

        if(val.match(alphabet) && val.match(numbers) && val.match(scharacters) && val.length >= 8){
             text.textContent = "Password is Strong";
              icontext.style.color = "#22C32A";
             showHide.style.color = "#22C32A";
              icontext.style.color = "#22C32A";
                        }
                    
          if(val == ""){
              indicator.classList.remove("active");
              text.textContent = "Password is weak";
              icontext.style.color = "#FF6333";
              showHide.style.color = "#FF6333";
              icontext.style.color = "#FF6333";
  
        }
    
    });



