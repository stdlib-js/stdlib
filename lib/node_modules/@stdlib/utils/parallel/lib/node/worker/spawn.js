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

var run = require( 'child_process' ).spawn;
var logger = require( 'debug' );
var cwd = require( '@stdlib/process/cwd' );
var proc = require( './process.js' );


// VARIABLES //

var debug = logger( 'parallel:worker:spawn' );


// MAIN //

/**
* Runs a script by spawning a child process.
*
* @private
* @param {string} cmd - command to run
* @param {string} script - script filepath
* @param {Callback} clbk - callback to invoke after a child process closes
* @returns {Process} child process
*/
function spawn( cmd, script, clbk ) {
	var child;
	var args;
	var opts;
	var err;

	debug( 'Creating child process...' );
	args = [ script ];
	opts = {
		'cwd': cwd(),
		'env': proc.env,
		'shell': false, // don't run the command inside a shell
		'stdio': 'inherit' // use stdio of worker process
	};
	if ( proc.env.WORKER_UID ) {
		opts.uid = parseInt( proc.env.WORKER_UID, 10 );
	}
	if ( proc.env.WORKER_GID ) {
		opts.gid = parseInt( proc.env.WORKER_GID, 10 );
	}
	child = run( cmd, args, opts );

	child.on( 'error', onError );
	child.on( 'close', onClose );
	child.on( 'exit', onExit );
	child.on( 'disconnect', onDisconnect );

	debug( 'Child process created. pid: %d.', child.pid );
	return child;

	/**
	* Callback invoked upon child process close.
	*
	* @private
	* @param {(number|null)} code - exit code
	* @param {(string|null)} signal - termination signal
	* @returns {void}
	*/
	function onClose( code, signal ) {
		debug( 'Child process closed. Code: %d. Signal: %s. pid: %d.', code, signal, child.pid );
		processExit( code, signal );
		if ( err ) {
			return clbk( err );
		}
		clbk( null, child.pid, script );
	}

	/**
	* Callback invoked upon child process exit.
	*
	* @private
	* @param {(number|null)} code - exit code
	* @param {(string|null)} signal - termination signal
	*/
	function onExit( code, signal ) {
		debug( 'Child process exited. Code: %d. Signal: %s. pid: %d.', code, signal, child.pid );
		processExit( code, signal );
	}

	/**
	* Callback invoked upon child process disconnect.
	*
	* @private
	*/
	function onDisconnect() {
		debug( 'Child process disconnected. pid: %d.', child.pid );
	}

	/**
	* Callback invoked upon child process error.
	*
	* @private
	* @param {Error} error - error object
	*/
	function onError( error ) {
		debug( 'Child process error: %s. pid: %d.', error.message, child.pid );
		clbk( error );
	}

	/**
	* Processes process exit values and sets the `err` state.
	*
	* @private
	* @param {(number|null)} code - exit code
	* @param {(string|null)} signal - termination signal
	*/
	function processExit( code, signal ) {
		if ( err ) {
			return;
		}
		if ( code !== null && code !== 0 ) {
			err = new Error( cmd+' '+script+' failed with exit code: '+code+'.' );
		} else if ( signal !== null ) {
			err = new Error( cmd+' '+script+' failed due to termination signal: '+signal+'.' );
		}
		if ( err ) {
			err.code = code;
			err.signal = signal;
		}
	}
}


// EXPORTS //

module.exports = spawn;
