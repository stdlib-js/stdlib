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
var PI = require( '@stdlib/constants/float64/pi' );
var tryRequire = require( '@stdlib/utils/try-require' );


// VARIABLES //

var add5 = tryRequire( resolve( __dirname, './../lib/native.js' ) );
var opts = {
	'skip': ( add5 instanceof Error )
};


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof add5, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function adds five numbers', opts, function test( t ) {
	t.strictEqual( add5( -2.0, 4.0, 3.0, 5.0, 6.0 ), 16.0, 'returns expected value' );
	t.strictEqual( add5( 3.0, 0.0, 2.0, 4.0, 6.0 ), 15.0, 'returns expected value' );
	t.strictEqual( add5( 0.0, -0.0, -0.0, -0.0, -0.0 ), 0.0, 'returns expected value' );
	t.strictEqual( add5( -PI, -PI, -PI, -PI, -PI ), -5.0*PI, 'returns expected value' );
	t.end();
});

tape( 'the function handles negative zeros', opts, function test( t ) {
	t.strictEqual( isNegativeZero( add5( -0.0, -0.0, -0.0, -0.0, -0.0 ) ), true, 'returns expected value' );
	t.strictEqual( isPositiveZero( add5( -0.0, 0.0, -0.0, -0.0, -0.0, -0.0 ) ), true, 'returns expected value' );
	t.strictEqual( isPositiveZero( add5( 0.0, -0.0, -0.0, -0.0, -0.0 ) ), true, 'returns expected value' );
	t.strictEqual( isPositiveZero( add5( 0.0, 0.0, -0.0, -0.0, -0.0 ) ), true, 'returns expected value' );
	t.strictEqual( isPositiveZero( add5( 0.0, -0.0, 0.0, -0.0, -0.0 ) ), true, 'returns expected value' );
	t.strictEqual( isPositiveZero( add5( -0.0, 0.0, 0.0, -0.0, -0.0 ) ), true, 'returns expected value' );
	t.end();
});

tape( 'the function handles infinities', opts, function test( t ) {
	t.strictEqual( add5( PINF, 5.0, 2.0, 1.0, 3.0 ), PINF, 'returns expected value' );
	t.strictEqual( add5( 5.0, PINF, 2.0, 1.0, 3.0 ), PINF, 'returns expected value' );
	t.strictEqual( add5( PINF, PINF, PINF, PINF, PINF ), PINF, 'returns expected value' );

	t.strictEqual( add5( NINF, 5.0, 2.0, 1.0, 3.0 ), NINF, 'returns expected value' );
	t.strictEqual( add5( 5.0, NINF, 2.0, 1.0, 3.0 ), NINF, 'returns expected value' );
	t.strictEqual( add5( NINF, NINF, NINF, NINF, NINF ), NINF, 'returns expected value' );

	t.strictEqual( isnan( add5( NINF, PINF, PINF, NINF, PINF ) ), true, 'returns expected value' );
	t.strictEqual( isnan( add5( PINF, NINF, PINF, NINF, PINF ) ), true, 'returns expected value' );

	t.end();
});

tape( 'if provided a `NaN`, the function returns `NaN`', opts, function test( t ) {
	t.strictEqual( isnan( add5( NaN, 5.0, 2.0, 1.0, 3.0 ) ), true, 'returns expected value' );
	t.strictEqual( isnan( add5( NaN, PINF, PINF, PINF, PINF ) ), true, 'returns expected value' );
	t.strictEqual( isnan( add5( NaN, NINF, NINF, NINF, NINF ) ), true, 'returns expected value' );

	t.strictEqual( isnan( add5( 5.0, NaN, 2.0, 1.0, 3.0 ) ), true, 'returns expected value' );
	t.strictEqual( isnan( add5( PINF, NaN, PINF, PINF, PINF ) ), true, 'returns expected value' );
	t.strictEqual( isnan( add5( NINF, NaN, NINF, NINF, NINF ) ), true, 'returns expected value' );

	t.strictEqual( isnan( add5( 5.0, 2.0, NaN, 1.0, 3.0 ) ), true, 'returns expected value' );
	t.strictEqual( isnan( add5( PINF, PINF, NaN, PINF, PINF ) ), true, 'returns expected value' );
	t.strictEqual( isnan( add5( NINF, NINF, NaN, NINF, NINF ) ), true, 'returns expected value' );

	t.strictEqual( isnan( add5( NaN, NaN, NaN, NaN, NaN ) ), true, 'returns expected value' );

	t.end();
});
