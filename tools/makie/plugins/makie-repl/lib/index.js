'use strict';

// MODULES //

var spawn = require( 'child_process' ).spawn;


// MAIN //

/**
* Plugin for launching a REPL.
*
* @param {string} dir - Makefile directory
* @param {string} cwd - current working directory
* @param {string} subpath - subdirectory path
*/
function plugin( dir, cwd ) {
	var opts;
	var args;

	opts = {};
	opts.cwd = dir;
	opts.stdio = 'inherit';

	args = new Array( 2 );

	// Environment variables:
	args[ 0 ] = 'REPL_DIR='+cwd;

	// Target:
	args[ 1 ] = 'repl';

	spawn( 'make', args, opts );
}


// EXPORTS //

module.exports = plugin;
