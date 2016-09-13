'use strict';

/**
* Basic license information reporter.
*
* @module @stdlib/tools/licenses/reporters/basic
*
* @example
* var licenses = require( '@stdlib/tools/licenses/licenses' );
* var reporter = require( '@stdlib/tools/licenses/reporters/basic' );
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
