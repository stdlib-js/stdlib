/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var toAccessorArray = require( '@stdlib/array/base/to-accessor-array' );
var isNegativeZero = require( '@stdlib/math/base/assert/is-negative-zero' );
var BooleanArray = require( '@stdlib/array/bool' );
var Complex128Array = require( '@stdlib/array/complex128' );
var min = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof min, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 1', function test( t ) {
	t.strictEqual( min.length, 1, 'returns expected value' );
	t.end();
});

tape( 'the function throws an error if provided a first argument which is not an array-like object', function test( t ) {
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
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			min( value );
		};
	}
});

tape( 'the function throws an error if provided a first argument which has an unsupported data type', function test( t ) {
	var values;
	var i;

	values = [
		new BooleanArray( 4 ),
		new Complex128Array( 4 )
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			min( value );
		};
	}
});

tape( 'the function calculates the minimum value of an array', function test( t ) {
	var x;
	var v;

	x = [ 1.0, -2.0, -4.0, 5.0, 0.0, 3.0 ];
	v = min( x );
	t.strictEqual( v, -4.0, 'returns expected value' );

	x = [ -4.0, -5.0 ];
	v = min( x );
	t.strictEqual( v, -5.0, 'returns expected value' );

	x = [ 0.0, 0.0, -0.0 ];
	v = min( x );
	t.strictEqual( isNegativeZero( v ), true, 'returns expected value' );

	x = [ NaN ];
	v = min( x );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	x = [ NaN, NaN ];
	v = min( x );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	t.end();
});

tape( 'the function calculates the minimum value of an array (accessors)', function test( t ) {
	var x;
	var v;

	x = [ 1.0, -2.0, -4.0, 5.0, 0.0, 3.0 ];
	v = min( toAccessorArray( x ) );
	t.strictEqual( v, -4.0, 'returns expected value' );

	x = [ -4.0, -5.0 ];
	v = min( toAccessorArray( x ) );
	t.strictEqual( v, -5.0, 'returns expected value' );

	x = [ 0.0, 0.0, -0.0 ];
	v = min( toAccessorArray( x ) );
	t.strictEqual( isNegativeZero( v ), true, 'returns expected value' );

	x = [ NaN ];
	v = min( toAccessorArray( x ) );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	x = [ NaN, NaN ];
	v = min( toAccessorArray( x ) );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	t.end();
});

tape( 'the function calculates the minimum value of an array (array-like object)', function test( t ) {
	var x;
	var v;

	x = {
		'length': 6,
		'0': 1.0,
		'1': -2.0,
		'2': -4.0,
		'3': 5.0,
		'4': 0.0,
		'5': 3.0
	};
	v = min( x );
	t.strictEqual( v, -4.0, 'returns expected value' );

	t.end();
});

tape( 'if provided an empty array, the function returns `NaN`', function test( t ) {
	var v = min( [] );
	t.strictEqual( isnan( v ), true, 'returns expected value' );
	t.end();
});

tape( 'if provided an empty array, the function returns `NaN` (accessors)', function test( t ) {
	var v = min( toAccessorArray( [] ) );
	t.strictEqual( isnan( v ), true, 'returns expected value' );
	t.end();
});

tape( 'if provided an array containing a single element, the function returns the first element', function test( t ) {
	var v = min( [ 1.0 ] );
	t.strictEqual( v, 1.0, 'returns expected value' );
	t.end();
});

tape( 'if provided an array containing a single element, the function returns the first element (accessors)', function test( t ) {
	var v = min( toAccessorArray( [ 1.0 ] ) );
	t.strictEqual( v, 1.0, 'returns expected value' );
	t.end();
});
