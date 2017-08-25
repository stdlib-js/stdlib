'use strict';

// MODULES //

var debug = require( 'debug' )( 'module-pkg-deps:sync:walk-file' );
var resolve = require( 'resolve' ).sync;
var readFile = require( '@stdlib/fs/read-file' ).sync;
var hasOwnProp = require( '@stdlib/assert/has-own-property' );
var dirname = require( '@stdlib/utils/dirname' );
var extname = require( '@stdlib/utils/extname' );
var analyze = require( './analyze.js' );


// MAIN //

/**
* Synchronously walks a file's relative dependencies.
*
* @private
* @param {Object} cache - dependency cache
* @param {string} file - file path
* @param {Options} options - function options
* @param {boolean} options.builtins - boolean indicating whether to include built-in packages
* @param {boolean} options.walk - boolean indicating whether to walk relative module dependencies
* @returns {(Error|null)} error object or null
*/
function walk( cache, file, options ) {
	var fopts;
	var ropts;
	var data;
	var main;
	var ext;
	var dir;
	var err;
	var i;

	if ( hasOwnProp( cache, file ) ) {
		debug( 'Already walked this file. Skipping...' );
		return null;
	}
	// WARNING: ignores possibility of other extensions!
	ext = extname( file );
	if (
		ext === '.json' ||
		ext === '.node'
	) {
		debug( 'Cannot walk file. Skipping...' );
		return null;
	}
	fopts = {
		'encoding': 'utf8'
	};
	debug( 'Read file options: %s', JSON.stringify( fopts ) );

	debug( 'Reading file: %s...', file );
	data = readFile( file, fopts );
	if ( data instanceof Error ) {
		debug( 'Encountered an error when reading file: %s. Error: %s', file, data.message );
		return data;
	}
	debug( 'Successfully read file: %s.', file );

	debug( 'Analyzing file...' );
	data = analyze( data.toString(), options.builtins );

	debug( 'Caching list of package dependencies...' );
	cache[ file ] = data.packages;

	if ( options.walk === false ) {
		debug( 'Option to walk relative dependencies is `false`. Finished walking file: %s.', file );
		return null;
	}
	data = data.relative;
	if ( data.length === 0 ) {
		debug( 'No relative dependencies to walk. Finished walking file: %s.', file );
		return null;
	}
	debug( 'Resolving relative module dependencies...' );
	dir = dirname( file );
	ropts = {
		'basedir': dir
	};
	for ( i = 0; i < data.length; i++ ) {
		main = resolve( data[ i ], ropts );
		debug( 'Successfully resolved module dependency for file: %s. Dep: %s', data[ i ], main );
		debug( 'Walking module dependency: %s...', main );
		err = walk( cache, main, options );
		if ( err instanceof Error ) {
			debug( 'Encountered an error when walking module dependency. Error: %s', err.message );
			return err;
		}
		debug( 'Walked %d of %d module dependencies...', i+1, data.length );
	}
	debug( 'Walked all module dependencies.' );
	return null;
} // end FUNCTION walk()


// EXPORTS //

module.exports = walk;
