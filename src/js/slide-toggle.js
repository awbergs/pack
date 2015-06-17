(function(){

  function slidetoggle(toggles){

    for(var i = 0; i < toggles.length; i ++){
      var toggle = toggles[i];
      toggle._slideToggle = new _slidetoggle(toggle);
    }
  }

  function _slidetoggle(toggle){
    this.toggle = toggle;
    this.slide = document.querySelector(toggle.dataset.target);
    var _this = this;
    toggle.addEventListener('mouseenter', function(){
      _this.enter();
    });
    toggle.addEventListener('mouseleave', function(){
      _this.leave();
    });
  }

  _slidetoggle.prototype = {
    enter: function(){
      this.slide.classList.add('open');
    },
    leave: function(){
      this.slide.classList.remove('open');
    }
  }

  window.SlideToggle = slidetoggle;

})(window);
