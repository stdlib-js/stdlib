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

var proc = require( 'process' );
var repl = require( './../lib' );

// Start the REPL:
repl( onStart );

function onStart( error, server ) {
	if ( error ) {
		throw error;
	}
	// After the REPL has started, exit the process...
	setTimeout( onTimeout, 2500 );

	function onTimeout() {
		// In Node v0.10, the REPLServer instance does not have a `close()` method...
		if ( server.close ) {
			server.close();
		} else {
			proc.exit( 0 );
		}
	}
}
