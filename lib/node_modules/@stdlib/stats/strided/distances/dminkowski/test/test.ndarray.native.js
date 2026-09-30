/**
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
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
var Float64Array = require( '@stdlib/array/float64' );
var isAlmostSameValue = require( '@stdlib/assert/is-almost-same-value' );
var tryRequire = require( '@stdlib/utils/try-require' );


// VARIABLES //

var dminkowski = tryRequire( resolve( __dirname, './../lib/ndarray.native.js' ) );
var opts = {
	'skip': ( dminkowski instanceof Error )
};


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof dminkowski, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 8', opts, function test( t ) {
	t.strictEqual( dminkowski.length, 8, 'returns expected value' );
	t.end();
});

tape( 'the function calculates the Minkowski distance between two strided arrays', opts, function test( t ) {
	var d;
	var x;
	var y;

	x = new Float64Array( [ 4.0, 2.0, -3.0, 5.0, -1.0, 2.0, -5.0, 6.0 ] );
	y = new Float64Array( [ 2.0, 6.0, -1.0, -4.0, 8.0, 8.0, 2.0, -3.0 ] );

	// Tested against SciPy's `spatial.distances.minkowski`:
	d = dminkowski( x.length, 3, x, 1, 0, y, 1, 0 );
	t.strictEqual( isAlmostSameValue( d, 14.138089258179873, 0 ), true, 'returns expected value' );

	x = new Float64Array( [ 3.0, -4.0, 1.0 ] );
	y = new Float64Array( [ 1.0, -2.0, 3.0 ] );

	// Tested against SciPy's `spatial.distances.minkowski`:
	d = dminkowski( x.length, 3, x, 1, 0, y, 1, 0 );
	t.strictEqual( isAlmostSameValue( d, 2.8844991406148166, 0 ), true, 'returns expected value' );

	t.end();
});

tape( 'if provided a `p` parameter equal to `1`, the function calculates the Cityblock distance between two strided arrays', opts, function test( t ) {
	var d;
	var x;
	var y;

	x = new Float64Array( [ 4.0, 2.0, -3.0, 5.0, -1.0, 2.0, -5.0, 6.0 ] );
	y = new Float64Array( [ 2.0, 6.0, -1.0, -4.0, 8.0, 8.0, 2.0, -3.0 ] );

	// Tested against SciPy's `spatial.distances.minkowski`:
	d = dminkowski( x.length, 1, x, 1, 0, y, 1, 0 );
	t.strictEqual( isAlmostSameValue( d, 48.0, 0 ), true, 'returns expected value' );

	x = new Float64Array( [ 3.0, -4.0, 1.0 ] );
	y = new Float64Array( [ 1.0, -2.0, 3.0 ] );

	// Tested against SciPy's `spatial.distances.minkowski`:
	d = dminkowski( x.length, 1, x, 1, 0, y, 1, 0 );
	t.strictEqual( isAlmostSameValue( d, 6.0, 0 ), true, 'returns expected value' );

	t.end();
});

tape( 'if provided a `p` parameter equal to `2`, the function calculates the Euclidean distance between two strided arrays', opts, function test( t ) {
	var d;
	var x;
	var y;

	x = new Float64Array( [ 4.0, 2.0, -3.0, 5.0, -1.0, 2.0, -5.0, 6.0 ] );
	y = new Float64Array( [ 2.0, 6.0, -1.0, -4.0, 8.0, 8.0, 2.0, -3.0 ] );

	// Tested against SciPy's `spatial.distances.minkowski`:
	d = dminkowski( x.length, 2, x, 1, 0, y, 1, 0 );
	t.strictEqual( isAlmostSameValue( d, 18.76166303929372, 0 ), true, 'returns expected value' );

	x = new Float64Array( [ 3.0, -4.0, 1.0 ] );
	y = new Float64Array( [ 1.0, -2.0, 3.0 ] );

	// Tested against SciPy's `spatial.distances.minkowski`:
	d = dminkowski( x.length, 2, x, 1, 0, y, 1, 0 );
	t.strictEqual( isAlmostSameValue( d, 3.4641016151377544, 0 ), true, 'returns expected value' );

	t.end();
});

tape( 'if provided a `p` parameter equal to `Infinity`, the function calculates the Chebyshev distance between two strided arrays', opts, function test( t ) {
	var d;
	var x;
	var y;

	x = new Float64Array( [ 4.0, 2.0, -3.0, 5.0, -1.0, 2.0, -5.0, 6.0 ] );
	y = new Float64Array( [ 2.0, 6.0, -1.0, -4.0, 8.0, 8.0, 2.0, -3.0 ] );

	// Tested against SciPy's `spatial.distances.minkowski`:
	d = dminkowski( x.length, Infinity, x, 1, 0, y, 1, 0 );
	t.strictEqual( isAlmostSameValue( d, 9.0, 0 ), true, 'returns expected value' );

	x = new Float64Array( [ 3.0, -4.0, 1.0 ] );
	y = new Float64Array( [ 1.0, -2.0, 3.0 ] );

	// Tested against SciPy's `spatial.distances.minkowski`:
	d = dminkowski( x.length, Infinity, x, 1, 0, y, 1, 0 );
	t.strictEqual( isAlmostSameValue( d, 2.0, 0 ), true, 'returns expected value' );

	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the function returns `NaN`', opts, function test( t ) {
	var d;
	var x;
	var y;

	x = new Float64Array( [ 3.0, -4.0, 1.0 ] );
	y = new Float64Array( [ 1.0, -2.0, 3.0 ] );

	d = dminkowski( 0, 3, x, 1, 0, y, 1, 0 );
	t.strictEqual( isAlmostSameValue( d, NaN, 0 ), true, 'returns expected value' );

	d = dminkowski( -4, 4, x, 1, 0, y, 1, 0 );
	t.strictEqual( isAlmostSameValue( d, NaN, 0 ), true, 'returns expected value' );
	t.end();
});

tape( 'the function supports an `x` stride', opts, function test( t ) {
	var d;
	var x;
	var y;

	x = new Float64Array([
		2.0,  // 0
		-3.0,
		-5.0, // 1
		7.0,
		6.0   // 2
	]);
	y = new Float64Array([
		8.0,  // 0
		2.0,  // 1
		-3.0, // 2
		3.0,
		-4.0,
		1.0
	]);

	// Tested against SciPy's `spatial.distances.minkowski`:
	d = dminkowski( 3, 3, x, 2, 0, y, 1, 0 );
	t.strictEqual( isAlmostSameValue( d, 10.880243650829593, 0 ), true, 'returns expected value' );
	t.end();
});

tape( 'the function supports an `x` offset', opts, function test( t ) {
	var d;
	var x;
	var y;

	x = new Float64Array([
		1.0,
		2.0, // 0
		3.0,
		4.0, // 1
		5.0,
		6.0  // 2
	]);
	y = new Float64Array([
		6.0,  // 0
		7.0,  // 1
		8.0,  // 2
		9.0,
		10.0,
		11.0
	]);

	// Tested against SciPy's `spatial.distances.minkowski`:
	d = dminkowski( 3, 3, x, 2, 1, y, 1, 0 );
	t.strictEqual( isAlmostSameValue( d, 4.626065009182741, 0 ), true, 'returns expected value' );
	t.end();
});

tape( 'the function supports a `y` stride', opts, function test( t ) {
	var d;
	var x;
	var y;

	x = new Float64Array([
		2.0,  // 0
		-3.0, // 1
		-5.0, // 2
		7.0,
		6.0
	]);
	y = new Float64Array([
		8.0,  // 0
		2.0,
		-3.0, // 1
		3.0,
		-4.0, // 2
		1.0
	]);

	// Tested against SciPy's `spatial.distances.minkowski`:
	d = dminkowski( 3, 3, x, 1, 0, y, 2, 0 );
	t.strictEqual( isAlmostSameValue( d, 6.009245006917366, 0 ), true, 'returns expected value' );
	t.end();
});

tape( 'the function supports a `y` offset', opts, function test( t ) {
	var d;
	var x;
	var y;

	x = new Float64Array([
		1.0, // 0
		2.0,
		3.0, // 1
		4.0,
		5.0, // 2
		6.0
	]);
	y = new Float64Array([
		6.0,
		7.0,
		8.0,
		9.0,  // 0
		10.0, // 1
		11.0  // 2
	]);

	// Tested against SciPy's `spatial.distances.minkowski`:
	d = dminkowski( 3, 3, x, 2, 0, y, 1, 3 );
	t.strictEqual( isAlmostSameValue( d, 10.23127654683995, 0 ), true, 'returns expected value' );
	t.end();
});

tape( 'the function supports negative strides', opts, function test( t ) {
	var d;
	var x;
	var y;

	x = new Float64Array([
		1.0, // 2
		2.0,
		3.0, // 1
		4.0,
		5.0  // 0
	]);
	y = new Float64Array([
		6.0, // 2
		7.0, // 1
		8.0, // 0
		9.0,
		10.0
	]);

	// Tested against SciPy's `spatial.distances.minkowski`:
	d = dminkowski( 3, 3, x, -2, x.length-1, y, -1, 2 );
	t.strictEqual( isAlmostSameValue( d, 5.999999999999999, 1 ), true, 'returns expected value' );
	t.end();
});

tape( 'the function supports complex access patterns', opts, function test( t ) {
	var d;
	var x;
	var y;

	x = new Float64Array([
		1.0, // 0
		2.0,
		3.0, // 1
		4.0,
		5.0  // 2
	]);
	y = new Float64Array([
		6.0,
		7.0, // 2
		8.0, // 1
		9.0, // 0
		10.0
	]);

	// Tested against SciPy's `spatial.distances.minkowski`:
	d = dminkowski( 3, 3, x, 2, 0, y, -1, y.length-2 );
	t.strictEqual( isAlmostSameValue( d, 8.640122597711688, 0 ), true, 'returns expected value' );
	t.end();
});
