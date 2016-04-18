(function() {
    'use strict';

    var elements;
    var newChild;
    var parent;
    var tex;
    var el;
    var i;

    elements = document.querySelectorAll( '.lang-tex' );

    for ( i = 0; i < elements.length; i++ ) {
        el = elements[ i ];

        // Get the TeX code:
        tex = el.querySelector( 'code' ).innerHTML;

        // Create a new element for rendering Tex:
        newChild = document.createElement( 'div' );

        // Set the child's content:
        newChild.innerHTML = '$$' + tex + '$$';

        // Get a reference to the parent node:
        parent = el.parentNode;

        // Replace the old child:
        parent.replaceChild( newChild, el );
    }

})();
