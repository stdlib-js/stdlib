/**
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
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

/**
* REPL environment.
*
* @module @stdlib/repl
*
* @example
* var debug = require( '@stdlib/streams/node/debug-sink' );
* var REPL = require( '@stdlib/repl' );
*
* function onExit() {
*     console.log( 'REPL closed.' );
* }
*
* // Create a new REPL:
* var repl = new REPL({
*     'output': debug()
* });
* repl.on( 'exit', onExit );
*
* // ...
*
* // Close the REPL:
* repl.close();
*/

// MODULES //

var REPL = require( './main.js' );


// EXPORTS //

module.exports = REPL;
