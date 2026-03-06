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
var canEmitExit = require( './../lib/utils/can_emit_exit.js' );


// TESTS //

tape( 'main export is a boolean', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof canEmitExit, 'boolean', 'main export is a boolean' );
	t.end();
});

tape( 'if a browser environment, the value is `false`', function test( t ) {
	var canEmitExit = proxyquire( './../lib/utils/can_emit_exit.js', {
		'@stdlib/assert/is-browser': true
	});
	t.strictEqual( canEmitExit, false, 'value is false' );
	t.end();
});

tape( 'if not a browser environment and an environment cannot exit, the value is `false`', function test( t ) {
	var canEmitExit = proxyquire( './../lib/utils/can_emit_exit.js', {
		'@stdlib/assert/is-browser': false,
		'./can_exit.js': false
	});
	t.strictEqual( canEmitExit, false, 'value is false' );
	t.end();
});

tape( 'if not a browser environment and an environment can exit (e.g., Node.js), the value is `true`', function test( t ) {
	var canEmitExit = proxyquire( './../lib/utils/can_emit_exit.js', {
		'@stdlib/assert/is-browser': false,
		'./can_exit.js': true
	});
	t.strictEqual( canEmitExit, true, 'value is true' );
	t.end();
});
