'use strict';

/**
* Reporter which generates a license summary.
*
* @module @stdlib/tools/licenses/reporters/summary
*
* @example
* var licenses = require( '@stdlib/tools/licenses/licenses' );
* var reporter = require( '@stdlib/tools/licenses/reporters/summary' );
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
