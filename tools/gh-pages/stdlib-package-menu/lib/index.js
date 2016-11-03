'use strict';

/**
* Generate a package HTML menu fragment.
*
* @module @stdlib/tools/gh-pages/package-menu
*
* @example
* var menu = require( '/path/to/package-menu' );
*
* menu( clbk );
*
* function clbk( error, results ) {
*     var html;
*     var css;
*     if ( error ) {
*         throw error;
*     }
*     html = results.html;
*     // returns '...'
*
*     css = results.css;
*     // returns '...'
* }
*/

// MODULES //

var menu = require( './menu.js' );


// EXPORTS //

module.exports = menu;
