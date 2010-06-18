Class: Overlay (#Overlay)
=============================

### Implements:

Options, Events

Overlay Method: constructor (#Overlay: constructor)
------------------------------------------------------


### Syntax:

    var overlay = new Overlay(container,options);

### Arguments: 

1. container - (*String*) The ID of the container (usually document.body) which will host the overlay.
2. options - (*Object*) The options for the Overlay instance.

### Options:

* id - (*String*, default to 'overlay') - The ID of the overlay to be created.
* color - (*String*, default to '#000') - The base background color of the overlay. 
* duration - (*integer*, default to 500) - The open/close duration of the overlay.
* opacity - (*float*, default to 0.5) - The destination opacity level of the overlay.
* zIndex - (*integer*, default to 5000) - The 'z-index' of the overlay.


### Returns:

* (*Object*) A new Overlay instance.

### Events:

### click

* (*function*) the function is fired when the overlay is clicked.

### Signature:

    onClick();

### Example:

    onClick: function(){
           this.close(); 
    } 

### close

* (*function*) the function is invoked immediately after the close directive has been given (before the opacity fade has completed).

### Signature:

   onClose();

### hide

* (*function*) the function is invoked when the overlay has been completely hidden (after the 'close' event).

### Signature

  onHide();

### open

* (*function*) The function is fired when the open directive has been given (before the opacity fade has been completed).

### Signature:

   onOpen();


### show

* (*function*) The function is fired when the overlay is completed (after the 'open' event).

### Signature:

   onShow();





