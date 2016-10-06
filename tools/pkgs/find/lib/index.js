'use strict';

/**
* Find packages.
*
* @module @stdlib/tools/pkgs/find
*
* @example
* var findPkgs = require( '@stdlib/tools/pkgs/find' );
*
* findPkgs( onPkgs );
*
* function onPkgs( error, pkgs ) {
*     if ( error ) {
*         throw error;
*     }
*     console.dir( pkgs );
* }
*
* @example
* var findPkgs = require( '@stdlib/tools/pkgs/find' );
*
* var pkgs = findPkgs.sync();
* // returns [...]
*/

// MODULES //

var prefix = require( './stdlib.js' );
var setReadOnly = require( prefix+'@stdlib/utils/define-read-only-property' );
var findPkgs = require( './async.js' );
var sync = require( './sync.js' );


// METHODS //

setReadOnly( findPkgs, 'sync', sync );


// EXPORTS //

module.exports = findPkgs;
