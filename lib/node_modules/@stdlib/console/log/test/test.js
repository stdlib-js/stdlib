/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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
var log = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof log, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function outputs a message to the console', function test( t ) {
	var actual;
	var args;
	var log;
	var i;

	log = proxyquire( './../lib/main.js', {
		'console': {
			'log': mock
		}
	});

	args = [
		[ 'beep' ],
		[ 'Hello, %s!', 'World' ],
		[ '%d', 1 ],
		[ '%.2d', 1.1 ],
		[ '%i', 2 ],
		[ '%.2i', 2.2 ],
		[ '%f', 3.14 ],
		[ '%.2f', 4.13 ],
		[ '%o', {} ],
		[ '%O', {} ]
	];
	actual = [];

	for ( i = 0; i < args.length; i++ ) {
		log.apply( null, args[ i ] );
	}
	t.deepEqual( actual, args, 'returns expected value' );
	t.end();

	function mock() {
		var args;
		var i;

		args = [];
		for ( i = 0; i < arguments.length; i++ ) {
			args.push( arguments[ i ] );
		}
		actual.push( args );
	}
});
