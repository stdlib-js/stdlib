'use strict';

// MODULES //

var spawn = require( 'child_process' ).spawn;
var targets = require( './targets.js' );


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
	process.exit( 0 );
} // end FUNCTION onFinish()

/**
* Callback invoked upon receiving data from `stdout`.
*
* @private
* @param {Buffer} data - standard output
*/
function stdout( data ) {
	process.stdout.write( data );
} // end FUNCTION stdout()

/**
* Callback invoked upon receiving data from `stderr`.
*
* @private
* @param {Buffer} data - standard error
*/
function stderr( data ) {
	process.stderr.write( data );
} // end FUNCTION stderr()


// MAKIE //

/**
* Executes a Makefile command.
*
* @param {string} dirpath - Makefile directory
* @param {string} target - Makefile target
*
* @example
* makie( '/home/stdlib-js/stdlib', 'test' );
*/
function makie( dirpath, target ) {
	var filter;
	var path;
	var args;
	var proc;
	var opts;
	var err;
	var dir;
	var t;

	// Get the working directory of the calling process:
	dir = process.cwd();

	t = targets[ target ];
	if ( t === void 0 ) {
		err = 'Unrecognized/unsupported Makefile target: `' + target + '`.\n';
		process.stderr.write( err, 'utf8' );
		return process.exit( 1 );
	}
	// Check that we are within the project...
	path = dir.substring( 0, dirpath.length );
	if ( path !== dirpath ) {
		err = 'In order to execute Makefile commands, you must be within the project. Current directory: `' + dir + '`. Project directory: `' + dirpath + '`.\n';
		process.stderr.write( err, 'utf8' );
		return process.exit( 1 );
	}
	if ( t ) {
		// Remove the `dirpath` path (including any beginning slash):
		path = dir.substring( dirpath.length+1 );

		// If we are in a sub-directory, use the relative sub-directory path to create a filter...
		if ( path ) {
			filter = t+'=.*/'+path+'/.*';
		}
	}
	// Assemble command-line arguments:
	args = [];
	if ( filter ) {
		args.push( filter );
	}
	args.push( target );

	// Spawn a new process to execute the command...
	opts = {};
	opts.cwd = dirpath;
	if ( target === 'repl' ) {
		opts.stdio = 'inherit';
		args.unshift( 'REPL_DIR='+dir );
		proc = spawn( 'make', args, opts );
	} else {
		proc = spawn( 'make', args, opts );
		proc.on( 'error', onError );
		proc.stdout.on( 'data', stdout );
		proc.stderr.on( 'data', stderr );
		proc.on( 'close', onFinish );
	}
} // end FUNCTION makie()


// EXPORTS //

module.exports = makie;
