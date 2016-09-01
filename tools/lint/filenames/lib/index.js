'use strict';

/**
* Lint filenames.
*
* @module @stdlib/tools/lint/filenames
*
* @example
* var lint = require( '@stdlib/tools/lint/filenames' );
*
* lint( onLint );
*
* function onLint( error, filenames ) {
*     if ( error ) {
*         throw error;
*     }
*     console.dir( filenames );
* }
*
* @example
* var lint = require( '@stdlib/tools/lint/filenames' );
*
* var filenames = lint.sync();
* // returns [...]
*/

// MODULES //

var stdlib = require( './stdlib.js' );
var setReadOnly = require( stdlib+'@stdlib/utils/define-read-only-property' );
var lint = require( './async.js' );
var sync = require( './sync.js' );


// METHODS //

setReadOnly( lint, 'sync', sync );


// EXPORTS //

module.exports = lint;
