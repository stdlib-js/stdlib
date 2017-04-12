'use strict';

// MODULES //

var debug = require( 'debug' )( 'to-reference:sync' );
var exec = require( 'child_process' ).execSync;
var writeFile = require( 'fs' ).writeFileSync;
var join = require( 'path' ).join;
var copy = require( '@stdlib/utils/copy' );
var isString = require( '@stdlib/assert/is-string' ).isPrimitive;
var tmpdir = require( '@stdlib/utils/tmpdir' );
var cwd = require( '@stdlib/utils/cwd' );
var minstd = require( '@stdlib/math/base/random/minstd' );
var readFile = require( '@stdlib/fs/read-file' ).sync;
var defaults = require( './defaults.js' );
var validate = require( './validate.js' );
var wrap = require( './wrap.js' );
var getCommand = require( './cmd.js' );
var rm = require( './rm.js' );
var transform = require( './transform.js' );


// MAIN //

/**
* Synchronously return a reference corresponding to a citation identifier.
*
* @param {string} id - citation identifier
* @param {Options} [options] - function options
* @param {string} [options.database] - path to a bibliography database file
* @param {string} [options.csl] - path to a Citation Style Language (CSL) file
* @returns {string} reference
*
* @example
* var ref = toReference( '@press1992' );
* // returns '...'
*/
function toReference( id, options ) {
	var outFile;
	var inFile;
	var eopts;
	var ropts;
	var opts;
	var data;
	var tmp;
	var cmd;
	var err;

	if ( !isString( id ) ) {
		throw new TypeError( 'invalid input argument. First argument must be a string primitive. Value: `' + id + '`.' );
	}
	opts = copy( defaults );
	if ( arguments.length > 1 ) {
		err = validate( opts, options );
		if ( err ) {
			throw err;
		}
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
	writeFile( inFile, data );
	debug( 'Successfully created temporary input file.' );

	eopts = {
		'cwd': cwd()
	};
	debug( 'Converting temporary input file...' );
	data = exec( cmd, eopts );
	debug( 'Successfully converted temporary input file.' );

	rm( inFile );

	debug( 'Reading temporary output file...' );
	ropts = {
		'encoding': 'utf8'
	};
	data = readFile( outFile, ropts );
	if ( data instanceof Error ) {
		debug( 'Encountered an error when attempting to read temporary output file: %s. Error: %s', outFile, data.message );
		throw data;
	}
	debug( 'Successfully read temporary output file.' );

	rm( outFile );

	data = data.toString();
	debug( 'Raw results: %s', data );

	data = transform( data );
	debug( 'Transformed results: %s', data );

	return data;
} // end FUNCTION toReference()


// EXPORTS //

module.exports = toReference;
