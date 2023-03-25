var images = [
    "images/Monkey_01.png",
    "images/Monkey_02.png"
    ];
    
    var i=0 ;
    function nextslide() { 
     
       if(i == 2)
         {
           i=0;
         }
        
        document.getElementById("album").src = images[i];
      i++;
     
    }
    