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
var cidentity = require( '@stdlib/math/base/special/cidentity' );
var Complex128Array = require( '@stdlib/array/complex128' );
var Float64Array = require( '@stdlib/array/float64' );
var Complex128 = require( '@stdlib/complex/float64/ctor' );
var zmap = require( './../lib/ndarray.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof zmap, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 8', function test( t ) {
	t.strictEqual( zmap.length, 8, 'arity of 8' );
	t.end();
});

tape( 'the function applies a function to indexed strided array elements', function test( t ) {
	var expected;
	var xbuf;
	var x;
	var y;
	var i;

	xbuf = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ];
	x = new Complex128Array( xbuf );
	y = new Complex128Array( x.length );

	expected = new Complex128Array( x.length );
	for ( i = 0; i < x.length; i++ ) {
		expected.set( cidentity( x.get( i ) ), i );
	}

	zmap( x.length, x, 1, 0, y, 1, 0, cidentity );

	t.deepEqual( new Float64Array( y.buffer ), new Float64Array( expected.buffer ), 'deep equal' );
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
	x = new Complex128Array( xbuf );
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
	y = new Complex128Array( ybuf );
	N = 3;

	zmap( N, x, 2, 0, y, 1, 0, cidentity );

	expected = new Complex128Array([
		cidentity( x.get( 0 ) ),
		cidentity( x.get( 2 ) ),
		cidentity( x.get( 4 ) ),
		new Complex128( 0.0, 0.0 ),
		new Complex128( 0.0, 0.0 ),
		new Complex128( 0.0, 0.0 )
	]);

	t.deepEqual( new Float64Array( y.buffer ), new Float64Array( expected.buffer ), 'deep equal' );
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
	x = new Complex128Array( xbuf );
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
	y = new Complex128Array( ybuf );
	N = 3;

	zmap( N, x, 1, 2, y, 1, 0, cidentity );

	expected = new Complex128Array([
		cidentity( x.get( 2 ) ),
		cidentity( x.get( 3 ) ),
		cidentity( x.get( 4 ) ),
		new Complex128( 0.0, 0.0 ),
		new Complex128( 0.0, 0.0 ),
		new Complex128( 0.0, 0.0 )
	]);

	t.deepEqual( new Float64Array( y.buffer ), new Float64Array( expected.buffer ), 'deep equal' );
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
	x = new Complex128Array( xbuf );
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
	y = new Complex128Array( ybuf );
	N = 3;

	zmap( N, x, 1, 0, y, 2, 0, cidentity );

	expected = new Complex128Array([
		cidentity( x.get( 0 ) ),
		new Complex128( 0.0, 0.0 ),
		cidentity( x.get( 1 ) ),
		new Complex128( 0.0, 0.0 ),
		cidentity( x.get( 2 ) ),
		new Complex128( 0.0, 0.0 )
	]);

	t.deepEqual( new Float64Array( y.buffer ), new Float64Array( expected.buffer ), 'deep equal' );
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
	x = new Complex128Array( xbuf );
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
	y = new Complex128Array( ybuf );
	N = 3;

	zmap( N, x, 1, 0, y, 1, 3, cidentity );

	expected = new Complex128Array([
		new Complex128( 0.0, 0.0 ),
		new Complex128( 0.0, 0.0 ),
		new Complex128( 0.0, 0.0 ),
		cidentity( x.get( 0 ) ),
		cidentity( x.get( 1 ) ),
		cidentity( x.get( 2 ) )
	]);

	t.deepEqual( new Float64Array( y.buffer ), new Float64Array( expected.buffer ), 'deep equal' );
	t.end();
});

tape( 'the function returns a reference to the destination array', function test( t ) {
	var out;
	var x;
	var y;

	x = new Complex128Array( [ -1.0, -2.0, -3.0, -4.0 ] );
	y = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0 ] );

	out = zmap( x.length, x, 1, 0, y, 1, 0, cidentity );

	t.strictEqual( out, y, 'same reference' );
	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the function returns the destination array unchanged', function test( t ) {
	var expected;
	var x;
	var y;

	x = new Complex128Array( [ -1.0, -2.0, -3.0, -4.0 ] );
	y = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0 ] );

	expected = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0 ] );

	zmap( -1, x, 1, 0, y, 1, 0, cidentity );
	t.deepEqual( new Float64Array( y.buffer ), new Float64Array( expected.buffer ), 'returns expected value' );

	zmap( 0, x, 1, 0, y, 1, 0, cidentity );
	t.deepEqual( new Float64Array( y.buffer ), new Float64Array( expected.buffer ), 'returns expected value' );

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
	x = new Complex128Array( xbuf );
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
	y = new Complex128Array( ybuf );
	N = 3;

	zmap( N, x, -2, x.length-2, y, -1, 3, cidentity );

	expected = new Complex128Array([
		new Complex128( 0.0, 0.0 ),
		cidentity( x.get( 0 ) ),
		cidentity( x.get( 2 ) ),
		cidentity( x.get( 4 ) ),
		new Complex128( 0.0, 0.0 ),
		new Complex128( 0.0, 0.0 )
	]);

	t.deepEqual( new Float64Array( y.buffer ), new Float64Array( expected.buffer ), 'deep equal' );
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
	x = new Complex128Array( xbuf );
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
	y = new Complex128Array( ybuf );
	N = 3;

	zmap( N, x, 2, 1, y, -1, y.length-1, cidentity );

	expected = new Complex128Array([
		new Complex128( 0.0, 0.0 ),
		new Complex128( 0.0, 0.0 ),
		new Complex128( 0.0, 0.0 ),
		cidentity( x.get( 5 ) ),
		cidentity( x.get( 3 ) ),
		cidentity( x.get( 1 ) )
	]);

	t.deepEqual( new Float64Array( y.buffer ), new Float64Array( expected.buffer ), 'deep equal' );
	t.end();
});
