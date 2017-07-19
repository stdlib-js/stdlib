'use strict';

/**
* Create a link entry in the link database.
*
* @module @stdlib/tools/links/create
*
* @example
* var create = require( '@stdlib/tools/links/create' );
*
* var opts = {
*     'uri': 'http://stdlib.io/',
*     'id': 'stdlib',
*     'description': 'A standard library for JavaScript and Node.js.'
* };
*
* function done( error ) {
*     if ( error ) {
*         throw error;
*     }
*     console.log( 'Success!' );
* }
*
* create( opts, done );
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-read-only-property' );
var create = require( './async.js' );
var sync = require( './sync.js' );


// MAIN //

setReadOnly( create, 'sync', sync );


// EXPORTS //

module.exports = create;
