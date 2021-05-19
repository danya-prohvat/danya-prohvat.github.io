let burgerBtn = document.querySelector('.burger__btn'),
    burgerMenu = document.querySelector('.burger__menu');



burgerBtn.addEventListener('click', function() {
    if (!burgerBtn.classList.contains('burger__btn_active')){
        burgerBtn.classList.add('burger__btn_active');
        burgerMenu.classList.add('burger__menu_active');
        document.body.style.overflow = "hidden";
    }else {
        burgerBtn.classList.remove('burger__btn_active');
        burgerMenu.classList.remove('burger__menu_active');
        document.body.style.overflow = "";
    }
});