'use strict';

/**
* Build package assets.
*
* @module @stdlib/tools/gh-pages/package
*
* @example
* var build = require( '/path/to/package' );
*
* var src = '/foo/bar';
* var out = '/beep/boop';
*
* var opts = {
*     'tests': {
*          'pattern': '\*\*\/test*.js',
*          'bundle': 'test_bundle.js'
*      },
*     'readme': 'README.md'
* };
*/

// MODULES //

var build = require( './build.js' );


// EXPORTS //

module.exports = build;
