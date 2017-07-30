'use strict';

/**
* Return a RawGit URL for a file hosted in a public Github repository.
*
* @module @stdlib/tools/markdown/rawgit-url
*
* @example
* var out = rawgit({
*     'slug': 'stdlib-js/stdlib/develop',
*     'file': 'README.md'
* });
* // returns 'https://cdn.rawgit.com/stdlib-js/stdlib/develop/README.md'
*/

// MODULES //

var rawgit = require( './main.js' );


// EXPORTS //

module.exports = rawgit;
