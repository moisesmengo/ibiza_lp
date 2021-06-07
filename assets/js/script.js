function mudarHeader() {
  const header = document.querySelector("header");
  window.addEventListener("scroll", () => {
    header.classList.toggle("headerbg", window.scrollY > 50);
  });
}
mudarHeader();

function menuMobile() {
  const btnMobile = document.querySelector("#btn_mobile");

  const toggleMenu = (event) => {
    if (event.type === "touchstart") event.preventDefault();
    const nav = document.querySelector(".nav-menu");
    nav.classList.toggle("ativo");
    btnMobile.classList.toggle("ativo");
  };

  btnMobile.addEventListener("click", toggleMenu);
  btnMobile.addEventListener("touchstart", toggleMenu);
}
menuMobile();


function scrollSuave(){
  const menuItens = document.querySelectorAll(".nav-menu a[href^='#']" );

  const scrollar = (event) => {
    event.preventDefault()
    const element = event.target
    const id = element.getAttribute('href')
    const to = document.querySelector(id).offsetTop

    window.scroll({
      top: to - 120,
      behavior:"smooth"
    })
  }

  menuItens.forEach(item => {
    item.addEventListener('click', scrollar )
  })
}
scrollSuave();

//menu active
function menuActive(){
  const links = document.querySelectorAll('.nav-menu li')
  
  const handleLink = (event) => {
    links.forEach(link => {
      link.classList.remove('ativo')
    })
    event.currentTarget.classList.add('ativo')
  }

  links.forEach(link => {
    link.addEventListener('click', handleLink)
  })
}
menuActive()