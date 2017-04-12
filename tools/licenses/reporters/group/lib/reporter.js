'use strict';

// MODULES //

var indexOf = require( '@stdlib/utils/index-of' );
var hasOwnProp = require( '@stdlib/assert/has-own-property' );


// MAIN //

/**
* Groups license results by license type.
*
* @private
* @param {(ObjectArray|EmptyArray)} results - results
* @returns {Object} results
*/
function reporter( results ) {
	var licenses;
	var license;
	var out;
	var ids;
	var id;
	var i;
	var j;

	out = {};
	for ( i = 0; i < results.length; i++ ) {
		id = results[ i ].id;
		licenses = results[ i ].licenses;
		if ( licenses.length ) {
			for ( j = 0; j < licenses.length; j++ ) {
				license = licenses[ j ];
				if ( !hasOwnProp( out, license.name ) ) {
					ids = [];
					out[ license.name ] = ids;
				} else {
					ids = out[ license.name ];
				}
				if ( indexOf( ids, id ) === -1 ) {
					ids.push( id );
				}
			}
		} else {
			if ( !hasOwnProp( out, 'UNKNOWN' ) ) {
				ids = [];
				out[ 'UNKNOWN' ] = ids;
			} else {
				ids = out[ 'UNKNOWN' ];
			}
			if ( indexOf( ids, id ) === -1 ) {
				ids.push( id );
			}
		}
	}
	return out;
} // end FUNCTION reporter()


// EXPORTS //

module.exports = reporter;
