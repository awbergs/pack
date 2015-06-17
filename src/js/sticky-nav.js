(function(window, document){

  function stickynav(header){
    this.stuck = false;
    this.height = header.offsetHeight;
    this.throttleTimeout = null;
    this.throttle = 25;

    var _this = this;
    function windowScrollHandler(){
      _this.stick(document.body.scrollTop >= _this.height)
      clearTimeout(_this.throttleTimeout);
      _this.throttleTimeout = null;
    }

    window.addEventListener('scroll', function(){
      if(!_this.throttleTimeout){
        _this.throttleTimeout = setTimeout(windowScrollHandler, _this.throttle);
      }
    });
  }

  stickynav.prototype = {
    stick: function(stick){
      if(stick && !this.stuck){
        document.body.setAttribute('stickynav', true); 
        this.stuck = true;
      }
      else if(!stick && this.stuck){
        document.body.removeAttribute('stickynav'); 
        this.stuck = false;
      }
    }
  }

  window.StickyNav = stickynav;

})(window, document);
