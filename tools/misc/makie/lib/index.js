'use strict';

/**
* Run project Makefile targets from anywhere in the project.
*
* @module tools/misc/makie
*
* @example
* var makie = require( 'tools/misc/makie' );
* var spawn = require( 'child_process' ).spawn;
*
* function plugin( dirpath, cwd, subpath ) {
*     var proc = spawn( 'make', [], 'test' );
* }
*
* var opts = {
*     'plugins': {
*         'test': plugin
*     }
* };
*
* makie( '/home/stdlib-js/stdlib', opts, 'test' );
*/

// MODULES //

var makie = require( './makie.js' );


// EXPORTS //

module.exports = makie;
