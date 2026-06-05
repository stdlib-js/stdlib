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

var scartesianProduct = tryRequire( resolve( __dirname, './../lib/scartesianproduct.native.js' ) );
var opts = {
	'skip': ( scartesianProduct instanceof Error )
};


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof scartesianProduct, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 9', opts, function test( t ) {
	t.strictEqual( scartesianProduct.length, 9, 'has expected arity' );
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
			var y = new Float32Array( [ 3.0, 4.0 ] );
			scartesianProduct( value, x.length, y.length, x, 1, y, 1, out, 2 );
		};
	}
});

tape( 'the function throws if the ninth argument is less than max(1,2) (row-major)', opts, function test( t ) {
	t.throws( badValue, RangeError, 'throws a range error' );
	t.end();

	function badValue() {
		var out = new Float32Array( 18 );
		var x = new Float32Array( [ 1.0, 2.0 ] );
		var y = new Float32Array( [ 3.0, 4.0, 5.0 ] );
		scartesianProduct( 'row-major', x.length, y.length, x, 1, y, 1, out, 1 );
	}
});

tape( 'the function throws if the ninth argument is less than max(1,M*N) (column-major)', opts, function test( t ) {
	t.throws( badValue, RangeError, 'throws a range error' );
	t.end();

	function badValue() {
		var out = new Float32Array( 18 );
		var x = new Float32Array( [ 1.0, 2.0 ] );
		var y = new Float32Array( [ 3.0, 4.0, 5.0 ] );
		scartesianProduct( 'column-major', x.length, y.length, x, 1, y, 1, out, 4 );
	}
});

tape( 'the function computes the Cartesian product', opts, function test( t ) {
	var expected;
	var out;
	var x;
	var y;

	// Row-major:
	x = new Float32Array( [ 1.0, 2.0 ] );
	y = new Float32Array( [ 3.0, 4.0 ] );
	out = new Float32Array( 8 );
	expected = new Float32Array( [ 1.0, 3.0, 1.0, 4.0, 2.0, 3.0, 2.0, 4.0 ] );

	scartesianProduct( 'row-major', x.length, y.length, x, 1, y, 1, out, 2 );
	t.deepEqual( out, expected, 'returns expected value' );

	x = new Float32Array( [ 1.0, 2.0, 3.0 ] );
	y = new Float32Array( [ 10.0, 20.0 ] );
	out = new Float32Array( 12 );
	expected = new Float32Array([
		1.0,
		10.0,
		1.0,
		20.0,
		2.0,
		10.0,
		2.0,
		20.0,
		3.0,
		10.0,
		3.0,
		20.0
	]);

	scartesianProduct( 'row-major', x.length, y.length, x, 1, y, 1, out, 2 );
	t.deepEqual( out, expected, 'returns expected value' );

	x = new Float32Array( [ 5.0 ] );
	y = new Float32Array( [ 7.0 ] );
	out = new Float32Array( 2 );
	expected = new Float32Array( [ 5.0, 7.0 ] );

	scartesianProduct( 'row-major', 1, 1, x, 1, y, 1, out, 2 );
	t.deepEqual( out, expected, 'returns expected value' );

	// Column-major:
	x = new Float32Array( [ 1.0, 2.0 ] );
	y = new Float32Array( [ 3.0, 4.0 ] );
	out = new Float32Array( 8 );
	expected = new Float32Array( [ 1.0, 1.0, 2.0, 2.0, 3.0, 4.0, 3.0, 4.0 ] );

	scartesianProduct( 'column-major', x.length, y.length, x, 1, y, 1, out, 4 );
	t.deepEqual( out, expected, 'returns expected value' );

	x = new Float32Array( [ 1.0, 2.0, 3.0 ] );
	y = new Float32Array( [ 10.0, 20.0 ] );
	out = new Float32Array( 12 );
	expected = new Float32Array([
		1.0,
		1.0,
		2.0,
		2.0,
		3.0,
		3.0,
		10.0,
		20.0,
		10.0,
		20.0,
		10.0,
		20.0
	]);

	scartesianProduct( 'column-major', x.length, y.length, x, 1, y, 1, out, 6 );
	t.deepEqual( out, expected, 'returns expected value' );

	x = new Float32Array( [ 5.0 ] );
	y = new Float32Array( [ 7.0 ] );
	out = new Float32Array( 2 );
	expected = new Float32Array( [ 5.0, 7.0 ] );

	scartesianProduct( 'column-major', 1, 1, x, 1, y, 1, out, 1 );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a reference to the output array', opts, function test( t ) {
	var out;
	var x;
	var y;
	var z;

	x = new Float32Array( [ 1.0, 2.0 ] );
	y = new Float32Array( [ 3.0, 4.0 ] );
	out = new Float32Array( 8 );
	z = scartesianProduct( 'row-major', x.length, y.length, x, 1, y, 1, out, 2 );

	t.strictEqual( z, out, 'same reference' );

	x = new Float32Array( [ 1.0, 2.0 ] );
	y = new Float32Array( [ 3.0, 4.0 ] );
	out = new Float32Array( 8 );
	z = scartesianProduct( 'column-major', x.length, y.length, x, 1, y, 1, out, 4 );

	t.strictEqual( z, out, 'same reference' );

	t.end();
});

tape( 'if provided an `M` or `N` parameter equal to `0`, the function returns the output array unchanged', opts, function test( t ) {
	var expected;
	var out;
	var x;
	var y;

	x = new Float32Array( [ 1.0, 2.0 ] );
	y = new Float32Array( [ 3.0, 4.0 ] );
	out = new Float32Array( [ 5.0, 6.0, 7.0, 8.0 ] );
	expected = new Float32Array( [ 5.0, 6.0, 7.0, 8.0 ] );

	scartesianProduct( 'row-major', 0, y.length, x, 1, y, 1, out, 2 );
	t.deepEqual( out, expected, 'returns expected value' );

	scartesianProduct( 'row-major', x.length, 0, x, 1, y, 1, out, 2 );
	t.deepEqual( out, expected, 'returns expected value' );

	scartesianProduct( 'column-major', 0, y.length, x, 1, y, 1, out, 2 );
	t.deepEqual( out, expected, 'returns expected value' );

	scartesianProduct( 'column-major', x.length, 0, x, 1, y, 1, out, 1 );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying a stride for `x`', opts, function test( t ) {
	var expected;
	var out;
	var x;
	var y;

	// Row-major:
	x = new Float32Array([
		1.0, // 0
		0.0,
		2.0, // 1
		0.0
	]);
	y = new Float32Array( [ 3.0, 4.0 ] );
	out = new Float32Array( 8 );
	expected = new Float32Array( [ 1.0, 3.0, 1.0, 4.0, 2.0, 3.0, 2.0, 4.0 ] );

	scartesianProduct( 'row-major', 2, y.length, x, 2, y, 1, out, 2 );
	t.deepEqual( out, expected, 'returns expected value' );

	// Column-major:
	x = new Float32Array([
		1.0, // 0
		0.0,
		2.0, // 1
		0.0
	]);
	out = new Float32Array( 8 );
	expected = new Float32Array( [ 1.0, 1.0, 2.0, 2.0, 3.0, 4.0, 3.0, 4.0 ] );

	scartesianProduct( 'column-major', 2, y.length, x, 2, y, 1, out, 4 );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying a negative stride for `x`', opts, function test( t ) {
	var expected;
	var out;
	var x;
	var y;

	// Row-major:
	x = new Float32Array([
		2.0, // 1
		1.0  // 0
	]);
	y = new Float32Array( [ 3.0, 4.0 ] );
	out = new Float32Array( 8 );
	expected = new Float32Array( [ 1.0, 3.0, 1.0, 4.0, 2.0, 3.0, 2.0, 4.0 ] );

	scartesianProduct( 'row-major', 2, y.length, x, -1, y, 1, out, 2 );
	t.deepEqual( out, expected, 'returns expected value' );

	// Column-major:
	x = new Float32Array([
		2.0, // 1
		1.0  // 0
	]);
	out = new Float32Array( 8 );
	expected = new Float32Array( [ 1.0, 1.0, 2.0, 2.0, 3.0, 4.0, 3.0, 4.0 ] );

	scartesianProduct( 'column-major', 2, y.length, x, -1, y, 1, out, 4 );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying a stride for `y`', opts, function test( t ) {
	var expected;
	var out;
	var x;
	var y;

	// Row-major:
	x = new Float32Array( [ 1.0, 2.0 ] );
	y = new Float32Array([
		3.0, // 0
		0.0,
		4.0, // 1
		0.0
	]);
	out = new Float32Array( 8 );
	expected = new Float32Array( [ 1.0, 3.0, 1.0, 4.0, 2.0, 3.0, 2.0, 4.0 ] );

	scartesianProduct( 'row-major', x.length, 2, x, 1, y, 2, out, 2 );
	t.deepEqual( out, expected, 'returns expected value' );

	// Column-major:
	y = new Float32Array([
		3.0, // 0
		0.0,
		4.0, // 1
		0.0
	]);
	out = new Float32Array( 8 );
	expected = new Float32Array( [ 1.0, 1.0, 2.0, 2.0, 3.0, 4.0, 3.0, 4.0 ] );

	scartesianProduct( 'column-major', x.length, 2, x, 1, y, 2, out, 4 );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying a negative stride for `y`', opts, function test( t ) {
	var expected;
	var out;
	var x;
	var y;

	// Row-major:
	x = new Float32Array( [ 1.0, 2.0 ] );
	y = new Float32Array([
		4.0, // 1
		3.0  // 0
	]);
	out = new Float32Array( 8 );
	expected = new Float32Array( [ 1.0, 3.0, 1.0, 4.0, 2.0, 3.0, 2.0, 4.0 ] );

	scartesianProduct( 'row-major', x.length, 2, x, 1, y, -1, out, 2 );
	t.deepEqual( out, expected, 'returns expected value' );

	// Column-major:
	y = new Float32Array([
		4.0, // 1
		3.0  // 0
	]);
	out = new Float32Array( 8 );
	expected = new Float32Array( [ 1.0, 1.0, 2.0, 2.0, 3.0, 4.0, 3.0, 4.0 ] );

	scartesianProduct( 'column-major', x.length, 2, x, 1, y, -1, out, 4 );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying a leading dimension stride for the output array', opts, function test( t ) {
	var expected;
	var out;
	var x;
	var y;

	// Row-major:
	x = new Float32Array( [ 1.0, 2.0 ] );
	y = new Float32Array( [ 3.0, 4.0 ] );
	out = new Float32Array( 16 );
	expected = new Float32Array([
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
	]);

	scartesianProduct( 'row-major', x.length, y.length, x, 1, y, 1, out, 4 );
	t.deepEqual( out, expected, 'returns expected value' );

	// Column-major:
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
		3.0,
		4.0,
		3.0,
		4.0,
		0.0,
		0.0,
		0.0,
		0.0
	]);

	scartesianProduct( 'column-major', x.length, y.length, x, 1, y, 1, out, 8 );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports view offsets', opts, function test( t ) {
	var expected;
	var out;
	var x0;
	var x1;
	var y0;
	var y1;

	// Row-major:
	x0 = new Float32Array( [ 0.0, 1.0, 2.0 ] );
	x1 = new Float32Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 );

	y0 = new Float32Array( [ 0.0, 3.0, 4.0 ] );
	y1 = new Float32Array( y0.buffer, y0.BYTES_PER_ELEMENT*1 );

	out = new Float32Array( 8 );
	expected = new Float32Array( [ 1.0, 3.0, 1.0, 4.0, 2.0, 3.0, 2.0, 4.0 ] );

	scartesianProduct( 'row-major', 2, 2, x1, 1, y1, 1, out, 2 );
	t.deepEqual( out, expected, 'returns expected value' );

	// Column-major:
	x0 = new Float32Array( [ 0.0, 1.0, 2.0 ] );
	x1 = new Float32Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 );

	y0 = new Float32Array( [ 0.0, 3.0, 4.0 ] );
	y1 = new Float32Array( y0.buffer, y0.BYTES_PER_ELEMENT*1 );

	out = new Float32Array( 8 );
	expected = new Float32Array( [ 1.0, 1.0, 2.0, 2.0, 3.0, 4.0, 3.0, 4.0 ] );

	scartesianProduct( 'column-major', 2, 2, x1, 1, y1, 1, out, 4 );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});
