'use strict';

// MODULES //

var resolve = require( 'path' ).resolve;
var glob = require( 'glob' );
var tape = require( 'tape' );
var getKeys = require( 'object-keys' ).shim();
var isFunction = require( '@stdlib/assert/is-function' );
var isString = require( '@stdlib/assert/is-string' ).isPrimitive;
var copy = require( '@stdlib/utils/copy' );
var cwd = require( '@stdlib/utils/cwd' );
var dirname = require( '@stdlib/utils/dirname' );
var readFile = require( '@stdlib/fs/read-file' );
var defaults = require( './defaults.json' );
var validate = require( './validate.js' );
var compile = require( './compile.js' );
var createRequire = require( './create_require.js' );
var coverage = require( './coverage.js' );


// MAIN //

/**
* Test runner for instrumented source code.
*
* @private
* @param {string} pattern - search pattern
* @param {Options} [options] - function options
* @param {string} [options.dir] - root directory from which to search for test files
* @param {string} [options.global='__coverage__'] - global coverage variable
* @param {Callback} clbk - callback to invoke upon completion
* @throws {TypeError} first argument must be a primitive string
* @throws {TypeError} last argument must be a function
* @throws {TypeError} options argument must be an object
* @throws {TypeError} must provide valid options
*
* @example
* var pattern = 'test*.js';
*
* var opts = {
*     'dir': process.cwd()
* };
*
* function done( error, coverage ) {
*     if ( error ) {
*         throw error;
*     }
*     console.log( JSON.stringify( coverage ) );
* }
*
* runner( pattern, opts, done );
*/
function runner() {
	var pattern;
	var options;
	var gopts;
	var clbk;
	var opts;
	var err;
	var dir;

	pattern = arguments[ 0 ];
	if ( !isString( pattern ) ) {
		throw new TypeError( 'invalid input argument. First argument must be a primitive string. Value: `'+pattern+'`.' );
	}
	opts = copy( defaults );
	if ( arguments.length > 2 ) {
		options = arguments[ 1 ];
		clbk = arguments[ 2 ];
		err = validate( opts, options );
		if ( err ) {
			throw err;
		}
	} else {
		clbk = arguments[ 2 ];
	}
	dir = cwd();
	if ( opts.dir === void 0 ) {
		opts.dir = dir;
	} else {
		opts.dir = resolve( dir, opts.dir );
	}
	if ( !isFunction( clbk ) ) {
		throw new TypeError( 'invalid input argument. Last argument must be a function. Value: `'+clbk+'`.' );
	}
	gopts = {
		'cwd': opts.dir,
		'realpath': true // return absolute file paths
	};
	glob( pattern, gopts, onGlob );

	/**
	* Callback invoked upon receiving glob results.
	*
	* @private
	* @param {(Error|null)} error - error object
	* @param {StringArray} files - absolute filepaths for filenames which matched the glob pattern
	*/
	function onGlob( error, files ) {
		if ( error ) {
			return done( error );
		}
		readFiles( files );
	} // end FUNCTION onGlob()

	/**
	* Reads files.
	*
	* @private
	* @param {StringArray} files - files to read
	*/
	function readFiles( files ) {
		var count;
		var cache;
		var opts;
		var cb;
		var i;

		opts = {
			'encoding': 'utf8'
		};
		count = 0;
		cache = {};
		for ( i = 0; i < files.length; i++ ) {
			cb = onRead( files[ i ], onData );
			readFile( files[ i ], opts, cb );
		}
		/**
		* Callback invoked upon reading a file.
		*
		* @private
		* @param {string} filename - filename
		* @param {string} data - content
		*/
		function onData( filename, data ) {
			cache[ filename ] = data;
			count += 1;
			if ( count === files.length ) {
				compileFiles( cache );
			}
		} // end FUNCTION onData()
	} // end FUNCTION readFiles()

	/**
	* Returns a callback to be invoked upon reading a file.
	*
	* @private
	* @param {string} id - file id
	* @param {Callback} clbk - callback
	*/
	function onRead( id, clbk ) {
		/**
		* Callback invoked upon reading a file.
		*
		* @private
		* @param {(Error|null)} error - error object
		* @param {(Buffer|string)} data - file content
		*/
		return function onRead( error, data ) {
			if ( error ) {
				return done( error );
			}
			clbk( id, data.toString() );
		}; // end FUNCTION onRead()
	} // end FUNCTION onRead()

	/**
	* Compiles source code.
	*
	* @private
	* @param {Object} code - object containing source code
	*/
	function compileFiles( code ) {
		var keys;
		var key;
		var i;
		keys = getKeys( code );
		for ( i = 0; i < keys.length; i++ ) {
			key = keys[ i ];
			code[ key ] = compile( key, code[ key ] );
		}
		evaluate( code );
	} // end FUNCTION compileFiles()

	/**
	* Evaluates compiled code.
	*
	* @private
	* @param {Object} code - object containing compiled code
	*/
	function evaluate( code ) {
		var filename;
		var require;
		var keys;
		var fcn;
		var i;

		// Add a listener for when `tape` tests finish:
		tape.onFinish( done );

		// Run the compiled code...
		keys = getKeys( code );
		for ( i = 0; i < keys.length; i++ ) {
			filename = keys[ i ];
			fcn = code[ filename ];
			require = createRequire( filename );
			fcn( require, filename, dirname( filename ) );
		}
	} // end FUNCTION evaluate()

	/**
	* Callback invoked upon completion.
	*
	* @private
	* @param {Error} [error] - error object
	*/
	function done( error ) {
		if ( error ) {
			return clbk( error );
		}
		clbk( null, coverage( opts.global ) );
	} // end FUNCTION done()
} // end FUNCTION runner()


// EXPORTS //

module.exports = runner;
