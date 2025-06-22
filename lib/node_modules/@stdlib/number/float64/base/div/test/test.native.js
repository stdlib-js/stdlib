/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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
var isNegativeZero = require( '@stdlib/math/base/assert/is-negative-zero' );
var isPositiveZero = require( '@stdlib/math/base/assert/is-positive-zero' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var PINF = require( '@stdlib/constants/float64/pinf' );
var NINF = require( '@stdlib/constants/float64/ninf' );
var tryRequire = require( '@stdlib/utils/try-require' );


// VARIABLES //

var div = tryRequire( resolve( __dirname, './../lib/native.js' ) );
var opts = {
	'skip': ( div instanceof Error )
};


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof div, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function divides two numbers', opts, function test( t ) {
	t.strictEqual( div( -2.0, 4.0 ), -0.5, 'returns expected value' );
	t.strictEqual( div( 2.0, -4.0 ), -0.5, 'returns expected value' );
	t.strictEqual( div( 3.0, 3.0 ), 1.0, 'returns expected value' );
	t.strictEqual( div( -9.0, -3.0 ), 3.0, 'returns expected value' );
	t.strictEqual( isNegativeZero( div( 0.0, -5.0 ) ), true, 'returns expected value' );
	t.strictEqual( isPositiveZero( div( 0.0, 5.0 ) ), true, 'returns expected value' );
	t.end();
});

tape( 'the function handles division by zero', opts, function test( t ) {
	t.strictEqual( isnan( div( 0.0, 0.0 ) ), true, 'returns expected value' );
	t.strictEqual( isnan( div( -0.0, -0.0 ) ), true, 'returns expected value' );
	t.strictEqual( isnan( div( -0.0, 0.0 ) ), true, 'returns expected value' );
	t.strictEqual( isnan( div( 0.0, -0.0 ) ), true, 'returns expected value' );

	t.strictEqual( div( 5.0, 0.0 ), PINF, 'returns expected value' );
	t.strictEqual( div( PINF, 0.0 ), PINF, 'returns expected value' );
	t.strictEqual( div( NINF, 0.0 ), NINF, 'returns expected value' );

	t.strictEqual( div( 5.0, -0.0 ), NINF, 'returns expected value' );
	t.strictEqual( div( PINF, -0.0 ), NINF, 'returns expected value' );
	t.strictEqual( div( NINF, -0.0 ), PINF, 'returns expected value' );

	t.end();
});

tape( 'the function handles signed zeros', opts, function test( t ) {
	t.strictEqual( isPositiveZero( div( -0.0, -5.0 ) ), true, 'returns expected value' );
	t.strictEqual( isNegativeZero( div( -0.0, 5.0 ) ), true, 'returns expected value' );
	t.strictEqual( isNegativeZero( div( 0.0, -5.0 ) ), true, 'returns expected value' );
	t.strictEqual( isPositiveZero( div( 0.0, 5.0 ) ), true, 'returns expected value' );
	t.end();
});

tape( 'the function handles infinities', opts, function test( t ) {
	t.strictEqual( div( PINF, 5.0 ), PINF, 'returns expected value' );
	t.strictEqual( isPositiveZero( div( 5.0, PINF ) ), true, 'returns expected value' );
	t.strictEqual( isnan( div( PINF, PINF ) ), true, 'returns expected value' );

	t.strictEqual( div( NINF, 5.0 ), NINF, 'returns expected value' );
	t.strictEqual( isNegativeZero( div( 5.0, NINF ) ), true, 'returns expected value' );
	t.strictEqual( isnan( div( NINF, NINF ) ), true, 'returns expected value' );

	t.strictEqual( isnan( div( NINF, PINF ) ), true, 'returns expected value' );
	t.strictEqual( isnan( div( PINF, NINF ) ), true, 'returns expected value' );

	t.end();
});

tape( 'if provided a `NaN`, the function returns `NaN`', opts, function test( t ) {
	t.strictEqual( isnan( div( NaN, 5.0 ) ), true, 'returns expected value' );
	t.strictEqual( isnan( div( NaN, PINF ) ), true, 'returns expected value' );
	t.strictEqual( isnan( div( NaN, NINF ) ), true, 'returns expected value' );

	t.strictEqual( isnan( div( 5.0, NaN ) ), true, 'returns expected value' );
	t.strictEqual( isnan( div( PINF, NaN ) ), true, 'returns expected value' );
	t.strictEqual( isnan( div( NINF, NaN ) ), true, 'returns expected value' );

	t.strictEqual( isnan( div( NaN, NaN ) ), true, 'returns expected value' );

	t.end();
});
