'use strict';

/**
* Filters license results for packages not having a license.
*
* @param {(ObjectArray|EmptyArray)} results - unfiltered results
* @returns {(ObjectArray|EmptyArray)} filtered results
*/
function reporter( results ) {
	var out;
	var i;
	out = [];
	for ( i = 0; i < results.length; i++ ) {
		if ( results[ i ].licenses.length === 0 ) {
			out.push( results[ i ] );
		}
	}
	return out;
}


// EXPORTS //

module.exports = reporter;
