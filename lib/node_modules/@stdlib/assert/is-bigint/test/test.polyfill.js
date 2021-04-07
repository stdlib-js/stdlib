/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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
var isBigInt = require( './../lib/polyfill.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof isBigInt, 'function', 'main export is a function' );
	t.end();
});

tape( 'attached to the main export is a method to test for a primitive BigInt', function test( t ) {
	t.strictEqual( typeof isBigInt.isPrimitive, 'function', 'export is a function' );
	t.end();
});

tape( 'attached to the main export is a method to test for a BigInt object', function test( t ) {
	t.strictEqual( typeof isBigInt.isObject, 'function', 'export is a function' );
	t.end();
});

tape( 'the main export always returns `false`', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		null,
		void 0,
		false,
		true,
		[],
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.strictEqual( isBigInt( values[ i ] ), false, 'returns false when provided '+values[ i ] );
	}
	t.end();
});

tape( 'the `isPrimitive` method always returns `false`', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		null,
		void 0,
		false,
		true,
		[],
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.strictEqual( isBigInt.isPrimitive( values[ i ] ), false, 'returns false when provided '+values[ i ] );
	}
	t.end();
});

tape( 'the `isObject` method always returns `false`', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		null,
		void 0,
		false,
		true,
		[],
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.strictEqual( isBigInt.isObject( values[ i ] ), false, 'returns false when provided '+values[ i ] );
	}
	t.end();
});
