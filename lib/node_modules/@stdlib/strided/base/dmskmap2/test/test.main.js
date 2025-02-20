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
var Float64Array = require( '@stdlib/array/float64' );
var Uint8Array = require( '@stdlib/array/uint8' );
var dmskmap2 = require( './../lib/main.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof dmskmap2, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 10', function test( t ) {
	t.strictEqual( dmskmap2.length, 10, 'arity of 10' );
	t.end();
});

tape( 'the function applies a function to indexed strided array elements', function test( t ) {
	var expected;
	var x;
	var y;
	var z;
	var m;
	var i;

	x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	y = new Float64Array( [ 1.0, 1.0, 2.0, 2.0, 3.0 ] );
	z = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	m = new Uint8Array( [ 0, 0, 1, 0, 0 ] );

	expected = new Float64Array( x.length );
	for ( i = 0; i < x.length; i++ ) {
		if ( m[ i ] === 0 ) {
			expected[ i ] = add( x[ i ], y[ i ] );
		}
	}

	dmskmap2( x.length, x, 1, y, 1, m, 1, z, 1, add );

	t.deepEqual( z, expected, 'deep equal' );
	t.end();
});

tape( 'the function supports an `x` stride', function test( t ) {
	var expected;
	var x;
	var y;
	var z;
	var m;
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
		1.0, // 1
		2.0, // 2
		2.0,
		3.0
	]);
	m = new Uint8Array([
		0, // 0
		1, // 1
		0, // 2
		0,
		0
	]);
	z = new Float64Array([
		0.0, // 0
		0.0, // 1
		0.0, // 2
		0.0,
		0.0
	]);
	N = 3;

	dmskmap2( N, x, 2, y, 1, m, 1, z, 1, add );

	expected = new Float64Array([
		add( x[ 0 ], y[ 0 ] ),
		0.0,
		add( x[ 4 ], y[ 2 ] ),
		0.0,
		0.0
	]);

	t.deepEqual( z, expected, 'deep equal' );
	t.end();
});

tape( 'the function supports a `y` stride', function test( t ) {
	var expected;
	var x;
	var y;
	var z;
	var m;
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
		1.0,
		2.0, // 1
		2.0,
		3.0  // 2
	]);
	m = new Uint8Array([
		0, // 0
		1, // 1
		0, // 2
		0,
		0
	]);
	z = new Float64Array([
		0.0, // 0
		0.0, // 1
		0.0, // 2
		0.0,
		0.0
	]);
	N = 3;

	dmskmap2( N, x, 1, y, 2, m, 1, z, 1, add );

	expected = new Float64Array([
		add( x[ 0 ], y[ 0 ] ),
		0.0,
		add( x[ 2 ], y[ 4 ] ),
		0.0,
		0.0
	]);

	t.deepEqual( z, expected, 'deep equal' );
	t.end();
});

tape( 'the function supports a `mask` stride', function test( t ) {
	var expected;
	var x;
	var y;
	var z;
	var m;
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
		1.0, // 1
		2.0, // 2
		2.0,
		3.0
	]);
	m = new Uint8Array([
		0, // 0
		0,
		1, // 1
		0,
		0  // 2
	]);
	z = new Float64Array([
		0.0, // 0
		0.0, // 1
		0.0, // 2
		0.0,
		0.0
	]);
	N = 3;

	dmskmap2( N, x, 1, y, 1, m, 2, z, 1, add );

	expected = new Float64Array([
		add( x[ 0 ], y[ 0 ] ),
		0.0,
		add( x[ 2 ], y[ 2 ] ),
		0.0,
		0.0
	]);

	t.deepEqual( z, expected, 'deep equal' );
	t.end();
});

tape( 'the function supports a `z` stride', function test( t ) {
	var expected;
	var x;
	var y;
	var z;
	var m;
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
		1.0, // 1
		2.0, // 2
		2.0,
		3.0
	]);
	m = new Uint8Array([
		0, // 0
		1, // 1
		0, // 2
		0,
		0
	]);
	z = new Float64Array([
		0.0, // 0
		0.0,
		0.0, // 1
		0.0,
		0.0  // 2
	]);
	N = 3;

	dmskmap2( N, x, 1, y, 1, m, 1, z, 2, add );

	expected = new Float64Array([
		add( x[ 0 ], y[ 0 ] ),
		0.0,
		0.0,
		0.0,
		add( x[ 2 ], y[ 2 ] )
	]);

	t.deepEqual( z, expected, 'deep equal' );
	t.end();
});

tape( 'the function returns a reference to the destination array', function test( t ) {
	var out;
	var x;
	var y;
	var z;
	var m;

	x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	y = new Float64Array( [ 1.0, 1.0, 2.0, 2.0, 3.0 ] );
	z = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	m = new Uint8Array( [ 0, 0, 1, 0, 0 ] );

	out = dmskmap2( x.length, x, 1, y, 1, m, 1, z, 1, add );

	t.strictEqual( out, z, 'same reference' );
	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the function returns the output array unchanged', function test( t ) {
	var expected;
	var x;
	var y;
	var z;
	var m;

	x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	y = new Float64Array( [ 1.0, 1.0, 2.0, 2.0, 3.0 ] );
	z = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	m = new Uint8Array( [ 0, 0, 1, 0, 0 ] );

	expected = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );

	dmskmap2( -1, x, 1, y, 1, m, 1, z, 1, add );
	t.deepEqual( z, expected, 'returns expected value' );

	dmskmap2( 0, x, 1, y, 1, m, 1, z, 1, add );
	t.deepEqual( z, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports negative strides', function test( t ) {
	var expected;
	var x;
	var y;
	var z;
	var m;
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
		1.0, // 1
		2.0, // 0
		2.0,
		3.0
	]);
	m = new Uint8Array([
		1, // 2
		0, // 1
		0, // 0
		0,
		0
	]);
	z = new Float64Array([
		0.0, // 2
		0.0,
		0.0, // 1
		0.0,
		0.0  // 0
	]);
	N = 3;

	dmskmap2( N, x, -2, y, -1, m, -1, z, -2, add );

	expected = new Float64Array([
		0.0,
		0.0,
		add( x[ 2 ], y[ 1 ] ),
		0.0,
		add( x[ 4 ], y[ 2 ] )
	]);

	t.deepEqual( z, expected, 'deep equal' );
	t.end();
});

tape( 'the function supports complex access patterns', function test( t ) {
	var expected;
	var x;
	var y;
	var z;
	var m;
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
		1.0,  // 2
		1.0,  // 1
		2.0,  // 0
		2.0,
		3.0,
		3.0
	]);
	m = new Uint8Array([
		0, // 2
		0,
		1, // 1
		0,
		1, // 0
		0
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

	dmskmap2( N, x, 2, y, -1, m, -2, z, -1, add );

	expected = new Float64Array([
		add( x[ 4 ], y[ 0 ] ),
		0.0,
		0.0,
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
	var m0;
	var x1;
	var y1;
	var z1;
	var m1;

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
		1.0,
		2.0,
		2.0, // 0
		3.0, // 1
		3.0  // 2
	]);
	m0 = new Uint8Array([
		0,
		0,
		0, // 0
		1, // 1
		0, // 2
		0
	]);
	z0 = new Float64Array([
		0.0,
		0.0, // 0
		0.0, // 1
		0.0, // 2
		0.0,
		0.0
	]);

	// Create offset views...
	x1 = new Float64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // begin at 2nd element
	y1 = new Float64Array( y0.buffer, y0.BYTES_PER_ELEMENT*3 ); // begin at the 4th element
	z1 = new Float64Array( z0.buffer, z0.BYTES_PER_ELEMENT*1 ); // begin at the 2nd element
	m1 = new Uint8Array( m0.buffer, m0.BYTES_PER_ELEMENT*2 ); // begin at 3rd element

	dmskmap2( 3, x1, -2, y1, 1, m1, 1, z1, 1, add );
	expected = new Float64Array([
		0.0,
		add( x0[ 5 ], y0[ 3 ] ),
		0.0,
		add( x0[ 1 ], y0[ 5 ] ),
		0.0,
		0.0
	]);

	t.deepEqual( z0, expected, 'deep equal' );
	t.end();
});
