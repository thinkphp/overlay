var Overlay = new Class({

    Implements: [Options,Events],

    options: {
        id: 'overlay',
        color: '#000',  
        duration: 500,
        opacity: 0.5,
        zIndex: 5000/*
        onClick: $empty,
        onClose: $empty, 
        onHide: $empty,
        onOpen: $empty,
        onShow: $empty 
      */
    },

    initialize: function(container,options) {

        this.setOptions(options);

        this.container = document.id(container);

        this.overlay = new Element('div',{

             id: this.options.id,

             opacity: 0,
  
             styles: {

                   position: 'absolute',

                   background: this.options.color,
 
                   left: 0,

                   top: 0,

                   'z-index': this.options.zIndex
             },

             events: {

                   click: function() {

                          this.fireEvent('click');
 
                   }.bind(this)
             } 

        }).inject(this.container);          

        this.tween = new Fx.Tween(this.overlay,{

                         duration: this.options.duration,

                         link: 'cancel',

                         property: 'opacity',

                         onStart: function() {

                               var size = this.container.getScrollSize();

                               this.overlay.setStyles({width: size.x,height: size.y});

                         }.bind(this),

                         onComplete: function(){

                               this.fireEvent(this.overlay.get('opacity') == this.options.opacity ? 'show' : 'hide');

                         }.bind(this)

                     });
    },

    open: function() {

        this.fireEvent('open');

        this.tween.start(this.options.opacity);
    },

    close: function() {

        this.fireEvent('close'); 

        this.tween.start(0);
    }
});//end class Overlay