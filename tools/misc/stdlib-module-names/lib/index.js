'use strict';

/**
* List stdlib module names.
*
* @module @stdlib/tools/misc/stdlib-module-names
*
* @example
* var list = require( '@stdlib/tools/misc/stdlib-module-names' );
*
* list( onList );
*
* function onList( error, names ) {
*     if ( error ) {
*         throw error;
*     }
*     console.dir( names );
* }
*
* @example
* var list = require( '@stdlib/tools/misc/stdlib-module-names' );
*
* var names = list.sync();
* // returns [...]
*/

// MODULES //

var stdlib = require( './stdlib.js' );
var setReadOnly = require( stdlib+'@stdlib/utils/define-read-only-property' );
var async = require( './async.js' );
var sync = require( './sync.js' );


// METHODS //

setReadOnly( async, 'sync', sync );


// EXPORTS //

module.exports = async;
