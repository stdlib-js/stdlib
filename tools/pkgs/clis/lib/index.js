'use strict';

/**
* Find package command-line interfaces.
*
* @module @stdlib/tools/pkgs/clis
*
* @example
* var findCLIs = require( '@stdlib/tools/pkgs/clis' );
*
* findCLIs( clbk );
*
* function clbk( error, files ) {
*     if ( error ) {
*         throw error;
*     }
*     console.dir( files );
* }
*
* @example
* var findCLIs = require( '@stdlib/tools/pkgs/clis' );
*
* var files = findCLIs.sync();
* // returns [...]
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-read-only-property' );
var findCLIs = require( './async.js' );
var sync = require( './sync.js' );


// MAIN //

setReadOnly( findCLIs, 'sync', sync );


// EXPORTS //

module.exports = findCLIs;
