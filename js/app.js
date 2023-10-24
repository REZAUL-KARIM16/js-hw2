let increbtn=document.querySelector('.incrediv .increbtn')

let decrebtn=document.querySelector('.incrediv .decrebtn')

let resulttv=document.querySelector('.incrediv .result')


increbtn.addEventListener('click',()=>{


    resulttv.value=Number(resulttv.value)+1
})



decrebtn.addEventListener('click',()=>{

    if(resulttv.value>1){
        resulttv.value=Number(resulttv.value)-1
    }else{
        alert('action failed')
    }

    
})


// rangeslider


let tvshow=document.querySelector('.tvshow')

let rangslide=document.querySelector('.rangslide')

rangslide.addEventListener('input',()=>{

    tvshow.innerHTML=rangslide.value
    
})


//password

let passinput=document.querySelector('.password .passinput')

let eyeicon=document.querySelector('.password span')


eyeicon.addEventListener('click',()=>{


    if(passinput.type=="password"){

        passinput.type="text"
        eyeicon.innerHTML='<i class="fa-solid fa-eye"></i>'
    }else{
        passinput.type="password"
        eyeicon.innerHTML='<i class="fa-solid fa-eye-slash"></i>'
   
    }

})


// random color

let colorize=document.querySelector('#colorize')


let randombtn=document.querySelector('.randombtn')


randombtn.addEventListener('click',()=>{


    let red=Math.round(Math.random()*255);

    let green=Math.round(Math.random()*255);

    let blue=Math.round(Math.random()*255);


    colorize.style.backgroundColor=`rgb(${red},${green},${blue})`

})