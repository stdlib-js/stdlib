'use strict';

// MODULES //

var tex2svg = require( 'tex-equation-to-svg' );
var mkdirp = require( 'mkdirp' );
var visit = require( 'unist-util-visit' );
var path = require( 'path' );
var fs = require( 'fs' );


// CONSTANTS //

var DIV_EQN = /<div class="equation"/g;
var LABEL = /data-equation="eq:([^"]*)">/;
var RAW = /data-raw-text="([^"]*)"/;


// TRANSFORMER //

/**
* Factory method that returns transformer functions.
*
* @private
* @param {Object} options - transformer options
* @param {string} options.dir- resource directory
* @returns {Function} transformer function
*/
function transformerFactory( opts ) {
	/**
	* Transforms a Markdown file.
	*
	* @private
	* @param {Node} ast - root node
	* @param {File} file - Virtual file.
	*/
	return function transformer( ast, file ) {
		// Create ./docs/img folder to house SVGs
		mkdirp( path.join( file.directory, opts.dir ), onDone );

		/**
		* Callback invoked upon creating the /docs/img directory.
		*
		* @private
		* @param {Error|null} err - error object
		*/
		function onDone( err ) {
			if ( err ) {
				throw err;
			}
			visit( ast, 'html', generateSVGs );
		} // end FUNCTION onDone()

		/**
		* Generate SVGs for DIV equations in the Markdown file.
		*
		* @private
		* @param {Node} node - reference node
		*/
		function generateSVGs( node ) {
			var label;
			var raw;
			if ( DIV_EQN.test( node.value ) === true ) {
				label = LABEL.exec( node.value )[ 1 ];
				raw = RAW.exec( node.value )[ 1 ];
				createSVG( raw, label );
			}
		} // end FUNCTION generateSVGs()

		/**
		* Create SVG for the respective equation.
		*
		* @private
		* @param {string} tex - equation LaTeX formula
		* @param {string} label - equation label (used to generate filename)
		* @param {Function} clbk - callback function
		*/
		function createSVG( tex, label, clbk ) {
			tex2svg( tex, saveSVG );
			/**
			* Save created SVG to disk.
			*
			* @private
			* @param {Error|null} err - error object
			* @param {string} svg - SVG code
			*/
			function saveSVG( err, svg ) {
				var outfile;
				if ( err ) {
					throw err;
				}
				outfile = path.join( file.directory, opts.dir + label + '.svg' );
				fs.writeFile( outfile, svg, clbk );
			} // end FUNCTION saveSVG()
		} // end FUNCTION createSVG()

	}; // end FUNCTION transformer()
} // end FUNCTION transformerFactory()

// EXPORTS //

module.exports = transformerFactory;
