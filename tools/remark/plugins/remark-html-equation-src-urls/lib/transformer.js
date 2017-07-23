'use strict';

// MODULES //

var debug = require( 'debug' )( 'remark-html-equation-src-urls:transformer' );
var resolve = require( 'path' ).resolve;
var join = require( 'path' ).join;
var rawgit = require( 'rawgit-url' );
var visit = require( 'unist-util-visit' );
var PATH_SEP = require( '@stdlib/string/constants/path-sep' );
var git = require( './git.js' );


// VARIABLES //

var DIV_EQN = /<div class="equation"/g;
var IMG_SOURCE = /(<img src=")([^"]*)(")/g;
var LABEL = /data-equation="eq:([^"]*)">/;


// MAIN //

/**
* Returns a transformer function.
*
* @private
* @param {Options} opts - transformer options
* @param {string} opts.dir- resource directory
* @returns {Function} transformer function
*/
function getTransformer( opts ) {
	return transformer;
	/**
	* Transforms a Markdown file.
	*
	* @private
	* @param {Node} ast - root node
	* @param {File} file - Virtual file
	*/
	function transformer( ast, file ) {
		debug( 'Processing virtual file...' );
		visit( ast, 'html', insertURLs );

		/**
		* Insert SVG equation rawgit URLs in Markdown HTML equation elements.
		*
		* @private
		* @param {Node} node - reference node
		*/
		function insertURLs( node ) {
			var fpath;
			var rpath;
			var label;
			var url;
			if ( DIV_EQN.test( node.value ) === true ) {
				label = LABEL.exec( node.value )[ 1 ];
				debug( 'Equation label: %s', label );

				// Get absolute file path of current SVG (note: we assume that the `label` attribute matches the eqn filename):
				debug( 'File directory: %s', file.dirname );
				fpath = join( opts.dir, label+'.svg' );
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
		}// end FUNCTION insertURLs()
	} // end FUNCTION transformer()
} // end FUNCTION getTransformer()


// EXPORTS //

module.exports = getTransformer;
