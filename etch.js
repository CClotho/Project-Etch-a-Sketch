const canvas8 = 63; 
const canvas16 = 255;
const canvas32 = 1023;
const canvas64 = 4095;
let count = 0;
let isMouseDown = false;
const wrapper1 = document.getElementById('wrapper1');
const resetButton = document.querySelector("#reset");
const eraserButton = document.querySelector("#eraser");
const mainwrapper = document.getElementById('main-wrapper');
const pencilButton = document.getElementById('pencil');
const Size = document.getElementById('size');



// With wrapper1.innerHTML = ""; inside of the Size addEventListener it will clear this loop(canvas) below
for (let i = 0; i <= canvas8; i++) { 
  let CanvasSize = document.createElement("div");
 
  CanvasSize.setAttribute('class', 'canvas8');
  
  
  CanvasSize.classList.add('child8');
  wrapper1.appendChild(CanvasSize);
}


eraserButton.addEventListener('click', Eraser);
pencilButton.addEventListener('click', Pencil);
resetButton.addEventListener('click', resetColor);

function Eraser() {
  const divChildren1 = document.querySelectorAll('.child8');
  const divChildren2 = document.querySelectorAll('.child16');
  const divChildren3 = document.querySelectorAll('.child32');
  const divChildren4 = document.querySelectorAll('.child64');
 
  divChildren1.forEach(function(element) {
  

    element.addEventListener('mousemove',function(e) {
      e.preventDefault();
      if(e.buttons === 1 && element.classList.contains('style'))
      e.target.classList.remove('style');
     
    })

    element.addEventListener('mousedown',function(e) {
      e.preventDefault();
      if(element.classList.contains('style'))
      e.target.classList.remove('style');
     
    })
   
   });
   divChildren2.forEach(function(element) {
  

    element.addEventListener('mousemove',function(e) {
      e.preventDefault();
      if(e.buttons === 1 && element.classList.contains('style'))
      e.target.classList.remove('style');
     
    })

    element.addEventListener('mousedown',function(e) {
      e.preventDefault();
      if(element.classList.contains('style'))
      e.target.classList.remove('style');
     
    })
   
   });
   divChildren3.forEach(function(element) {
  

    element.addEventListener('mousemove',function(e) {
      e.preventDefault();
      if(e.buttons === 1 && element.classList.contains('style'))
      e.target.classList.remove('style');
     
    })

    element.addEventListener('mousedown',function(e) {
      e.preventDefault();
      if(element.classList.contains('style'))
      e.target.classList.remove('style');
     
    })
   
   });
   divChildren4.forEach(function(element) {
  

    element.addEventListener('mousemove',function(e) {
      e.preventDefault();
      if(e.buttons === 1 && element.classList.contains('style'))
      e.target.classList.remove('style');
     
    })

    element.addEventListener('mousedown',function(e) {
      e.preventDefault();
      if(element.classList.contains('style'))
      e.target.classList.remove('style');
     
    })
   
   });

}

function resetColor() {
  const divChildren1 = document.querySelectorAll('.child8');
  const divChildren2 = document.querySelectorAll('.child16');
  const divChildren3 = document.querySelectorAll('.child32');
  const divChildren4 = document.querySelectorAll('.child64');
  divChildren1.forEach(function(element) {
  
   element.classList.remove('style');
  
  });
  divChildren2.forEach(function(element) {
  
    element.classList.remove('style');
   
   });
   divChildren3.forEach(function(element) {
  
    element.classList.remove('style');
   
   });
   divChildren4.forEach(function(element) {
  
    element.classList.remove('style');
   
   });
  
}

function Pencil() {
  const divChildren1 = document.querySelectorAll('.child8');
  const divChildren2 = document.querySelectorAll('.child16');
  const divChildren3 = document.querySelectorAll('.child32');
  const divChildren4 = document.querySelectorAll('.child64');
  divChildren1.forEach(function(element) {
      
      
      element.addEventListener('mousedown', function(e){
        e.preventDefault();
        e.target.classList.add('style');
      });
        
        element.addEventListener('mousemove', function(event) {
          event.preventDefault();
        
          if(event.buttons == 1) {
            event.target.classList.add('style');
          }
          
      
        });
        
        
      });

    divChildren2.forEach(function(element) {
    
    
      element.addEventListener('mousedown', function(e){
        e.preventDefault();
        e.target.classList.add('style');
      });
        
        element.addEventListener('mousemove', function(event) {
          event.preventDefault();
         
          if(event.buttons == 1) {
            event.target.classList.add('style');
          }
          
       
        });
        
        
      });
      divChildren3.forEach(function(element) {
    
    
        element.addEventListener('mousedown', function(e){
          e.preventDefault();
          e.target.classList.add('style');
        });
          
          element.addEventListener('mousemove', function(event) {
            event.preventDefault();
           
            if(event.buttons == 1) {
              event.target.classList.add('style');
            }
            
         
          });
          
          
        });
        divChildren4.forEach(function(element) {
    
    
          element.addEventListener('mousedown', function(e){
            e.preventDefault();
            e.target.classList.add('style');
          });
            
            element.addEventListener('mousemove', function(event) {
              event.preventDefault();
             
              if(event.buttons == 1) {
                event.target.classList.add('style');
              }
              
           
            });
            
            
          });

}



 Size.addEventListener('change', function(size) {

  const sizeValue = parseInt(size.target.value);

  // Remove any existing elements
  wrapper1.innerHTML = '';

  if (sizeValue === 8) {
    for (let i = 0; i <= canvas8; i++) {
      let CanvasSize = document.createElement("div");
      CanvasSize.setAttribute('class', 'canvas8'); 
      CanvasSize.classList.add('child8');
      wrapper1.appendChild(CanvasSize);
    }
        
 
  } else if (sizeValue === 16) {
    for (let i = 0; i <= canvas16; i++) {
      let CanvasSize = document.createElement("div");
      CanvasSize.setAttribute('class', 'canvas16');
      CanvasSize.classList.add('child16');
      wrapper1.appendChild(CanvasSize);
    }
  } else if (sizeValue === 32) {
    for (let i = 0; i <= canvas32; i++) {
      let CanvasSize = document.createElement("div");
      CanvasSize.setAttribute('class', 'canvas32');
      CanvasSize.classList.add('child32');
      wrapper1.appendChild(CanvasSize);
    }
  } else if (sizeValue === 64) {
    for (let i = 0; i <= canvas64; i++) {
      let CanvasSize = document.createElement("div");
      CanvasSize.setAttribute('class', 'canvas64');
      CanvasSize.classList.add('child64');
      wrapper1.appendChild(CanvasSize);
    }
  }
}); 







