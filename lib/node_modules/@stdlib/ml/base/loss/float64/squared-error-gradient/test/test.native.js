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
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var isAlmostSameValue = require( '@stdlib/number/float64/base/assert/is-almost-same-value' );
var tryRequire = require( '@stdlib/utils/try-require' );


// FIXTURES //

var tinyPositive = require( './fixtures/julia/tiny_positive.json' );
var smallPositive = require( './fixtures/julia/small_positive.json' );
var tinyNegative = require( './fixtures/julia/tiny_negative.json' );
var smallNegative = require( './fixtures/julia/small_negative.json' );


// VARIABLES //

var squaredErrorGradient = tryRequire( resolve( __dirname, './../lib/native.js' ) );
var opts = {
	'skip': ( squaredErrorGradient instanceof Error )
};


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof squaredErrorGradient, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function computes the squared error loss gradient for tiny positive values', opts, function test( t ) {
	var expected;
	var x;
	var y;
	var p;
	var v;
	var i;

	x = tinyPositive.x;
	y = tinyPositive.y;
	p = tinyPositive.p;
	expected = tinyPositive.expected;
	for ( i = 0; i < y.length; i++ ) {
		v = squaredErrorGradient( x[ i ], y[ i ], p[ i ] );
		t.strictEqual( isAlmostSameValue( v, expected[ i ], 1 ), true, 'returns expected value' );
	}
	t.end();
});

tape( 'the function computes the squared error loss gradient for small positive values', opts, function test( t ) {
	var expected;
	var x;
	var y;
	var p;
	var v;
	var i;

	x = smallPositive.x;
	y = smallPositive.y;
	p = smallPositive.p;
	expected = smallPositive.expected;
	for ( i = 0; i < y.length; i++ ) {
		v = squaredErrorGradient( x[ i ], y[ i ], p[ i ] );
		t.strictEqual( isAlmostSameValue( v, expected[ i ], 1 ), true, 'returns expected value' );
	}
	t.end();
});

tape( 'the function computes the squared error loss gradient for tiny negative values', opts, function test( t ) {
	var expected;
	var x;
	var y;
	var p;
	var v;
	var i;

	x = tinyNegative.x;
	y = tinyNegative.y;
	p = tinyNegative.p;
	expected = tinyNegative.expected;
	for ( i = 0; i < y.length; i++ ) {
		v = squaredErrorGradient( x[ i ], y[ i ], p[ i ] );
		t.strictEqual( isAlmostSameValue( v, expected[ i ], 1 ), true, 'returns expected value' );
	}
	t.end();
});

tape( 'the function computes the squared error loss gradient for small negative values', opts, function test( t ) {
	var expected;
	var x;
	var y;
	var p;
	var v;
	var i;

	x = smallNegative.x;
	y = smallNegative.y;
	p = smallNegative.p;
	expected = smallNegative.expected;
	for ( i = 0; i < y.length; i++ ) {
		v = squaredErrorGradient( x[ i ], y[ i ], p[ i ] );
		t.strictEqual( isAlmostSameValue( v, expected[ i ], 1 ), true, 'returns expected value' );
	}
	t.end();
});

tape( 'the function returns `NaN` if provided `NaN`', opts, function test( t ) {
	var v;

	v = squaredErrorGradient( NaN, 2.0, 0.782 );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	v = squaredErrorGradient( 1.0, NaN, 0.782 );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	v = squaredErrorGradient( 1.0, 2.0, NaN );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	v = squaredErrorGradient( NaN, NaN, NaN );
	t.strictEqual( isnan( v ), true, 'returns expected value' );
	t.end();
});
