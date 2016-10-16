'use strict';

/**
* Return a reference corresponding to a citation identifier.
*
* @module @stdlib/tools/citation-to-reference
*
* @example
* var toReference = require( '/path/to/stdlib/tools/citation-to-reference' );
*
* toReference( '@press1992', clbk );
*
* function clbk( error, reference ) {
*     if ( error ) {
*         throw error;
*     }
*     console.log( reference );
* }
*
* @example
* var toReference = require( '/path/to/stdlib/tools/citation-to-reference' );
*
* var ref = toReference.sync( '@press1992' );
* // returns '...'
*/

// MODULES //

var prefix = require( './stdlib.js' );
var setReadOnly = require( prefix+'@stdlib/utils/define-read-only-property' );
var toReference = require( './async.js' );
var sync = require( './sync.js' );


// METHODS //

setReadOnly( toReference, 'sync', sync );


// EXPORTS //

module.exports = toReference;
