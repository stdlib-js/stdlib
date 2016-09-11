'use strict';

/**
* Filters license results for packages not having a license.
*
* @private
* @param {(ObjectArray|EmptyArray)} results - unfiltered results
* @returns {(ObjectArray|EmptyArray)} filtered results
*/
function filter( results ) {
	var out;
	var i;
	out = [];
	for ( i = 0; i < results.length; i++ ) {
		if ( results[ i ].licenses.length === 0 ) {
			out.push( results[ i ] );
		}
	}
	return out;
} // end FUNCTION filter()


// EXPORTS //

module.exports = filter;
