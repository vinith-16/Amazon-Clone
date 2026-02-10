const images=document.querySelectorAll('.header-slider ul img');
const pre_button=document.querySelector('.controls-previous');
const next_button=document.querySelector('.controls-next');

let n=0;
 
function changeslider(){
    for(let i=0;i<images.length;i++){
        images[i].style.display='none';
    }
    images[n].style.display='block';
}
changeslider();

pre_button.addEventListener('click',(e)=>{
    if(n>0)
    {
        n--;
    }
    else{
        n=images.length-1;
    }
    changeslider();

})
next_button.addEventListener('click',(e)=>{
    if(n< images.length-1)
    {
        n++;
    }
    else{
        n=0;
    }
    changeslider();

})
