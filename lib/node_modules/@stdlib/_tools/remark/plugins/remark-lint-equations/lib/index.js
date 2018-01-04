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
* function done( error, file ) {
*     var i;
*     if ( error ) {
*         throw error;
*     }
*     for ( i = 0; i < file.messages.length; i++ ) {
*         console.error( file.messages[ i ].message );
*     }
* }
*/

// MODULES //

var lint = require( './main.js' );


// EXPORTS //

module.exports = lint;
