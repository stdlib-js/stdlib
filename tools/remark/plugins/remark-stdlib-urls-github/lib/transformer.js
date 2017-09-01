'use strict';

// MODULES //

var debug = require( 'debug' )( 'remark-stdlib-urls-github:transformer' );
var visit = require( 'unist-util-visit' );
var replace = require( '@stdlib/string/replace' );


// VARIABLES //

var RE_STDLIB = /^@stdlib\//;
var BASE_URL = 'https://github.com/stdlib-js/stdlib/tree/';


// MAIN //

/**
* Returns a transformer function.
*
* @private
* @param {Options} opts - transformer options
* @param {string} opts.branch - repository branch
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
			var id;

			debug( 'Found a definition: %s', node.identifier );
			if ( RE_STDLIB.test( node.identifier ) ) {
				debug( 'Found a package identifier.' );
				id = replace( node.identifier, '@', '%40' );

				debug( 'Current URL: %s', node.url );
				node.url = BASE_URL + opts.branch + '/lib/node_modules/' + id;

				debug( 'Resolved URL: %s', node.url );
			}
		}// end FUNCTION visitor()
	} // end FUNCTION transformer()
} // end FUNCTION factory()


// EXPORTS //

module.exports = factory;
