'use strict';

/**
* Build package assets.
*
* @module @stdlib/tools/docs/api/build-package
*
* @example
* var build = require( '@stdlib/tools/docs/api/build-package' );
*
* var root = '/foo/bar';
* var out = '/beep/boop';
*
* var opts = {
*     'tests': {
*          'pattern': '\*\*\/test*.js',
*          'bundle': 'test_bundle.js'
*      },
*     'readme': 'README.md'
* };
*
* build( root, out, opts, clbk );
*
* function clbk( error ) {
*     if ( error ) {
*         throw error;
*     }
*     console.log( 'Success!' );
* }
*/

// MODULES //

var build = require( './build.js' );


// EXPORTS //

module.exports = build;
