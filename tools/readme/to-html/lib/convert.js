'use strict';

// MODULES //

var debug = require( 'debug' )( 'readme-to-html' );
var resolve = require( 'path' ).resolve;
var writeFile = require( 'fs' ).writeFile;
var mustache = require( 'mustache' );
var isString = require( '@stdlib/assert/is-string' ).isPrimitive;
var isFunction = require( '@stdlib/assert/is-function' );
var readFile = require( '@stdlib/fs/read-file' );
var cwd = require( '@stdlib/utils/cwd' );
var copy = require( '@stdlib/utils/copy' );
var toHTML = require( './../../../markdown/to-html' );
var defaults = require( './defaults.json' );
var validate = require( './validate.js' );
var template = require( './html_template.js' );
var styles = require( './styles.js' );


// MAIN //

/**
* Converts a package README to HTML.
*
* @param {string} file - input file path
* @param {Options} [options] - options
* @param {string} [options.out] - output file path
* @param {string} [options.tests] - tests URL
* @param {string} [options.benchmarks] - benchmarks URL
* @param {string} [options.source] - source URL
* @param {boolean} [options.fragment] - output an HTML fragment
* @param {string} [options.title] - HTML title
* @param {string} [options.head] - content to insert into HTML head
* @param {string} [options.prepend] - content to prepend to HTML body
* @param {string} [options.append] - content to append to HTML body
* @param {Callback} clbk - callback to invoke after converting README
* @throws {TypeError} first argument must be a string
* @throws {TypeError} options argument must be an object
* @throws {TypeError} must provide valid options
* @throws {TypeError} callback argument must be a function
*
* @example
* var opts = {
*     'title': 'beep boop'
* };
*
* var src = '/beep/boop/README.md';
*
* convert( src, opts, clbk );
*
* function clbk( error, html ) {
*     if ( error ) {
*         throw error;
*     }
*     console.log( html );
* }
*/
function convert( file, options, clbk ) {
	var prepend;
	var append;
	var opts;
	var head;
	var err;
	var src;
	var dir;
	var out;
	var cb;

	if ( !isString( file ) ) {
		throw new TypeError( 'invalid input argument. First argument must be a string. Value: `'+file+'`.' );
	}
	opts = copy( defaults );
	if ( arguments.length < 3 ) {
		cb = options;
	} else {
		cb = clbk;
		err = validate( opts, options );
		if ( err ) {
			throw err;
		}
	}
	if ( !isFunction( cb ) ) {
		throw new TypeError( 'invalid input argument. Callback argument must be a function. Value: `'+cb+'`.' );
	}
	dir = cwd();
	debug( 'Current working directory: %s', dir );

	src = resolve( dir, file );
	debug( 'Source filepath: %s', src );

	if ( opts.out ) {
		out = resolve( dir, opts.out );
		debug( 'Destination filepath: %s', out );
	}
	if ( !opts.fragment ) {
		head = styles.slice();
		if ( opts.head ) {
			head.push( opts.head );
		}
		if ( opts.prepend ) {
			prepend = [ opts.prepend ];
		}
		if ( opts.append ) {
			append = [ opts.append ];
		}
	}
	debug( 'Reading file...' );
	readFile( src, onRead );

	/**
	* Callback invoked upon reading a file.
	*
	* @private
	* @param {(Error|null)} error - error object
	* @param {Buffer} file - file
	*/
	function onRead( error, file ) {
		var wopts;
		var html;
		var view;
		if ( error ) {
			debug( 'Encountered an error when attempting to read file: %s', error.message );
			return done();
		}
		debug( 'Successfully read file.' );

		debug( 'Converting file content to HTML...' );
		html = toHTML( file );

		if ( !opts.fragment ) {
			view = {
				'title': opts.title,
				'tests': opts.tests,
				'benchmarks': opts.benchmarks,
				'source': opts.source,
				'head': head,
				'prepend': prepend,
				'append': append,
				'readme': html
			};
			// debug( 'Render options: %s', JSON.stringify( view ) );
			debug( 'Rendering...' );
			html = mustache.render( template, view );
			debug( 'Finished rendering.' );
		}
		if ( out === void 0 ) {
			return done( null, html );
		}
		debug( 'Writing to file...' );
		wopts = {
			'encoding': 'utf8'
		};
		writeFile( out, html, wopts, onWrite );
	} // end FUNCTION onRead()

	/**
	* Callback invoked upon writing to file.
	*
	* @private
	* @param {(Error|null)} error - error object
	*/
	function onWrite( error ) {
		if ( error ) {
			debug( 'Encountered an error when writing to file: %s', error.message );
			return done( error );
		}
		debug( 'Successfully wrote to file.' );
		done();
	} // end FUNCTION onWrite()

	/**
	* Callback invoked once finished.
	*
	* @private
	* @param {(Error|null)} error - error object
	* @param {string} html - rendered HTML
	*/
	function done( error, html ) {
		if ( error ) {
			return cb( error );
		}
		if ( html ) {
			return cb( null, html );
		}
		cb();
	} // end FUNCTION done()
} // end FUNCTION convert()


// EXPORTS //

module.exports = convert;
