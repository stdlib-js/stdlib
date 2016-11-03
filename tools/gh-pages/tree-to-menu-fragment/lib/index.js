'use strict';

/**
* Generate a menu HTML fragment from a tree object.
*
* @module @stdlib/tools/gh-pages/tree-to-menu-fragment
*
* @example
* var menu = require( '/path/to/tree-to-menu-fragment' );
*
* var tree = {
*     'foo': true,
*     'bar': {
*         'a': true,
*         'b': true
*     }
* };
* var html = menu( tree );
* // returns '...'
*
* var css = menu.css;
* // returns '...'
*/

// MODULES //

var prefix = require( './stdlib.js' );
var setReadOnly = require( prefix+'@stdlib/utils/define-read-only-property' );
var menu = require( './menu.js' );
var css = require( './css.js' );


// MAIN //

setReadOnly( menu, 'css', css );


// EXPORTS //

module.exports = menu;
