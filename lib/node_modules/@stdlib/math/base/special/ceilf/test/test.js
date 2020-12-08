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

var tape = require( 'tape' );
var PINF = require( '@stdlib/constants/math/float32-pinf' );
var NINF = require( '@stdlib/constants/math/float32-ninf' );
var isnanf = require( '@stdlib/math/base/assert/is-nanf' );
var isNegativeZerof = require( '@stdlib/math/base/assert/is-negative-zerof' );
var isPositiveZerof = require( '@stdlib/math/base/assert/is-positive-zerof' );
var ceilf = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof ceilf, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns the largest integer greater than or equal to a given number', function test( t ) {
	t.strictEqual( ceilf( -4.2 ), -4.0, 'equals -4' );
	t.strictEqual( ceilf( 9.99999 ), 10.0, 'equals 10' );
	t.strictEqual( ceilf( 0.0 ), 0.0, 'equals 0' );
	t.end();
});

tape( 'the function returns `NaN` if provided a `NaN`', function test( t ) {
	var val = ceilf( NaN );
	t.strictEqual( isnanf( val ), true, 'returns NaN' );
	t.end();
});

tape( 'the function returns `-0` if provided `-0`', function test( t ) {
	var val = ceilf( -0.0 );
	t.strictEqual( isNegativeZerof( val ), true, 'returns -0' );
	t.end();
});

tape( 'the function returns `+0` if provided `+0`', function test( t ) {
	var val = ceilf( +0.0 );
	t.strictEqual( isPositiveZerof( val ), true, 'returns +0' );
	t.end();
});

tape( 'the function returns `+infinity` if provided `+infinity`', function test( t ) {
	var val = ceilf( PINF );
	t.strictEqual( val, PINF, 'returns +infinity' );
	t.end();
});

tape( 'the function returns `-infinity` if provided `-infinity`', function test( t ) {
	var val = ceilf( NINF );
	t.strictEqual( val, NINF, 'returns -infinity' );
	t.end();
});
