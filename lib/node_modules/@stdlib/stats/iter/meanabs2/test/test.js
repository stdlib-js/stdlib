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
var array2iterator = require( '@stdlib/array/to-iterator' );
var iterEmpty = require( '@stdlib/iter/empty' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var itermeanabs2 = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof itermeanabs2, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if not provided an iterator', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			itermeanabs2( value );
		};
	}
});

tape( 'the function computes the arithmetic mean of squared absolute values', function test( t ) {
	var arr;
	var v;

	arr = array2iterator( [ 1.0, -2.0, -3.0, 4.0 ] );
	v = itermeanabs2( arr );

	t.strictEqual( v, 7.5, 'returns expected value' );
	t.end();
});

tape( 'the function returns `null` if provided an "empty" iterator', function test( t ) {
	var v = itermeanabs2( iterEmpty() );
	t.strictEqual( v, null, 'returns expected value' );
	t.end();
});

tape( 'the function returns `NaN` if an iterated value is non-numeric', function test( t ) {
	var arr;
	var v;

	arr = array2iterator( [ 1.0, 2.0, '3.0', 4.0 ] );
	v = itermeanabs2( arr );

	t.strictEqual( isnan( v ), true, 'returns expected value' );

	arr = array2iterator( [ 1.0, 2.0, NaN, 4.0 ] );
	v = itermeanabs2( arr );

	t.strictEqual( isnan( v ), true, 'returns expected value' );
	t.end();
});
