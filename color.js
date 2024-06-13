const buttons=document.querySelectorAll('.button');
const body=document.querySelector('body');
buttons.forEach(function (btn){
    console.log(btn)
    btn.addEventListener('click',function(e){
        console.log(e);
        console.log(e.target)

        //grey.....
        if(e.target.id ==='grey'){
            //console.log(e.target.id);
           body.style.backgroundColor=e.target.id;
        }
        
        //white.....
        if(e.target.id ==='white'){
            //console.log(e.target.id);
           body.style.backgroundColor=e.target.id;
        }
         
        //blue...
        if(e.target.id ==='blue'){
            //console.log(e.target.id);
           body.style.backgroundColor=e.target.id;
        }

        //yellow....
        if(e.target.id ==='yellow'){
            //console.log(e.target.id);
           body.style.backgroundColor=e.target.id;
        }

       //purple...
       if(e.target.id ==='purple'){
        //console.log(e.target.id);
       body.style.backgroundColor=e.target.id;
    }

    //red......
    if(e.target.id ==='red'){
        //console.log(e.target.id);
       body.style.backgroundColor=e.target.id;
    }

    });
 }
);