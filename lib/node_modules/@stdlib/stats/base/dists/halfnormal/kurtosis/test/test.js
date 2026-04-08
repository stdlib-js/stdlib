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
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var NINF = require( '@stdlib/constants/float64/ninf' );
var kurtosis = require( './../lib' );


// FIXTURES //

var data = require( './fixtures/python/data.json' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof kurtosis, 'function', 'main export is a function' );
	t.end();
});

tape( 'if provided `NaN`, the function returns `NaN`', function test( t ) {
	var y = kurtosis( NaN );
	t.strictEqual( isnan( y ), true, 'returns expected value' );
	t.end();
});

tape( 'if provided `sigma <= 0`, the function returns `NaN`', function test( t ) {
	var y;

	y = kurtosis( 0.0 );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	y = kurtosis( -1.0 );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	y = kurtosis( NINF );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	t.end();
});

tape( 'the function returns the excess kurtosis', function test( t ) {
	var expected;
	var sigma;
	var y;
	var i;

	expected = data.expected;
	sigma = data.sigma;
	for ( i = 0; i < sigma.length; i++ ) {
		y = kurtosis( sigma[i] );
		t.equal( y, expected[i], 'sigma: '+sigma[i]+'. E: '+expected[i] );
	}
	t.end();
});
