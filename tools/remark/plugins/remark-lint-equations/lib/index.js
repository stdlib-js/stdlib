'use strict';

/**
* remark lint plugin for linting Markdown equation elements.
*
* @module @stdlib/_tools/remark/plugins/remark-lint-equations
*
* @example
* var remark = require( 'remark' );
* var lint = require( '@stdlib/_tools/remark/plugins/remark-lint-equations' );
*
* var str = '# Beep\n\nBoop.';
*
* remark().use( lint ).process( str, done );
*
* function done( error ) {
*     if ( error ) {
*         throw error;
*     }
* }
*/

// MODULES //

var lint = require( './main.js' );


// EXPORTS //

module.exports = lint;
