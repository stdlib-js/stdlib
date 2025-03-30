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

var resolve = require( 'path' ).resolve;
var tape = require( 'tape' );
var isnanf = require( '@stdlib/math/base/assert/is-nanf' );
var isNegativeZerof = require( '@stdlib/math/base/assert/is-negative-zerof' );
var Float32Array = require( '@stdlib/array/float32' );
var tryRequire = require( '@stdlib/utils/try-require' );


// VARIABLES //

var scumin = tryRequire( resolve( __dirname, './../lib/ndarray.native.js' ) );
var opts = {
	'skip': ( scumin instanceof Error )
};


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof scumin, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 7', opts, function test( t ) {
	t.strictEqual( scumin.length, 7, 'has expected arity' );
	t.end();
});

tape( 'the function calculates the cumulative minimum', opts, function test( t ) {
	var expected;
	var x;
	var y;
	var i;

	x = new Float32Array( [ 1.0, -2.0, 3.0, -4.0, 5.0 ] );
	y = new Float32Array( x.length );
	scumin( x.length, x, 1, 0, y, 1, 0 );

	expected = new Float32Array([
		1.0,
		-2.0,
		-2.0,
		-4.0,
		-4.0
	]);
	t.deepEqual( y, expected, 'returns expected value' );

	x = new Float32Array( [ 0.0, -0.0, 0.0 ] );
	y = new Float32Array( x.length );
	scumin( x.length, x, 1, 0, y, 1, 0 );

	expected = new Float32Array([
		0.0,
		-0.0,
		0.0
	]);
	for ( i = 0; i < y.length; i++ ) {
		if ( isNegativeZerof( expected[ i ] ) ) {
			t.strictEqual( isNegativeZerof( y[ i ] ), true, 'returns expected value. i: ' + i );
		} else {
			t.strictEqual( y[ i ], expected[ i ], true, 'returns expected value. i: ' + i );
		}
	}

	x = new Float32Array( [ NaN ] );
	y = new Float32Array( x.length );
	scumin( x.length, x, 1, 0, y, 1, 0 );

	for ( i = 0; i < y.length; i++ ) {
		t.strictEqual( isnanf( y[ i ] ), true, 'returns expected value. i: ' + i );
	}

	x = new Float32Array( [ NaN, NaN ] );
	y = new Float32Array( x.length );
	scumin( x.length, x, 1, 0, y, 1, 0 );

	for ( i = 0; i < y.length; i++ ) {
		t.strictEqual( isnanf( y[ i ] ), true, 'returns expected value. i: ' + i );
	}

	x = new Float32Array( [ 1.0, NaN, 3.0, NaN ] );
	y = new Float32Array( x.length );
	scumin( x.length, x, 1, 0, y, 1, 0 );

	expected = new Float32Array([
		1.0,
		NaN,
		NaN,
		NaN
	]);
	for ( i = 0; i < y.length; i++ ) {
		if ( isnanf( expected[ i ] ) ) {
			t.strictEqual( isnanf( y[ i ] ), true, 'returns expected value. i: ' + i );
		} else {
			t.strictEqual( y[ i ], expected[ i ], true, 'returns expected value. i: ' + i );
		}
	}
	t.end();
});

tape( 'the function returns a reference to the output array', opts, function test( t ) {
	var out;
	var x;
	var y;

	x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	y = new Float32Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );

	out = scumin( x.length, x, 1, 0, y, 1, 0 );
	t.strictEqual( out, y, 'same reference' );

	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the function returns `y` unchanged', opts, function test( t ) {
	var expected;
	var x;
	var y;

	x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	y = new Float32Array( [ 6.0, 7.0, 8.0, 9.0, 10.0 ] );

	expected = new Float32Array( [ 6.0, 7.0, 8.0, 9.0, 10.0 ] );

	scumin( -1, x, 1, 0, y, 1, 0 );
	t.deepEqual( y, expected, 'returns `y` unchanged' );

	scumin( 0, x, 1, 0, y, 1, 0 );
	t.deepEqual( y, expected, 'returns `y` unchanged' );

	t.end();
});

tape( 'the function supports an `x` stride', opts, function test( t ) {
	var expected;
	var x;
	var y;

	x = new Float32Array([
		1.0,  // 0
		-2.0,
		3.0,  // 1
		4.0,
		-5.0  // 2
	]);
	y = new Float32Array([
		0.0, // 0
		0.0, // 1
		0.0, // 2
		0.0,
		0.0
	]);

	scumin( 3, x, 2, 0, y, 1, 0 );

	expected = new Float32Array( [ 1.0, 1.0, -5.0, 0.0, 0.0 ] );
	t.deepEqual( y, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports a `y` stride', opts, function test( t ) {
	var expected;
	var x;
	var y;

	x = new Float32Array([
		1.0,  // 0
		-2.0, // 1
		3.0,  // 2
		4.0,
		5.0
	]);
	y = new Float32Array([
		0.0, // 0
		0.0,
		0.0, // 1
		0.0,
		0.0  // 2
	]);

	scumin( 3, x, 1, 0, y, 2, 0 );

	expected = new Float32Array( [ 1.0, 0.0, -2.0, 0.0, -2.0 ] );
	t.deepEqual( y, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports negative strides', opts, function test( t ) {
	var expected;
	var x;
	var y;

	x = new Float32Array([
		1.0,  // 2
		-2.0,
		3.0,  // 1
		4.0,
		-5.0  // 0
	]);
	y = new Float32Array([
		0.0, // 2
		0.0, // 1
		0.0, // 0
		0.0,
		0.0
	]);

	scumin( 3, x, -2, x.length-1, y, -1, 2 );

	expected = new Float32Array( [ -5.0, -5.0, -5.0, 0.0, 0.0 ] );
	t.deepEqual( y, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports an `x` offset', opts, function test( t ) {
	var expected;
	var x;
	var y;

	x = new Float32Array([
		2.0,
		1.0,  // 0
		2.0,
		-2.0, // 1
		-2.0,
		2.0,  // 2
		3.0,
		4.0   // 3
	]);
	y = new Float32Array([
		0.0, // 0
		0.0, // 1
		0.0, // 2
		0.0, // 3
		0.0,
		0.0,
		0.0,
		0.0
	]);

	scumin( 4, x, 2, 1, y, 1, 0 );

	expected = new Float32Array( [ 1.0, -2.0, -2.0, -2.0, 0.0, 0.0, 0.0, 0.0 ] ); // eslint-disable-line max-len
	t.deepEqual( y, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports a `y` offset', opts, function test( t ) {
	var expected;
	var x;
	var y;

	x = new Float32Array([
		2.0,  // 0
		1.0,  // 1
		2.0,  // 2
		-2.0, // 3
		-2.0,
		2.0,
		3.0,
		4.0
	]);
	y = new Float32Array([
		0.0,
		0.0, // 0
		0.0,
		0.0, // 1
		0.0,
		0.0, // 2
		0.0,
		0.0  // 3
	]);

	scumin( 4, x, 1, 0, y, 2, 1 );

	expected = new Float32Array( [ 0.0, 2.0, 0.0, 1.0, 0.0, 1.0, 0.0, -2.0 ] );
	t.deepEqual( y, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports complex access patterns', opts, function test( t ) {
	var expected;
	var x;
	var y;

	x = new Float32Array([
		1.0,  // 0
		2.0,
		-3.0, // 1
		4.0,
		5.0,  // 2
		6.0
	]);
	y = new Float32Array([
		0.0,  // 2
		0.0,  // 1
		0.0,  // 0
		0.0,
		0.0,
		0.0
	]);

	scumin( 3, x, 2, 0, y, -1, 2 );

	expected = new Float32Array( [ -3.0, -3.0, 1.0, 0.0, 0.0, 0.0 ] );
	t.deepEqual( y, expected, 'returns expected value' );

	t.end();
});
