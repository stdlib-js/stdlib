'use strict';

// MODULES //

var spawn = require( 'child_process' ).spawn;


// FUNCTIONS //

/**
* Callback invoked upon encountering an error.
*
* @private
* @param {Error} error - error object
*/
function onError( error ) {
	process.stderr.write( error.message+'\n', 'utf8' );
	return process.exit( 1 );
} // end FUNCTION onError()

/**
* Callback invoked upon child process close.
*
* @private
* @param {number} code - exit code
*/
function onFinish( code ) {
	if ( code !== 0 ) {
		process.stderr.write( '`make` process exited with code `'+code + '.\n' );
		return process.exit( code );
	}
} // end FUNCTION onFinish()


// MAIN //

/**
* `makie` plugin to list contributors.
*
* @param {string} dir - Makefile directory
* @param {string} cwd - current working directory
* @param {string} subpath - subdirectory path
*/
function plugin( dir, cwd, subpath ) {
	var opts;
	var args;
	var proc;

	opts = {};
	opts.cwd = dir;
	opts.stdio = 'inherit';

	args = [];

	// Environment variables:
	if ( subpath ) {
		args.push( 'LIST_DIR_CONTRIBUTORS='+subpath );
	}
	// Target:
	args.push( 'stats-list-dir-contributors' );

	proc = spawn( 'make', args, opts );
	proc.on( 'error', onError );
	proc.on( 'close', onFinish );
} // end FUNCTION plugin()


// EXPORTS //

module.exports = plugin;
