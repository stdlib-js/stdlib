'use strict';

/**
* Build package assets.
*
* @module @stdlib/tools/gh-pages/pkg-browser-build
*
* @example
* var build = require( '@stdlib/tools/gh-pages/pkg-browser-build' );
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
