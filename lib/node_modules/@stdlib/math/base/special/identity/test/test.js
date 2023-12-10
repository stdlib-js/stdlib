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

var tape = require( 'tape' );
var isPositiveZero = require( '@stdlib/math/base/assert/is-positive-zero' );
var isNegativeZero = require( '@stdlib/math/base/assert/is-negative-zero' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var PINF = require( '@stdlib/constants/float64/pinf' );
var NINF = require( '@stdlib/constants/float64/ninf' );
var identity = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof identity, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function evaluates the identity function when provided a finite number', function test( t ) {
	t.equal( identity( -2.0 ), -2.0, 'returns expected value' );
	t.equal( identity( 3.0 ), 3.0, 'returns expected value' );
	t.end();
});

tape( 'the function evaluates the identity function when provided +-zero', function test( t ) {
	t.equal( isNegativeZero( identity( -0.0 ) ), true, 'returns expected value' );
	t.equal( isPositiveZero( identity( 0.0 ) ), true, 'returns expected value' );
	t.end();
});

tape( 'the function evaluates the identity function when provided +-infinity', function test( t ) {
	t.equal( identity( PINF ), PINF, 'returns expected value' );
	t.equal( identity( NINF ), NINF, 'returns expected value' );
	t.end();
});

tape( 'if provided `NaN`, the function returns `NaN`', function test( t ) {
	var v = identity( NaN );
	t.equal( isnan( v ), true, 'returns NaN' );
	t.end();
});
