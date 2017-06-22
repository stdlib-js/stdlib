'use strict';

/**
* Generate a package HTML menu fragment.
*
* @module @stdlib/tools/docs/api/package-menu
*
* @example
* var menu = require( '@stdlib/tools/docs/api/package-menu' );
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
