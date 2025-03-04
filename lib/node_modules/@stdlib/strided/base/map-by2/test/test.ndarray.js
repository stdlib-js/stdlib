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
var add = require( '@stdlib/number/float64/base/add' );
var caddf = require( '@stdlib/complex/float32/base/add' );
var identity = require( '@stdlib/math/base/special/identity' );
var cidentityf = require( '@stdlib/math/base/special/cidentityf' );
var Float64Array = require( '@stdlib/array/float64' );
var Float32Array = require( '@stdlib/array/float32' );
var Complex64Array = require( '@stdlib/array/complex64' );
var Complex64 = require( '@stdlib/complex/float64/ctor' );
var mapBy2 = require( './../lib/ndarray.js' );


// FUNCTIONS //

function accessor( values ) {
	if ( values[ 0 ] === void 0 || values[ 1 ] === void 0 ) {
		return;
	}
	values[ 0 ] *= 2.0;
	values[ 1 ] *= 2.0;
	return values;
}


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof mapBy2, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 13', function test( t ) {
	t.strictEqual( mapBy2.length, 13, 'arity of 13' );
	t.end();
});

tape( 'the function applies a binary function to indexed strided array elements according to a callback function', function test( t ) {
	var expected;
	var x;
	var y;
	var z;

	x = [ -1.0, -2.0, -3.0, -4.0, -5.0 ];
	y = [ 1.0, 1.0, 2.0, 2.0, 3.0 ];
	z = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];

	expected = [ 0.0, -2.0, -2.0, -4.0, -4.0 ];

	mapBy2( x.length, x, 1, 0, y, 1, 0, z, 1, 0, add, accessor );
	t.deepEqual( z, expected, 'deep equal' );

	x = new Array( 5 ); // sparse array
	y = [ 1.0, 1.0, 2.0, 2.0, 3.0 ];
	z = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];

	expected = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];

	mapBy2( x.length, x, 1, 0, y, 1, 0, z, 1, 0, add, accessor );
	t.deepEqual( z, expected, 'deep equal' );

	x[ 2 ] = -3.0; // sparse array
	y = [ 1.0, 1.0, 2.0, 2.0, 3.0 ];
	z = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];

	expected = z.slice();
	expected[ 2 ] = -2.0;

	mapBy2( x.length, x, 1, 0, y, 1, 0, z, 1, 0, add, accessor );
	t.deepEqual( z, expected, 'deep equal' );

	t.end();
});

tape( 'the function applies a binary function to indexed strided array elements according to a callback function (accessors)', function test( t ) {
	var expected;
	var xbuf;
	var ybuf;
	var zbuf;
	var x;
	var y;
	var z;

	xbuf = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	x = new Complex64Array( xbuf.buffer );

	ybuf = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	y = new Complex64Array( ybuf.buffer );

	zbuf = new Float32Array( xbuf.length );
	z = new Complex64Array( zbuf.buffer );

	mapBy2( x.length, x, 1, 0, y, 1, 0, z, 1, 0, caddf, cidentityf );

	expected = new Float32Array( [ 2.0, 4.0, 6.0, 8.0, 10.0, 12.0 ] );

	t.deepEqual( zbuf, expected, 'deep equal' );
	t.end();
});

tape( 'the function applies a binary function to indexed strided array elements according to a callback function (first input array w accessors)', function test( t ) {
	var expected;
	var x;
	var y;
	var z;

	x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	x.set = setter;
	x.get = getter;

	y = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	z = new Float64Array( x.length );

	mapBy2( x.length, x, 1, 0, y, 1, 0, z, 1, 0, add, identity );

	expected = new Float64Array( [ 3.0, 6.0, 9.0, 12.0, 15.0, 18.0 ] );

	t.deepEqual( z, expected, 'deep equal' );
	t.end();

	function getter( idx ) {
		return x[ idx ] * 2.0;
	}

	function setter( v, idx ) {
		x[ idx ] = v;
	}
});

tape( 'the function applies a binary function to indexed strided array elements according to a callback function (second input array w accessors)', function test( t ) {
	var expected;
	var x;
	var y;
	var z;

	x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );

	y = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	y.set = setter;
	y.get = getter;

	z = new Float64Array( x.length );

	mapBy2( x.length, x, 1, 0, y, 1, 0, z, 1, 0, add, identity );

	expected = new Float64Array( [ 3.0, 6.0, 9.0, 12.0, 15.0, 18.0 ] );

	t.deepEqual( z, expected, 'deep equal' );
	t.end();

	function getter( idx ) {
		return y[ idx ] * 2.0;
	}

	function setter( v, idx ) {
		y[ idx ] = v;
	}
});

tape( 'the function applies a binary function to indexed strided array elements according to a callback function (output array w accessors)', function test( t ) {
	var expected;
	var x;
	var y;
	var z;

	x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	y = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	z = new Float64Array( x.length );
	z.set = setter;
	z.get = getter;

	mapBy2( x.length, x, 1, 0, y, 1, 0, z, 1, 0, add, identity );

	expected = new Float64Array( [ 4.0, 8.0, 12.0, 16.0, 20.0, 24.0 ] );

	t.deepEqual( new Float64Array( z.buffer ), expected, 'deep equal' );
	t.end();

	function getter( idx ) {
		return z[ idx ];
	}

	function setter( v, idx ) {
		z[ idx ] = v * 2.0;
	}
});

tape( 'the function supports an `x` stride', function test( t ) {
	var expected;
	var x;
	var y;
	var z;
	var N;

	x = [
		-1.0, // 0
		-2.0,
		-3.0, // 1
		-4.0,
		-5.0  // 2
	];
	y = [
		1.0, // 0
		1.0, // 1
		2.0, // 2
		2.0,
		3.0
	];
	z = [
		0.0, // 0
		0.0, // 1
		0.0, // 2
		0.0,
		0.0
	];
	N = 3;

	mapBy2( N, x, 2, 0, y, 1, 0, z, 1, 0, add, accessor );

	expected = [
		add( x[0]*2.0, y[0]*2.0 ),
		add( x[2]*2.0, y[1]*2.0 ),
		add( x[4]*2.0, y[2]*2.0 ),
		0.0,
		0.0
	];

	t.deepEqual( z, expected, 'deep equal' );
	t.end();
});

tape( 'the function supports an `x` stride (accessors)', function test( t ) {
	var expected;
	var xbuf;
	var ybuf;
	var zbuf;
	var x;
	var y;
	var z;
	var N;

	xbuf = new Float32Array([
		1.0, // 0
		1.0, // 0
		2.0,
		2.0,
		3.0, // 1
		3.0, // 1
		4.0,
		4.0,
		5.0, // 2
		5.0  // 2
	]);
	x = new Complex64Array( xbuf );
	ybuf = new Float32Array([
		1.0, // 0
		1.0, // 0
		2.0, // 1
		2.0, // 1
		3.0, // 2
		3.0, // 2
		4.0,
		4.0,
		5.0,
		5.0
	]);
	y = new Complex64Array( ybuf );
	zbuf = new Float32Array([
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
	z = new Complex64Array( zbuf );
	N = 3;

	mapBy2( N, x, 2, 0, y, 1, 0, z, 1, 0, caddf, cidentityf );

	expected = new Complex64Array([
		caddf( x.get( 0 ), y.get( 0 ) ),
		caddf( x.get( 2 ), y.get( 1 ) ),
		caddf( x.get( 4 ), y.get( 2 ) ),
		new Complex64( 0.0, 0.0 ),
		new Complex64( 0.0, 0.0 )
	]);

	t.deepEqual( new Float32Array( z.buffer ), new Float32Array( expected.buffer ), 'deep equal' );
	t.end();
});

tape( 'the function supports an `x` offset', function test( t ) {
	var expected;
	var x;
	var y;
	var z;
	var N;

	x = [
		-1.0,
		-2.0,
		-3.0, // 0
		-4.0, // 1
		-5.0  // 2
	];
	y = [
		1.0, // 0
		1.0, // 1
		2.0, // 2
		2.0,
		3.0
	];
	z = [
		0.0, // 0
		0.0, // 1
		0.0, // 2
		0.0,
		0.0
	];
	N = 3;

	mapBy2( N, x, 1, 2, y, 1, 0, z, 1, 0, add, accessor );

	expected = [
		add( x[2]*2.0, y[0]*2.0 ),
		add( x[3]*2.0, y[1]*2.0 ),
		add( x[4]*2.0, y[2]*2.0 ),
		0.0,
		0.0
	];

	t.deepEqual( z, expected, 'deep equal' );
	t.end();
});

tape( 'the function supports an `x` offset (accessors)', function test( t ) {
	var expected;
	var xbuf;
	var ybuf;
	var zbuf;
	var x;
	var y;
	var z;
	var N;

	xbuf = new Float32Array([
		1.0,
		1.0,
		2.0,
		2.0,
		3.0, // 0
		3.0, // 0
		4.0, // 1
		4.0, // 1
		5.0, // 2
		5.0  // 2
	]);
	x = new Complex64Array( xbuf );
	ybuf = new Float32Array([
		1.0, // 0
		1.0, // 0
		2.0, // 1
		2.0, // 1
		3.0, // 2
		3.0, // 2
		4.0,
		4.0,
		5.0,
		5.0
	]);
	y = new Complex64Array( ybuf );
	zbuf = new Float32Array([
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
	z = new Complex64Array( zbuf );
	N = 3;

	mapBy2( N, x, 1, 2, y, 1, 0, z, 1, 0, caddf, cidentityf );

	expected = new Complex64Array([
		caddf( x.get( 2 ), y.get( 0 ) ),
		caddf( x.get( 3 ), y.get( 1 ) ),
		caddf( x.get( 4 ), y.get( 2 ) ),
		new Complex64( 0.0, 0.0 ),
		new Complex64( 0.0, 0.0 )
	]);

	t.deepEqual( new Float32Array( z.buffer ), new Float32Array( expected.buffer ), 'deep equal' );
	t.end();
});

tape( 'the function supports a `y` stride', function test( t ) {
	var expected;
	var x;
	var y;
	var z;
	var N;

	x = [
		-1.0, // 0
		-2.0, // 1
		-3.0, // 2
		-4.0,
		-5.0
	];
	y = [
		1.0, // 0
		1.0,
		2.0, // 1
		2.0,
		3.0  // 2
	];
	z = [
		0.0, // 0
		0.0, // 1
		0.0, // 2
		0.0,
		0.0
	];
	N = 3;

	mapBy2( N, x, 1, 0, y, 2, 0, z, 1, 0, add, accessor );

	expected = [
		add( x[0]*2.0, y[0]*2.0 ),
		add( x[1]*2.0, y[2]*2.0 ),
		add( x[2]*2.0, y[4]*2.0 ),
		0.0,
		0.0
	];

	t.deepEqual( z, expected, 'deep equal' );
	t.end();
});

tape( 'the function supports a `y` stride (accessors)', function test( t ) {
	var expected;
	var xbuf;
	var ybuf;
	var zbuf;
	var x;
	var y;
	var z;
	var N;

	xbuf = new Float32Array([
		1.0, // 0
		1.0, // 0
		2.0, // 1
		2.0, // 1
		3.0, // 2
		3.0, // 2
		4.0,
		4.0,
		5.0,
		5.0
	]);
	x = new Complex64Array( xbuf );
	ybuf = new Float32Array([
		1.0, // 0
		1.0, // 0
		2.0,
		2.0,
		3.0, // 1
		3.0, // 1
		4.0,
		4.0,
		5.0, // 2
		5.0  // 2
	]);
	y = new Complex64Array( ybuf );
	zbuf = new Float32Array([
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
	z = new Complex64Array( zbuf );
	N = 3;

	mapBy2( N, x, 1, 0, y, 2, 0, z, 1, 0, caddf, cidentityf );

	expected = new Complex64Array([
		caddf( x.get( 0 ), y.get( 0 ) ),
		caddf( x.get( 1 ), y.get( 2 ) ),
		caddf( x.get( 2 ), y.get( 4 ) ),
		new Complex64( 0.0, 0.0 ),
		new Complex64( 0.0, 0.0 )
	]);

	t.deepEqual( new Float32Array( z.buffer ), new Float32Array( expected.buffer ), 'deep equal' );
	t.end();
});

tape( 'the function supports a `y` offset', function test( t ) {
	var expected;
	var x;
	var y;
	var z;
	var N;

	x = [
		-1.0, // 0
		-2.0, // 1
		-3.0, // 2
		-4.0,
		-5.0
	];
	y = [
		1.0,
		1.0,
		2.0, // 0
		2.0, // 1
		3.0  // 2
	];
	z = [
		0.0, // 0
		0.0, // 1
		0.0, // 2
		0.0,
		0.0
	];
	N = 3;

	mapBy2( N, x, 1, 0, y, 1, 2, z, 1, 0, add, accessor );

	expected = [
		add( x[0]*2.0, y[2]*2.0 ),
		add( x[1]*2.0, y[3]*2.0 ),
		add( x[2]*2.0, y[4]*2.0 ),
		0.0,
		0.0
	];

	t.deepEqual( z, expected, 'deep equal' );
	t.end();
});

tape( 'the function supports a `y` offset (accessors)', function test( t ) {
	var expected;
	var xbuf;
	var ybuf;
	var zbuf;
	var x;
	var y;
	var z;
	var N;

	xbuf = new Float32Array([
		1.0, // 0
		1.0, // 0
		2.0, // 1
		2.0, // 1
		3.0, // 2
		3.0, // 2
		4.0,
		4.0,
		5.0,
		5.0
	]);
	x = new Complex64Array( xbuf );
	ybuf = new Float32Array([
		1.0,
		1.0,
		2.0,
		2.0,
		3.0, // 0
		3.0, // 0
		4.0, // 1
		4.0, // 1
		5.0, // 2
		5.0  // 2
	]);
	y = new Complex64Array( ybuf );
	zbuf = new Float32Array([
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
	z = new Complex64Array( zbuf );
	N = 3;

	mapBy2( N, x, 1, 0, y, 1, 2, z, 1, 0, caddf, cidentityf );

	expected = new Complex64Array([
		caddf( x.get( 0 ), y.get( 2 ) ),
		caddf( x.get( 1 ), y.get( 3 ) ),
		caddf( x.get( 2 ), y.get( 4 ) ),
		new Complex64( 0.0, 0.0 ),
		new Complex64( 0.0, 0.0 )
	]);

	t.deepEqual( new Float32Array( z.buffer ), new Float32Array( expected.buffer ), 'deep equal' );
	t.end();
});

tape( 'the function supports a `z` stride', function test( t ) {
	var expected;
	var x;
	var y;
	var z;
	var N;

	x = [
		-1.0, // 0
		-2.0, // 1
		-3.0, // 2
		-4.0,
		-5.0
	];
	y = [
		1.0, // 0
		1.0, // 1
		2.0, // 2
		2.0,
		3.0
	];
	z = [
		0.0, // 0
		0.0,
		0.0, // 1
		0.0,
		0.0  // 2
	];
	N = 3;

	mapBy2( N, x, 1, 0, y, 1, 0, z, 2, 0, add, accessor );

	expected = [
		add( x[0]*2.0, y[0]*2.0 ),
		0.0,
		add( x[1]*2.0, y[1]*2.0 ),
		0.0,
		add( x[2]*2.0, y[2]*2.0 )
	];

	t.deepEqual( z, expected, 'deep equal' );
	t.end();
});

tape( 'the function supports a `z` stride (accessors)', function test( t ) {
	var expected;
	var xbuf;
	var ybuf;
	var zbuf;
	var x;
	var y;
	var z;
	var N;

	xbuf = new Float32Array([
		1.0, // 0
		1.0, // 0
		2.0, // 1
		2.0, // 1
		3.0, // 2
		3.0, // 2
		4.0,
		4.0,
		5.0,
		5.0
	]);
	x = new Complex64Array( xbuf );
	ybuf = new Float32Array([
		1.0, // 0
		1.0, // 0
		2.0, // 1
		2.0, // 1
		3.0, // 2
		3.0, // 2
		4.0,
		4.0,
		5.0,
		5.0
	]);
	y = new Complex64Array( ybuf );
	zbuf = new Float32Array([
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
	z = new Complex64Array( zbuf );
	N = 3;

	mapBy2( N, x, 1, 0, y, 1, 0, z, 2, 0, caddf, cidentityf );

	expected = new Complex64Array([
		caddf( x.get( 0 ), y.get( 0 ) ),
		new Complex64( 0.0, 0.0 ),
		caddf( x.get( 1 ), y.get( 1 ) ),
		new Complex64( 0.0, 0.0 ),
		caddf( x.get( 2 ), y.get( 2 ) )
	]);

	t.deepEqual( new Float32Array( z.buffer ), new Float32Array( expected.buffer ), 'deep equal' );
	t.end();
});

tape( 'the function supports a `z` offset', function test( t ) {
	var expected;
	var x;
	var y;
	var z;
	var N;

	x = [
		-1.0, // 0
		-2.0, // 1
		-3.0, // 2
		-4.0,
		-5.0
	];
	y = [
		1.0, // 0
		1.0, // 1
		2.0, // 2
		2.0,
		3.0
	];
	z = [
		0.0,
		0.0,
		0.0, // 0
		0.0, // 1
		0.0  // 2
	];
	N = 3;

	mapBy2( N, x, 1, 0, y, 1, 0, z, 1, 2, add, accessor );

	expected = [
		0.0,
		0.0,
		add( x[0]*2.0, y[0]*2.0 ),
		add( x[1]*2.0, y[1]*2.0 ),
		add( x[2]*2.0, y[2]*2.0 )
	];

	t.deepEqual( z, expected, 'deep equal' );
	t.end();
});

tape( 'the function supports a `z` offset (accessors)', function test( t ) {
	var expected;
	var xbuf;
	var ybuf;
	var zbuf;
	var x;
	var y;
	var z;
	var N;

	xbuf = new Float32Array([
		1.0, // 0
		1.0, // 0
		2.0, // 1
		2.0, // 1
		3.0, // 2
		3.0, // 2
		4.0,
		4.0,
		5.0,
		5.0
	]);
	x = new Complex64Array( xbuf );
	ybuf = new Float32Array([
		1.0, // 0
		1.0, // 0
		2.0, // 1
		2.0, // 1
		3.0, // 2
		3.0, // 2
		4.0,
		4.0,
		5.0,
		5.0
	]);
	y = new Complex64Array( ybuf );
	zbuf = new Float32Array([
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
	z = new Complex64Array( zbuf );
	N = 3;

	mapBy2( N, x, 1, 0, y, 1, 0, z, 1, 2, caddf, cidentityf );

	expected = new Complex64Array([
		new Complex64( 0.0, 0.0 ),
		new Complex64( 0.0, 0.0 ),
		caddf( x.get( 0 ), y.get( 0 ) ),
		caddf( x.get( 1 ), y.get( 1 ) ),
		caddf( x.get( 2 ), y.get( 2 ) )
	]);

	t.deepEqual( new Float32Array( z.buffer ), new Float32Array( expected.buffer ), 'deep equal' );
	t.end();
});

tape( 'the function returns a reference to the destination array', function test( t ) {
	var out;
	var x;
	var y;
	var z;

	x = [ -1.0, -2.0, -3.0, -4.0, -5.0 ];
	y = [ 1.0, 1.0, 2.0, 2.0, 3.0 ];
	z = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];

	out = mapBy2( x.length, x, 1, 0, y, 1, 0, z, 1, 0, add, accessor );

	t.strictEqual( out, z, 'same reference' );
	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the function returns destination array unchanged', function test( t ) {
	var expected;
	var x;
	var y;
	var z;

	x = [ -1.0, -2.0, -3.0, -4.0, -5.0 ];
	y = [ 1.0, 1.0, 2.0, 2.0, 3.0 ];
	z = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];

	expected = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];

	mapBy2( -1, x, 1, 0, y, 1, 0, z, 1, 0, add, accessor );
	t.deepEqual( z, expected, 'returns expected value' );

	mapBy2( 0, x, 1, 0, y, 1, 0, z, 1, 0, add, accessor );
	t.deepEqual( z, expected, 'returns expected value' );

	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the function returns destination array unchanged (accessors)', function test( t ) {
	var expected;
	var xbuf;
	var ybuf;
	var zbuf;
	var x;
	var y;
	var z;

	xbuf = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	x = new Complex64Array( xbuf );

	ybuf = new Float32Array( [ 1.0, 1.0, 1.0, 1.0, 1.0, 1.0 ] );
	y = new Complex64Array( ybuf );

	zbuf = new Float32Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	z = new Complex64Array( zbuf );

	expected = new Float32Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

	mapBy2( -1, x, 1, 0, y, 1, 0, z, 1, 0, caddf, cidentityf );
	t.deepEqual( new Float32Array( z.buffer ), expected, 'returns expected value' );

	mapBy2( 0, x, 1, 0, y, 1, 0, z, 1, 0, caddf, cidentityf );
	t.deepEqual( new Float32Array( z.buffer ), expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports negative strides', function test( t ) {
	var expected;
	var x;
	var y;
	var z;
	var N;

	x = [
		-1.0, // 2
		-2.0,
		-3.0, // 1
		-4.0,
		-5.0  // 0
	];
	y = [
		2.0,
		3.0, // 2
		4.0, // 1
		5.0, // 0
		6.0
	];
	z = [
		0.0,
		0.0,
		0.0, // 2
		0.0, // 1
		0.0  // 0
	];
	N = 3;

	mapBy2( N, x, -2, x.length-1, y, -1, y.length-2, z, -1, z.length-1, add, accessor ); // eslint-disable-line max-len

	expected = [
		0.0,
		0.0,
		add( x[0]*2.0, y[1]*2.0 ),
		add( x[2]*2.0, y[2]*2.0 ),
		add( x[4]*2.0, y[3]*2.0 )
	];

	t.deepEqual( z, expected, 'deep equal' );
	t.end();
});

tape( 'the function supports negative strides (accessors)', function test( t ) {
	var expected;
	var xbuf;
	var ybuf;
	var zbuf;
	var x;
	var y;
	var z;
	var N;

	xbuf = new Float32Array([
		1.0, // 2
		1.0, // 2
		2.0,
		2.0,
		3.0, // 1
		3.0, // 1
		4.0,
		4.0,
		5.0, // 0
		5.0  // 0
	]);
	x = new Complex64Array( xbuf );
	ybuf = new Float32Array([
		1.0, // 2
		1.0, // 2
		2.0,
		2.0,
		3.0, // 1
		3.0, // 1
		4.0,
		4.0,
		5.0, // 0
		5.0  // 0
	]);
	y = new Complex64Array( ybuf );
	zbuf = new Float32Array([
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
	z = new Complex64Array( zbuf );
	N = 3;

	mapBy2( N, x, -2, x.length-1, y, -2, y.length-1, z, -1, 2, caddf, cidentityf ); // eslint-disable-line max-len

	expected = new Complex64Array([
		caddf( x.get( 0 ), y.get( 0 ) ),
		caddf( x.get( 2 ), y.get( 2 ) ),
		caddf( x.get( 4 ), y.get( 4 ) ),
		new Complex64( 0.0, 0.0 ),
		new Complex64( 0.0, 0.0 )
	]);

	t.deepEqual( new Float32Array( z.buffer ), new Float32Array( expected.buffer ), 'deep equal' );
	t.end();
});

tape( 'the function supports complex access patterns', function test( t ) {
	var expected;
	var x;
	var y;
	var z;
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
		1.0, // 2
		1.0, // 1
		2.0, // 0
		2.0,
		3.0,
		3.0
	];
	z = [
		0.0, // 2
		0.0,
		0.0, // 1
		0.0,
		0.0, // 0
		0.0
	];
	N = 3;

	mapBy2( N, x, 2, 1, y, -1, 2, z, -2, z.length-2, add, accessor );

	expected = [
		add( x[5]*2.0, y[0]*2.0 ),
		0.0,
		add( x[3]*2.0, y[1]*2.0 ),
		0.0,
		add( x[1]*2.0, y[2]*2.0 ),
		0.0
	];

	t.deepEqual( z, expected, 'deep equal' );
	t.end();
});

tape( 'the function supports providing a callback execution context', function test( t ) {
	var ctx;
	var x;
	var y;
	var z;

	x = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];
	y = [ 1.0, 1.0, 2.0, 2.0, 3.0 ];
	z = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];
	ctx = {
		'count': 0
	};
	mapBy2( x.length, x, 1, 0, y, 1, 0, z, 1, 0, add, accessor, ctx );

	t.strictEqual( ctx.count, x.length, 'returns expected value' );
	t.end();

	function accessor( values ) {
		this.count += 1; // eslint-disable-line no-invalid-this
		values[ 0 ] *= 2.0;
		values[ 1 ] *= 2.0;
		return values;
	}
});
