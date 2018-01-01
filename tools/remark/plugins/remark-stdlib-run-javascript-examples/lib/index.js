'use strict';

/**
* remark plugin to run JavaScript examples.
*
* @module @stdlib/tools/remark/plugins/remark-stdlib-run-javascript-examples
*
* @example
* var remark = require( 'remark' );
* var run = require( '@stdlib/tools/remark/plugins/remark-stdlib-run-javascript-examples' );
*
* var str = '## Examples\n\n```javascript\nconsole.log( "HELLO WORLD!" );\n```';
*
* remark.use( run ).process( str, done );
* // => 'HELLO WORLD'
*
* function done( error ) {
*     if ( error ) {
*         throw error;
*     }
* }
*/

// MODULES //

var attacher = require( './main.js' );


// EXPORTS //

module.exports = attacher;
