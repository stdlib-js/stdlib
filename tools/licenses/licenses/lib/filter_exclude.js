'use strict';

// MODULES //

var prefix = require( './stdlib.js' );
var indexOf = require( prefix+'@stdlib/utils/index-of' );


// FILTER //

/**
* Excludes packages based on a provided license list from package results.
*
* @private
* @param {(ObjectArray|EmptyArray)} results - unfiltered results
* @param {StringArray} exclude - list of licenses to exclude
* @returns {(ObjectArray|EmptyArray)} filtered results
*/
function filter( results, exclude ) {
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
} // end FUNCTION filter()


// EXPORTS //

module.exports = filter;
