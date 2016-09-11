'use strict';

/**
* Filters license results for packages having ambiguous license information.
*
* @private
* @param {(ObjectArray|EmptyArray)} results - unfiltered results
* @returns {(ObjectArray|EmptyArray)} filtered results
*/
function filter( results ) {
	var licenses;
	var license;
	var out;
	var i;
	var j;
	out = [];
	for ( i = 0; i < results.length; i++ ) {
		licenses = results[ i ].licenses;
		if ( licenses.length ) {
			license = licenses[ 0 ].name;
			for ( j = 1; j < licenses.length; j++ ) {
				if ( licenses[ j ].name !== license ) {
					out.push( results[ i ] );
					break;
				}
			}
		}
	}
	return out;
} // end FUNCTION filter()


// EXPORTS //

module.exports = filter;
