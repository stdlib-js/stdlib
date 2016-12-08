'use strict';

/**
* Find and validate `package.json` files.
*
* @module @stdlib/tools/pkg-json/validate-all
*
* @example
* var validate = require( '@stdlib/tools/pkg-json/validate-all' );
*
* validate( clbk );
*
* function clbk( error ) {
*     if ( error ) {
*         throw error;
*     }
*     console.log( 'Success!' );
* }
*
* @example
* var validate = require( '@stdlib/tools/pkg-json/validate-all' );
*
* var err = validate.sync();
* if ( err ) {
*     throw err;
* }
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-read-only-property' );
var validate = require( './async.js' );
var sync = require( './sync.js' );


// MAIN //

setReadOnly( validate, 'sync', sync );


// EXPORTS //

module.exports = validate;
