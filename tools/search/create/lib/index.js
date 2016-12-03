'use strict';

// MODULES //

var path = require( 'path' );
var readFileList = require( '@stdlib/fs/read-file-list' );
var isFunction = require( '@stdlib/utils/is-function' );
var cwd = require( '@stdlib/utils/cwd' );
var findPkgs = require( './../../pkgs/find' );
var createIndex = require( './create_index.js' )
var getExisting = require( './get_existing.js' );
var combine = require( './combine.js' );;
var validate = require( './validate.js' );


// MAIN //

/**
* Creates a serialized search index for all packages.
*
* @param {Options} [options] - function options
* @param {string} [options.dir] - root directory at which to start indexing
* @param {Callback} clbk - callback function
*/
function createSearchIndex() {
	var options;
	var opts;
	var clbk;
	var err;

	opts = {};
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
	function onPkgs( err, pkgs ) {
		var i;
		if ( err ) {
			throw err;
		}
		for ( i = 0; i < pkgs.length; i++ ) {
			pkgs[ i ] = path.join( pkgs[ i ], 'README.md' );
		}
		getExisting( pkgs, function onDone( error, readmes ) {
			if ( error ) {
				throw error;
			}
			readFileList( readmes, {
				'encoding': 'utf-8'
			}, onFiles );
		});
	} // end FUNCTION onPkgs()

	/**
	* Callback invoked after retrieving file contents.
	*
	* @private
	* @param {(Error|null)} error - error object
	* @param {ObjectArray} list of files
	*/
	function onFiles( err, files ) {
		var idxs;
		var idx;
		var len;
		var i;
		if ( err ) {
			throw err;
		}
		len = files.length;
		idxs = new Array( len );
		for ( i = 0; i < len; i++ ) {
			idxs.push( createIndex( files[ i ] ) );
		}
		idx = idxs.reduce( combine );
		clbk( null, JSON.stringify( idx ) );
	} // end FUNCTION onFiles()
} // end FUNCTION createSearchIndex()


// EXPORTS //

module.exports = createSearchIndex;
