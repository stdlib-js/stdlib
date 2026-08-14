/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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
var tryRequire = require( '@stdlib/utils/try-require' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var NINF = require( '@stdlib/constants/float64/ninf' );


// FIXTURES //

var data = require( './fixtures/julia/data.json' );


// VARIABLES //

var kurtosis = tryRequire( resolve( __dirname, './../lib/native.js' ) );
var opts = {
	'skip': ( kurtosis instanceof Error )
};


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof kurtosis, 'function', 'main export is a function' );
	t.end();
});

tape( 'if provided `NaN` for `sigma`, the function returns `NaN`', opts, function test( t ) {
	var sigma = kurtosis( NaN );
	t.strictEqual( isnan( sigma ), true, 'returns expected value' );
	t.end();
});

tape( 'if provided a scale `sigma` that is not a nonnegative number, the function returns `NaN`', opts, function test( t ) {
	var sigma;

	sigma = kurtosis( -1.0 );
	t.strictEqual( isnan( sigma ), true, 'returns expected value' );

	sigma = kurtosis( NINF );
	t.strictEqual( isnan( sigma ), true, 'returns expected value' );

	t.end();
});

tape( 'the function returns the excess kurtosis of a Rayleigh distribution', opts, function test( t ) {
	var expected;
	var sigma;
	var i;
	var y;

	expected = data.expected;
	sigma = data.sigma;
	for ( i = 0; i < expected.length; i++ ) {
		y = kurtosis( sigma[i] );
		t.strictEqual( y, expected[i], 'sigma: '+sigma[i]+', y: '+y+', expected: '+expected[i] );
	}
	t.end();
});
