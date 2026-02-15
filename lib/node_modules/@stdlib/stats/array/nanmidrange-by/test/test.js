/**
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
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
var isPositiveZero = require( '@stdlib/math/base/assert/is-positive-zero' );
var isSameArray = require( '@stdlib/assert/is-same-array' );
var nanmidrangeBy = require( './../lib' );


// FUNCTIONS //

/**
* Accessor function.
*
* @private
* @param {number} v - value
* @returns {(number|void)} result
*/
function accessor( v ) {
	if ( v === void 0 ) {
		return;
	}
	return v * 2.0;
}


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof nanmidrangeBy, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 3', function test( t ) {
	t.strictEqual( nanmidrangeBy.length, 3, 'returns expected value' );
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
			nanmidrangeBy( value, accessor );
		};
	}
});

tape( 'the function throws an error if provided a second argument which is not a function', function test( t ) {
	var values;
	var i;
	var x;

	x = [ 1.0, -2.0, -4.0, 5.0, 0.0, 3.0 ];
	values = [
		'5',
		5,
		NaN,
		null,
		void 0,
		true,
		[],
		{}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			nanmidrangeBy( x, value );
		};
	}
});

tape( 'the function calculates the midrange of an array via a callback function', function test( t ) {
	var x;
	var v;

	x = [ 1.0, NaN, -2.0, -4.0, 5.0, 0.0, NaN, 3.0 ];
	v = nanmidrangeBy( x, accessor );
	t.strictEqual( v, 1.0, 'returns expected value' );

	x = [ -4.0, NaN, -5.0 ];
	v = nanmidrangeBy( x, accessor );
	t.strictEqual( v, -9.0, 'returns expected value' );

	x = [ -0.0, NaN, 0.0, -0.0 ];
	v = nanmidrangeBy( x, accessor );
	t.strictEqual( isPositiveZero( v ), true, 'returns expected value' );

	x = [ NaN ];
	v = nanmidrangeBy( x, accessor );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	x = [ NaN, NaN ];
	v = nanmidrangeBy( x, accessor );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	t.end();
});

tape( 'the function calculates the midrange of an array via a callback function (accessors)', function test( t ) {
	var x;
	var v;

	x = [ 1.0, NaN, -2.0, -4.0, 5.0, 0.0, NaN, 3.0 ];
	v = nanmidrangeBy( toAccessorArray( x ), accessor );
	t.strictEqual( v, 1.0, 'returns expected value' );

	x = [ -4.0, NaN, -5.0 ];
	v = nanmidrangeBy( toAccessorArray( x ), accessor );
	t.strictEqual( v, -9.0, 'returns expected value' );

	x = [ -0.0, NaN, 0.0, -0.0 ];
	v = nanmidrangeBy( toAccessorArray( x ), accessor );
	t.strictEqual( isPositiveZero( v ), true, 'returns expected value' );

	x = [ NaN ];
	v = nanmidrangeBy( toAccessorArray( x ), accessor );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	x = [ NaN, NaN ];
	v = nanmidrangeBy( toAccessorArray( x ), accessor );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	t.end();
});

tape( 'the function calculates the midrange of an array via a callback function (array-like object)', function test( t ) {
	var x;
	var v;

	x = {
		'length': 8,
		'0': 1.0,
		'1': NaN,
		'2': -2.0,
		'3': -4.0,
		'4': 5.0,
		'5': 0.0,
		'6': NaN,
		'7': 3.0
	};
	v = nanmidrangeBy( x, accessor );
	t.strictEqual( v, 1.0, 'returns expected value' );

	t.end();
});

tape( 'the function supports providing a callback execution context', function test( t ) {
	var expected;
	var indices;
	var values;
	var arrays;
	var ctx;
	var x;

	x = [ 1.0, NaN, 2.0, 3.0, 4.0, 5.0 ];
	ctx = {
		'count': 0
	};
	indices = [];
	values = [];
	arrays = [];
	nanmidrangeBy( x, accessor, ctx );

	t.strictEqual( ctx.count, x.length, 'returns expected value' );

	expected = [ 0, 1, 2, 3, 4, 5 ];
	t.deepEqual( indices, expected, 'returns expected value' );

	expected = [ 1.0, NaN, 2.0, 3.0, 4.0, 5.0 ];
	t.strictEqual( isSameArray( values, expected ), true, 'returns expected value' );

	expected = [ x, x, x, x, x, x ];
	t.deepEqual( arrays, expected, 'returns expected value' );
	t.end();

	function accessor( v, idx, arr ) {
		this.count += 1; // eslint-disable-line no-invalid-this
		indices.push( idx );
		values.push( v );
		arrays.push( arr );
		return v * 2.0;
	}
});

tape( 'the function supports providing a callback execution context (accessors)', function test( t ) {
	var expected;
	var indices;
	var values;
	var arrays;
	var ctx;
	var ax;
	var x;

	x = [ 1.0, NaN, 2.0, 3.0, 4.0, 5.0 ];
	ax = toAccessorArray( x );
	ctx = {
		'count': 0
	};
	indices = [];
	values = [];
	arrays = [];
	nanmidrangeBy( ax, accessor, ctx );

	t.strictEqual( ctx.count, x.length, 'returns expected value' );

	expected = [ 0, 1, 2, 3, 4, 5 ];
	t.deepEqual( indices, expected, 'returns expected value' );

	expected = [ 1.0, NaN, 2.0, 3.0, 4.0, 5.0 ];
	t.strictEqual( isSameArray( values, expected ), true, 'returns expected value' );

	expected = [ ax, ax, ax, ax, ax, ax ];
	t.deepEqual( arrays, expected, 'returns expected value' );
	t.end();

	function accessor( v, idx, arr ) {
		this.count += 1; // eslint-disable-line no-invalid-this
		indices.push( idx );
		values.push( v );
		arrays.push( arr );
		return v * 2.0;
	}
});

tape( 'if provided an empty array, the function returns `NaN`', function test( t ) {
	var v = nanmidrangeBy( [], accessor );
	t.strictEqual( isnan( v ), true, 'returns expected value' );
	t.end();
});

tape( 'if provided an empty array, the function returns `NaN` (accessors)', function test( t ) {
	var v = nanmidrangeBy( toAccessorArray( [] ), accessor );
	t.strictEqual( isnan( v ), true, 'returns expected value' );
	t.end();
});

tape( 'if provided an array containing a single element, the function returns the result of applying a provided callback function to that element', function test( t ) {
	var v = nanmidrangeBy( [ 1.0 ], accessor );
	t.strictEqual( v, 2.0, 'returns expected value' );
	t.end();
});

tape( 'if provided an array containing a single element, the function returns the result of applying a provided callback function to that element (accessors)', function test( t ) {
	var v = nanmidrangeBy( toAccessorArray( [ 1.0 ] ), accessor );
	t.strictEqual( v, 2.0, 'returns expected value' );
	t.end();
});
