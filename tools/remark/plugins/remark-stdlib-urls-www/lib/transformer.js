'use strict';

// MODULES //

var debug = require( 'debug' )( 'remark-stdlib-urls-www:transformer' );
var visit = require( 'unist-util-visit' );


// VARIABLES //

var RE_STDLIB = /^@stdlib\//;
var BASE_URL = 'https://stdlib.io/';


// MAIN //

/**
* Returns a transformer function.
*
* @private
* @param {Options} opts - transformer options
* @param {string} opts.version - documentation version
* @returns {Function} transformer function
*/
function factory( opts ) {
	return transformer;
	/**
	* Transforms a Markdown abstract syntax tree (AST).
	*
	* @private
	* @param {Node} tree - root AST node
	* @param {File} file - virtual file
	*/
	function transformer( tree ) {
		debug( 'Processing virtual file...' );
		visit( tree, 'definition', visitor );

		/**
		* Callback invoked upon finding a matching node.
		*
		* @private
		* @param {Node} node - reference node
		*/
		function visitor( node ) {
			debug( 'Found a definition: %s', node.identifier );
			if ( RE_STDLIB.test( node.identifier ) ) {
				debug( 'Found a package identifier.' );

				debug( 'Current URL: %s', node.url );
				node.url = BASE_URL + opts.version + '/docs/api/' + node.identifier;

				debug( 'Resolved URL: %s', node.url );
			}
		}// end FUNCTION visitor()
	} // end FUNCTION transformer()
} // end FUNCTION factory()


// EXPORTS //

module.exports = factory;
