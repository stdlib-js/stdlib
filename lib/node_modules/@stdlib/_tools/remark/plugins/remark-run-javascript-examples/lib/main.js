'use strict';

// MODULES //

var transformer = require( './transformer.js' );


// MAIN //

/**
* Attaches a plugin to a remark processor in order to run JavaScript examples.
*
* @returns {Function} transformer
*
* @example
* var remark = require( 'remark' );
*
* var str = '<section class="examples">\n\n## Examples\n\n```javascript\nconsole.log( "HELLO WORLD!" );\n```\n\n</section>\n\n<!-- /.examples -->';
*
* remark.use( transformer ).process( str, done );
* // => 'HELLO WORLD'
*
* function done( error ) {
*     if ( error ) {
*         throw error;
*     }
* }
*/
function attacher() {
	return transformer;
} // end FUNCTION attacher()


// EXPORTS //

module.exports = attacher;
