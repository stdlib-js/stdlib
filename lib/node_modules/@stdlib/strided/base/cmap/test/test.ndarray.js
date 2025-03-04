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
var cidentityf = require( '@stdlib/math/base/special/cidentityf' );
var Complex64Array = require( '@stdlib/array/complex64' );
var Float32Array = require( '@stdlib/array/float32' );
var Complex64 = require( '@stdlib/complex/float32/ctor' );
var cmap = require( './../lib/ndarray.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof cmap, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 8', function test( t ) {
	t.strictEqual( cmap.length, 8, 'arity of 8' );
	t.end();
});

tape( 'the function applies a function to indexed strided array elements', function test( t ) {
	var expected;
	var xbuf;
	var x;
	var y;
	var i;

	xbuf = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ];
	x = new Complex64Array( xbuf );
	y = new Complex64Array( x.length );

	expected = new Complex64Array( x.length );
	for ( i = 0; i < x.length; i++ ) {
		expected.set( cidentityf( x.get( i ) ), i );
	}

	cmap( x.length, x, 1, 0, y, 1, 0, cidentityf );

	t.deepEqual( new Float32Array( y.buffer ), new Float32Array( expected.buffer ), 'deep equal' );
	t.end();
});

tape( 'the function supports an `x` stride', function test( t ) {
	var expected;
	var xbuf;
	var ybuf;
	var x;
	var y;
	var N;

	xbuf = [
		1.0, // 0
		1.0, // 0
		2.0,
		2.0,
		3.0, // 1
		3.0, // 1
		4.0,
		4.0,
		5.0, // 2
		5.0, // 2
		6.0,
		6.0
	];
	x = new Complex64Array( xbuf );
	ybuf = [
		0.0, // 0
		0.0, // 0
		0.0, // 1
		0.0, // 1
		0.0, // 2
		0.0, // 2
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0
	];
	y = new Complex64Array( ybuf );
	N = 3;

	cmap( N, x, 2, 0, y, 1, 0, cidentityf );

	expected = new Complex64Array([
		cidentityf( x.get( 0 ) ),
		cidentityf( x.get( 2 ) ),
		cidentityf( x.get( 4 ) ),
		new Complex64( 0.0, 0.0 ),
		new Complex64( 0.0, 0.0 ),
		new Complex64( 0.0, 0.0 )
	]);

	t.deepEqual( new Float32Array( y.buffer ), new Float32Array( expected.buffer ), 'deep equal' );
	t.end();
});

tape( 'the function supports an `x` offset', function test( t ) {
	var expected;
	var xbuf;
	var ybuf;
	var x;
	var y;
	var N;

	xbuf = [
		1.0,
		1.0,
		2.0,
		2.0,
		3.0,
		3.0,
		4.0, // 0
		4.0, // 0
		5.0, // 1
		5.0, // 1
		6.0, // 2
		6.0  // 2
	];
	x = new Complex64Array( xbuf );
	ybuf = [
		0.0, // 0
		0.0, // 0
		0.0, // 1
		0.0, // 1
		0.0, // 2
		0.0, // 2
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0
	];
	y = new Complex64Array( ybuf );
	N = 3;

	cmap( N, x, 1, 2, y, 1, 0, cidentityf );

	expected = new Complex64Array([
		cidentityf( x.get( 2 ) ),
		cidentityf( x.get( 3 ) ),
		cidentityf( x.get( 4 ) ),
		new Complex64( 0.0, 0.0 ),
		new Complex64( 0.0, 0.0 ),
		new Complex64( 0.0, 0.0 )
	]);

	t.deepEqual( new Float32Array( y.buffer ), new Float32Array( expected.buffer ), 'deep equal' );
	t.end();
});

tape( 'the function supports a `y` stride', function test( t ) {
	var expected;
	var xbuf;
	var ybuf;
	var x;
	var y;
	var N;

	xbuf = [
		1.0, // 0
		1.0, // 0
		2.0, // 1
		2.0, // 1
		3.0, // 2
		3.0, // 2
		4.0,
		4.0,
		5.0,
		5.0,
		6.0,
		6.0
	];
	x = new Complex64Array( xbuf );
	ybuf = [
		0.0, // 0
		0.0, // 0
		0.0,
		0.0,
		0.0, // 1
		0.0, // 1
		0.0,
		0.0,
		0.0, // 2
		0.0, // 2
		0.0,
		0.0
	];
	y = new Complex64Array( ybuf );
	N = 3;

	cmap( N, x, 1, 0, y, 2, 0, cidentityf );

	expected = new Complex64Array([
		cidentityf( x.get( 0 ) ),
		new Complex64( 0.0, 0.0 ),
		cidentityf( x.get( 1 ) ),
		new Complex64( 0.0, 0.0 ),
		cidentityf( x.get( 2 ) ),
		new Complex64( 0.0, 0.0 )
	]);

	t.deepEqual( new Float32Array( y.buffer ), new Float32Array( expected.buffer ), 'deep equal' );
	t.end();
});

tape( 'the function supports a `y` offset', function test( t ) {
	var expected;
	var xbuf;
	var ybuf;
	var x;
	var y;
	var N;

	xbuf = [
		1.0, // 0
		1.0, // 0
		2.0, // 1
		2.0, // 1
		3.0, // 2
		3.0, // 2
		4.0,
		4.0,
		5.0,
		5.0,
		6.0,
		6.0
	];
	x = new Complex64Array( xbuf );
	ybuf = [
		0.0,
		0.0,
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
	];
	y = new Complex64Array( ybuf );
	N = 3;

	cmap( N, x, 1, 0, y, 1, 3, cidentityf );

	expected = new Complex64Array([
		new Complex64( 0.0, 0.0 ),
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

	x = new Complex64Array( [ -1.0, -2.0, -3.0, -4.0 ] );
	y = new Complex64Array( [ 0.0, 0.0, 0.0, 0.0 ] );

	out = cmap( x.length, x, 1, 0, y, 1, 0, cidentityf );

	t.strictEqual( out, y, 'same reference' );
	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the function returns the destination array unchanged', function test( t ) {
	var expected;
	var x;
	var y;

	x = new Complex64Array( [ -1.0, -2.0, -3.0, -4.0 ] );
	y = new Complex64Array( [ 0.0, 0.0, 0.0, 0.0 ] );

	expected = new Complex64Array( [ 0.0, 0.0, 0.0, 0.0 ] );

	cmap( -1, x, 1, 0, y, 1, 0, cidentityf );
	t.deepEqual( new Float32Array( y.buffer ), new Float32Array( expected.buffer ), 'returns expected value' );

	cmap( 0, x, 1, 0, y, 1, 0, cidentityf );
	t.deepEqual( new Float32Array( y.buffer ), new Float32Array( expected.buffer ), 'returns expected value' );

	t.end();
});

tape( 'the function supports negative strides', function test( t ) {
	var expected;
	var xbuf;
	var ybuf;
	var x;
	var y;
	var N;

	xbuf = [
		1.0, // 2
		1.0, // 2
		2.0,
		2.0,
		3.0, // 1
		3.0, // 1
		4.0,
		4.0,
		5.0, // 0
		5.0, // 0
		6.0,
		6.0
	];
	x = new Complex64Array( xbuf );
	ybuf = [
		0.0,
		0.0,
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
	];
	y = new Complex64Array( ybuf );
	N = 3;

	cmap( N, x, -2, x.length-2, y, -1, 3, cidentityf );

	expected = new Complex64Array([
		new Complex64( 0.0, 0.0 ),
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
	var xbuf;
	var ybuf;
	var x;
	var y;
	var N;

	xbuf = [
		1.0,
		1.0,
		2.0, // 0
		2.0, // 0
		3.0,
		3.0,
		4.0, // 1
		4.0, // 1
		5.0,
		5.0,
		6.0, // 2
		6.0  // 2
	];
	x = new Complex64Array( xbuf );
	ybuf = [
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0, // 2
		0.0, // 2
		0.0, // 1
		0.0, // 1
		0.0, // 0
		0.0  // 0
	];
	y = new Complex64Array( ybuf );
	N = 3;

	cmap( N, x, 2, 1, y, -1, y.length-1, cidentityf );

	expected = new Complex64Array([
		new Complex64( 0.0, 0.0 ),
		new Complex64( 0.0, 0.0 ),
		new Complex64( 0.0, 0.0 ),
		cidentityf( x.get( 5 ) ),
		cidentityf( x.get( 3 ) ),
		cidentityf( x.get( 1 ) )
	]);

	t.deepEqual( new Float32Array( y.buffer ), new Float32Array( expected.buffer ), 'deep equal' );
	t.end();
});
