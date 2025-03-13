function header(){
  var lastScrollTop;
  nav = document.getElementById('nav');
  window.addEventListener('scroll',function(){
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if(scrollTop > lastScrollTop){
      nav.style.top='-150px';
      nav.style.opacity="100%";
    } 
    else{
      nav.style.top='0';
      nav.style.opacity="100%";
    }
    lastScrollTop = scrollTop;
  });
}


