'use strict';

// MODULES //

var debug = require( 'debug' )( 'licenses:pkg:license' );
var prefix = require( './stdlib.js' );
var isString = require( prefix+'@stdlib/utils/is-string' ).isPrimitive;
var isArray = require( prefix+'@stdlib/utils/is-array' );


// LICENSE //

/**
* Returns a license name from a `package.json`.
*
* @private
* @param {Object} pkg - `package.json` JSON
* @returns {(StringArray|null)} license name(s)
*/
function license( pkg ) {
	var out;
	var i;

	if ( pkg.hasOwnProperty( 'license' ) ) {
		debug( 'Package has `license` property.' );
		if ( isString( pkg.license ) ) {
			debug( 'Package follows npm convention: %s.', pkg.license );
			return [ pkg.license ];
		}
		// Neither npm or CommonJS compliant, but exists in the wild:
		if ( pkg.license.hasOwnProperty( 'type' ) ) {
			debug( 'Found a `type` field: %s.', pkg.license.type );
			return [ pkg.license.type ];
		}
		if ( pkg.license.hasOwnProperty( 'name' ) ) {
			debug( 'Found a `name` field: %s.', pkg.license.name );
			return [ pkg.license.name ];
		}
	} else if ( pkg.hasOwnProperty( 'licenses' ) ) {
		debug( 'Package has `licenses` property.' );

		// CommonJS specification (http://wiki.commonjs.org/wiki/Packages/1.0):
		if ( isArray( pkg.licenses ) ) {
			debug( 'Package follows CommonJS specification.' );
			out = [];
			for ( i = 0; i < pkg.licenses.length; i++ ) {
				if ( pkg.licenses[ i ].hasOwnProperty( 'type' ) ) {
					debug( 'Found a `type` field: %s.', pkg.licenses[ i ].type );
					out.push( pkg.licenses[ i ].type );
				} else if ( pkg.licenses[ i ].hasOwnProperty( 'name' ) ) {
					debug( 'Found a `name` field: %s.', pkg.licenses[ i ].name );
					out.push( pkg.licenses[ i ].name );
				}
			}
			if ( out.length ) {
				return out;
			}
		}
		// Neither npm or CommonJS compliant, but exists in the wild:
		if ( pkg.licenses.hasOwnProperty( 'type' ) ) {
			debug( 'Found a `type` field: %s.', pkg.licenses.type );
			return [ pkg.licenses.type ];
		}
		if ( pkg.licenses.hasOwnProperty( 'name' ) ) {
			debug( 'Found a `name` field: %s.', pkg.licenses.name );
			return [ pkg.licenses.name ];
		}
	}
	debug( 'Unable to find license information in `package.json`.' );
	return null;
} // end FUNCTION license()


// EXPORTS //

module.exports = license;
