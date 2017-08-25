'use strict';

// MODULES //

var debug = require( 'debug' )( 'remark-write-svg-equations:transformer' );
var resolve = require( 'path' ).resolve;
var join = require( 'path' ).join;
var writeFile = require( 'fs' ).writeFile;
var mkdirp = require( 'mkdirp' );
var visit = require( 'unist-util-visit' );
var tex2svg = require( '@stdlib/_tools/utils/tex-equation-to-svg' );


// VARIABLES //

var EQN_START = /<!-- <equation.*> -->/gi;
var LABEL = /label="eq:([^"]*)"/;
var RAW = /raw="([^"]*)"/;


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
	* @param {Node} tree - root node of the AST
	* @param {File} file - virtual file
	* @param {Callback} clbk - callback to invoke upon completion
	* @returns {void}
	*/
	function transformer( tree, file, clbk ) {
		var nodes;
		var total;
		var dir;
		var idx;

		nodes = [];

		debug( 'Processing virtual file: %s', file.path );
		visit( tree, 'html', visitor );

		total = nodes.length;
		idx = -1;

		debug( 'Found %d equations.', total );
		if ( total === 0 ) {
			return done();
		}
		dir = resolve( file.dirname, opts.dir );
		debug( 'Output directory: %s', dir );

		debug( 'Creating output directory...' );
		return mkdirp( dir, onDir );

		/**
		* Callback invoked upon finding a matching node.
		*
		* @private
		* @param {Node} node - AST node
		*/
		function visitor( node ) {
			if ( EQN_START.test( node.value ) === true ) {
				debug( 'Found an HTML equation.' );
				nodes.push( node );
			}
		} // end FUNCTION visitor()

		/**
		* Callback invoked upon attempting to create a destination directory.
		*
		* @private
		* @param {(Error|null)} error - error object
		* @returns {void}
		*/
		function onDir( error ) {
			if ( error ) {
				debug( 'Error encountered when attempting to create an output directory: %s', error.message );
				return done( error );
			}
			debug( 'Output directory created.' );

			debug( 'Creating SVGs...' );
			next();
		} // end FUNCTION onDir()

		/**
		* Creates the next SVG.
		*
		* @private
		* @returns {void}
		*/
		function next() {
			var raw;
			var err;

			idx += 1;
			raw = RAW.exec( nodes[ idx ].value );
			if ( raw === null ) {
				debug( 'Invalid node: %s', nodes[ idx ].value );
				err = new Error( 'invalid node. Equation comments must have valid raw equation text. Node: '+nodes[ idx ].value+'.' );
				return done( err );
			}
			raw = raw[ 1 ];
			debug( 'Raw equation: %s', raw );

			tex2svg( raw, onSVG );
		} // end FUNCTION next()

		/**
		* Callback invoked upon creating an SVG.
		*
		* @private
		* @param {(Error|null)} error - error object
		* @param {string} svg - SVG string
		* @returns {void}
		*/
		function onSVG( error, svg ) {
			var fopts;
			var fpath;
			var label;

			if ( error ) {
				debug( 'Error encountered when attempting to create an SVG. File: %s. : %s', file.path, error.message );
				return done( error );
			}
			label = LABEL.exec( nodes[ idx ].value );
			if ( label === null ) {
				debug( 'Invalid node: %s', nodes[ idx ].value );
				error = new Error( 'invalid node. Equation comments must have valid labels. Node: '+nodes[ idx ].value+'.' );
				return done( error );
			}
			label = label[ 1 ];
			debug( 'Equation label: %s', label );

			fpath = join( opts.dir, opts.prefix+label+'.svg' );
			fpath = resolve( file.dirname, fpath );
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
		* @returns {void}
		*/
		function onWrite( error ) {
			if ( error ) {
				debug( 'Error encountered when attempting to write an SVG to file: %s', error.message );
				return done( error );
			}
			debug( 'SVG successfully written to file.' );
			done();
		} // end FUNCTION onWrite()

		/**
		* Callback invoked once finished processing an AST.
		*
		* @private
		* @param {(Error|null)} error - error object
		* @returns {void}
		*/
		function done( error ) {
			if ( error ) {
				return clbk( error );
			}
			if ( idx === total-1 ) {
				debug( 'Finished processing virtual file.' );
				return clbk();
			}
			next();
		} // end FUNCTION done()
	} // end FUNCTION transformer()
} // end FUNCTION factory()


// EXPORTS //

module.exports = factory;
