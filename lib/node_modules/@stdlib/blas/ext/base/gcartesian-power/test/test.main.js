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
var toAccessorArray = require( '@stdlib/array/base/to-accessor-array' );
var Float64Array = require( '@stdlib/array/float64' );
var gcartesianPower = require( './../lib/main.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof gcartesianPower, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 7', function test( t ) {
	t.strictEqual( gcartesianPower.length, 7, 'has expected arity' );
	t.end();
});

tape( 'the function throws if the first argument is not a valid order', function test( t ) {
	var values;
	var i;

	values = [
		'foo',
		'bar',
		1,
		0,
		null,
		true,
		false,
		void 0,
		[],
		{}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var out = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];
			var x = [ 1.0, 2.0 ];
			gcartesianPower( value, x.length, 2, x, 1, out, 2 );
		};
	}
});

tape( 'the function throws if the seventh argument is less than max(1,k) for row-major order', function test( t ) {
	t.throws( badValue, RangeError, 'throws a range error' );
	t.end();

	function badValue() {
		var out = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];
		var x = [ 1.0, 2.0 ];
		gcartesianPower( 'row-major', x.length, 3, x, 1, out, 2 );
	}
});

tape( 'the function throws if the seventh argument is less than max(1,N^k) for column-major order', function test( t ) {
	t.throws( badValue, RangeError, 'throws a range error' );
	t.end();

	function badValue() {
		var out = [
			0.0,
			0.0,
			0.0,
			0.0,
			0.0,
			0.0,
			0.0,
			0.0,
			0.0,
			0.0,
			0.0,
			0.0,
			0.0,
			0.0,
			0.0,
			0.0,
			0.0,
			0.0
		];
		var x = [ 1.0, 2.0, 3.0 ];
		gcartesianPower( 'column-major', 3, 2, x, 1, out, 8 );
	}
});

tape( 'the function computes the Cartesian power', function test( t ) {
	var expected;
	var out;
	var x;

	// Row-major:
	x = [ 1.0, 2.0 ];
	out = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];
	expected = [ 1.0, 1.0, 1.0, 2.0, 2.0, 1.0, 2.0, 2.0 ];

	gcartesianPower( 'row-major', x.length, 2, x, 1, out, 2 );
	t.deepEqual( out, expected, 'returns expected value' );

	x = [ 1.0, 2.0 ];
	out = [
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0
	];
	expected = [
		1.0,
		1.0,
		1.0,
		1.0,
		1.0,
		2.0,
		1.0,
		2.0,
		1.0,
		1.0,
		2.0,
		2.0,
		2.0,
		1.0,
		1.0,
		2.0,
		1.0,
		2.0,
		2.0,
		2.0,
		1.0,
		2.0,
		2.0,
		2.0
	];

	gcartesianPower( 'row-major', x.length, 3, x, 1, out, 3 );
	t.deepEqual( out, expected, 'returns expected value' );

	x = [ 5.0 ];
	out = [ 0.0 ];
	expected = [ 5.0 ];

	gcartesianPower( 'row-major', 1, 1, x, 1, out, 1 );
	t.deepEqual( out, expected, 'returns expected value' );

	// Column-major:
	x = [ 1.0, 2.0 ];
	out = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];
	expected = [ 1.0, 1.0, 2.0, 2.0, 1.0, 2.0, 1.0, 2.0 ];

	gcartesianPower( 'column-major', x.length, 2, x, 1, out, 4 );
	t.deepEqual( out, expected, 'returns expected value' );

	x = [ 1.0, 2.0 ];
	out = [
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0
	];
	expected = [
		1.0,
		1.0,
		1.0,
		1.0,
		2.0,
		2.0,
		2.0,
		2.0,
		1.0,
		1.0,
		2.0,
		2.0,
		1.0,
		1.0,
		2.0,
		2.0,
		1.0,
		2.0,
		1.0,
		2.0,
		1.0,
		2.0,
		1.0,
		2.0
	];

	gcartesianPower( 'column-major', x.length, 3, x, 1, out, 8 );
	t.deepEqual( out, expected, 'returns expected value' );

	x = [ 5.0 ];
	out = [ 0.0 ];
	expected = [ 5.0 ];

	gcartesianPower( 'column-major', 1, 1, x, 1, out, 1 );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function computes the Cartesian power (accessors)', function test( t ) {
	var expected;
	var out;
	var x;

	// Row-major:
	x = [ 1.0, 2.0 ];
	out = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];
	expected = [ 1.0, 1.0, 1.0, 2.0, 2.0, 1.0, 2.0, 2.0 ];

	gcartesianPower( 'row-major', 2, 2, toAccessorArray( x ), 1, toAccessorArray( out ), 2 );
	t.deepEqual( out, expected, 'returns expected value' );

	// Column-major:
	x = [ 1.0, 2.0 ];
	out = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];
	expected = [ 1.0, 1.0, 2.0, 2.0, 1.0, 2.0, 1.0, 2.0 ];

	gcartesianPower( 'column-major', 2, 2, toAccessorArray( x ), 1, toAccessorArray( out ), 4 );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a reference to the output array', function test( t ) {
	var out;
	var x;
	var y;

	x = [ 1.0, 2.0 ];
	out = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];
	y = gcartesianPower( 'row-major', x.length, 2, x, 1, out, 2 );

	t.strictEqual( y, out, 'same reference' );

	x = [ 1.0, 2.0 ];
	out = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];
	y = gcartesianPower( 'column-major', x.length, 2, x, 1, out, 4 );

	t.strictEqual( y, out, 'same reference' );

	t.end();
});

tape( 'if provided an `N` or `k` parameter equal to `0`, the function returns `out` unchanged', function test( t ) {
	var expected;
	var out;
	var x;

	x = [ 1.0, 2.0 ];
	out = [ 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0 ];
	expected = [ 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0 ];

	gcartesianPower( 'row-major', 0, 2, x, 1, out, 2 );
	t.deepEqual( out, expected, 'returns expected value' );

	gcartesianPower( 'row-major', x.length, 0, x, 1, out, 1 );
	t.deepEqual( out, expected, 'returns expected value' );

	gcartesianPower( 'column-major', 0, 2, x, 1, out, 2 );
	t.deepEqual( out, expected, 'returns expected value' );

	gcartesianPower( 'column-major', x.length, 0, x, 1, out, 1 );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying a stride for `x`', function test( t ) {
	var expected;
	var out;
	var x;

	// Row-major:
	x = [
		1.0, // 0
		0.0,
		2.0, // 1
		0.0
	];
	out = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];
	expected = [ 1.0, 1.0, 1.0, 2.0, 2.0, 1.0, 2.0, 2.0 ];

	gcartesianPower( 'row-major', 2, 2, x, 2, out, 2 );
	t.deepEqual( out, expected, 'returns expected value' );

	// Column-major:
	x = [
		1.0, // 0
		0.0,
		2.0, // 1
		0.0
	];
	out = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];
	expected = [ 1.0, 1.0, 2.0, 2.0, 1.0, 2.0, 1.0, 2.0 ];

	gcartesianPower( 'column-major', 2, 2, x, 2, out, 4 );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying a stride for `x` (accessors)', function test( t ) {
	var expected;
	var out;
	var x;

	// Row-major:
	x = [
		1.0, // 0
		0.0,
		2.0, // 1
		0.0
	];
	out = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];
	expected = [ 1.0, 1.0, 1.0, 2.0, 2.0, 1.0, 2.0, 2.0 ];

	gcartesianPower( 'row-major', 2, 2, toAccessorArray( x ), 2, toAccessorArray( out ), 2 );
	t.deepEqual( out, expected, 'returns expected value' );

	// Column-major:
	x = [
		1.0, // 0
		0.0,
		2.0, // 1
		0.0
	];
	out = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];
	expected = [ 1.0, 1.0, 2.0, 2.0, 1.0, 2.0, 1.0, 2.0 ];

	gcartesianPower( 'column-major', 2, 2, toAccessorArray( x ), 2, toAccessorArray( out ), 4 );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying a negative stride for `x`', function test( t ) {
	var expected;
	var out;
	var x;

	// Row-major:
	x = [
		2.0, // 1
		1.0  // 0
	];
	out = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];
	expected = [ 1.0, 1.0, 1.0, 2.0, 2.0, 1.0, 2.0, 2.0 ];

	gcartesianPower( 'row-major', 2, 2, x, -1, out, 2 );
	t.deepEqual( out, expected, 'returns expected value' );

	// Column-major:
	x = [
		2.0, // 1
		1.0  // 0
	];
	out = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];
	expected = [ 1.0, 1.0, 2.0, 2.0, 1.0, 2.0, 1.0, 2.0 ];

	gcartesianPower( 'column-major', 2, 2, x, -1, out, 4 );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying a negative stride for `x` (accessors)', function test( t ) {
	var expected;
	var out;
	var x;

	// Row-major:
	x = [
		2.0, // 1
		1.0  // 0
	];
	out = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];
	expected = [ 1.0, 1.0, 1.0, 2.0, 2.0, 1.0, 2.0, 2.0 ];

	gcartesianPower( 'row-major', 2, 2, toAccessorArray( x ), -1, toAccessorArray( out ), 2 );
	t.deepEqual( out, expected, 'returns expected value' );

	// Column-major:
	x = [
		2.0, // 1
		1.0  // 0
	];
	out = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];
	expected = [ 1.0, 1.0, 2.0, 2.0, 1.0, 2.0, 1.0, 2.0 ];

	gcartesianPower( 'column-major', 2, 2, toAccessorArray( x ), -1, toAccessorArray( out ), 4 );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying a leading dimension stride for the output array', function test( t ) {
	var expected;
	var out;
	var x;

	// Row-major:
	x = [ 1.0, 2.0 ];
	out = [
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0
	];
	expected = [
		1.0,
		1.0,
		0.0,
		0.0,
		1.0,
		2.0,
		0.0,
		0.0,
		2.0,
		1.0,
		0.0,
		0.0,
		2.0,
		2.0,
		0.0,
		0.0
	];

	gcartesianPower( 'row-major', x.length, 2, x, 1, out, 4 );
	t.deepEqual( out, expected, 'returns expected value' );

	// Column-major:
	x = [ 1.0, 2.0 ];
	out = [
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0
	];
	expected = [
		1.0,
		1.0,
		2.0,
		2.0,
		0.0,
		0.0,
		0.0,
		0.0,
		1.0,
		2.0,
		1.0,
		2.0,
		0.0,
		0.0,
		0.0,
		0.0
	];

	gcartesianPower( 'column-major', x.length, 2, x, 1, out, 8 );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying a leading dimension stride for the output array (accessors)', function test( t ) {
	var expected;
	var out;
	var x;

	// Row-major:
	x = [ 1.0, 2.0 ];
	out = [
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0
	];
	expected = [
		1.0,
		1.0,
		0.0,
		0.0,
		1.0,
		2.0,
		0.0,
		0.0,
		2.0,
		1.0,
		0.0,
		0.0,
		2.0,
		2.0,
		0.0,
		0.0
	];

	gcartesianPower( 'row-major', x.length, 2, toAccessorArray( x ), 1, toAccessorArray( out ), 4 );
	t.deepEqual( out, expected, 'returns expected value' );

	// Column-major:
	x = [ 1.0, 2.0 ];
	out = [
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0
	];
	expected = [
		1.0,
		1.0,
		2.0,
		2.0,
		0.0,
		0.0,
		0.0,
		0.0,
		1.0,
		2.0,
		1.0,
		2.0,
		0.0,
		0.0,
		0.0,
		0.0
	];

	gcartesianPower( 'column-major', x.length, 2, toAccessorArray( x ), 1, toAccessorArray( out ), 8 );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports view offsets', function test( t ) {
	var expected;
	var out;
	var x0;
	var x1;

	// Row-major:
	x0 = new Float64Array( [ 0.0, 1.0, 2.0, 3.0 ] );
	x1 = new Float64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 );

	out = new Float64Array( 8 );
	expected = new Float64Array( [ 1.0, 1.0, 1.0, 2.0, 2.0, 1.0, 2.0, 2.0 ] );

	gcartesianPower( 'row-major', 2, 2, x1, 1, out, 2 );
	t.deepEqual( out, expected, 'returns expected value' );

	// Column-major:
	x0 = new Float64Array( [ 0.0, 1.0, 2.0, 3.0 ] );
	x1 = new Float64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 );

	out = new Float64Array( 8 );
	expected = new Float64Array( [ 1.0, 1.0, 2.0, 2.0, 1.0, 2.0, 1.0, 2.0 ] );

	gcartesianPower( 'column-major', 2, 2, x1, 1, out, 4 );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});
