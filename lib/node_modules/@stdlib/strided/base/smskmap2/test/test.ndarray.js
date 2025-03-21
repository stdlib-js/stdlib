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
var addf = require( '@stdlib/number/float32/base/add' );
var Float32Array = require( '@stdlib/array/float32' );
var Uint8Array = require( '@stdlib/array/uint8' );
var smskmap2 = require( './../lib/ndarray.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof smskmap2, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 14', function test( t ) {
	t.strictEqual( smskmap2.length, 14, 'arity of 14' );
	t.end();
});

tape( 'the function applies a function to indexed strided array elements', function test( t ) {
	var expected;
	var x;
	var y;
	var z;
	var m;
	var i;

	x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	y = new Float32Array( [ 1.0, 1.0, 2.0, 2.0, 3.0 ] );
	z = new Float32Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	m = new Uint8Array( [ 0, 0, 1, 0, 0 ] );

	expected = new Float32Array( x.length );
	for ( i = 0; i < x.length; i++ ) {
		if ( m[ i ] === 0 ) {
			expected[ i ] = addf( x[ i ], y[ i ] );
		}
	}

	smskmap2( x.length, x, 1, 0, y, 1, 0, m, 1, 0, z, 1, 0, addf );

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

	x = new Float32Array([
		1.0, // 0
		2.0,
		3.0, // 1
		4.0,
		5.0  // 2
	]);
	y = new Float32Array([
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
	z = new Float32Array([
		0.0, // 0
		0.0, // 1
		0.0, // 2
		0.0,
		0.0
	]);
	N = 3;

	smskmap2( N, x, 2, 0, y, 1, 0, m, 1, 0, z, 1, 0, addf );

	expected = new Float32Array([
		addf( x[ 0 ], y[ 0 ] ),
		0.0,
		addf( x[ 4 ], y[ 2 ] ),
		0.0,
		0.0
	]);

	t.deepEqual( z, expected, 'deep equal' );
	t.end();
});

tape( 'the function supports an `x` offset', function test( t ) {
	var expected;
	var x;
	var y;
	var z;
	var m;
	var N;

	x = new Float32Array([
		1.0,
		2.0,
		3.0, // 0
		4.0, // 1
		5.0  // 2
	]);
	y = new Float32Array([
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
	z = new Float32Array([
		0.0, // 0
		0.0, // 1
		0.0, // 2
		0.0,
		0.0
	]);
	N = 3;

	smskmap2( N, x, 1, 2, y, 1, 0, m, 1, 0, z, 1, 0, addf );

	expected = new Float32Array([
		addf( x[ 2 ], y[ 0 ] ),
		0.0,
		addf( x[ 4 ], y[ 2 ] ),
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

	x = new Float32Array([
		1.0, // 0
		2.0, // 1
		3.0, // 2
		4.0,
		5.0
	]);
	y = new Float32Array([
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
	z = new Float32Array([
		0.0, // 0
		0.0, // 1
		0.0, // 2
		0.0,
		0.0
	]);
	N = 3;

	smskmap2( N, x, 1, 0, y, 2, 0, m, 1, 0, z, 1, 0, addf );

	expected = new Float32Array([
		addf( x[ 0 ], y[ 0 ] ),
		0.0,
		addf( x[ 2 ], y[ 4 ] ),
		0.0,
		0.0
	]);

	t.deepEqual( z, expected, 'deep equal' );
	t.end();
});

tape( 'the function supports a `y` offset', function test( t ) {
	var expected;
	var x;
	var y;
	var z;
	var m;
	var N;

	x = new Float32Array([
		1.0, // 0
		2.0, // 1
		3.0, // 2
		4.0,
		5.0
	]);
	y = new Float32Array([
		1.0,
		1.0, // 0
		2.0, // 1
		2.0, // 2
		3.0
	]);
	m = new Uint8Array([
		0, // 0
		1, // 1
		0, // 2
		0,
		0
	]);
	z = new Float32Array([
		0.0, // 0
		0.0, // 1
		0.0, // 2
		0.0,
		0.0
	]);
	N = 3;

	smskmap2( N, x, 1, 0, y, 1, 1, m, 1, 0, z, 1, 0, addf );

	expected = new Float32Array([
		addf( x[ 0 ], y[ 1 ] ),
		0.0,
		addf( x[ 2 ], y[ 3 ] ),
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

	x = new Float32Array([
		1.0, // 0
		2.0, // 1
		3.0, // 2
		4.0,
		5.0
	]);
	y = new Float32Array([
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
	z = new Float32Array([
		0.0, // 0
		0.0, // 1
		0.0, // 2
		0.0,
		0.0
	]);
	N = 3;

	smskmap2( N, x, 1, 0, y, 1, 0, m, 2, 0, z, 1, 0, addf );

	expected = new Float32Array([
		addf( x[ 0 ], y[ 0 ] ),
		0.0,
		addf( x[ 2 ], y[ 2 ] ),
		0.0,
		0.0
	]);

	t.deepEqual( z, expected, 'deep equal' );
	t.end();
});

tape( 'the function supports a `mask` offset', function test( t ) {
	var expected;
	var x;
	var y;
	var z;
	var m;
	var N;

	x = new Float32Array([
		1.0, // 0
		2.0, // 1
		3.0, // 2
		4.0,
		5.0
	]);
	y = new Float32Array([
		1.0, // 0
		1.0, // 1
		2.0, // 2
		2.0,
		3.0
	]);
	m = new Uint8Array([
		0,
		0, // 0
		1, // 1
		0, // 2
		0
	]);
	z = new Float32Array([
		0.0, // 0
		0.0, // 1
		0.0, // 2
		0.0,
		0.0
	]);
	N = 3;

	smskmap2( N, x, 1, 0, y, 1, 0, m, 1, 1, z, 1, 0, addf );

	expected = new Float32Array([
		addf( x[ 0 ], y[ 0 ] ),
		0.0,
		addf( x[ 2 ], y[ 2 ] ),
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

	x = new Float32Array([
		1.0, // 0
		2.0, // 1
		3.0, // 2
		4.0,
		5.0
	]);
	y = new Float32Array([
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
	z = new Float32Array([
		0.0, // 0
		0.0,
		0.0, // 1
		0.0,
		0.0  // 2
	]);
	N = 3;

	smskmap2( N, x, 1, 0, y, 1, 0, m, 1, 0, z, 2, 0, addf );

	expected = new Float32Array([
		addf( x[ 0 ], y[ 0 ] ),
		0.0,
		0.0,
		0.0,
		addf( x[ 2 ], y[ 2 ] )
	]);

	t.deepEqual( z, expected, 'deep equal' );
	t.end();
});

tape( 'the function supports a `z` offset', function test( t ) {
	var expected;
	var x;
	var y;
	var z;
	var m;
	var N;

	x = new Float32Array([
		1.0, // 0
		2.0, // 1
		3.0, // 2
		4.0,
		5.0
	]);
	y = new Float32Array([
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
	z = new Float32Array([
		0.0,
		0.0,
		0.0, // 0
		0.0, // 1
		0.0  // 2
	]);
	N = 3;

	smskmap2( N, x, 1, 0, y, 1, 0, m, 1, 0, z, 1, 2, addf );

	expected = new Float32Array([
		0.0,
		0.0,
		addf( x[ 0 ], y[ 0 ] ),
		0.0,
		addf( x[ 2 ], y[ 2 ] )
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

	x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	y = new Float32Array( [ 1.0, 1.0, 2.0, 2.0, 3.0 ] );
	z = new Float32Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	m = new Uint8Array( [ 0, 0, 1, 0, 0 ] );

	out = smskmap2( x.length, x, 1, 0, y, 1, 0, m, 1, 0, z, 1, 0, addf );

	t.strictEqual( out, z, 'same reference' );
	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the function returns the destination array', function test( t ) {
	var expected;
	var x;
	var y;
	var z;
	var m;

	x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	y = new Float32Array( [ 1.0, 1.0, 2.0, 2.0, 3.0 ] );
	z = new Float32Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	m = new Uint8Array( [ 0, 0, 1, 0, 0 ] );

	expected = new Float32Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );

	smskmap2( -1, x, 1, 0, y, 1, 0, m, 1, 0, z, 1, 0, addf );
	t.deepEqual( z, expected, 'returns expected value' );

	smskmap2( 0, x, 1, 0, y, 1, 0, m, 1, 0, z, 1, 0, addf );
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

	x = new Float32Array([
		1.0, // 2
		2.0,
		3.0, // 1
		4.0,
		5.0  // 0
	]);
	y = new Float32Array([
		1.0,
		1.0, // 2
		2.0, // 1
		2.0, // 0
		3.0
	]);
	m = new Uint8Array([
		1, // 2
		0, // 1
		0, // 0
		0,
		0
	]);
	z = new Float32Array([
		0.0,
		0.0,
		0.0, // 2
		0.0, // 1
		0.0  // 0
	]);
	N = 3;

	smskmap2( N, x, -2, x.length-1, y, -1, y.length-2, m, -1, m.length-3, z, -1, z.length-1, addf ); // eslint-disable-line max-len

	expected = new Float32Array([
		0.0,
		0.0,
		0.0,
		addf( x[ 2 ], y[ 2 ] ),
		addf( x[ 4 ], y[ 3 ] )
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

	x = new Float32Array([
		1.0,
		2.0, // 0
		3.0,
		4.0, // 1
		5.0,
		6.0  // 2
	]);
	y = new Float32Array([
		1.0,
		1.0,
		2.0,
		2.0, // 2
		3.0, // 1
		3.0  // 0
	]);
	m = new Uint8Array([
		0, // 2
		0,
		1, // 1
		0,
		1, // 0
		0
	]);
	z = new Float32Array([
		0.0,
		0.0, // 2
		0.0,
		0.0, // 1
		0.0,
		0.0  // 0
	]);
	N = 3;

	smskmap2( N, x, 2, 1, y, -1, y.length-1, m, -2, m.length-2, z, -2, z.length-1, addf ); // eslint-disable-line max-len

	expected = new Float32Array([
		0.0,
		addf( x[ 5 ], y[ 3 ] ),
		0.0,
		0.0,
		0.0,
		0.0
	]);

	t.deepEqual( z, expected, 'deep equal' );
	t.end();
});
