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
var isPositiveZerof = require( '@stdlib/math/base/assert/is-positive-zerof' );
var isNegativeZerof = require( '@stdlib/math/base/assert/is-negative-zerof' );
var isnanf = require( '@stdlib/math/base/assert/is-nanf' );
var PINF = require( '@stdlib/constants/math/float32-pinf' );
var NINF = require( '@stdlib/constants/math/float32-ninf' );
var tryRequire = require( '@stdlib/utils/try-require' );


// VARIABLES //

var invf = tryRequire( resolve( __dirname, './../lib/native.js' ) );
var opts = {
	'skip': ( invf instanceof Error )
};


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof invf, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function computes the multiplicative inverse of a number', opts, function test( t ) {
	t.strictEqual( invf( -2.0 ), -0.5, 'negative number' );
	t.strictEqual( invf( 4.0 ), 1.0/4.0, 'positive number' );
	t.end();
});

tape( 'the function computes the multiplicative inverse of negative infinity', opts, function test( t ) {
	t.strictEqual( isNegativeZerof( invf( NINF ) ), true, 'returns negative zero' );
	t.end();
});

tape( 'the function computes the multiplicative inverse of positive infinity', opts, function test( t ) {
	t.strictEqual( isPositiveZerof( invf( PINF ) ), true, 'returns positive zero' );
	t.end();
});

tape( 'the function computes the multiplicative inverse of positive zero', opts, function test( t ) {
	t.strictEqual( invf( 0.0 ), PINF, 'returns expected value' );
	t.end();
});

tape( 'the function computes the multiplicative inverse of negative zero', opts, function test( t ) {
	t.strictEqual( invf( -0.0 ), NINF, 'returns expected value' );
	t.end();
});

tape( 'if provided `NaN`, the function returns `NaN`', opts, function test( t ) {
	var v = invf( NaN );
	t.strictEqual( isnanf( v ), true, 'returns NaN' );
	t.end();
});
