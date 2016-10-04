'use strict';

/**
* Stdlib package tree.
*
* @module @stdlib/tools/pkgs/tree
*
* @example
* var pkgTree = require( '@stdlib/tools/pkgs/tree' );
*
* pkgTree( onTree );
*
* function onTree( error, tree ) {
*     if ( error ) {
*         throw error;
*     }
*     console.dir( tree );
* }
*
* @example
* var pkgTree = require( '@stdlib/tools/pkgs/tree' );
*
* var tree = pkgTree.sync();
* // returns {...}
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
