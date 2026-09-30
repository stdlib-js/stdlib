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
var gcartesianSquare = require( './../lib/main.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof gcartesianSquare, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 6', function test( t ) {
	t.strictEqual( gcartesianSquare.length, 6, 'has expected arity' );
	t.end();
});

tape( 'the function throws an error if provided an invalid first argument', function test( t ) {
	var values;
	var x;
	var o;
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
			x = [ 1.0, 2.0 ];
			o = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];
			gcartesianSquare( value, 2, x, 1, o, 2 );
		};
	}
});

tape( 'the function throws an error if provided an invalid first argument (accessors)', function test( t ) {
	var values;
	var x;
	var o;
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
			x = toAccessorArray( [ 1.0, 2.0 ] );
			o = toAccessorArray( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
			gcartesianSquare( value, 2, x, 1, o, 2 );
		};
	}
});

tape( 'the function throws an error if provided an invalid sixth argument (row-major)', function test( t ) {
	var values;
	var x;
	var o;
	var i;

	values = [
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
			x = [ 1.0, 2.0, 3.0 ];
			o = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];
			gcartesianSquare( 'row-major', 3, x, 1, o, value );
		};
	}
});

tape( 'the function throws an error if provided an invalid sixth argument (row-major, accessors)', function test( t ) {
	var values;
	var x;
	var o;
	var i;

	values = [
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
			x = toAccessorArray( [ 1.0, 2.0, 3.0 ] );
			o = toAccessorArray( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
			gcartesianSquare( 'row-major', 3, x, 1, o, value );
		};
	}
});

tape( 'the function throws an error if provided an invalid sixth argument (column-major)', function test( t ) {
	var values;
	var x;
	var o;
	var i;

	values = [
		-2,
		-1,
		0,
		1,
		2,
		3,
		8
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), RangeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			x = [ 1.0, 2.0, 3.0 ];
			o = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];
			gcartesianSquare( 'column-major', 3, x, 1, o, value );
		};
	}
});

tape( 'the function throws an error if provided an invalid sixth argument (column-major, accessors)', function test( t ) {
	var values;
	var x;
	var o;
	var i;

	values = [
		-2,
		-1,
		0,
		1,
		2,
		3,
		8
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), RangeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			x = toAccessorArray( [ 1.0, 2.0, 3.0 ] );
			o = toAccessorArray( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
			gcartesianSquare( 'column-major', 3, x, 1, o, value );
		};
	}
});

tape( 'the function computes the Cartesian square (row-major)', function test( t ) {
	var expected;
	var out;
	var x;

	x = [ 1.0, 2.0 ];
	out = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];
	expected = [ 1.0, 1.0, 1.0, 2.0, 2.0, 1.0, 2.0, 2.0 ];

	gcartesianSquare( 'row-major', x.length, x, 1, out, 2 );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function computes the Cartesian square (row-major, accessors)', function test( t ) {
	var expected;
	var out;
	var x;

	x = [ 1.0, 2.0 ];
	out = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];
	expected = [ 1.0, 1.0, 1.0, 2.0, 2.0, 1.0, 2.0, 2.0 ];

	gcartesianSquare( 'row-major', 2, toAccessorArray( x ), 1, toAccessorArray( out ), 2 );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function computes the Cartesian square (column-major)', function test( t ) {
	var expected;
	var out;
	var x;

	x = [ 1.0, 2.0 ];
	out = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];
	expected = [ 1.0, 1.0, 2.0, 2.0, 1.0, 2.0, 1.0, 2.0 ];

	gcartesianSquare( 'column-major', x.length, x, 1, out, 4 );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function computes the Cartesian square (column-major, accessors)', function test( t ) {
	var expected;
	var out;
	var x;

	x = [ 1.0, 2.0 ];
	out = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];
	expected = [ 1.0, 1.0, 2.0, 2.0, 1.0, 2.0, 1.0, 2.0 ];

	gcartesianSquare( 'column-major', 2, toAccessorArray( x ), 1, toAccessorArray( out ), 4 );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a reference to the output array', function test( t ) {
	var out;
	var x;
	var y;

	x = [ 1.0, 2.0 ];
	out = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];
	y = gcartesianSquare( 'row-major', x.length, x, 1, out, 2 );

	t.strictEqual( y, out, 'returns expected value' );
	t.end();
});

tape( 'the function returns a reference to the output array (accessors)', function test( t ) {
	var out;
	var x;
	var y;

	x = toAccessorArray( [ 1.0, 2.0 ] );
	out = toAccessorArray( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	y = gcartesianSquare( 'row-major', 2, x, 1, out, 2 );

	t.strictEqual( y, out, 'returns expected value' );
	t.end();
});

tape( 'if provided an `N` parameter equal to `0`, the function returns the output array unchanged', function test( t ) {
	var expected;
	var out;
	var x;

	x = [ 1.0, 2.0 ];
	out = [ 3.0, 4.0, 5.0, 6.0 ];
	expected = [ 3.0, 4.0, 5.0, 6.0 ];

	gcartesianSquare( 'row-major', 0, x, 1, out, 2 );
	t.deepEqual( out, expected, 'returns expected value' );

	x = [ 1.0, 2.0 ];
	out = [ 3.0, 4.0, 5.0, 6.0 ];
	expected = [ 3.0, 4.0, 5.0, 6.0 ];

	gcartesianSquare( 'column-major', 0, x, 1, out, 1 );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying a stride for `x` (row-major)', function test( t ) {
	var expected;
	var out;
	var x;

	x = [
		1.0, // 0
		0.0,
		2.0  // 1
	];
	out = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];
	expected = [ 1.0, 1.0, 1.0, 2.0, 2.0, 1.0, 2.0, 2.0 ];

	gcartesianSquare( 'row-major', 2, x, 2, out, 2 );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying a stride for `x` (row-major, accessors)', function test( t ) {
	var expected;
	var out;
	var x;

	x = [ 1.0, 0.0, 2.0 ];
	out = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];
	expected = [ 1.0, 1.0, 1.0, 2.0, 2.0, 1.0, 2.0, 2.0 ];

	gcartesianSquare( 'row-major', 2, toAccessorArray( x ), 2, toAccessorArray( out ), 2 );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying a negative stride for `x` (row-major)', function test( t ) {
	var expected;
	var out;
	var x;

	x = [
		2.0, // 1
		1.0  // 0
	];
	out = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];
	expected = [ 1.0, 1.0, 1.0, 2.0, 2.0, 1.0, 2.0, 2.0 ];

	gcartesianSquare( 'row-major', 2, x, -1, out, 2 );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying a stride for `x` (column-major)', function test( t ) {
	var expected;
	var out;
	var x;

	x = [
		1.0, // 0
		0.0,
		2.0  // 1
	];
	out = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];
	expected = [ 1.0, 1.0, 2.0, 2.0, 1.0, 2.0, 1.0, 2.0 ];

	gcartesianSquare( 'column-major', 2, x, 2, out, 4 );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying a stride for `x` (column-major, accessors)', function test( t ) {
	var expected;
	var out;
	var x;

	x = [ 1.0, 0.0, 2.0 ];
	out = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];
	expected = [ 1.0, 1.0, 2.0, 2.0, 1.0, 2.0, 1.0, 2.0 ];

	gcartesianSquare( 'column-major', 2, toAccessorArray( x ), 2, toAccessorArray( out ), 4 );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying a negative stride for `x` (column-major)', function test( t ) {
	var expected;
	var out;
	var x;

	x = [
		2.0, // 1
		1.0  // 0
	];
	out = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];
	expected = [ 1.0, 1.0, 2.0, 2.0, 1.0, 2.0, 1.0, 2.0 ];

	gcartesianSquare( 'column-major', 2, x, -1, out, 4 );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports an `LDO` larger than the matrix dimension (row-major)', function test( t ) {
	var expected;
	var out;
	var x;

	x = [ 1.0, 2.0 ];
	out = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];
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

	gcartesianSquare( 'row-major', 2, x, 1, out, 4 );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports an `LDO` larger than the matrix dimension (row-major, accessors)', function test( t ) {
	var expected;
	var out;
	var x;

	x = [ 1.0, 2.0 ];
	out = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];
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

	gcartesianSquare( 'row-major', 2, toAccessorArray( x ), 1, toAccessorArray( out ), 4 );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports an `LDO` larger than the matrix dimension (column-major)', function test( t ) {
	var expected;
	var out;
	var x;

	x = [ 1.0, 2.0 ];
	out = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];
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

	gcartesianSquare( 'column-major', 2, x, 1, out, 8 );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports an `LDO` larger than the matrix dimension (column-major, accessors)', function test( t ) {
	var expected;
	var out;
	var x;

	x = [ 1.0, 2.0 ];
	out = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];
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

	gcartesianSquare( 'column-major', 2, toAccessorArray( x ), 1, toAccessorArray( out ), 8 );
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

	gcartesianSquare( 'row-major', 2, x1, 1, out, 2 );
	t.deepEqual( out, expected, 'returns expected value' );

	// Column-major:
	x0 = new Float64Array( [ 0.0, 1.0, 2.0, 3.0 ] );
	x1 = new Float64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 );

	out = new Float64Array( 8 );
	expected = new Float64Array( [ 1.0, 1.0, 2.0, 2.0, 1.0, 2.0, 1.0, 2.0 ] );

	gcartesianSquare( 'column-major', 2, x1, 1, out, 4 );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});
