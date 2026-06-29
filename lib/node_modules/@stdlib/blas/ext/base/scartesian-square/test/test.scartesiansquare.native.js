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

var resolve = require( 'path' ).resolve;
var tape = require( 'tape' );
var Float32Array = require( '@stdlib/array/float32' );
var tryRequire = require( '@stdlib/utils/try-require' );


// VARIABLES //

var scartesianSquare = tryRequire( resolve( __dirname, './../lib/scartesiansquare.native.js' ) );
var opts = {
	'skip': ( scartesianSquare instanceof Error )
};


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof scartesianSquare, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 6', opts, function test( t ) {
	t.strictEqual( scartesianSquare.length, 6, 'has expected arity' );
	t.end();
});

tape( 'the function throws if the first argument is not a valid order', opts, function test( t ) {
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
			var out = new Float32Array( 8 );
			var x = new Float32Array( [ 1.0, 2.0 ] );
			scartesianSquare( value, 2, x, 1, out, 2 );
		};
	}
});

tape( 'the function throws if the sixth argument is less than max(1,2) for row-major order', opts, function test( t ) {
	t.throws( badValue, RangeError, 'throws a range error' );
	t.end();

	function badValue() {
		var out = new Float32Array( 18 );
		var x = new Float32Array( [ 1.0, 2.0, 3.0 ] );
		scartesianSquare( 'row-major', 3, x, 1, out, 1 );
	}
});

tape( 'the function throws if the sixth argument is less than max(1,N*N) for column-major order', opts, function test( t ) {
	t.throws( badValue, RangeError, 'throws a range error' );
	t.end();

	function badValue() {
		var out = new Float32Array( 18 );
		var x = new Float32Array( [ 1.0, 2.0, 3.0 ] );
		scartesianSquare( 'column-major', 3, x, 1, out, 8 );
	}
});

tape( 'the function computes the Cartesian square', opts, function test( t ) {
	var expected;
	var out;
	var x;

	// Row-major:
	x = new Float32Array( [ 1.0, 2.0 ] );
	out = new Float32Array( 8 );
	expected = new Float32Array( [ 1.0, 1.0, 1.0, 2.0, 2.0, 1.0, 2.0, 2.0 ] );

	scartesianSquare( 'row-major', x.length, x, 1, out, 2 );
	t.deepEqual( out, expected, 'returns expected value' );

	x = new Float32Array( [ 1.0, 2.0, 3.0 ] );
	out = new Float32Array( 27 );
	expected = new Float32Array([
		1.0,
		1.0,
		0.0,
		1.0,
		2.0,
		0.0,
		1.0,
		3.0,
		0.0,
		2.0,
		1.0,
		0.0,
		2.0,
		2.0,
		0.0,
		2.0,
		3.0,
		0.0,
		3.0,
		1.0,
		0.0,
		3.0,
		2.0,
		0.0,
		3.0,
		3.0,
		0.0
	]);

	scartesianSquare( 'row-major', x.length, x, 1, out, 3 );
	t.deepEqual( out, expected, 'returns expected value' );

	x = new Float32Array( [ 5.0 ] );
	out = new Float32Array( 2 );
	expected = new Float32Array( [ 5.0, 5.0 ] );

	scartesianSquare( 'row-major', 1, x, 1, out, 2 );
	t.deepEqual( out, expected, 'returns expected value' );

	// Column-major:
	x = new Float32Array( [ 1.0, 2.0 ] );
	out = new Float32Array( 8 );
	expected = new Float32Array( [ 1.0, 1.0, 2.0, 2.0, 1.0, 2.0, 1.0, 2.0 ] );

	scartesianSquare( 'column-major', x.length, x, 1, out, 4 );
	t.deepEqual( out, expected, 'returns expected value' );

	x = new Float32Array( [ 1.0, 2.0, 3.0 ] );
	out = new Float32Array( 18 );
	expected = new Float32Array([
		1.0,
		1.0,
		1.0,
		2.0,
		2.0,
		2.0,
		3.0,
		3.0,
		3.0,
		1.0,
		2.0,
		3.0,
		1.0,
		2.0,
		3.0,
		1.0,
		2.0,
		3.0
	]);

	scartesianSquare( 'column-major', x.length, x, 1, out, 9 );
	t.deepEqual( out, expected, 'returns expected value' );

	x = new Float32Array( [ 5.0 ] );
	out = new Float32Array( 2 );
	expected = new Float32Array( [ 5.0, 5.0 ] );

	scartesianSquare( 'column-major', 1, x, 1, out, 1 );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a reference to the output array', opts, function test( t ) {
	var out;
	var x;
	var y;

	x = new Float32Array( [ 1.0, 2.0 ] );
	out = new Float32Array( 8 );
	y = scartesianSquare( 'row-major', x.length, x, 1, out, 2 );

	t.strictEqual( y, out, 'same reference' );

	x = new Float32Array( [ 1.0, 2.0 ] );
	out = new Float32Array( 8 );
	y = scartesianSquare( 'column-major', x.length, x, 1, out, 4 );

	t.strictEqual( y, out, 'same reference' );

	t.end();
});

tape( 'if provided an `N` parameter equal to `0`, the function returns the output array unchanged', opts, function test( t ) {
	var expected;
	var out;
	var x;

	x = new Float32Array( [ 1.0, 2.0 ] );
	out = new Float32Array( [ 3.0, 4.0, 5.0, 6.0 ] );
	expected = new Float32Array( [ 3.0, 4.0, 5.0, 6.0 ] );

	scartesianSquare( 'row-major', 0, x, 1, out, 2 );
	t.deepEqual( out, expected, 'returns expected value' );

	x = new Float32Array( [ 1.0, 2.0 ] );
	out = new Float32Array( [ 3.0, 4.0, 5.0, 6.0 ] );
	expected = new Float32Array( [ 3.0, 4.0, 5.0, 6.0 ] );

	scartesianSquare( 'column-major', 0, x, 1, out, 1 );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying a stride for `x`', opts, function test( t ) {
	var expected;
	var out;
	var x;

	// Row-major:
	x = new Float32Array([
		1.0, // 0
		0.0,
		2.0, // 1
		0.0
	]);
	out = new Float32Array( 8 );
	expected = new Float32Array( [ 1.0, 1.0, 1.0, 2.0, 2.0, 1.0, 2.0, 2.0 ] );

	scartesianSquare( 'row-major', 2, x, 2, out, 2 );
	t.deepEqual( out, expected, 'returns expected value' );

	// Column-major:
	x = new Float32Array([
		1.0, // 0
		0.0,
		2.0, // 1
		0.0
	]);
	out = new Float32Array( 8 );
	expected = new Float32Array( [ 1.0, 1.0, 2.0, 2.0, 1.0, 2.0, 1.0, 2.0 ] );

	scartesianSquare( 'column-major', 2, x, 2, out, 4 );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying a negative stride for `x`', opts, function test( t ) {
	var expected;
	var out;
	var x;

	// Row-major:
	x = new Float32Array([
		2.0, // 1
		1.0  // 0
	]);
	out = new Float32Array( 8 );
	expected = new Float32Array( [ 1.0, 1.0, 1.0, 2.0, 2.0, 1.0, 2.0, 2.0 ] );

	scartesianSquare( 'row-major', 2, x, -1, out, 2 );
	t.deepEqual( out, expected, 'returns expected value' );

	// Column-major:
	x = new Float32Array([
		2.0, // 1
		1.0  // 0
	]);
	out = new Float32Array( 8 );
	expected = new Float32Array( [ 1.0, 1.0, 2.0, 2.0, 1.0, 2.0, 1.0, 2.0 ] );

	scartesianSquare( 'column-major', 2, x, -1, out, 4 );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying a leading dimension stride for the output array', opts, function test( t ) {
	var expected;
	var out;
	var x;

	// Row-major:
	x = new Float32Array( [ 1.0, 2.0 ] );
	out = new Float32Array( 16 );
	expected = new Float32Array([
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
	]);

	scartesianSquare( 'row-major', 2, x, 1, out, 4 );
	t.deepEqual( out, expected, 'returns expected value' );

	// Column-major:
	x = new Float32Array( [ 1.0, 2.0 ] );
	out = new Float32Array( 16 );
	expected = new Float32Array([
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
	]);

	scartesianSquare( 'column-major', 2, x, 1, out, 8 );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports view offsets', opts, function test( t ) {
	var expected;
	var out;
	var x0;
	var x1;

	// Row-major:
	x0 = new Float32Array( [ 0.0, 1.0, 2.0, 3.0 ] );
	x1 = new Float32Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 );

	out = new Float32Array( 8 );
	expected = new Float32Array( [ 1.0, 1.0, 1.0, 2.0, 2.0, 1.0, 2.0, 2.0 ] );

	scartesianSquare( 'row-major', 2, x1, 1, out, 2 );
	t.deepEqual( out, expected, 'returns expected value' );

	// Column-major:
	x0 = new Float32Array( [ 0.0, 1.0, 2.0, 3.0 ] );
	x1 = new Float32Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 );

	out = new Float32Array( 8 );
	expected = new Float32Array( [ 1.0, 1.0, 2.0, 2.0, 1.0, 2.0, 1.0, 2.0 ] );

	scartesianSquare( 'column-major', 2, x1, 1, out, 4 );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});
