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

var IS_NODE = require( '@stdlib/assert/is-node' );
var p = require( './parent.js' );
var stacktrace = require( './stacktrace.js' );


// VARIABLES //

// The module id for the builtin REPL was `repl` in Node versions <4 and then changed to `<repl>` for Node versions >=4 (see https://github.com/nodejs/node/commit/ee72ee753118f2576bfd1ccf58fb2ff651e8bfb0#diff-b13d72249263845d8e8341db0426f9d3R527).
var RE_MODULE_ID = /^repl$|^<repl>$/;

// This is V8 specific (!!), as this assumes the V8 stacktrace API. TODO: rely on an engine agnostic approach to determining callsites.
var RE_ERROR_STACK = /at REPLServer/;


// MAIN //

/**
* Returns a boolean indicating if the function is called from a Node.js REPL environment.
*
* ## Notes
*
* -   False positives are possible due to the existence of a userland package having the same module `id` (see [repl][repl-template-lib]) as the builtin Node.js `repl`.
*
* [repl-template-lib]: https://www.npmjs.com/package/repl
*
* @returns {boolean} boolean indicating if the function is called from a Node.js REPL environment
*
* @example
* var bool = isNodeREPL();
* // returns <boolean>
*/
function isNodeREPL() {
	var stack;
	var m;
	if ( !IS_NODE ) {
		return false;
	}
	// If this module was required in a REPL environment, we can walk up the module dependency tree to find a `repl` ancestor...
	m = p();
	while ( m ) {
		if ( RE_MODULE_ID.test( m.id ) ) {
			return true;
		}
		m = m.parent;
	}
	// Unable to find a `repl` ancestor, so try determining if this function was called from a REPL environment...
	stack = stacktrace();
	if ( stack ) {
		return RE_ERROR_STACK.test( stack );
	}
	return false;
}


// EXPORTS //

module.exports = isNodeREPL;
