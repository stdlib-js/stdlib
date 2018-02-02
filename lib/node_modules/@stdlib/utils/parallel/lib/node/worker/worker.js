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

var logger = require( 'debug' );
var proc = require( './process.js' );
var db = require( './children.js' );
var closeProcess = require( './close.js' );
var exec = require( './exec.js' );
var spawn = require( './spawn.js' );


// VARIABLES //

var debug = logger( 'parallel:worker' );


// FUNCTIONS //

/**
* Callback invoked upon receiving a message from a parent process.
*
* @private
* @param {string} message - message from parent
* @returns {void}
*/
function onMessage( message ) {
	var child;
	if ( message === 'close' ) {
		debug( 'Received a message to close. Closing...' );
		return closeProcess();
	}
	debug( 'Received a message to run a script: %s. pid: %s.', message, proc.pid );
	if ( proc.env.WORKER_ORDERED ) {
		debug( 'Environment configuration specifies to preserve script output.' );
		child = exec( proc.env.WORKER_CMD, message, done );
	} else {
		debug( 'Environment configuration allows interleaved script output.' );
		child = spawn( proc.env.WORKER_CMD, message, done );
	}
	db[ child.pid ] = true;
}

/**
* Callback invoked once a child process finishes.
*
* @private
* @param {(Error|null)} error - error object
* @param {number} pid - child process id
* @param {string} script - script filepath (i.e., identifier)
* @returns {void}
*/
function done( error, pid, script ) {
	delete db[ pid ];
	if ( error ) {
		closeProcess();
		return proc.emit( 'error', error );
	}
	// Inform the parent process that the script has finished:
	proc.send( script );
}


// MAIN //

/**
* Main script.
*
* @private
*/
function main() {
	proc.on( 'message', onMessage );
}


// EXPORTS //

module.exports = main;
