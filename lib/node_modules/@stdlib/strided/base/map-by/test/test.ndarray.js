/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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
var Float32Array = require( '@stdlib/array/float32' );
var Complex64Array = require( '@stdlib/array/complex64' );
var Complex64 = require( '@stdlib/complex/float32/ctor' );
var realf = require( '@stdlib/complex/float32/real' );
var imagf = require( '@stdlib/complex/float32/imag' );
var mapBy = require( './../lib/ndarray.js' );


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
	t.strictEqual( typeof mapBy, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 10', function test( t ) {
	t.strictEqual( mapBy.length, 10, 'arity of 10' );
	t.end();
});

tape( 'the function applies a function to each indexed strided array element according to a callback function', function test( t ) {
	var expected;
	var x;
	var y;

	x = [ -1.0, -2.0, -3.0, -4.0, -5.0 ];
	y = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];

	expected = [ 2.0, 4.0, 6.0, 8.0, 10.0 ];

	mapBy( x.length, x, 1, 0, y, 1, 0, abs, accessor );
	t.deepEqual( y, expected, 'deep equal' );

	x = new Array( 5 ); // sparse array
	y = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];

	expected = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];

	mapBy( x.length, x, 1, 0, y, 1, 0, abs, accessor );
	t.deepEqual( y, expected, 'deep equal' );

	x[ 2 ] = -3.0; // sparse array
	y = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];

	expected = y.slice();
	expected[ 2 ] = 6.0;

	mapBy( x.length, x, 1, 0, y, 1, 0, abs, accessor );
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

	mapBy( x.length, x, 1, 0, y, 1, 0, scale, cidentityf );
	t.deepEqual( ybuf, expected, 'deep equal' );

	// Accessor/non-accessor:
	xbuf = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	x = new Complex64Array( xbuf.buffer );

	y = new Float32Array( x.length );

	expected = [ 1.0, 3.0, 5.0 ];

	mapBy( x.length, x, 1, 0, y, 1, 0, realf, cidentityf );
	t.deepEqual( y, expected, 'deep equal' );

	// Non-accessor/accessor:
	x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	y = new Float32Array( x.length );
	y.get = getter;
	y.set = setter;

	expected = new Float32Array( [ 2.0, 4.0, 6.0, 8.0, 10.0, 12.0 ] );

	mapBy( x.length, x, 1, 0, y, 1, 0, identityf, identityf );
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

	mapBy( N, x, 2, 0, y, 1, 0, abs, accessor );

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

	mapBy( N, x, 2, 0, y, 1, 0, cidentityf, cidentityf );

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

	x = [
		-1.0,
		-2.0,
		-3.0, // 0
		-4.0, // 1
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

	mapBy( N, x, 1, 2, y, 1, 0, abs, accessor );

	expected = [
		abs( x[ 2 ] * 2.0 ),
		abs( x[ 3 ] * 2.0 ),
		abs( x[ 4 ] * 2.0 ),
		0.0,
		0.0
	];

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

	mapBy( N, x, 1, 2, y, 1, 0, cidentityf, cidentityf );

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

	mapBy( N, x, 1, 0, y, 2, 0, abs, accessor );

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

	mapBy( N, x, 1, 0, y, 2, 0, cidentityf, cidentityf );

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

	x = [
		-1.0, // 0
		-2.0, // 1
		-3.0, // 2
		-4.0,
		-5.0
	];
	y = [
		0.0,
		0.0,
		0.0, // 0
		0.0, // 1
		0.0  // 2
	];
	N = 3;

	mapBy( N, x, 1, 0, y, 1, 2, abs, accessor );

	expected = [
		0.0,
		0.0,
		abs( x[ 0 ] * 2.0 ),
		abs( x[ 1 ] * 2.0 ),
		abs( x[ 2 ] * 2.0 )
	];

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

	mapBy( N, x, 1, 0, y, 1, 2, cidentityf, cidentityf );

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

tape( 'the function returns a reference to the destination array', function test( t ) {
	var out;
	var x;
	var y;

	x = [ -1.0, -2.0, -3.0, -4.0, -5.0 ];
	y = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];

	out = mapBy( x.length, x, 1, 0, y, 1, 0, abs, accessor );

	t.strictEqual( out, y, 'same reference' );
	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the function returns the destination array unchanged', function test( t ) {
	var expected;
	var x;
	var y;

	x = [ -1.0, -2.0, -3.0, -4.0, -5.0 ];
	y = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];

	expected = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];

	mapBy( -1, x, 1, 0, y, 1, 0, abs, accessor );
	t.deepEqual( y, expected, 'returns expected value' );

	mapBy( 0, x, 1, 0, y, 1, 0, abs, accessor );
	t.deepEqual( y, expected, 'returns expected value' );

	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the function returns the destination array unchanged (accessors)', function test( t ) {
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

	mapBy( -1, x, 1, 0, y, 1, 0, cidentityf, cidentityf );
	t.deepEqual( new Float32Array( y.buffer ), expected, 'returns expected value' );

	mapBy( 0, x, 1, 0, y, 1, 0, cidentityf, cidentityf );
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
		0.0,
		0.0, // 2
		0.0, // 1
		0.0, // 0
		0.0
	];
	N = 3;

	mapBy( N, x, -2, x.length-1, y, -1, y.length-2, abs, accessor );

	expected = [
		0.0,
		abs( x[ 0 ] * 2.0 ),
		abs( x[ 2 ] * 2.0 ),
		abs( x[ 4 ] * 2.0 ),
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

	mapBy( N, x, -2, x.length-1, y, -1, 2, cidentityf, cidentityf );

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
		-1.0,
		-2.0, // 0
		-3.0,
		-4.0, // 1
		-5.0,
		-6.0  // 2
	];
	y = [
		0.0,
		0.0,
		0.0,
		0.0, // 2
		0.0, // 1
		0.0  // 0
	];
	N = 3;

	mapBy( N, x, 2, 1, y, -1, y.length-1, abs, accessor );

	expected = [
		0.0,
		0.0,
		0.0,
		abs( x[ 5 ] * 2.0 ),
		abs( x[ 3 ] * 2.0 ),
		abs( x[ 1 ] * 2.0 )
	];

	t.deepEqual( y, expected, 'deep equal' );
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
	mapBy( x.length, x, 1, 0, y, 1, 0, abs, accessor, ctx );

	t.strictEqual( ctx.count, x.length, 'returns expected value' );
	t.end();

	function accessor( v ) {
		this.count += 1; // eslint-disable-line no-invalid-this
		return v * 2.0;
	}
});
