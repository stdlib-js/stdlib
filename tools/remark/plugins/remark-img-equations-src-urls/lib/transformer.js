'use strict';

// MODULES //

var debug = require( 'debug' )( 'remark-img-equations-src-urls:transformer' );
var resolve = require( 'path' ).resolve;
var join = require( 'path' ).join;
var visit = require( 'unist-util-visit' );
var PATH_SEP = require( '@stdlib/constants/string/path-sep' );
var rawgit = require( '@stdlib/_tools/utils/rawgit-url' );
var git = require( './git.js' );


// VARIABLES //

var DIV_EQN = /<div class="equation"/;
var IMG_SOURCE = /(<img src=")([^"]*)(")/;
var LABEL = /data-equation="eq:([^"]*)">/;


// MAIN //

/**
* Returns a transformer function.
*
* @private
* @param {Options} opts - transformer options
* @param {string} opts.dir- resource directory
* @param {string} opts.prefix - filename prefix
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
	function transformer( tree, file ) {
		debug( 'Processing virtual file...' );
		visit( tree, 'html', visitor );

		/**
		* Callback invoked upon finding a matching node. Inserts rawgit URLs for image equations in Markdown equation elements.
		*
		* @private
		* @param {Node} node - reference node
		* @throws {Error} equation elements must have valid labels
		*/
		function visitor( node ) {
			var fpath;
			var rpath;
			var label;
			var url;

			if ( DIV_EQN.test( node.value ) === true ) {
				label = LABEL.exec( node.value );
				if ( label === null ) {
					debug( 'Invalid node: %s', node.value );
					throw new Error( 'invalid node. Equation element must have a valid label. Node: '+node.value+'.' );
				}
				label = label[ 1 ];
				debug( 'Equation label: %s', label );

				debug( 'File directory: %s', file.dirname );

				// Get absolute file path of current SVG (note: we assume that the `label` attribute matches the eqn filename):
				fpath = join( opts.dir, opts.prefix+label+'.svg' );
				debug( 'SVG filename: %s', fpath );

				fpath = resolve( file.dirname, fpath );
				debug( 'Absolute filepath: %s', fpath );

				// Get file path relative to git repository:
				rpath = fpath.replace( git.dir + PATH_SEP, '' );
				debug( 'Relative filepath: %s', rpath );

				// Retrieve rawgit URL:
				url = rawgit({
					'slug': git.hslug,
					'file': rpath
				});
				debug( 'Rawgit URL: %s', url );

				// Replace `src` attribute in `<img>` tag:
				node.value = node.value.replace( IMG_SOURCE, '$1'+url+'$3' );
			}
		}// end FUNCTION visitor()
	}
}


// EXPORTS //

module.exports = factory;
