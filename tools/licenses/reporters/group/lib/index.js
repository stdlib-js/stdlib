'use strict';

/**
* Reporter which groups license results by license type.
*
* @module @stdlib/tools/licenses/reporters/group
*
* @example
* var licenses = require( '@stdlib/tools/licenses/licenses' );
* var reporter = require( '@stdlib/tools/licenses/reporters/group' );
*
* licenses( onResults );
*
* function onResults( error, results ) {
*     if ( error ) {
*         throw error;
*     }
*     results = reporter( results );
*     console.dir( results );
* }
*/

// MODULES //

var reporter = require( './reporter.js' );


// EXPORTS //

module.exports = reporter;
