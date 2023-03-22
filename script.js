const wrapper = document.querySelector( '.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.login');
const iconClose = document.querySelector('.close');
const toggleBtn = document.querySelector('.toggle_btn');
const toggleBtnIcon = document.querySelector('.toggle_btn i');
const dropDownMenu = document.querySelector('.dropdown-menu');

registerLink.addEventListener('click', ()=> {
    wrapper.classList. add('active');
});

loginLink.addEventListener('click', ()=> {
    wrapper.classList. remove('active');
});

btnPopup.addEventListener('click', ()=> {
    wrapper.classList. add('active-popup');
});

iconClose.addEventListener('click', ()=> {
    wrapper.classList. remove('active-popup');
});  
  
  function reveal() {
            var reveals = document.querySelectorAll(".reveal");

            for (var i = 0; i < reveals.length; i++) {
                var windowHeight = window.innerHeight;
                var elementTop = reveals[i].getBoundingClientRect().top;
                var elementVisible = 150;

                if (elementTop < windowHeight - elementVisible) {
                    reveals[i].classList.add("active");
                } else {
                    reveals[i].classList.remove("active");
                }
            }
        }

        window.addEventListener("scroll", reveal);

