/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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
var identityf = require( '@stdlib/math/base/special/identityf' );
var Float64Array = require( '@stdlib/array/float64' );
var Float32Array = require( '@stdlib/array/float32' );
var Complex64Array = require( '@stdlib/array/complex64' );
var Complex64 = require( '@stdlib/complex/float32/ctor' );
var realf = require( '@stdlib/complex/float32/real' );
var imagf = require( '@stdlib/complex/float32/imag' );
var unaryBy = require( './../lib/main.js' );


// FUNCTIONS //

function accessor( v ) {
	if ( v === void 0 ) {
		return;
	}
	return v * 2.0;
}

function scale( v ) {
	var re = realf( v );
	var im = imagf( v );
	return new Complex64( re*2.0, im*2.0 );
}


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof unaryBy, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 5', function test( t ) {
	t.strictEqual( unaryBy.length, 5, 'arity of 5' );
	t.end();
});

tape( 'the function applies a function to each indexed strided array element according to a callback function', function test( t ) {
	var expected;
	var x;
	var y;

	x = [ -1.0, -2.0, -3.0, -4.0, -5.0 ];
	y = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];

	expected = [ 2.0, 4.0, 6.0, 8.0, 10.0 ];

	unaryBy( [ x, y ], [ x.length ], [ 1, 1 ], abs, accessor );
	t.deepEqual( y, expected, 'deep equal' );

	x = new Array( 5 ); // sparse array
	y = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];

	expected = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];

	unaryBy( [ x, y ], [ x.length ], [ 1, 1 ], abs, accessor );
	t.deepEqual( y, expected, 'deep equal' );

	x[ 2 ] = -3.0; // sparse array
	y = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];

	expected = y.slice();
	expected[ 2 ] = 6.0;

	unaryBy( [ x, y ], [ x.length ], [ 1, 1 ], abs, accessor );
	t.deepEqual( y, expected, 'deep equal' );

	t.end();
});

tape( 'the function applies a function to each indexed strided array element according to a callback function (accessors)', function test( t ) {
	var expected;
	var xbuf;
	var ybuf;
	var x;
	var y;

	// Two accessor arrays:
	xbuf = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	x = new Complex64Array( xbuf.buffer );

	ybuf = new Float32Array( xbuf.length );
	y = new Complex64Array( ybuf.buffer );

	expected = [ 2.0, 4.0, 6.0, 8.0, 10.0, 12.0 ];

	unaryBy( [ x, y ], [ x.length ], [ 1, 1 ], scale, cidentityf );
	t.deepEqual( ybuf, expected, 'deep equal' );

	// Accessor/non-accessor:
	xbuf = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	x = new Complex64Array( xbuf.buffer );

	y = new Float32Array( x.length );

	expected = [ 1.0, 3.0, 5.0 ];

	unaryBy( [ x, y ], [ x.length ], [ 1, 1 ], realf, cidentityf );
	t.deepEqual( y, expected, 'deep equal' );

	// Non-accessor/accessor:
	x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	y = new Float32Array( x.length );
	y.get = getter;
	y.set = setter;

	expected = new Float32Array( [ 2.0, 4.0, 6.0, 8.0, 10.0, 12.0 ] );

	unaryBy( [ x, y ], [ x.length ], [ 1, 1 ], identityf, identityf );
	t.deepEqual( new Float32Array( y.buffer ), expected, 'deep equal' );

	t.end();

	function getter( i ) {
		return y[ i ];
	}

	function setter( value, i ) {
		y[ i ] = value * 2.0;
	}
});

tape( 'the function supports an `x` stride', function test( t ) {
	var expected;
	var x;
	var y;
	var N;

	x = [
		-1.0, // 0
		-2.0,
		-3.0, // 1
		-4.0,
		-5.0  // 2
	];
	y = [
		0.0, // 0
		0.0, // 1
		0.0, // 2
		0.0,
		0.0
	];
	N = 3;

	unaryBy( [ x, y ], [ N ], [ 2, 1 ], abs, accessor );

	expected = [
		abs( x[ 0 ] * 2.0 ),
		abs( x[ 2 ] * 2.0 ),
		abs( x[ 4 ] * 2.0 ),
		0.0,
		0.0
	];

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

	unaryBy( [ x, y ], [ N ], [ 2, 1 ], cidentityf, cidentityf );

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

tape( 'the function supports a `y` stride', function test( t ) {
	var expected;
	var x;
	var y;
	var N;

	x = [
		-1.0, // 0
		-2.0, // 1
		-3.0, // 2
		-4.0,
		-5.0
	];
	y = [
		0.0, // 0
		0.0,
		0.0, // 1
		0.0,
		0.0  // 2
	];
	N = 3;

	unaryBy( [ x, y ], [ N ], [ 1, 2 ], abs, accessor );

	expected = [
		abs( x[ 0 ] * 2.0 ),
		0.0,
		abs( x[ 1 ] * 2.0 ),
		0.0,
		abs( x[ 2 ] * 2.0 )
	];

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

	unaryBy( [ x, y ], [ N ], [ 1, 2 ], cidentityf, cidentityf );

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

tape( 'if provided a shape whose only element is less than or equal to `0`, the function returns the destination array unchanged', function test( t ) {
	var expected;
	var x;
	var y;

	x = [ -1.0, -2.0, -3.0, -4.0, -5.0 ];
	y = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];

	expected = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];

	unaryBy( [ x, y ], [ -1 ], [ 1, 1 ], abs, accessor );
	t.deepEqual( y, expected, 'returns expected value' );

	unaryBy( [ x, y ], [ 0 ], [ 1, 1 ], abs, accessor );
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

	unaryBy( [ x, y ], [ -1 ], [ 1, 1 ], cidentityf, cidentityf );
	t.deepEqual( new Float32Array( y.buffer ), expected, 'returns expected value' );

	unaryBy( [ x, y ], [ 0 ], [ 1, 1 ], cidentityf, cidentityf );
	t.deepEqual( new Float32Array( y.buffer ), expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports negative strides', function test( t ) {
	var expected;
	var x;
	var y;
	var N;

	x = [
		-1.0, // 2
		-2.0,
		-3.0, // 1
		-4.0,
		-5.0  // 0
	];
	y = [
		0.0, // 2
		0.0, // 1
		0.0, // 0
		0.0,
		0.0
	];
	N = 3;

	unaryBy( [ x, y ], [ N ], [ -2, -1 ], abs, accessor );

	expected = [
		abs( x[ 0 ] * 2.0 ),
		abs( x[ 2 ] * 2.0 ),
		abs( x[ 4 ] * 2.0 ),
		0.0,
		0.0
	];

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

	unaryBy( [ x, y ], [ N ], [ -2, -1 ], cidentityf, cidentityf );

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

	x = [
		-1.0, // 0
		-2.0,
		-3.0, // 1
		-4.0,
		-5.0, // 2
		-6.0
	];
	y = [
		0.0,  // 2
		0.0,  // 1
		0.0,  // 0
		0.0,
		0.0,
		0.0
	];
	N = 3;

	unaryBy( [ x, y ], [ N ], [ 2, -1 ], abs, accessor );

	expected = [
		abs( x[ 4 ] * 2.0 ),
		abs( x[ 2 ] * 2.0 ),
		abs( x[ 0 ] * 2.0 ),
		0.0,
		0.0,
		0.0
	];

	t.deepEqual( y, expected, 'deep equal' );
	t.end();
});

tape( 'the function supports view offsets', function test( t ) {
	var expected;
	var x0;
	var y0;
	var x1;
	var y1;
	var N;

	// Initial arrays...
	x0 = new Float64Array([
		-1.0,
		-2.0, // 2
		-3.0,
		-4.0, // 1
		-5.0,
		-6.0  // 0
	]);
	y0 = new Float64Array([
		0.0,
		0.0,
		0.0,
		0.0, // 0
		0.0, // 1
		0.0  // 2
	]);

	// Create offset views...
	x1 = new Float64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // begin at 2nd element
	y1 = new Float64Array( y0.buffer, y0.BYTES_PER_ELEMENT*3 ); // begin at the 4th element

	N = 3;

	unaryBy( [ x1, y1 ], [ N ], [ -2, 1 ], abs, accessor );
	expected = new Float64Array([
		0.0,
		0.0,
		0.0,
		abs( x0[ 5 ] * 2.0 ),
		abs( x0[ 3 ] * 2.0 ),
		abs( x0[ 1 ] * 2.0 )
	]);

	t.deepEqual( y0, expected, 'deep equal' );
	t.end();
});

tape( 'the function supports providing a callback execution context', function test( t ) {
	var ctx;
	var x;
	var y;

	x = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];
	y = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];
	ctx = {
		'count': 0
	};
	unaryBy( [ x, y ], [ x.length ], [ 1, 1 ], abs, accessor, ctx );

	t.strictEqual( ctx.count, x.length, 'returns expected value' );
	t.end();

	function accessor( v ) {
		this.count += 1; // eslint-disable-line no-invalid-this
		return v * 2.0;
	}
});
