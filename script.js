function filter(filt){
    const art= document.querySelectorAll('article');
    art.forEach(arti=>
    {
        if (filt === 'all' || arti.classList.contains(filt)){
            arti.style.display='block';
        } else{
            arti.style.display='none';
        }
    }
    )

}
function toggle(){
    const bod=document.querySelector('.light');
    bod.classList.toggle('black');
    
}

const theme=document.querySelector('.theme');
theme.addEventListener('click',function(){
    if(theme.textContent==='Dark'){
        theme.textContent='Light';
    }else{
        theme.textContent='Dark'
    }
})