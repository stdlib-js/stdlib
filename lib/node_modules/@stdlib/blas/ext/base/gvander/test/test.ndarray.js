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
var gvander = require( './../lib/ndarray.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof gvander, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 10', function test( t ) {
	t.strictEqual( gvander.length, 10, 'has expected arity' );
	t.end();
});

tape( 'the function throws an error if provided an invalid second argument', function test( t ) {
	var values;
	var i;

	values = [
		-1,
		-2,
		-3
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), RangeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			gvander( -1, value, 3, [ 1.0, 2.0, 3.0 ], 1, 0, [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ], 3, 1, 0 ); // eslint-disable-line max-len
		};
	}
});

tape( 'the function throws an error if provided an invalid second argument (accessors)', function test( t ) {
	var values;
	var i;

	values = [
		-1,
		-2,
		-3
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), RangeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			gvander( -1, value, 3, toAccessorArray( [ 1.0, 2.0, 3.0 ] ), 1, 0, toAccessorArray( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] ), 3, 1, 0 ); // eslint-disable-line max-len
		};
	}
});

tape( 'the function throws an error if provided an invalid third argument', function test( t ) {
	var values;
	var i;

	values = [
		-1,
		-2,
		-3
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), RangeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			gvander( -1, 3, value, [ 1.0, 2.0, 3.0 ], 1, 0, [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ], 3, 1, 0 ); // eslint-disable-line max-len
		};
	}
});

tape( 'the function throws an error if provided an invalid third argument (accessors)', function test( t ) {
	var values;
	var i;

	values = [
		-1,
		-2,
		-3
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), RangeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			gvander( -1, 3, value, toAccessorArray( [ 1.0, 2.0, 3.0 ] ), 1, 0, toAccessorArray( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] ), 3, 1, 0 ); // eslint-disable-line max-len
		};
	}
});

tape( 'the function generates a Vandermonde matrix (row-major, decreasing)', function test( t ) {
	var expected;
	var out;
	var x;

	x = [ 1.0, 2.0, 3.0 ];
	out = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];

	gvander( -1, 3, 3, x, 1, 0, out, 3, 1, 0 );

	expected = [ 1.0, 1.0, 1.0, 4.0, 2.0, 1.0, 9.0, 3.0, 1.0 ];

	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function generates a Vandermonde matrix (row-major, decreasing, accessors)', function test( t ) {
	var expected;
	var out;
	var x;

	x = [ 1.0, 2.0, 3.0 ];
	out = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];

	gvander( -1, 3, 3, toAccessorArray( x ), 1, 0, toAccessorArray( out ), 3, 1, 0 ); // eslint-disable-line max-len

	expected = [ 1.0, 1.0, 1.0, 4.0, 2.0, 1.0, 9.0, 3.0, 1.0 ];

	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function generates a Vandermonde matrix (row-major, increasing)', function test( t ) {
	var expected;
	var out;
	var x;

	x = [ 1.0, 2.0, 3.0 ];
	out = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];

	gvander( 1, 3, 3, x, 1, 0, out, 3, 1, 0 );

	expected = [ 1.0, 1.0, 1.0, 1.0, 2.0, 4.0, 1.0, 3.0, 9.0 ];

	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function generates a Vandermonde matrix (row-major, increasing, accessors)', function test( t ) {
	var expected;
	var out;
	var x;

	x = [ 1.0, 2.0, 3.0 ];
	out = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];

	gvander( 1, 3, 3, toAccessorArray( x ), 1, 0, toAccessorArray( out ), 3, 1, 0 ); // eslint-disable-line max-len

	expected = [ 1.0, 1.0, 1.0, 1.0, 2.0, 4.0, 1.0, 3.0, 9.0 ];

	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function generates a Vandermonde matrix (column-major, decreasing)', function test( t ) {
	var expected;
	var out;
	var x;

	x = [ 1.0, 2.0, 3.0 ];
	out = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];

	gvander( -1, 3, 3, x, 1, 0, out, 1, 3, 0 );

	expected = [ 1.0, 4.0, 9.0, 1.0, 2.0, 3.0, 1.0, 1.0, 1.0 ];

	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function generates a Vandermonde matrix (column-major, decreasing, accessors)', function test( t ) {
	var expected;
	var out;
	var x;

	x = [ 1.0, 2.0, 3.0 ];
	out = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];

	gvander( -1, 3, 3, toAccessorArray( x ), 1, 0, toAccessorArray( out ), 1, 3, 0 ); // eslint-disable-line max-len

	expected = [ 1.0, 4.0, 9.0, 1.0, 2.0, 3.0, 1.0, 1.0, 1.0 ];

	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function generates a Vandermonde matrix (column-major, increasing)', function test( t ) {
	var expected;
	var out;
	var x;

	x = [ 1.0, 2.0, 3.0 ];
	out = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];

	gvander( 1, 3, 3, x, 1, 0, out, 1, 3, 0 );

	expected = [ 1.0, 1.0, 1.0, 1.0, 2.0, 3.0, 1.0, 4.0, 9.0 ];

	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function generates a Vandermonde matrix (column-major, increasing, accessors)', function test( t ) {
	var expected;
	var out;
	var x;

	x = [ 1.0, 2.0, 3.0 ];
	out = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];

	gvander( 1, 3, 3, toAccessorArray( x ), 1, 0, toAccessorArray( out ), 1, 3, 0 ); // eslint-disable-line max-len

	expected = [ 1.0, 1.0, 1.0, 1.0, 2.0, 3.0, 1.0, 4.0, 9.0 ];

	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function returns the output matrix', function test( t ) {
	var out;
	var x;
	var v;

	x = [ 1.0, 2.0 ];
	out = [ 0.0, 0.0, 0.0, 0.0 ];

	v = gvander( -1, 2, 2, x, 1, 0, out, 2, 1, 0 );

	t.strictEqual( v, out, 'returns expected value' );
	t.end();
});

tape( 'the function returns the output matrix (accessors)', function test( t ) {
	var out;
	var x;
	var v;

	x = toAccessorArray( [ 1.0, 2.0 ] );
	out = toAccessorArray( [ 0.0, 0.0, 0.0, 0.0 ] );

	v = gvander( -1, 2, 2, x, 1, 0, out, 2, 1, 0 );

	t.strictEqual( v, out, 'returns expected value' );
	t.end();
});

tape( 'if provided an `M` equal to `0`, the function returns the output matrix unchanged', function test( t ) {
	var out;
	var x;

	x = [];
	out = [];

	gvander( -1, 0, 3, x, 1, 0, out, 3, 1, 0 );

	t.deepEqual( out, [], 'returns expected value' );
	t.end();
});

tape( 'if provided an `N` equal to `0`, the function returns the output matrix unchanged', function test( t ) {
	var out;
	var x;

	x = [ 1.0, 2.0 ];
	out = [];

	gvander( -1, 2, 0, x, 1, 0, out, 0, 1, 0 );

	t.deepEqual( out, [], 'returns expected value' );
	t.end();
});

tape( 'the function supports specifying a stride for `x` (row-major)', function test( t ) {
	var expected;
	var out;
	var x;

	// Pick every other element: x[0]=1.0, x[2]=3.0
	x = [ 1.0, 0.0, 3.0, 0.0 ];
	out = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];

	gvander( -1, 2, 3, x, 2, 0, out, 3, 1, 0 );

	expected = [ 1.0, 1.0, 1.0, 9.0, 3.0, 1.0 ];

	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports specifying a stride for `x` (row-major, accessors)', function test( t ) {
	var expected;
	var out;
	var x;

	x = [ 1.0, 0.0, 3.0, 0.0 ];
	out = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];

	gvander( -1, 2, 3, toAccessorArray( x ), 2, 0, toAccessorArray( out ), 3, 1, 0 ); // eslint-disable-line max-len

	expected = [ 1.0, 1.0, 1.0, 9.0, 3.0, 1.0 ];

	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports specifying a negative stride for `x` (row-major)', function test( t ) {
	var expected;
	var out;
	var x;

	// Negative stride: starts from last and goes backward
	x = [ 3.0, 0.0, 1.0 ];
	out = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];

	gvander( -1, 2, 3, x, -2, 2, out, 3, 1, 0 );

	// x[2]=1.0 (first), x[0]=3.0 (second)
	expected = [ 1.0, 1.0, 1.0, 9.0, 3.0, 1.0 ];

	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports specifying a stride for `x` (column-major)', function test( t ) {
	var expected;
	var out;
	var x;

	// Pick every other element: x[0]=1.0, x[2]=3.0
	x = [ 1.0, 0.0, 3.0, 0.0 ];
	out = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];

	gvander( -1, 2, 3, x, 2, 0, out, 1, 2, 0 );

	expected = [ 1.0, 9.0, 1.0, 3.0, 1.0, 1.0 ];

	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports specifying a stride for `x` (column-major, accessors)', function test( t ) {
	var expected;
	var out;
	var x;

	x = [ 1.0, 0.0, 3.0, 0.0 ];
	out = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];

	gvander( -1, 2, 3, toAccessorArray( x ), 2, 0, toAccessorArray( out ), 1, 2, 0 ); // eslint-disable-line max-len

	expected = [ 1.0, 9.0, 1.0, 3.0, 1.0, 1.0 ];

	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports specifying a negative stride for `x` (column-major)', function test( t ) {
	var expected;
	var out;
	var x;

	// Negative stride: starts from last and goes backward
	x = [ 3.0, 0.0, 1.0 ];
	out = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];

	gvander( -1, 2, 3, x, -2, 2, out, 1, 2, 0 );

	// x[2]=1.0 (first), x[0]=3.0 (second)
	expected = [ 1.0, 9.0, 1.0, 3.0, 1.0, 1.0 ];

	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports an `x` offset', function test( t ) {
	var expected;
	var out;
	var x;

	x = [
		0.0,
		1.0, // 0
		2.0, // 1
		3.0  // 2
	];
	out = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];

	gvander( 1, 3, 3, x, 1, 1, out, 3, 1, 0 );

	expected = [ 1.0, 1.0, 1.0, 1.0, 2.0, 4.0, 1.0, 3.0, 9.0 ];

	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports an `x` offset (accessors)', function test( t ) {
	var expected;
	var out;
	var x;

	x = [
		0.0,
		1.0, // 0
		2.0, // 1
		3.0  // 2
	];
	out = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];

	gvander( 1, 3, 3, toAccessorArray( x ), 1, 1, toAccessorArray( out ), 3, 1, 0 ); // eslint-disable-line max-len

	expected = [ 1.0, 1.0, 1.0, 1.0, 2.0, 4.0, 1.0, 3.0, 9.0 ];

	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports an output offset', function test( t ) {
	var expected;
	var out;
	var x;

	x = [ 1.0, 2.0 ];
	out = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];

	gvander( 1, 2, 2, x, 1, 0, out, 2, 1, 2 );

	expected = [ 0.0, 0.0, 1.0, 1.0, 1.0, 2.0 ];

	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports an output offset (accessors)', function test( t ) {
	var expected;
	var out;
	var x;

	x = [ 1.0, 2.0 ];
	out = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];

	gvander( 1, 2, 2, toAccessorArray( x ), 1, 0, toAccessorArray( out ), 2, 1, 2 ); // eslint-disable-line max-len

	expected = [ 0.0, 0.0, 1.0, 1.0, 1.0, 2.0 ];

	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports output stride with padding (row-major)', function test( t ) {
	var expected;
	var out;
	var x;

	x = [ 1.0, 2.0 ];
	out = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];

	// 2x3 row-major with strideOut1=5 (padding of 2 per row)
	gvander( -1, 2, 3, x, 1, 0, out, 5, 1, 0 );

	expected = [
		1.0,
		1.0,
		1.0,
		0.0,
		0.0,
		4.0,
		2.0,
		1.0,
		0.0,
		0.0
	];

	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports output stride with padding (row-major, accessors)', function test( t ) {
	var expected;
	var out;
	var x;

	x = [ 1.0, 2.0 ];
	out = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];

	gvander( -1, 2, 3, toAccessorArray( x ), 1, 0, toAccessorArray( out ), 5, 1, 0 ); // eslint-disable-line max-len

	expected = [
		1.0,
		1.0,
		1.0,
		0.0,
		0.0,
		4.0,
		2.0,
		1.0,
		0.0,
		0.0
	];

	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports output stride with padding (column-major)', function test( t ) {
	var expected;
	var out;
	var x;

	x = [ 1.0, 2.0 ];
	out = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];

	// 2x3 column-major with strideOut2=4 (padding of 2 per column)
	gvander( -1, 2, 3, x, 1, 0, out, 1, 4, 0 );

	expected = [
		1.0,
		4.0,
		0.0,
		0.0,
		1.0,
		2.0,
		0.0,
		0.0,
		1.0,
		1.0,
		0.0,
		0.0
	];

	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports output stride with padding (column-major, accessors)', function test( t ) {
	var expected;
	var out;
	var x;

	x = [ 1.0, 2.0 ];
	out = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];

	gvander( -1, 2, 3, toAccessorArray( x ), 1, 0, toAccessorArray( out ), 1, 4, 0 ); // eslint-disable-line max-len

	expected = [
		1.0,
		4.0,
		0.0,
		0.0,
		1.0,
		2.0,
		0.0,
		0.0,
		1.0,
		1.0,
		0.0,
		0.0
	];

	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports non-square matrices (M > N, row-major, decreasing)', function test( t ) {
	var expected;
	var out;
	var x;

	x = [ 1.0, 2.0, 3.0 ];
	out = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];

	gvander( -1, 3, 2, x, 1, 0, out, 2, 1, 0 );

	// 3x2 matrix, decreasing:
	expected = [ 1.0, 1.0, 2.0, 1.0, 3.0, 1.0 ];

	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports non-square matrices (M < N, row-major, increasing)', function test( t ) {
	var expected;
	var out;
	var x;

	x = [ 2.0, 3.0 ];
	out = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];

	gvander( 1, 2, 4, x, 1, 0, out, 4, 1, 0 );

	// 2x4 matrix, increasing:
	expected = [ 1.0, 2.0, 4.0, 8.0, 1.0, 3.0, 9.0, 27.0 ];

	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports complex access patterns', function test( t ) {
	var expected;
	var out;
	var x;

	x = [
		0.0,
		2.0, // 0
		0.0,
		3.0  // 1
	];
	out = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];

	gvander( 1, 2, 3, x, 2, 1, out, 3, -1, 2 );

	expected = [ 4.0, 2.0, 1.0, 9.0, 3.0, 1.0 ];

	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function handles zero values in the input array (row-major, increasing)', function test( t ) {
	var expected;
	var out;
	var x;

	x = [ 0.0, 2.0 ];
	out = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];

	gvander( 1, 2, 3, x, 1, 0, out, 3, 1, 0 );

	expected = [ 1.0, 0.0, 0.0, 1.0, 2.0, 4.0 ];

	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function handles a single column (N=1)', function test( t ) {
	var expected;
	var out;
	var x;

	x = [ 5.0, 10.0, 15.0 ];
	out = [ 0.0, 0.0, 0.0 ];

	gvander( 1, 3, 1, x, 1, 0, out, 1, 1, 0 );

	// Single column: all x^0 = 1
	expected = [ 1.0, 1.0, 1.0 ];

	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function handles a single row (M=1)', function test( t ) {
	var expected;
	var out;
	var x;

	x = [ 3.0 ];
	out = [ 0.0, 0.0, 0.0, 0.0 ];

	gvander( 1, 1, 4, x, 1, 0, out, 4, 1, 0 );

	// Single row: [ 3^0, 3^1, 3^2, 3^3 ] = [ 1, 3, 9, 27 ]
	expected = [ 1.0, 3.0, 9.0, 27.0 ];

	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports column-major with output offset and stride', function test( t ) {
	var expected;
	var out;
	var x;

	x = [ 1.0, 2.0 ];
	out = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];

	// Column-major 2x2 starting at offset 2, with strideOut2=3 (padding of 1)
	gvander( 1, 2, 2, x, 1, 0, out, 1, 3, 2 );

	expected = [ 0.0, 0.0, 1.0, 1.0, 0.0, 1.0, 2.0, 0.0 ];

	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});
