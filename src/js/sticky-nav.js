(function(window){

  var headerHeight = document.getElementById('header').offsetHeight;
  var isSticky = false;

  function makeSticky(){
    if(!isSticky){
      document.body.setAttribute('stickynav', true); 
      isSticky = true;
    }
  }

  function makeUnSticky(){
    if(isSticky){
      document.body.removeAttribute('stickynav'); 
      isSticky = false;
    }
  }

  var handlerTimeout = null;

  function windowScrollHandler(){
    if(document.body.scrollTop >= headerHeight){
      makeSticky();
    }
    else{
      makeUnSticky();
    }

    clearTimeout(handlerTimeout);
    handlerTimeout = null;
  }

  window.addEventListener('scroll', function(){
    if(!handlerTimeout){
      handlerTimeout = setTimeout(windowScrollHandler, 25);
    }
  });

})(window);
