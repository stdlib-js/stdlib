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

var proc = require( 'process' );
var tape = require( 'tape' );
var semver = require( 'semver' );
var IS_NODE = require( '@stdlib/assert/is-node' );
var ENV = require( '@stdlib/process/env' );
var copy = require( './../lib' );


// MAIN //

var opts = {
	'skip': !IS_NODE
};


// TESTS //

tape( 'in Node <=v0.10.x, `process.env` does not behave like a normal object and cannot be copied using traditional means (hasOwnProperties, but no property descriptors)', opts, function test( t ) {
	var bool;

	t.ok( true, __filename );

	// In older versions of Node.js, `process.env` is a bizarro "object" which proxies calls using getters and setters to system calls in order to interface with environment variables. The initial setup of `process.env` happened in C code, where intercepts allowed `Object.prototype.hasOwnProperty` to function for environment variables (even though proxied), but without also intercepting `Object.prototype.hasOwnPropertyDescriptor`, which meant that the latter returned `undefined`, even if `hasOwnProperty` returned `true`. As a result, you get a bizarre situation where an "object" has an own property but that property has no property descriptor, which causes this implementation to error. Rather than include a workaround, we just include a failing test case, as this seems particular to `process.env` and not a general problem.
	bool = semver.lte( proc.versions.node, '0.11.0' );
	if ( bool ) {
		t.throws( foo, Error, 'throws an error' );
	} else {
		t.ok( foo(), 'successfully copies process.env' );
	}
	t.end();

	function foo() {
		return copy( ENV );
	}
});
