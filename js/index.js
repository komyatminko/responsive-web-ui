let nav = document.getElementById('nav');
var waypoint = new Waypoint({
    element: document.getElementById('about'),
    handler: function(direction){
        // console.log("it is work")
        if(direction === 'down'){
            nav.classList.add('show');
            nav.classList.add('animate__fadeInDown');

        }else {
            nav.classList.remove('show');
            nav.classList.remove('animate__fadeInDown');


        }
    },
    offset: '15%'
});

let footer_icon = document.querySelector('.footer-icon');
var waypoint = new Waypoint({
    element: document.getElementById('contact'),
    handler: function(direction){
        if(direction === 'down'){
            footer_icon.classList.remove('d-none');
            footer_icon.classList.add('animate__fadeInDown')
        }else {
            footer_icon.classList.add('d-none');
            footer_icon.classList.remove('animate__fadeInDown')
        }
    },
    offset: '15%'
});

//////////////////////////////////Changing mode /////////////////////////////

let btns = document.querySelectorAll('button');
let cards = document.querySelectorAll('.card');
let contact_icon = document.querySelectorAll('.contact_icon');
let service_icon = document.querySelectorAll('.service-icon');
let smallElement = document.querySelectorAll('small');
let icons = document.querySelectorAll('i');
let aElements = document.querySelectorAll('a');
let menuIcon = document.querySelector('.menu-icon');
let navbar_button = document.querySelector('.navbar-toggler');
let collapse_nav = document.querySelector('.collapse');
// console.log(aElements)

let navbar = document.getElementById('navbar-nav');
// console.log(navbar_items.children)

navbar.addEventListener('click', (e)=>{
    let target = e.target;
    // navbar.setAttribute('hidden','hidden');
    menuIcon.classList.toggle('show');
    collapse_nav.classList.toggle('show')

});

navbar_button.addEventListener('click', ()=> {
    navbar.removeAttribute('hidden');

})

let changeToDark = () => {
    document.querySelector('html').setAttribute('data-theme', 'dark');
    localStorage.setItem('data-theme', 'dark');
    change_mode.setAttribute('checked', 'checked');

    // console.log(nav);
    nav.classList.replace('bg-body-tertiary', 'bg-black');
    nav.classList.add('navbar-dark', 'border-bottom','border-bottom-2', 'border-danger');

    aElements.forEach((link)=> {
        let nav_link = link.classList.contains('nav-link');
        if(nav_link){
            // link.classList.add('border-bottom', 'border-bottom-2', 'border-bottom-success')
        }
    })


    btns.forEach((btn)=> {
        btn.classList.remove('shadow-lg');
        // console.log(btn.classList);
    });

    cards.forEach((card)=> {
        if(card.classList.contains('no_border')){
            // console.log(card);
            card.classList.remove('shadow-xl')
            card.classList.add('bg-transparent', 'text-white', 'border-0');
        }
        else{
            card.classList.remove('shadow-xl', 'border-0');
            card.classList.add('bg-dark', 'text-white', 'border-1', 'border-danger');
        }
    });

    contact_icon.forEach((val)=> {
        val.classList.remove('shadow-lg');
    });

    service_icon.forEach((val)=> {
        val.classList.remove('shadow-lg')
    });

    smallElement.forEach((val)=> {
        val.classList.replace('text-muted', 'text-white-50')
    });

    icons.forEach((val) => {
        let fab = val.classList.contains('fab');
        if(fab) {
            val.classList.replace('text-black', 'text-white');
        }
    });

    aElements.forEach((val) => {
        let footer_link = val.classList.contains('footer-link');
        if(footer_link) {
            val.classList.replace('text-black-50', 'text-white-50')
        }
    });
}


let changeToLight = () => {
    document.querySelector('html').setAttribute('data-theme', 'light');
    localStorage.setItem('data-theme', 'light');

    nav.classList.replace('bg-black', 'bg-body-tertiary');
    nav.classList.remove('navbar-dark', 'border-bottom','border-bottom-2', 'border-danger');

    btns.forEach((btn)=> {
        btn.classList.add('shadow-lg');
        // console.log(btn.classList);
    })

    cards.forEach((card)=> {
        if(card.classList.contains('add_border')){
            card.classList.replace('border-0', 'border-1');
            card.classList.remove('bg-dark', 'text-white', 'border-danger');
        }
        else{
            card.classList.add('shadow-xl', 'border-0');
            card.classList.remove('bg-dark', 'text-white', 'border-1', 'border-danger');
        }
        // console.log(card.classList);
    });

    contact_icon.forEach((val)=> {
        val.classList.add('shadow-lg');
    });

    service_icon.forEach((val)=> {
        val.classList.add('shadow-lg')
    });

    smallElement.forEach((val)=> {
        val.classList.replace('text-white-50', 'text-muted')
    });

    icons.forEach((val) => {
        let fab = val.classList.contains('fab');
        if(fab) {
            val.classList.replace('text-white', 'text-black');
        }
    });

    aElements.forEach((val) => {
        let footer_link = val.classList.contains('footer-link');
        if(footer_link) {
            val.classList.replace('text-white-50', 'text-black-50')
        }
    });
}

//change dark/ light mode
function modeChange() {
    let theme = localStorage.getItem('data-theme');
    if(theme === 'light'){
        changeToDark();
    }
    else {
        changeToLight();
    }
}

let change_mode = document.getElementById('change_mode');
change_mode.addEventListener('click', modeChange);

//to stay dark or light when refresh the page
let themeNow = localStorage.getItem('data-theme');
window.addEventListener('load', ()=> {
    if(themeNow === 'dark'){
        changeToDark();
    }
    else {
        changeToLight();
    }

})
//////////////////////////////////////////////////////////////
// menu icon

    menuIcon.addEventListener('click', () => {
        menuIcon.classList.toggle('show');
    });