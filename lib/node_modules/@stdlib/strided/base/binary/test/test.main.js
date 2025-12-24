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
var add = require( '@stdlib/number/float64/base/add' );
var caddf = require( '@stdlib/complex/float32/base/add' );
var Float64Array = require( '@stdlib/array/float64' );
var Float32Array = require( '@stdlib/array/float32' );
var Complex64Array = require( '@stdlib/array/complex64' );
var Complex64 = require( '@stdlib/complex/float64/ctor' );
var binary = require( './../lib/main.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof binary, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 4', function test( t ) {
	t.strictEqual( binary.length, 4, 'arity of 4' );
	t.end();
});

tape( 'the function applies a binary callback to indexed strided array elements', function test( t ) {
	var expected;
	var x;
	var y;
	var z;

	x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	y = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	z = new Float64Array( x.length );

	binary( [ x, y, z ], [ x.length ], [ 1, 1, 1 ], add );

	expected = new Float64Array( [ 2.0, 4.0, 6.0, 8.0, 10.0 ] );

	t.deepEqual( z, expected, 'deep equal' );
	t.end();
});

tape( 'the function applies a binary callback to each indexed strided array element (accessors)', function test( t ) {
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

	binary( [ x, y, z ], [ x.length ], [ 1, 1, 1 ], caddf );

	expected = new Float32Array( [ 2.0, 4.0, 6.0, 8.0, 10.0, 12.0 ] );

	t.deepEqual( zbuf, expected, 'deep equal' );
	t.end();
});

tape( 'the function applies a binary callback to each indexed strided array element (first input array w accessors)', function test( t ) {
	var expected;
	var x;
	var y;
	var z;

	x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	x.set = setter;
	x.get = getter;

	y = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	z = new Float64Array( x.length );

	binary( [ x, y, z ], [ x.length ], [ 1, 1, 1 ], add );

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

tape( 'the function applies a binary callback to each indexed strided array element (second input array w accessors)', function test( t ) {
	var expected;
	var x;
	var y;
	var z;

	x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );

	y = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	y.set = setter;
	y.get = getter;

	z = new Float64Array( x.length );

	binary( [ x, y, z ], [ x.length ], [ 1, 1, 1 ], add );

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

tape( 'the function applies a binary callback to each indexed strided array element (output array w accessors)', function test( t ) {
	var expected;
	var x;
	var y;
	var z;

	x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	y = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	z = new Float64Array( x.length );
	z.set = setter;
	z.get = getter;

	binary( [ x, y, z ], [ x.length ], [ 1, 1, 1 ], add );

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

	x = new Float64Array([
		1.0, // 0
		2.0,
		3.0, // 1
		4.0,
		5.0  // 2
	]);
	y = new Float64Array([
		1.0, // 0
		2.0, // 1
		3.0, // 2
		4.0,
		5.0
	]);
	z = new Float64Array([
		0.0, // 0
		0.0, // 1
		0.0, // 2
		0.0,
		0.0
	]);
	N = 3;

	binary( [ x, y, z ], [ N ], [ 2, 1, 1 ], add );

	expected = new Float64Array([
		x[ 0 ] + y[ 0 ],
		x[ 2 ] + y[ 1 ],
		x[ 4 ] + y[ 2 ],
		0.0,
		0.0
	]);

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

	binary( [ x, y, z ], [ N ], [ 2, 1, 1 ], caddf );

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

tape( 'the function supports a `y` stride', function test( t ) {
	var expected;
	var x;
	var y;
	var z;
	var N;

	x = new Float64Array([
		1.0, // 0
		2.0, // 1
		3.0, // 2
		4.0,
		5.0
	]);
	y = new Float64Array([
		1.0, // 0
		2.0,
		3.0, // 1
		4.0,
		5.0  // 2
	]);
	z = new Float64Array([
		0.0, // 0
		0.0, // 1
		0.0, // 2
		0.0,
		0.0
	]);
	N = 3;

	binary( [ x, y, z ], [ N ], [ 1, 2, 1 ], add );

	expected = new Float64Array([
		x[ 0 ] + y[ 0 ],
		x[ 1 ] + y[ 2 ],
		x[ 2 ] + y[ 4 ],
		0.0,
		0.0
	]);

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

	binary( [ x, y, z ], [ N ], [ 1, 2, 1 ], caddf );

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

tape( 'the function supports a `z` stride', function test( t ) {
	var expected;
	var x;
	var y;
	var z;
	var N;

	x = new Float64Array([
		1.0, // 0
		2.0, // 1
		3.0, // 2
		4.0,
		5.0
	]);
	y = new Float64Array([
		1.0, // 0
		2.0, // 1
		3.0, // 2
		4.0,
		5.0
	]);
	z = new Float64Array([
		0.0, // 0
		0.0,
		0.0, // 1
		0.0,
		0.0  // 2
	]);
	N = 3;

	binary( [ x, y, z ], [ N ], [ 1, 1, 2 ], add );

	expected = new Float64Array([
		x[ 0 ] + y[ 0 ],
		0.0,
		x[ 1 ] + y[ 1 ],
		0.0,
		x[ 2 ] + y[ 2 ]
	]);

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

	binary( [ x, y, z ], [ N ], [ 1, 1, 2 ], caddf );

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

tape( 'if provided a shape whose only element is less than or equal to `0`, the function leaves the output array unchanged', function test( t ) {
	var expected;
	var x;
	var y;
	var z;

	x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	y = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	z = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );

	expected = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );

	binary( [ x, y, z ], [ -1 ], [ 1, 1, 1 ], add );
	t.deepEqual( z, expected, 'returns expected value' );

	binary( [ x, y, z ], [ 0 ], [ 1, 1, 1 ], add );
	t.deepEqual( z, expected, 'returns expected value' );

	t.end();
});

tape( 'if provided a shape whose only element is less than or equal to `0`, the function leaves the output array unchanged (accessors)', function test( t ) {
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

	binary( [ x, y, z ], [ -1 ], [ 1, 1, 1 ], caddf );
	t.deepEqual( new Float32Array( z.buffer ), expected, 'returns expected value' );

	binary( [ x, y, z ], [ 0 ], [ 1, 1, 1 ], caddf );
	t.deepEqual( new Float32Array( z.buffer ), expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports negative strides', function test( t ) {
	var expected;
	var x;
	var y;
	var z;
	var N;

	x = new Float64Array([
		1.0, // 2
		2.0,
		3.0, // 1
		4.0,
		5.0  // 0
	]);
	y = new Float64Array([
		1.0, // 2
		2.0,
		3.0, // 1
		4.0,
		5.0  // 0
	]);
	z = new Float64Array([
		0.0, // 2
		0.0, // 1
		0.0, // 0
		0.0,
		0.0
	]);
	N = 3;

	binary( [ x, y, z ], [ N ], [ -2, -2, -1 ], add );

	expected = new Float64Array([
		x[ 0 ] + y[ 0 ],
		x[ 2 ] + y[ 2 ],
		x[ 4 ] + y[ 4 ],
		0.0,
		0.0
	]);

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

	binary( [ x, y, z ], [ N ], [ -2, -2, -1 ], caddf );

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

	x = new Float64Array([
		1.0, // 0
		2.0,
		3.0, // 1
		4.0,
		5.0, // 2
		6.0
	]);
	y = new Float64Array([
		1.0, // 0
		2.0,
		3.0, // 1
		4.0,
		5.0, // 2
		6.0
	]);
	z = new Float64Array([
		0.0,  // 2
		0.0,  // 1
		0.0,  // 0
		0.0,
		0.0,
		0.0
	]);
	N = 3;

	binary( [ x, y, z ], [ N ], [ 2, 2, -1 ], add );

	expected = new Float64Array([
		x[ 4 ] + y[ 4 ],
		x[ 2 ] + y[ 2 ],
		x[ 0 ] + y[ 0 ],
		0.0,
		0.0,
		0.0
	]);

	t.deepEqual( z, expected, 'deep equal' );
	t.end();
});

tape( 'the function supports view offsets', function test( t ) {
	var expected;
	var x0;
	var y0;
	var z0;
	var x1;
	var y1;
	var z1;
	var N;

	// Initial arrays...
	x0 = new Float64Array([
		1.0,
		2.0, // 2
		3.0,
		4.0, // 1
		5.0,
		6.0  // 0
	]);
	y0 = new Float64Array([
		1.0,
		2.0, // 2
		3.0,
		4.0, // 1
		5.0,
		6.0  // 0
	]);
	z0 = new Float64Array([
		0.0,
		0.0,
		0.0,
		0.0, // 0
		0.0, // 1
		0.0  // 2
	]);

	// Create offset views...
	x1 = new Float64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // begin at 2nd element
	y1 = new Float64Array( y0.buffer, y0.BYTES_PER_ELEMENT*1 ); // begin at 2nd element
	z1 = new Float64Array( z0.buffer, z0.BYTES_PER_ELEMENT*3 ); // begin at the 4th element

	N = 3;

	binary( [ x1, y1, z1 ], [ N ], [ -2, -2, 1 ], add );
	expected = new Float64Array([
		0.0,
		0.0,
		0.0,
		x0[ 5 ] + y0[ 5 ],
		x0[ 3 ] + y0[ 3 ],
		x0[ 1 ] + y0[ 1 ]
	]);

	t.deepEqual( z0, expected, 'deep equal' );
	t.end();
});

tape( 'the function supports array-like objects', function test( t ) {
	var expected;
	var x;
	var y;
	var z;
	var N;

	x = {
		'length': 5,
		'0': 1.0, // 0
		'1': 2.0,
		'2': 3.0, // 1
		'3': 4.0,
		'4': 5.0  // 2
	};
	y = {
		'length': 5,
		'0': 1.0, // 0
		'1': 2.0,
		'2': 3.0, // 1
		'3': 4.0,
		'4': 5.0  // 2
	};
	z = {
		'length': 5,
		'0': 0.0, // 0
		'1': 0.0, // 1
		'2': 0.0, // 2
		'3': 0.0,
		'4': 0.0
	};
	N = 3;

	binary( [ x, y, z ], [ N ], [ 2, 2, 1 ], add );

	expected = {
		'length': 5,
		'0': x[ 0 ] + y[ 0 ],
		'1': x[ 2 ] + y[ 2 ],
		'2': x[ 4 ] + y[ 4 ],
		'3': 0.0,
		'4': 0.0
	};

	t.deepEqual( z, expected, 'deep equal' );
	t.end();
});
