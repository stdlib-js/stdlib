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

var tape = require( 'tape' );
var proxyquire = require( 'proxyquire' );
var canExit = require( './../lib/utils/can_exit.js' );


// TESTS //

tape( 'main export is a boolean', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof canExit, 'boolean', 'main export is a boolean' );
	t.end();
});

tape( 'if a `process` global variable is not present, the value is `false`', function test( t ) {
	var canExit = proxyquire( './../lib/utils/can_exit.js', {
		'./process.js': false
	});
	t.strictEqual( canExit, false, 'value is false' );
	t.end();
});

tape( 'if a `process` global variable is present but lacks an `exit` method, the value is `false`', function test( t ) {
	var canExit = proxyquire( './../lib/utils/can_exit.js', {
		'./process.js': {
			'exit': 'beep' // non-function
		}
	});
	t.strictEqual( canExit, false, 'value is false' );
	t.end();
});

tape( 'if a `process` global variable is present and has an `exit` method, the value is `true`', function test( t ) {
	var canExit;
	var proc;

	proc = {
		'exit': exit
	};

	canExit = proxyquire( './../lib/utils/can_exit.js', {
		'./process.js': proc
	});
	t.strictEqual( canExit, true, 'value is true' );
	t.end();

	function exit() {
		// No-op...
	}
});
