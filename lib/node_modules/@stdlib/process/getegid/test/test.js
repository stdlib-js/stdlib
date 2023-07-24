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
var proxyquire = require( 'proxyquire' );
var IS_BROWSER = require( '@stdlib/assert/is-browser' );
var getegid = require( './../lib' );


// VARIABLES //

var opts = {
	'skip': IS_BROWSER
};


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof getegid, 'function', 'main export is a function' );
	t.end();
});

tape( 'if `process.getegid` is a function, the main export aliases `process.getegid`', opts, function test( t ) {
	var getegid = proxyquire( './../lib/main.js', {
		'@stdlib/assert/is-function': isFunction
	});
	t.strictEqual( getegid, proc.getegid, 'is alias' ); // eslint-disable-line  node/no-unsupported-features/node-builtins
	t.end();

	function isFunction() {
		return true;
	}
});

tape( 'if an environment does not support `process.getegid`, the main export always returns `null`', opts, function test( t ) {
	var getegid = proxyquire( './../lib/main.js', {
		'@stdlib/assert/is-function': isFunction
	});
	t.strictEqual( typeof getegid, 'function', 'main export is a function' );
	t.strictEqual( getegid(), null, 'returns null' );
	t.strictEqual( getegid(), null, 'returns null' );
	t.strictEqual( getegid(), null, 'returns null' );
	t.strictEqual( getegid(), null, 'returns null' );
	t.end();

	function isFunction() {
		return false;
	}
});
