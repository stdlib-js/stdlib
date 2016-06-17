'use strict';

// MODULES //

var rawgit = require( 'rawgit-url' );
var visit = require( 'unist-util-visit' );
var exec = require( 'child_process' ).execSync;
var path = require( 'path' );
var getSlug = require( './get_slug' );


// CONSTANTS //

var DIV_EQN = /<div class="equation"/g;
var IMG_SOURCE = /(<img src=")([^"]*)(")/g;
var LABEL = /data-equation="eq:([^"]*)">/;


// TRANSFORMER //

/**
* Factory method that returns transformer functions.
*
* @private
* @param {Object} options - transformer options
* @param {string} options.dir- resource directory
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
		* Insert rawgit URLs for SVG equations in the Markdown file.
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

				// [0] Get local git repository path and remove any newline characters:
				topdir = exec( 'git rev-parse --show-toplevel' ).toString();
				topdir = topdir.match( /(.+)/ )[ 1 ];

				// [1] Get absolute file path of current SVG:
				fpath = path.join( file.directory, opts.dir + label + '.svg' );

				// [2] Get file path relative to git repository:
				rpath = fpath.replace( topdir + path.sep, '' );

				// [3] Retrieve rawgit URL:
				url = rawgit({
					'slug': getSlug(),
					'file': rpath
				});

				// [4] Replace src attribute in <img> tag:
				node.value = node.value.replace( IMG_SOURCE, '$1'+url+'$3' );
			}
		}// end FUNCTION insertURLs()
	}; // end FUNCTION transformer()
} // end FUNCTION getTransformer()


// EXPORTS //

module.exports = getTransformer;
