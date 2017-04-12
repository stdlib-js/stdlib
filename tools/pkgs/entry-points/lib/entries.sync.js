'use strict';

// MODULES //

var debug = require( 'debug' )( 'entry-points:sync:entries' );
var resolve = require( 'path' ).resolve;
var getKeys = require( 'object-keys' ).shim();
var isObject = require( '@stdlib/assert/is-plain-object' );
var isString = require( '@stdlib/assert/is-string' ).isPrimitive;
var resolveFiles = require( './resolve_files.sync.js' );


// MAIN //

/**
* Determines entry points.
*
* @private
* @param {ObjectArray} pkgs - packages
* @returns {(ObjectArray|Error)} results or an error
*/
function entryPoints( pkgs ) {
	var total;
	var main;
	var file;
	var keys;
	var bins;
	var bin;
	var out;
	var dir;
	var pkg;
	var i;
	var j;
	var k;

	total = pkgs.length;
	out = new Array( total );

	debug( 'Determining main entry points for %d packages...', total );
	for ( i = 0; i < total; i++ ) {
		k = i + 1;
		pkg = pkgs[ i ].pkg;
		main = pkgs[ i ].id;

		debug( 'Determined main entry point for package: %s (%d of %d). Main: %s', pkg, k, total, main );
		out[ i ] = {
			'id': main,
			'pkg': pkg,
			'dir': pkgs[ i ].dir,
			'entries': [
				main
			]
		};
	}
	debug( 'Finished determining main entry points.' );

	debug( 'Resolving executable files for %d packages...', total);
	for ( i = 0; i < total; i++ ) {
		k = i + 1;
		pkg = pkgs[ i ].pkg;

		dir = pkgs[ i ].dir;
		bin = pkgs[ i ].data.bin;

		bins = [];

		debug( 'Resolving executable files for package: %s (%d of %d).', pkg, k, total );
		if ( isString( bin ) && bin.length > 0 ) {
			file = resolve( dir, bin );
			debug( 'Found executable file for package: %s (%d of %d). File: %s', pkg, k, total, file );
			bins.push( file );
		} else if ( isObject( bin ) ) {
			keys = getKeys( bin );
			for ( j = 0; j < keys.length; j++ ) {
				file = resolve( dir, bin[ keys[j] ] );
				debug( 'Found executable file for package: %s (%d of %d). File: %s', pkg, k, total, file );
				bins.push( file );
			}
		} else {
			debug( 'No executable files for package: %s (%d of %d).', pkg, k, total );
			continue;
		}
		bins = resolveFiles( bins );
		if ( bins instanceof Error ) {
			return bins;
		}
		out[ i ].entries = out[ i ].entries.concat( bins );
		debug( 'Resolved %d entry points for package: %s (%d of %d).', out[ i ].entries.length, pkgs[ i ].pkg, k, total );
	}
	debug( 'Resolved entry points for all packages.' );
	return out;
} // end FUNCTION entryPoints()


// EXPORTS //

module.exports = entryPoints;
