'use strict';

// MODULES //

var debug = require( 'debug' )( 'installed-pkgs:recurse' );
var getKeys = require( 'object-keys' ).shim();
var hasOwnProp = require( '@stdlib/assert/has-own-property' );


// MAIN //

/**
* Processes a package.
*
* @private
* @param {Object} cache - results cache
* @param {Object} pkg - package
* @returns {Object} results cache
*/
function recurse( cache, pkg ) {
	var results;
	var keys;
	var id;
	var i;

	// Generate a unique identifier for the current package:
	id = pkg.name + '@' + pkg.version;
	debug( 'Package: %s.', id );

	// Check if we have already processed this package (only process packages once):
	if ( hasOwnProp( cache, id ) ) {
		debug( '%s already exists in cache.', id );
		return cache;
	}
	// Only insert non-root packages into the results cache...
	if ( !pkg.root ) {
		results = {};
		cache[ id ] = results;
	}
	// Process package dependencies:
	if ( pkg.dependencies ) {
		debug( 'Processing %s dependencies...', id );
		keys = getKeys( pkg.dependencies );
		for ( i = 0; i < keys.length; i++ ) {
			debug( 'Processing %s dependency: %s...', id, keys[i] );
			recurse( cache, pkg.dependencies[ keys[i] ] );
		}
		debug( 'Finished processing %s dependencies.', id );
	}
	return cache;
} // end FUNCTION recurse()


// EXPORTS //

module.exports = recurse;
