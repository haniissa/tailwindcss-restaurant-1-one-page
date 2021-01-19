
let burger =  document.querySelector('#burger'),
    menu =  document.querySelector("#menu");

burger.addEventListener('click', Handeler);

function Handeler(){
    if(menu.classList.contains("hidden"))
        menu.classList.remove('hidden');
    else
        menu.classList.add("hidden");
}