'use strict';

// MODULES //

var getKeys = require( 'object-keys' ).shim();
var SPDX = require( 'spdx-license-ids' );
var indexOf = require( '@stdlib/utils/index-of' );
var hasOwnProp = require( '@stdlib/assert/has-own-property' );


// MAIN //

/**
* Summarizes license results.
*
* @private
* @param {(ObjectArray|EmptyArray)} results - results
* @returns {Object} results
*/
function reporter( results ) {
	var validSPDX;
	var ambiguous;
	var licenses;
	var license;
	var names;
	var name;
	var pkgs;
	var out;
	var ids;
	var id;
	var i;
	var j;

	pkgs = new Array( results.length );
	ambiguous = {};
	validSPDX = {};
	names = {};
	for ( i = 0; i < results.length; i++ ) {
		id = results[ i ].id;
		pkgs[ i ] = id;
		licenses = results[ i ].licenses;
		if ( licenses.length ) {
			for ( j = 0; j < licenses.length; j++ ) {
				license = licenses[ j ];
				if ( !hasOwnProp( names, license.name ) ) {
					ids = [];
					names[ license.name ] = ids;
				} else {
					ids = names[ license.name ];
				}
				if ( indexOf( ids, id ) === -1 ) {
					ids.push( id );
				}
				if ( j === 0 ) {
					name = license.name;
				} else {
					if ( license.name !== name ) {
						ambiguous[ id ] = true;
					}
				}
				if ( /package\.json$/.test( license.src ) ) {
					if ( indexOf( SPDX, license.name ) !== -1 ) {
						validSPDX[ id ] = true;
					}
				}
			}
		} else {
			if ( !hasOwnProp( names, 'UNKNOWN' ) ) {
				ids = [];
				names[ 'UNKNOWN' ] = ids;
			} else {
				ids = names[ 'UNKNOWN' ];
			}
			if ( indexOf( ids, id ) === -1 ) {
				ids.push( id );
			}
		}
	}
	out = {};
	out.dependencies = pkgs.sort();
	out.licenses = getKeys( names ).sort();
	out.valid = getKeys( validSPDX ).sort();
	out.ambiguous = getKeys( ambiguous ).sort();
	out.missing = names.UNKNOWN.sort();

	out.totals = {};
	for ( i = 0; i < out.licenses.length; i++ ) {
		out.totals[ out.licenses[i] ] = names[ out.licenses[i] ].length;
	}
	return out;
} // end FUNCTION reporter()


// EXPORTS //

module.exports = reporter;
