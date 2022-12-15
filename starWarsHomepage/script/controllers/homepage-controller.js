window.addEventListener('scroll', function(){
    let value = window.scrollY;

    stars.style.left = value * 0.5 + 'px';

    moon.style.top = value * 1 + 'px';
    moon.style.marginLeft = value * 0.3 + 'px';

    planet.style.top = value * 1 + 'px';
    planet.style.marginLeft = value * 0.5 + 'px';

    mountains_behind.style.top = value * 0.5 + 'px';
    mountains_front.style.top = value * 0 + 'px';

    starDestroyer.style.marginLeft = value * 2 + 'px';
    starDestroyer.style.marginTop = value * 0.9 + 'px';
    //starDestroyer.style.transform = value + 'scale(2)';

    btn.style.marginTop = value * 1.5 + 'px';
})