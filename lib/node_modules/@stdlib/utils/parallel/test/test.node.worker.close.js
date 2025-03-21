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

/* global global */

'use strict';

// MODULES //

var tape = require( 'tape' );
var proxyquire = require( 'proxyquire' );
var closeProcess = require( './../lib' );


// FIXTURES //

function database() {
	return {};
}


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof closeProcess, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function kills all child processes', function test( t ) {
	var closeProcess;
	var count;
	var mock;
	var db;

	mock = {
		'kill': kill
	};

	db = database();
	db.a = mock;
	db.b = mock;

	count = 0;

	closeProcess = proxyquire( './../lib/node/worker/close.js', {
		'./children.js': db,
		'./process.js': {
			'disconnect': disconnect
		}
	});

	closeProcess();

	function kill() {
		count += 1;
	}

	function disconnect() {
		t.equal( count, 2, 'kills child processes' );
		t.deepEqual( db, {}, 'removes children from database' );
		t.end();
	}
});
