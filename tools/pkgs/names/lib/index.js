'use strict';

/**
* List stdlib package names.
*
* @module @stdlib/tools/pkgs/names
*
* @example
* var ls = require( '@stdlib/tools/pkgs/names' );
*
* ls( onList );
*
* function onList( error, names ) {
*     if ( error ) {
*         throw error;
*     }
*     console.dir( names );
* }
*
* @example
* var ls = require( '@stdlib/tools/pkgs/names' );
*
* var names = ls.sync();
* // returns [...]
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-read-only-property' );
var ls = require( './async.js' );
var sync = require( './sync.js' );


// MAIN //

setReadOnly( ls, 'sync', sync );


// EXPORTS //

module.exports = ls;
