(function(){

  var toggles = document.querySelectorAll('.slide-toggle');

  for(var i = 0; i < toggles.length; i ++){
    var toggle = toggles[i];

    toggle.addEventListener('mouseenter', toggleEnter);
    toggle.addEventListener('mouseleave', toggleOut);
  }

  function toggleEnter(){
    var slide = document.querySelector(this.dataset.target);
    slide.classList.add('open');
  }

  function toggleOut(){
    var slide = document.querySelector(this.dataset.target);
    slide.classList.remove('open');
  }

})();
