'use strict';

/**
* Reporter which filters license results for packages directly depended on by the root package.
*
* @module @stdlib/tools/licenses/reporters/root-deps
*
* @example
* var licenses = require( '@stdlib/tools/licenses/licenses' );
* var reporter = require( '@stdlib/tools/licenses/reporters/root-deps' );
*
* licenses( onResults );
*
* function onResults( error, results ) {
*     if ( error ) {
*         throw error;
*     }
*     results = reporter( results, true );
*     console.dir( results );
* }
*/

// MODULES //

var reporter = require( './reporter.js' );


// EXPORTS //

module.exports = reporter;
