'use strict';

// MODULES //

var path = require( 'path' );
var readFileList = require( '@stdlib/fs/read-file-list' );
var isFunction = require( '@stdlib/assert/is-function' );
var copy = require( '@stdlib/utils/copy' );
var cwd = require( '@stdlib/utils/cwd' );
var findPkgs = require( './../../../pkgs/find' );
var createIndex = require( './create_index.js' );
var getExisting = require( './get_existing.js' );
var defaults = require( './defaults.json' );
var validate = require( './validate.js' );
var combine = require( './combine.js' );


// MAIN //

/**
* Creates a serialized search index for all packages.
*
* @param {Options} [options] - function options
* @param {string} [options.dir] - root directory at which to start indexing
* @param {string} [options.pattern='**\/package.json'] - glob pattern
* @param {StringArray} [options.ignore] - glob pattern(s) to exclude matches
* @param {Callback} clbk - callback function
*/
function createSearchIndex() {
	var options;
	var opts;
	var clbk;
	var err;

	opts = copy( defaults );
	if ( arguments.length < 2 ) {
		clbk = arguments[ 0 ];
	} else {
		options = arguments[ 0 ];
		clbk = arguments[ 1 ];
		err = validate( opts, options );
		if ( err ) {
			throw err;
		}
	}
	if ( !isFunction( clbk ) ) {
		throw new TypeError( 'invalid input argument. Callback argument must be a function. Value: `' + clbk + '`.' );
	}
	if ( opts.dir ) {
		opts.dir = path.resolve( cwd(), opts.dir );
	} else {
		opts.dir = cwd();
	}
	findPkgs( opts, onPkgs );

	/**
	* Callback invoked after retrieving packages.
	*
	* @private
	* @param {(Error|null)} error - error object
	* @param {StringArray} list of package paths
	*/
	function onPkgs( error, pkgs ) {
		var i;
		if ( error ) {
			return done( error );
		}
		for ( i = 0; i < pkgs.length; i++ ) {
			pkgs[ i ] = path.join( pkgs[ i ], 'README.md' );
		}
		getExisting( pkgs, onReadmes );
	} // end FUNCTION onPkgs()

	/**
	* Callback invoked after retrieving existing README.md paths.
	*
	* @private
	* @param {(Error|null)} error - error object
	* @param {StringArray} list of existing README.md paths
	*/
	function onReadmes( error, readmes ) {
		if ( error ) {
			return done( error );
		}
		readFileList( readmes, {
			'encoding': 'utf-8'
		}, onFiles );
	} // end FUNCTION onReadmes()

	/**
	* Callback invoked after retrieving file contents.
	*
	* @private
	* @param {(Error|null)} error - error object
	* @param {ObjectArray} list of files
	*/
	function onFiles( error, files ) {
		var idxs;
		var idx;
		var len;
		var i;
		if ( error ) {
			return done( error );
		}
		len = files.length;
		idxs = new Array( len );
		for ( i = 0; i < len; i++ ) {
			idxs[ i ] = createIndex( files[ i ] );
		}
		idx = idxs.reduce( combine );
		// Note: we have to use `stringify` and `parse` here because of how lunr performs serialization. Specifically, in order to serialize an index, one must recursively call serialization methods (`*.toJSON()`) on nested data structures, which `JSON.stringify()` does automatically.
		done( null, JSON.parse( JSON.stringify( idx ) ) );
	} // end FUNCTION onFiles()

	/**
	* Callback invoked upon completion.
	*
	* @private
	* @param {(Error|null)} error - error object
	* @param {Object} idx - serialized search index
	*/
	function done( error, idx ) {
		if ( error ) {
			return clbk( error );
		}
		clbk( null, idx );
	} // end FUNCTION done()
} // end FUNCTION createSearchIndex()


// EXPORTS //

module.exports = createSearchIndex;
