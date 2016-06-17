'use strict';

// MODULES //

var rawgit = require( 'rawgit-url' );
var visit = require( 'unist-util-visit' );
var exec = require( 'child_process' ).execSync;
var path = require( 'path' );
var getSlug = require( './get_slug.js' );


// CONSTANTS //

var DIV_EQN = /<div class="equation"/g;
var IMG_SOURCE = /(<img src=")([^"]*)(")/g;
var LABEL = /data-equation="eq:([^"]*)">/;


// TRANSFORMER //

/**
* Returns a transformer function.
*
* @private
* @param {Options} opts - transformer options
* @param {string} opts.dir- resource directory
* @returns {Function} transformer function
*/
function getTransformer( opts ) {
	/**
	* Transforms a Markdown file.
	*
	* @private
	* @param {Node} ast - root node
	* @param {File} file - Virtual file.
	*/
	return function transformer( ast, file ) {
		visit( ast, 'html', insertURLs );

		/**
		* Insert rawgit URLs for SVG equations in Markdown HTML equation elements.
		*
		* @private
		* @param {Node} node - reference node
		*/
		function insertURLs( node ) {
			var topdir;
			var fpath;
			var rpath;
			var label;
			var url;
			if ( DIV_EQN.test( node.value ) === true ) {
				label = LABEL.exec( node.value )[ 1 ];

				// Get local git repository path and remove any newline characters:
				topdir = exec( 'git rev-parse --show-toplevel' ).toString();
				topdir = topdir.match( /(.+)/ )[ 1 ];

				// Get absolute file path of current SVG (note: we assume that the `label` attribute matches the eqn filename):
				fpath = path.resolve( file.directory, opts.dir + label + '.svg' );

				// Get file path relative to git repository:
				rpath = fpath.replace( topdir + path.sep, '' );

				// Retrieve rawgit URL:
				url = rawgit({
					'slug': getSlug( topdir ),
					'file': rpath
				});

				// Replace `src` attribute in `<img>` tag:
				node.value = node.value.replace( IMG_SOURCE, '$1'+url+'$3' );
			}
		}// end FUNCTION insertURLs()
	}; // end FUNCTION transformer()
} // end FUNCTION getTransformer()


// EXPORTS //

module.exports = getTransformer;
