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
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var tryRequire = require( '@stdlib/utils/try-require' );
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

tape( 'if provided `NaN` for any parameter, the function returns `NaN`', opts, function test( t ) {
	var v = kurtosis( NaN, 0.5 );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	v = kurtosis( 10.0, NaN );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	t.end();
});

tape( 'if provided a `k` that is not a positive integer, the function returns `NaN`', opts, function test( t ) {
	var y;

	y = kurtosis( 0.0, 2.0 );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	y = kurtosis( -1.0, 2.0 );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	t.end();
});

tape( 'if provided `lambda <= 0`, the function returns `NaN`', opts, function test( t ) {
	var y;

	y = kurtosis( 2, -1.0 );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	y = kurtosis( 1, NINF );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	y = kurtosis( 2, -2.0 );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	y = kurtosis( 8, NINF );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	y = kurtosis( 3, -1.5 );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	t.end();
});

tape( 'the function returns the excess kurtosis of an Erlang distribution', opts, function test( t ) {
	var expected;
	var lambda;
	var k;
	var i;
	var y;

	expected = data.expected;
	k = data.k;
	lambda = data.lambda;
	for ( i = 0; i < expected.length; i++ ) {
		y = kurtosis( k[i], lambda[i] );
		t.strictEqual( y, expected[i], 'k: '+k[i]+', lambda: '+lambda[i]+', y: '+y+', expected: '+expected[i] );
	}
	t.end();
});
