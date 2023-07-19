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

/* eslint-disable no-new-wrappers */

'use strict';

// MODULES //

var tape = require( 'tape' );
var Number = require( '@stdlib/number/ctor' );
var Boolean = require( '@stdlib/boolean/ctor' );
var isStrictEqual = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof isStrictEqual, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `true` if provided two arguments which are strictly equal', function test( t ) {
	var values;
	var i;

	values = [
		'',
		'beep',
		5,
		3.14,
		-3.14,
		0.0,
		-0.0,
		true,
		false,
		null,
		void 0,
		[],
		{},
		function noop() {},
		new Date(),
		/.*/
	];
	for ( i = 0; i < values.length; i++ ) {
		t.strictEqual( isStrictEqual( values[ i ], values[ i ] ), true, 'returns true when provided '+values[ i ] );
	}
	t.end();
});

tape( 'the function returns `false` if not provided two arguments which are strictly equal', function test( t ) {
	var a;
	var b;
	var i;

	a = [
		'',
		'beep',
		new String( 'beep' ),
		5,
		3.14,
		-3.14,
		0.0,
		-0.0,
		NaN,
		new Number( 5 ),
		true,
		false,
		new Boolean( true ),
		null,
		void 0,
		[],
		{},
		function noop() {},
		new Date(),
		/.*/
	];
	b = [
		'abc',
		'boop',
		new String( 'beep' ),
		-5,
		-3.14,
		3.14,
		-0.0,
		0.0,
		NaN,
		new Number( 5 ),
		false,
		true,
		new Boolean( true ),
		void 0,
		null,
		[],
		{},
		function noop() {},
		new Date(),
		/.*/
	];
	for ( i = 0; i < a.length; i++ ) {
		t.strictEqual( isStrictEqual( a[ i ], b[ i ] ), false, 'returns false when provided '+a[ i ]+' and '+b[ i ] );
	}
	t.end();
});
