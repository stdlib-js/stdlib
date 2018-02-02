/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var isPositiveZero = require( '@stdlib/math/base/assert/is-positive-zero' );
var PINF = require( '@stdlib/constants/math/float64-pinf' );
var NINF = require( '@stdlib/constants/math/float64-ninf' );
var FLOAT64_MAX = require( '@stdlib/constants/math/float64-max' );
var tryRequire = require( '@stdlib/utils/try-require' );


// VARIABLES //

var pdiff = tryRequire( resolve( __dirname, './../lib/native.js' ) );
var opts = {
	'skip': ( pdiff instanceof Error )
};


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof pdiff, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `NaN` if provided a `NaN`', opts, function test( t ) {
	var v;

	v = pdiff( NaN, 3.14 );
	t.strictEqual( isnan( v ), true, 'returns NaN' );

	v = pdiff( 3.14, NaN );
	t.strictEqual( isnan( v ), true, 'returns NaN' );

	v = pdiff( NaN, NaN );
	t.strictEqual( isnan( v ), true, 'returns NaN' );

	t.end();
});

tape( 'the function returns `+infinity` if the first argument is `+infinity`', opts, function test( t ) {
	var v;

	v = pdiff( PINF, 3.14 );
	t.strictEqual( v, PINF, 'returns +infinity' );

	v = pdiff( PINF, NINF );
	t.strictEqual( v, PINF, 'returns +infinity' );

	t.end();
});

tape( 'the function returns `0` if both arguments are `+infinity`', opts, function test( t ) {
	var v = pdiff( PINF, PINF );
	t.strictEqual( isPositiveZero( v ), true, 'returns +0' );
	t.end();
});

tape( 'the function returns positive zero if the difference between the first and second arguments is less than or equal to `0`', opts, function test( t ) {
	var v;

	v = pdiff( +0.0, -0.0 );
	t.strictEqual( isPositiveZero( v ), true, 'returns +0' );

	v = pdiff( -0.0, +0.0 );
	t.strictEqual( isPositiveZero( v ), true, 'returns +0' );

	v = pdiff( -0.0, -0.0 );
	t.strictEqual( isPositiveZero( v ), true, 'returns +0' );

	v = pdiff( +0.0, +0.0 );
	t.strictEqual( isPositiveZero( v ), true, 'returns +0' );

	v = pdiff( 3.14, 3.14 );
	t.strictEqual( isPositiveZero( v ), true, 'returns +0' );

	v = pdiff( 3.14, 4.2 );
	t.strictEqual( isPositiveZero( v ), true, 'returns +0' );

	t.end();
});

tape( 'the function returns the positive difference between `x` and `y`', opts, function test( t ) {
	var v;

	v = pdiff( 4.2, 3.14 );
	t.strictEqual( v, 1.06, 'returns the positive difference' );

	v = pdiff( -4.2, 3.14 );
	t.strictEqual( v, 0.0, 'returns the positive difference' );

	v = pdiff( -4.2, -5.2 );
	t.strictEqual( v, 1.0, 'returns the positive difference' );

	t.end();
});

tape( 'the function returns `+infinity` if overflow occurs', opts, function test( t ) {
	var half;
	var v;

	half = FLOAT64_MAX / 2.0;
	v = pdiff( half, -(half*1.5) );
	t.strictEqual( v, PINF, 'returns +infinity' );

	t.end();
});
