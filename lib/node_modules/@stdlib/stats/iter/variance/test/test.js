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
var itervariance = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof itervariance, 'function', 'main export is a function' );
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
			itervariance( value );
		};
	}
});

tape( 'the function throws an error if not provided an iterator (mean)', function test( t ) {
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
			itervariance( value, 0.0 );
		};
	}
});

tape( 'the function throws an error if provided a non-numeric second argument', function test( t ) {
	var values;
	var i;

	values = [
		'5',
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
			itervariance( array2iterator( [ 1, 2, 3 ] ), value );
		};
	}
});

tape( 'the function computes the unbiased sample variance', function test( t ) {
	var arr;
	var v;

	arr = array2iterator( [ 2.0, 3.0, 2.0, 4.0, 3.0, 4.0 ] );
	v = itervariance( arr );

	// Tested against Julia:
	t.strictEqual( v, 0.8, 'returns expected value' );
	t.end();
});

tape( 'the function computes the unbiased sample variance (known mean)', function test( t ) {
	var arr;
	var v;

	arr = array2iterator( [ 2.0, 3.0, 2.0, 4.0, 3.0, 4.0 ] );
	v = itervariance( arr, 3.0 );

	// Tested against Julia:
	t.strictEqual( v, 0.6666666666666666, 'returns expected value' );
	t.end();
});

tape( 'the function returns `null` if provided an "empty" iterator', function test( t ) {
	var v = itervariance( iterEmpty() );
	t.strictEqual( v, null, 'returns expected value' );
	t.end();
});

tape( 'the function returns `null` if provided an "empty" iterator (known mean)', function test( t ) {
	var v = itervariance( iterEmpty(), 0.0 );
	t.strictEqual( v, null, 'returns expected value' );
	t.end();
});

tape( 'the function returns `NaN` if an iterated value is non-numeric', function test( t ) {
	var arr;
	var v;

	arr = array2iterator( [ 1.0, 2.0, '3.0', 4.0 ] );
	v = itervariance( arr );

	t.strictEqual( isnan( v ), true, 'returns expected value' );

	arr = array2iterator( [ 1.0, 2.0, NaN, 4.0 ] );
	v = itervariance( arr );

	t.strictEqual( isnan( v ), true, 'returns expected value' );

	arr = array2iterator( [ 1.0, 2.0, '3.0', 4.0 ] );
	v = itervariance( arr, 2.5 );

	t.strictEqual( isnan( v ), true, 'returns expected value' );

	arr = array2iterator( [ 1.0, 2.0, NaN, 4.0 ] );
	v = itervariance( arr, 2.5 );

	t.strictEqual( isnan( v ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns `NaN` if a provided mean is `NaN`', function test( t ) {
	var arr;
	var v;

	arr = array2iterator( [ 1.0, 2.0, 3.0, 4.0 ] );
	v = itervariance( arr, NaN );

	t.strictEqual( isnan( v ), true, 'returns expected value' );
	t.end();
});
