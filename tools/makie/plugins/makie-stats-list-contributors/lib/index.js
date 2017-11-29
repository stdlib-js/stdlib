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
	process.exitCode = 1;
	console.error( 'Error: %s', error.message ); // eslint-disable-line no-console
} // end FUNCTION onError()

/**
* Callback invoked upon child process close.
*
* @private
* @param {number} code - exit code
* @returns {void}
*/
function onFinish( code ) {
	if ( code !== 0 ) {
		process.exitCode = code;
		return console.error( 'Child process exited with code `'+code + '`.' ); // eslint-disable-line no-console
	}
} // end FUNCTION onFinish()


// MAIN //

/**
* Plugin to list contributors.
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
