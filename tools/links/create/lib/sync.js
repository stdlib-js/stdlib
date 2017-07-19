'use strict';

// MODULES //

var debug = require( 'debug' )( 'links:create:sync' );
var writeFile = require( 'fs' ).writeFileSync;
var resolve = require( 'path' ).resolve;
var instanceOf = require( '@stdlib/assert/instance-of' );
var readJSON = require( '@stdlib/fs/read-json' ).sync;
var cwd = require( '@stdlib/utils/cwd' );
var config = require( './defaults.js' );
var validate = require( './validate.js' );
var insert = require( './insert.js' );


// MAIN //

/**
* Synchronously creates a link entry in a links database.
*
* @param {Options} options - options
* @param {string} options.uri - link URI
* @param {string} options.id - unique link identifier
* @param {string} options.description - link description
* @param {StringArray} [options.keywords] - link keywords
* @param {string} [options.database] - path to a link database file (JSON)
* @throws {TypeError} first argument must be an object
* @throws {TypeError} must provide valid options
* @returns {(Error|null)} error object or null
*
* @example
* var opts = {
*     'uri': 'http://stdlib.io',
*     'id': 'stdlib',
*     'description': 'A standard library for JavaScript and Node.js.'
* };
*
* var err = create( opts, done );
* if ( err ) {
*     throw err;
* }
* console.log( 'Success' );
*/
function create( options ) {
	var fopts;
	var opts;
	var err;
	var out;
	var db;

	fopts = {
		'encoding': 'utf8'
	};
	opts = {
		'database': config.database
	};
	err = validate( opts, options );
	if ( instanceOf( err, Error ) ) {
		throw err;
	}
	opts.database = resolve( cwd(), opts.database );
	debug( 'Link details: %s', JSON.stringify( opts ) );

	db = readJSON( opts.database, fopts );
	if ( instanceOf( db, Error ) ) {
		debug( 'Encountered an error when reading a database file: %s', db.message );
		return db;
	}
	debug( 'Successfully read a database file.' );

	debug( 'Attempting to create database entry...' );
	out = insert( db, opts );
	if ( instanceOf( out, Error ) ) {
		debug( 'Encountered an error when attempting to create database entry: %s', out.message );
		return out;
	}
	debug( 'Successfully created database entry.' );

	debug( 'Writing updated database to file...' );
	out = JSON.stringify( out, null, 2 );
	writeFile( opts.database, out, fopts );
	debug( 'Successfully wrote database to file.' );

	debug( 'Finished.' );
	return null;
} // end FUNCTION create()


// EXPORTS //

module.exports = create;
