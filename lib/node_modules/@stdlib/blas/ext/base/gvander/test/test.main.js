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
var gvander = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof gvander, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 8', function test( t ) {
	t.strictEqual( gvander.length, 8, 'has expected arity' );
	t.end();
});

tape( 'the function throws an error if provided an invalid first argument', function test( t ) {
	var values;
	var i;

	values = [
		'foo',
		'bar',
		'beep',
		'boop'
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			gvander( value, -1, 3, 3, [ 1.0, 2.0, 3.0 ], 1, [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ], 3 ); // eslint-disable-line max-len
		};
	}
});

tape( 'the function throws an error if provided an invalid first argument (accessors)', function test( t ) {
	var values;
	var i;

	values = [
		'foo',
		'bar',
		'beep',
		'boop'
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			gvander( value, -1, 3, 3, toAccessorArray( [ 1.0, 2.0, 3.0 ] ), 1, toAccessorArray( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] ), 3 ); // eslint-disable-line max-len
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
			gvander( 'row-major', -1, value, 3, [ 1.0, 2.0, 3.0 ], 1, [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ], 3 );
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
			gvander( 'row-major', -1, value, 3, toAccessorArray( [ 1.0, 2.0, 3.0 ] ), 1, toAccessorArray( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] ), 3 );
		};
	}
});

tape( 'the function throws an error if provided an invalid fourth argument', function test( t ) {
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
			gvander( 'row-major', -1, 3, value, [ 1.0, 2.0, 3.0 ], 1, [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ], 3 );
		};
	}
});

tape( 'the function throws an error if provided an invalid fourth argument (accessors)', function test( t ) {
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
			gvander( 'row-major', -1, 3, value, toAccessorArray( [ 1.0, 2.0, 3.0 ] ), 1, toAccessorArray( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] ), 3 );
		};
	}
});

tape( 'the function throws an error if provided an invalid eighth argument', function test( t ) {
	var values;
	var i;

	values = [
		-3,
		-2,
		-1,
		0,
		1
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), RangeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			gvander( 'row-major', -1, 3, 3, [ 1.0, 2.0, 3.0 ], 1, [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ], value );
		};
	}
});

tape( 'the function throws an error if provided an invalid eighth argument (accessors)', function test( t ) {
	var values;
	var i;

	values = [
		-3,
		-2,
		-1,
		0,
		1
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), RangeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			gvander( 'row-major', -1, 3, 3, toAccessorArray( [ 1.0, 2.0, 3.0 ] ), 1, toAccessorArray( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] ), value );
		};
	}
});

tape( 'the function generates a Vandermonde matrix (row-major, decreasing)', function test( t ) {
	var expected;
	var out;
	var x;

	x = [ 1.0, 2.0, 3.0 ];
	out = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];

	gvander( 'row-major', -1, 3, 3, x, 1, out, 3 );

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

	gvander( 'row-major', -1, 3, 3, toAccessorArray( x ), 1, toAccessorArray( out ), 3 );

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

	gvander( 'row-major', 1, 3, 3, x, 1, out, 3 );

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

	gvander( 'row-major', 1, 3, 3, toAccessorArray( x ), 1, toAccessorArray( out ), 3 );

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

	gvander( 'column-major', -1, 3, 3, x, 1, out, 3 );

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

	gvander( 'column-major', -1, 3, 3, toAccessorArray( x ), 1, toAccessorArray( out ), 3 );

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

	gvander( 'column-major', 1, 3, 3, x, 1, out, 3 );

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

	gvander( 'column-major', 1, 3, 3, toAccessorArray( x ), 1, toAccessorArray( out ), 3 );

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

	v = gvander( 'row-major', -1, 2, 2, x, 1, out, 2 );

	t.strictEqual( v, out, 'returns expected value' );
	t.end();
});

tape( 'the function returns the output matrix (accessors)', function test( t ) {
	var out;
	var x;
	var v;

	x = toAccessorArray( [ 1.0, 2.0 ] );
	out = toAccessorArray( [ 0.0, 0.0, 0.0, 0.0 ] );

	v = gvander( 'row-major', -1, 2, 2, x, 1, out, 2 );

	t.strictEqual( v, out, 'returns expected value' );
	t.end();
});

tape( 'the function supports specifying a stride for `x` (row-major)', function test( t ) {
	var expected;
	var out;
	var x;

	// Pick every other element: x[0]=1.0, x[2]=3.0
	x = [ 1.0, 0.0, 3.0, 0.0 ];
	out = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];

	gvander( 'row-major', -1, 2, 3, x, 2, out, 3 );

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

	gvander( 'row-major', -1, 2, 3, toAccessorArray( x ), 2, toAccessorArray( out ), 3 );

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

	gvander( 'row-major', -1, 2, 3, x, -2, out, 3 );

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

	gvander( 'column-major', -1, 2, 3, x, 2, out, 2 );

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

	gvander( 'column-major', -1, 2, 3, toAccessorArray( x ), 2, toAccessorArray( out ), 2 );

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

	gvander( 'column-major', -1, 2, 3, x, -2, out, 2 );

	// x[2]=1.0 (first), x[0]=3.0 (second)
	expected = [ 1.0, 9.0, 1.0, 3.0, 1.0, 1.0 ];

	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports an `ldo` larger than the matrix dimension (row-major)', function test( t ) {
	var expected;
	var out;
	var x;

	x = [ 1.0, 2.0 ];
	out = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];

	// 2x3 row-major with ldo=5 (padding of 2 per row)
	gvander( 'row-major', -1, 2, 3, x, 1, out, 5 );

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

tape( 'the function supports an `ldo` larger than the matrix dimension (row-major, accessors)', function test( t ) {
	var expected;
	var out;
	var x;

	x = [ 1.0, 2.0 ];
	out = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];

	gvander( 'row-major', -1, 2, 3, toAccessorArray( x ), 1, toAccessorArray( out ), 5 );

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

tape( 'the function supports an `ldo` larger than the matrix dimension (column-major)', function test( t ) {
	var expected;
	var out;
	var x;

	x = [ 1.0, 2.0 ];
	out = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];

	// 2x3 column-major with ldo=4 (padding of 2 per column)
	gvander( 'column-major', -1, 2, 3, x, 1, out, 4 );

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

tape( 'the function supports an `ldo` larger than the matrix dimension (column-major, accessors)', function test( t ) {
	var expected;
	var out;
	var x;

	x = [ 1.0, 2.0 ];
	out = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];

	gvander( 'column-major', -1, 2, 3, toAccessorArray( x ), 1, toAccessorArray( out ), 4 );

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

	gvander( 'row-major', -1, 3, 2, x, 1, out, 2 );

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

	gvander( 'row-major', 1, 2, 4, x, 1, out, 4 );

	// 2x4 matrix, increasing:
	expected = [ 1.0, 2.0, 4.0, 8.0, 1.0, 3.0, 9.0, 27.0 ];

	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports view offsets', function test( t ) {
	var expected;
	var out;
	var x0;
	var x1;

	// Initial array:
	x0 = new Float64Array( [ 0.0, 1.0, 2.0, 3.0 ] );

	// Create an offset view:
	x1 = new Float64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

	out = new Float64Array( 9 );

	gvander( 'row-major', 1, 3, 3, x1, 1, out, 3 );

	expected = new Float64Array([
		1.0,
		1.0,
		1.0,
		1.0,
		2.0,
		4.0,
		1.0,
		3.0,
		9.0
	]);

	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function handles zero values in the input array (row-major, increasing)', function test( t ) {
	var expected;
	var out;
	var x;

	x = [ 0.0, 2.0 ];
	out = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];

	gvander( 'row-major', 1, 2, 3, x, 1, out, 3 );

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

	gvander( 'row-major', 1, 3, 1, x, 1, out, 1 );

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

	gvander( 'row-major', 1, 1, 4, x, 1, out, 4 );

	// Single row: [ 3^0, 3^1, 3^2, 3^3 ] = [ 1, 3, 9, 27 ]
	expected = [ 1.0, 3.0, 9.0, 27.0 ];

	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});
