'use strict';

// MODULES //

var debug = require( 'debug' )( 'module-pkg-deps:async:walk-file' );
var resolve = require( 'resolve' );
var readFile = require( '@stdlib/fs/read-file' );
var hasOwnProp = require( '@stdlib/assert/has-own-property' );
var dirname = require( '@stdlib/utils/dirname' );
var extname = require( '@stdlib/utils/extname' );
var analyze = require( './analyze.js' );


// MAIN //

/**
* Walks a file's relative dependencies.
*
* @private
* @param {Object} cache - dependency cache
* @param {string} file - file path
* @param {Options} options - function options
* @param {boolean} options.builtins - boolean indicating whether to include built-in packages
* @param {boolean} options.walk - boolean indicating whether to walk relative module dependencies
* @param {Callback} clbk - callback to invoke after walking file
*/
function walk( cache, file, options, clbk ) {
	var total;
	var count;
	var fopts;
	var ext;

	if ( hasOwnProp( cache, file ) ) {
		debug( 'Already walked this file. Skipping...' );
		return clbk( null, cache );
	}
	// WARNING: ignores possibility of other extensions!
	ext = extname( file );
	if (
		ext === '.json' ||
		ext === '.node'
	) {
		debug( 'Cannot walk file. Skipping...' );
		return clbk( null, cache );
	}
	total = 0;
	count = 0;

	fopts = {
		'encoding': 'utf8'
	};
	debug( 'Read file options: %s', JSON.stringify( fopts ) );

	debug( 'Reading file: %s...', file );
	readFile( file, fopts, onFile );

	/**
	* Callback invoked after reading a file.
	*
	* @private
	* @param {(Error|null)} error - error object
	* @param {(Buffer|string)} data - file contents
	*/
	function onFile( error, data ) {
		var ropts;
		var dir;
		var i;
		if ( error ) {
			debug( 'Encountered an error when reading file: %s. Error: %s', file, error.message );
			return clbk( error );
		}
		debug( 'Successfully read file: %s.', file );

		debug( 'Analyzing file...' );
		data = analyze( data.toString(), options.builtins );

		debug( 'Caching list of package dependencies...' );
		cache[ file ] = data.packages;

		if ( options.walk === false ) {
			debug( 'Option to walk relative dependencies is `false`. Finished walking file: %s.', file );
			return clbk( null, cache );
		}
		data = data.relative;
		if ( data.length === 0 ) {
			debug( 'No relative dependencies to walk. Finished walking file: %s.', file );
			return clbk( null, cache );
		}
		total = data.length; // parent scope

		debug( 'Resolving relative module dependencies...' );
		dir = dirname( file );
		ropts = {
			'basedir': dir
		};
		for ( i = 0; i < total; i++ ) {
			resolve( data[ i ], ropts, onResolve );
		}
	} // end FUNCTION onFile()

	/**
	* Callback invoked upon resolving a module.
	*
	* @private
	* @param {(Error|null)} error - error object
	* @param {string} main - file path
	*/
	function onResolve( error, main ) {
		if ( error ) {
			debug( 'Encountered an error when resolving module dependency: %s. Error: %s', file, error.message );
			return clbk( error );
		}
		debug( 'Successfully resolved module dependency for file: %s. Dep: %s', file, main );

		debug( 'Walking module dependency: %s...', main );
		walk( cache, main, options, onWalk );
	} // end FUNCTION onResolve()

	/**
	* Callback invoked after walking a module dependency.
	*
	* @private
	* @param {(Error|null)} error - error object
	*/
	function onWalk( error ) {
		if ( error ) {
			debug( 'Encountered an error when walking module dependency. Error: %s', error.message );
			return clbk( error );
		}
		count += 1;
		debug( 'Walked %d of %d module dependencies...', count, total );
		if ( count === total ) {
			debug( 'Walked all module dependencies.' );
			clbk( null, cache );
		}
	} // end FUNCTION onWalk()
} // end FUNCTION walk()


// EXPORTS //

module.exports = walk;
