function menuShow() {
    let responsive = document.querySelector('.responsive');
    if (responsive.classList.contains('open')) {
        responsive.classList.remove('open');
        document.querySelector('.icon').src = "assets/img/menu-sanduiche.svg";
    }else {
        responsive.classList.add('open');
        document.querySelector('.icon').src = "assets/img/fechar.svg";
    }
}