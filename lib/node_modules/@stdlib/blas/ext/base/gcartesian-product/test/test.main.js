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
var gcartesianProduct = require( './../lib/main.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof gcartesianProduct, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 9', function test( t ) {
	t.strictEqual( gcartesianProduct.length, 9, 'has expected arity' );
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
			var y = [ 3.0, 4.0 ];
			gcartesianProduct( value, x.length, y.length, x, 1, y, 1, out, 2 );
		};
	}
});

tape( 'the function throws if the ninth argument is less than max(1,2) (row-major)', function test( t ) {
	t.throws( badValue, RangeError, 'throws a range error' );
	t.end();

	function badValue() {
		var out = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];
		var x = [ 1.0, 2.0 ];
		var y = [ 3.0, 4.0, 5.0 ];
		gcartesianProduct( 'row-major', x.length, y.length, x, 1, y, 1, out, 1 );
	}
});

tape( 'the function throws if the ninth argument is less than max(1,M*N) (column-major)', function test( t ) {
	t.throws( badValue, RangeError, 'throws a range error' );
	t.end();

	function badValue() {
		var out = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];
		var x = [ 1.0, 2.0 ];
		var y = [ 3.0, 4.0, 5.0 ];
		gcartesianProduct( 'column-major', x.length, y.length, x, 1, y, 1, out, 4 );
	}
});

tape( 'the function computes the Cartesian product', function test( t ) {
	var expected;
	var out;
	var x;
	var y;

	// Row-major:
	x = [ 1.0, 2.0 ];
	y = [ 3.0, 4.0 ];
	out = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];
	expected = [ 1.0, 3.0, 1.0, 4.0, 2.0, 3.0, 2.0, 4.0 ];

	gcartesianProduct( 'row-major', x.length, y.length, x, 1, y, 1, out, 2 );
	t.deepEqual( out, expected, 'returns expected value' );

	x = [ 1.0, 2.0, 3.0 ];
	y = [ 10.0, 20.0 ];
	out = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];
	expected = [ 1.0, 10.0, 1.0, 20.0, 2.0, 10.0, 2.0, 20.0, 3.0, 10.0, 3.0, 20.0 ];

	gcartesianProduct( 'row-major', x.length, y.length, x, 1, y, 1, out, 2 );
	t.deepEqual( out, expected, 'returns expected value' );

	x = [ 5.0 ];
	y = [ 7.0 ];
	out = [ 0.0, 0.0 ];
	expected = [ 5.0, 7.0 ];

	gcartesianProduct( 'row-major', 1, 1, x, 1, y, 1, out, 2 );
	t.deepEqual( out, expected, 'returns expected value' );

	// Column-major:
	x = [ 1.0, 2.0 ];
	y = [ 3.0, 4.0 ];
	out = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];
	expected = [ 1.0, 1.0, 2.0, 2.0, 3.0, 4.0, 3.0, 4.0 ];

	gcartesianProduct( 'column-major', x.length, y.length, x, 1, y, 1, out, 4 );
	t.deepEqual( out, expected, 'returns expected value' );

	x = [ 1.0, 2.0, 3.0 ];
	y = [ 10.0, 20.0 ];
	out = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];
	expected = [ 1.0, 1.0, 2.0, 2.0, 3.0, 3.0, 10.0, 20.0, 10.0, 20.0, 10.0, 20.0 ];

	gcartesianProduct( 'column-major', x.length, y.length, x, 1, y, 1, out, 6 );
	t.deepEqual( out, expected, 'returns expected value' );

	x = [ 5.0 ];
	y = [ 7.0 ];
	out = [ 0.0, 0.0 ];
	expected = [ 5.0, 7.0 ];

	gcartesianProduct( 'column-major', 1, 1, x, 1, y, 1, out, 1 );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function computes the Cartesian product (accessors)', function test( t ) {
	var expected;
	var out;
	var x;
	var y;

	// Row-major:
	x = [ 1.0, 2.0 ];
	y = [ 3.0, 4.0 ];
	out = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];
	expected = [ 1.0, 3.0, 1.0, 4.0, 2.0, 3.0, 2.0, 4.0 ];

	gcartesianProduct( 'row-major', 2, 2, toAccessorArray( x ), 1, toAccessorArray( y ), 1, toAccessorArray( out ), 2 );
	t.deepEqual( out, expected, 'returns expected value' );

	// Column-major:
	x = [ 1.0, 2.0 ];
	y = [ 3.0, 4.0 ];
	out = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];
	expected = [ 1.0, 1.0, 2.0, 2.0, 3.0, 4.0, 3.0, 4.0 ];

	gcartesianProduct( 'column-major', 2, 2, toAccessorArray( x ), 1, toAccessorArray( y ), 1, toAccessorArray( out ), 4 );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a reference to the output array', function test( t ) {
	var out;
	var x;
	var y;
	var z;

	x = [ 1.0, 2.0 ];
	y = [ 3.0, 4.0 ];
	out = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];
	z = gcartesianProduct( 'row-major', x.length, y.length, x, 1, y, 1, out, 2 );

	t.strictEqual( z, out, 'same reference' );

	x = [ 1.0, 2.0 ];
	y = [ 3.0, 4.0 ];
	out = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];
	z = gcartesianProduct( 'column-major', x.length, y.length, x, 1, y, 1, out, 4 );

	t.strictEqual( z, out, 'same reference' );

	t.end();
});

tape( 'if provided an `M` or `N` parameter equal to `0`, the function returns the output array unchanged', function test( t ) {
	var expected;
	var out;
	var x;
	var y;

	x = [ 1.0, 2.0 ];
	y = [ 3.0, 4.0 ];
	out = [ 5.0, 6.0, 7.0, 8.0 ];
	expected = [ 5.0, 6.0, 7.0, 8.0 ];

	gcartesianProduct( 'row-major', 0, y.length, x, 1, y, 1, out, 2 );
	t.deepEqual( out, expected, 'returns expected value' );

	gcartesianProduct( 'row-major', x.length, 0, x, 1, y, 1, out, 2 );
	t.deepEqual( out, expected, 'returns expected value' );

	gcartesianProduct( 'column-major', 0, y.length, x, 1, y, 1, out, 2 );
	t.deepEqual( out, expected, 'returns expected value' );

	gcartesianProduct( 'column-major', x.length, 0, x, 1, y, 1, out, 1 );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying a stride for `x`', function test( t ) {
	var expected;
	var out;
	var x;
	var y;

	// Row-major:
	x = [
		1.0, // 0
		0.0,
		2.0, // 1
		0.0
	];
	y = [ 3.0, 4.0 ];
	out = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];
	expected = [ 1.0, 3.0, 1.0, 4.0, 2.0, 3.0, 2.0, 4.0 ];

	gcartesianProduct( 'row-major', 2, y.length, x, 2, y, 1, out, 2 );
	t.deepEqual( out, expected, 'returns expected value' );

	// Column-major:
	x = [
		1.0, // 0
		0.0,
		2.0, // 1
		0.0
	];
	out = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];
	expected = [ 1.0, 1.0, 2.0, 2.0, 3.0, 4.0, 3.0, 4.0 ];

	gcartesianProduct( 'column-major', 2, y.length, x, 2, y, 1, out, 4 );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying a stride for `x` (accessors)', function test( t ) {
	var expected;
	var out;
	var x;
	var y;

	// Row-major:
	x = [
		1.0, // 0
		0.0,
		2.0, // 1
		0.0
	];
	y = [ 3.0, 4.0 ];
	out = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];
	expected = [ 1.0, 3.0, 1.0, 4.0, 2.0, 3.0, 2.0, 4.0 ];

	gcartesianProduct( 'row-major', 2, y.length, toAccessorArray( x ), 2, toAccessorArray( y ), 1, toAccessorArray( out ), 2 );
	t.deepEqual( out, expected, 'returns expected value' );

	// Column-major:
	x = [
		1.0, // 0
		0.0,
		2.0, // 1
		0.0
	];
	out = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];
	expected = [ 1.0, 1.0, 2.0, 2.0, 3.0, 4.0, 3.0, 4.0 ];

	gcartesianProduct( 'column-major', 2, y.length, toAccessorArray( x ), 2, toAccessorArray( y ), 1, toAccessorArray( out ), 4 );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying a negative stride for `x`', function test( t ) {
	var expected;
	var out;
	var x;
	var y;

	// Row-major:
	x = [
		2.0, // 1
		1.0  // 0
	];
	y = [ 3.0, 4.0 ];
	out = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];
	expected = [ 1.0, 3.0, 1.0, 4.0, 2.0, 3.0, 2.0, 4.0 ];

	gcartesianProduct( 'row-major', 2, y.length, x, -1, y, 1, out, 2 );
	t.deepEqual( out, expected, 'returns expected value' );

	// Column-major:
	x = [
		2.0, // 1
		1.0  // 0
	];
	out = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];
	expected = [ 1.0, 1.0, 2.0, 2.0, 3.0, 4.0, 3.0, 4.0 ];

	gcartesianProduct( 'column-major', 2, y.length, x, -1, y, 1, out, 4 );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying a negative stride for `x` (accessors)', function test( t ) {
	var expected;
	var out;
	var x;
	var y;

	// Row-major:
	x = [
		2.0, // 1
		1.0  // 0
	];
	y = [ 3.0, 4.0 ];
	out = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];
	expected = [ 1.0, 3.0, 1.0, 4.0, 2.0, 3.0, 2.0, 4.0 ];

	gcartesianProduct( 'row-major', 2, y.length, toAccessorArray( x ), -1, toAccessorArray( y ), 1, toAccessorArray( out ), 2 );
	t.deepEqual( out, expected, 'returns expected value' );

	// Column-major:
	x = [
		2.0, // 1
		1.0  // 0
	];
	out = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];
	expected = [ 1.0, 1.0, 2.0, 2.0, 3.0, 4.0, 3.0, 4.0 ];

	gcartesianProduct( 'column-major', 2, y.length, toAccessorArray( x ), -1, toAccessorArray( y ), 1, toAccessorArray( out ), 4 );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying a stride for `y`', function test( t ) {
	var expected;
	var out;
	var x;
	var y;

	// Row-major:
	x = [ 1.0, 2.0 ];
	y = [
		3.0, // 0
		0.0,
		4.0, // 1
		0.0
	];
	out = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];
	expected = [ 1.0, 3.0, 1.0, 4.0, 2.0, 3.0, 2.0, 4.0 ];

	gcartesianProduct( 'row-major', x.length, 2, x, 1, y, 2, out, 2 );
	t.deepEqual( out, expected, 'returns expected value' );

	// Column-major:
	y = [
		3.0, // 0
		0.0,
		4.0, // 1
		0.0
	];
	out = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];
	expected = [ 1.0, 1.0, 2.0, 2.0, 3.0, 4.0, 3.0, 4.0 ];

	gcartesianProduct( 'column-major', x.length, 2, x, 1, y, 2, out, 4 );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying a stride for `y` (accessors)', function test( t ) {
	var expected;
	var out;
	var x;
	var y;

	// Row-major:
	x = [ 1.0, 2.0 ];
	y = [
		3.0, // 0
		0.0,
		4.0, // 1
		0.0
	];
	out = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];
	expected = [ 1.0, 3.0, 1.0, 4.0, 2.0, 3.0, 2.0, 4.0 ];

	gcartesianProduct( 'row-major', x.length, 2, toAccessorArray( x ), 1, toAccessorArray( y ), 2, toAccessorArray( out ), 2 );
	t.deepEqual( out, expected, 'returns expected value' );

	// Column-major:
	y = [
		3.0, // 0
		0.0,
		4.0, // 1
		0.0
	];
	out = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];
	expected = [ 1.0, 1.0, 2.0, 2.0, 3.0, 4.0, 3.0, 4.0 ];

	gcartesianProduct( 'column-major', x.length, 2, toAccessorArray( x ), 1, toAccessorArray( y ), 2, toAccessorArray( out ), 4 );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying a negative stride for `y`', function test( t ) {
	var expected;
	var out;
	var x;
	var y;

	// Row-major:
	x = [ 1.0, 2.0 ];
	y = [
		4.0, // 1
		3.0  // 0
	];
	out = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];
	expected = [ 1.0, 3.0, 1.0, 4.0, 2.0, 3.0, 2.0, 4.0 ];

	gcartesianProduct( 'row-major', x.length, 2, x, 1, y, -1, out, 2 );
	t.deepEqual( out, expected, 'returns expected value' );

	// Column-major:
	y = [
		4.0, // 1
		3.0  // 0
	];
	out = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];
	expected = [ 1.0, 1.0, 2.0, 2.0, 3.0, 4.0, 3.0, 4.0 ];

	gcartesianProduct( 'column-major', x.length, 2, x, 1, y, -1, out, 4 );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying a negative stride for `y` (accessors)', function test( t ) {
	var expected;
	var out;
	var x;
	var y;

	// Row-major:
	x = [ 1.0, 2.0 ];
	y = [
		4.0, // 1
		3.0  // 0
	];
	out = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];
	expected = [ 1.0, 3.0, 1.0, 4.0, 2.0, 3.0, 2.0, 4.0 ];

	gcartesianProduct( 'row-major', x.length, 2, toAccessorArray( x ), 1, toAccessorArray( y ), -1, toAccessorArray( out ), 2 );
	t.deepEqual( out, expected, 'returns expected value' );

	// Column-major:
	y = [
		4.0, // 1
		3.0  // 0
	];
	out = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];
	expected = [ 1.0, 1.0, 2.0, 2.0, 3.0, 4.0, 3.0, 4.0 ];

	gcartesianProduct( 'column-major', x.length, 2, toAccessorArray( x ), 1, toAccessorArray( y ), -1, toAccessorArray( out ), 4 );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying a leading dimension stride for the output array', function test( t ) {
	var expected;
	var out;
	var x;
	var y;

	// Row-major:
	x = [ 1.0, 2.0 ];
	y = [ 3.0, 4.0 ];
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
		3.0,
		0.0,
		0.0,
		1.0,
		4.0,
		0.0,
		0.0,
		2.0,
		3.0,
		0.0,
		0.0,
		2.0,
		4.0,
		0.0,
		0.0
	];

	gcartesianProduct( 'row-major', x.length, y.length, x, 1, y, 1, out, 4 );
	t.deepEqual( out, expected, 'returns expected value' );

	// Column-major:
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
		3.0,
		4.0,
		3.0,
		4.0,
		0.0,
		0.0,
		0.0,
		0.0
	];

	gcartesianProduct( 'column-major', x.length, y.length, x, 1, y, 1, out, 8 );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying a leading dimension stride for the output array (accessors)', function test( t ) {
	var expected;
	var out;
	var x;
	var y;

	// Row-major:
	x = [ 1.0, 2.0 ];
	y = [ 3.0, 4.0 ];
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
		3.0,
		0.0,
		0.0,
		1.0,
		4.0,
		0.0,
		0.0,
		2.0,
		3.0,
		0.0,
		0.0,
		2.0,
		4.0,
		0.0,
		0.0
	];

	gcartesianProduct( 'row-major', x.length, y.length, toAccessorArray( x ), 1, toAccessorArray( y ), 1, toAccessorArray( out ), 4 );
	t.deepEqual( out, expected, 'returns expected value' );

	// Column-major:
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
		3.0,
		4.0,
		3.0,
		4.0,
		0.0,
		0.0,
		0.0,
		0.0
	];

	gcartesianProduct( 'column-major', x.length, y.length, toAccessorArray( x ), 1, toAccessorArray( y ), 1, toAccessorArray( out ), 8 );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports view offsets', function test( t ) {
	var expected;
	var out;
	var x0;
	var x1;
	var y0;
	var y1;

	// Row-major:
	x0 = new Float64Array( [ 0.0, 1.0, 2.0 ] );
	x1 = new Float64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 );

	y0 = new Float64Array( [ 0.0, 3.0, 4.0 ] );
	y1 = new Float64Array( y0.buffer, y0.BYTES_PER_ELEMENT*1 );

	out = new Float64Array( 8 );
	expected = new Float64Array( [ 1.0, 3.0, 1.0, 4.0, 2.0, 3.0, 2.0, 4.0 ] );

	gcartesianProduct( 'row-major', 2, 2, x1, 1, y1, 1, out, 2 );
	t.deepEqual( out, expected, 'returns expected value' );

	// Column-major:
	x0 = new Float64Array( [ 0.0, 1.0, 2.0 ] );
	x1 = new Float64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 );

	y0 = new Float64Array( [ 0.0, 3.0, 4.0 ] );
	y1 = new Float64Array( y0.buffer, y0.BYTES_PER_ELEMENT*1 );

	out = new Float64Array( 8 );
	expected = new Float64Array( [ 1.0, 1.0, 2.0, 2.0, 3.0, 4.0, 3.0, 4.0 ] );

	gcartesianProduct( 'column-major', 2, 2, x1, 1, y1, 1, out, 4 );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});
