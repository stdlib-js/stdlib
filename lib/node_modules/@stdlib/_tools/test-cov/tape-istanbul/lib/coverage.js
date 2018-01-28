'use strict';

/**
* Returns coverage information from a global coverage variable.
*
* @private
* @param {string} name - name of global coverage variable
* @returns {Object} coverage information
*/
function coverage( name ) {
	var cov = global[ name ];
	if ( cov === void 0 ) {
		cov = {};
	}
	return cov;
}


// EXPORTS //

module.exports = coverage;
