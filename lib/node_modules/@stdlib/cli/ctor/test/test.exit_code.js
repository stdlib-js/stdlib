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

// MODULES //

var tape = require( 'tape' );
var proxyquire = require( 'proxyquire' );
var exitCode = require( './../lib/exit_code.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof exitCode, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function sets the process exit code (Node.js versions >0.x.x)', function test( t ) {
	var exitCode;
	var proc;
	var mock;

	mock = {
		'versions': {
			'node': '1.0.0'
		}
	};

	exitCode = proxyquire( './../lib/exit_code.js', {
		'./process.js': mock
	});

	proc = {
		'exit': exit,
		'exitCode': -1
	};

	exitCode( proc, 1 );

	t.strictEqual( proc.exitCode, 1, 'returns expected value' );
	t.end();

	function exit() {
		t.fail( 'should not be called' );
	}
});

tape( 'the function sets the process exit code (Node.js versions >0.10.x)', function test( t ) {
	var exitCode;
	var proc;
	var mock;

	mock = {
		'versions': {
			'node': '0.11.0'
		}
	};

	exitCode = proxyquire( './../lib/exit_code.js', {
		'./process.js': mock
	});

	proc = {
		'exit': exit,
		'exitCode': -1
	};

	exitCode( proc, 1 );

	t.strictEqual( proc.exitCode, 1, 'returns expected value' );
	t.end();

	function exit() {
		t.fail( 'should not be called' );
	}
});

tape( 'the function sets the process "exit code" and forcefully exits the calling process on older Node.js versions (Node.js versions <=0.10.x)', function test( t ) {
	var exitCode;
	var proc;
	var mock;

	mock = {
		'versions': {
			'node': '0.10.9999999'
		}
	};

	exitCode = proxyquire( './../lib/exit_code.js', {
		'./process.js': mock
	});

	proc = {
		'exit': exit,
		'exitCode': -1
	};

	exitCode( proc, 1 );

	t.strictEqual( proc.exitCode, 1, 'returns expected value' );

	function exit( code ) {
		t.ok( true, 'forcefully exits' );
		t.strictEqual( code, 1, 'sets exit code' );
		t.end();
	}
});
