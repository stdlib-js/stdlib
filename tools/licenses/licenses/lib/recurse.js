'use strict';

// MODULES //

var debug = require( 'debug' )( 'licenses:recurse' );
var join = require( 'path' ).join;
var getKeys = require( 'object-keys' ).shim();
var indexOf = require( '@stdlib/utils/index-of' );
var hasOwnProp = require( '@stdlib/assert/has-own-property' );
var getRepo = require( './pkg_repo.js' );
var getLicense = require( './pkg_license.js' );


// MAIN //

/**
* Processes a package to extract license information.
*
* @private
* @param {Object} cache - results cache
* @param {Object} pkg - package
* @returns {Object} results cache
*/
function recurse( cache, pkg ) {
	var licenses;
	var results;
	var parent;
	var fpath;
	var keys;
	var id;
	var i;

	// Generate a unique identifier for the current package:
	id = pkg.name + '@' + pkg.version;

	// Determine the package parent (if one exists):
	if ( pkg.parent ) {
		parent = pkg.parent.name + '@' + pkg.parent.version;
	}
	debug( 'Package: %s. Parent: %s.', id, parent || '(none)' );

	// Check if we have already processed this package (only process packages once):
	if ( hasOwnProp( cache, id ) ) {
		debug( '%s already exists in cache.', id );
		results = cache[ id ];

		// Add the package parent to its list of parents:
		if ( indexOf( results.parents, parent ) === -1 ) {
			debug( 'Adding %s to %s parent list.', parent, id );
			results.parents.push( parent );
		}
		return cache;
	}
	// Initialize package results:
	results = {
		'id': id,
		'parents': ( parent ) ? [ parent ] : [],
		'root': ( pkg.root ) ? true : false,
		'pkg': pkg.realPath,
		'repo': getRepo( pkg )
	};
	// Assemble the real filepath of the package's `package.json`:
	fpath = join( pkg.realPath, 'package.json' );
	debug( '%s `package.json`: %s.', id, fpath );

	// Extract license information from the package information:
	licenses = getLicense( pkg );
	if ( !licenses || licenses.length === 0 ) {
		debug( '%s is missing license information.', id );
		results.licenses = [];
	} else {
		debug( '%s has license information.', id );
		results.licenses = new Array( licenses.length );
		for ( i = 0; i < licenses.length; i++ ) {
			results.licenses[ i ] = {
				'src': fpath,
				'name': licenses[ i ]
			};
		}
	}
	// Insert the package results into the results cache:
	cache[ id ] = results;

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
