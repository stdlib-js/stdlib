'use strict';

/**
* Build test assets.
*
* @module @stdlib/tools/gh-pages/tests
*
* @example
* var build = require( '/path/to/tests' );
*
* var src = '/foo/bar/test';
* var out = '/beep/boop';
*
* var opts = {
*     'pattern': '\*\*\/test*.js',
*     'bundle': 'test_bundle.js',
*     'html': 'tests.html'
* };
*/

// MODULES //

var build = require( './build.js' );


// EXPORTS //

module.exports = build;
