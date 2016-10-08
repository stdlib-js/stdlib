'use strict';

/**
* Resolve package dependencies.
*
* @module @stdlib/tools/pkgs/deps
*
* @example
* var resolveDeps = require( '@stdlib/tools/pkgs/deps' );
*
* var pkgs = [ '/foo/bar' ];
*
* resolveDeps( pkgs, onDeps );
*
* function onDeps( error, deps ) {
*     if ( error ) {
*         throw error;
*     }
*     console.dir( deps );
* }
*
* @example
* var resolveDeps = require( '@stdlib/tools/pkgs/deps' );
*
* var pkgs = [ '/foo/bar' ];
*
* var deps = resolveDeps.sync( pkgs );
*/

var prefix = require( './stdlib.js' );
var setReadOnly = require( prefix+'@stdlib/utils/define-read-only-property' );
var resolveDeps = require( './async.js' );
var sync = require( './sync.js' );


// METHODS //

setReadOnly( resolveDeps, 'sync', sync );


// EXPORTS //

module.exports = resolveDeps;

