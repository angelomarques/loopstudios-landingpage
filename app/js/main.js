const navBtn = document.querySelector('.header__navBtn');
const overlay = document.querySelector('.hero__overlay');

navBtn.addEventListener('click', ()=>{
    if(navBtn.classList.contains('active')){
        navBtn.classList.remove('active');
        overlay.classList.remove('fadeIn');
        overlay.classList.add('fadeOut');
        document.body.style.overflowY = 'visible';
    } else{
        navBtn.classList.add('active');
        overlay.classList.remove('fadeOut');
        overlay.classList.add('fadeIn');
        document.body.style.overflowY = 'hidden';
    }
})

// change the background for mobile and desktop

function changeBackground() {
    const productsItem = document.querySelectorAll('.products__item');
    let screenType = '';

    if(window.innerWidth < 640){
        screenType = 'mobile';
    }    else{
        screenType = 'desktop';
    }

    productsItem.forEach(item=>{
        item.style.backgroundImage = `url('/images/${screenType}/image-${item.id}.jpg')`;
    })
}

changeBackground();

window.addEventListener('resize', changeBackground)