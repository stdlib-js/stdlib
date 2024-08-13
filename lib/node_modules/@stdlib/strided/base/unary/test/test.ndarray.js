/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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
var abs = require( '@stdlib/math/base/special/abs' );
var cidentityf = require( '@stdlib/math/base/special/cidentityf' );
var Float64Array = require( '@stdlib/array/float64' );
var Float32Array = require( '@stdlib/array/float32' );
var Complex64Array = require( '@stdlib/array/complex64' );
var Complex64 = require( '@stdlib/complex/float32/ctor' );
var realf = require( '@stdlib/complex/float32/real' );
var unary = require( './../lib/ndarray.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof unary, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 5', function test( t ) {
	t.strictEqual( unary.length, 5, 'arity of 5' );
	t.end();
});

tape( 'the function applies a unary callback to each indexed strided array element', function test( t ) {
	var expected;
	var x;
	var y;

	x = new Float64Array( [ -1.0, -2.0, -3.0, -4.0, -5.0 ] );
	y = new Float64Array( x.length );

	unary( [ x, y ], [ x.length ], [ 1, 1 ], [ 0, 0 ], abs );

	expected = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );

	t.deepEqual( y, expected, 'deep equal' );
	t.end();
});

tape( 'the function applies a unary callback to each indexed strided array element (accessors)', function test( t ) {
	var expected;
	var xbuf;
	var ybuf;
	var x;
	var y;

	xbuf = new Float32Array( [ -1.0, -2.0, -3.0, -4.0, -5.0, -6.0 ] );
	x = new Complex64Array( xbuf.buffer );

	ybuf = new Float32Array( xbuf.length );
	y = new Complex64Array( ybuf.buffer );

	unary( [ x, y ], [ x.length ], [ 1, 1 ], [ 0, 0 ], cidentityf );

	expected = new Float32Array( [ -1.0, -2.0, -3.0, -4.0, -5.0, -6.0 ] );

	t.deepEqual( ybuf, expected, 'deep equal' );
	t.end();
});

tape( 'the function applies a unary callback to each indexed strided array element (input accessors)', function test( t ) {
	var expected;
	var xbuf;
	var x;
	var y;

	xbuf = new Float32Array( [ -1.0, -2.0, -3.0, -4.0, -5.0, -6.0 ] );
	x = new Complex64Array( xbuf.buffer );

	y = new Float32Array( x.length );

	unary( [ x, y ], [ x.length ], [ 1, 1 ], [ 0, 0 ], realf );

	expected = new Float32Array( [ -1.0, -3.0, -5.0 ] );

	t.deepEqual( y, expected, 'deep equal' );
	t.end();
});

tape( 'the function applies a unary callback to each indexed strided array element (output accessors)', function test( t ) {
	var expected;
	var x;
	var y;

	x = new Float64Array( [ -1.0, -2.0, -3.0, -4.0, -5.0, -6.0 ] );
	y = new Float64Array( x.length );
	y.get = getter;
	y.set = setter;

	unary( [ x, y ], [ x.length ], [ 1, 1 ], [ 0, 0 ], abs );

	expected = new Float64Array( [ 2.0, 4.0, 6.0, 8.0, 10.0, 12.0 ] );

	t.deepEqual( new Float64Array( y.buffer ), expected, 'deep equal' );
	t.end();

	function getter( idx ) {
		return y[ idx ];
	}

	function setter( v, idx ) {
		y[ idx ] = v * 2.0;
	}
});

tape( 'the function supports an `x` stride', function test( t ) {
	var expected;
	var x;
	var y;
	var N;

	x = new Float64Array([
		-1.0, // 0
		-2.0,
		-3.0, // 1
		-4.0,
		-5.0  // 2
	]);
	y = new Float64Array([
		0.0, // 0
		0.0, // 1
		0.0, // 2
		0.0,
		0.0
	]);
	N = 3;

	unary( [ x, y ], [ N ], [ 2, 1 ], [ 0, 0 ], abs );

	expected = new Float64Array([
		abs( x[ 0 ] ),
		abs( x[ 2 ] ),
		abs( x[ 4 ] ),
		0.0,
		0.0
	]);

	t.deepEqual( y, expected, 'deep equal' );
	t.end();
});

tape( 'the function supports an `x` stride (accessors)', function test( t ) {
	var expected;
	var xbuf;
	var ybuf;
	var x;
	var y;
	var N;

	xbuf = new Float32Array([
		-1.0, // 0
		-1.0, // 0
		-2.0,
		-2.0,
		-3.0, // 1
		-3.0, // 1
		-4.0,
		-4.0,
		-5.0, // 2
		-5.0  // 2
	]);
	x = new Complex64Array( xbuf );
	ybuf = new Float32Array([
		0.0, // 0
		0.0, // 0
		0.0, // 1
		0.0, // 1
		0.0, // 2
		0.0, // 2
		0.0,
		0.0,
		0.0,
		0.0
	]);
	y = new Complex64Array( ybuf );
	N = 3;

	unary( [ x, y ], [ N ], [ 2, 1 ], [ 0, 0 ], cidentityf );

	expected = new Complex64Array([
		cidentityf( x.get( 0 ) ),
		cidentityf( x.get( 2 ) ),
		cidentityf( x.get( 4 ) ),
		new Complex64( 0.0, 0.0 ),
		new Complex64( 0.0, 0.0 )
	]);

	t.deepEqual( new Float32Array( y.buffer ), new Float32Array( expected.buffer ), 'deep equal' );
	t.end();
});

tape( 'the function supports an `x` offset', function test( t ) {
	var expected;
	var x;
	var y;
	var N;

	x = new Float64Array([
		-1.0,
		-2.0,
		-3.0, // 0
		-4.0, // 1
		-5.0  // 2
	]);
	y = new Float64Array([
		0.0, // 0
		0.0, // 1
		0.0, // 2
		0.0,
		0.0
	]);
	N = 3;

	unary( [ x, y ], [ N ], [ 1, 1 ], [ 2, 0 ], abs );

	expected = new Float64Array([
		abs( x[ 2 ] ),
		abs( x[ 3 ] ),
		abs( x[ 4 ] ),
		0.0,
		0.0
	]);

	t.deepEqual( y, expected, 'deep equal' );
	t.end();
});

tape( 'the function supports an `x` offset (accessors)', function test( t ) {
	var expected;
	var xbuf;
	var ybuf;
	var x;
	var y;
	var N;

	xbuf = new Float32Array([
		-1.0,
		-1.0,
		-2.0,
		-2.0,
		-3.0, // 0
		-3.0, // 0
		-4.0, // 1
		-4.0, // 1
		-5.0, // 2
		-5.0  // 2
	]);
	x = new Complex64Array( xbuf );
	ybuf = new Float32Array([
		0.0, // 0
		0.0, // 0
		0.0, // 1
		0.0, // 1
		0.0, // 2
		0.0, // 2
		0.0,
		0.0,
		0.0,
		0.0
	]);
	y = new Complex64Array( ybuf );
	N = 3;

	unary( [ x, y ], [ N ], [ 1, 1 ], [ 2, 0 ], cidentityf );

	expected = new Complex64Array([
		cidentityf( x.get( 2 ) ),
		cidentityf( x.get( 3 ) ),
		cidentityf( x.get( 4 ) ),
		new Complex64( 0.0, 0.0 ),
		new Complex64( 0.0, 0.0 )
	]);

	t.deepEqual( new Float32Array( y.buffer ), new Float32Array( expected.buffer ), 'deep equal' );
	t.end();
});

tape( 'the function supports a `y` stride', function test( t ) {
	var expected;
	var x;
	var y;
	var N;

	x = new Float64Array([
		-1.0, // 0
		-2.0, // 1
		-3.0, // 2
		-4.0,
		-5.0
	]);
	y = new Float64Array([
		0.0, // 0
		0.0,
		0.0, // 1
		0.0,
		0.0  // 2
	]);
	N = 3;

	unary( [ x, y ], [ N ], [ 1, 2 ], [ 0, 0 ], abs );

	expected = new Float64Array([
		abs( x[ 0 ] ),
		0.0,
		abs( x[ 1 ] ),
		0.0,
		abs( x[ 2 ] )
	]);

	t.deepEqual( y, expected, 'deep equal' );
	t.end();
});

tape( 'the function supports a `y` stride (accessors)', function test( t ) {
	var expected;
	var xbuf;
	var ybuf;
	var x;
	var y;
	var N;

	xbuf = new Float32Array([
		-1.0, // 0
		-1.0, // 0
		-2.0, // 1
		-2.0, // 1
		-3.0, // 2
		-3.0, // 2
		-4.0,
		-4.0,
		-5.0,
		-5.0
	]);
	x = new Complex64Array( xbuf );
	ybuf = new Float32Array([
		0.0, // 0
		0.0, // 0
		0.0,
		0.0,
		0.0, // 1
		0.0, // 1
		0.0,
		0.0,
		0.0, // 2
		0.0  // 2
	]);
	y = new Complex64Array( ybuf );
	N = 3;

	unary( [ x, y ], [ N ], [ 1, 2 ], [ 0, 0 ], cidentityf );

	expected = new Complex64Array([
		cidentityf( x.get( 0 ) ),
		new Complex64( 0.0, 0.0 ),
		cidentityf( x.get( 1 ) ),
		new Complex64( 0.0, 0.0 ),
		cidentityf( x.get( 2 ) )
	]);

	t.deepEqual( new Float32Array( y.buffer ), new Float32Array( expected.buffer ), 'deep equal' );
	t.end();
});

tape( 'the function supports a `y` offset', function test( t ) {
	var expected;
	var x;
	var y;
	var N;

	x = new Float64Array([
		-1.0, // 0
		-2.0, // 1
		-3.0, // 2
		-4.0,
		-5.0
	]);
	y = new Float64Array([
		0.0,
		0.0,
		0.0, // 0
		0.0, // 1
		0.0  // 2
	]);
	N = 3;

	unary( [ x, y ], [ N ], [ 1, 1 ], [ 0, 2 ], abs );

	expected = new Float64Array([
		0.0,
		0.0,
		abs( x[ 0 ] ),
		abs( x[ 1 ] ),
		abs( x[ 2 ] )
	]);

	t.deepEqual( y, expected, 'deep equal' );
	t.end();
});

tape( 'the function supports a `y` offset (accessors)', function test( t ) {
	var expected;
	var xbuf;
	var ybuf;
	var x;
	var y;
	var N;

	xbuf = new Float32Array([
		-1.0, // 0
		-1.0, // 0
		-2.0, // 1
		-2.0, // 1
		-3.0, // 2
		-3.0, // 2
		-4.0,
		-4.0,
		-5.0,
		-5.0
	]);
	x = new Complex64Array( xbuf );
	ybuf = new Float32Array([
		0.0,
		0.0,
		0.0,
		0.0,
		0.0, // 0
		0.0, // 0
		0.0, // 1
		0.0, // 1
		0.0, // 2
		0.0  // 2
	]);
	y = new Complex64Array( ybuf );
	N = 3;

	unary( [ x, y ], [ N ], [ 1, 1 ], [ 0, 2 ], cidentityf );

	expected = new Complex64Array([
		new Complex64( 0.0, 0.0 ),
		new Complex64( 0.0, 0.0 ),
		cidentityf( x.get( 0 ) ),
		cidentityf( x.get( 1 ) ),
		cidentityf( x.get( 2 ) )
	]);

	t.deepEqual( new Float32Array( y.buffer ), new Float32Array( expected.buffer ), 'deep equal' );
	t.end();
});

tape( 'if provided a shape whose only element is less than or equal to `0`, the function returns the destination array unchanged', function test( t ) {
	var expected;
	var x;
	var y;

	x = new Float64Array( [ -1.0, -2.0, -3.0, -4.0, -5.0 ] );
	y = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );

	expected = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );

	unary( [ x, y ], [ -1 ], [ 1, 1 ], [ 0, 0 ], abs );
	t.deepEqual( y, expected, 'returns expected value' );

	unary( [ x, y ], [ 0 ], [ 1, 1 ], [ 0, 0 ], abs );
	t.deepEqual( y, expected, 'returns expected value' );

	t.end();
});

tape( 'if provided a shape whose only element is less than or equal to `0`, the function returns the destination array unchanged (accessors)', function test( t ) {
	var expected;
	var xbuf;
	var ybuf;
	var x;
	var y;

	xbuf = new Float32Array( [ -1.0, -2.0, -3.0, -4.0, -5.0, -6.0 ] );
	x = new Complex64Array( xbuf );

	ybuf = new Float32Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	y = new Complex64Array( ybuf );

	expected = new Float32Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

	unary( [ x, y ], [ -1 ], [ 1, 1 ], [ 0, 0 ], cidentityf );
	t.deepEqual( new Float32Array( y.buffer ), expected, 'returns expected value' );

	unary( [ x, y ], [ 0 ], [ 1, 1 ], [ 0, 0 ], cidentityf );
	t.deepEqual( new Float32Array( y.buffer ), expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports negative strides', function test( t ) {
	var expected;
	var x;
	var y;
	var N;

	x = new Float64Array([
		-1.0, // 2
		-2.0,
		-3.0, // 1
		-4.0,
		-5.0  // 0
	]);
	y = new Float64Array([
		0.0,
		0.0, // 2
		0.0, // 1
		0.0, // 0
		0.0
	]);
	N = 3;

	unary( [ x, y ], [ N ], [ -2, -1 ], [ x.length-1, y.length-2 ], abs );

	expected = new Float64Array([
		0.0,
		abs( x[ 0 ] ),
		abs( x[ 2 ] ),
		abs( x[ 4 ] ),
		0.0
	]);

	t.deepEqual( y, expected, 'deep equal' );
	t.end();
});

tape( 'the function supports negative strides (accessors)', function test( t ) {
	var expected;
	var xbuf;
	var ybuf;
	var x;
	var y;
	var N;

	xbuf = new Float32Array([
		-1.0, // 2
		-1.0, // 2
		-2.0,
		-2.0,
		-3.0, // 1
		-3.0, // 1
		-4.0,
		-4.0,
		-5.0, // 0
		-5.0  // 0
	]);
	x = new Complex64Array( xbuf );
	ybuf = new Float32Array([
		0.0, // 2
		0.0, // 2
		0.0, // 1
		0.0, // 1
		0.0, // 0
		0.0, // 0
		0.0,
		0.0,
		0.0,
		0.0
	]);
	y = new Complex64Array( ybuf );
	N = 3;

	unary( [ x, y ], [ N ], [ -2, -1 ], [ x.length-1, 2 ], cidentityf );

	expected = new Complex64Array([
		cidentityf( x.get( 0 ) ),
		cidentityf( x.get( 2 ) ),
		cidentityf( x.get( 4 ) ),
		new Complex64( 0.0, 0.0 ),
		new Complex64( 0.0, 0.0 )
	]);

	t.deepEqual( new Float32Array( y.buffer ), new Float32Array( expected.buffer ), 'deep equal' );
	t.end();
});

tape( 'the function supports complex access patterns', function test( t ) {
	var expected;
	var x;
	var y;
	var N;

	x = new Float64Array([
		-1.0,
		-2.0, // 0
		-3.0,
		-4.0, // 1
		-5.0,
		-6.0  // 2
	]);
	y = new Float64Array([
		0.0,
		0.0,
		0.0,
		0.0, // 2
		0.0, // 1
		0.0  // 0
	]);
	N = 3;

	unary( [ x, y ], [ N ], [ 2, -1 ], [ 1, y.length-1 ], abs );

	expected = new Float64Array([
		0.0,
		0.0,
		0.0,
		abs( x[ 5 ] ),
		abs( x[ 3 ] ),
		abs( x[ 1 ] )
	]);

	t.deepEqual( y, expected, 'deep equal' );
	t.end();
});

tape( 'the function supports array-like objects', function test( t ) {
	var expected;
	var x;
	var y;
	var N;

	x = {
		'length': 5,
		'0': -1.0, // 0
		'1': -2.0,
		'2': -3.0, // 1
		'3': -4.0,
		'4': -5.0  // 2
	};
	y = {
		'length': 5,
		'0': 0.0, // 0
		'1': 0.0, // 1
		'2': 0.0, // 2
		'3': 0.0,
		'4': 0.0
	};
	N = 3;

	unary( [ x, y ], [ N ], [ 2, 1 ], [ 0, 0 ], abs );

	expected = {
		'length': 5,
		'0': abs( x[ 0 ] ),
		'1': abs( x[ 2 ] ),
		'2': abs( x[ 4 ] ),
		'3': 0.0,
		'4': 0.0
	};

	t.deepEqual( y, expected, 'deep equal' );
	t.end();
});
