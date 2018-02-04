/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var execFile = require( 'child_process' ).execFile;
var logger = require( 'debug' );
var cwd = require( '@stdlib/process/cwd' );
var proc = require( './process.js' );


// VARIABLES //

var debug = logger( 'parallel:worker:exec' );


// MAIN //

/**
* Runs a script by executing the file in a child process without spawning a shell.
*
* @private
* @param {string} cmd - executable to run
* @param {string} script - script filepath
* @param {Callback} clbk - callback to invoke after a child process closes
* @returns {Process} child process
*/
function exec( cmd, script, clbk ) {
	var child;
	var args;
	var opts;

	debug( 'Creating child process...' );
	args = [ script ];
	opts = {
		'cwd': cwd(),
		'env': proc.env,
		'encoding': proc.env.WORKER_ENCODING,
		'maxBuffer': parseInt( proc.env.WORKER_MAX_BUFFER, 10 ),
		'timeout': 0,
		'killSignal': 'SIGTERM'
	};
	if ( proc.env.WORKER_UID ) {
		opts.uid = parseInt( proc.env.WORKER_UID, 10 );
	}
	if ( proc.env.WORKER_GID ) {
		opts.gid = parseInt( proc.env.WORKER_GID, 10 );
	}
	child = execFile( cmd, args, opts, done );

	debug( 'Child process created. pid: %d.', child.pid );
	return child;

	/**
	* Callback invoked upon child process termination.
	*
	* @private
	* @param {(Error|null)} error - error object
	* @param {(Buffer|string)} stdout - standard output
	* @param {(Buffer|string)} stderr - standard error
	* @returns {void}
	*/
	function done( error, stdout, stderr ) {
		if ( error ) {
			debug( 'Child process error: %s. pid: %d.', error.message, child.pid );
			return clbk( error );
		}
		debug( 'Child process closed. pid: %d.', child.pid );

		proc.stdout.write( stdout );
		proc.stderr.write( stderr );

		clbk( null, child.pid, script );
	}
}


// EXPORTS //

module.exports = exec;
