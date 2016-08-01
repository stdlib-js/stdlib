'use strict';

// MAKIE //

/**
* Executes a Makefile command.
*
* @param {string} dirpath - Makefile directory
* @param {Object} opts - function options
* @param {Object} opts.plugins - plugins
* @param {string} target - Makefile target
*
* @example
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
function makie( dirpath, opts, target ) {
	var targets;
	var plugin;
	var keys;
	var path;
	var key;
	var err;
	var cwd;
	var i;

	targets = {};

	// Load plugins...
	if ( opts.plugins ) {
		keys = Object.keys( opts.plugins );
		for ( i = 0; i < keys.length; i++ ) {
			key = keys[ i ];
			targets[ key ] = require( opts.plugins[ key ] );
		}
	}
	plugin = targets[ target ];
	if ( plugin === void 0 ) {
		err = 'Unrecognized/unsupported Makefile target: `' + target + '`.\n';
		process.stderr.write( err, 'utf8' );
		return process.exit( 1 );
	}
	cwd = process.cwd();

	// Check that we are within either the Makefile directory or a subdirectory...
	path = cwd.substring( 0, dirpath.length );
	if ( path !== dirpath ) {
		err = 'In order to execute Makefile commands, you must be either in the Makefile directory or a subdirectory. Current directory: `' + cwd + '`. Makefile directory: `' + dirpath + '`.\n';
		process.stderr.write( err, 'utf8' );
		return process.exit( 1 );
	}
	// Remove the `dirpath` path (including any beginning slash):
	path = cwd.substring( dirpath.length+1 );

	// Invoke the plugin:
	plugin( dirpath, cwd, path || '' );
} // end FUNCTION makie()


// EXPORTS //

module.exports = makie;
