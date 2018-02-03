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

/* eslint-disable object-curly-newline */

'use strict';

// MODULES //

var tape = require( 'tape' );
var proxyquire = require( 'proxyquire' );
var isArguments = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof isArguments, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `true` if provided an `arguments` object', function test( t ) {
	t.strictEqual( isArguments( arguments ), true, 'returns true' );
	t.end();
});

tape( 'the function returns `false` if not provided an `arguments` object', function test( t ) {
	var values;
	var i;

	function Arguments() {
		return this;
	}

	values = [
		'5',
		5,
		NaN,
		null,
		undefined,
		true,
		[],
		{},
		{ 'length': 3.14 },
		{ 'length': -1 },
		{ 'length': '5' },
		function noop() {},
		new Arguments(),
		Array.prototype.slice.call( arguments )
	];

	for ( i = 0; i < values.length; i++ ) {
		t.strictEqual( isArguments( values[i] ), false, 'returns false for when provided ' + values[i] );
	}
	t.end();
});

tape( 'the function uses a polyfill for environments which return an unexpected internal class', function test( t ) {
	var isArguments;
	var values;
	var i;

	function Arguments() {
		return this;
	}

	isArguments = proxyquire( './../lib/index.js', {
		'./detect.js': false
	});

	t.strictEqual( isArguments( arguments ), true, 'returns true when provided an `arguments` object' );

	values = [
		'5',
		5,
		NaN,
		null,
		undefined,
		true,
		[],
		{},
		{ 'length': 3.14 },
		{ 'length': -1 },
		{ 'length': '5' },
		function noop() {},
		new Arguments(),
		Array.prototype.slice.call( arguments )
	];

	for ( i = 0; i < values.length; i++ ) {
		t.strictEqual( isArguments( values[i] ), false, 'returns false when provided '+values[i] );
	}
	t.end();
});
