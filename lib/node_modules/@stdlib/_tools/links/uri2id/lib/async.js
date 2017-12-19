'use strict';

// MODULES //

var resolve = require( 'path' ).resolve;
var isURI = require( '@stdlib/assert/is-uri' );
var isFunction = require( '@stdlib/assert/is-function' );
var readJSON = require( '@stdlib/fs/read-json' );
var hasOwnProp = require( '@stdlib/assert/has-own-property' );
var cwd = require( '@stdlib/utils/cwd' );
var config = require( './defaults.js' );
var validate = require( './validate.js' );


// MAIN //

/**
* Returns the id corresponding to a provided URI.
*
* @param {string} uri - URI
* @param {Options} [options] - options
* @param {string} [options.database] - path to a link database file (JSON)
* @param {Callback} clbk - callback to invoke upon resolving an id
* @throws {TypeError} first argument must be a URI
* @throws {TypeError} options argument must be an object
* @throws {TypeError} must provide valid options
* @throws {TypeError} last argument must be a function
*
* @example
* uri2id( 'http://www.bibtex.org/', clbk );
*
* function clbk( error, id ) {
*   if ( error ) {
*       throw error;
*   }
*   console.log( id );
* 	// => 'bibtex'
* }
*/
function uri2id( uri, options, clbk ) {
	var fopts;
	var opts;
	var err;
	var cb;
	if ( !isURI( uri ) ) {
		throw new TypeError( 'invalid input argument. First argument must be a URI. Value: `'+uri+'`.' );
	}
	opts = {
		'database': config.database
	};
	if ( arguments.length === 2 ) {
		cb = options;
	} else {
		err = validate( opts, options );
		if ( err ) {
			throw err;
		}
		cb = clbk;
	}
	if ( !isFunction( cb ) ) {
		throw new TypeError( 'invalid input argument. Last argument must be a function. Value: `'+cb+'`.' );
	}
	opts.database = resolve( cwd(), opts.database );
	fopts = {
		'encoding': 'utf8'
	};
	readJSON( opts.database, fopts, onRead );

	/**
	* Callback invoked upon reading a file.
	*
	* @private
	* @param {(Error|null)} error - error object
	* @param {Object} db - database
	* @returns {void}
	*/
	function onRead( error, db ) {
		if ( error ) {
			return cb( error );
		}
		if ( hasOwnProp( db, uri ) ) {
			return cb( null, db[ uri ].id );
		}
		cb( null, null );
	} // end FUNCTION onRead()
} // end FUNCTION uri2id()


// EXPORTS //

module.exports = uri2id;
