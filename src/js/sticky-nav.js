(function(window, document){

  function stickynav(header){
    this.stuck = false;
    this.height = header.offsetHeight;
    this.throttleTimeout = null;
    this.throttle = 25;

    var _this = this;

    function makeSticky(){
      if(!_this.stuck){
        document.body.setAttribute('stickynav', true); 
        _this.stuck = true;
      }
    }

    function makeUnSticky(){
      if(_this.stuck){
        document.body.removeAttribute('stickynav'); 
        _this.stuck = false;
      }
    }

    function windowScrollHandler(){
      if(document.body.scrollTop >= _this.height){
        makeSticky();
      }
      else{
        makeUnSticky();
      }

      clearTimeout(_this.throttleTimeout);
      _this.throttleTimeout = null;
    }

    window.addEventListener('scroll', function(){
      if(!_this.throttleTimeout){
        _this.throttleTimeout = setTimeout(windowScrollHandler, _this.throttle);
      }
    });
  }

  window.StickyNav = stickynav;

})(window, document);
