'use strict';

/**
* List stdlib module names.
*
* @module @stdlib/tools/ls/module-names
*
* @example
* var ls = require( '@stdlib/tools/ls/module-names' );
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
* var ls = require( '@stdlib/tools/ls/module-names' );
*
* var names = ls.sync();
* // returns [...]
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
