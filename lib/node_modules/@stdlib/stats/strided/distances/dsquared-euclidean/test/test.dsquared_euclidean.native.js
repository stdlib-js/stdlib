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

var dsquaredEuclidean = tryRequire( resolve( __dirname, './../lib/dsquared_euclidean.native.js' ) );
var opts = {
	'skip': ( dsquaredEuclidean instanceof Error )
};


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof dsquaredEuclidean, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 5', opts, function test( t ) {
	t.strictEqual( dsquaredEuclidean.length, 5, 'returns expected value' );
	t.end();
});

tape( 'the function calculates the squared Euclidean distance', opts, function test( t ) {
	var x;
	var y;
	var z;

	x = new Float64Array( [ 1.0, -2.0, -4.0, 5.0, 0.0, 3.0 ] );
	y = new Float64Array( [ 5.0, 12.0, -8.0, 15.0, 9.0, 0.0 ] );

	z = dsquaredEuclidean( x.length, x, 1, y, 1 );

	// 16+196+16+100+81+9 = 418
	t.strictEqual( isAlmostSameValue( z, 418.0, 1 ), true, 'returns expected value' );

	x = new Float64Array( [ -4.0 ] );
	y = new Float64Array( [ 10.0 ] );

	z = dsquaredEuclidean( x.length, x, 1, y, 1 );
	t.strictEqual( isAlmostSameValue( z, 196.0, 1 ), true, 'returns expected value' );

	x = new Float64Array( [ 1.0e10, 1.0e10, 1.0e10, 1.0e10 ] );
	y = new Float64Array( [ -1.0e10, 1.0e10, -1.0e10, -1.0e10 ] );

	z = dsquaredEuclidean( x.length, x, 1, y, 1 );
	t.strictEqual( isAlmostSameValue( z, 1.2e+21, 1 ), true, 'returns expected value' );

	x = new Float64Array( [ 1.0e-15, 1.0e-15, 1.0e-15, 1.0e-15 ] );
	y = new Float64Array( [ -1.0e-15, -1.0e-15, -1.0e-15, -1.0e-15 ] );

	z = dsquaredEuclidean( x.length, x, 1, y, 1 );
	t.strictEqual( isAlmostSameValue( z, 1.6e-29, 1 ), true, 'returns expected value' );

	x = new Float64Array( [ 1.0e10, 1.0e5, 1.0e10, 1.0e5 ] );
	y = new Float64Array( [ -1.0e10, -1.0e5, -1.0e10, -1.0e5 ] );

	z = dsquaredEuclidean( x.length, x, 1, y, 1 );
	t.strictEqual( isAlmostSameValue( z, 8.0000000008e+20, 1 ), true, 'returns expected value' );

	x = new Float64Array( [ 1.0e-15, 1.0e5, 1.0e-15, 1.0e5 ] );
	y = new Float64Array( [ -1.0e-15, -1.0e5, -1.0e-15, -1.0e5 ] );

	z = dsquaredEuclidean( x.length, x, 1, y, 1 );
	t.strictEqual( isAlmostSameValue( z, 80000000000.0, 1 ), true, 'returns expected value' );

	x = new Float64Array( [ 1.4e-14, 1.5e-14, 1.4e-14, 0.0 ] );
	y = new Float64Array( [ -1.4e-14, -1.5e-14, -1.4e-14, 0.0 ] );

	z = dsquaredEuclidean( x.length, x, 1, y, 1 );
	t.strictEqual( isAlmostSameValue( z, 2.468e-27, 1 ), true, 'returns expected value' );

	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the function returns `NaN`', opts, function test( t ) {
	var x;
	var y;
	var z;

	x = new Float64Array( [ 1.0, -2.0, -4.0, 5.0, 3.0 ] );
	y = new Float64Array( [ 3.0, -2.0, 1.0, -15.0, 3.0 ] );

	z = dsquaredEuclidean( 0, x, 1, y, 1 );
	t.strictEqual( isAlmostSameValue( z, NaN, 0 ), true, 'returns expected value' );

	z = dsquaredEuclidean( -1, x, 1, y, 1 );
	t.strictEqual( isAlmostSameValue( z, NaN, 0 ), true, 'returns expected value' );

	t.end();
});

tape( 'the function supports stride parameters', opts, function test( t ) {
	var x;
	var y;
	var z;

	x = new Float64Array([
		1.0,  // 0
		2.0,
		2.0,  // 1
		-7.0,
		-2.0, // 2
		3.0,
		4.0,  // 3
		2.0
	]);
	y = new Float64Array([
		8.0,  // 0
		-2.0,
		3.0,  // 1
		-2.0,
		7.0,  // 2
		-2.0,
		0.0,  // 3
		-1.0
	]);

	z = dsquaredEuclidean( 4, x, 2, y, 2 );

	// 49+1+81+16 = 147
	t.strictEqual( isAlmostSameValue( z, 147.0, 1 ), true, 'returns expected value' );
	t.end();
});

tape( 'the function supports a negative stride parameters', opts, function test( t ) {
	var x;
	var y;
	var z;

	x = new Float64Array([
		1.0,  // 3
		2.0,
		2.0,  // 2
		-7.0,
		-2.0, // 1
		3.0,
		4.0,  // 0
		2.0
	]);
	y = new Float64Array([
		8.0,  // 3
		-2.0,
		3.0,  // 2
		-2.0,
		7.0,  // 1
		-2.0,
		0.0,  // 0
		-1.0
	]);

	z = dsquaredEuclidean( 4, x, -2, y, -2 );

	// 49+1+81+16 = 147
	t.strictEqual( isAlmostSameValue( z, 147.0, 1 ), true, 'returns expected value' );
	t.end();
});

tape( 'the function supports view offsets', opts, function test( t ) {
	var x0;
	var x1;
	var y0;
	var y1;
	var z;

	x0 = new Float64Array([
		2.0,
		1.0,  // 0
		2.0,
		-2.0, // 1
		-2.0,
		2.0,  // 2
		3.0,
		4.0,  // 3
		6.0
	]);
	y0 = new Float64Array([
		8.0,
		-2.0, // 0
		3.0,
		-2.0, // 1
		7.0,
		-2.0, // 2
		0.0,
		-1.0, // 3
		4.0
	]);
	x1 = new Float64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element
	y1 = new Float64Array( y0.buffer, y0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

	z = dsquaredEuclidean( 4, x1, 2, y1, 2 );

	// 9+0+16+25 = 50
	t.strictEqual( isAlmostSameValue( z, 50.0, 1 ), true, 'returns expected value' );
	t.end();
});
