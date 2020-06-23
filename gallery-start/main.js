const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Looping through images */
for(let i=1;i<=5;i++){
let xxx="images/pic"+i+".jpg";
console.log(xxx);
const newImage = document.createElement('img');
newImage.setAttribute('src', xxx);
newImage.onclick=function()
{
    displayedImage.setAttribute('src',xxx);
}
thumbBar.appendChild(newImage);
}

/* Wiring up the Darken/Lighten button */
btn.onclick=function()
{
    let value=btn.getAttribute('class');
    if(value==='dark')
    {
        btn.textContent="Lighten";
        btn.setAttribute('class','light');
        overlay.style.backgroundColor="rgba(0,0,0,0.5)";
    }
    else{
        btn.textContent="Darken";
        btn.setAttribute('class','dark');
        overlay.style.backgroundColor="rgba(0,0,0,0)";
    }
              
    
}