'use strict';

// MODULES //

var debug = require( 'debug' )( 'to-reference:async' );
var exec = require( 'child_process' ).exec;
var writeFile = require( 'fs' ).writeFile;
var join = require( 'path' ).join;
var copy = require( '@stdlib/utils/copy' );
var isString = require( '@stdlib/assert/is-string' ).isPrimitive;
var isFunction = require( '@stdlib/assert/is-function' );
var tmpdir = require( '@stdlib/utils/tmpdir' );
var cwd = require( '@stdlib/utils/cwd' );
var minstd = require( '@stdlib/math/base/random/minstd' );
var readFile = require( '@stdlib/fs/read-file' );
var defaults = require( './defaults.js' );
var validate = require( './validate.js' );
var wrap = require( './wrap.js' );
var getCommand = require( './cmd.js' );
var rm = require( './rm.js' );
var transform = require( './transform.js' );


// MAIN //

/**
* Asynchronously return a reference corresponding to a citation identifier.
*
* @param {string} id - citation identifier
* @param {Options} [options] - function options
* @param {string} [options.database] - path to a bibliography database file
* @param {string} [options.csl] - path to a Citation Style Language (CSL) file
* @param {Callback} clbk - callback to invoke upon generating a reference
*
* @example
* toReference( '@press1992', clbk );
*
* function clbk( error, reference ) {
*     if ( error ) {
*         throw error;
*     }
*     console.log( reference );
* }
*/
function toReference( id, options, clbk ) {
	var outFile;
	var inFile;
	var opts;
	var data;
	var tmp;
	var cmd;
	var err;
	var cb;

	if ( !isString( id ) ) {
		throw new TypeError( 'invalid input argument. First argument must be a string primitive. Value: `' + id + '`.' );
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
		throw new TypeError( 'invalid input argument. Callback argument must be a function. Value: `' + cb + '`.' );
	}
	debug( 'Options: %s', JSON.stringify( opts ) );

	tmp = tmpdir();
	debug( 'Temporary file directory: %s', tmp );

	inFile = Date.now() + '_' + minstd() + '.md';
	inFile = join( tmp, inFile );
	debug( 'Temporary input file: %s', inFile );

	outFile = Date.now() + '_' + minstd() + '.md';
	outFile = join( tmp, outFile );
	debug( 'Temporary output file: %s', outFile );

	cmd = getCommand( inFile, outFile, opts );
	debug( 'Command: %s', cmd );

	data = wrap( id );
	debug( 'Temporary input file data: %s', data );

	debug( 'Writing temporary input file...' );
	writeFile( inFile, data, onFile );

	/**
	* Callback invoked upon writing a temporary input file.
	*
	* @private
	* @param {(Error|null)} error - error object
	*/
	function onFile( error ) {
		var opts;
		if ( error ) {
			debug( 'Encountered an error when writing temporary input file: %s', error.message );
			return done( error );
		}
		debug( 'Successfully created temporary input file.' );
		opts = {
			'cwd': cwd()
		};
		debug( 'Converting temporary input file...' );
		exec( cmd, opts, onExec );
	} // end FUNCTION onFile()

	/**
	* Callback invoked when a child process terminates.
	*
	* @private
	* @param {(Error|null)} error - error object
	* @param {Buffer} stdout - standard output
	* @param {Buffer} stderr - standard error
	*/
	function onExec( error, stdout, stderr ) {
		var opts;
		if ( error ) {
			debug( 'Encountered an error when attempting to convert temporary input file: %s', error.message );
			return done( error );
		}
		debug( 'Command stdout: %s', stdout.toString() );
		debug( 'Command stderr: %s', stderr.toString() );

		debug( 'Successfully converted temporary input file.' );
		rm( inFile );

		debug( 'Reading temporary output file...' );
		opts = {
			'encoding': 'utf8'
		};
		readFile( outFile, opts, onRead );
	} // end FUNCTION onExec()

	/**
	* Callback invoked upon reading a temporary output file.
	*
	* @private
	* @param {(Error|null)} error - error object
	* @param {(Buffer|string)} data - file contents
	*/
	function onRead( error, data ) {
		if ( error ) {
			debug( 'Encountered an error when attempting to read temporary output file: %s. Error: %s', outFile, error.message );
			return done( error );
		}
		debug( 'Successfully read temporary output file.' );
		rm( outFile );

		data = data.toString();
		debug( 'Raw results: %s', data );

		data = transform( data );
		debug( 'Transformed results: %s', data );

		done( null, data );
	} // end FUNCTION onRead()

	/**
	* Callback invoked upon generating a reference.
	*
	* @private
	* @param {(Error|null)} error - error object
	* @param {string} reference - reference
	*/
	function done( error, reference ) {
		if ( error ) {
			return cb( error );
		}
		cb( null, reference );
	} // end FUNCTION done()
} // end FUNCTION toReference()


// EXPORTS //

module.exports = toReference;
