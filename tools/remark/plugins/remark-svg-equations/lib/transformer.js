'use strict';

// MODULES //

var debug = require( 'debug' )( 'remark-svg-equations:transformer' );
var tex2svg = require( 'tex-equation-to-svg' );
var mkdirp = require( 'mkdirp' );
var visit = require( 'unist-util-visit' );
var resolve = require( 'path' ).resolve;
var join = require( 'path' ).join;
var writeFile = require( 'fs' ).writeFile;


// CONSTANTS //

var DIV_EQN = /<div class="equation"/g;
var LABEL = /data-equation="eq:([^"]*)">/;
var RAW = /data-raw-text="([^"]*)"/;


// MAIN //

/**
* Returns a transformer function.
*
* @private
* @param {Options} options - transformer options
* @param {string} options.dir- resource directory
* @returns {Function} transformer function
*/
function transformerFactory( opts ) {
	/**
	* Transforms a Markdown file.
	*
	* @private
	* @param {Node} ast - root node
	* @param {File} file - Virtual file
	*/
	return function transformer( ast, file ) {
		var dirflg;

		debug( 'Processing virtual file...' );
		visit( ast, 'html', generateSVGs );

		/**
		* Generate SVGs from Markdown HTML equation elements.
		*
		* @private
		* @param {Node} node - reference node
		*/
		function generateSVGs( node ) {
			var label;
			var raw;
			var dir;
			if ( DIV_EQN.test( node.value ) === true ) {
				debug( 'Found an HTML equation.' );

				label = LABEL.exec( node.value )[ 1 ];
				debug( 'Equation label: %s', label );

				raw = RAW.exec( node.value )[ 1 ];
				debug( 'Raw equation: %s', raw );

				// Check if we may need to create a destination directory...
				if ( !dirflg ) {
					dir = resolve( file.directory, opts.dir );
					debug( 'Output directory: %s', dir );

					debug( 'Creating output directory...' );
					mkdirp( dir, onDir );

					dirflg = true;
				} else {
					debug( 'Creating SVG...' );
					tex2svg( raw, onSVG );
				}
			}

			/**
			* Callback invoked upon attempting to create a destination directory.
			*
			* @private
			* @param {(Error|null)} error - error object
			*/
			function onDir( error ) {
				if ( error ) {
					debug( 'Error encountered when attempting to create an output directory: %s', error.message );
					throw error;
				}
				debug( 'Output directory created.' );

				debug( 'Creating SVG...' );
				tex2svg( raw, onSVG );
			} // end FUNCTION onDir()

			/**
			* Callback invoked upon creating an SVG.
			*
			* @private
			* @param {(Error|null)} error - error object
			* @param {string} svg - SVG string
			*/
			function onSVG( error, svg ) {
				var fopts;
				var fpath;
				if ( error ) {
					debug( 'Error encountered when attempting to create an SVG: %s', error.message );
					throw error;
				}
				fpath = join( opts.dir, label+'.svg' );
				fpath = resolve( file.directory, fpath );
				debug( 'Absolute filepath: %s', fpath );

				fopts = {
					'encoding': 'utf8'
				};

				debug( 'Writing SVG to file...' );
				writeFile( fpath, svg, fopts, onWrite );
			} // end FUNCTION onSVG()

			/**
			* Callback invoked upon writing an SVG to file.
			*
			* @param {(Error|null)} error - error object
			*/
			function onWrite( error ) {
				if ( error ) {
					debug( 'Error encountered when attempting to write an SVG to file: %s', error.message );
					throw error;
				}
				debug( 'SVG successfully written to file.' );
			} // end FUNCTION onWrite()
		} // end FUNCTION createSVG()
	}; // end FUNCTION transformer()
} // end FUNCTION transformerFactory()


// EXPORTS //

module.exports = transformerFactory;
