const keyboardInput = document.getElementById('keyboard-input');

document.addEventListener('keydown', (event) => {
    // if(event.key == "1") {keyboardInput.value += event.key; window.open("index.html#what", '_self');}
    if(event.key == "2") {keyboardInput.value += event.key;}
    if(event.key == "1") {keyboardInput.value += event.key;}
    if(event.key == "3") {keyboardInput.value += event.key}
    if(event.key == "4") {keyboardInput.value += event.key;}
    if(event.key == "5") {keyboardInput.value += event.key;}
    if(event.key == "6") {keyboardInput.value += event.key;}
    if(event.key == "7") {keyboardInput.value += event.key;}
    if(event.key == "8") {keyboardInput.value += event.key;}
    if(event.key == "0") {keyboardInput.value += event.key;}
    if(event.key == "Backspace") {keyboardInput.value = keyboardInput.value.slice(0,-4);}
    // console.log (event);

    setTimeout(() => {
        myFunction();
    }, 1000)
    
});

// todo:
// descobrir como fazer trigger after delay
// descobrir como apagar after delay
// descobrir como fazer trigger a um input de 2 numeros



// keyboardInput.addEventListener('submit', myFunction);

function myFunction() {
    if(keyboardInput.value === "1") {window.open("index.html#what", '_self'); keyboardInput.value = keyboardInput.value.slice(0,-4);}
    if(keyboardInput.value === "2") {window.open("index.html#when", '_self'); keyboardInput.value = keyboardInput.value.slice(0,-4);}
    if(keyboardInput.value === "3") {window.open("index.html#how", '_self'); keyboardInput.value = keyboardInput.value.slice(0,-4);}
    if(keyboardInput.value === "4") {window.open("index.html#hero", '_self'); keyboardInput.value = keyboardInput.value.slice(0,-4);}
    if(keyboardInput.value === "100") {window.open("index.html#what", '_self'); keyboardInput.value = keyboardInput.value.slice(0,-4);}
    if(keyboardInput.value === "200") {window.open("index.html#when", '_self'); keyboardInput.value = keyboardInput.value.slice(0,-4);}
    if(keyboardInput.value === "300") {window.open("index.html#how", '_self'); keyboardInput.value = keyboardInput.value.slice(0,-4);}
    if(keyboardInput.value === "400") {window.open("index.html#hero", '_self'); keyboardInput.value = keyboardInput.value.slice(0,-4);}
    // UX LINK
    if(keyboardInput.value === "500") {window.open("https://discord.com/channels/1060157004934561803/1075347100310700032", '_blank'); keyboardInput.value = keyboardInput.value.slice(0,-4);}
    // WEB LINK
    if(keyboardInput.value === "600") {window.open("https://discord.com/channels/1060157004934561803/1075347221559644190", '_blank'); keyboardInput.value = keyboardInput.value.slice(0,-4);}
    // COHORT LINK
    if(keyboardInput.value === "700") {window.open("https://discord.com/channels/1060157004934561803/1075346440911589438", '_blank'); keyboardInput.value = keyboardInput.value.slice(0,-4);}
    if(keyboardInput.value === "800") {window.open("wireframes.html", '_self'); keyboardInput.value = keyboardInput.value.slice(0,-4);}
  };

  

  
//   // When keyup happens on an element with id of "inputname"
//  // create another function inside
// keyboardInput.addEventListener('keyup',function(){

//     function timer(){
//         console.log("banana")
//         // myFunction()
//       }
   
//    //setTimeout(myFunc,5000);
//     setTimeout(timer,3000);   

//   });

  
// /*   OR:
//     $('#inputname').on('keyup',function(){
//         setTimeout(function(){  
//         var name = $('#inputname').val();
//         $('#yourname').text(name);
//          },3000);
     
//      });
// */
  

