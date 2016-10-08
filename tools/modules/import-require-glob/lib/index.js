'use strict';

/**
* List import and require paths.
*
* @module @stdlib/tools/modules/import-require-glob
*
* @example
* var ls = require( '@stdlib/tools/modules/import-require-glob' );
*
* ls( onList );
*
* function onList( error, results ) {
*     if ( error ) {
*         throw error;
*     }
*     console.dir( results );
* }
*
* @example
* var ls = require( '@stdlib/tools/modules/import-require-glob' ).sync;
*
* var results = ls();
* if ( results instanceof Error ) {
*     throw results;
* }
* console.dir( results );
*/

// MODULES //

var prefix = require( './stdlib.js' );
var setReadOnly = require( prefix+'@stdlib/utils/define-read-only-property' );
var ls = require( './async.js' );
var sync = require( './sync.js' );


// METHODS //

setReadOnly( ls, 'sync', sync );


// EXPORTS //

module.exports = ls;
