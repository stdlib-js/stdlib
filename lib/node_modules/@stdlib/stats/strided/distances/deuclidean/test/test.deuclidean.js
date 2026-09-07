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

var tape = require( 'tape' );
var Float64Array = require( '@stdlib/array/float64' );
var sqrt = require( '@stdlib/math/base/special/sqrt' );
var isAlmostSameValue = require( '@stdlib/assert/is-almost-same-value' );
var deuclidean = require( './../lib/deuclidean.js' );


// TESTS //

// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof deuclidean, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 5', function test( t ) {
	t.strictEqual( deuclidean.length, 5, 'returns expected value' );
	t.end();
});

tape( 'the function calculates the Euclidean distance', function test( t ) {
	var x;
	var y;
	var z;

	x = new Float64Array( [ 1.0, -2.0, -4.0, 5.0, 0.0, 3.0 ] );
	y = new Float64Array( [ 5.0, 12.0, -8.0, 15.0, 9.0, 0.0 ] );

	z = deuclidean( x.length, x, 1, y, 1 );
	t.strictEqual( isAlmostSameValue( z, sqrt( 418.0 ), 1 ), true, 'returns expected value' );

	x = new Float64Array( [ -4.0 ] );
	y = new Float64Array( [ 10.0 ] );

	z = deuclidean( x.length, x, 1, y, 1 );
	t.strictEqual( isAlmostSameValue( z, 14.0, 1 ), true, 'returns expected value' );

	x = new Float64Array( [ 1.0e150, 1.0e150, 1.0e150, 1.0e150 ] );
	y = new Float64Array( [ -1.0e150, 1.0e150, -1.0e150, -1.0e150 ] );

	z = deuclidean( x.length, x, 1, y, 1 );
	t.strictEqual( isAlmostSameValue( z, 3.464101615137754e+150, 1 ), true, 'returns expected value' );

	x = new Float64Array( [ 1.0e-155, 1.0e-155, 1.0e-155, 1.0e-155 ] );
	y = new Float64Array( [ -1.0e-155, -1.0e-155, -1.0e-155, -1.0e-155 ] );

	z = deuclidean( x.length, x, 1, y, 1 );
	t.strictEqual( isAlmostSameValue( z, 4.0e-155, 1 ), true, 'returns expected value' );

	x = new Float64Array( [ 1.0e150, 1.0e50, 1.0e150, 1.0e50 ] );
	y = new Float64Array( [ -1.0e150, -1.0e50, -1.0e150, -1.0e50 ] );

	z = deuclidean( x.length, x, 1, y, 1 );
	t.strictEqual( isAlmostSameValue( z, 2.82842712474619e+150, 1 ), true, 'returns expected value' );

	x = new Float64Array( [ 1.0e-155, 1.0e50, 1.0e-155, 1.0e50 ] );
	y = new Float64Array( [ -1.0e-155, -1.0e50, -1.0e-155, -1.0e50 ] );

	z = deuclidean( x.length, x, 1, y, 1 );
	t.strictEqual( isAlmostSameValue( z, 2.8284271247461905e+50, 1 ), true, 'returns expected value' );

	x = new Float64Array( [ 1.4e-154, 1.5e-154, 1.4e-154, 0.0 ] );
	y = new Float64Array( [ -1.4e-154, -1.5e-154, -1.4e-154, 0.0 ] );

	z = deuclidean( x.length, x, 1, y, 1 );
	t.strictEqual( isAlmostSameValue( z, 4.967896939349689e-154, 1 ), true, 'returns expected value' );

	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the function returns `NaN`', function test( t ) {
	var x;
	var y;
	var z;

	x = new Float64Array( [ 1.0, -2.0, -4.0, 5.0, 3.0 ] );
	y = new Float64Array( [ 3.0, -2.0, 1.0, -15.0, 3.0 ] );

	z = deuclidean( 0, x, 1, y, 1 );
	t.strictEqual( isAlmostSameValue( z, NaN, 1 ), true, 'returns expected value' );

	z = deuclidean( -1, x, 1, y, 1 );
	t.strictEqual( isAlmostSameValue( z, NaN, 1 ), true, 'returns expected value' );

	t.end();
});

tape( 'the function supports stride parameters', function test( t ) {
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

	z = deuclidean( 4, x, 2, y, 2 );

	// sqrt( 49+1+81+16 ) = sqrt( 147 )
	t.strictEqual( isAlmostSameValue( z, 12.12435565298214, 1 ), true, 'returns expected value' );
	t.end();
});

tape( 'the function supports a negative stride parameters', function test( t ) {
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

	z = deuclidean( 4, x, -2, y, -2 );

	// sqrt( 49+1+81+16 ) = sqrt( 147 )
	t.strictEqual( isAlmostSameValue( z, 12.12435565298214, 1 ), true, 'returns expected value' );
	t.end();
});

tape( 'the function supports view offsets', function test( t ) {
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

	z = deuclidean( 4, x1, 2, y1, 2 );

	// sqrt( 9+0+16+25 ) = sqrt( 50 )
	t.strictEqual( isAlmostSameValue( z, 7.0710678118654755, 1 ), true, 'returns expected value' );
	t.end();
});
