'use strict';

// MODULES //

var prefix = require( './stdlib.js' );
var indexOf = require( prefix+'@stdlib/utils/index-of' );


// REPORTER //

/**
* Excludes packages from license results when a package has a license matching a license identifier in a provided license list.
*
* @private
* @param {(ObjectArray|EmptyArray)} results - unfiltered results
* @param {StringArray} exclude - list of licenses (SPDX identifiers) to exclude
* @returns {(ObjectArray|EmptyArray)} filtered results
*/
function reporter( results, exclude ) {
	var licenses;
	var license;
	var out;
	var flg;
	var i;
	var j;

	out = [];
	for ( i = 0; i < results.length; i++ ) {
		license = null;
		flg = false;

		licenses = results[ i ].licenses;

		// Only exclude packages whose license information is unambiguous...
		if ( licenses.length ) {
			license = licenses[ 0 ].name;
			for ( j = 1; j < licenses.length; j++ ) {
				if ( licenses[ j ].name !== license ) {
					// Ambiguous...
					flg = true;
					break;
				}
			}
		}
		if ( flg ) {
			out.push( results[ i ] );
			continue;
		}
		// Filter based on license list...
		if ( indexOf( exclude, license ) === -1 ) {
			out.push( results[ i ] );
		}
	}
	return out;
} // end FUNCTION reporter()


// EXPORTS //

module.exports = reporter;
